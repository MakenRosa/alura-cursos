import { calculateNewBalance } from './index';

describe('when submit a transaction', () => {
  test('that is a deposit, add the value to the balance', () => {
    const transaction = { transaction: 'Deposit', value: 50 };

    const newBalance = calculateNewBalance(transaction, 100);

    expect(newBalance).toBe(150);
  });

  test('that is a transfer, subtract the value from balance', () => {
    const transaction = { transaction: 'Transfer', value: 50 };

    const newBalance = calculateNewBalance(transaction, 100);

    expect(newBalance).toBe(50);
  });
});

it('should return a updated value with income', () => {
  const calcIncome = jest.fn((balance) => balance + balance * 0.005);

  const balance = 100;

  const updatedValue = calcIncome(balance);

  expect(updatedValue).toBe(100.5);
  expect(calcIncome).toHaveBeenCalled();
  expect(calcIncome).toHaveBeenCalledTimes(1);
  expect(calcIncome).toHaveBeenCalledWith(balance);
});
