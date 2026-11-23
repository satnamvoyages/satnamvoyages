import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { FloatingActions } from '@/components/FloatingActions';
import { SITE_URL, SITE_NAME, PHONE_TEL, ADDRESS } from '@/lib/constants';

// Note: fonts are loaded at runtime via <link> tags below (not next/font/google).
// This avoids a build-time network fetch to Google Fonts, which is unavailable
// in some restricted build/CI sandboxes. On a normal host with internet access
// you can switch to next/font/google for self-hosted, zero-layout-shift fonts —
// see https://nextjs.org/docs/app/building-your-application/optimizing/fonts

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premier Travel Agency & Outstation Cabs in India`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Premier travel agency and outstation cab provider in India. Bespoke Golden Triangle, Rajasthan, Himachal & Uttarakhand tours with verified private chauffeurs.',
  keywords: [
    'Golden Triangle tour package',
    'Delhi Agra Jaipur tour',
    'Rajasthan tour packages',
    'Uttarakhand tour packages',
    'Himachal tour packages',
    'outstation cabs India',
    'private chauffeur India',
    'Char Dham Yatra package',
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premier Travel Agency & Outstation Cabs in India`,
    description:
      'Premier travel agency and outstation cab provider in India. Bespoke Golden Triangle, Rajasthan, Himachal & Uttarakhand tours with verified private chauffeurs.',
    locale: 'en_IN',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Taj Mahal Agra Sunrise - Satnam Voyages Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premier Travel Agency & Outstation Cabs in India`,
    description:
      'Bespoke Golden Triangle, Rajasthan, Himachal & Uttarakhand tours with verified private chauffeurs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/assets/fav.png',
    shortcut: '/assets/fav.png',
    apple: '/assets/fav.png',
  },
};

// Site-wide Organization / TravelAgency + TaxiService structured data.
// Rendered server-side on every page so it is present in the very first
// HTML response (no client-side JS required for crawlers to see it).
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#agency`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo.png`,
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      description:
        'Premier travel agency and outstation chauffeur cab provider in India specializing in Golden Triangle, Rajasthan, Himachal and Uttarakhand tours.',
      telephone: PHONE_TEL,
      email: 'booking@satnamvoyages.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.92',
        reviewCount: '1450',
      },
      sameAs: [],
    },
    {
      '@type': 'TaxiService',
      '@id': `${SITE_URL}/#taxi`,
      name: `${SITE_NAME} Outstation Cabs`,
      provider: { '@id': `${SITE_URL}/#agency` },
      serviceArea: { '@type': 'Country', name: 'India' },
      areaServed: ['Delhi NCR', 'Agra', 'Jaipur', 'Rajasthan', 'Himachal Pradesh', 'Uttarakhand'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#agency` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#FAF6F0] text-[#1C1917] antialiased selection:bg-[#EA580C] selection:text-white font-montserrat"
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileBottomNav />
            <FloatingActions />
          </div>
        </Providers>
      </body>
    </html>
  );
}
