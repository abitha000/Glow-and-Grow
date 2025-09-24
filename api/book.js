import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, age, email, phone, concern, symptoms, date, time } = req.body;

  // Configure transporter (use environment variables for credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // set in Vercel dashboard
      pass: process.env.MAIL_PASS  // set in Vercel dashboard
    }
  });

  try {
    await transporter.sendMail({
      from: `"Glow And Grow" <${process.env.MAIL_USER}>`,
      to: 'glowandgrowhere@yahoo.com',
      subject: 'New Consultation Booking',
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
      `
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
