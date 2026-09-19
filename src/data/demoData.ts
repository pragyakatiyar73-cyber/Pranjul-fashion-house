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
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["women", "suit", "cotton", "pink", "daily wear"]
  },
  {
    _id: "p2",
    id: "p2",
    name: "Designer Sky Blue Silk Saree",
    slug: "designer-sky-blue-silk-saree",
    category: "Sarees",
    subcategory: "Silk Saree",
    price: 2499,
    originalPrice: 3200,
    description: "Premium soft silk saree adorned with intricate silver zari borders. Comes with an unstitched blouse piece.",
    fabric: "Art Silk",
    colour: "Sky Blue",
    sizes: ["Free Size"],
    occasion: "Party / Festive",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isSale: true,
    tags: ["women", "saree", "silk", "blue", "wedding"]
  },
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
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isBestSeller: true,
    isSale: true,
    tags: ["women", "kurti", "rayon", "yellow"]
  },
  {
    _id: "pm1",
    id: "pm1",
    name: "Men's Royal Silk Blend Kurta Pajama Set",
    slug: "mens-royal-silk-kurta-pajama",
    category: "Men's Ethnic & Formal",
    subcategory: "Kurta Pajama",
    price: 1899,
    originalPrice: 2499,
    description: "Classic silk blend mandarin collar men's kurta paired with comfortable churidar pajama for festive celebrations.",
    fabric: "Silk Blend",
    colour: "Maroon / Off-White",
    sizes: ["M", "L", "XL", "XXL"],
    occasion: "Festive / Wedding",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    tags: ["men", "kurta", "ethnic", "maroon"]
  },
  {
    _id: "pk1",
    id: "pk1",
    name: "Girl's Floral Lehenga Choli Set",
    slug: "girls-floral-lehenga-choli",
    category: "Kids' & Girls' Wear",
    subcategory: "Kids Lehenga",
    price: 1299,
    originalPrice: 1699,
    description: "Vibrant festive printed lehenga choli set designed for young girls. Soft lining for scratch-free comfort.",
    fabric: "Cotton Silk",
    colour: "Yellow / Pink",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    occasion: "Festive / Birthday",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    tags: ["kids", "girls", "lehenga", "yellow"]
  },
  {
    _id: "p4",
    id: "p4",
    name: "Unstitched Chanderi Dress Material Set",
    slug: "unstitched-chanderi-dress-material",
    category: "Dress Material & Fabrics",
    subcategory: "Unstitched Fabric",
    price: 999,
    originalPrice: 1299,
    description: "3-piece unstitched Chanderi suit material set including embroidered top fabric and zari border dupatta.",
    fabric: "Chanderi Silk Blend",
    colour: "Magenta / Gold",
    sizes: ["Unstitched (2.5m)"],
    occasion: "Festive / Gift",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isTrending: true,
    isSale: true,
    tags: ["fabrics", "unstitched", "chanderi", "budget"]
  },
  {
    _id: "p5",
    id: "p5",
    name: "Royal Navy Blue Party Wear Lehenga",
    slug: "royal-navy-blue-party-wear-lehenga",
    category: "Lehengas",
    subcategory: "Semi-Stitched Lehenga",
    price: 3499,
    originalPrice: 4500,
    description: "Semi-stitched velvet embroidered lehenga with intricate sequin highlights and net embroidered dupatta.",
    fabric: "Velvet & Net",
    colour: "Navy Blue",
    sizes: ["Semi-Stitched"],
    occasion: "Wedding / Reception",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["women", "lehenga", "wedding", "navy blue"]
  },
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
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isNewArrival: true,
    tags: ["women", "western", "maxi dress", "peach"]
  },
  {
    _id: "pm2",
    id: "pm2",
    name: "Men's Embroidered Nehru Jacket with Kurta",
    slug: "mens-nehru-jacket-kurta-set",
    category: "Men's Ethnic & Formal",
    subcategory: "Nehru Jacket Set",
    price: 2299,
    originalPrice: 2899,
    description: "Woven brocade Nehru vest jacket paired with pure cotton full sleeve kurta and white pyjama.",
    fabric: "Brocade & Cotton",
    colour: "Gold / White",
    sizes: ["38", "40", "42", "44"],
    occasion: "Wedding / Reception",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    inStock: true,
    isTrending: true,
    tags: ["men", "nehru jacket", "ethnic", "gold"]
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
