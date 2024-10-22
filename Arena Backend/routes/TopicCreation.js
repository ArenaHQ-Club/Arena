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

router.get("/topics/:id", async (req, res) => {
  try {
    const topicId = req.params.id;

    // Find the topic by ID and populate questions (assuming a 'questions' field exists)
    const topic = await Topics.findById(topicId).populate("questions");

    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }

    // Send back the list of questions
    res.status(200).json(topic.questions);
  } catch (error) {
    console.error("Error fetching topic questions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
