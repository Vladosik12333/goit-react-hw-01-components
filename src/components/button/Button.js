import propTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ array }) {
  return (
    <ul>
      {array.map(({ title, status }) => {
        return (
          <li key={title} className={styles.box}>
            <button type="button" className={styles[status] ?? styles.button}>
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Button.propTypes = {
  array: propTypes.arrayOf(
    propTypes.objectOf(
      propTypes.oneOfType([propTypes.string, propTypes.number])
    )
  ).isRequired,
};
