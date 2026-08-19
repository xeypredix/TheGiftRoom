export const products = [
  {
    id: "bouquet-001",
    name: "Single Rose Bouquet",
    category: "bouquet",
    image: "/images/bouquets/single-rose-bouquet.jpeg",
  },
  {
    id: "bouquet-002",
    name: "Triple Rose Bouquet",
    category: "bouquet",
    image: "/images/bouquets/triple-rose-bouquet.jpeg",
  },
  
  {
    id: "jewelry-001",
    name: "Gold Plated Rowyn Necklace Set",
    category: "jewelry",
    image: "/images/jewelry/Gold Plated Rowyn Necklace Set.jpeg",
  },
  {
    id: "jewelry-002",
    name: "Salmart Necklace",
    category: "jewelry",
    image: "/images/jewelry/Salmart Necklace.jpeg",
  },
  {
    id: "jewelry-003",
    name: "Joya Necklace",
    category: "jewelry",
    image: "/images/jewelry/Joya Necklace.jpeg",
  },
  {
    id: "jewelry-004",
    name: "Aubrey Necklace Set",
    category: "jewelry",
    image: "/images/jewelry/Aubrey Necklace Set.jpeg",
  },
  {
    id: "jewelry-005",
    name: "Kaia Necklace Set",
    category: "jewelry",
    image: "/images/jewelry/Kaia Necklace Set.jpeg",
  },
  {
    id: "jewelry-006",
    name: "Nyomi Necklace",
    category: "jewelry",
    image: "/images/jewelry/Nyomi Necklace.jpeg",
  },
   {
    id: "jewelry-007",
    name: "Charlie Necklace Set",
    category: "jewelry",
    image: "/images/jewelry/Charlie Necklace Set.jpeg",
  },
  {
    id: "jewelry-008",
    name: "Promise Necklace",
    category: "jewelry",
    image: "/images/jewelry/Promise Necklace.jpeg",
  },
  {
    id: "jewelry-009",
    name: "Melanie Necklace Set",
    category: "jewelry",
    image: "/images/jewelry/Melanie Necklace Set.jpeg",
  },
  {
    id: "jewelry-0010",
    name: "Michaela Necklace",
    category: "jewelry",
    image: "/images/jewelry/Michaela Necklace.jpeg",
  },
  {
    id: "jewelry-011",
    name: "Sofia Necklace",
    category: "jewelry",
    image: "/images/jewelry/Sofia Necklace.jpeg",
  },
   {
    id: "jewelry-012",
    name: "Nora Necklace",
    category: "jewelry",
    image: "/images/jewelry/Nora Necklace.jpeg",
  },
   {
    id: "jewelry-014",
    name: "Felicity Necklace",
    category: "jewelry",
    image: "/images/jewelry/Felicity Necklace.jpeg",
  },
  {
    id: "jewelry-015",
    name: "Alora Necklace",
    category: "jewelry",
    image: "/images/jewelry/Alora Necklace.jpeg",
  },
  {
    id: "jewelry-016",
    name: "Elodie Necklace",
    category: "jewelry",
    image: "/images/jewelry/Elodie Necklace.jpeg",
  },
  {
    id: "jewelry-017",
    name: "Ella Necklace",
    category: "jewelry",
    image: "/images/jewelry/Ella Necklace.jpeg",
  },
  {
    id: "jewelry-018",
    name: "Emma Necklace",
    category: "jewelry",
    image: "/images/jewelry/Emma Necklace.jpeg",
  },
  {
    id: "jewelry-019",
    name: "Naomi Bracelet",
    category: "jewelry",
    image: "/images/jewelry/Naomi Bracelet.jpeg",
  },
  {
    id: "jewelry-020",
    name: "Palmer Bracelet",
    category: "jewelry",
    image: "/images/jewelry/Palmer Bracelet.jpeg",
  },
  {
    id: "jewelry-021",
    name: "Ximena Bracelet",
    category: "jewelry",
    image: "/images/jewelry/Ximena Bracelet.jpeg",
  },
  {
    id: "jewelry-022",
    name: "Alani Bracelet",
    category: "jewelry",
    image: "/images/jewelry/Alani Bracelet.jpeg",
  },
  {
    id: "jewelry-023",
    name: "Victoria bracelet",
    category: "jewelry",
    image: "/images/jewelry/Victoria bracelet.jpeg",
  },
  {
    id: "jewelry-024",
    name: "Peyton Earrings",
    category: "jewelry",
    image: "/images/jewelry/Peyton Earrings.jpeg",
  },
  {
    id: "jewelry-025",
    name: "Abigail Earrings",
    category: "jewelry",
    image: "/images/jewelry/Abigail Earrings.jpeg",
  },
  {
    id: "jewelry-026",
    name: "Herts Earrings",
    category: "jewelry",
    image: "/images/jewelry/Herts Earrings.jpeg",
  },
  {
    id: "jewelry-027",
    name: "Ivy Earings",
    category: "jewelry",
    image: "/images/jewelry/Ivy Earings.jpeg",
  },
  {
    id: "jewelry-028",
    name: "Malaya Earings",
    category: "jewelry",
    image: "/images/jewelry/Malaya Earings.jpeg",
  },
];

export const categoryConfig = {
  bouquet: {
    slug: "bouquets",
    title: "Handmade Bouquets",
    label: "Handmade Bouquet",
    coverImage: "/images/categories/bouquet-cover.jpg",
    description: "Explore our collection of handcrafted floral arrangements.",
  },
  jewelry: {
    slug: "jewelry",
    title: "Jewelry",
    label: "Jewelry",
    coverImage: "/images/categories/jewelry-cover.jpg",
    description: "Discover elegant handmade jewelry pieces.",
  },
};

export function getProductById(id) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
