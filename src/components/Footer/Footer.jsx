import { Link } from "react-router-dom";
import { businessConfig } from "../../config/business";
import { getGeneralEnquiryMessage, openWhatsApp } from "../../utils/whatsapp";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/bouquets", label: "Bouquets" },
  { to: "/jewelry", label: "Jewelry" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            {businessConfig.businessName}
          </Link>
          <p className="footer__tagline">{businessConfig.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__nav-list">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <button
            type="button"
            className="footer__whatsapp"
            onClick={() => openWhatsApp(getGeneralEnquiryMessage())}
          >
            WhatsApp
          </button>
          <div className="footer__social">
            {businessConfig.instagram !== "YOUR INSTAGRAM" && (
              <a href={businessConfig.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            )}
            {businessConfig.facebook !== "YOUR FACEBOOK" && (
              <a href={businessConfig.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copyright">
          © {currentYear} {businessConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
