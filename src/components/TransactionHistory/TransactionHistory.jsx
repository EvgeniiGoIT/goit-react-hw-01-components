import React from "react";
import T from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionsHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead className={styles.transaction_head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.transaction_body}>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      type: T.string.isRequired,
      amount: T.string.isRequired,
      currency: T.string.isRequired
    })
  )
};
export default TransactionsHistory;
