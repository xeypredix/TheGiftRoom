import { businessConfig } from "../config/business";

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;
}

export function getGeneralEnquiryMessage() {
  return "Hello, I would like to know more about your handmade products.";
}

export function getProductEnquiryMessage(productName) {
  return `Hello, I am interested in the ${productName}.\nCould you please provide more information?`;
}

export function openWhatsApp(message) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
