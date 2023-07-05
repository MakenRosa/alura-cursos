import React from 'react';

export default function Transactions({ transaction, styles }) {
  return (
    <li>
      <p className={styles.month}>{transaction.month}</p>
      <div className={styles.transaction}>
        <p data-testid="transactiontype">{transaction.transaction}</p>
        <span>{transaction.date}</span>
      </div>
      {transaction.transaction === 'Transfer' ? (
        <h3
          data-testid="transactionvalue"
          className={styles.value}
        >{`- $ ${transaction.value}`}</h3>
      ) : (
        <h3
          data-testid="transactionvalue"
          className={styles.value}
        >{` $ ${transaction.value}`}</h3>
      )}
      <div className={styles.divider} />
    </li>
  );
}
