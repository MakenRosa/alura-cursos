import styles from './Transaction.module.css';
import { ReactComponent as Illustration } from './illustration.svg';
import Form from './Form';

export default function Transaction({ performTransaction }) {
  return (
    <section className={styles.container}>
      <div className={styles.top__detail} />
      <div className={styles.wrapper}>
        <Form performTransaction={performTransaction} />
      </div>
      <Illustration height="229" width="359" />
      <div className={styles.bottom__detail} />
    </section>
  );
}
