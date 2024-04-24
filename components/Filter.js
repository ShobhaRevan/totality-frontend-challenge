// components/Filter.js

import { useState } from 'react';
import styles from '../styles/Filter.module.css';

const Filter = ({ onFilter }) => {
  const [locations, setLocations] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  // Add more filter states as needed

  const applyFilter = () => {
    const filters = {
      locations,
      priceRange,
      // Add more filter values
    };
    onFilter(filters);
  };

  return (
    <div className={styles.filter}>
      <h2>Filters</h2>
      {/* Implement filter UI components */}
      {/* Example: Location */}
      <select onChange={(e) => setLocations([e.target.value])}>
        <option value="">All Locations</option>
        <option value="Beachfront">Beachfront Villa</option>
        <option value="City Center">Luxury Apartment in City Center</option>
        <option value="Suburb">Cozy Suburban Home</option>
        <option value="City Center Loft">Downtown Loft</option>
      </select>
      {/* Example: Price Range */}
      <input
        type="text"
        placeholder="Price Range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      />
      {/* Apply Filter Button */}
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;

