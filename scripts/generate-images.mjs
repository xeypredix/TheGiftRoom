import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public", "images");

const palette = {
  bouquet: [
    { bg: "#f5ebe0", accent: "#c9a89a", label: "Rose" },
    { bg: "#fce4ec", accent: "#d4a5a5", label: "Pink Rose" },
    { bg: "#ede7f6", accent: "#9fa8da", label: "Lavender" },
    { bg: "#fff8e1", accent: "#d4af37", label: "Wedding" },
    { bg: "#e8f5e9", accent: "#81c784", label: "Spring" },
    { bg: "#fafafa", accent: "#bcaaa4", label: "Custom" },
  ],
  jewelry: [
    { bg: "#faf8f5", accent: "#b8860b", label: "Pearl Necklace" },
    { bg: "#fff5f5", accent: "#c9a89a", label: "Earrings" },
    { bg: "#fdf6e3", accent: "#d4af37", label: "Gold Bracelet" },
    { bg: "#f3e5f5", accent: "#9575cd", label: "Floral Pendant" },
    { bg: "#fce4ec", accent: "#e91e63", label: "Ring" },
    { bg: "#efebe9", accent: "#8d6e63", label: "Pearl Bracelet" },
  ],
};

function svg({ bg, accent, label, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.25"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#g)"/>
  <circle cx="400" cy="420" r="180" fill="${accent}" fill-opacity="0.15"/>
  <circle cx="400" cy="420" r="120" fill="${accent}" fill-opacity="0.2"/>
  <text x="400" y="720" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#4a4039">${label}</text>
  ${subtitle ? `<text x="400" y="770" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#8a7b6f">${subtitle}</text>` : ""}
</svg>`;
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

ensureDir(join(root, "hero"));
ensureDir(join(root, "categories"));
ensureDir(join(root, "bouquets"));
ensureDir(join(root, "jewelry"));

writeFileSync(
  join(root, "hero", "hero-main.png"),
  svg({ bg: "#f5ebe0", accent: "#c9a89a", label: "Handmade with Love", subtitle: "Bouquets & Jewelry" })
);

writeFileSync(
  join(root, "categories", "bouquet-cover.jpg"),
  svg({ bg: "#fce4ec", accent: "#d4a5a5", label: "Handmade Bouquet", subtitle: "Explore Collection" })
);

writeFileSync(
  join(root, "categories", "jewelry-cover.jpg"),
  svg({ bg: "#fdf6e3", accent: "#d4af37", label: "Jewelry", subtitle: "Explore Collection" })
);

const bouquetFiles = [
  "rose-bouquet",
  "pink-rose-bouquet",
  "lavender-bouquet",
  "wedding-bouquet",
  "spring-bouquet",
  "custom-bouquet",
];

bouquetFiles.forEach((file, i) => {
  writeFileSync(
    join(root, "bouquets", `${file}.jpg`),
    svg({ ...palette.bouquet[i], label: palette.bouquet[i].label, subtitle: "Placeholder Image" })
  );
});

const jewelryFiles = [
  "pearl-necklace",
  "handmade-earrings",
  "gold-bracelet",
  "floral-pendant",
  "handmade-ring",
  "pearl-bracelet",
];

jewelryFiles.forEach((file, i) => {
  writeFileSync(
    join(root, "jewelry", `${file}.jpg`),
    svg({ ...palette.jewelry[i], label: palette.jewelry[i].label, subtitle: "Placeholder Image" })
  );
});

console.log("Placeholder images generated successfully.");
