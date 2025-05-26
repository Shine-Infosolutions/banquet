const Booking = require('../models/Booking');
const sendMail = require('../utils/mailer');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Prepare email content
    const subject = `New Booking by ${booking.guest_name}`;
    const content = `
      Guest: ${booking.guest_name}
      Type: ${booking.type}
      Rate Plan: ${booking.rate_plan}
      Packs: ${booking.no_of_packs}
      Mobile: ${booking.mobile_no}
      Advance: ₹${booking.advance_payment}
      Total: ₹${booking.total_payment}
      Balance: ₹${booking.balance}
      Note: ${booking.note}
    `;

    // Send email to admin (yourself)
    await sendMail('aatif.sahir9@gmail.com', subject, content);

    // Send email to customer
    if (booking.mail) {
      await sendMail(booking.mail, 'Your Booking Confirmation', `Thanks for your booking!\n\n${content}`);
    }

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('menu_item');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
