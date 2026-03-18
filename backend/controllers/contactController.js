const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Optional: send email notification for each new lead
const sendNotification = async (contact) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    await transporter.sendMail({
      from: `"OnDirect CRM" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_NOTIFY,
      subject: `New Lead: ${contact.firstName} ${contact.lastName} — ${contact.company || 'No Company'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0A0F1E;color:#F8FAFC;padding:32px;border-radius:16px">
          <h2 style="color:#60A5FA;margin-bottom:24px">New Lead from OnDirect Website</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#94A3B8;width:140px">Name</td><td style="padding:8px 0;color:#fff;font-weight:600">${contact.firstName} ${contact.lastName}</td></tr>
            <tr><td style="padding:8px 0;color:#94A3B8">Email</td><td style="padding:8px 0;color:#60A5FA">${contact.email}</td></tr>
            <tr><td style="padding:8px 0;color:#94A3B8">Company</td><td style="padding:8px 0;color:#fff">${contact.company || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#94A3B8">Phone</td><td style="padding:8px 0;color:#fff">${contact.phone || '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#94A3B8">Service</td><td style="padding:8px 0;color:#22D3EE;text-transform:capitalize">${contact.service || 'general'}</td></tr>
            <tr><td style="padding:8px 0;color:#94A3B8;vertical-align:top">Message</td><td style="padding:8px 0;color:#fff">${contact.message}</td></tr>
          </table>
          <p style="margin-top:24px;color:#64748B;font-size:12px">Received at ${new Date().toLocaleString('en-IN')}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error('Email notification failed:', err.message);
  }
};

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, service, message } = req.body;

    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      company: company || '',
      phone: phone || '',
      service: service || 'general',
      message,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
    });

    // Fire-and-forget email notification
    sendNotification(contact);

    res.status(201).json({
      success: true,
      message: 'Thank you! We will be in touch within 24 hours.',
      id: contact._id,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }
    console.error('Contact creation error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};
