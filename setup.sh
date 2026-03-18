#!/bin/bash
# ============================================================
# OnDirect Website — Mac/Linux Setup Script
# Run: bash setup.sh   from the ondirect/ root folder
# ============================================================

set -e

echo ""
echo "========================================"
echo "  OnDirect Website — Setup Script"
echo "========================================"
echo ""

# ── Frontend ──────────────────────────────────────────────
echo "[1/4] Installing frontend dependencies..."
cd frontend

# Clean slate to avoid version conflicts
rm -rf node_modules package-lock.json 2>/dev/null || true

npm install
echo "  ✅  Frontend dependencies installed"

# ── Backend ───────────────────────────────────────────────
echo ""
echo "[2/4] Installing backend dependencies..."
cd ../backend
npm install
echo "  ✅  Backend dependencies installed"

# ── Seed ──────────────────────────────────────────────────
echo ""
echo "[3/4] Creating admin user (MongoDB must be running)..."
node scripts/seed.js
echo "  ✅  Admin user ready"

# ── Done ──────────────────────────────────────────────────
echo ""
echo "[4/4] Setup complete!"
echo ""
echo "========================================"
echo "  HOW TO RUN"
echo "========================================"
echo ""
echo "  Terminal 1 (Backend):"
echo "    cd backend && npm run dev"
echo ""
echo "  Terminal 2 (Frontend):"
echo "    cd frontend && npm start"
echo ""
echo "  App:    http://localhost:3000"
echo "  Admin:  http://localhost:3000/admin/login"
echo "  Login:  admin@ondirect.in / OnDirect@2024!"
echo ""

cd ..
