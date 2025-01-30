const mongoose = require("mongoose");
const Joi = require("joi");

const ArticleSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  title: { type: String, required: true },
  article: { type: String, required: true },
});

const Article = mongoose.model("Article", ArticleSchema);

const validateArticle = (data) => {
  const schema = Joi.object({
    questionId: Joi.string().required().label("Question ID"),
    title: Joi.string().required().label("Title"),
    article: Joi.string().required().label("Article Content"),
  });

  return schema.validate(data);
};

module.exports = { Article, validateArticle };
