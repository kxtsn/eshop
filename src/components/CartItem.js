import React, { useContext } from 'react';
import { AddCartContext, RemoveCartContext } from '../CartContext';

/**
 * CartItem component represents an item in the shopping cart.
 * It displays information about the item, allows users to add or remove quantity, and shows the total price for that item.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.item - The item information to display.
 * @returns {JSX.Element} JSX representation of the CartItem component.
 */
const CartItem = ({ item }) => {
  // Access the addItems and removeItem functions from the CartContext
  const addItems = useContext(AddCartContext);
  const removeItem = useContext(RemoveCartContext);

  /**
   * Handles the click event to add quantity to the item.
   * 
   * @param {Event} e - The click event.
   */
  const handleAddQuantity = (e) => {
    e.preventDefault();
    // Add the item to the cart
    addItems(item);
  };

  /**
   * Handles the click event to remove quantity from the item.
   * 
   * @param {Event} e - The click event.
   */
  const handleRemoveQuantity = (e) => {
    e.preventDefault();
    // Remove the item from the cart
    removeItem(item);
  };

  return (
    <div key={item.id} className="flex justify-between items-center mb-2">
      <div>
        <p className="text-gray-700">{item.title}</p>
        <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
        <div className="flex space-x-2">
          {/* Button to add quantity */}
          <button
            className="text-blue-500"
            onClick={handleAddQuantity}
          >
            Add Quantity
          </button>
          {/* Button to remove quantity */}
          <button
            className="text-red-500"
            onClick={handleRemoveQuantity}
          >
            Remove Quantity
          </button>
        </div>
      </div>
      {/* Display the total price for the item */}
      <p className="text-gray-700">${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
