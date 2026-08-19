import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SEO from "../components/SEO/SEO";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryMessage } from "../utils/whatsapp";

function ContactItem({ label, value, href }) {
  if (value.startsWith("YOUR ")) {
    return (
      <div className="contact-item">
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value contact-item__value--placeholder">
          [{value}]
        </span>
      </div>
    );
  }

  if (href) {
    return (
      <div className="contact-item">
        <span className="contact-item__label">{label}</span>
        <a href={href} className="contact-item__value" target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      </div>
    );
  }

  return (
    <div className="contact-item">
      <span className="contact-item__label">{label}</span>
      <span className="contact-item__value">{value}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch via WhatsApp for enquiries about handmade bouquets and jewelry."
        path="/contact"
      />

      <section className="page-hero page-hero--small">
        <div className="page-hero__content container">
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__subtitle">
            We&apos;d love to hear from you. Reach out via WhatsApp for the
            quickest response.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-page">
          <div className="contact-page__cta">
            <SectionHeading
              title="Chat with us on WhatsApp"
              subtitle="Our primary way to connect. Ask about products, custom orders, and availability."
            />
            <WhatsAppButton
              variant="primary"
              message={getGeneralEnquiryMessage()}
              label="Chat with us on WhatsApp"
            />
          </div>

          <div className="contact-page__details">
            <SectionHeading title="Other Ways to Reach Us" align="left" />
            <ContactItem label="Phone" value={businessConfig.phone} href={`tel:${businessConfig.phone}`} />
            <ContactItem label="Email" value={businessConfig.email} href={`mailto:${businessConfig.email}`} />
            <ContactItem label="Instagram" value={businessConfig.instagram} href={businessConfig.instagram.startsWith("http") ? businessConfig.instagram : undefined} />
            <ContactItem label="Facebook" value={businessConfig.facebook} href={businessConfig.facebook.startsWith("http") ? businessConfig.facebook : undefined} />
            <ContactItem label="Address" value={businessConfig.address} />
          </div>
        </div>
      </section>
    </>
  );
}
