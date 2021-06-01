import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useAction";
import { Question, Heading } from "../../components";
import classes from "./Quiz.module.css";

const Quiz = () => {
  const history = useHistory();
  const { nextQuest, selectAnswer, quitQuiz } = useActions();
  const { quiz, curIndex, selectedAns, score } = useSelector(
    (state) => state.quiz
  );

  const handleNext = () => {
    if (curIndex === quiz.length - 1) {

      const quizSore = Object.values(score).reduce((acc, cur) => acc + cur, 0);

      quitQuiz();

      history.push({
        pathname: "/result",
        state: { score: quizSore },
      });
      
    } else {
      nextQuest();
    }
  };

  const handleSelect = (answer) => {
    selectAnswer(answer);
  };

  const handleQuit = () => {
    quitQuiz();
  };

  return (
    <div>
      <Heading>
        {quiz.length > 0 ? `${curIndex + 1} / ${quiz.length}` : null}
      </Heading>
      {quiz.length > 0 ? (
        <>
          <Question
            ques={quiz[curIndex]}
            handleSelect={handleSelect}
            selectedAns={selectedAns}
          />
          <div className={classes.Controls}>
            <button className={classes.QuitBtn} onClick={handleQuit}>
              Quit
            </button>
            <button
              className={[classes.NextBtn]}
              disabled={!selectedAns}
              onClick={handleNext}
            >
              {curIndex === quiz.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Heading>LOADING..</Heading>
      )}
    </div>
  );
};

export default Quiz;
