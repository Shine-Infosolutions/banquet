const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create a booking
router.post("/bookings", async (req, res) => {
  try {
    // Create a new booking using the data from the request body
    const booking = new Booking({
      booking_id: req.body.booking_id,
      whatsapp_no: req.body.whatsapp_no,
      email: req.body.email,
      password: req.body.password,
      guest_name: req.body.guest_name,
      mobile_no: req.body.mobile_no,
      no_of_packs: req.body.no_of_packs,
      rate_plan: req.body.rate_plan,
      notes: req.body.notes,
      advance_payment: req.body.advance_payment,
      total_payment: req.body.total_payment,
      balance: req.body.balance,
      veg_non_veg: req.body.veg_non_veg,
      menu_item: req.body.menu_item,
    });

    // Save the booking to the database
    await booking.save();
    
    // Return a success response with the created booking
    res.status(201).json(booking);
  } catch (err) {
    // Handle any errors and send a response with the error message
    res.status(400).json({ error: err.message });
  }
});

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update booking by ID
router.put("/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;