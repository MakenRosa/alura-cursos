import { render, screen } from '@testing-library/react';

import Transactions from './index';

import styles from '../Statement.module.css';
import userEvent from '@testing-library/user-event';
import Form from 'components/Transaction/Form';

describe('should render a transaction', () => {
  test('with updated props', () => {
    const transaction = {
      transaction: 'Deposit',
      value: 10,
    };

    const { rerender } = render(
      <Transactions styles={styles} transaction={transaction} />,
    );

    const transactionType = screen.getByTestId('transactiontype');
    const transactionValue = screen.getByTestId('transactionvalue');
    expect(transactionType).toHaveTextContent('Deposit');
    expect(transactionValue).toHaveTextContent('$ 10');

    const newTransaction = {
      transaction: 'Transfer',
      value: 5,
    };

    rerender(<Transactions styles={styles} transaction={newTransaction} />);

    const newTransactionType = screen.getByTestId('transactiontype');
    const newTransactionValue = screen.getByTestId('transactionvalue');
    expect(newTransactionType).toHaveTextContent('Transfer');
    expect(newTransactionValue).toHaveTextContent('- $ 5');
  });
});

it('should call a onSubmit function when submit button is clicked', () => {
  const onSubmit = jest.fn();
  render(<Form performTransaction={onSubmit} />);

  const submitButton = screen.getByRole('button', { type: 'submit' });
  userEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

it('should select a transaction type', () => {
  render(<Form />);

  const select = screen.getByTestId('select-options');
  userEvent.selectOptions(select, 'Deposit');
  expect(select).toHaveValue('Deposit');
});
