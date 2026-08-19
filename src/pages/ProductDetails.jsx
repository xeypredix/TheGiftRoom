import { Link, useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import SEO from "../components/SEO/SEO";
import { getProductById, getRelatedProducts } from "../data/products";
import { getProductEnquiryMessage } from "../utils/whatsapp";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <>
        <SEO title="Product Not Found" description="The product you're looking for could not be found." />
        <section className="section not-found">
          <div className="container not-found__inner">
            <h1 className="not-found__title">Product Not Found</h1>
            <p className="not-found__text">
              The product you&apos;re looking for could not be found.
            </p>
            <Link to="/bouquets" className="btn btn--secondary">
              Back to Collection
            </Link>
          </div>
        </section>
      </>
    );
  }

  const relatedProducts = getRelatedProducts(product);
  const backLink = product.category === "bouquet" ? "/bouquets" : "/jewelry";
  const backLabel =
    product.category === "bouquet" ? "Back to Bouquets" : "Back to Jewelry";

  return (
    <>
      <SEO
        title={product.name}
        description={`Enquire about ${product.name}. Handmade with care.`}
        path={`/product/${product.id}`}
      />

      <section className="section product-detail">
        <div className="container">
          <Link to={backLink} className="product-detail__back">
            ← {backLabel}
          </Link>

          <div className="product-detail__layout">
            <div className="product-detail__image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-detail__image"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.svg";
                }}
              />
            </div>

            <div className="product-detail__info">
              <h1 className="product-detail__name">{product.name}</h1>
              <WhatsAppButton
                variant="primary"
                message={getProductEnquiryMessage(product.name)}
                label="Enquire on WhatsApp"
              />
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="product-detail__related">
              <SectionHeading title="You May Also Like" />
              <ProductGrid products={relatedProducts} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
