# Environment variables (frontend vs backend)

## Frontend (Vercel / Next.js) — public only

```env
NEXT_PUBLIC_API_URL=https://senotrams-api.onrender.com
NEXT_PUBLIC_SUPABASE_URL=https://ihkqwoxskntzfmraivyo.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_6tJ18oBpT84X_I4s3ti9UQ_xj_0kbHu
```

Never put `SUPABASE_SECRET_KEY` in the frontend.

## Backend (Render Docker) — secrets allowed

```env
SUPABASE_URL=https://ihkqwoxskntzfmraivyo.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_6tJ18oBpT84X_I4s3ti9UQ_xj_0kbHu
SUPABASE_SECRET_KEY=sb_secret_xxxxxxxx
SUPABASE_JWKS_URL=https://ihkqwoxskntzfmraivyo.supabase.co/auth/v1/.well-known/jwks.json
SUPABASE_SERVICE_ROLE_KEY=sb_secret_xxxxxxxx
SUPABASE_BUCKET=uploads
DATABASE_URL=postgresql://...
JWT_SECRET=...
ADMIN_USER=admin
ADMIN_PASS=admin
CRON_SECRET=...
PORT=8080
```

Replace `NEXT_PUBLIC_API_URL` / Render URL with your real service URL after deploy.
