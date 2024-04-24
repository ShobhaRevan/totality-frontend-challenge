// components/PropertyList.js

import styles from '../styles/PropertyList.module.css';

const PropertyList = ({ properties,addToCart,onBookNow, removeFromCart }) => {
  const handleBookNow = (property) => {
    // Pass the selected property to the onBookNow function
    //onBookNow(property);
    addToCart(property);
  };

  const handleRemoveNow = (propertyId) => {
    removeFromCart(propertyId);
  }
  return (
    <div className={styles.propertyList}>
      {properties.map(property => (
        <div key={property.id} className={styles.property}>
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>Price: ${property.price}</p>
          <button onClick={() => handleBookNow(property)}>Book Now</button>&nbsp;
          <button onClick={() => handleRemoveNow(property.id)}>Remove Now</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
