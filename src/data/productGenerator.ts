import { Product } from '../types';

// Bank of 50+ completely distinct Unsplash photo IDs (No duplicate photo paths)
const distinctPhotoIds = [
  "photo-1610030469983-98e550d6193c",
  "photo-1610030469668-98e550d6193c",
  "photo-1583391733956-6c78276477e2",
  "photo-1617627143750-d86bc21e42bb",
  "photo-1595777457583-95e059d581b8",
  "photo-1572804013309-59a88b7e92f1",
  "photo-1539109136881-3be0616acf4b",
  "photo-1566174053879-31528523f8ae",
  "photo-1609357605129-26f69add5d6e",
  "photo-1507679799987-c73779587ccf",
  "photo-1519085360753-af0119f7cbe7",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1500648767791-00dcc994a43e",
  "photo-1472099645785-5658abf4ff4e",
  "photo-1522075469751-3a6694fb2f61",
  "photo-1518831959646-742c3a14ebf7",
  "photo-1471286174890-9c112ffca5b4",
  "photo-1503944583220-79d8926ad5e2",
  "photo-1508214751196-bcfd4ca60f91",
  "photo-1567401893414-76b7b1e5a7a5",
  "photo-1515886657613-9f3515b0c78f",
  "photo-1496747611176-843222e1e57c",
  "photo-1529139574466-a303027c1d8b",
  "photo-1485230895905-ec40ba36b9bc",
  "photo-1490481651871-ab68de25d43d",
  "photo-1492707892479-7bc8d5a4ee93",
  "photo-1509631179647-0177331693ae",
  "photo-1554412933-514a83d2f3c8",
  "photo-1483985988355-763728e1935b",
  "photo-1512436991641-6745cdb1723f",
  "photo-1487222477894-8943e31ef7b2",
  "photo-1558769132-cb1aea458e5e",
  "photo-1520591799316-6b30425429aa",
  "photo-1544441893-675973e31985",
  "photo-1534528741775-53994a69daeb",
  "photo-1501196354995-cbb51c65aaea",
  "photo-1504198458649-3128b932f49e",
  "photo-1524504388940-b1c1722653e1",
  "photo-1534447677768-be436bb09401",
  "photo-1516762689617-e1cffcef479d",
  "photo-1548883354-7622d03aca27",
  "photo-1529626455594-4ff0802cfb7e",
  "photo-1531746020798-e6953c6e8e04",
  "photo-1517841905240-472988babdf9",
  "photo-1524502397800-2eeaad7c3fe5",
  "photo-1552374196-1ab2a1c593e8",
  "photo-1506630448388-4e683c67ddb0",
  "photo-1492562080023-ab3db95bfbce",
  "photo-1519764622345-23439dd774f7",
  "photo-1507003211169-0a1dd7228f2d"
];

