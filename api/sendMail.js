const nodemailer = require('nodemailer');
console.log("hiiiii")

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, place, email, phone, message } = req.body;
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email provider
      auth: {
        user: "akhiljosephaj85@gmail.com", // Add email to your environment variables
        pass: 'oetp qjsg ikld jsdz', // Add app password here
      },
    });

    // Email details
    const mailOptions = {
      from: email,
      to: 'akhiljosephaj85@gmail.com', // Your email to receive messages
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Place: ${place}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
