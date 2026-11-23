import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TourDetailClient } from '@/components/TourDetailClient';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = ALL_TOURS.find((t) => t.slug === slug);
  if (!tour) return {};

  const title = `${tour.title} (${tour.durationLabel}) - Private Chauffeur Tour`;
  const description = tour.overview.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/tours/${tour.slug}`,
      images: [{ url: tour.primaryImage, width: 1200, height: 630, alt: tour.title }],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = ALL_TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': `${SITE_URL}/tours/${tour.slug}#trip`,
        name: tour.title,
        description: tour.overview,
        touristType: ['Cultural Tourism', 'Heritage Tourism'],
        image: [tour.primaryImage, ...tour.galleryImages],
        offers: {
          '@type': 'Offer',
          price: tour.startingPriceINR,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-01-01',
        },
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: tour.itinerary.length,
          itemListElement: tour.itinerary.map((day, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'TouristAttraction',
              name: `Day ${day.day}: ${day.title}`,
              description: day.description,
            },
          })),
        },
        provider: {
          '@type': 'TravelAgency',
          name: 'Satnam Voyages',
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${SITE_URL}/tours` },
          { '@type': 'ListItem', position: 3, name: tour.title, item: `${SITE_URL}/tours/${tour.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }} />
      <TourDetailClient tour={tour} />
    </>
  );
}
