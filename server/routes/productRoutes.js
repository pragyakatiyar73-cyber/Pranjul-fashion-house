import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET all products with filtering, search, sorting & pagination
router.get('/', async (req, res) => {
  try {
    const {
      search,
      category,
      subcategory,
      minPrice,
      maxPrice,
      size,
      color,
      stockStatus,
      minDiscount,
      festival,
      isNewArrival,
      isTrending,
      isFeatured,
      sort,
      limit = 150,
      page = 1,
    } = req.query;

    const query = {};

    // Search query
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { category: searchRegex },
        { subcategory: searchRegex },
        { productId: searchRegex },
        { description: searchRegex },
        { colors: searchRegex },
        { material: searchRegex },
      ];
    }

    // Category filter
    if (category && category !== 'All') {
      query.category = category;
    }

    // Subcategory filter
    if (subcategory && subcategory !== 'All') {
      query.subcategory = subcategory;
    }

    // Price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Size filter
    if (size && size !== 'All') {
      query.sizes = size;
    }

    // Color filter
    if (color && color !== 'All') {
      query.colors = new RegExp(color, 'i');
    }

    // Stock availability filter
    if (stockStatus && stockStatus !== 'All') {
      query.stockStatus = stockStatus;
    }

    // Discount filter
    if (minDiscount && Number(minDiscount) > 0) {
      query.discount = { $gte: Number(minDiscount) };
    }

    // Festival tag filter
    if (festival && festival !== 'All') {
      query.festival = festival;
    }

    // Badges filter
    if (isNewArrival === 'true') query.isNewArrival = true;
    if (isTrending === 'true') query.isTrending = true;
    if (isFeatured === 'true') query.isFeatured = true;

    // Sorting
    let sortOptions = { createdAt: -1 };
    if (sort === 'price-asc') sortOptions = { price: 1 };
    else if (sort === 'price-desc') sortOptions = { price: -1 };
    else if (sort === 'discount-desc') sortOptions = { discount: -1 };
    else if (sort === 'popular') sortOptions = { isTrending: -1, price: -1 };
    else if (sort === 'newest') sortOptions = { createdAt: -1 };

    const skip = (Number(page) - 1) * Number(limit);

    const products = await Product.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const totalCount = await Product.countDocuments(query);

    res.json({
      success: true,
      products,
      totalCount,
      page: Number(page),
      totalPages: Math.ceil(totalCount / Number(limit)),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET category & subcategory summary list
router.get('/categories/summary', async (req, res) => {
  try {
    const categories = ['Women', 'Men', 'Kids'];
    const summary = {};

    for (const cat of categories) {
      const subcategories = await Product.distinct('subcategory', { category: cat });
      const count = await Product.countDocuments({ category: cat });
      summary[cat] = { subcategories, count };
    }

    res.json({ success: true, summary });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single product by productId or _id
router.get('/:id', async (req, res) => {
  try {
    let product;
    if (req.params.id.startsWith('PF-')) {
      product = await Product.findOne({ productId: req.params.id });
    } else {
      product = await Product.findById(req.params.id);
    }

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Also get related products in same subcategory or category
    const relatedProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
    }).limit(6);

    res.json({ success: true, product, relatedProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST create new product
router.post('/', async (req, res) => {
  try {
    const {
      productId,
      name,
      category,
      subcategory,
      description,
      originalPrice,
      discount = 0,
      images,
      colors,
      sizes,
      material,
      stockStatus = 'In Stock',
      isNewArrival = false,
      isTrending = false,
      isFeatured = false,
      festival = '',
    } = req.body;

    // Calculate final price automatically if not provided
    const orig = Number(originalPrice);
    const disc = Number(discount);
    const price = req.body.price ? Number(req.body.price) : Math.round(orig * (1 - disc / 100));

    // Generate unique ID if missing
    const generatedId = productId || `PF-${category.charAt(0)}-${subcategory.substring(0, 3).toUpperCase()}-${Date.now().toString().slice(-4)}`;

    const product = new Product({
      productId: generatedId,
      name,
      category,
      subcategory,
      description,
      originalPrice: orig,
      discount: disc,
      price,
      images: Array.isArray(images) ? images : [images || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'],
      colors: Array.isArray(colors) ? colors : (colors ? colors.split(',').map((c) => c.trim()) : ['Multicolor']),
      sizes: Array.isArray(sizes) ? sizes : (sizes ? sizes.split(',').map((s) => s.trim()) : ['S', 'M', 'L', 'XL']),
      material,
      stockStatus,
      isNewArrival,
      isTrending,
      isFeatured,
      festival,
    });

    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT update product
router.put('/:id', async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (updateData.originalPrice && updateData.discount !== undefined) {
      const orig = Number(updateData.originalPrice);
      const disc = Number(updateData.discount);
      updateData.price = Math.round(orig * (1 - disc / 100));
    }

    if (typeof updateData.colors === 'string') {
      updateData.colors = updateData.colors.split(',').map((c) => c.trim());
    }
    if (typeof updateData.sizes === 'string') {
      updateData.sizes = updateData.sizes.split(',').map((s) => s.trim());
    }
    if (typeof updateData.images === 'string') {
      updateData.images = [updateData.images];
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PATCH toggle stock status
router.patch('/:id/stock', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    product.stockStatus = product.stockStatus === 'In Stock' ? 'Out of Stock' : 'In Stock';
    await product.save();

    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
