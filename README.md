# Next.js Passwordless Email Authentication Demo

## Tech Stack
- Next.js 13 (with app router)
- NextAuth.js (with custom roles)
- Prisma (Postgres)
## Getting Started

1. Create a new `.env.local` file then add the following values to it:
```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

POSTGRES_PRISMA_URL=your-db-url
POSTGRES_URL_NON_POOLING=your-db-url

EMAIL_FROM=your-email@your-website.com
EMAIL_SERVER=smtp://your-username:your-password@smtp.your-email-service-provider.com:587
```


2. Run Prisma to prototype a new [schema](prisma/schema.prisma):
```bash
pnpm prisma-db-push
```

3. Start a [local dev server](http://localhost:3000):
```
pnpm dev
```
