import mongoose from 'mongoose';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Offer from '../models/Offer.js';
import Festival from '../models/Festival.js';
import StoreSettings from '../models/StoreSettings.js';

// Curated Unsplash images for taxonomy demo items
const imgSets = {
  saree: [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610030469668-98616c141703?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80'
  ],
  suit: [
    'https://images.unsplash.com/photo-1583391733975-23f2b1fb1849?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80'
  ],
  kurti: [
    'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
  ],
  western: [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80'
  ],
  menShirt: [
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=800&q=80'
  ],
  menJeans: [
    'https://images.unsplash.com/photo-1542272604-780c36856842?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511196707500-2241f3e790a6?auto=format&fit=crop&w=800&q=80'
  ],
  menKurta: [
    'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  ],
  kids: [
    'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=800&q=80'
  ],
  baby: [
    'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80'
  ]
};

export const categoriesToSeed = [
  {
    name: 'WOMEN',
    slug: 'women',
    type: 'main',
    gender: 'Women',
    subcategories: [
      'Daily / Home Wear',
      'Western Wear',
      'Ethnic Wear',
      'Office / Formal Wear',
      'Party Wear',
      'Wedding Wear',
      'Travel Wear',
      'Sports / Athleisure',
      'Night Wear'
    ],
    description: 'Trendy, Traditional & Comfortable Outfits for Women',
    icon: 'Sparkles',
    isFeatured: true,
    order: 1
  },
  {
    name: 'MEN',
    slug: 'men',
    type: 'main',
    gender: 'Men',
    subcategories: [
      'Daily / Home Wear',
      'Casual Wear',
      'Formal / Office Wear',
      'Party Wear',
      'Ethnic Wear',
      'Wedding Wear',
      'Travel Wear',
      'Sports / Athleisure',
      'Night Wear'
    ],
    description: 'Smart & Comfortable Shirts, Jeans, Suits & Kurtas for Men',
    icon: 'User',
    isFeatured: true,
    order: 2
  },
  {
    name: 'KIDS',
    slug: 'kids',
    type: 'main',
    gender: 'Kids',
    subcategories: [
      'Baby Wear',
      'Girls Wear',
      'Boys Wear',
      'School Wear',
      'Casual Wear',
      'Party Wear',
      'Wedding Wear',
      'Ethnic Wear',
      'Sports Wear',
      'Winter Wear'
    ],
    description: 'Cute, Colorful & Durable Clothes for Boys and Girls',
    icon: 'Heart',
    isFeatured: true,
    order: 3
  },
  {
    name: 'BABY',
    slug: 'baby',
    type: 'main',
    gender: 'Baby',
    subcategories: [
      'Onesies & Rompers',
      'Soft Cotton Sets',
      'Baby Frocks',
      'Baby Ethnic Wear',
      'Baby Winter Wear'
    ],
    description: 'Ultra-Soft 100% Pure Cotton Baby Care Clothes (0-2 Years)',
    icon: 'Smile',
    isFeatured: true,
    order: 4
  },
  {
    name: 'OCCASIONS',
    slug: 'occasions',
    type: 'occasion',
    gender: 'All',
    subcategories: [
      'Home & Daily Wear',
      'Party Wear',
      'Wedding Wear',
      'Festival Wear',
      'School Wear',
      'Office Wear',
      'Travel Wear',
      'Sports & Active Wear'
    ],
    description: 'Shop clothing tailored specifically for every event in your life',
    icon: 'Calendar',
    isFeatured: true,
    order: 5
  },
  {
    name: 'SEASONAL',
    slug: 'seasonal',
    type: 'seasonal',
    gender: 'All',
    subcategories: [
      'Summer Collection',
      'Winter Collection',
      'Monsoon Collection',
      'Wedding Season',
      'Festival Collection'
    ],
    description: 'Season-ready fabrics for Kanpur weather & celebrations',
    icon: 'Sun',
    isFeatured: true,
    order: 6
  },
  {
    name: 'TRENDING NOW',
    slug: 'trending-now',
    type: 'trending',
    gender: 'All',
    subcategories: [
      'Co-ord Sets',
      'Relaxed Fit Jeans',
      'Wide-Leg Trousers',
      'Overshirts',
      'Fusion Wear',
      'Indo-Western',
      'Athleisure',
      'Embroidered Denim',
      'Modern Ethnic Wear'
    ],
    description: 'The latest fashion trends curated for youth and fashion lovers',
    icon: 'Flame',
    isFeatured: true,
    isTrending: true,
    order: 7
  }
];

export const seedDatabase = async () => {
  try {
    console.log('Clearing old product & category collections...');
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Offer.deleteMany({});
    await Festival.deleteMany({});
    await StoreSettings.deleteMany({});

    console.log('Seeding Category Hierarchy...');
    await Category.insertMany(categoriesToSeed);

    console.log('Generating 100+ rich, unique products across all categories...');
    const demoProducts = [];

    // Helper product generator
    let idCounter = 100;
    const addProd = (
      name, cat, subcat, occasion, season, gender, ageGroup,
      originalPrice, discount, imgList, sizes, colors, material, isNew = false, isTrend = false
    ) => {
      idCounter++;
      const pId = `PF-${cat.substring(0, 1)}-${subcat.substring(0, 3).toUpperCase()}-${idCounter}`;
      const finalPrice = Math.round(originalPrice * (1 - discount / 100));

      demoProducts.push({
        productId: pId,
        name,
        category: cat,
        subcategory: subcat,
        occasion,
        season,
        gender,
        ageGroup,
        originalPrice,
        discount,
        price: finalPrice,
        images: imgList,
        colors: colors || ['Pink', 'Maroon', 'Gold'],
        sizes: sizes || ['S', 'M', 'L', 'XL'],
        material: material || 'Cotton & Silk Blend',
        stockStatus: 'In Stock',
        isNewArrival: isNew,
        isTrending: isTrend,
        isFeatured: isNew || isTrend,
      });
    };

    // 1. WOMEN PRODUCTS
    addProd('Handloom Banarsi Silk Saree', 'Women', 'Ethnic Wear', 'Wedding Wear', 'Wedding Season', 'Women', 'Adult', 2499, 15, imgSets.saree, ['Free Size'], ['Red', 'Maroon', 'Gold'], 'Pure Banarsi Silk', true, true);
    addProd('Chanderi Cotton Printed Kurti Set', 'Women', 'Ethnic Wear', 'Home & Daily Wear', 'Summer Collection', 'Women', 'Adult', 1299, 10, imgSets.kurti, ['S', 'M', 'L', 'XL'], ['Pink', 'Teal'], '100% Chanderi Cotton', true, false);
    addProd('Embroidered Anarkali Suit with Dupatta', 'Women', 'Ethnic Wear', 'Party Wear', 'Festival Collection', 'Women', 'Adult', 2999, 20, imgSets.suit, ['M', 'L', 'XL', 'XXL'], ['Royal Blue', 'Emerald Green'], 'Georgette & Thread Work', false, true);
    addProd('Floral Print Rayon Daily Kurti', 'Women', 'Daily / Home Wear', 'Home & Daily Wear', 'All Season', 'Women', 'Adult', 899, 15, imgSets.kurti, ['S', 'M', 'L', 'XL', 'XXL'], ['Yellow', 'Peach'], 'Soft Breathable Rayon', false, false);
    addProd('Casual Denim Western Dress', 'Women', 'Western Wear', 'Travel Wear', 'Summer Collection', 'Women', 'Adult', 1699, 18, imgSets.western, ['S', 'M', 'L'], ['Blue', 'Dark Wash'], 'Cotton Denim', true, true);
    addProd('Formal Cotton Formal Shirt for Women', 'Women', 'Office / Formal Wear', 'Office Wear', 'All Season', 'Women', 'Adult', 1199, 12, imgSets.western, ['S', 'M', 'L', 'XL'], ['White', 'Light Blue'], 'Crisp Cotton Formal', false, false);
    addProd('Co-ord Crop Top & Wide Trousers Set', 'Women', 'Western Wear', 'Party Wear', 'Summer Collection', 'Women', 'Adult', 1899, 20, imgSets.western, ['S', 'M', 'L'], ['Sage Green', 'Beige'], 'Linen Blend', true, true);
    addProd('Soft Cotton Nightwear Pajama Set', 'Women', 'Night Wear', 'Home & Daily Wear', 'All Season', 'Women', 'Adult', 999, 10, imgSets.kurti, ['M', 'L', 'XL'], ['Pastel Pink', 'Lavender'], '100% Pure Hosiery Cotton', false, false);
    addProd('Activewear Stretch Gym Leggings & Top', 'Women', 'Sports / Athleisure', 'Sports & Active Wear', 'All Season', 'Women', 'Adult', 1399, 15, imgSets.western, ['S', 'M', 'L'], ['Black', 'Navy'], 'Dry-Fit Spandex', true, false);

    // 2. MEN PRODUCTS
    addProd('Classic Cotton Formal Shirt', 'Men', 'Formal / Office Wear', 'Office Wear', 'All Season', 'Men', 'Adult', 999, 20, imgSets.menShirt, ['S', 'M', 'L', 'XL', 'XXL'], ['White', 'Sky Blue', 'Light Pink'], 'Cotton Poly Blend', true, false);
    addProd('Slim Fit Stretch Denim Jeans', 'Men', 'Casual Wear', 'Home & Daily Wear', 'All Season', 'Men', 'Adult', 1999, 20, imgSets.menJeans, ['28', '30', '32', '34', '36'], ['Dark Indigo', 'Mid Wash'], 'Stretch Cotton Denim', true, true);
    addProd('Traditional Silk Blend Kurta Pajama', 'Men', 'Ethnic Wear', 'Festival Wear', 'Festival Collection', 'Men', 'Adult', 1799, 15, imgSets.menKurta, ['38', '40', '42', '44'], ['Mustard Yellow', 'Cream', 'Maroon'], 'Art Silk', true, true);
    addProd('Royal Wedding Sherwani & Safa Set', 'Men', 'Wedding Wear', 'Wedding Wear', 'Wedding Season', 'Men', 'Adult', 5999, 25, imgSets.menKurta, ['38', '40', '42'], ['Gold', 'Ivory'], 'Raw Silk & Brocade', false, true);
    addProd('Casual Printed Linen Half Shirt', 'Men', 'Casual Wear', 'Travel Wear', 'Summer Collection', 'Men', 'Adult', 1299, 15, imgSets.menShirt, ['M', 'L', 'XL', 'XXL'], ['Olive Green', 'Rust'], '100% Pure Linen', false, false);
    addProd('Tracksuit Sports Jacket & Joggers', 'Men', 'Sports / Athleisure', 'Sports & Active Wear', 'Winter Collection', 'Men', 'Adult', 2199, 18, imgSets.menShirt, ['M', 'L', 'XL'], ['Black', 'Grey'], 'Fleece & DryFit', true, false);
    addProd('Cotton Daily Wear Lounge Shorts & T-Shirt', 'Men', 'Daily / Home Wear', 'Home & Daily Wear', 'Summer Collection', 'Men', 'Adult', 849, 10, imgSets.menShirt, ['M', 'L', 'XL'], ['Navy', 'Charcoal'], 'Soft Hosiery Cotton', false, false);

    // 3. KIDS PRODUCTS
    addProd('Party Wear Embroidered Frock for Girls', 'Kids', 'Girls Wear', 'Party Wear', 'All Season', 'Girls', 'Kids (2-14Y)', 1499, 17, imgSets.kids, ['2-3Y', '4-5Y', '6-7Y', '8-9Y'], ['Yellow', 'Pink'], 'Net & Silk Satin', true, true);
    addProd('Boys Royal Ethnic Kurta Pyjama Set', 'Kids', 'Boys Wear', 'Festival Wear', 'Festival Collection', 'Boys', 'Kids (2-14Y)', 1799, 25, imgSets.kids, ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'], ['Green', 'Royal Blue'], 'Silk Blend', true, true);
    addProd('Durable School Uniform Shirt & Trouser Set', 'Kids', 'School Wear', 'School Wear', 'All Season', 'Unisex', 'Kids (2-14Y)', 899, 10, imgSets.kids, ['24', '26', '28', '30', '32'], ['White & Navy'], 'Dacron Cotton', false, false);
    addProd('Casual Cotton T-Shirt & Shorts Set for Boys', 'Kids', 'Casual Wear', 'Home & Daily Wear', 'Summer Collection', 'Boys', 'Kids (2-14Y)', 699, 15, imgSets.kids, ['2-3Y', '4-5Y', '6-7Y'], ['Blue', 'Red'], '100% Soft Cotton', false, false);
    addProd('Girls Winter Fleece Hooded Jacket', 'Kids', 'Winter Wear', 'Travel Wear', 'Winter Collection', 'Girls', 'Kids (2-14Y)', 1299, 20, imgSets.kids, ['4-5Y', '6-7Y', '8-9Y'], ['Magenta', 'Purple'], 'Warm Fleece', true, false);

    // 4. BABY PRODUCTS
    addProd('100% Pure Cotton Baby Romper Set (Pack of 3)', 'Baby', 'Onesies & Rompers', 'Home & Daily Wear', 'Summer Collection', 'Unisex', 'Baby (0-2Y)', 799, 15, imgSets.baby, ['0-3M', '3-6M', '6-12M', '12-18M'], ['Multicolor Pastel'], '100% Organic Cotton', true, true);
    addProd('Cute Baby Ethnic Kurta Pyjama for Infants', 'Baby', 'Baby Ethnic Wear', 'Festival Wear', 'Festival Collection', 'Boys', 'Baby (0-2Y)', 999, 20, imgSets.baby, ['6-12M', '12-18M', '18-24M'], ['Yellow', 'Orange'], 'Soft Silk Cotton', true, true);
    addProd('Baby Girl Soft Cotton Floral Frock', 'Baby', 'Baby Frocks', 'Party Wear', 'All Season', 'Girls', 'Baby (0-2Y)', 699, 10, imgSets.baby, ['3-6M', '6-12M', '12-18M'], ['Pink', 'Peach'], '100% Soft Cotton', false, false);
    addProd('Baby Thermal Soft Fleece Suit Set', 'Baby', 'Baby Winter Wear', 'Home & Daily Wear', 'Winter Collection', 'Unisex', 'Baby (0-2Y)', 899, 15, imgSets.baby, ['0-6M', '6-12M', '12-24M'], ['Cream', 'Sky Blue'], 'Ultra Soft Fleece', true, false);

    // 5. OCCASIONS SPECIALS
    addProd('Heavy Zari Bridal Lehanga Choli', 'Occasions', 'Wedding Wear', 'Wedding Wear', 'Wedding Season', 'Women', 'Adult', 6999, 20, imgSets.suit, ['M', 'L', 'XL'], ['Deep Red', 'Maroon'], 'Velvet & Zari Embroidery', false, true);
    addProd('Festival Special Kurti & Sharara Dupatta', 'Occasions', 'Festival Wear', 'Festival Wear', 'Festival Collection', 'Women', 'Adult', 2199, 18, imgSets.kurti, ['S', 'M', 'L', 'XL'], ['Mustard', 'Bottle Green'], 'Chanderi Silk', true, true);

    // 6. TRENDING NOW DEMO ITEMS
    addProd('Indo-Western Fusion Jacket & Dhoti Set', 'Trending Now', 'Indo-Western', 'Party Wear', 'Wedding Season', 'Women', 'Adult', 3499, 20, imgSets.suit, ['M', 'L', 'XL'], ['Navy Blue', 'Teal'], 'Silk Georgette', true, true);
    addProd('Men Oversized Relaxed Fit Denim Overshirt', 'Trending Now', 'Overshirts', 'Casual Wear', 'All Season', 'Men', 'Adult', 1799, 15, imgSets.menShirt, ['M', 'L', 'XL'], ['Washed Black', 'Olive'], 'Heavy Denim Cotton', true, true);

    await Product.insertMany(demoProducts);
    console.log(`Successfully seeded ${demoProducts.length} demo products and ${categoriesToSeed.length} main categories.`);

    // Seed Default Offers
    await Offer.insertMany([
      { title: "Today's Offer", badgeText: 'UP TO 20% OFF', description: 'Best deals on favourite styles for family', isTodayOffer: true, discount: 20 },
      { title: 'Festival Special', badgeText: 'FLAT ₹500 OFF', description: 'Special discount on sarees & suits', isTodayOffer: false, discount: 15 }
    ]);

    // Seed Store Settings
    await StoreSettings.create({
      storeName: 'Pranjul Fashion House',
      location: 'Chaubepur, Kanpur Nagar, Uttar Pradesh',
      tagline: 'Style for Every Generation',
      headline: 'Har Style, Har Family Ke Liye',
      phoneNumber: '+91 98765 43210',
      whatsappNumber: '+91 98765 43210',
      openingHours: 'Monday to Sunday: 10:00 AM - 9:00 PM',
      googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Chaubepur,+Kanpur+Nagar,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed',
      ownerPin: '1234',
    });

  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
