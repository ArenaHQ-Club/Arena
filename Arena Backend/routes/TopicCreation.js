const router = require("express").Router();
const { Router } = require("express");
const { Topics, validate } = require("../models/topics");

router.post("/topics", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    await new Topics({ ...req.body }).save();

    res.status(200).send("topic create succesfully");
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

router.get("/topics", async (req, res) => {
  try {
    // Query to find all topics and return only their names
    const topics = await Topics.find().select("name -_id");
    res.status(200).send(topics);
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
