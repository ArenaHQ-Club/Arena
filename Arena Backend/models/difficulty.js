const mongoose = require("mongoose");
const Joi = require("joi");

const DifficultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  topics: [{ type: mongoose.Schema.Types.ObjectId, ref: "topics" }],
});

const Difficulty = mongoose.model("difficulty", DifficultySchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("name"),
    topics: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .label("Topics"),
  });

  return schema.validate(data);
};

module.exports = { Difficulty, validate };
