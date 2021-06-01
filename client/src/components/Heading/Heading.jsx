import classes from "./Heading.module.css";

const Heading = ({ children }) => (
  <div className={classes.Heading}>
    <h2>{children}</h2>
  </div>
);

export default Heading;