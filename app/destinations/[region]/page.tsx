import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationClient } from '@/components/DestinationClient';
import { DESTINATIONS } from '@/lib/data/destinationsData';
import Link from 'next/link';
import { getRegionTours, getRegionDriveLegs, buildRegionFaqs, isRegionTour } from '@/lib/data/regionTours';
import { GuestPhotos } from '@/app/_components/GuestPhotos';
import { pickClientPhotos, tagsFromText } from '@/lib/data/clientPhotosData';
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
  const regionalTours = getRegionTours(destination);
  const ownTours = regionalTours.filter((t) => isRegionTour(destination, t));
  const driveLegs = getRegionDriveLegs(ownTours.length ? ownTours : regionalTours);
  const faqs = buildRegionFaqs(regionName, ownTours, regionalTours);
  const photos = pickClientPhotos(
    tagsFromText(regionalTours.map((t) => `${t.route} ${t.title}`).join(' ')),
    destination.slug
  );

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
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/destinations/${destination.slug}#faq`,
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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

      <div className="bg-[#FAF6F0] pb-16 font-montserrat">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {driveLegs.length > 0 && (
            <section aria-labelledby="drive-times">
              <h2 id="drive-times" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-2">
                Drive times in {regionName}
              </h2>
              <p className="text-sm text-stone-600 mb-4">
                Approximate road distances and driving times on our {regionName} routes. Traffic and sightseeing stops change them.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E8DFD3] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E8DFD3] text-xs uppercase tracking-wider text-stone-500">
                      <th className="px-4 py-3">Route</th>
                      <th className="px-4 py-3">Distance</th>
                      <th className="px-4 py-3">Driving time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driveLegs.map((l) => (
                      <tr key={l.name} className="border-b border-[#E8DFD3]/60 last:border-0">
                        <td className="px-4 py-3 font-semibold text-[#1C1917]">{l.name}</td>
                        <td className="px-4 py-3 text-stone-700">about {l.km} km</td>
                        <td className="px-4 py-3 text-stone-700">{l.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section aria-labelledby="region-faq">
            <h2 id="region-faq" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
              {regionName} tours: frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[#E8DFD3] bg-white p-5">
                  <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                  <p className="mt-1.5 text-sm text-stone-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            {destination.slug === 'rajasthan' && (
              <p className="mt-4 text-sm text-stone-700">
                Still choosing a route? See our guide to{' '}
                <Link href="/blog/rajasthan-tour-packages-2027" className="font-semibold text-[#C2410C] underline">
                  planning your Rajasthan itinerary
                </Link>
                .
              </p>
            )}
          </section>

          <GuestPhotos photos={photos} />
        </div>
      </div>
    </>
  );
}
