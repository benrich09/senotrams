# Environment variables (frontend vs backend)

**Never commit real secrets.** Use placeholders here; put real values only in:
- Vercel / Render dashboard env vars
- local `.env` / `.env.local` (gitignored)

## Frontend (Vercel / Next.js) — public only

```env
NEXT_PUBLIC_API_URL=https://YOUR-API.onrender.com
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxxxxxxx
```

Never put `SUPABASE_SECRET_KEY` or service-role keys in the frontend.

## Backend (Render Docker) — secrets allowed (dashboard only)

```env
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxxxxxxx
SUPABASE_SECRET_KEY=sb_secret_xxxxxxxx
SUPABASE_JWKS_URL=https://YOUR_PROJECT.supabase.co/auth/v1/.well-known/jwks.json
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxxxxx
SUPABASE_BUCKET=uploads
DATABASE_URL=postgresql://postgres.YOUR_REF:YOUR_PASSWORD@...pooler.supabase.com:6543/postgres?sslmode=require
JWT_SECRET=long-random-string
ADMIN_USER=admin
ADMIN_PASS=strong-password
CRON_SECRET=long-random-string
PORT=8080
```

Replace `NEXT_PUBLIC_API_URL` with your real Render URL after deploy.
