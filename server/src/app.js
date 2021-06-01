const express = require("express");
const path = require("path");
const { CorsMiddleware, NotFoundMiddleWare, ErrroHandlerMiddleware } = require("./middlewares");
const quizRouter = require('./routes/quiz.route')


const app = express();

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle CORS
app.use(CorsMiddleware);

app.use('/quiz', quizRouter);

// Overide 404 middleware
app.use(NotFoundMiddleWare);

// Centralized error handler middleware
app.use(ErrroHandlerMiddleware)

module.exports = app;
