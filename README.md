# OnDirect Marketing Services — Full-Stack Website

> Premium B2B demand generation website rebuilt with React, Node.js, Express, and MongoDB.

---

## 📁 Project Structure

```
ondirect/
├── frontend/                          # React CRA application
│   ├── public/
│   │   └── index.html                 # HTML shell with SEO meta tags
│   ├── src/
│   │   ├── index.js                   # React entry point
│   │   ├── index.css                  # Global styles, Tailwind, custom utilities
│   │   ├── App.js                     # Router, layout, Loader gate
│   │   ├── animations/
│   │   │   └── variants.js            # All Framer Motion variants
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.js          # Sticky glass navbar + mega dropdown
│   │   │   │   ├── Footer.js          # 4-column footer with links
│   │   │   │   ├── Loader.js          # Animated brand loader (2.2s)
│   │   │   │   ├── ScrollToTop.js     # Auto scroll on route change
│   │   │   │   └── PrivateRoute.js    # JWT-guarded admin routes
│   │   │   └── sections/
│   │   │       └── SectionComponents.js  # SectionHeader, PageHero, ServiceCard,
│   │   │                                 # StatCard, TestimonialCard, CTABanner
│   │   ├── pages/
│   │   │   ├── Home.js               # Hero, Services, About, Clients,
│   │   │   │                         #   Testimonials, FAQ, CTA
│   │   │   ├── About.js              # Mission, Stats, Focus Areas, Clients
│   │   │   ├── Solutions.js          # All 4 solutions overview
│   │   │   ├── SolutionPages.js      # LeadManagement, DataSolutions,
│   │   │   │                         #   SalesTargeting, DigitalMarketing detail pages
│   │   │   ├── LeadManagement.js     # Re-export
│   │   │   ├── DataSolutions.js      # Re-export
│   │   │   ├── SalesTargeting.js     # Re-export
│   │   │   ├── DigitalMarketing.js   # Re-export
│   │   │   ├── ExtraPages.js         # WhyOnDirect, Philosophy, Careers
│   │   │   ├── WhyOnDirect.js        # Re-export
│   │   │   ├── Philosophy.js         # Re-export
│   │   │   ├── Careers.js            # Re-export
│   │   │   ├── Connect.js            # Contact form with React Hook Form
│   │   │   └── admin/
│   │   │       ├── AdminLogin.js     # JWT login UI
│   │   │       └── AdminDashboard.js # Leads table + stats + refresh
│   │   └── services/
│   │       └── api.js                # Axios instance with JWT interceptors
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── .env
│
└── backend/                           # Node.js / Express API
    ├── server.js                      # Entry: Helmet, CORS, rate limit, routes
    ├── config/
    │   └── db.js                      # Mongoose connection
    ├── models/
    │   ├── Contact.js                 # Lead schema (firstName, email, service…)
    │   └── Admin.js                   # Admin schema with bcrypt password
    ├── controllers/
    │   ├── contactController.js       # createContact + email notification
    │   └── adminController.js         # login, getLeads, updateStatus, delete
    ├── routes/
    │   └── index.js                   # All API routes with express-validator
    ├── middleware/
    │   └── auth.js                    # JWT protect middleware
    ├── scripts/
    │   └── seed.js                    # Creates initial admin user
    ├── package.json
    ├── .env
    └── .env.example
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- **Node.js** v18+ (`node -v`)
- **MongoDB** running locally OR a free [MongoDB Atlas](https://cloud.mongodb.com) cluster
- **npm** v9+

---

### Step 1 — Clone & install

```bash
# If you received as a zip, extract first.
# Otherwise:
git clone <your-repo-url> ondirect
cd ondirect
```

---

### Step 2 — Backend setup

```bash
cd backend

# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Open .env and set MONGO_URI (and optionally email settings)

# 3. Create admin user
node scripts/seed.js
# Output: ✅  Admin created: admin@ondirect.in
# Default password: OnDirect@2024!  (change in .env before running)

# 4. Start dev server
npm run dev
# ✅  Server running on port 5000
```

---

### Step 3 — Frontend setup

```bash
cd ../frontend

# 1. Install dependencies
npm install

