const MenuItem = require('../models/MenuItem');

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { type, menu_category, name, rate, quantity } = req.body;
    const newItem = new MenuItem({ type, menu_category, name, rate, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().populate('menu_category');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
