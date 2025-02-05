const mongoose = require("mongoose");
const Joi = require("joi");

// Define Mongoose Schema
const QuizQuestionsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  questions: { type: String, required: true },
  option: [{ type: String, required: true }],
  answer: { type: Number, required: true, min: 0 },
});

// Create Mongoose Model
const QuizQuestions = mongoose.model("quizQuestions", QuizQuestionsSchema);

// Joi Validation Function
const validate = (data) => {
  const schema = Joi.object({
    type: Joi.string().required().label("Type"),
    questions: Joi.string().required().label("Question"),
    option: Joi.array()
      .items(Joi.string().required())
      .min(2) // Ensure at least 2 options are present
      .label("Options"),
    answer: Joi.number()
      .integer()

      .required()
      .label("Answer"),
  });

  return schema.validate(data);
};

// Export Quiz model and validation function
module.exports = { QuizQuestions, validate };
