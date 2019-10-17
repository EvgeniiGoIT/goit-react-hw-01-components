import React from "react";
import T from "prop-types";
import styles from "./Stats.module.css";

const Stats = ({ title, stats }) => (
  <section className={styles.stats_section}>
    {title && <h2 className={styles.title}>Upload stats</h2>}

    <ul className={styles.stats_list}>
      {stats.map(item => (
        <li className={styles.stats__item} key={item.id}>
          <span className={styles.stats__label}>{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: ""
};

Stats.propTypes = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired
    })
  ).isRequired
};
export default Stats;
