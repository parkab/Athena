# Athena - Habit Tracking & Journaling App

A fullstack web application built with Next.js 14 for tracking habits and journaling. Athena helps you build consistent daily routines and reflect on your personal growth through guided journaling.

## 🚀 Features

- **Habit Tracking**: Create and track daily, weekly, or monthly habits with visual progress indicators
- **Journaling**: Write and organize journal entries with mood tracking and tags
- **Dashboard**: Overview of your progress with analytics and quick actions
- **Authentication**: Secure authentication powered by Clerk
- **Responsive Design**: Mobile-first design with TailwindCSS

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **Styling**: TailwindCSS

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Clerk account for authentication

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd athena
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   
   Update the following variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
   - `CLERK_SECRET_KEY`: Your Clerk secret key

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma db push
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄 Database Schema

The application uses the following main models:

- **User**: Stores user information linked to Clerk authentication
- **Habit**: Represents trackable habits with frequency and targets
- **HabitCompletion**: Records when habits are completed
- **Journal**: Stores journal entries with mood and tag support

## 🔗 API Routes

- `GET/POST /api/habits` - Manage user habits
- `GET/POST /api/journals` - Manage journal entries

## 🚦 Getting Started

1. **Sign up/Sign in**: Create an account or sign in using Clerk authentication
2. **Create habits**: Navigate to the Habits page to create your first trackable habit
3. **Start journaling**: Use the Journal page to write your thoughts and reflections
4. **Track progress**: View your dashboard for an overview of your progress

## 🏗 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Protected dashboard pages
│   ├── sign-in/           # Authentication pages
│   └── sign-up/
├── lib/                   # Utility functions and configurations
│   └── prisma.ts         # Prisma client setup
├── middleware.ts          # Clerk authentication middleware
prisma/
└── schema.prisma         # Database schema
```

## 🎨 Customization

- **Colors**: Update the color scheme in `tailwind.config.ts`
- **Database**: Modify the schema in `prisma/schema.prisma`
- **Authentication**: Configure Clerk settings in the middleware and environment variables

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔒 Environment Variables

Make sure to set up all required environment variables before running the application. Check `.env.example` for the complete list.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
