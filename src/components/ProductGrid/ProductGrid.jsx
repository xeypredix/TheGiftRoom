import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products, id }) {
  if (!products.length) {
    return (
      <p className="product-grid__empty">No products available in this category.</p>
    );
  }

  return (
    <div className="product-grid" id={id}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
