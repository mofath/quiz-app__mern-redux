import { Provider } from "react-redux";
import { store } from "../state";
import { Footer, Navbar } from "../components";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className={classes.Page}>
        <Navbar />
        <main className={classes.Screen}>{children}</main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
