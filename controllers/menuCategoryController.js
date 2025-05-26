const MenuCategory = require('../models/MenuCategory');

// Create new menu category
exports.createMenuCategory = async (req, res) => {
  try {
    const { menu_category, type } = req.body;
    const newCategory = new MenuCategory({ menu_category, type });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all menu categories
exports.getAllMenuCategories = async (req, res) => {
  try {
    const categories = await MenuCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single category by ID
exports.getMenuCategoryById = async (req, res) => {
  try {
    const category = await MenuCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update category
exports.updateMenuCategory = async (req, res) => {
  try {
    const updated = await MenuCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete category
exports.deleteMenuCategory = async (req, res) => {
  try {
    const deleted = await MenuCategory.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get categories based on type
exports.getCategoriesByType = async (req, res) => {
  try {
    const { type } = req.query;
    const categories = await MenuCategory.find({ type });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
