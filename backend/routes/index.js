const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const { createContact } = require('../controllers/contactController');
const {
  login,
  getLeads,
  updateLeadStatus,
  deleteLead,
} = require('../controllers/adminController');
const { protect } = require('../middleware/auth');

// ── Validation middleware helper ──────────────────────────────────────────────
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array(),
    });
  }
  next();
};

// ── Public Routes ─────────────────────────────────────────────────────────────

// POST /api/contact  — submit contact form
router.post(
  '/contact',
  [
    body('firstName')
      .trim()
      .notEmpty().withMessage('First name is required')
      .isLength({ max: 50 }).withMessage('First name too long')
      .escape(),
    body('lastName')
      .trim()
      .notEmpty().withMessage('Last name is required')
      .isLength({ max: 50 }).withMessage('Last name too long')
      .escape(),
    body('email')
      .isEmail().withMessage('Valid email is required')
      .normalizeEmail()
      .isLength({ max: 100 }).withMessage('Email too long'),
    body('company')
      .optional()
      .trim()
      .isLength({ max: 100 }).withMessage('Company name too long')
      .escape(),
    body('phone')
      .optional()
      .trim()
      .isLength({ max: 20 }).withMessage('Phone number too long'),
    body('service')
      .optional()
      .isIn(['lead-management', 'data-solutions', 'sales-targeting', 'digital-marketing', 'general', ''])
      .withMessage('Invalid service selection'),
    body('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters')
      .escape(),
  ],
  validate,
  createContact
);

// ── Admin Routes ──────────────────────────────────────────────────────────────

// POST /api/admin/login
router.post(
  '/admin/login',
  [
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password required'),
  ],
  validate,
  login
);

// GET /api/admin/leads  — all leads with filters + pagination
router.get('/admin/leads', protect, getLeads);

// PATCH /api/admin/leads/:id  — update status
router.patch(
  '/admin/leads/:id',
  protect,
  [body('status').notEmpty().withMessage('Status required')],
  validate,
  updateLeadStatus
);

// DELETE /api/admin/leads/:id
router.delete('/admin/leads/:id', protect, deleteLead);

module.exports = router;
