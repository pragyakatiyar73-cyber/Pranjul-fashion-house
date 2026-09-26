import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['Women', 'Men', 'Kids', 'Baby', 'Occasions', 'Seasonal', 'Trending Now'],
    },
    subcategory: {
      type: String,
      required: true,
      trim: true,
    },
    occasion: {
      type: String,
      default: 'Home & Daily Wear',
    },
    season: {
      type: String,
      default: 'All Season',
    },
    gender: {
      type: String,
      enum: ['Women', 'Men', 'Girls', 'Boys', 'Baby', 'Unisex'],
      default: 'Unisex',
    },
    ageGroup: {
      type: String,
      enum: ['Adult', 'Kids (2-14Y)', 'Baby (0-2Y)'],
      default: 'Adult',
    },
    description: {
      type: String,
      default: '',
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    colors: {
      type: [String],
      default: ['Multicolor'],
    },
    sizes: {
      type: [String],
      default: ['M', 'L', 'XL'],
    },
    material: {
      type: String,
      default: 'Premium Quality Fabric',
    },
    stockStatus: {
      type: String,
      enum: ['In Stock', 'Out of Stock'],
      default: 'In Stock',
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    festival: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
  subcategory: 'text',
  occasion: 'text',
  season: 'text',
  productId: 'text'
});

const Product = mongoose.model('Product', productSchema);
export default Product;
