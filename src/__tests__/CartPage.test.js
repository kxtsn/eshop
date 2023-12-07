// CartPage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider } from '../CartContext';
import CartPage from '../pages/CartPage';

const mockCart = [
  { id: 1, title: 'Product 1', quantity: 2, price: 10 },
  { id: 2, title: 'Product 2', quantity: 1, price: 15 },
];

const MockCartProvider = ({ children }) => (
  <CartProvider value={mockCart}>{children}</CartProvider>
);

test('renders CartPage with empty cart', () => {
  render(<CartPage />, { wrapper: MockCartProvider });

  expect(screen.getByText('Cart is empty!')).toBeInTheDocument();
});

test('renders CartPage with items in cart', () => {
  render(<CartPage />, { wrapper: MockCartProvider });

  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});

test('calculates and displays the correct total', () => {
  render(<CartPage />, { wrapper: MockCartProvider });

  expect(screen.getByText('Total: $40')).toBeInTheDocument();
});
