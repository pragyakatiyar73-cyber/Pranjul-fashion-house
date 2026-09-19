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
  announcementText: "Latest Collections | Quality Fashion | Trusted Service in Chaubepur"
};

export const initialCategories: Category[] = [
  {
    id: "sarees",
    name: "Sarees",
    slug: "sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600",
    description: "Pure Silk, Banarasi, Chiffon & Georgette Sarees",
    count: 14
  },
  {
    id: "suits",
    name: "Suits",
    slug: "suits",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=600",
    description: "Anarkali, Straight Cut, Sharara & Palazzo Suits",
    count: 18
  },
  {
    id: "kurtis",
    name: "Kurtis",
    slug: "kurtis",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600",
    description: "Cotton, Rayon, Silk & Designer Casual & Work Kurtis",
    count: 22
  },
  {
    id: "dress-material",
    name: "Dress Material",
    slug: "dress-material",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=600",
    description: "Unstitched Cotton, Chanderi & Silk Suit Fabrics",
    count: 12
  },
  {
    id: "lehengas",
    name: "Lehengas",
    slug: "lehengas",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600",
    description: "Bridal, Semi-Bridal & Festive Designer Lehengas",
    count: 9
  },
  {
    id: "western-dresses",
    name: "Western Dresses",
    slug: "western-dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
    description: "Maxi, Midi & Floral Chic Western Wear",
    count: 15
  },
  {
    id: "formal-dresses",
    name: "Formal Dresses",
    slug: "formal-dresses",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600",
    description: "Elegant Office & Professional Wear",
    count: 10
  },
  {
    id: "party-wear",
    name: "Party Wear",
    slug: "party-wear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600",
    description: "Gowns, Indo-Western & Embellished Party Outfits",
    count: 16
  },
  {
    id: "wedding-collection",
    name: "Wedding Collection",
    slug: "wedding-collection",
    image: "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=600",
    description: "Royal Bridal & Festive Ceremonial Wear",
    count: 11
  }
];

export const initialCollections: CollectionItem[] = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    slug: "new-arrivals",
    coverImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
    description: "Fresh styles and seasonal trends just added to our Chaubepur boutique.",
    badge: "Just Arrived"
  },
  {
    id: "wedding-specials",
    title: "Wedding Collection",
    slug: "wedding-collection",
    coverImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    description: "Royal Lehengas, Banarasi Sarees, and Heavy Anarkalis for your special day.",
    badge: "Royal Special"
  },
  {
    id: "festive-vibes",
    title: "Festive Collection",
    slug: "festive-collection",
    coverImage: "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    description: "Vibrant ethnic wear crafted for Puja, Teej, Karwa Chauth, and Diwali.",
    badge: "Up to 30% Off"
  },
  {
    id: "trending-now",
    title: "Trending Now",
    slug: "trending-now",
    coverImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800",
    description: "Most loved designs picked by our Chaubepur shoppers.",
    badge: "Bestseller"
  },
  {
    id: "everyday-comfort",
    title: "Everyday Fashion",
    slug: "everyday-fashion",
    coverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800",
    description: "Breathable pure cotton suit sets & daily wear kurtis.",
    badge: "Everyday Essentials"
  }
];

