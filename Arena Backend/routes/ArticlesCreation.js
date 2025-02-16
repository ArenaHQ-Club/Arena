const router = require("express").Router();

const { Article, validateArticle } = require("../models/articles");
const { Questions, validate } = require("../models/questions");
router.post("/article", async (req, res) => {
  try {
    const { error } = validateArticle(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // await new Questions({ ...req.body }).save();

    const article = new Article({ ...req.body });

    await article.save();

    res.status(200).send("Article created succesfully");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/article/:questionId", async (req, res) => {
  try {
    const article = await Article.findOne({
      questionId: req.params.questionId,
    });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: "Error fetching article" });
  }
});

// router.post("/article/id", async (req, res) => {
//   try {
//     const { ques } = req.body;
//     console.log("1");
//     if (!ques) {
//       return res.status(400).json({ error: "Question text is required" });
//     }

//     if (ques) {
//       console.log("2");
//       let que = await Question.findOne({ question: ques });
//       console.log(que);
//       if (!que) {
//         return res.status(404).send({ message: "No such question exists." });
//       }
//       console.log("3");

//       res.status(200).send(que._id);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching questionId" });
//   }
// });

router.post("/article/id", async (req, res) => {
  try {
    const { ques } = req.body;

    if (!ques) {
      return res.status(400).json({ error: "Question text is required" });
    }

    let que = await Questions.findOne({ question: ques });

    if (!que) {
      return res.status(404).send({ message: "No such question exists." });
    }

    res.status(200).send({ questionId: que._id });
  } catch (error) {
    res.status(500).json({ error: "Error fetching questionId" });
  }
});

module.exports = router;
