import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { FloatingActions } from '@/components/FloatingActions';
import {
  SITE_URL,
  SITE_NAME,
  PHONE_TEL,
  CONTACT_EMAIL,
  ADDRESS,
  GEO,
  MAP_URL,
  SOCIAL_PROFILES,
  OG_IMAGE,
} from '@/lib/constants';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Script from 'next/script';

const GTM_ID = 'GTM-W4BDLNJH';

// Self-hosted via next/font (no render-blocking request to fonts.googleapis.com,
// no layout shift on swap). Only the weights actually used in the codebase are
// loaded. The CSS variables are wired to the existing .font-montserrat /
// .font-playfair / .font-accent utility classes in the <style> tag below.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const fontClassOverrides = `
html .font-montserrat{font-family:var(--font-montserrat),system-ui,sans-serif}
html .font-playfair,html .font-accent{font-family:var(--font-playfair),Georgia,serif}
`;

const DEFAULT_TITLE = `${SITE_NAME} | Private India Tours & Outstation Cabs`;
const DEFAULT_DESCRIPTION =
  'Private India tour packages from Delhi for international travellers: Golden Triangle, Rajasthan, same day Taj Mahal tours and English-speaking drivers.';
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'India tour packages',
    'Golden Triangle tour India',
    'Golden Triangle tour 5 days',
    'Delhi Agra Jaipur tour',
    'Rajasthan tour packages',
    'same day Taj Mahal tour from Delhi',
    'private car and driver India',
    'Uttarakhand tour packages',
    'Himachal tour packages',
    'outstation cabs Delhi',
    'private chauffeur India',
  ],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: 'en_IN',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
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

// Site-wide TravelAgency + TaxiService + WebSite structured data.
// Rendered server-side on every page so it is present in the first HTML
// response. No aggregateRating: self-declared ratings without visible,
// verifiable reviews violate Google's review-snippet guidelines. Re-add only
// if it mirrors a real, linked review source.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#agency`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      description:
        'Delhi-based travel agency offering private chauffeur-driven tours of the Golden Triangle, Rajasthan, Himachal Pradesh and Uttarakhand, plus outstation cab hire.',
      telephone: PHONE_TEL,
      email: CONTACT_EMAIL,
      priceRange: '$$',
      currenciesAccepted: 'INR, USD',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.locality,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      // TODO (owner): verify these coordinates against the office's Google Maps pin.
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
      hasMap: MAP_URL,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_TEL,
        email: CONTACT_EMAIL,
        contactType: 'reservations',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@type': 'TaxiService',
      '@id': `${SITE_URL}/#taxi`,
      name: `${SITE_NAME} Outstation Cabs`,
      url: `${SITE_URL}/cabs`,
      provider: { '@id': `${SITE_URL}/#agency` },
      areaServed: [
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Agra' },
        { '@type': 'City', name: 'Jaipur' },
        { '@type': 'State', name: 'Rajasthan' },
        { '@type': 'State', name: 'Himachal Pradesh' },
        { '@type': 'State', name: 'Uttarakhand' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#agency` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontClassOverrides }} />
      </head>
      <body
        className="bg-[#FAF6F0] text-[#1C1917] antialiased selection:bg-[#EA580C] selection:text-white font-montserrat"
      >
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