# 2. Install Tailwind (if not already present as devDependency)
npm install -D tailwindcss postcss autoprefixer

# 3. Set API URL
# .env is already pre-configured for local:
# REACT_APP_API_URL=http://localhost:5000/api

# 4. Start dev server
npm start
# Opens http://localhost:3000
```

---

### Step 4 — Test the app

| URL | What you see |
|-----|-------------|
| `http://localhost:3000` | Home page with animated hero |
| `http://localhost:3000/connect` | Contact form |
| `http://localhost:3000/admin/login` | Admin login |
| `http://localhost:3000/admin/dashboard` | Lead dashboard (after login) |

**Admin credentials (default):**
- Email: `admin@ondirect.in`
- Password: `OnDirect@2024!`

---

## 🌐 Deployment

### Frontend → Vercel (recommended)

```bash
cd frontend
npm run build    # Creates /build folder

# Option A: Vercel CLI
npm i -g vercel
vercel --prod

# Option B: Vercel Dashboard
# 1. Push to GitHub
# 2. Import repo at vercel.com
# 3. Set environment variable:
#    REACT_APP_API_URL = https://your-backend.railway.app/api
# 4. Deploy
```

### Frontend → Netlify

```bash
# Build command:   npm run build
# Publish dir:     build
# Add _redirects file for React Router:
echo "/*  /index.html  200" > frontend/public/_redirects
```

### Backend → Railway (recommended free tier)

```bash
# 1. Push backend/ to GitHub (separate repo or monorepo)
# 2. railway.app → New Project → Deploy from GitHub
# 3. Set environment variables in Railway dashboard:
#    NODE_ENV=production
#    MONGO_URI=mongodb+srv://...  (Atlas URI)
#    JWT_SECRET=<strong random string>
#    FRONTEND_URL=https://your-site.vercel.app
#    ADMIN_EMAIL=admin@ondirect.in
#    ADMIN_PASSWORD=<strong password>
# 4. Railway auto-detects Node and runs npm start
```

### Backend → Render

```bash
# 1. render.com → New Web Service → Connect GitHub
# 2. Build Command:  npm install
# 3. Start Command:  node server.js
# 4. Add same env vars as above
```

### Database → MongoDB Atlas (free)

```
1. cloud.mongodb.com → Create free M0 cluster
2. Database Access → Add user (username + password)
3. Network Access → Allow 0.0.0.0/0 (or Railway/Render IP)
4. Connect → Drivers → Copy connection string
5. Replace <password> in URI
6. Paste as MONGO_URI in your platform's env vars
```

---

## 🔌 API Reference

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/health` | Server health check |

**POST `/api/contact` — Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "phone": "+91 98765 43210",
  "service": "lead-management",
  "message": "I need help with B2B lead generation..."
}
```

**Response `201`:**
```json
{ "success": true, "message": "Thank you! We will be in touch within 24 hours.", "id": "..." }
```

---

### Admin Endpoints (JWT required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/login` | Get JWT token |
| `GET` | `/api/admin/leads` | List all leads (paginated) |
| `PATCH` | `/api/admin/leads/:id` | Update lead status |
| `DELETE` | `/api/admin/leads/:id` | Delete a lead |

**POST `/api/admin/login`:**
```json
{ "email": "admin@ondirect.in", "password": "OnDirect@2024!" }
```
**Response:** `{ "success": true, "token": "eyJ..." }`

**GET `/api/admin/leads` — Query params:**
```
?page=1&limit=50&status=new&service=lead-management&search=john
```

**PATCH `/api/admin/leads/:id`:**
```json
{ "status": "contacted" }   // new | contacted | qualified | closed
```

All admin requests need header:
```
Authorization: Bearer <token>
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#020817` | Primary background |
| `navy-900` | `#0A0F1E` | Section bg |
| `navy-800` | `#0D1526` | Card bg |
| `electric-500` | `#3B82F6` | Primary blue accent |
| `electric-400` | `#60A5FA` | Hover / text accent |
| `cyan-500` | `#06B6D4` | Gradient end, highlights |
| `violet-500` | `#8B5CF6` | Tertiary accent |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Syne** | 400–800 | Headings, labels, buttons, nav |
| **DM Sans** | 300–600 | Body text, descriptions, forms |

