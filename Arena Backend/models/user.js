const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  team: { type: String },
  password: { type: String, required: true },
  bio: { type: String },
  course: { type: String, required: true },
});

//for authentication purposes
userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY);
  return token;
};

const User = mongoose.model("user", userSchema);

//to check if data is matching our schema
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email: "),
    username: Joi.string().label("Username: "),
    team: Joi.string().label("Team"),
    password: passwordComplexity().required().label("Password: "),
    bio: Joi.string().label("Bio: "),
    course: Joi.string().label("Course: "),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
