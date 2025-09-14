import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bimta.co.uk'),
  title: {
    default: 'BIMTA - British Independent Motor Trade Association | Vehicle Checks & Dealer Network',
    template: '%s | BIMTA'
  },
  description: 'UK\'s leading motor trade association offering comprehensive vehicle history checks, mileage verification, dealer directory, and import guidance. Trusted by 10,000+ dealers with 99.9% accuracy.',
  keywords: [
    'vehicle history check',
    'mileage verification',
    'car history check UK',
    'HPI check',
    'motor trade association',
    'dealer directory UK',
    'import car UK',
    'DVLA check',
    'vehicle registration',
    'car dealer network',
    'BIMTA',
    'British Independent Motor Trade Association'
  ],
  authors: [{ name: 'BIMTA' }],
  creator: 'BIMTA',
  publisher: 'British Independent Motor Trade Association',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BIMTA - British Independent Motor Trade Association',
    description: 'UK\'s most trusted vehicle verification platform. Comprehensive checks, dealer network, and import services.',
    url: 'https://bimta.co.uk',
    siteName: 'BIMTA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BIMTA - Vehicle Verification Services',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIMTA - Vehicle Checks & Dealer Network',
    description: 'Comprehensive vehicle history checks and dealer services',
    images: ['/twitter-image.png'],
    creator: '@BIMTA_UK',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bimta.co.uk',
  },
  category: 'automotive',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'British Independent Motor Trade Association',
  alternateName: 'BIMTA',
  url: 'https://bimta.co.uk',
  logo: 'https://bimta.co.uk/logo.png',
  description: 'UK\'s leading motor trade association providing vehicle verification services',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.linkedin.com/company/bimta',
    'https://twitter.com/BIMTA_UK',
    'https://www.facebook.com/BIMTA.UK'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@bimta.co.uk',
    availableLanguage: 'English'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '10234',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="theme-color" content="#1e3a8a" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* Performance Monitoring */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}