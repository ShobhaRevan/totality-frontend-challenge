// BookingManagement.js
import React, { useState } from 'react';

const BookingManagement = () => {
  const [cart, setCart] = useState([]); // State to track booked properties

  // Function to add a property to the cart
  const addToCart = (property) => {
    // Check if the property is already in the cart
    const existingItemIndex = cart.findIndex(item => item.id === property.id);
    if (existingItemIndex !== -1) {
      // If the property already exists, increase its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      // If the property is not in the cart, add it with quantity 1
      setCart([...cart, { ...property, quantity: 1 }]);
    }
  };

  // Function to remove a property from the cart
  const removeFromCart = (propertyId) => {
    const updatedCart = cart.filter(item => item.id !== propertyId);
    setCart(updatedCart);
  };

  // Function to increase quantity of a property in the cart
  const increaseQuantity = (propertyId) => {
    const updatedCart = cart.map(item => {
      if (item.id === propertyId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrease quantity of a property in the cart
  const decreaseQuantity = (propertyId) => {
    const updatedCart = cart.map(item => {
      if (item.id === propertyId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to calculate total cost of the cart
  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      {/* Display booked properties with controls to increase, decrease, or remove */}
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => increaseQuantity(item.id)}>Increase</button>
          <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
          {/* Add Remove button */}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {/* Display total cost of the cart */}
      <p>Total Cost: ${calculateTotalCost()}</p>
    </div>
  );
};

export default BookingManagement;
