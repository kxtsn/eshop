// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

/**
 * Home component displays a list of products fetched from the FakeStoreAPI.
 * The list can be filtered based on the product category specified in the URL if given.
 * 
 * @returns {JSX.Element} JSX representation of the Home component.
 */
const Home = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  /**
   * Fetches products from the FakeStoreAPI based on the specified category if given.
   * Updates the state with the fetched product data.
   */
  useEffect(() => {
    // Default URL without category, or with category if specified
    let url = 'https://fakestoreapi.com/products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    /**
     * Fetches products from the specified URL.
     */
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Invoke the fetchProducts function when the component mounts or when the category changes
    fetchProducts();
  }, [category]);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-10 mt-10">Shopping Cart Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Map through the products and render each Product component */}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
   </div>
  );
};

export default Home;
