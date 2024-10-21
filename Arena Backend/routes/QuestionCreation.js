const router = require("express").Router();

const { Questions, validate } = require("../models/questions");
const { Topics } = require("../models/topics");
router.post("/question", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // await new Questions({ ...req.body }).save();

    const question = new Questions({ ...req.body });

    await question.save();

    const topicName = req.body.topic;

    if (topicName) {
      let topic = await Topics.findOne({ name: topicName });
      if (!topic) {
        return res.status(404).send({ message: "No such topic exists." });
      }

      // Add the question ID to the topic's questions array
      topic.questions.push(question._id);
      await topic.save();
    }

    res
      .status(200)
      .send("Question created and associated with topic successfully");
  } catch (err) {
    res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
