const mongoose = require("mongoose");

const Joi = require("joi");

const teamSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  name: { type: String, required: true },
  points: Number,
});

const Team = mongoose.model("team", teamSchema);

const validate = (data) => {
  const schema = Joi.object({
    members: Joi.array()
      .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
      .label("Members"),
    name: Joi.string().required().label("teamName"),
    points: Joi.number().default(0),
  });

  return schema.validate(data);
};

module.exports = { Team, validate };
