# Athena Setup Guide

This guide will help you set up the Athena habit tracking and journaling application.

## Quick Demo (No Setup Required)

The application includes demo components that work without authentication for initial testing:

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Visit `http://localhost:3000`

The demo version shows the UI structure and navigation without requiring Clerk or database setup.

## Full Production Setup

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account

### Step 1: Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
   - `CLERK_SECRET_KEY`: Your Clerk secret key

### Step 2: Database Setup

1. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

2. Push the schema to your database:
   ```bash
   npx prisma db push
   ```

### Step 3: Enable Clerk Authentication

Uncomment the Clerk-related code in the following files:

1. **src/app/layout.tsx**:
   - Uncomment `ClerkProvider` import and wrapper

2. **src/app/page.tsx**:
   - Uncomment Clerk button imports and components
   - Comment out demo buttons

3. **src/app/dashboard/layout.tsx**:
   - Uncomment `UserButton` import and usage
   - Remove demo user icon

4. **src/app/dashboard/page.tsx**:
   - Uncomment `auth` import and usage

5. **All API routes** (`src/app/api/*/route.ts`):
   - The API routes are already set up to work with Clerk

### Step 4: Enable Real Prisma Client

In `src/lib/prisma.ts`, replace the mock implementation with the real Prisma client:

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### Step 5: Run the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Sign up/sign in with Clerk authentication

## File Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes for habits and journals
│   ├── dashboard/         # Protected dashboard pages
│   ├── sign-in/           # Clerk sign-in page
│   ├── sign-up/           # Clerk sign-up page
│   ├── layout.tsx         # Root layout with Clerk provider
│   └── page.tsx           # Landing page
├── lib/                   # Utility functions
│   └── prisma.ts         # Prisma client setup
└── middleware.ts          # Clerk authentication middleware
```

## Deployment

1. Set up your production database
2. Configure environment variables in your deployment platform
3. Ensure Clerk is configured for your production domain
4. Run `npm run build` to build the application

## Troubleshooting

- **Build fails**: Ensure valid Clerk keys are provided
- **Database errors**: Check your DATABASE_URL and run `npx prisma db push`
- **Authentication issues**: Verify Clerk keys and domain configuration