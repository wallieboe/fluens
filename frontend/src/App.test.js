import { render, screen } from '@testing-library/react';
import App from './App';

test('renders footer with version information', () => {
  render(<App />);
  const footerElement = screen.getByText(/Versie:/i);
  expect(footerElement).toBeInTheDocument();
});
