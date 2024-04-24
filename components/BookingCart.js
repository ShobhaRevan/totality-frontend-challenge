// components/BookingCart.js

import styles from '../styles/BookingCart.module.css';

const BookingCart = ({ cartItems, onRemoveItem }) => {
  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.totalCost, 0);
  };

  return (
    <div className={styles.cart}>
      {cartItems.map(item => (
        <div key={item.id} className={styles.cartItem}>
          <span>{item.property.title}</span>
          <span>{item.bookingDates}</span>
          <span>Total Cost: ${item.totalCost}</span>
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className={styles.totalCost}>
        <h3>Total Cost:</h3>
        <p>${calculateTotalCost()}</p>
      </div>
    </div>
  );
};

export default BookingCart;

