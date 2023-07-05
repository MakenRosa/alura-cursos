import styles from './Statement.module.css';
import Transactions from './Transactions';

export default function Statement({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Statement</h2>
      <ul>
        {transactions.map((transaction, index) => {
          return (
            <Transactions
              key={index}
              transaction={transaction}
              styles={styles}
            />
          );
        })}
      </ul>
    </section>
  );
}
