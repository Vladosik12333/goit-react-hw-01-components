import propTypes from "prop-types";
import styles from "./User.module.css";

export default function User({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={tag} className="avatar" />
      <div className={styles.info}>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>

        <ul className={styles.stats}>
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.object,
};
