import { render, screen } from '@testing-library/react';

import Statement from './index';

describe('should render a statement', () => {
  const transactions = [
    {
      transaction: 'Deposit',
      value: 10,
    },
  ];

  test('', () => {
    render(<Statement transactions={transactions} />);
    const statement = screen.getByRole('listitem');
    expect(statement).toBeInTheDocument();
  });
});
