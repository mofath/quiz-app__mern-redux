const quizService = require("../services/quiz.service");
const { HttpStatusCode, quizMessages } = require("../constant");
const { Error500} = require('../lib/httpError')


module.exports.getQuiz = async (req, res, next) => {
    console.log("quizController: getQuiz");

    try {        
        const quiz = await quizService.getQuiz();

        return res.status(HttpStatusCode.OK.statusCode).json({
            message: quizMessages.QUIZ_GENERATED,
            quiz: quiz,
            sucess: true,
        });

    } catch (err) {
        console.log('Something went wrong: QuizController: getQuiz:', err.message);
        next(new Error500(err.stack, err.message));
    }
};
