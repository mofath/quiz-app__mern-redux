import { useHistory } from "react-router";
import { useActions } from "../../hooks/useAction";
import { Heading, LoginForm } from "../../components";

const Landing = () => {
  const history = useHistory();
  const { getQuiz } = useActions();

  const login = () => {
    history.replace("/quiz");
    getQuiz();
  };

  return (
    <div>
      <Heading> Welcome, Start Quiz! </Heading>
      <LoginForm login={login} />
    </div>
  );
};

export default Landing;