export const initialProducts: Product[] = [
  {
    _id: "p1",
    id: "p1",
    name: "Pink Cotton Suit Set with Dupatta",
    slug: "pink-cotton-suit-set",
    category: "Suits",
    subcategory: "Straight Cut",
    price: 1499,
    originalPrice: 1999,
    description: "Elegantly handcrafted soft cotton straight suit set paired with a printed chiffon dupatta and comfortable trousers. Perfect for casual wear and daily outings.",
    fabric: "100% Pure Cotton",
    colour: "Blush Pink",
    sizes: ["S", "M", "L", "XL", "XXL"],
    occasion: "Casual / Workwear",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    isSale: false,
    tags: ["suit", "cotton", "pink", "daily wear", "workwear"]
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
    description: "Premium soft silk saree adorned with intricate silver zari borders and floral weave throughout the pallu. Comes with an unstitched blouse piece.",
    fabric: "Art Silk",
    colour: "Sky Blue",
    sizes: ["Free Size"],
    occasion: "Party / Festive",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    tags: ["saree", "silk", "blue", "wedding", "festive"]
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
    description: "Lightweight rayon A-line long kurti featuring delicate floral block prints and three-quarter sleeves. Easy to care and ultra-comfortable.",
    fabric: "Premium Rayon",
    colour: "Yellow / Mint",
    sizes: ["M", "L", "XL"],
    occasion: "Casual",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    tags: ["kurti", "rayon", "yellow", "casual"]
  },
  {
    _id: "p4",
    id: "p4",
    name: "Unstitched Chanderi Dress Material Set",
    slug: "unstitched-chanderi-dress-material",
    category: "Dress Material",
    subcategory: "Unstitched Fabric",
    price: 999,
    originalPrice: 1299,
    description: "3-piece unstitched Chanderi suit material set including embroidered top fabric, santoon bottom fabric, and woven zari border dupatta.",
    fabric: "Chanderi Silk Blend",
    colour: "Magenta / Gold",
    sizes: ["Unstitched (2.5m)"],
    occasion: "Festive / Gift",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: false,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    tags: ["dress material", "unstitched", "chanderi", "budget"]
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
    description: "Semi-stitched velvet embroidered lehenga with intricate sequin highlights, heavy blouse piece, and net embroidered dupatta.",
    fabric: "Velvet & Net",
    colour: "Navy Blue",
    sizes: ["Semi-Stitched"],
    occasion: "Wedding / Reception",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    isSale: false,
    tags: ["lehenga", "wedding", "navy blue", "party wear"]
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
    description: "Graceful peach tiered georgette maxi dress with ruffled sleeves, soft cotton lining, and matching belt.",
    fabric: "Georgette",
    colour: "Peach",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Western / Party",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: false,
    isBestSeller: false,
    isSale: false,
    tags: ["western", "maxi dress", "peach", "georgette"]
  },
  {
    _id: "p7",
    id: "p7",
    name: "Plum Wine Formal Office Blazer Dress Set",
    slug: "plum-wine-formal-office-dress",
    category: "Formal Dresses",
    subcategory: "Workwear Set",
    price: 1899,
    originalPrice: 2299,
    description: "Sharp and sophisticated plum wine formal trousers & tunic set designed for office wear, interviews, and modern formal occasions.",
    fabric: "Crepe Cotton",
    colour: "Plum Wine",
    sizes: ["M", "L", "XL"],
    occasion: "Formal / Office",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: false,
    isTrending: true,
    isBestSeller: false,
    isSale: false,
    tags: ["formal", "office wear", "plum", "trousers"]
  },
  {
    _id: "p8",
    id: "p8",
    name: "Embellished Maroon Anarkali Wedding Suit",
    slug: "maroon-anarkali-wedding-suit",
    category: "Wedding Collection",
    subcategory: "Anarkali Suit",
    price: 2899,
    originalPrice: 3800,
    description: "Floor-length maroon georgette Anarkali decorated with mirror work, zari embroidery, and heavy border dupatta. Guaranteed head-turner for weddings.",
    fabric: "Georgette with Shantoon",
    colour: "Deep Maroon",
    sizes: ["M", "L", "XL", "XXL"],
    occasion: "Wedding / Sangeet",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    tags: ["wedding", "anarkali", "maroon", "heavy suit"]
  },
  {
    _id: "p9",
    id: "p9",
    name: "Embroidered Chikankari White Kurti Set",
    slug: "embroidered-chikankari-white-kurti",
    category: "Kurtis",
    subcategory: "Chikankari Kurti",
    price: 899,
    originalPrice: 1199,
    description: "Traditional Handcrafted Chikankari lucknowi white Modal cotton kurti. Soft on skin and timelessly elegant.",
    fabric: "Modal Cotton",
    colour: "Pure White",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Casual / Summer",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    tags: ["kurti", "chikankari", "white", "under 1000"]
  },
  {
    _id: "p10",
    id: "p10",
    name: "Traditional Crimson Red Banarasi Silk Saree",
    slug: "crimson-red-banarasi-silk-saree",
    category: "Sarees",
    subcategory: "Banarasi Saree",
    price: 3299,
    originalPrice: 4200,
    description: "Authentic Katan silk weave with golden brocade woven kadwa work pallu. An heirloom saree fit for brides and grand festive functions.",
    fabric: "Banarasi Silk",
    colour: "Crimson Red",
    sizes: ["Free Size"],
    occasion: "Bridal / Wedding",
    images: [
      "https://images.unsplash.com/photo-1610030469668-98e550d6193c?auto=format&fit=crop&q=80&w=800"
    ],
    inStock: true,
    isNewArrival: true,
    isTrending: true,
    isBestSeller: true,
    isSale: false,
    tags: ["saree", "banarasi", "red", "bridal", "wedding"]
  }
];

export const initialReviews: Review[] = [
  {
    id: "r1",
    name: "Sunita Verma",
    rating: 5,
    comment: "Bought my sister's wedding suit set from Pranjul Fashion House in Chaubepur. The fabric quality and embroidery work exceeded our expectations! Highly recommended boutique.",
    date: "2026-02-14",
    location: "Chaubepur, Varanasi",
    isApproved: true
  },
  {
    id: "r2",
    name: "Pooja Singh",
    rating: 5,
    comment: "The prices are very genuine compared to city markets. Got a stunning sky blue silk saree. Staff behavior is very warm and helpful!",
    date: "2026-02-28",
    location: "Chaubepur",
    isApproved: true
  },
  {
    id: "r3",
    name: "Anjali Gupta",
    rating: 5,
    comment: "Inquired about a pink cotton suit set on WhatsApp and reserved it for a store visit. The reservation was ready when I visited. Excellent customer care.",
    date: "2026-03-05",
    location: "Varanasi Outer",
    isApproved: true
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Boutique Display Counter",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    category: "Store Interior"
  },
  {
    id: "g2",
    title: "Silk Saree Collection Section",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    category: "Sarees"
  },
  {
    id: "g3",
    title: "Bridal Lehenga Showcase",
    imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    category: "Wedding Collection"
  },
  {
    id: "g4",
    title: "Designer Suit Sets",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
    category: "Suits"
  }
];
