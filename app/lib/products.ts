export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  src: string;
  tag: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "urban-flame-jacket",
    name: "Urban Flame Jacket",
    price: 189,
    src: "/img/product_jacket_1.png",
    tag: "BESTSELLER",
    description:
      "Engineered for the city warrior. The Urban Flame Jacket combines heavy-duty ripstop nylon with tactical utility pockets, reflective piping, and a signature LGHELYA emblem. Built for motion — designed to be seen.",
    details: [
      "100% Ripstop nylon shell",
      "Fleece-lined collar",
      "6 utility pockets including hidden chest zip",
      "Reflective orange piping",
      "Adjustable hem cord",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Signal Orange", hex: "#F97316" },
      { name: "Midnight Black", hex: "#0A0A0A" },
    ],
    images: ["/img/product_jacket_1.png"],
  },
  {
    id: 2,
    slug: "phantom-windbreaker",
    name: "Phantom Windbreaker",
    price: 149,
    src: "/img/product_jacket_2.png",
    tag: "NEW DROP",
    description:
      "Disappear into the night. The Phantom Windbreaker is crafted from a water-resistant microfibre shell with a clean matte finish. No logos, no noise — just silent energy. For those who move without being seen.",
    details: [
      "Water-resistant microfibre shell",
      "Packable into chest pocket",
      "Taped seams for light rain protection",
      "Slim athletic fit",
      "Two-way front zip",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Phantom Black", hex: "#1A1A1A" },
      { name: "Steel Grey", hex: "#6B7280" },
      { name: "Deep Navy", hex: "#1E3A5F" },
    ],
    images: ["/img/product_jacket_2.png"],
  },
  {
    id: 3,
    slug: "street-puffer-pro",
    name: "Street Puffer Pro",
    price: 219,
    src: "/img/product_jacket_3.png",
    tag: "LIMITED",
    description:
      "The boldest warmth in the game. The Street Puffer Pro features an oversized colour-block design with premium synthetic fill, oversized baffles, and a detachable hood. Street art meets high performance insulation.",
    details: [
      "Premium synthetic fill (650 fill power equivalent)",
      "Colour-block oversized baffles",
      "Detachable adjustable hood",
      "Two hand pockets + internal security zip",
      "Oversized silhouette",
      "Dry clean recommended",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Multicolor Block", hex: "#a855f7" },
      { name: "All Black", hex: "#0A0A0A" },
    ],
    images: ["/img/product_jacket_3.png"],
  },
    {
    id: 4,
    slug: "street-puffer-pro",
    name: "Street Puffer Pro",
    price: 219,
    src: "/img/product_jacket_3.png",
    tag: "SOLD",
    description:
      "The boldest warmth in the game. The Street Puffer Pro features an oversized colour-block design with premium synthetic fill, oversized baffles, and a detachable hood. Street art meets high performance insulation.",
    details: [
      "Premium synthetic fill (650 fill power equivalent)",
      "Colour-block oversized baffles",
      "Detachable adjustable hood",
      "Two hand pockets + internal security zip",
      "Oversized silhouette",
      "Dry clean recommended",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Multicolor Block", hex: "#a855f7" },
      { name: "All Black", hex: "#0A0A0A" },
    ],
    images: ["/img/product_jacket_3.png"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
