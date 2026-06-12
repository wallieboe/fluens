import { render, screen } from '@testing-library/react';
import App from './App';

test('renders footer with version information', async () => {
  render(<App />);
  // AuthProvider rendert pas na de eerste onAuthStateChanged-callback, dus async wachten
  const footerElement = await screen.findByText(/Versie:/i);
  expect(footerElement).toBeInTheDocument();
});
