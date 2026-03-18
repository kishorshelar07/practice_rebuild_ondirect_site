# ============================================================
# OnDirect Website — Windows Setup Script
# Run this from the root  ondirect/  folder
# ============================================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OnDirect Website — Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ── Frontend ──────────────────────────────────────────────
Write-Host "[1/4] Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location frontend

# Remove any leftover node_modules to avoid version conflicts
if (Test-Path "node_modules") {
    Write-Host "      Removing old node_modules..." -ForegroundColor Gray
    Remove-Item -Recurse -Force node_modules
}
if (Test-Path "package-lock.json") {
    Remove-Item -Force package-lock.json
}

# Install — this will pull Tailwind v3 (not v4)
npm install
Write-Host "  ✅  Frontend dependencies installed" -ForegroundColor Green

# ── Backend ───────────────────────────────────────────────
Write-Host ""
Write-Host "[2/4] Installing backend dependencies..." -ForegroundColor Yellow
Set-Location ..\backend
npm install
Write-Host "  ✅  Backend dependencies installed" -ForegroundColor Green

# ── Seed admin user ───────────────────────────────────────
Write-Host ""
Write-Host "[3/4] Creating admin user in MongoDB..." -ForegroundColor Yellow
Write-Host "      (Make sure MongoDB is running first!)" -ForegroundColor Gray
node scripts/seed.js
Write-Host "  ✅  Admin user ready" -ForegroundColor Green

# ── Done ──────────────────────────────────────────────────
Write-Host ""
Write-Host "[4/4] Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  HOW TO RUN THE PROJECT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Terminal 1 (Backend):" -ForegroundColor White
Write-Host "    cd backend" -ForegroundColor Gray
Write-Host "    npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Terminal 2 (Frontend):" -ForegroundColor White
Write-Host "    cd frontend" -ForegroundColor Gray
Write-Host "    npm start" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Then open: http://localhost:3000" -ForegroundColor Cyan
Write-Host "  Admin panel: http://localhost:3000/admin/login" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Admin login:" -ForegroundColor White
Write-Host "    Email:    admin@ondirect.in" -ForegroundColor Gray
Write-Host "    Password: OnDirect@2024!" -ForegroundColor Gray
Write-Host ""

Set-Location ..
