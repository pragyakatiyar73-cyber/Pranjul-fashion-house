import mongoose from 'mongoose';

const storeSettingsSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      default: 'Pranjul Fashion House',
    },
    tagline: {
      type: String,
      default: 'Style for Every Generation',
    },
    subtagline: {
      type: String,
      default: 'New Collection • Great Prices • Special Offers',
    },
    location: {
      type: String,
      default: 'Chaubepur, Kanpur Nagar, Uttar Pradesh - 209203',
    },
    whatsappNumber: {
      type: String,
      default: '+91 98765 43210',
    },
    phoneNumber: {
      type: String,
      default: '+91 98765 43210',
    },
    openingHours: {
      type: String,
      default: 'Monday to Sunday: 10:00 AM - 9:00 PM',
    },
    googleMapsEmbedUrl: {
      type: String,
      default: 'https://maps.google.com/maps?q=Chaubepur,+Kanpur+Nagar,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed',
    },
    announcement: {
      type: String,
      default: 'Welcome to Pranjul Fashion House! Visit our store in Chaubepur for exclusive festive offers.',
    },
    isDemoMode: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const StoreSettings = mongoose.model('StoreSettings', storeSettingsSchema);
export default StoreSettings;
