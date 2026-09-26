import express from 'express';
import StoreSettings from '../models/StoreSettings.js';
import { seedDatabase } from '../seed/seedData.js';

const router = express.Router();

// GET store settings
router.get('/', async (req, res) => {
  try {
    let settings = await StoreSettings.findOne();
    if (!settings) {
      settings = await StoreSettings.create({});
    }
    res.json({ success: true, settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PUT update store settings
router.put('/', async (req, res) => {
  try {
    let settings = await StoreSettings.findOne();
    if (!settings) {
      settings = new StoreSettings(req.body);
    } else {
      Object.assign(settings, req.body);
    }
    await settings.save();
    res.json({ success: true, settings });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// POST reseed demo data
router.post('/reseed', async (req, res) => {
  try {
    await seedDatabase();
    const settings = await StoreSettings.findOne();
    res.json({ success: true, message: 'Database successfully re-seeded with demo data!', settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
