import propTypes from "prop-types";
import styles from "./Template.module.css";

export default function Template({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Template.propTypes = {
  children: propTypes.element,
};
