import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './index';


describe('should render a input field', () => {
    test('', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Type a value');
    expect(inputField).toBeInTheDocument();
    });

    test('with a number type', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Type a value');
    expect(inputField).toHaveAttribute('type', 'number');
    });

    test('that can be typed', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Type a value');
    userEvent.type(inputField, '10');
    expect(inputField).toHaveValue(10);
    });
});