const mongoose = require("mongoose");

const Joi = require("joi");

const questionSchema = new mongoose.Schema({
  questionLink: { type: String, required: true },
  question: { type: String, required: true, unique: true },
});

const Questions = mongoose.model("questions", questionSchema);

const validate = (data) => {
  const schema = Joi.object({
    questionLink: Joi.string().required().label("link"),
    question: Joi.string().required().label("question"),
    topic: Joi.string().optional().label("Topic"),
  });

  return schema.validate(data);
};

module.exports = { Questions, validate };
