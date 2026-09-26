import seedData from '../../database/seed_data.json';

export const storeInfo = seedData.storeInfo;
export const initialCategories = seedData.categories;
export const initialFestivalOffers = seedData.festivalOffers;
export const initialProducts = seedData.products;

export const mockOrdersHistory = [
  {
    id: 'PFH-1008',
    customer_name: 'Vikram Singh',
    customer_phone: '+91 98390 12345',
    locality: 'Main Chowk, Chaubepur',
    items: ['Pranjul Pure Silk Banarasi Saree with Zari Border'],
    total_amount: 1499,
    savings: 1500,
    owner_profit: 649,
    status: 'Delivered / Collected',
    date: '2026-09-19 14:30'
  },
  {
    id: 'PFH-1009',
    customer_name: 'Pooja Tiwari',
    customer_phone: '+91 94150 98765',
    locality: 'Near Railway Crossing, Chaubepur',
    items: ['Designer Heavy Embroidery Bridal Lehenga Choli', 'Girls Designer Embroidered Net Princess Gown'],
    total_amount: 4398,
    savings: 4400,
    owner_profit: 1848,
    status: 'WhatsApp Lead Confirmed',
    date: '2026-09-19 18:45'
  },
  {
    id: 'PFH-1010',
    customer_name: 'Amitabh Mishra',
    customer_phone: '+91 97920 45678',
    locality: 'Bypass Road, Chaubepur Market',
    items: ["Men's Royal Silk Kurta Pyjama Set with Nehru Jacket"],
    total_amount: 1299,
    savings: 1300,
    owner_profit: 579,
    status: 'Store Pickup Reserved',
    date: '2026-09-20 10:15'
  }
];
