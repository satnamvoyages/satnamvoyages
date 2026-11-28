import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TourDetailClient } from '@/components/TourDetailClient';
import { ALL_TOURS } from '@/lib/data/toursData';
import { getGuidesForTour } from '@/lib/data/blogData';
import { buildTourFaqs } from '@/lib/data/tourFaqs';
import { SITE_URL, SITE_NAME, CONTENT_UPDATED } from '@/lib/constants';
import type { TourPackage } from '@/lib/types';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Region hub page for each tour category, so tour pages link up to their hub. */
const REGION_HUBS: Record<string, { href: string; label: string }> = {
  Rajasthan: { href: '/destinations/rajasthan', label: 'Rajasthan tour packages' },
  Himachal: { href: '/destinations/himachal', label: 'Himachal Pradesh tour packages' },
  Uttarakhand: { href: '/destinations/uttarakhand', label: 'Uttarakhand tour packages' },
};

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

  // Server-side so the blog data stays out of the client bundle.
  const sameCategory = ALL_TOURS.filter((t) => t.category === tour.category && t.slug !== tour.slug).map((t) => t.slug);
  const guides = getGuidesForTour(tour.slug, sameCategory, 3).map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt }));
  const region = REGION_HUBS[tour.category];
  const faqs = buildTourFaqs(tour);
  const lastUpdated = new Date(CONTENT_UPDATED + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': `${url}#trip`,
        name: tour.title,
        description: tour.metaDescription ?? fallbackDescription(tour),
        url,
        image: Array.from(new Set([tour.primaryImage, ...tour.galleryImages])),
        touristType: ['Cultural Tourism', 'Heritage Tourism'],
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
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
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
      <TourDetailClient tour={tour} guides={guides} region={region} faqs={faqs} lastUpdated={lastUpdated} />
    </>
  );
}
