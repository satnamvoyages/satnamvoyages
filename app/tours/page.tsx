import type { Metadata } from 'next';
import { ToursDirectoryClient } from '@/components/ToursDirectoryClient';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `All ${ALL_TOURS.length} Tour Packages — Golden Triangle, Rajasthan, Himachal & Uttarakhand`,
  description:
    `Browse all ${ALL_TOURS.length} private guided tour packages by Satnam Voyages. Dedicated chauffeur, sanitized AC cabs, flexible custom itineraries, and 5-star verified service.`,
  alternates: { canonical: '/tours' },
  openGraph: {
    title: `All ${ALL_TOURS.length} Tour Packages — Golden Triangle, Rajasthan, Himachal & Uttarakhand`,
    description:
      `Browse all ${ALL_TOURS.length} private guided tour packages by Satnam Voyages. Dedicated chauffeur, sanitized AC cabs, flexible custom itineraries.`,
    url: `${SITE_URL}/tours`,
  },
};

export default function ToursPage() {
  const toursDirectoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Satnam Voyages India Tour Packages Directory',
    description: `All ${ALL_TOURS.length} premier private tour packages across the Golden Triangle, Rajasthan, Himachal Pradesh, Uttarakhand, and Central India.`,
    numberOfItems: ALL_TOURS.length,
    itemListElement: ALL_TOURS.map((tour, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.overview,
        url: `${SITE_URL}/tours/${tour.slug}`,
        image: tour.primaryImage,
        touristType: 'Cultural Tourism',
        offers: {
          '@type': 'Offer',
          price: tour.startingPriceINR,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${SITE_URL}/tours` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toursDirectoryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ToursDirectoryClient />
    </>
  );
}
