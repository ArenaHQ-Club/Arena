const router = require("express").Router();
const { Router } = require("express");
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const { Questions } = require("../models/questions");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(409).send({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_PRIVATE_KEY
    );

    res.cookie("token", token, { httpOnly: true });

    return res.send(token);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid User login info" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_PRIVATE_KEY);
    res.cookie("token", token, { httpOnly: true });
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

router.get("/users/:id/questions", async (req, res) => {
  try {
    // Find the user by ID and populate the solved questions

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Return only the solved questions
    res.status(200).send(user.solved);
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

router.post("/users/:id/solved", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const question = await Questions.findById(req.body.questionId);

    if (!question) {
      return res.status(404).send({ message: "Question not found" });
    }

    if (user.solved.includes(question._id)) {
      return res.status(400).send({ message: "Question already solved" });
    }

    user.solved.push(question._id);

    await user.save();

    res.status(200).send({ message: "Question added to solved" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error", error: err.message });
  }
});

const loginValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email: "),
    password: passwordComplexity().required().label("Password: "),
  });
  return schema.loginValidate(data);
};

module.exports = router;
