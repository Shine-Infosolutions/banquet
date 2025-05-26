const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  guest_name: {
    type: String,
    required: true
  },
  whatsapp_no: {
    type: String
  },
  mail: {
    type: String
  },
  mobile_no: {
    type: String,
    required: true
  },
  no_of_packs: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['veg', 'non_veg'],
    required: true
  },
  rate_plan: {
    type: String,
    enum: ['Silver', 'Gold', 'Platinum'],
    required: true
  },
  menu_item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true
  },
  advance_payment: {
    type: Number,
    default: 0
  },
  total_payment: {
    type: Number,
    default: 0
  },
  balance: {
    type: Number,
    default: 0
  },
  note: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);
