import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  category: string;
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
  isNewArrival: boolean;
  isTrending: boolean;
  isBestSeller: boolean;
  isSale: boolean;
  tags: string[];
  createdAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  description: { type: String, required: true },
  fabric: { type: String, required: true },
  colour: { type: String, required: true },
  sizes: [{ type: String }],
  occasion: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Boolean, default: true },
  isNewArrival: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isSale: { type: Boolean, default: false },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
