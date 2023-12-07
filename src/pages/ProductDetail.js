// ProductDetail.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CartContext, AddCartContext } from '../CartContext';

/**
 * ProductDetail component displays the details of a specific product.
 * It fetches the product details from the FakeStoreAPI based on the product ID in the URL.
 * Users can add the product to their cart from this page.
 * 
 * @returns {JSX.Element} JSX representation of the ProductDetail component.
 */
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const cart = useContext(CartContext);
  const addItems = useContext(AddCartContext);

  /**
   * Handles the click event when the "Add to Cart" button is clicked.
   * Adds the selected product to the user's cart with a default quantity of 1.
   * 
   * @param {React.MouseEvent} e - The click event.
   * @param {Object} item - The product item to be added to the cart.
   */
  const handleClick = (e, item) => {
    e.preventDefault();
    item.quantity = 1;
    addItems(item);
  };

  // Effect to log updated cart whenever it changes
  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  // Effect to fetch product details from FakeStoreAPI based on the product ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-md mx-auto-left bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl p-6 flex mt-15">
      {/* Product Image */}
      {product?.image && (
        <img
          className="h-full w-1/2 object-cover mr-4"
          src={product.image}
          alt={product.name}
        />
      )}

      {/* Product Details */}
      <div className="w-1/2">
        {product ? (
          <>
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center mb-4">
              <span className="text-teal-500 text-lg font-semibold mr-2">${product.price}</span>
              <span className="text-gray-500 ml-2">|</span>
              <span className="text-gray-500 ml-2">Rating:</span>
              <span className="text-yellow-500 ml-1">
                {Array.from({ length: Math.floor(product.rating.rate) }, (_, index) => (
                  <span key={index}>★</span>
                ))}
                {product.rating.rate % 1 !== 0 && (
                  <span className="ml-1">½</span>
                )}
              </span>
              <span className="text-gray-500 ml-1">({product.rating.count} reviews)</span>
            </div>

            <button
              className="bg-indigo-500 text-white rounded p-2 hover:bg-indigo-600 focus:outline-none"
              onClick={e => handleClick(e, product)}
            >
              Add to Cart
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
