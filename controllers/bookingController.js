const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// Replace with your SMTP credentials and email
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Or your SMTP provider
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // your email (e.g., example@gmail.com)
    pass: process.env.SMTP_PASS  // your app password
  }
});

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Construct the booking summary
    const bookingDetails = `
      <h2>Booking Confirmation</h2>
      <p><strong>Booking ID:</strong> ${booking.booking_id}</p>
      <p><strong>Name:</strong> ${booking.guest_name}</p>
      <p><strong>Mobile No:</strong> ${booking.mobile_no}</p>
      <p><strong>No. of Packs:</strong> ${booking.no_of_packs}</p>
      <p><strong>Rate Plan:</strong> ${booking.rate_plan}</p>
      <p><strong>Advance Payment:</strong> ₹${booking.advance_payment}</p>
      <p><strong>Total Payment:</strong> ₹${booking.total_payment}</p>
      <p><strong>Balance:</strong> ₹${booking.balance}</p>
      <p><strong>Food Type:</strong> ${booking.veg_non_veg}</p>
      <p><strong>Menu Items:</strong> ${booking.menu_item.join(", ")}</p>
      <p><strong>Notes:</strong> ${booking.notes}</p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: [booking.email, "aatif.sahir9@gmail.com"], // send to user + admin
      subject: "Booking Confirmation - Regalia Banquet & Resort",
      html: bookingDetails
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Booking created and emails sent", booking });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({data:bookings});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a booking by ID
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
