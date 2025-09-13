# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BIMTA (British Independent Motor Trade Association) is a Next.js 15.5.3 website built with TypeScript, providing vehicle verification services, member directory, and import guidance for the UK motor trade industry.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Key Implementation Details

### Tech Stack
- **Framework**: Next.js 15.5.3 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 (using @tailwindcss/postcss)
- **State/Animations**: Framer Motion for animations
- **Payments**: Stripe integration with checkout sessions
- **Authentication**: JWT-based with bcryptjs (stored in cookies via js-cookie)
- **UI Components**: Radix UI (Dialog, Tabs) with dynamic imports for SSR compatibility
- **Icons**: Lucide React

### Critical Implementation Patterns

#### 1. SSR/Hydration Issues with Radix UI
When using Radix UI components (especially Tabs), use dynamic imports with SSR disabled to prevent hydration mismatches:
```typescript
const Tabs = dynamic(
  () => import('@radix-ui/react-tabs'),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);
```

#### 2. Icon Imports
Use `PoundSterling` instead of `Pound` from lucide-react (Pound export doesn't exist).

#### 3. API Routes Structure
All API routes use Next.js 15 App Router conventions:
- `/app/api/auth/login/route.ts` - JWT authentication
- `/app/api/auth/register/route.ts` - User registration
- `/app/api/contact/route.ts` - Contact form handler
- `/app/api/create-checkout-session/route.ts` - Stripe checkout

#### 4. Environment Variables Required
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
JWT_SECRET=your-secret-key
```

#### 5. Authentication Flow
- JWT tokens stored in httpOnly cookies
- Demo credentials: `demo@bimta.co.uk` / `demo123`
- Protected routes check for `authToken` cookie

### Page Structure

- **Home** (`/app/page.tsx`): Hero section, features, stats, vehicle check preview
- **Members Directory** (`/app/members-directory/page.tsx`): Filterable member listings with categories (Dealer, Garage, Car Transporter, Service Provider)
- **Mileage Check** (`/app/mileage-check/page.tsx`): Three-tier Stripe pricing with checkout
- **Import Guidance** (`/app/import-guidance/page.tsx`): Multi-tab interface with dynamic imports
- **Login** (`/app/login/page.tsx`): JWT authentication with registration
- **About** (`/app/about/page.tsx`): Contact form and company information

### Common Issues & Solutions

1. **Stripe Integration**: Requires valid API keys in environment variables
2. **Contact Form**: Currently logs to console - needs email service integration for production
3. **Dynamic Imports**: Required for Radix UI components to avoid SSR issues
4. **Authentication**: Uses mock data - implement proper database in production

### Directory Naming Convention
The project uses "members-directory" (not "dealer-directory") throughout navigation and routing.