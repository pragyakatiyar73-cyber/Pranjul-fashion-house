import express from 'express';
import Category from '../models/Category.js';
import Product from '../models/Product.js';

const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
  try {
    const { type, gender, isFeatured, isTrending, isActive } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (gender) filter.gender = gender;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (isTrending !== undefined) filter.isTrending = isTrending === 'true';
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const categories = await Category.find(filter).sort({ order: 1, name: 1 });
    res.json({ success: true, count: categories.length, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET categories tree / summary for Mega-Menu
router.get('/tree', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ order: 1, name: 1 });
    
    const tree = {
      women: categories.filter((c) => c.gender === 'Women' || c.name === 'WOMEN'),
      men: categories.filter((c) => c.gender === 'Men' || c.name === 'MEN'),
      kids: categories.filter((c) => c.gender === 'Kids' || c.name === 'KIDS'),
      baby: categories.filter((c) => c.gender === 'Baby' || c.name === 'BABY'),
      occasions: categories.filter((c) => c.type === 'occasion'),
      seasonal: categories.filter((c) => c.type === 'seasonal'),
      trending: categories.filter((c) => c.type === 'trending' || c.isTrending),
    };

    res.json({ success: true, tree });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE category
router.post('/', async (req, res) => {
  try {
    const { name, type, gender, subcategories, description, icon, image, isFeatured, isTrending, isActive, order } = req.body;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const category = new Category({
      name,
      slug,
      type: type || 'main',
      gender: gender || 'All',
      subcategories: subcategories || [],
      description: description || '',
      icon: icon || 'ShoppingBag',
      image: image || '',
      isFeatured: isFeatured || false,
      isTrending: isTrending || false,
      isActive: isActive !== undefined ? isActive : true,
      order: order || 0,
    });

    await category.save();
    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// UPDATE category
router.put('/:id', async (req, res) => {
  try {
    const { name, type, gender, subcategories, description, icon, image, isFeatured, isTrending, isActive, order } = req.body;
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    if (name) {
      category.name = name;
      category.slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    if (type) category.type = type;
    if (gender) category.gender = gender;
    if (subcategories) category.subcategories = subcategories;
    if (description !== undefined) category.description = description;
    if (icon) category.icon = icon;
    if (image !== undefined) category.image = image;
    if (isFeatured !== undefined) category.isFeatured = isFeatured;
    if (isTrending !== undefined) category.isTrending = isTrending;
    if (isActive !== undefined) category.isActive = isActive;
    if (order !== undefined) category.order = order;

    await category.save();
    res.json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// TOGGLE active/featured/trending
router.patch('/:id/toggle', async (req, res) => {
  try {
    const { field } = req.body; // 'isActive', 'isFeatured', 'isTrending'
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });

    if (field === 'isActive') category.isActive = !category.isActive;
    if (field === 'isFeatured') category.isFeatured = !category.isFeatured;
    if (field === 'isTrending') category.isTrending = !category.isTrending;

    await category.save();
    res.json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ADD Subcategory to Category
router.post('/:id/subcategories', async (req, res) => {
  try {
    const { subcategory } = req.body;
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });

    if (!category.subcategories.includes(subcategory)) {
      category.subcategories.push(subcategory);
      await category.save();
    }
    res.json({ success: true, category });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// MOVE Products between categories
router.post('/move-products', async (req, res) => {
  try {
    const { productIds, targetCategory, targetSubcategory } = req.body;
    await Product.updateMany(
      { _id: { $in: productIds } },
      { $set: { category: targetCategory, subcategory: targetSubcategory } }
    );
    res.json({ success: true, message: `Moved ${productIds.length} products to ${targetCategory} -> ${targetSubcategory}` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
