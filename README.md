# Senotrams

Next.js site + Go API with JWT admin auth.

## Admin access

- Login: **https://your-domain/login**
- Dashboard: **/admin** (protected by Vercel Edge Middleware + cookie)

Default API admin (change immediately):

- Username: `admin`
- Password: `senotrams2026`

## Frontend

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Backend

```bash
cd backend
export JWT_SECRET='change-me'
export ADMIN_USER=admin
export ADMIN_PASS='strong-password'
go mod tidy && go run .
```

## Auth flow

1. User opens `/login`, submits credentials
2. Next.js calls `POST /api/auth/login` on the Go API
3. JWT stored in `localStorage` + `senotrams_token` cookie
4. Edge middleware blocks `/admin/*` without the cookie
5. Admin API writes send `Authorization: Bearer <token>`

## Services (public site)

Web & mobile apps (→ https://avionics-two.vercel.app/), hosting, social media, graphics, animation, data analysis, digital marketing, content creation.
