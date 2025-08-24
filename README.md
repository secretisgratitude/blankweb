# 🚀 BlankWeb — Beginner-Friendly SaaS Starter

This is a **Next.js 14 baseline project** already wired with:

- ✅ Next.js 14 + TypeScript + Tailwind CSS
- 🔑 Clerk (authentication)
- 🗄️ Prisma + PostgreSQL
- 💳 Stripe Checkout
- 🧪 Jest (unit tests) + Playwright (end-to-end tests)
- ⚡ ESLint + TypeScript strict mode
- 🔐 `.env` example file (so you don’t guess where secrets go)

This README explains everything step by step — for **Windows (PowerShell)** and **Mac/Linux (Terminal)**.

---

## 🖥 1) Clone the Repo

**Windows (PowerShell)**
```powershell
cd C:\dev
git clone https://github.com/secretisgratitude/blankweb.git
cd blankweb


Mac/Linux

mkdir -p ~/dev && cd ~/dev
git clone https://github.com/secretisgratitude/blankweb.git
cd blankweb

📦 2) Install Dependencies

Windows

npm install


Mac/Linux

npm install

🔑 3) Set Up Environment Variables

Copy .env.example → .env.local

Windows

copy .env.example .env.local


Mac/Linux

cp .env.example .env.local


Edit .env.local and fill in real values (placeholders work for local dev):

DATABASE_URL=postgresql://user:password@localhost:5432/blankweb
NEXT_PUBLIC_APP_URL=http://localhost:3000

CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PRICE_ID=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

SENTRY_DSN=


💡 Keep .env.local out of git (already ignored by .gitignore).

▶ 4) Run the Dev Server

Windows

npm run dev


Mac/Linux

npm run dev


Open: http://localhost:3000

🧪 5) Tests

Unit (Jest)

npm run test


E2E (Playwright)
First time only:

npx playwright install


Then:

npm run e2e


Tip: run npm run dev in a second terminal while e2e tests open the site.

🗄 6) Database (Prisma)

Push schema to your DB:

npx prisma db push


Open DB UI (optional):

npx prisma studio

☁ 7) Deploy to Vercel

Go to https://vercel.com
 → New Project → Import this GitHub repo.

In Project Settings → Environment Variables, add every key from your .env.local.

Click Deploy 🎉

In provider dashboards:

Clerk → add your Vercel domain to Allowed Origins.

Stripe → configure product price_xxx and allowed redirect URLs.

Update NEXT_PUBLIC_APP_URL to your Vercel URL and redeploy.

🛠 Scripts
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"typecheck": "tsc --noEmit",
"test": "jest",
"e2e": "playwright test",
"ci:all": "npm run lint && npm run typecheck && npm run test && npm run e2e"


Run everything:

npm run ci:all

📂 Project Structure
app/
  layout.tsx            # Global layout with ClerkProvider
  page.tsx              # Public home
  dashboard/page.tsx    # Protected page
  api/stripe/route.ts   # Stripe checkout API

middleware.ts           # Clerk route protection

prisma/
  schema.prisma         # Database schema

tests/
  example.test.ts       # Jest unit test
  e2e/home.spec.ts      # Playwright end-to-end test

🆘 Common Issues

jest-environment-jsdom not found → npm i -D jest-environment-jsdom

Playwright complains → npx playwright install

Clerk login loop → add domain to Clerk → Allowed Origins

Stripe 500 → check STRIPE_SECRET_KEY and valid STRIPE_PRICE_ID

DB errors → verify DATABASE_URL and run npx prisma db push
