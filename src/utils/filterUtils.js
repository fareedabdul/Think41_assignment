export const filterProducts = (products, filters) => {
  let filtered = [...products];

  // Search by name
  if (filters.searchTerm) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
    );
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }

  // Brand filter
  if (filters.brands.length) {
    filtered = filtered.filter((p) => filters.brands.includes(p.brand));
  }

  // Price range filter
  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice));
  }

  // Rating filter
  if (filters.rating) {
    filtered = filtered.filter((p) => (p.rating || 0) === Number(filters.rating));
  }

  // Availability filter
  if (filters.availability) {
    filtered = filtered.filter((p) => {
      const isAvailable = p.availability === 'in' ? 'In Stock' : 'Out of Stock';
      return filters.availability === 'in' ? isAvailable === 'In Stock' : isAvailable === 'Out of Stock';
    });
  }

  // Sorting
  if (filters.sortBy) {
    filtered.sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });
  }

  return filtered;
};