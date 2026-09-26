import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'All Categories',
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: true,
    },
    badgeText: {
      type: String,
      default: 'LIMITED TIME',
    }
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.model('Offer', offerSchema);
export default Offer;
