import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SEO from "../components/SEO/SEO";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryMessage } from "../utils/whatsapp";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about our handmade bouquets and jewelry craftsmanship."
        path="/about"
      />

      <section className="page-hero page-hero--small">
        <div className="page-hero__content container">
          <h1 className="page-hero__title">About Us</h1>
          <p className="page-hero__subtitle">{businessConfig.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-page">
          <div className="about-page__block">
            <SectionHeading title="Brand Story" align="left" />
            <p>TheGiftRoom</p>
            <p>
              Every great journey starts with a single step, 
              and ours began with a simple desire to build something better. 
              Today, we’re proud to share that vision with you,
               turning everyday moments into something remarkable.
            </p>
          </div>

          <div className="about-page__image-grid">
            <img
              src="/images/hero/hero-main.png"
              alt="Workshop process"
              loading="lazy"
            />
            <img
              src="/images/categories/bouquet-cover.jpg"
              alt="Handmade bouquet creation"
              loading="lazy"
            />
          </div>

          <div className="about-page__block">
            <SectionHeading title="Handmade Process" align="left" />
    
            <p>
             Every bouquet is thoughtfully hand-arranged with fresh, harmonious blooms, while each piece of jewelry is meticulously crafted by skilled artisans with an unwavering eye for detail.
            </p>
          </div>

          <div className="about-page__block">
            <SectionHeading title="Artisan Story" align="left" />
           
            <p>
              Behind every creation is a deep dedication to our craft. From hand-selecting each bloom to meticulously shaping every piece of jewelry, our artisans pour their hearts into every detail to bring you something truly special.
            </p>
          </div>

          <div className="about-page__block">
            <SectionHeading title="Our Philosophy" align="left" />
            
            <p>
              We believe in the power of handmade. Guided by a commitment to uncompromising quality, thoughtful sustainability, and deep personalization, every piece we create is designed to celebrate your unique moments with care and intention.
            </p>
          </div>
        </div>
      </section>

      <section className="section whatsapp-cta">
        <div className="container whatsapp-cta__inner">
          <h2 className="whatsapp-cta__title">Interested in Our Work?</h2>
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
