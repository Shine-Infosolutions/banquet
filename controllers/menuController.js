const MenuItem = require("../models/MenuItem");

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  try {
    const { name } = req.body;
    const item = new MenuItem({ name });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
