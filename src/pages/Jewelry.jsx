import ProductGrid from "../components/ProductGrid/ProductGrid";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SEO from "../components/SEO/SEO";
import { categoryConfig, getProductsByCategory } from "../data/products";

export default function Jewelry() {
  const products = getProductsByCategory("jewelry");

  return (
    <>
      <SEO
        title="Jewelry"
        description={categoryConfig.jewelry.description}
        path="/jewelry"
      />

      <section className="page-hero">
        <div className="page-hero__image-wrapper">
          <img
            src={categoryConfig.jewelry.coverImage}
            alt="Handmade jewelry collection"
            className="page-hero__image"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{categoryConfig.jewelry.title}</h1>
          <p className="page-hero__subtitle">{categoryConfig.jewelry.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="All Jewelry" />
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
