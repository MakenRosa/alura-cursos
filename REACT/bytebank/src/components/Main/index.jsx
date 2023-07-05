import styles from './Main.module.css';
import { ReactComponent as Illustration } from './illustration.svg';
import Balance from './Balance';

const date = Date.now();
const today = new Date(date);
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function Main({ balance }) {
  return (
    <section className={styles.container}>
      <div className={styles.top__detail} />
      <h1 className={styles.title}>Hello, Joana :)!</h1>
      <p className={styles.date}>{`${
        daysOfWeek[today.getDay()]
      }, ${today.toLocaleDateString('en-US')}`}</p>
      <div className={styles.wrapper}>
        <Illustration
          className={styles.illustration}
          width="230"
          height="185"
        />
        <Balance balance={balance} />
      </div>
      <div className={styles.bottom__detail} />
    </section>
  );
}
