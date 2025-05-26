const mongoose = require('mongoose');

const MenuCategorySchema = new mongoose.Schema({
  menu_category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['veg', 'non_veg'],
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuCategory', MenuCategorySchema);
