import { render, screen } from '@testing-library/react';
import Menu from './index';

it('should render a link to homepage', () => {
  render(<Menu />);
  const linkHome = screen.getByText('Home');
  expect(linkHome).toBeVisible();
});

it('should render a links list to homepage', () => {
  render(<Menu />);
  const linksList = screen.getAllByRole('link');
  expect(linksList).toHaveLength(4);
});

it('should not render a link to statement page', () => {
  render(<Menu />);
  const linkStatement = screen.queryByText('Statement');
  expect(linkStatement).not.toBeInTheDocument();
});

it('should render a links list with link class', () => {
  render(<Menu />);
  const linksList = screen.getAllByRole('link');
  linksList.forEach((link) => {
    expect(link).toHaveClass('link');
  });
  expect(linksList).toMatchSnapshot();
});
