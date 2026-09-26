import mongoose from 'mongoose';

const festivalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    tagline: {
      type: String,
      default: 'Festive styles for your celebrations.',
    },
    description: {
      type: String,
      default: '',
    },
    banner: {
      type: String,
      default: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    },
    active: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const Festival = mongoose.model('Festival', festivalSchema);
export default Festival;
