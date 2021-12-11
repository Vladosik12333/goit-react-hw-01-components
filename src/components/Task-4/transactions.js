import propTypes from "prop-types";
import styles from "./transactions.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th className={styles.type}>Type</th>
          <th className={styles.type}>Amount</th>
          <th className={styles.type}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={styles.info}>{type}</td>
              <td className={styles.info}>{amount}</td>
              <td className={styles.info}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: propTypes.array,
};
