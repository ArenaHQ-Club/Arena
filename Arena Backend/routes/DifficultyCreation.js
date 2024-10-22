const router = require("express").Router();
const { Difficulty } = require("../models/difficulty");
const { Topics } = require("../models/topics");

router.get("/difficulty/:id", async (req, res) => {
  try {
    // Step 1: Fetch the Difficulty document by ID
    const difficulty = await Difficulty.findById(req.params.id).populate({
      path: "topics",
      populate: {
        path: "questions",
        model: "questions",
      },
    });

    if (!difficulty) {
      return res.status(404).send({ message: "Difficulty not found" });
    }

    // Step 2: Format the data
    const result = difficulty.topics.map((topic) => ({
      id: topic._id,
      topicName: topic.name,
      questions: topic.questions.map((question) => ({
        questionLink: question.questionLink,
        question: question.question,
        difficulty: question.difficulty,
      })),
    }));

    // Step 3: Send the formatted response
    res.status(200).send(result);
  } catch (err) {
    console.error("Error encountered:", err);
    res.status(500).send({ message: "Internal Server error" });
  }
});

module.exports = router;
