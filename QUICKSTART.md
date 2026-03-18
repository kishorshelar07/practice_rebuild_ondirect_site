# ⚡ Quick Start Guide

## ❗ Common Errors & Fixes

### Error 1 — `Module not found: Can't resolve './pages/LeadManagementFull'`
**Cause:** Old App.js had wrong import paths.  
**Fix:** Replace your `frontend/src/App.js` with the one in this zip. ✅ Already fixed.

### Error 2 — `tailwindcss directly as a PostCSS plugin`
**Cause:** You accidentally installed Tailwind **v4** which changed its PostCSS API.  
**Fix:** Delete `node_modules` and reinstall — the `package.json` now pins Tailwind v3.4.

---

## 🪟 Windows (PowerShell) — Step by Step

```powershell
# 1. Extract the zip, then open PowerShell in the ondirect folder

# 2. Backend setup
cd backend
npm install
node scripts/seed.js        # Creates admin user (needs MongoDB running)
npm run dev                  # Starts API on port 5000

# 3. Open a NEW terminal — Frontend setup
cd frontend
# ⚠️  IMPORTANT: delete old node_modules first if you had errors before
Remove-Item -Recurse -Force node_modules   # only if needed
Remove-Item -Force package-lock.json       # only if needed
npm install                  # Installs Tailwind v3 (not v4)
npm start                    # Opens http://localhost:3000
```

Or just run the included script:
```powershell
# From the ondirect/ root folder:
powershell -ExecutionPolicy Bypass -File setup.ps1
```

---

## 🍎 Mac / Linux — Step by Step

```bash
# From the ondirect/ root folder:
bash setup.sh

# Or manually:
cd backend && npm install && node scripts/seed.js && npm run dev
# New terminal:
cd frontend && rm -rf node_modules && npm install && npm start
```

---

## MongoDB Setup

**Option A — Local MongoDB**
1. Download from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. `MONGO_URI=mongodb://localhost:27017/ondirect` (already in `.env`)

**Option B — MongoDB Atlas (Cloud, Free)**
1. Go to https://cloud.mongodb.com → Create free M0 cluster
2. Database Access → Add user → Save username & password
3. Network Access → Add IP `0.0.0.0/0`
4. Connect → Drivers → Copy URI
5. Paste in `backend/.env` as `MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/ondirect`

---

## URLs After Starting

| URL | What |
|-----|------|
| http://localhost:3000 | Website |
| http://localhost:3000/admin/login | Admin login |
| http://localhost:5000/health | API health check |

**Admin credentials:**
- Email: `admin@ondirect.in`
- Password: `OnDirect@2024!`
