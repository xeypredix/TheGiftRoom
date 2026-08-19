import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import SEO from "../components/SEO/SEO";
import { businessConfig } from "../config/business";
import { categoryConfig, getProductsByCategory } from "../data/products";
import { getGeneralEnquiryMessage } from "../utils/whatsapp";

export default function Home() {
  const bouquetProducts = getProductsByCategory("bouquet").slice(0, 8);
const jewelryProducts = getProductsByCategory("jewelry").slice(0, 8);

  return (
    <>
      <SEO
        description={`${businessConfig.tagline}. Browse handmade bouquets and jewelry. Enquire via WhatsApp.`}
      />

      <Hero />

      <section className="section section--category">
        <div className="container">
          <div className="category-cards">
            <CategoryCard
              title={categoryConfig.bouquet.label.toUpperCase()}
              image={categoryConfig.bouquet.coverImage}
              linkTo="/bouquets"
              imageAlt="Handmade bouquet collection"
            />
            <CategoryCard
              title={categoryConfig.jewelry.label.toUpperCase()}
              image={categoryConfig.jewelry.coverImage}
              linkTo="/jewelry"
              imageAlt="Handmade jewelry collection"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title={categoryConfig.bouquet.title}
            subtitle={categoryConfig.bouquet.description}
          />
          <ProductGrid products={bouquetProducts} id="bouquets" />
          <div className="section__link-wrapper">
            <Link to="/bouquets" className="section__link">
              View All Bouquets →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            title={categoryConfig.jewelry.title}
            subtitle={categoryConfig.jewelry.description}
          />
          <ProductGrid products={jewelryProducts} id="jewelry" />
          <div className="section__link-wrapper">
            <Link to="/jewelry" className="section__link">
              View All Jewelry →
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview__inner">
          <div className="about-preview__content">
            <SectionHeading title="Our Story" align="left" />
            <p className="about-preview__text">
              Every great journey starts with a single step, and ours began with a simple desire to build something better. Today, we’re proud to share that vision with you, turning everyday moments into something remarkable.
            </p>
            <Link to="/about" className="section__link">
              Learn More →
            </Link>
          </div>
          <div className="about-preview__image-wrapper">
            <img
              src="/images/hero/hero-main.png"
              alt="Handmade craftsmanship"
              className="about-preview__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section whatsapp-cta">
        <div className="container whatsapp-cta__inner">
          <h2 className="whatsapp-cta__title">Ready to Enquire?</h2>
          <p className="whatsapp-cta__text">
            Chat with us on WhatsApp for custom orders, availability, and more.
          </p>
          <WhatsAppButton
            variant="primary"
            message={getGeneralEnquiryMessage()}
            label="Chat with us on WhatsApp"
          />
        </div>
      </section>
    </>
  );
}
