// src/components/Product.js

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Product component displays information about a product, including its image, category, title, description, price, and rating.
 * It provides a link to view more details about the product.
 * 
 * @param {Object} product - The product object containing details like id, image, category, title, description, price, and rating.
 * @returns {JSX.Element} JSX representation of the Product component.
 */
const Product = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* Product image */}
          <img
            className="h-20 w-full object-cover mt-10 ml-3"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-8">
          {/* Product category */}
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {product.category}
          </div>
          {/* Product title */}
          <p
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {product.title}
          </p>
          {/* Product description */}
          <p className="mt-2 text-gray-500">
            {product.description.length > 90
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
          {/* Product details and rating */}
          <div className="flex items-center mt-4">
            <span className="text-teal-500 text-lg font-semibold mr-2">${product.price}</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500 ml-2">Rating:</span>
            <span className="text-yellow-500 ml-1">
              {Array.from({ length: product.rating.rate }, (_, index) => (
                <span key={index}>★</span>
              ))}
            </span>
            <span className="text-gray-500 ml-1">({product.rating.count})</span>
          </div>
          {/* Link to view more details about the product */}
          <Link
            to={`/product/${product.id}`} 
          >
            <button className="mt-4 bg-indigo-500 text-white rounded p-2">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
