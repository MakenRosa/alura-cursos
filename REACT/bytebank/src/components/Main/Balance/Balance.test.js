import { render, screen } from '@testing-library/react';

import Balance from './index';

describe('Balance component', () => {
  it('should render the component with money format', () => {
    render(<Balance balance={1000} />);
    const balance = screen.getByTestId('balance');
    expect(balance).toHaveTextContent('$ 1000');
  });
});
