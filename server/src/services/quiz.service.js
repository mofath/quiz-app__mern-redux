const { QuestionModel } = require("../models/question.model");

module.exports.getQuiz = async () => {
    console.log("quizService: getQuiz");

    try {
        const questions = await QuestionModel.aggregate([{ $sample: { size: 5 } }]);

        return questions.map((ques) => {
            return {
                id: ques._id,
                question: ques.question,
                answers:[ ...ques.answers],
            }
        });
        
    } catch (error) {
        console.log("Something went wrong: Service: getQuiz", error);
        throw new Error(error);
    }
};