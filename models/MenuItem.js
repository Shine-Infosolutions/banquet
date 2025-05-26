const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['veg', 'non_veg'],
    required: true
  },
  menu_category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuCategory',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    enum: ['Silver', 'Gold', 'Platinum'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
