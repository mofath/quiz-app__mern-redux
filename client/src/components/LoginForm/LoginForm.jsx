import { useRef, useState } from "react";
import Card from '../Card'
import classes from "./LoginForm.module.css";

const LoginForm = ({ login }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputRef.current.value) setError(true);
    else {
      setError(false);
      login();
    }
  };

  return (
    <Card>
      <form className={classes.Form}>
        <div className={classes.FormGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={inputRef}
            placeholder="Please enter your name"
          />
          {error && <small>Please enter your name</small>}
        </div>

        <div className={classes.FormGroup}>
          <button onClick={handleSubmit}>Start</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
