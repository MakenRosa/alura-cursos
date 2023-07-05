import React from 'react';
import styles from './Statement.module.css';
import Transactions from './Transactions';

export default function Extrato({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Statement</h2>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <Transactions key={index} transaction={transaction} styles={styles} />
          );
        })}
      </ul>
    </section>
  );
}
