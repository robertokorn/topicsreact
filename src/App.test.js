import { render, screen } from '@testing-library/react';
import App from './App';

test('Topic', () => {
  render(<App />);
  const linkElement = screen.getByText(/Topic/i);
  expect(linkElement).toBeInTheDocument();
});
