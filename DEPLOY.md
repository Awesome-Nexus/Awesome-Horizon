# Manual Deployment Guide

## Deploy to Vercel

### Option 1: Dashboard (Recommended)
1. Visit: https://vercel.com/dashboard
2. Select `awesome-horizon` project
3. Click "Redeploy" on latest deployment

### Option 2: CLI
```bash
# Login first
vercel login

# Then deploy
vercel --prod
```

### Option 3: Git Push (Auto)
```bash
git push origin main
```
Vercel auto-deploys on every push.

---
Last deployment: February 1, 2026
Commit: a47c754
