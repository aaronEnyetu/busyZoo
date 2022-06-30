import { render, screen } from '@testing-library/react';
import App from './App';



test('there should be a greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Zoo Adventures, the App for animal lovers/i);
  expect(linkElement).toBeInTheDocument();
});

