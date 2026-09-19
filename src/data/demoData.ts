import { Product, Category, CollectionItem, Review, StoreSettings, GalleryItem } from '../types';

export const initialStoreSettings: StoreSettings = {
  brandName: "Pranjul Fashion House",
  tagline: "Style for Every You",
  location: "Chaubepur, Uttar Pradesh",
  address: "Main Market Road, Chaubepur, Varanasi Outer, Uttar Pradesh 221104",
  shopTiming: "9:00 AM - 9:00 PM (Mon - Sun)",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  mapEmbedUrl: "https://maps.google.com/?q=Chaubepur+Uttar+Pradesh",
  announcementText: "Latest Collections | Women's, Men's & Kids' Fashion | Quality Service in Chaubepur"
};

export const initialCategories: Category[] = [
  {
    id: "sarees",
    name: "Sarees",
    slug: "sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
    description: "Pure Silk, Banarasi, Chiffon & Georgette Sarees",
    count: 18
  },
  {
    id: "suits",
    name: "Suits",
    slug: "suits",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80",
    description: "Anarkali, Straight Cut, Sharara & Palazzo Suits",
    count: 24
  },
  {
    id: "kurtis",
    name: "Kurtis",
    slug: "kurtis",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
    description: "Cotton, Rayon, Silk & Designer Casual Kurtis",
    count: 30
  },
  {
    id: "mens-wear",
    name: "Men's Ethnic & Formal",
    slug: "mens-wear",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    description: "Kurta Pajama Sets, Sherwanis & Jackets",
    count: 16
  },
  {
    id: "kids-wear",
    name: "Kids' & Girls' Wear",
    slug: "kids-wear",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80",
    description: "Cute Frocks, Kid Lehengas & Ethnic Kurta Sets",
    count: 14
  },
  {
    id: "dress-material",
    name: "Dress Material & Fabrics",
    slug: "dress-material",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    description: "Unstitched Cotton, Chanderi & Silk Suit Fabrics",
    count: 15
  },
  {
    id: "lehengas",
    name: "Lehengas",
    slug: "lehengas",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    description: "Bridal, Semi-Bridal & Festive Designer Lehengas",
    count: 12
  },
  {
    id: "western-dresses",
    name: "Western Dresses",
    slug: "western-dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    description: "Maxi, Midi & Floral Chic Western Wear",
    count: 20
  },
  {
    id: "wedding-collection",
    name: "Wedding Collection",
    slug: "wedding-collection",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    description: "Royal Bridal & Festive Ceremonial Wear",
    count: 15
  }
];

export const initialCollections: CollectionItem[] = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    slug: "new-arrivals",
    coverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80",
    description: "Fresh styles and seasonal trends just added to our Chaubepur boutique.",
    badge: "Just Arrived"
  },
  {
    id: "wedding-specials",
    title: "Wedding Collection",
    slug: "wedding-collection",
    coverImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
    description: "Royal Lehengas, Banarasi Sarees, and Heavy Anarkalis for your special day.",
    badge: "Royal Special"
  },
  {
    id: "mens-groom",
    title: "Men's Celebration Edit",
    slug: "mens-wear",
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
    description: "Silk Kurta Sets, Nehru Jackets, and Tailored Sherwanis.",
    badge: "Men's Special"
  },
  {
    id: "kids-festive",
    title: "Kids' Festive Wear",
    slug: "kids-wear",
    coverImage: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80",
    description: "Charming traditional outfits crafted for young boys & girls.",
    badge: "Kids & Teens"
  }
];

