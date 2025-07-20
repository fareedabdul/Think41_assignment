import { useState } from 'react';

export default function Filters({ onFilterChange }) {
  const [category, setCategory] = useState('');
  const [brands, setBrands] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleChange = (updates) => {
    const newFilters = { 
      ...updates, 
      category, 
      brands, 
      minPrice, 
      maxPrice, 
      rating, 
      availability, 
      searchTerm, 
      sortBy 
    };
    onFilterChange(newFilters);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => handleChange({ searchTerm: e.target.value })}
      />
      <select value={category} onChange={(e) => handleChange({ category: e.target.value })}>
        <option value="">All Categories</option>
        {/* Populate with categories */}
      </select>
      <div>
        {['TechBrand', 'PhoneCo', 'Sporty', 'FashionInc'].map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => {
                const newBrands = brands.includes(brand)
                  ? brands.filter((b) => b !== brand)
                  : [...brands, brand];
                handleChange({ brands: newBrands });
              }}
            />
            {brand}
          </label>
        ))}
      </div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => handleChange({ minPrice: e.target.value })}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => handleChange({ maxPrice: e.target.value })}
      />
      <select value={rating} onChange={(e) => handleChange({ rating: e.target.value })}>
        <option value="">All Ratings</option>
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
      <select value={availability} onChange={(e) => handleChange({ availability: e.target.value })}>
        <option value="">All Availability</option>
        <option value="in">In Stock</option>
        <option value="out">Out of Stock</option>
      </select>
      <select value={sortBy} onChange={(e) => handleChange({ sortBy: e.target.value })}>
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
      <button onClick={() => handleChange({ category: '', brands: [], minPrice: '', maxPrice: '', rating: '', availability: '', searchTerm: '', sortBy: '' })}>
        Reset Filters
      </button>
    </div>
  );
}