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


exports.getByTypeAndRate = async (req, res) => {
  try {
    const { type, rate } = req.query;

    if (!type || !['veg', 'non_veg'].includes(type) || !rate || !['Silver', 'Gold', 'Platinum'].includes(rate)) {
      return res.status(400).json({ error: 'Invalid or missing type/rate parameters' });
    }

    const items = await MenuItem.find({ type, rate });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
