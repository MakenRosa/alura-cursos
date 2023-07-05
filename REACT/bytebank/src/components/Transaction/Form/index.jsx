import React, { useState } from 'react';
import styles from './Form.module.css';

export default function Formulario({ performTransaction }) {
  const [valueObject, setValueObject] = useState({ transaction: '', value: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const updatedValues = { ...valueObject, [name]: value };
    setValueObject(updatedValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const transactionDate = new Date().toLocaleDateString('en-US');
    const transactionMonth = new Date().toLocaleDateString('en-US', {
      month: 'long',
    });
    performTransaction({
      ...valueObject,
      date: transactionDate,
      month: transactionMonth[0].toUpperCase() + transactionMonth.substring(1),
    });
    setValueObject({ ...valueObject, value: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.caption__options}>New Transaction</h3>
      <select
        className={styles.options__group}
        onChange={handleChange}
        name="transaction"
        data-testid="select-options"
      >
        <option defaultValue="Select a transaction type">
            Select a transaction type
        </option>
        <option value="Deposit">Deposit</option>
        <option value="Transfer">Transfer</option>
      </select>
      <label htmlFor="value" className={styles.caption}>
        Value
      </label>
      <input
        onChange={handleChange}
        className={styles.value__field}
        type="number"
        value={valueObject.value}
        name="value"
        id="value"
        placeholder="Type a value"
      />
      <button className={styles.button} type="submit">
        Submit Transaction
      </button>
    </form>
  );
}
