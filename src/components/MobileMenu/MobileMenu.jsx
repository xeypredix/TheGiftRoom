import { Link } from "react-router-dom";
import { businessConfig } from "../../config/business";
import { getGeneralEnquiryMessage, openWhatsApp } from "../../utils/whatsapp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/bouquets", label: "Bouquets" },
  { to: "/jewelry", label: "Jewelry" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const handleWhatsApp = () => {
    openWhatsApp(getGeneralEnquiryMessage());
    onClose();
  };

  return (
    <>
      <div
        className={`mobile-menu__backdrop ${isOpen ? "mobile-menu__backdrop--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul className="mobile-menu__list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="mobile-menu__link" onClick={onClose}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="mobile-menu__whatsapp"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { navLinks };
