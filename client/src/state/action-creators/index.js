import ActionType from "../action-types";
import services from '../../services';

export const getQuiz = () => {
  return async (dispatch) => {
    //reinitialize state
    dispatch({ type: ActionType.QUIT_QUIZ, });

    try {
      const { quiz } = await services().quizService.getQuiz("/quiz");

      dispatch({
        type: ActionType.START_QUIZ_SUCCESS,
        payload: quiz,
      });

    } catch (err) {
      dispatch({
        type: ActionType.START_QUIZ_ERROR,
        payload: err.message,
      });
    }
  };
};

export const nextQuest = () => {
  return (dispatch) => {
    dispatch({ type: ActionType.NEXT_QUEST, });
  };
};


export const selectAnswer = (answer) => {
  return (dispatch) => {
    dispatch({ type: ActionType.SELECT_ANSWER, payload: answer });
  };
};


export const quitQuiz = () => {
  return async (dispatch) => {
    dispatch({ type: ActionType.QUIT_QUIZ, });
  };
};