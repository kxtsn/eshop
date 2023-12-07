// Router.js
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';

const AppRouter = () => {
  return (
      <Routes>
        {/* Home route for the root URL and category-based URLs */}
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />

        {/* ProductDetail route for displaying product details */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* CartPage route for displaying the user's shopping cart */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
  );
};

export default AppRouter;
