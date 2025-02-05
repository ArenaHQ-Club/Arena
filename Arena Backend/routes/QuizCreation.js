const express = require("express");
const { Quiz, validate: validate } = require("../models/Quiz");
const { QuizData, validate: validateQuizData } = require("../models/QuizData");
const {
  QuizQuestions,
  validate: validateQuizQuestions,
} = require("../models/QuizQuestions");
const router = require("express").Router();

router.post("/quiz", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Create a new Quiz Question
router.post("/quizQuestions", async (req, res) => {
  const { quizCode, ...questionData } = req.body; // Extract quizCode from request body

  const { error } = validateQuizQuestions(questionData);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    // Create and save the new question
    const question = new QuizQuestions(questionData);
    await question.save();

    // Find the quiz with the given quizCode
    const quiz = await Quiz.findOne({ code: quizCode });

    if (!quiz) {
      return res.status(404).json({ error: "Quiz with this code not found" });
    }

    // Add the question's ObjectId to the quiz
    quiz.questions.push(question._id);
    await quiz.save();

    res.status(201).json({ message: "Question added to quiz", question });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  POST: Submit QuizData (User Answers & Marks)
router.post("/quizData", async (req, res) => {
  const { error } = validateQuizData(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const quizData = new QuizData(req.body);
    await quizData.save();
    res.status(201).json(quizData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET: Fetch all Quizzes
router.get("/quiz", async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate("questions");
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET: Fetch a specific Quiz by Code
router.get("/quiz/:code", async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ code: req.params.code }).populate(
      "questions"
    );
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET: Fetch all QuizData (User Submissions)
router.get("/quizData", async (req, res) => {
  try {
    const quizData = await QuizData.find().populate("userId");
    res.status(200).json(quizData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