### Animation Variants (from `animations/variants.js`)

```js
import { fadeUp, fadeIn, fadeLeft, fadeRight, scaleIn,
         staggerContainer, heroTextReveal, cardHover } from '../animations/variants';

// Usage with Framer Motion:
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  Content
</motion.div>
```

---

## 🔐 Security Checklist

- [x] **Helmet.js** — 14 security headers (XSS, clickjacking, MIME sniff)
- [x] **CORS** — whitelist only your frontend origin
- [x] **Rate limiting** — 200 req/15min global, 10 form submissions/hour, 20 admin logins/15min
- [x] **mongoSanitize** — blocks NoSQL injection (`$where`, `$gt` in body)
- [x] **express-validator** — all inputs validated + escaped server-side
- [x] **bcryptjs** — passwords hashed with salt rounds 12
- [x] **JWT** — admin auth, 7-day expiry, stored in localStorage
- [x] **Body size limit** — 10kb max request body
- [x] **Password never returned** — `select: false` on Admin.password field

**Before going to production:**
1. Change `JWT_SECRET` to a 64+ char random string
2. Change admin password from the default
3. Set `NODE_ENV=production`
4. Set `FRONTEND_URL` to your actual deployed domain
5. Enable MongoDB Atlas IP whitelist

---

## 🧩 Pages & Features

| Page | Route | Key Features |
|------|-------|-------------|
| Home | `/` | Parallax hero, stats grid, services, about snapshot, clients, testimonials, FAQ accordion |
| About | `/about-us` | Mission, animated stats, focus areas (Tech/Media/Marketing), client logos |
| Solutions | `/solutions` | 4-card overview with feature lists |
| Lead Management | `/lead-management` | Animated process steps, feature cards |
| Data Solutions | `/data-solutions` | Feature grid, global reach banner |
| Sales Targeting | `/sales-targeting` | 4× growth stats, ABM feature grid |
| Digital Marketing | `/digital-marketing` | Channel feature grid |
| Why OnDirect | `/ondirect-edge` | 6 differentiator cards |
| Philosophy | `/brand-philosophy` | Mission / Vision / Values |
| Careers | `/careers` | Culture cards + live job listings |
| Connect | `/connect` | Validated contact form → MongoDB |
| Admin Login | `/admin/login` | JWT login |
| Admin Dashboard | `/admin/dashboard` | Lead table with stats, status filter, real-time refresh |

---

## 🛠 Customization Guide

### Adding a new page

1. Create `src/pages/NewPage.js`
2. Add route in `src/App.js`
3. Add link in `src/components/common/Navbar.js`

### Changing brand colors

Edit `tailwind.config.js` and `src/index.css` CSS variables.

### Changing fonts

Replace Google Fonts `@import` in `src/index.css` and update `font-family` in `tailwind.config.js`.

### Adding a new service

Add to the `solutions` array in `src/pages/Solutions.js` and create a detail page in `src/pages/SolutionPages.js`.

---

## 📬 Email Notifications (Optional)

When a lead submits the form, an HTML email is fired to `EMAIL_NOTIFY`.

To enable, add to backend `.env`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_NOTIFY=business@ondirect.in
```

For Gmail, generate an **App Password** at myaccount.google.com → Security → 2-Step Verification → App Passwords.

---

## 🚀 Performance Tips

- React CRA build is already optimized (code splitting, tree shaking, minification)
- All animations use `will-change: transform` (Framer Motion default)
- Images are lazy-loaded via `loading="lazy"` on `<img>` tags
- Fonts preloaded via `<link rel="preconnect">` in `public/index.html`
- API responses cached at CDN layer when deployed to Vercel/Netlify

---

## 📞 Support

**OnDirect Marketing Services LLP**  
312, Tower-2, World Trade Center, EON Free Zone,  
Kharadi, Pune, Maharashtra 411014  
📧 business@ondirect.in

---

*Built with ❤️ — React 18 · Framer Motion · Tailwind CSS · Node.js · Express · MongoDB*
