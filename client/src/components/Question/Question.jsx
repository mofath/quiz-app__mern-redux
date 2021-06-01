import { Card, Heading } from "../";
import classes from "./Question.module.css";

const Question = ({ ques, handleSelect, selectedAns }) => {
  return (
    <Card>
      <div className={classes.Question}>
        <div className={classes.QuestionBody}>
          <Heading>{ques.question}</Heading>
          <div className={classes.OptionsContainer}>
            {ques?.answers.map((item) => (
              <button
                className={[
                  classes.Option,
                  selectedAns === item.answer && classes.Select,
                ].join(" ")}
                key={item.answer}
                onClick={() => handleSelect(item)}
              >
                {item.answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Question;
