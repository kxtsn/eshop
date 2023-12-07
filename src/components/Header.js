import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import axios from 'axios';

/**
 * Header component represents the top navigation bar of the application.
 * It includes navigation links for home and categories, a category dropdown, and a link to the cart.
 * 
 * @returns {JSX.Element} JSX representation of the Header component.
 */
const Header = () => {
  // State to store the list of categories
  const [categories, setCategories] = useState([]);

  // State to manage the visibility of the category dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch categories from the API on component mount
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategory();
  }, []);

  // Toggle the visibility of the category dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white-800 text-black mb-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home button */}
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            HOME
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            CATEGORY
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown content */}
          <div
            className={`origin-top-left absolute left-0 top-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isDropdownOpen ? 'block' : 'hidden'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {/* Render categories as dropdown items */}
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`/${category}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 uppercase"
                  role="menuitem"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1 mx-4" />

        {/* Cart Component */}
        <Link to="/cart">
          <Cart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
