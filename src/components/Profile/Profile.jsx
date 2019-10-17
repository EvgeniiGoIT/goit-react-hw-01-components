import React from "react";
import T from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  const { avatar, name, tag, location, stats } = user;
  const statsArr = Object.entries(stats);
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.profile__list}>
        {statsArr.map(item => (
          <li className={styles.profile__item} key={item[0]}>
            <span className={styles.label}>{item[0]}</span>
            <span className={styles.quantity}>{item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: T.shape({
    avatar: T.string.isRequired,
    name: T.string.isRequired,
    tag: T.string.isRequired,
    location: T.string.isRequired,
    stats: T.shape({
      followers: T.number.isRequired,
      views: T.number.isRequired,
      likes: T.number.isRequired
    })
  }).isRequired
};
export default Profile;
