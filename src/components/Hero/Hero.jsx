import { Link } from "react-router-dom";
import { businessConfig } from "../../config/business";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img
          src="/images/hero/hero-main.png"
          alt={`${businessConfig.businessName} - ${businessConfig.tagline}`}
          className="hero__image"
          fetchPriority="high"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <h1 className="hero__title">{businessConfig.businessName}</h1>
        <p className="hero__tagline">{businessConfig.tagline}</p>
        <Link to="/bouquets" className="hero__cta">
          Explore Collection
        </Link>
      </div>
    </section>
  );
}
