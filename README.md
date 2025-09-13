# BIMTA - British Independent Motor Trade Association

A modern Next.js website for BIMTA providing vehicle verification services, dealer directory, and import guidance for the UK motor trade industry.

## Features

### 🏠 Home Page
- Hero section with call-to-action buttons
- Key features showcase
- Industry statistics
- Vehicle check preview

### 📋 About/Contact Page
- Company history and mission
- Contact form integration
- Office location and contact details
- Company values and milestones

### 🚗 Mileage Check (E-commerce)
- Three-tier pricing packages (Basic, Comprehensive, Professional)
- Stripe payment integration
- Vehicle registration input
- Instant report generation
- Success page with download options

### 🏢 Dealer Directory
- Searchable dealer listings
- Filter by location and specialty
- Dealer ratings and verification badges
- Contact information display

### 🔐 Member Login System
- Secure dealer authentication
- Registration for new dealers
- JWT-based session management
- Demo credentials: email: `demo@bimta.co.uk` password: `demo123`

### 📚 Import Registration Guidance
- Step-by-step import process
- Required documentation checklist
- Cost calculator
- Frequently asked questions
- Multi-tab interface for easy navigation

## Tech Stack

- **Framework**: Next.js 15.5.3 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Payments**: Stripe
- **Authentication**: JWT with bcryptjs
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd bimta
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` with your credentials:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your-secret-key-change-in-production
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
bimta/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── contact/      # Contact form handler
│   │   └── create-checkout-session/ # Stripe checkout
│   ├── about/            # About/Contact page
│   ├── dealer-directory/ # Dealer listings
│   ├── import-guidance/  # Import registration guide
│   ├── login/           # Member login/registration
│   ├── mileage-check/   # Vehicle check with payments
│   │   └── success/     # Payment success page
│   ├── layout.tsx       # Root layout with navigation
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Key Features Implementation

### Stripe Integration
- Checkout sessions created via `/api/create-checkout-session`
- Three pricing tiers with different features
- Success page with order confirmation

### Authentication System
- JWT-based authentication
- Demo login available for testing
- Protected dealer directory access

### Contact Form
- Server-side form handling
- Email notification system ready for integration
- Form validation and error handling

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables for Production
- Set up Stripe production keys
- Generate secure JWT secret
- Configure email service for contact forms

## Notes

- The Stripe integration requires valid API keys to process payments
- Contact form currently logs to console - integrate with email service in production
- Authentication system uses mock data - implement database in production
- All images are placeholder - replace with actual BIMTA assets

## License

Proprietary - BIMTA

## Support

For support, contact: info@bimta.co.uk