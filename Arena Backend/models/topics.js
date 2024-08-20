const mongoose = require("mongoose");

const Joi = require("joi");

const topicsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "questions" }],
});

const Topics = mongoose.model("topics", topicsSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("name"),
    questions: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .label("Questions"),
  });

  return schema.validate(data);
};

module.exports = { Topics, validate };
