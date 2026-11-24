import type { Metadata } from 'next';
import { CabsClient } from '@/components/CabsClient';
import { CAB_FLEET } from '@/lib/data/cabsData';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/constants';

// Layout template appends " | Satnam Voyages" (total ≤ 60 chars).
// Fares change with season and availability, so no prices appear on cab pages; quotes are given on request.
const TITLE = 'Outstation Cabs & Taxi Hire from Delhi';
const DESCRIPTION =
  'Chauffeur-driven outstation cabs from Delhi to Agra, Jaipur, Shimla, Manali and Rishikesh. Sedan, Innova Crysta and Tempo Traveller. Get a quote on WhatsApp.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/cabs` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/cabs`,
    images: [OG_IMAGE],
  },
};

export default function CabsPage() {
  const cabsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // Same @id as the site-wide TaxiService in app/layout.tsx, so this page
        // enriches that one entity instead of declaring a second service.
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Outstation Cab Hire',
          itemListElement: CAB_FLEET.map((cab) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cab.name,
              description: `${cab.models}, seating ${cab.seats} passengers with ${cab.luggageCount} bags capacity.`,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Outstation Cabs', item: `${SITE_URL}/cabs` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cabsJsonLd) }} />
      <CabsClient />
    </>
  );
}
