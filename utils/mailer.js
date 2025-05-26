const nodemailer = require('nodemailer');

// Use your email service settings here (e.g., Gmail, Outlook, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aatif.sahir9@gmail.com',        // Replace with your email
    pass: 'rhwxsoeumdyyefqa'            // Use app password (not raw password)
  }
});

const sendMail = async (to, subject, text) => {
  const mailOptions = {
    from: 'aatif.sahir9@gmail.com',       // Your email
    to,
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMail;
