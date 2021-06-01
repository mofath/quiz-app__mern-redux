import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.Navbar}>
      <Link>Quiz App</Link>
    </header>
  );
};

export default Navbar;
