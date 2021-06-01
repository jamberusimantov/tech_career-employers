import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './client/src/App';

test('renders learn react link', () => {
  render(<App />);
  const greeting = screen.getByText(/welcome/i);
  expect(greeting).toBeInTheDocument();
});
