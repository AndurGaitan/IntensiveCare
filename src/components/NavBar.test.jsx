import React from 'react'; // Asegúrate de importar React
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders the Navbar with correct title', () => {
  render(<Navbar />);
  expect(screen.getByText('Intensive Care')).toBeInTheDocument();
});