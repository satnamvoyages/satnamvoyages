import type { Metadata } from 'next';
import { CabsClient } from '@/components/CabsClient';
import { CAB_FLEET } from '@/lib/data/cabsData';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/constants';

// Layout template appends " | Satnam Voyages" (total ≤ 60 chars).
const TITLE = 'Outstation Cabs from Delhi — Per-km Fares';
const DESCRIPTION =
  'Outstation cabs from Delhi to Agra, Jaipur, Shimla, Manali and Rishikesh. Sedan from ₹11/km, Innova Crysta ₹17/km, Tempo Traveller ₹24/km. Tolls at actuals.';

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
          name: 'Outstation Cab Hire Rates (per km)',
          itemListElement: CAB_FLEET.map((cab) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cab.name,
              description: `${cab.models}, seating ${cab.seats} passengers with ${cab.luggageCount} bags capacity. Minimum ${cab.minKmPerDay} km per day.`,
            },
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: cab.perKmRateINR,
              priceCurrency: 'INR',
              unitCode: 'KMT',
              unitText: 'per km',
              referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'KMT' },
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
