import { render, screen } from '@testing-library/react';
import Header from './index';

it('should render user name', () => {
    render(<Header />);
    const userName = screen.getByText('Joana Fonseca Gomes');
    expect(userName).toBeVisible();
    }
);