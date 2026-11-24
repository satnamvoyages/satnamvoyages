import type { Metadata } from 'next';
import { ToursDirectoryClient } from '@/components/ToursDirectoryClient';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL, OG_IMAGE } from '@/lib/constants';

const TITLE = 'Private India Tour Packages from Delhi';
const DESCRIPTION = `Compare ${ALL_TOURS.length} private chauffeur-driven tours from Delhi: Golden Triangle, Rajasthan, Himachal, Uttarakhand and same-day trips, with prices.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/tours' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/tours`,
    images: [OG_IMAGE],
  },
};

export default function ToursPage() {
  const toursDirectoryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Satnam Voyages India Tour Packages Directory',
    description: DESCRIPTION,
    numberOfItems: ALL_TOURS.length,
    itemListElement: ALL_TOURS.map((tour, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.metaDescription ?? tour.overview,
        url: `${SITE_URL}/tours/${tour.slug}`,
        image: tour.primaryImage,
        touristType: 'Cultural Tourism',
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/tours/${tour.slug}`,
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
