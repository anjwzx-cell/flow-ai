# Flow AI - Development Guide

## Project Overview
Flow AI is a comprehensive AI automation platform for small businesses, built with Next.js 14+, Supabase, Stripe, and Resend.

## Tech Stack
- **Frontend**: Next.js 14+ (App Router) + TypeScript
- **Database/Auth**: Supabase (PostgreSQL + Auth)
- **Payments**: Stripe + webhooks
- **Email/Newsletter**: Resend
- **Styling**: Tailwind CSS with custom design system
- **Hosting**: Vercel
- **ORM**: Prisma

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account and project
- Stripe account with API keys
- Resend account with API key

### Installation
1. Clone the repository and navigate to the project
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your API keys
4. Initialize Prisma: `npx prisma generate`
5. Run database migrations: `npx prisma db push`
6. Start development server: `npm run dev`

### Environment Variables
- `DATABASE_URL`: Supabase database connection string
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret
- `RESEND_API_KEY`: Resend API key
- `RESEND_FROM_EMAIL`: Default sender email
- `NEXT_PUBLIC_APP_URL`: Application URL

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## Project Structure
- `app/` - Next.js App Router pages and API routes
- `components/` - React components (UI, layout, features)
- `lib/` - Utility functions and client configurations
- `prisma/` - Database schema and migrations

## Key Features
- Authentication with Supabase Auth
- User dashboard with workflow management
- Admin dashboard for platform management
- Stripe payment integration with webhooks
- Newsletter system with Resend
- Responsive design with Tailwind CSS
- SEO optimization with sitemap and robots.txt
- Analytics with Vercel Analytics

## Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel
4. Deploy and test
5. Configure Stripe webhooks for production URL

## Notes
- Admin role checking needs to be implemented in middleware
- Database schema may need adjustments based on actual requirements
- Stripe prices need to be created in Stripe Dashboard
- Email templates should be customized for your brand