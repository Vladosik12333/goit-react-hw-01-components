import propTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusRed : styles.statusGreen}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};
