import { Card, Heading } from "../../components";
import { useLocation } from "react-router-dom";

const Result = (props) => {
  const location = useLocation();

  console.log(props);
  return (
    <div>
      <Card>
        <Heading>Your Score is&nbsp;:</Heading>&nbsp;&nbsp;&nbsp;&nbsp;
        <Heading>
          <span style={{ color: "yellow" }}>
            {location.state.score || null}{" "}
          </span>
        </Heading>
      </Card>
    </div>
  );
};

export default Result;
