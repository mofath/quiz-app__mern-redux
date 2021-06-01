const express = require("express");

const router = express.Router();

const quizController = require("../controllers/quiz.controller");

router.get("/", quizController.getQuiz);


module.exports = router;