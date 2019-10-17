import React from "react";
import T from "prop-types";
import clsx from "clsx";
import styles from "./FriendsList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friends_list}>
    {friends.map(friend => (
      <li className={styles.friends_item} key={friend.id}>
        <span
          className={clsx(
            styles.status,
            friend.isOnline && styles.status_onLine,
            !friend.isOnline && styles.status_offLine
          )}
        ></span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: T.arrayOf(
    T.shape({
      avatar: T.string.isRequired,
      name: T.string.isRequired,
      isOnline: T.bool.isRequired,
      id: T.number.isRequired
    })
  ).isRequired
};
export default FriendList;
