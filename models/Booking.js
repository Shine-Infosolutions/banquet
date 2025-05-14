const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  booking_id: String,
  whatsapp_no: String,
  email: String,
  password: String,
  guest_name: String,
  mobile_no: String,
  no_of_packs: Number,
  rate_plan: String,
  notes: String,
  advance_payment: Number,
  total_payment: Number,
  balance: Number,
  veg_non_veg: String,
  menu_item: String,
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
