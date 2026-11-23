import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationClient } from '@/components/DestinationClient';
import { DESTINATIONS } from '@/lib/data/destinationsData';
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

  const title = `${destination.name} Tours & Outstation Cabs`;
  const description = destination.description.slice(0, 160);

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
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${SITE_URL}/destinations/${destination.slug}` },
          { '@type': 'ListItem', position: 3, name: destination.name, item: `${SITE_URL}/destinations/${destination.slug}` },
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
