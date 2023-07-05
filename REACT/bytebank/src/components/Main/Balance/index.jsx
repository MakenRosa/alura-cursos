import styles from './Balance.module.css';
import { ReactComponent as Icon } from './eye-icon.svg';

export default function Balance({ balance }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.balance}>Balance</h2>
        <Icon />
      </div>
      <div className={styles.divider} />
      <p className={styles.account}>Checking Account</p>
      <p data-testid='balance' className={styles.value}>{`$ ${balance}`}</p>
    </div>
  );
}
