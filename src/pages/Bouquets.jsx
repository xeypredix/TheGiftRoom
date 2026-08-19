import ProductGrid from "../components/ProductGrid/ProductGrid";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SEO from "../components/SEO/SEO";
import { categoryConfig, getProductsByCategory } from "../data/products";

export default function Bouquets() {
  const products = getProductsByCategory("bouquet");

  return (
    <>
      <SEO
        title="Handmade Bouquets"
        description={categoryConfig.bouquet.description}
        path="/bouquets"
      />

      <section className="page-hero">
        <div className="page-hero__image-wrapper">
          <img
            src={categoryConfig.bouquet.coverImage}
            alt="Handmade bouquets collection"
            className="page-hero__image"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{categoryConfig.bouquet.title}</h1>
          <p className="page-hero__subtitle">{categoryConfig.bouquet.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="All Bouquets" />
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
