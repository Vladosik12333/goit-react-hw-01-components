import propTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className="label">{label} </span>
              <span className="percentage">{percentage} </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};
