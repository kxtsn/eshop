import React, { createContext, useCallback, useRef, useState, useEffect } from 'react';

// Create a context for managing the cart items
export const CartContext = createContext([]);

// Create a context for adding items to the cart
export const AddCartContext = createContext(item => {});

// Create a context for removing items from the cart
export const RemoveCartContext = createContext(item => {});

// CartProvider component manages the state of the shopping cart
export const CartProvider = ({ children }) => {
  // State to hold the cart items
  const [items, setItems] = useState([]);

  // Ref to keep track of items for use in useEffect
  const itemsRef = useRef(items);

  // Ref to track whether the component is mounted
  const isMounted = useRef(false);

  // Effect to update the itemsRef and localStorage when items change
  useEffect(() => {
    itemsRef.current = items;
    // Skip the initial update during component mount
    if (isMounted.current) {
      // Save the cart items to localStorage
      localStorage.setItem('cart', JSON.stringify(items));
    } else {
      // Mark the component as mounted after the initial render
      isMounted.current = true;
    }
  }, [items]);

  // Effect to load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setItems(savedCart);
    }
  }, []);

 // Callback function to add an item to the cart
 const addItem = useCallback((item) => {
  console.log("itemsRef"); 
  console.log(itemsRef); 
  let updatedItems;

  for(let i = 0; i<itemsRef.current.length; i++){
    if(itemsRef.current[i].id === item.id){
      console.log("itemsRef.current[i]");
    console.log(itemsRef.current[i]);
    }
  }
 const existingItem = itemsRef.current.find(({ id }) => id === item.id);

console.log("existingItem")
console.log(existingItem)

  if (existingItem) {
    console.log(existingItem.quantity);
    console.log(existingItem.quantity + 1);
    // If the item already exists, update its quantity
    updatedItems = itemsRef.current.map((_item) =>
      _item.id === item.id ? { ..._item, quantity:( _item.quantity + 1) } : _item
    );
  } else {
    // If the item is not in the cart, add it with quantity 1
    updatedItems = [...itemsRef.current, { ...item, quantity: 1 }];
  }
console.log("updatedItems")
console.log(updatedItems)
  // Set the items once at the end
  setItems(updatedItems);

  // Return an empty object if needed
  return {};
}, [itemsRef]);


  // Callback function to remove an item from the cart
  const removeItem = useCallback((itemToRemove) => {
    const newItems = itemsRef.current.map((item) => {
      if (item.id === itemToRemove.id) {
        // If quantity is greater than 1, decrease the quantity
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // If quantity is 1, remove the entire item
          return null;
        }
      }
      return item;
    }).filter(Boolean); // Remove null values (items with quantity 1)

    setItems(newItems);
  }, [itemsRef]);

  // Provide the context values to the children components
  return (
    <AddCartContext.Provider value={addItem}>
      <RemoveCartContext.Provider value={removeItem}>
        <CartContext.Provider value={items}>{children}</CartContext.Provider>
      </RemoveCartContext.Provider>
    </AddCartContext.Provider>
  );
};
