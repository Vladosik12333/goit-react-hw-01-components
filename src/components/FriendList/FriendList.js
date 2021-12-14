import propTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendListItem from "components/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.array,
};
