const QuizService = (httpClient) => {

    const getQuiz = async () => {

        const { data } = await httpClient.get('quiz');
        return data;
    };

    return Object.freeze({
        getQuiz
    });
};

export default QuizService;
