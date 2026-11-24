import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TourDetailClient } from '@/components/TourDetailClient';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import type { TourPackage } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Must match the agency node's @id in app/layout.tsx. */
const AGENCY_ID = `${SITE_URL}/#agency`;

/** Ends on a full sentence and stays within 160 characters, as a fallback when no hand-written description exists. */
function fallbackDescription(tour: TourPackage): string {
  const sentences = tour.overview.split(/(?<=[.!?])\s+/);
  let out = '';
  for (const sentence of sentences) {
    const next = out ? `${out} ${sentence}` : sentence;
    if (next.length > 160) break;
    out = next;
  }
  return out || `${tour.title}: private ${tour.durationLabel.toLowerCase()} tour by chauffeur-driven car from ${SITE_NAME}.`.slice(0, 160);
}

export function generateStaticParams() {
  return ALL_TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = ALL_TOURS.find((t) => t.slug === slug);
  if (!tour) return {};

  const title = tour.seoTitle ?? tour.title;
  const description = tour.metaDescription ?? fallbackDescription(tour);

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

  const url = `${SITE_URL}/tours/${tour.slug}`;

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Product', 'TouristTrip'],
        '@id': `${url}#trip`,
        name: tour.title,
        description: tour.metaDescription ?? fallbackDescription(tour),
        url,
        image: Array.from(new Set([tour.primaryImage, ...tour.galleryImages])),
        brand: { '@type': 'Brand', name: SITE_NAME },
        touristType: ['Cultural Tourism', 'Heritage Tourism'],
        offers: {
          '@type': 'Offer',
          url,
          price: tour.startingPriceINR,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-11-24',
          priceValidUntil: '2027-12-31',
          seller: { '@id': AGENCY_ID },
        },
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: tour.itinerary.length,
          itemListElement: tour.itinerary.map((day, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: `Day ${day.day}: ${day.title}`,
            description: day.description,
          })),
        },
        provider: { '@id': AGENCY_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${SITE_URL}/tours` },
          { '@type': 'ListItem', position: 3, name: tour.title, item: url },
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
