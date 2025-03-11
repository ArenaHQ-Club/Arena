const router = require("express").Router();

const { Article, validateArticle } = require("../models/articles");

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

module.exports = router;
