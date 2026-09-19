import { Product, Category, CollectionItem, Review, StoreSettings, GalleryItem } from '../types';
import { generateFullCatalog } from './productGenerator';

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

// Generate 290+ unique products
export const initialProducts: Product[] = generateFullCatalog();

// Calculate category counts DYNAMICALLY from initialProducts array (No hardcoding!)
export const getDynamicCategories = (productsList: Product[] = initialProducts): Category[] => {
  const rawCategories = [
    {
      id: "sarees",
      name: "Sarees",
      slug: "sarees",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
      description: "Pure Silk, Banarasi, Chiffon & Georgette Sarees"
    },
    {
      id: "suits",
      name: "Suits",
      slug: "suits",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&auto=format&fit=crop&q=80",
      description: "Anarkali, Straight Cut, Sharara & Palazzo Suits"
    },
    {
      id: "kurtis",
      name: "Kurtis",
      slug: "kurtis",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
      description: "Cotton, Rayon, Silk & Designer Casual Kurtis"
    },
    {
      id: "mens-wear",
      name: "Men's Ethnic & Formal",
      slug: "mens-wear",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
      description: "Kurta Pajama Sets, Sherwanis & Jackets"
    },
    {
      id: "kids-wear",
      name: "Kids' & Girls' Wear",
      slug: "kids-wear",
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&auto=format&fit=crop&q=80",
      description: "Cute Frocks, Kid Lehengas & Ethnic Kurta Sets"
    },
    {
      id: "dress-material",
      name: "Dress Material & Fabrics",
      slug: "dress-material",
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
      description: "Unstitched Cotton, Chanderi & Silk Suit Fabrics"
    },
    {
      id: "lehengas",
      name: "Lehengas",
      slug: "lehengas",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=80",
      description: "Bridal, Semi-Bridal & Festive Designer Lehengas"
    },
    {
      id: "western-dresses",
      name: "Western Dresses",
      slug: "western-dresses",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
      description: "Maxi, Midi & Floral Chic Western Wear"
    },
    {
      id: "party-wear",
      name: "Party Wear",
      slug: "party-wear",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
      description: "Embellished Suits, Gowns & Indo-Western Wear"
    },
    {
      id: "wedding-collection",
      name: "Wedding Collection",
      slug: "wedding-collection",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
      description: "Royal Bridal & Festive Ceremonial Wear"
    }
  ];

  return rawCategories.map(cat => {
    const count = productsList.filter(p => {
      if (cat.name === "Wedding Collection") return p.category === "Wedding Collection" || p.tags?.includes("wedding") || p.occasion.toLowerCase().includes("wedding");
      if (cat.name === "Party Wear") return p.category === "Party Wear" || p.tags?.includes("party") || p.occasion.toLowerCase().includes("party");
      return p.category.toLowerCase() === cat.name.toLowerCase();
    }).length;

    return {
      ...cat,
      count
    };
  });
};

export const initialCategories: Category[] = getDynamicCategories(initialProducts);

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
