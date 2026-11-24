import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data/blogData';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/constants';
import { JsonLd, breadcrumbJsonLd } from '@/app/_components/InfoPage';

const TITLE = 'India Travel Blog 2027: Tours & Tips';
const DESCRIPTION =
  'India travel guides for 2027: Golden Triangle and Rajasthan itineraries, same day Taj Mahal and Jaipur tours, best time to visit, festivals and practical tips.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog`, images: [OG_IMAGE] },
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export default function BlogIndexPage() {
  const jsonLd = {
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        name: `${SITE_NAME} India Travel Blog`,
        url: `${SITE_URL}/blog`,
        description: DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#agency` },
        blogPost: BLOG_POSTS.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.datePublished,
        })),
      },
      breadcrumbJsonLd('Blog', '/blog'),
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <JsonLd data={jsonLd} />

      <div className="bg-[#141210] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-200">Blog</span>
          </nav>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
            India Travel Blog 2027
          </h1>
          <p className="mt-3 max-w-2xl text-stone-300 text-sm sm:text-base leading-relaxed">
            Practical guides for planning a private tour of India: Golden Triangle and Rajasthan itineraries, day trips from
            Delhi, the best months to travel and what to know before you land.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white shadow-sm transition-all hover:border-[#EA580C] hover:shadow-lg"
              >
                <div className="relative h-48 bg-stone-100">
                  <Image
                    src={p.heroImage}
                    alt={p.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-stone-500">
                    <time dateTime={p.datePublished}>{formatDate(p.datePublished)}</time> · {p.readMinutes} min read
                  </p>
                  <h2 className="mt-2 font-headline text-lg font-bold text-[#1C1917] leading-snug">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-stone-600 leading-relaxed">{p.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-[#EA580C]">Read the guide &rarr;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-[#E8DFD3] bg-white p-6 text-sm text-stone-700">
          Ready to plan? Browse our{' '}
          <Link href="/tours" className="font-semibold text-[#C2410C] underline">private tour packages</Link>, see{' '}
          <Link href="/destinations/rajasthan" className="font-semibold text-[#C2410C] underline">Rajasthan tours</Link>, or book{' '}
          <Link href="/cabs" className="font-semibold text-[#C2410C] underline">a private car with driver</Link>.
        </div>
      </div>
    </div>
  );
}
