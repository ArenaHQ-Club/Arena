const router = require("express").Router();
const { Router } = require("express");
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

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
    console.log("h2");
    await new User({ ...req.body, password: hashPassword }).save();
    console.log("h1");
    res.status(200).send("User create succesfully");
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
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

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in Succesfully" });
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
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
