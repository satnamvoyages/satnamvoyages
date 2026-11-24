import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationClient } from '@/components/DestinationClient';
import { DESTINATIONS } from '@/lib/data/destinationsData';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ region: string }>;
}

export function generateStaticParams() {
  return Object.keys(DESTINATIONS).map((region) => ({ region }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params;
  const destination = DESTINATIONS[region];
  if (!destination) return {};

  const title = destination.seoTitle ?? `${destination.name.split('—')[0].trim()} Tours from Delhi`;
  const description =
    destination.metaDescription ??
    (destination.description.match(/^.{1,160}[.!?](?=\s|$)/)?.[0] ?? destination.description.slice(0, 157) + '...');

  return {
    title,
    description,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/destinations/${destination.slug}`,
      images: [{ url: destination.heroImage, width: 1200, height: 630, alt: destination.name }],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { region } = await params;
  const destination = DESTINATIONS[region];
  if (!destination) notFound();

  const regionName = destination.name.split('—')[0].trim();
  const regionalTours = ALL_TOURS.filter((t) => destination.associatedPackageSlugs.includes(t.slug));

  const destinationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristDestination',
        '@id': `${SITE_URL}/destinations/${destination.slug}#destination`,
        name: destination.name,
        description: destination.description,
        image: destination.heroImage,
        touristType: ['Heritage Tourism', 'Adventure Tourism', 'Cultural Tourism'],
        includesAttraction: destination.keyCities.flatMap((city) =>
          city.attractions.map((attraction) => ({
            '@type': 'TouristAttraction',
            name: `${attraction} in ${city.name}`,
          }))
        ),
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/destinations/${destination.slug}#packages`,
        name: `${regionName} tour packages from Delhi`,
        numberOfItems: regionalTours.length,
        itemListElement: regionalTours.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/tours/${t.slug}`,
          name: t.title,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Tour Packages', item: `${SITE_URL}/tours` },
          { '@type': 'ListItem', position: 3, name: regionName, item: `${SITE_URL}/destinations/${destination.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }} />
      <DestinationClient destination={destination} />
    </>
  );
}
