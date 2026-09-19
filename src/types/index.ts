export interface Product {
  _id: string;
  id?: string;
  name: string;
  slug: string;
  category: string; // e.g. "Sarees", "Suits", "Kurtis", "Western Dresses", "Formal Dresses", "Party Wear", "Wedding Collection", "Lehengas", "Dress Material"
  subcategory?: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabric: string;
  colour: string;
  sizes: string[];
  occasion: string;
  images: string[];
  inStock: boolean;
  isNewArrival?: boolean;
  isTrending?: boolean;
  isBestSeller?: boolean;
  isSale?: boolean;
  tags?: string[];
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  count: number;
}

export interface CollectionItem {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  description: string;
  badge?: string;
}

export interface Inquiry {
  _id?: string;
  name: string;
  phone: string;
  productName: string;
  productId?: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Resolved';
}

export interface ReserveRequest {
  _id?: string;
  name: string;
  phone: string;
  productName: string;
  productId?: string;
  preferredDate: string;
  message?: string;
  createdAt: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface Review {
  _id?: string;
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  location?: string;
  isApproved: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface StoreSettings {
  brandName: string;
  tagline: string;
  location: string;
  address: string;
  shopTiming: string;
  phone: string;
  whatsappNumber: string;
  mapEmbedUrl: string;
  announcementText: string;
}
