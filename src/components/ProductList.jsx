import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products match the selected filters.</p>
      )}
    </div>
  );
}