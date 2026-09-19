import { Product } from '../types';

// Curated high quality fashion image banks per main category
const imageBanks: Record<string, string[]> = {
  Sarees: [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    "https://images.unsplash.com/photo-1610030469668-98e550d6193c",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8"
  ],
  Suits: [
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1"
  ],
  Kurtis: [
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e"
  ],
  "Western Dresses": [
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
  ],
  "Formal Dresses": [
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae"
  ],
  "Party Wear": [
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    "https://images.unsplash.com/photo-1610030469668-98e550d6193c",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
  ],
  "Wedding Collection": [
    "https://images.unsplash.com/photo-1610030469668-98e550d6193c",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
  ],
  Lehengas: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    "https://images.unsplash.com/photo-1610030469668-98e550d6193c",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb"
  ],
  "Dress Material & Fabrics": [
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2"
  ],
  "Men's Ethnic & Formal": [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
  ],
  "Kids' & Girls' Wear": [
    "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
    "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4",
    "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  ]
};

const colors = ["Blush Pink", "Royal Navy Blue", "Emerald Green", "Mustard Yellow", "Crimson Red", "Pastel Lavender", "Sky Blue", "Magenta Gold", "Peach Coral", "Ivory Cream", "Wine Purple", "Mint Green"];
const fabrics = ["Pure Cotton", "Banarasi Silk", "Chiffon", "Georgette", "Art Silk", "Chanderi Silk Blend", "Modal Cotton", "Rayon", "Velvet Silk", "Crepe Cotton", "Brocade Silk", "Linen Blend"];
const occasions = ["Casual / Daily Wear", "Workwear / Office", "Festive / Puja", "Party / Reception", "Wedding / Bridal", "Haldi / Mehendi", "Sangeet / Celebration"];

interface CategorySpec {
  prefix: string;
  category: string;
  subcategories: string[];
  targetCount: number;
}

const categorySpecs: CategorySpec[] = [
  {
    prefix: "PFH-SAR",
    category: "Sarees",
    subcategories: ["Banarasi Sarees", "Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Designer Sarees", "Party Wear Sarees", "Wedding Sarees"],
    targetCount: 30
  },
  {
    prefix: "PFH-SUI",
    category: "Suits",
    subcategories: ["Anarkali Suits", "Salwar Suits", "Sharara Suits", "Palazzo Suits", "Straight Suits", "Embroidered Suits", "Cotton Suits", "Party Wear Suits"],
    targetCount: 30
  },
  {
    prefix: "PFH-KUR",
    category: "Kurtis",
    subcategories: ["Cotton Kurtis", "Rayon Kurtis", "Anarkali Kurtis", "Long Kurtis", "Short Kurtis", "Printed Kurtis", "Embroidered Kurtis", "Office Wear Kurtis"],
    targetCount: 30
  },
  {
    prefix: "PFH-WES",
    category: "Western Dresses",
    subcategories: ["Maxi Dresses", "Midi Dresses", "Bodycon Dresses", "A-Line Dresses", "Floral Dresses", "Casual Dresses", "Party Dresses"],
    targetCount: 25
  },
  {
    prefix: "PFH-FOR",
    category: "Formal Dresses",
    subcategories: ["Office Wear", "Formal Gowns", "Blazers", "Formal Trousers", "Formal Shirts", "Business Dresses"],
    targetCount: 20
  },
  {
    prefix: "PFH-PTY",
    category: "Party Wear",
    subcategories: ["Party Gowns", "Sequin Dresses", "Cocktail Dresses", "Party Suits", "Party Lehengas"],
    targetCount: 25
  },
  {
    prefix: "PFH-WED",
    category: "Wedding Collection",
    subcategories: ["Bridal Wear", "Wedding Guest", "Engagement Wear", "Reception Wear", "Haldi Wear", "Mehendi Wear", "Sangeet Wear"],
    targetCount: 30
  },
  {
    prefix: "PFH-LEH",
    category: "Lehengas",
    subcategories: ["Bridal Lehengas", "Designer Lehengas", "Party Lehengas", "Wedding Guest Lehengas", "Festive Lehengas"],
    targetCount: 25
  },
  {
    prefix: "PFH-FAB",
    category: "Dress Material & Fabrics",
    subcategories: ["Cotton", "Silk", "Rayon", "Chanderi", "Linen", "Printed Fabrics", "Embroidered Fabrics"],
    targetCount: 25
  },
  {
    prefix: "PFH-MEN",
    category: "Men's Ethnic & Formal",
    subcategories: ["Kurta", "Sherwani", "Nehru Jacket", "Formal Shirt", "Formal Trousers", "Ethnic Sets"],
    targetCount: 25
  },
  {
    prefix: "PFH-KID",
    category: "Kids' & Girls' Wear",
    subcategories: ["Girls Dresses", "Girls Lehengas", "Girls Kurtis", "Kids Ethnic Wear", "Kids Party Wear"],
    targetCount: 25
  }
];

