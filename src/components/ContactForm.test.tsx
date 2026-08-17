import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

// Simple mock for fetch to avoid errors during component render
globalThis.fetch = () => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([])
}) as any;

describe('ContactForm', () => {
  it('renders the contact form section', async () => {
    render(<ContactForm />);
    
    // We use findByText to automatically wrap the async state updates in act(...)
    expect(await screen.findByText("Let's Build Something.")).toBeDefined();
    expect(screen.getByPlaceholderText('YOUR NAME')).toBeDefined();
    expect(screen.getByPlaceholderText('HELLO@EXAMPLE.COM')).toBeDefined();
  });
});
