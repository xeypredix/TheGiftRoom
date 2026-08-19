import { Helmet } from "react-helmet-async";
import { businessConfig } from "../../config/business";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = title
    ? `${title} | ${businessConfig.businessName}`
    : `Handmade Bouquets & Jewelry | ${businessConfig.businessName}`;

  const metaDescription =
    description ||
    `${businessConfig.tagline}. Browse our handmade bouquets and jewelry collection. Enquire via WhatsApp.`;

  const url =
    path && typeof window !== "undefined"
      ? `${window.location.origin}${path}`
      : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
}
