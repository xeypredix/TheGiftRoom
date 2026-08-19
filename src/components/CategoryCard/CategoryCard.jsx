import { Link } from "react-router-dom";

export default function CategoryCard({ title, image, linkTo, imageAlt }) {
  return (
    <Link to={linkTo} className="category-card">
      <div className="category-card__image-wrapper">
        <img
          src={image}
          alt={imageAlt || title}
          className="category-card__image"
          loading="lazy"
        />
        <div className="category-card__overlay" />
      </div>
      <div className="category-card__content">
        <h3 className="category-card__title">{title}</h3>
        <span className="category-card__cta">Explore Collection →</span>
      </div>
    </Link>
  );
}
