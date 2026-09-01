// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeFiHubPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeFiHubPlus/i);
    expect(titleElement).toBeInTheDocument();
});
