import React from 'react';
import styles from './Menu.module.css';

const menuOptions = [
  'Home',
  'Transfers',
  'Investiments',
  'Other services',
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {menuOptions.map((item, index) => {
        return (
          <div key={item} className={styles.item}>
            <a href="/" className={styles.link}>
              {item}
            </a>
            {index !== menuOptions.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
