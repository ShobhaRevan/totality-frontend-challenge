// pages/properties.js

import { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';
import styles from '../styles/Properties.module.css';
import BookingManagement from '../components/BookingManagement';
import Navigation from '../components/Navigation';

const propertiesData = [
  {
    id: 1,
    title: "Luxury Apartment in City Center",
    location: "City Center",
    price: 1000000,
    image: "\luxury_apartments.jpg",
    description: "Luxurious apartment with stunning views in the heart of the city.",
  },
  {
    id: 2,
    title: "Beachfront Villa",
    location: "Beachfront",
    price: 1500000,
    image: "/Beachfrontvilla.jpg",
    description: "Spacious villa with private beach access and panoramic ocean views.",
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    location: "Suburb",
    price: 500000,
    image: "\Cozy_Suburban.jpg",
    description: "Charming home nestled in a quiet suburban neighborhood, perfect for families.",
  },
  {
    id: 4,
    title: "Downtown Loft",
    location: "City Center Loft",
    price: 800000,
    image: "\Downtown.jpg",
    description: "Modern loft with industrial charm, located in the bustling downtown area.",
  },
  // Add more property data
];

const PropertiesPage = () => {
  const [properties, setProperties] = useState(propertiesData);
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [cart, setCart] = useState([]);

  const handleBookNow = (property) => {
    // Implement booking action here
    // For example, add the property to the cart in the booking management system
    console.log('Booked property:', property);
  };

  const addToCart = (property) => {
    // Implement your addToCart logic here
    console.log('Adding property to cart:', property);
    // Example logic:
     setCart([...cart, property]);
  };
  // Function to remove a property from the cart
  const removeFromCart = (propertyId) => {
    const updatedCart = cart.filter(item => item.id !== propertyId);
    setCart(updatedCart);
    console.log('Removing property from the cart:', propertyId);
  };
 
  const filterProperties = (filters) => {
    let filtered = [...properties];

    // Apply location filter
    if (filters.locations.length > 0) {
      filtered = filtered.filter(property =>
        filters.locations.includes(property.location)
      );
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-');
      filtered = filtered.filter(property =>
        property.price >= parseInt(minPrice) && property.price <= parseInt(maxPrice)
      );
    }

    // Apply additional filters as needed

    setFilteredProperties(filtered);
  };

  return (
    <div className={styles.container}>
      <h1>Property Listings</h1>
      <Navigation />
      <Filter onFilter={filterProperties} />
      <PropertyList properties={filteredProperties} addToCart={addToCart} onBookNow={handleBookNow} removeFromCart={removeFromCart} />
      <BookingManagement cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default PropertiesPage;
