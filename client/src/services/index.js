import QuizService from './QuizService';
import HttpClient from './HttpClient';

const configureQuizService = () => {
  const httpClient = HttpClient();

  return QuizService(httpClient);
};

const configureServices = () => {
  const quizService = configureQuizService();

  return { quizService };
}

export default configureServices;

