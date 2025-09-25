import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Destructure booking data from request body
  const { name, age, email, phone, concern, symptoms, date, time } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // Gmail account
      pass: process.env.MAIL_PASS, // Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Glow And Grow" <${process.env.MAIL_USER}>`,
    to: 'glowandgrowhere@yahoo.com', // your receiving email
    subject: `New Consultation Booking from ${name}`,
    text: `
New Booking:

Name: ${name}
Age: ${age}
Email: ${email}
Phone: ${phone}
Primary Concern: ${concern}
Symptoms: ${symptoms}
Preferred Date: ${date}
Preferred Time: ${time}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
