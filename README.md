# 🚀 Blankweb Starter

A **Next.js SaaS baseline** project with authentication, database, payments, and testing configured out of the box.

## 🛠 Tech Stack

- ✅ **Next.js 14** + TypeScript + Tailwind CSS
- 🔑 **Clerk** authentication
- 🗄️ **Prisma** + PostgreSQL database
- 💳 **Stripe** Checkout
- 🧪 **Jest** (unit) + **Playwright** (e2e)
- 🧹 **ESLint** + strict TypeScript

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
# Create dev directory and clone
mkdir -p ~/dev && cd ~/dev
git clone https://github.com/secretisgratitude/blankweb.git
cd blankweb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment template:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/blankweb
NEXT_PUBLIC_APP_URL=http://localhost:3000

CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PRICE_ID=price_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

SENTRY_DSN=
```

> 💡 `.env.local` is git-ignored and safe for secrets

### 4. Database Setup

```bash
# Push schema to your database
npx prisma db push

# Open Prisma Studio (optional)
npx prisma studio
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

### Unit Tests (Jest)
```bash
npm run test
```

### End-to-End Tests (Playwright)
```bash
# First time setup
npx playwright install

# Run e2e tests
npm run e2e
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository into [Vercel](https://vercel.com)
3. Add environment variables in **Project Settings → Environment Variables**
4. Deploy your project
5. Update `NEXT_PUBLIC_APP_URL` in your environment variables to your production domain

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Authentication](https://clerk.com/docs)
- [Prisma Database](https://www.prisma.io/docs)
- [Stripe Payments](https://stripe.com/docs)
- [Playwright Testing](https://playwright.dev/docs/intro)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
