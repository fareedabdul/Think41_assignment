import { useState, useEffect } from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import { filterProducts } from './utils/filterUtils';
import products from './data/products';
import './styles/App.css';

function App() {
  const [filters, setFilters] = useState({ category: '', brands: [], minPrice: '', maxPrice: '', rating: '', availability: '', searchTerm: '', sortBy: '' });
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(filterProducts(products, filters));
  }, [filters]);

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <Filters onFilterChange={setFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;