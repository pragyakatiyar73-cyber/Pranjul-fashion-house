import express from 'express';
import Festival from '../models/Festival.js';

const router = express.Router();

// GET all festival collections
router.get('/', async (req, res) => {
  try {
    const festivals = await Festival.find().sort({ createdAt: -1 });
    res.json({ success: true, festivals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST create festival collection
router.post('/', async (req, res) => {
  try {
    const festival = new Festival(req.body);
    await festival.save();
    res.status(201).json({ success: true, festival });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT update festival collection
router.put('/:id', async (req, res) => {
  try {
    const festival = await Festival.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!festival) return res.status(404).json({ success: false, message: 'Festival not found' });
    res.json({ success: true, festival });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH toggle active festival status
router.patch('/:id/active', async (req, res) => {
  try {
    const festival = await Festival.findById(req.params.id);
    if (!festival) return res.status(404).json({ success: false, message: 'Festival not found' });
    festival.active = !festival.active;
    await festival.save();
    res.json({ success: true, festival });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE festival collection
router.delete('/:id', async (req, res) => {
  try {
    const festival = await Festival.findByIdAndDelete(req.params.id);
    if (!festival) return res.status(404).json({ success: false, message: 'Festival not found' });
    res.json({ success: true, message: 'Festival deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
