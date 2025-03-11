const mongoose = require("mongoose");
const Joi = require("joi");
const { ObjectId } = mongoose.Schema.Types;

// Define Mongoose Schema
const QuizSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  questions: [{ type: ObjectId, ref: "quizQuestions", required: true }], // Referencing QuizQuestions
  totalMarks: { type: Number, required: true, min: 1 },
});

// Create Mongoose Model
const Quiz = mongoose.model("quiz", QuizSchema);

// Joi Validation Function
const validate = (data) => {
  const schema = Joi.object({
    code: Joi.string().required().label("Code"),
    questions: Joi.array()
      .items(
        Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .optional()
      ) // Ensures valid ObjectIds
      .label("Questions"),
    totalMarks: Joi.number().integer().min(1).required().label("Total Marks"),
  });

  return schema.validate(data);
};

// Export Quiz model and validation function
module.exports = { Quiz, validate };
