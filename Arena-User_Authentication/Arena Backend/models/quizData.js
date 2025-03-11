const mongoose = require("mongoose");
const Joi = require("joi");

// Define Mongoose Schema
const QuizDataSchema = new mongoose.Schema({
  quizCode: { type: String, required: true }, // String for flexibility
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }, // Added missing comma
  options: [{ type: Number, required: true }], // Ensure options are stored as numbers
  marks: { type: Number, required: true, min: 0 }, // Ensured marks cannot be negative
});

// Create Mongoose Model
const QuizData = mongoose.model("quizData", QuizDataSchema);

// Joi Validation Function
const validate = (data) => {
  const schema = Joi.object({
    quizCode: Joi.string().required().label("Quiz Code"),
    userId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/) // Ensures it's a valid MongoDB ObjectId
      .required()
      .label("User ID"),
    options: Joi.array()
      .items(Joi.number().required()) // Ensure options are numbers
      .min(2) // Ensure at least 2 options are provided
      .label("Options"),
    marks: Joi.number().integer().min(0).required().label("Marks"),
  });

  return schema.validate(data);
};

// Export Quiz model and validation function
module.exports = { QuizData, validate };
