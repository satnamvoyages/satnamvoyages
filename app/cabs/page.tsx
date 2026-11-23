import type { Metadata } from 'next';
import { CabsClient } from '@/components/CabsClient';
import { CAB_FLEET } from '@/lib/data/cabsData';
import { SITE_URL, PHONE_TEL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Outstation Cabs & Chauffeur Hire in India — Fixed Fares & Verified Fleet',
  description:
    'Hire private outstation cabs from Delhi to Agra, Jaipur, Shimla, Manali, Rishikesh. Sedan, Innova Crysta & Tempo Traveller with verified English-speaking chauffeurs.',
  alternates: { canonical: '/cabs' },
  openGraph: {
    title: 'Outstation Cabs & Chauffeur Hire in India — Fixed Fares & Verified Fleet',
    description:
      'Hire private outstation cabs from Delhi to Agra, Jaipur, Shimla, Manali, Rishikesh with verified English-speaking chauffeurs.',
    url: `${SITE_URL}/cabs`,
  },
};

export default function CabsPage() {
  const cabsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${SITE_URL}/cabs#taxi`,
    name: `${SITE_NAME} Outstation Cabs & Chauffeur Fleet India`,
    provider: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      telephone: PHONE_TEL,
      url: `${SITE_URL}/`,
    },
    serviceArea: { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outstation Cab Hire Rates',
      itemListElement: CAB_FLEET.map((cab) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cab.name,
          description: `${cab.models}, seating ${cab.seats} passengers with ${cab.luggageCount} bags capacity.`,
        },
        price: cab.perKmRateINR,
        priceCurrency: 'INR',
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cabsJsonLd) }} />
      <CabsClient />
    </>
  );
}
