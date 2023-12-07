// CartPage.js
import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../CartContext';

/**
 * CartPage component displays the contents of the user's shopping cart.
 * It uses the CartContext to access the cart items and calculates the total price.
 * 
 * @returns {JSX.Element} JSX representation of the CartPage component.
 */
const CartPage = () => {
  // Retrieve the cart from the CartContext
  const cart = useContext(CartContext);

  /**
   * Calculates the total price of items in the shopping cart.
   * 
   * @returns {number} Total price of items in the cart.
   */
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">My Cart</h2>
      {/* Check if the cart is not empty */}
      {cart.length !== 0 ? (
        // Map through cart items and render CartItem component for each item
        cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      ) : (
        // Display a message if the cart is empty
        <p className="text-gray-500">Cart is empty!</p>
      )}
      <div className="mt-4">
        {/* Display the total price of items in the cart */}
        <p className="text-xl font-semibold">
          Total: ${calculateTotal().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
