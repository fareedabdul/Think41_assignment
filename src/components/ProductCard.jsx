export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {'★'.repeat(product.rating || 0)}</p>
      <p>Availability: {product.availability || 'In Stock'}</p>
    </div>
  );
}