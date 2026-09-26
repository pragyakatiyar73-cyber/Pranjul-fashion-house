import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ['main', 'occasion', 'seasonal', 'trending'],
      default: 'main',
    },
    gender: {
      type: String,
      enum: ['Women', 'Men', 'Kids', 'Baby', 'All'],
      default: 'All',
    },
    subcategories: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'ShoppingBag',
    },
    image: {
      type: String,
      default: '',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
