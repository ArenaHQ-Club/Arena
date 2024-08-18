const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  password: { type: String, required: true },
  location: { type: String },
  college: { type: String, required: true },
  socials: {
    type: Map,
    of: String,

    default: {
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
    },
  },
  solved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  done: {
    type: Map,
    of: Number,

    default: {
      rookie: "",
      warrior: "",
      veteran: "",
      placement: "",
    },
  },
});

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true },
//   team: { type: mongoose.Schema.Types.ObjectId },
//   password: { type: String, required: true },
//   location: { type: String },
//   college: { type: String, required: true },
//   socials: {
//     type: Map,
//     of: String,
//     required: true,
//     default: {
//       github: "",
//       linkedin: "",
//       twitter: "",
//       website: "",
//     },
//   },
//   solved:
// });

//for authentication purposes
userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY);
  return token;
};

const User = mongoose.model("user", userSchema);

//to check if data is matching our schema
// const validate = (data) => {
//   const schema = Joi.object({
//     email: Joi.string().email().required().label("Email: "),
//     username: Joi.string().label("Username: "),
//     team: Joi.string().label("Team"),
//     password: passwordComplexity().required().label("Password: "),
//     bio: Joi.string().label("Bio: "),
//     course: Joi.string().label("Course: "),
//     location: Joi.string().label("Location: "), // Add this line
//     college: Joi.string().label("College: "), // Add this line if needed
//     socials: Joi.object({
//       // Add validation for socials if needed
//       github: Joi.string().label("GitHub: "),
//       linkedin: Joi.string().label("LinkedIn: "),
//       twitter: Joi.string().label("Twitter: "),
//       website: Joi.string().label("Website: "),
//     }).label("Socials: "),
//   });
//   return schema.validate(data);
// };

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email: "),
    username: Joi.string().required().label("Username: "),
    team: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .label("Team"), // Validate ObjectId format
    password: passwordComplexity().required().label("Password: "),
    location: Joi.string().allow("").label("Location: "),
    college: Joi.string().required().label("College: "),
    socials: Joi.object({
      github: Joi.string().allow("").label("GitHub: "),
      linkedin: Joi.string().allow("").label("LinkedIn: "),
      twitter: Joi.string().allow("").label("Twitter: "),
      website: Joi.string().allow("").label("Website: "),
    })
      .default({
        github: "",
        linkedin: "",
        twitter: "",
        website: "",
      })
      .label("Socials: "),
    solved: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .label("Solved: "), // Validate array of ObjectId
    done: Joi.object({
      rookie: Joi.number().default(0),
      warrior: Joi.number().default(0),
      veteran: Joi.number().default(0),
      placement: Joi.number().default(0),
    }).label("Done: "),
  });

  return schema.validate(data);
};

module.exports = { User, validate };
