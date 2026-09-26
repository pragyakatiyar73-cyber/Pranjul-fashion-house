import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import offerRoutes from './routes/offerRoutes.js';
import festivalRoutes from './routes/festivalRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import Product from './models/Product.js';
import { seedDatabase } from './seed/seedData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/festivals', festivalRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/categories', categoryRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    store: 'Pranjul Fashion House',
    location: 'Chaubepur, Kanpur Nagar, Uttar Pradesh',
    timestamp: new Date()
  });
});

// Start Server & Check Seed
const startServer = async () => {
  await connectDB();
  
  // Auto-seed if database is empty
  try {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      console.log('No products found in MongoDB. Auto-seeding 125 unique demo products for Pranjul Fashion House...');
      await seedDatabase();
    } else {
      console.log(`Database ready with ${productCount} products.`);
    }
  } catch (err) {
    console.error('Auto-seed check error:', err.message);
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
