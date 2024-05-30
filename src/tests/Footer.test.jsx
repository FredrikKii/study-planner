import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer.jsx'
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
  it('displays the current date in the footer', () => {
    const today = new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
    render(<Footer />);

    const dateElement = screen.getByText(new RegExp(`Idag är det: ${today}`));
    expect(dateElement).toBeInTheDocument();
  });

  it('displays the correct app name and year in the footer', () => {
    render(<Footer />);

    const appInfoElement = screen.getByText(/Studieguide \| 2024/i);
    expect(appInfoElement).toBeInTheDocument();
  });
});
