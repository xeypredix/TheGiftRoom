# Handmade Bouquet & Jewelry Showcase

A premium, responsive product catalogue website for a handmade bouquet and jewelry business. Visitors browse products and enquire via WhatsApp — no cart, checkout, or payment system.

## Features

- Beautiful product showcase with large photography
- Two categories: Handmade Bouquets & Jewelry
- Dynamic product detail pages
- WhatsApp enquiry with pre-filled product messages
- Floating WhatsApp button
- Fully responsive (mobile, tablet, desktop)
- Centralized product data and business configuration
- SEO metadata, sitemap, and robots.txt
- Accessible navigation and focus states

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Generate Placeholder Images

During development, placeholder SVG images are used. To regenerate them:

```bash
node scripts/generate-images.mjs
```

Replace these with real product photos before deploying.

---

## How to Customize

### 1. Add a Product

1. Add the product image to the correct folder:
   - Bouquets: `public/images/bouquets/your-image.jpg`
   - Jewelry: `public/images/jewelry/your-image.jpg`

2. Open `src/data/products.js`

3. Add a new product object:

```js
{
  id: "bouquet-007",           // Unique ID
  name: "Sunset Bouquet",      // Display name
  category: "bouquet",         // "bouquet" or "jewelry"
  image: "/images/bouquets/sunset-bouquet.jpg",
}
```

4. Save the file and refresh the browser.

5. Optionally add the product URL to `public/sitemap.xml`.

### 2. Change WhatsApp Number

Open `src/config/business.js` and update:

```js
whatsappNumber: "1234567890",
```

Use the number **without** `+`, spaces, or dashes (country code included).

Example: For `+91 98765 43210`, use `"919876543210"`.

### 3. Change Business Name

Open `src/config/business.js`:

```js
businessName: "YOUR BUSINESS NAME",
tagline: "Handmade with Love",
```

### 4. Change Hero Image

Replace the file at:

```
public/images/hero/hero-main.jpg
```

Recommended size: at least 1920×1080px.

### 5. Change Category Images

Replace these files:

```
public/images/categories/bouquet-cover.jpg
public/images/categories/jewelry-cover.jpg
```

Recommended aspect ratio: 3:4 or 4:5 (portrait).

### 6. Change Colors

Open `src/index.css` and edit the CSS variables at the top:

```css
:root {
  --color-cream: #faf7f2;
  --color-off-white: #f5ebe0;
  --color-accent: #c9a89a;
  /* ... */
}
```

### 7. Change Fonts

Fonts are loaded in `index.html` from Google Fonts. To change them:

1. Update the Google Fonts link in `index.html`
2. Update the font variables in `src/index.css`:

```css
--font-serif: "Cormorant Garamond", Georgia, serif;
--font-sans: "Inter", sans-serif;
```

### 8. Update About Content

Edit `src/pages/About.jsx` — replace the `[Add your ... here]` placeholder text with your brand story.

### 9. Update Contact Information

Open `src/config/business.js`:

```js
phone: "YOUR PHONE",
email: "YOUR EMAIL",
instagram: "https://instagram.com/yourhandle",
facebook: "https://facebook.com/yourpage",
address: "YOUR ADDRESS",
```

Social links should be full URLs once you have them.

---

## Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation bar
│   ├── Footer/          # Site footer
│   ├── Hero/            # Home page hero
│   ├── CategoryCard/    # Category selection cards
│   ├── ProductCard/     # Individual product card
│   ├── ProductGrid/     # Responsive product grid
│   ├── WhatsAppButton/  # WhatsApp CTA buttons
│   ├── SectionHeading/  # Reusable section titles
│   ├── MobileMenu/      # Mobile navigation
│   ├── Layout/          # Page layout wrapper
│   └── SEO/             # Meta tags & page titles
├── pages/
│   ├── Home.jsx
│   ├── Bouquets.jsx
│   ├── Jewelry.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   └── products.js      # All product data
├── config/
│   └── business.js      # Business info & WhatsApp number
└── utils/
    └── whatsapp.js      # WhatsApp URL & message helpers

public/
└── images/
    ├── hero/
    ├── categories/
    ├── bouquets/
    └── jewelry/
```

## Routes

| Route              | Page              |
|--------------------|-------------------|
| `/`                | Home              |
| `/bouquets`        | All bouquets      |
| `/jewelry`         | All jewelry       |
| `/product/:id`     | Product detail    |
| `/about`           | About             |
| `/contact`         | Contact           |

## WhatsApp Messages

**General enquiry:**
> Hello, I would like to know more about your handmade products.

**Product enquiry (dynamic):**
> Hello, I am interested in the [Product Name].
> Could you please provide more information?

Messages are generated in `src/utils/whatsapp.js`.

## Deployment

1. Replace all placeholder images with real product photos
2. Update `src/config/business.js` with real business details
3. Update About and Contact content
4. Run `npm run build`
5. Deploy the `dist/` folder to your hosting provider (Netlify, Vercel, etc.)

For client-side routing, configure your host to redirect all routes to `index.html`.

## License

Private — for client use.
