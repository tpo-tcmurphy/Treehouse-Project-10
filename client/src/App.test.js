import { render, screen } from '@testing-library/react'
import App from './App'

// COURSE COMPONENT TEST
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/courses/i);
  expect(linkElement).toBeInTheDocument();
});

