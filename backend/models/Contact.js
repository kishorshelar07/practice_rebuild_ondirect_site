const mongoose = require('mongoose');

// ── Contact / Lead Model ──────────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, 'Company name too long'],
      default: '',
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [20, 'Phone number too long'],
      default: '',
    },
    service: {
      type: String,
      enum: ['lead-management', 'data-solutions', 'sales-targeting', 'digital-marketing', 'general', ''],
      default: 'general',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message too long'],
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new',
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

contactSchema.index({ createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