export function generateFullCatalog(): Product[] {
  const catalog: Product[] = [];
  let globalCount = 0;

  categorySpecs.forEach((spec) => {
    const images = imageBanks[spec.category] || imageBanks["Suits"];

    for (let i = 1; i <= spec.targetCount; i++) {
      globalCount++;
      const numStr = String(i).padStart(3, '0');
      const sku = `${spec.prefix}-${numStr}`;

      const subcat = spec.subcategories[(i - 1) % spec.subcategories.length];
      const color = colors[(i - 1) % colors.length];
      const fabric = fabrics[(i - 1) % fabrics.length];
      const occasion = occasions[(i - 1) % occasions.length];

      // Unique product name generator
      const name = `${color} ${subcat} (Edition ${i})`;
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

      // Price calculation (₹499 to ₹6999 depending on category)
      let basePrice = 899 + ((i * 170) % 3500);
      if (spec.category === "Wedding Collection" || spec.category === "Lehengas") {
        basePrice = 2499 + ((i * 350) % 4500);
      } else if (spec.category === "Kurtis" || spec.category === "Dress Material & Fabrics") {
        basePrice = 499 + ((i * 120) % 1500);
      }
      const originalPrice = Math.round(basePrice * 1.25);

      // Unique image per product using seed
      const imgBase = images[(i - 1) % images.length];
      const uniqueImg = `${imgBase}?w=800&auto=format&fit=crop&q=80&sig=${globalCount}`;

      // Sizes depending on category
      let sizes = ["S", "M", "L", "XL", "XXL"];
      if (spec.category === "Sarees" || spec.category.includes("Fabrics")) {
        sizes = ["Free Size", "Unstitched (2.5m)"];
      } else if (spec.category.includes("Men")) {
        sizes = ["38", "40", "42", "44"];
      } else if (spec.category.includes("Kids")) {
        sizes = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];
      }

      // Tags for target audience filtering
      const tags = [spec.category.toLowerCase(), subcat.toLowerCase(), color.toLowerCase(), fabric.toLowerCase()];
      if (spec.category.includes("Men")) tags.push("men");
      else if (spec.category.includes("Kids")) tags.push("kids");
      else if (spec.category.includes("Fabrics")) tags.push("fabrics");
      else tags.push("women");

      if (subcat.toLowerCase().includes("wedding") || spec.category.includes("Wedding")) tags.push("wedding");
      if (subcat.toLowerCase().includes("party") || spec.category.includes("Party")) tags.push("party");

      catalog.push({
        _id: sku,
        id: sku,
        name,
        slug,
        category: spec.category,
        subcategory: subcat,
        price: basePrice,
        originalPrice,
        description: `High quality ${color} ${subcat} crafted from ${fabric}. Features fine stitching, vibrant finish, and ideal comfort for ${occasion}. Authentic Pranjul Fashion House creation in Chaubepur.`,
        fabric,
        colour: color,
        sizes,
        occasion,
        images: [uniqueImg],
        inStock: i % 7 !== 0, // 90% in stock, occasional out of stock
        isNewArrival: i % 3 === 0,
        isTrending: i % 4 === 0,
        isBestSeller: i % 5 === 0,
        isSale: i % 2 === 0,
        tags
      });
    }
  });

  return catalog;
}