export const initialProducts: Product[] = [
  // --- WOMEN'S SUITS ---
  {
    _id: "p1",
    id: "p1",
    name: "Pink Cotton Embroidered Suit Set",
    slug: "pink-cotton-suit-set",
    category: "Suits",
    subcategory: "Straight Cut",
    price: 1499,
    originalPrice: 1999,
    description: "Elegantly handcrafted soft cotton straight suit set paired with a printed dupatta and trousers.",
    fabric: "100% Pure Cotton",
    colour: "Blush Pink",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Casual / Workwear",
    images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["women", "suit", "cotton", "pink", "daily wear"]
  },
  {
    _id: "p12",
    id: "p12",
    name: "Royal Emerald Green Anarkali Suit",
    slug: "emerald-green-anarkali-suit",
    category: "Suits",
    subcategory: "Anarkali Suit",
    price: 2799,
    originalPrice: 3499,
    description: "Floor-length georgette Anarkali decorated with mirror work and zari embroidery.",
    fabric: "Georgette",
    colour: "Emerald Green",
    sizes: ["M", "L", "XL", "XXL"],
    occasion: "Festive / Wedding",
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isTrending: true,
    tags: ["women", "suit", "anarkali", "green"]
  },
  {
    _id: "p13",
    id: "p13",
    name: "Mustard Yellow Sharara Suit Set",
    slug: "mustard-yellow-sharara-suit",
    category: "Suits",
    subcategory: "Sharara Suit",
    price: 1999,
    originalPrice: 2599,
    description: "Vibrant short kurti with heavy flare sharara pants and embroidered dupatta.",
    fabric: "Rayon Cotton",
    colour: "Mustard Yellow",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Haldi / Festive",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isSale: true,
    tags: ["women", "suit", "sharara", "yellow"]
  },

  // --- SAREES ---
  {
    _id: "p2",
    id: "p2",
    name: "Designer Sky Blue Silk Saree",
    slug: "designer-sky-blue-silk-saree",
    category: "Sarees",
    subcategory: "Silk Saree",
    price: 2499,
    originalPrice: 3200,
    description: "Premium soft silk saree adorned with intricate silver zari borders.",
    fabric: "Art Silk",
    colour: "Sky Blue",
    sizes: ["Free Size"],
    occasion: "Party / Festive",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isSale: true,
    tags: ["women", "saree", "silk", "blue"]
  },
  {
    _id: "p14",
    id: "p14",
    name: "Crimson Red Katan Banarasi Silk Saree",
    slug: "crimson-red-banarasi-silk-saree",
    category: "Sarees",
    subcategory: "Banarasi Saree",
    price: 3499,
    originalPrice: 4500,
    description: "Authentic Banarasi weaving with golden zari kadwa motif pallu.",
    fabric: "Banarasi Katan Silk",
    colour: "Crimson Red",
    sizes: ["Free Size"],
    occasion: "Bridal / Wedding",
    images: ["https://images.unsplash.com/photo-1610030469668-98e550d6193c?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isBestSeller: true,
    tags: ["women", "saree", "banarasi", "red", "wedding"]
  },
  {
    _id: "p15",
    id: "p15",
    name: "Floral Floral Chiffon Party Saree",
    slug: "floral-chiffon-party-saree",
    category: "Sarees",
    subcategory: "Chiffon Saree",
    price: 1699,
    originalPrice: 2199,
    description: "Feather-light printed chiffon saree with scalloped lace border.",
    fabric: "Chiffon",
    colour: "Pastel Lavender",
    sizes: ["Free Size"],
    occasion: "Party / Farewell",
    images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    tags: ["women", "saree", "chiffon", "lavender"]
  },

  // --- KURTIS ---
  {
    _id: "p3",
    id: "p3",
    name: "Rayon Floral Printed Kurti",
    slug: "rayon-floral-printed-kurti",
    category: "Kurtis",
    subcategory: "A-Line Kurti",
    price: 1199,
    originalPrice: 1499,
    description: "Lightweight rayon A-line long kurti featuring delicate floral block prints.",
    fabric: "Premium Rayon",
    colour: "Yellow / Mint",
    sizes: ["M", "L", "XL"],
    occasion: "Casual",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isBestSeller: true,
    isSale: true,
    tags: ["women", "kurti", "rayon", "yellow"]
  },
  {
    _id: "p16",
    id: "p16",
    name: "Lucknowi Chikankari White Kurti",
    slug: "lucknowi-chikankari-white-kurti",
    category: "Kurtis",
    subcategory: "Chikankari Kurti",
    price: 899,
    originalPrice: 1299,
    description: "Traditional hand-embroidered white Modal cotton kurti.",
    fabric: "Modal Cotton",
    colour: "Pure White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Casual / Summer",
    images: ["https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    tags: ["women", "kurti", "chikankari", "white"]
  },

  // --- MEN'S ETHNIC & FORMAL ---
  {
    _id: "pm1",
    id: "pm1",
    name: "Men's Royal Silk Blend Kurta Pajama Set",
    slug: "mens-royal-silk-kurta-pajama",
    category: "Men's Ethnic & Formal",
    subcategory: "Kurta Pajama",
    price: 1899,
    originalPrice: 2499,
    description: "Classic silk blend mandarin collar men's kurta paired with comfortable churidar pajama.",
    fabric: "Silk Blend",
    colour: "Deep Maroon",
    sizes: ["M", "L", "XL", "XXL"],
    occasion: "Festive / Wedding",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    tags: ["men", "kurta", "ethnic", "maroon"]
  },
  {
    _id: "pm2",
    id: "pm2",
    name: "Men's Embroidered Nehru Jacket Set",
    slug: "mens-nehru-jacket-kurta-set",
    category: "Men's Ethnic & Formal",
    subcategory: "Nehru Jacket Set",
    price: 2299,
    originalPrice: 2899,
    description: "Woven brocade Nehru vest jacket paired with pure cotton full sleeve kurta and pyjama.",
    fabric: "Brocade & Cotton",
    colour: "Royal Gold / Cream",
    sizes: ["38", "40", "42", "44"],
    occasion: "Wedding / Reception",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isTrending: true,
    tags: ["men", "nehru jacket", "ethnic", "gold"]
  },
  {
    _id: "pm3",
    id: "pm3",
    name: "Men's Designer Wedding Sherwani Set",
    slug: "mens-wedding-sherwani-set",
    category: "Men's Ethnic & Formal",
    subcategory: "Sherwani",
    price: 4999,
    originalPrice: 6500,
    description: "Grand groom velvet wedding sherwani decorated with antique thread embroidery.",
    fabric: "Velvet Silk",
    colour: "Ivory Cream / Gold",
    sizes: ["38", "40", "42"],
    occasion: "Wedding / Groom",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isBestSeller: true,
    tags: ["men", "sherwani", "wedding", "groom"]
  },
  {
    _id: "pm4",
    id: "pm4",
    name: "Men's Pure Cotton Pathani Suit",
    slug: "mens-cotton-pathani-suit",
    category: "Men's Ethnic & Formal",
    subcategory: "Pathani Suit",
    price: 1499,
    originalPrice: 1899,
    description: "Comfortable breathable cotton Pathani kurta set with shirt collar and shoulder tabs.",
    fabric: "100% Cotton",
    colour: "Navy Blue",
    sizes: ["M", "L", "XL", "XXL"],
    occasion: "Casual / Festive",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    tags: ["men", "pathani", "cotton", "blue"]
  },
  {
    _id: "pm5",
    id: "pm5",
    name: "Men's Premium Formal Blazer & Trousers",
    slug: "mens-formal-blazer-trousers",
    category: "Men's Ethnic & Formal",
    subcategory: "Formal Suit",
    price: 3299,
    originalPrice: 4200,
    description: "Sharp slim fit formal suit blazer and trouser duo for business meetings and receptions.",
    fabric: "Terry Rayon",
    colour: "Charcoal Grey",
    sizes: ["38", "40", "42", "44"],
    occasion: "Formal / Party",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    tags: ["men", "formal", "suit", "blazer"]
  },

  // --- KIDS' WEAR ---
  {
    _id: "pk1",
    id: "pk1",
    name: "Girl's Floral Lehenga Choli Set",
    slug: "girls-floral-lehenga-choli",
    category: "Kids' & Girls' Wear",
    subcategory: "Kids Lehenga",
    price: 1299,
    originalPrice: 1699,
    description: "Vibrant festive printed lehenga choli set designed for young girls.",
    fabric: "Cotton Silk",
    colour: "Yellow / Pink",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    occasion: "Festive / Birthday",
    images: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    tags: ["kids", "girls", "lehenga", "yellow"]
  },
  {
    _id: "pk2",
    id: "pk2",
    name: "Boy's Ethnic Kurta Pyjama with Vest",
    slug: "boys-kurta-pyjama-vest-set",
    category: "Kids' & Girls' Wear",
    subcategory: "Boys Kurta Set",
    price: 999,
    originalPrice: 1399,
    description: "Adorable festive cotton kurta pyjama set with printed Nehru jacket vest.",
    fabric: "Pure Cotton",
    colour: "Royal Blue / Gold",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    occasion: "Festive / Wedding",
    images: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isTrending: true,
    tags: ["kids", "boys", "kurta", "blue"]
  },

  // --- DRESS MATERIAL & FABRICS ---
  {
    _id: "p4",
    id: "p4",
    name: "Unstitched Chanderi Dress Material Set",
    slug: "unstitched-chanderi-dress-material",
    category: "Dress Material & Fabrics",
    subcategory: "Unstitched Fabric",
    price: 999,
    originalPrice: 1299,
    description: "3-piece unstitched Chanderi suit material set including embroidered top fabric.",
    fabric: "Chanderi Silk Blend",
    colour: "Magenta / Gold",
    sizes: ["Unstitched (2.5m)"],
    occasion: "Festive / Gift",
    images: ["https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isTrending: true,
    isSale: true,
    tags: ["fabrics", "unstitched", "chanderi", "budget"]
  },
  {
    _id: "p17",
    id: "p17",
    name: "Jaipuri Cotton Printed Suit Material",
    slug: "jaipuri-cotton-suit-material",
    category: "Dress Material & Fabrics",
    subcategory: "Cotton Material",
    price: 799,
    originalPrice: 1099,
    description: "Authentic Jaipuri hand block print 100% cotton suit material with cotton dupatta.",
    fabric: "100% Cotton",
    colour: "Indigo Blue",
    sizes: ["Unstitched (2.5m)"],
    occasion: "Daily Wear / Work",
    images: ["https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isBestSeller: true,
    tags: ["fabrics", "cotton", "jaipuri", "unstitched"]
  },

  // --- LEHENGAS ---
  {
    _id: "p5",
    id: "p5",
    name: "Royal Navy Blue Party Wear Lehenga",
    slug: "royal-navy-blue-party-wear-lehenga",
    category: "Lehengas",
    subcategory: "Semi-Stitched Lehenga",
    price: 3499,
    originalPrice: 4500,
    description: "Semi-stitched velvet embroidered lehenga with intricate sequin highlights.",
    fabric: "Velvet & Net",
    colour: "Navy Blue",
    sizes: ["Semi-Stitched"],
    occasion: "Wedding / Reception",
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["women", "lehenga", "wedding", "navy blue"]
  },

  // --- WESTERN DRESSES ---
  {
    _id: "p6",
    id: "p6",
    name: "Peach Floral Georgette Western Maxi Dress",
    slug: "peach-floral-georgette-western-maxi",
    category: "Western Dresses",
    subcategory: "Maxi Dress",
    price: 1299,
    originalPrice: 1699,
    description: "Graceful peach tiered georgette maxi dress with ruffled sleeves and soft cotton lining.",
    fabric: "Georgette",
    colour: "Peach",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Western / Party",
    images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"],
    inStock: true,
    isNewArrival: true,
    tags: ["women", "western", "maxi dress", "peach"]
  }
];

export const initialReviews: Review[] = [
  {
    id: "r1",
    name: "Sunita Verma",
    rating: 5,
    comment: "Bought my sister's wedding suit set from Pranjul Fashion House in Chaubepur. Fabric quality is amazing!",
    date: "2026-02-14",
    location: "Chaubepur, Varanasi",
    isApproved: true
  },
  {
    id: "r2",
    name: "Pooja Singh",
    rating: 5,
    comment: "Got a silk saree and a men's kurta set for my husband. Genuine pricing and great hospitality.",
    date: "2026-02-28",
    location: "Chaubepur",
    isApproved: true
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Boutique Display Counter",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&auto=format&fit=crop&q=80",
    category: "Store Interior"
  }
];
