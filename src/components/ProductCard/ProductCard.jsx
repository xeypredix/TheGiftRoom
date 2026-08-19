import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.svg";
          }}
        />
      </div>
      <h3 className="product-card__name">{product.name}</h3>
    </Link>
  );
}
