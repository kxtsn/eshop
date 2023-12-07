// index.js
import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App";
import { CartProvider } from './CartContext';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
root.render(
    <CartProvider>
      <App />
    </CartProvider>
);