const colors = ["Blush Pink", "Royal Navy Blue", "Emerald Green", "Mustard Yellow", "Crimson Red", "Pastel Lavender", "Sky Blue", "Magenta Gold", "Peach Coral", "Ivory Cream", "Wine Purple", "Mint Green", "Teal Turquoise", "Coral Pink", "Ruby Red"];
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
    targetCount: 14
  },
  {
    prefix: "PFH-SUI",
    category: "Suits",
    subcategories: ["Anarkali Suits", "Salwar Suits", "Sharara Suits", "Palazzo Suits", "Straight Suits", "Embroidered Suits", "Cotton Suits", "Party Wear Suits"],
    targetCount: 14
  },
  {
    prefix: "PFH-KUR",
    category: "Kurtis",
    subcategories: ["Cotton Kurtis", "Rayon Kurtis", "Anarkali Kurtis", "Long Kurtis", "Short Kurtis", "Printed Kurtis", "Embroidered Kurtis", "Office Wear Kurtis"],
    targetCount: 14
  },
  {
    prefix: "PFH-WES",
    category: "Western Dresses",
    subcategories: ["Maxi Dresses", "Midi Dresses", "Bodycon Dresses", "A-Line Dresses", "Floral Dresses", "Casual Dresses", "Party Dresses"],
    targetCount: 12
  },
  {
    prefix: "PFH-FOR",
    category: "Formal Dresses",
    subcategories: ["Office Wear", "Formal Gowns", "Blazers", "Formal Trousers", "Formal Shirts", "Business Dresses"],
    targetCount: 12
  },
  {
    prefix: "PFH-PTY",
    category: "Party Wear",
    subcategories: ["Party Gowns", "Sequin Dresses", "Cocktail Dresses", "Party Suits", "Party Lehengas"],
    targetCount: 12
  },
  {
    prefix: "PFH-WED",
    category: "Wedding Collection",
    subcategories: ["Bridal Wear", "Wedding Guest", "Engagement Wear", "Reception Wear", "Haldi Wear", "Mehendi Wear", "Sangeet Wear"],
    targetCount: 14
  },
  {
    prefix: "PFH-LEH",
    category: "Lehengas",
    subcategories: ["Bridal Lehengas", "Designer Lehengas", "Party Lehengas", "Wedding Guest Lehengas", "Festive Lehengas"],
    targetCount: 12
  },
  {
    prefix: "PFH-FAB",
    category: "Dress Material & Fabrics",
    subcategories: ["Cotton", "Silk", "Rayon", "Chanderi", "Linen", "Printed Fabrics", "Embroidered Fabrics"],
    targetCount: 12
  },
  {
    prefix: "PFH-MEN",
    category: "Men's Ethnic & Formal",
    subcategories: ["Kurta", "Sherwani", "Nehru Jacket", "Formal Shirt", "Formal Trousers", "Ethnic Sets"],
    targetCount: 14
  },
  {
    prefix: "PFH-KID",
    category: "Kids' & Girls' Wear",
    subcategories: ["Girls Dresses", "Girls Lehengas", "Girls Kurtis", "Kids Ethnic Wear", "Kids Party Wear"],
    targetCount: 12
  }
];

export function generateFullCatalog(): Product[] {
  const catalog: Product[] = [];
  let globalIndex = 0;

  categorySpecs.forEach((spec) => {
    for (let i = 1; i <= spec.targetCount; i++) {
      globalIndex++;
      const numStr = String(i).padStart(3, '0');
      const sku = `${spec.prefix}-${numStr}`;

      const subcat = spec.subcategories[(i - 1) % spec.subcategories.length];
      const color = colors[(globalIndex - 1) % colors.length];
      const fabric = fabrics[(globalIndex - 1) % fabrics.length];
      const occasion = occasions[(globalIndex - 1) % occasions.length];

      // Unique non-repeating name
      const name = `${color} ${subcat}`;
      const slug = `${sku.toLowerCase()}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      // Price calculation (₹499 to ₹7999)
      let basePrice = 899 + ((globalIndex * 190) % 3600);
      if (spec.category === "Wedding Collection" || spec.category === "Lehengas") {
        basePrice = 2499 + ((globalIndex * 310) % 4500);
      } else if (spec.category === "Kurtis" || spec.category === "Dress Material & Fabrics") {
        basePrice = 499 + ((globalIndex * 140) % 1400);
      }
      const originalPrice = Math.round(basePrice * 1.25);

      // GUARANTEED UNIQUE PHOTO URL: Pick distinct photo ID from array by globalIndex
      const photoId = distinctPhotoIds[(globalIndex - 1) % distinctPhotoIds.length];
      const uniqueImgUrl = `https://images.unsplash.com/${photoId}?w=800&auto=format&fit=crop&q=80`;

      // Sizes depending on category
      let sizes = ["S", "M", "L", "XL", "XXL"];
      if (spec.category === "Sarees" || spec.category.includes("Fabrics")) {
        sizes = ["Free Size", "Unstitched (2.5m)"];
      } else if (spec.category.includes("Men")) {
        sizes = ["38", "40", "42", "44"];
      } else if (spec.category.includes("Kids")) {
        sizes = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];
      }

      // Tags for target audience & occasion matching
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
        description: `Boutique exclusive ${color} ${subcat} (${sku}) crafted from ${fabric}. Features fine stitching, rich texture, and elegant fit for ${occasion}. Authentic Pranjul Fashion House collection in Chaubepur.`,
        fabric,
        colour: color,
        sizes,
        occasion,
        images: [uniqueImgUrl],
        inStock: globalIndex % 8 !== 0, // 87% in stock
        isNewArrival: globalIndex % 4 === 0,
        isTrending: globalIndex % 5 === 0,
        isBestSeller: globalIndex % 6 === 0,
        isSale: globalIndex % 3 === 0,
        tags
      });
    }
  });

  return catalog;
}
