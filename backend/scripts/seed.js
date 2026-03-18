/**
 * Seed Script — creates the initial admin user
 * Run: node scripts/seed.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('../models/Admin');

const seed = async () => {
  try {
    console.log('🔌  Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅  Connected');

    const email = process.env.ADMIN_EMAIL || 'admin@ondirect.in';
    const password = process.env.ADMIN_PASSWORD || 'OnDirect@2024!';

    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log(`ℹ️   Admin already exists: ${email}`);
    } else {
      await Admin.create({ email, password, name: 'OnDirect Admin' });
      console.log(`✅  Admin created: ${email}`);
    }

    console.log('🏁  Seed complete');
    process.exit(0);
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
    process.exit(1);
  }
};

seed();
