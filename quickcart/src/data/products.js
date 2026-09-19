export const LOCATIONS = [
  { id: "downtown", label: "Downtown Hub", eta: "15–25 min" },
  { id: "riverside", label: "Riverside", eta: "20–30 min" },
  { id: "hillside", label: "Hillside Market", eta: "25–35 min" },
  { id: "westend", label: "West End", eta: "18–28 min" },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "produce", label: "Produce" },
  { id: "dairy", label: "Dairy" },
  { id: "bakery", label: "Bakery" },
  { id: "pantry", label: "Pantry" },
  { id: "drinks", label: "Drinks" },
];

/** Original SVG product art — geometric, no external image deps */
function productSvg(bg, accent, shape) {
  const shapes = {
    tomato: `<circle cx="200" cy="155" r="58" fill="#e85d4c"/><circle cx="200" cy="155" r="42" fill="#f07868"/><ellipse cx="200" cy="100" rx="18" ry="10" fill="#2f7a45"/><rect x="194" y="88" width="12" height="18" rx="4" fill="#2a6b3c"/>`,
    leaf: `<ellipse cx="200" cy="160" rx="70" ry="40" fill="#3d9b6a" transform="rotate(-25 200 160)"/><ellipse cx="210" cy="150" rx="50" ry="28" fill="#56b882" transform="rotate(-15 210 150)"/><path d="M160 180 Q200 120 250 140" stroke="#2a6b3c" stroke-width="3" fill="none"/>`,
    banana: `<path d="M130 100 Q100 180 160 220 Q220 250 270 200 Q240 160 220 120 Q180 90 130 100Z" fill="#f0c84a"/><path d="M150 120 Q140 170 175 205" stroke="#d4a820" stroke-width="4" fill="none"/>`,
    egg: `<ellipse cx="200" cy="155" rx="48" ry="62" fill="#f7f2e8"/><ellipse cx="185" cy="135" rx="14" ry="20" fill="rgba(255,255,255,0.7)"/>`,
    butter: `<rect x="140" y="120" width="120" height="70" rx="10" fill="#f5d98a"/><rect x="150" y="130" width="100" height="20" rx="4" fill="#ffe9b0"/>`,
    milk: `<rect x="165" y="95" width="70" height="120" rx="12" fill="#eef4f8"/><rect x="175" y="85" width="50" height="20" rx="6" fill="#d5e0e8"/><rect x="180" y="130" width="40" height="50" rx="4" fill="#0a5c45" opacity="0.15"/>`,
    bread: `<ellipse cx="200" cy="170" rx="90" ry="45" fill="#c9955a"/><ellipse cx="200" cy="155" rx="80" ry="38" fill="#e0b074"/><circle cx="170" cy="150" r="8" fill="#c9955a" opacity="0.5"/><circle cx="210" cy="145" r="7" fill="#c9955a" opacity="0.5"/>`,
    pastry: `<path d="M200 100 L230 160 L200 210 L170 160 Z" fill="#e0a86a"/><path d="M200 120 L218 155 L200 185 L182 155 Z" fill="#f0c48a"/>`,
    bottle: `<rect x="175" y="110" width="50" height="100" rx="8" fill="#6b8f3c"/><rect x="185" y="90" width="30" height="25" rx="4" fill="#3d5c22"/><ellipse cx="200" cy="210" rx="28" ry="10" fill="#56752f"/>`,
    grain: `<ellipse cx="200" cy="165" rx="55" ry="35" fill="#d9c9a0"/><path d="M160 165 Q200 130 240 165 Q200 200 160 165" fill="#c4b078"/>`,
    droplet: `<path d="M200 95 C200 95 150 160 150 190 A50 50 0 0 0 250 190 C250 160 200 95 200 95Z" fill="#5aa0c4"/><ellipse cx="185" cy="175" rx="12" ry="18" fill="rgba(255,255,255,0.35)"/>`,
    cup: `<path d="M155 120 H245 L230 210 H170 Z" fill="#5c4033"/><path d="M245 130 H265 A20 20 0 0 1 265 175 H240" stroke="#5c4033" stroke-width="10" fill="none"/><rect x="160" y="110" width="80" height="14" rx="4" fill="#3d2a22"/>`,
  };

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="${accent}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#g)"/>
    <circle cx="320" cy="60" r="70" fill="rgba(255,255,255,0.18)"/>
    <circle cx="60" cy="240" r="50" fill="rgba(255,255,255,0.12)"/>
    ${shapes[shape] || ""}
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const PRODUCTS = [
  {
    id: "p1",
    name: "Heirloom Tomatoes",
    category: "produce",
    price: 4.99,
    unit: "lb",
    description: "Sun-ripened, ready for tonight’s salad.",
    image: productSvg("#1a8a68", "#0a5c45", "tomato"),
  },
  {
    id: "p2",
    name: "Baby Spinach",
    category: "produce",
    price: 3.49,
    unit: "bag",
    description: "Crisp leaves, washed and packed.",
    image: productSvg("#2f9e7a", "#126b4f", "leaf"),
  },
  {
    id: "p3",
    name: "Organic Bananas",
    category: "produce",
    price: 1.29,
    unit: "lb",
    description: "Perfectly ripe for snacking.",
    image: productSvg("#e8c547", "#c9a012", "banana"),
  },
  {
    id: "p4",
    name: "Farm Eggs (12)",
    category: "dairy",
    price: 5.79,
    unit: "carton",
    description: "Free-range, large grade A.",
    image: productSvg("#f0d9a0", "#d4b56a", "egg"),
  },
  {
    id: "p5",
    name: "Cultured Butter",
    category: "dairy",
    price: 4.25,
    unit: "stick",
    description: "European-style, unsalted.",
    image: productSvg("#f5e6c8", "#e0c48a", "butter"),
  },
  {
    id: "p6",
    name: "Whole Milk",
    category: "dairy",
    price: 3.99,
    unit: "half gal",
    description: "Creamy and cold from the dairy.",
    image: productSvg("#e8f0f5", "#b8c9d4", "milk"),
  },
  {
    id: "p7",
    name: "Sourdough Loaf",
    category: "bakery",
    price: 5.5,
    unit: "loaf",
    description: "Crackly crust, soft crumb.",
    image: productSvg("#c4956a", "#8f5f38", "bread"),
  },
  {
    id: "p8",
    name: "Butter Croissants",
    category: "bakery",
    price: 6.99,
    unit: "4-pack",
    description: "Flaky layers, baked this morning.",
    image: productSvg("#d4a574", "#a66d3a", "pastry"),
  },
  {
    id: "p9",
    name: "Extra Virgin Olive Oil",
    category: "pantry",
    price: 12.99,
    unit: "500 ml",
    description: "Cold-pressed, peppery finish.",
    image: productSvg("#6b8f3c", "#3d5c22", "bottle"),
  },
  {
    id: "p10",
    name: "Basmati Rice",
    category: "pantry",
    price: 7.49,
    unit: "2 lb",
    description: "Fragrant long-grain staple.",
    image: productSvg("#d9c9a0", "#b8a574", "grain"),
  },
  {
    id: "p11",
    name: "Sparkling Water",
    category: "drinks",
    price: 4.99,
    unit: "8-pack",
    description: "Crisp bubbles, zero sugar.",
    image: productSvg("#7eb8d4", "#3d7ea0", "droplet"),
  },
  {
    id: "p12",
    name: "Cold Brew Coffee",
    category: "drinks",
    price: 5.49,
    unit: "bottle",
    description: "Smooth roast, ready to pour.",
    image: productSvg("#5c4033", "#2e211c", "cup"),
  },
];
