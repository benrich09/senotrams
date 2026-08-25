# Deploy Senotrams (Vercel + Render + Supabase)

## 1. Supabase (database + storage)

1. Create a project at https://supabase.com
2. **Settings → Database** → copy connection URI (pooler, port 6543) → `DATABASE_URL`
3. SQL Editor → paste `backend/supabase/schema.sql` → Run (optional; API migrates too)
4. **Storage → New bucket** → `uploads` → enable Public if you want public file URLs
5. **Settings → API**:
   - Project URL → `SUPABASE_URL`
   - `service_role` secret → `SUPABASE_SERVICE_ROLE_KEY` (server only)

## 2. Render (Docker API)

1. Push `backend/` to GitHub
2. Render → **New Web Service** → Docker
3. Set env vars:

```
DATABASE_URL=postgresql://...supabase...
JWT_SECRET=<long-random>
ADMIN_USER=admin
ADMIN_PASS=<strong-password>
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
SUPABASE_BUCKET=uploads
```

4. Health check: `/health`
5. Copy service URL, e.g. `https://senotrams-api.onrender.com`

## 3. Vercel (Next.js)

1. Deploy the frontend repo
2. Environment variable:

```
NEXT_PUBLIC_API_URL=https://senotrams-api.onrender.com
```

3. Domain: senotrams.co.tz already on Vercel

## 4. Test

```bash
curl https://senotrams-api.onrender.com/health
curl -X POST https://senotrams-api.onrender.com/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"username":"admin","password":"YOUR_PASS"}'
```

Open `https://senotrams.co.tz/login` and sign in to the admin dashboard.
