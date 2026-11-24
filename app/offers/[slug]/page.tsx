import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRY_OFFERS, getCountryOffer } from '@/lib/data/offersData';
import { ALL_TOURS } from '@/lib/data/toursData';
import {
  SITE_URL,
  SITE_NAME,
  PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_WHATSAPP,
  CONTACT_EMAIL,
  OG_IMAGE,
} from '@/lib/constants';

// Country-targeted 2027 offer pages. No prices, discounts or reviews: every trip is quoted individually.

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRY_OFFERS.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const o = getCountryOffer(slug);
  if (!o) return {};
  const url = `${SITE_URL}/offers/${o.slug}`;
  return {
    title: o.seoTitle,
    description: o.metaDescription,
    keywords: o.keywords,
    alternates: { canonical: url },
    openGraph: { title: o.seoTitle, description: o.metaDescription, url, images: [OG_IMAGE] },
  };
}

export default async function CountryOfferPage({ params }: PageProps) {
  const { slug } = await params;
  const o = getCountryOffer(slug);
  if (!o) notFound();

  const url = `${SITE_URL}/offers/${o.slug}`;
  const tours = o.recommendedTourSlugs
    .map((s) => ALL_TOURS.find((t) => t.slug === s))
    .filter((t): t is (typeof ALL_TOURS)[number] => Boolean(t));
  const otherOffers = COUNTRY_OFFERS.filter((x) => x.slug !== o.slug);
  const waHref = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(o.waText)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: o.h1,
        description: o.metaDescription,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#agency` },
        audience: { '@type': 'Audience', geographicArea: { '@type': 'Country', name: o.country } },
        mainEntity: {
          '@type': 'ItemList',
          name: `Recommended India tours for travellers from ${o.country}`,
          numberOfItems: tours.length,
          itemListElement: tours.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'TouristTrip',
              name: t.title,
              url: `${SITE_URL}/tours/${t.slug}`,
              provider: { '@id': `${SITE_URL}/#agency` },
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Offers', item: `${SITE_URL}/offers` },
          { '@type': 'ListItem', position: 3, name: o.label, item: url },
        ],
      },
    ],
  };

  const h2 = 'font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-3';
  const p = 'text-sm sm:text-base text-stone-700 leading-relaxed';

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-[#141210] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/offers" className="hover:text-white">Offers</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-200">{o.label}</span>
          </nav>
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-2 font-headline">
            2027 Offer · Travellers {o.label.toLowerCase()}
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">{o.h1}</h1>
          <p className="mt-4 text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">{o.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              Get a Free Quote on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-6 py-3 rounded-xl bg-stone-900/80 hover:bg-black text-white font-bold text-sm uppercase tracking-wider border border-stone-600 transition-all"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Recommended tours */}
        {tours.length > 0 && (
          <section aria-labelledby="tours">
            <h2 id="tours" className={h2}>
              Recommended Tours for Travellers {o.label}
            </h2>
            <p className={`${p} mb-4`}>{o.recommendationNote}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tours.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tours/${t.slug}`}
                    className="block h-full bg-white border border-[#E8DFD3] rounded-2xl p-5 hover:border-[#EA580C] hover:shadow-md transition-all"
                  >
                    <span className="block font-headline font-bold text-[#1C1917] uppercase leading-snug">{t.title}</span>
                    <span className="block text-xs text-stone-500 mt-1">{t.durationLabel}</span>
                    <span className="block text-xs text-stone-600 mt-2 line-clamp-2">{t.route}</span>
                    <span className="block mt-3 text-sm font-semibold text-[#EA580C]">View itinerary &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-stone-600">
              Every tour includes a private air-conditioned car, an English-speaking chauffeur, fuel, tolls and parking. Hotels
              on request. Prices are quoted for your dates.
            </p>
          </section>
        )}

        {/* Flights */}
        <section aria-labelledby="flights">
          <h2 id="flights" className={h2}>{o.flights.heading}</h2>
          <div className="space-y-3">
            {o.flights.paragraphs.map((t) => (
              <p key={t} className={p}>{t}</p>
            ))}
          </div>
        </section>

        {/* Time zone + day 1 */}
        <section aria-labelledby="timezone" className="bg-white border border-[#E8DFD3] rounded-2xl p-6">
          <h2 id="timezone" className={h2}>{o.timeZone.heading}</h2>
          <div className="space-y-3">
            {o.timeZone.paragraphs.map((t) => (
              <p key={t} className={p}>{t}</p>
            ))}
          </div>
          <h3 className="mt-5 font-headline text-lg font-bold text-[#1C1917] uppercase">Your Day 1 plan</h3>
          <ol className="mt-2 list-decimal pl-5 space-y-1.5 text-sm text-stone-700">
            {o.timeZone.dayOnePlan.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </section>

        {/* Visa */}
        <section aria-labelledby="visa">
          <h2 id="visa" className={h2}>e-Visa for {o.country} Citizens</h2>
          <div className="space-y-3">
            {o.visa.map((t) => (
              <p key={t} className={p}>{t}</p>
            ))}
          </div>
        </section>

        {/* Best months */}
        <section aria-labelledby="months">
          <h2 id="months" className={h2}>{o.bestMonths.heading}</h2>
          <div className="space-y-3">
            {o.bestMonths.paragraphs.map((t) => (
              <p key={t} className={p}>{t}</p>
            ))}
          </div>
        </section>

        {/* Practical */}
        <section aria-labelledby="practical">
          <h2 id="practical" className={h2}>Practical Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {o.practical.map((x) => (
              <div key={x.title} className="bg-white border border-[#E8DFD3] rounded-2xl p-5">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{x.title}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{x.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How booking works */}
        <section aria-labelledby="booking" className="bg-white border border-[#E8DFD3] rounded-2xl p-6">
          <h2 id="booking" className={h2}>How Booking Works</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700">
            <li>Message us on WhatsApp or email with your dates, number of travellers and hotel preference.</li>
            <li>We send a written, day-by-day itinerary and quote listing every inclusion and exclusion.</li>
            <li>A 20–25% deposit by international card or bank transfer confirms your booking.</li>
            <li>The balance is paid on arrival. Your chauffeur meets you at Delhi Airport on Day 1.</li>
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`India tour quote (${o.label})`)}`}
              className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            Questions from Travellers {o.label}
          </h2>
          <div className="space-y-4">
            {o.faqs.map((f) => (
              <div key={f.q} className="bg-white border border-[#E8DFD3] rounded-xl p-5">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other offers + internal links */}
        <section aria-labelledby="more" className="text-sm text-stone-700">
          <h2 id="more" className="font-headline text-xl font-extrabold text-[#1C1917] uppercase mb-3">More 2027 Offers</h2>
          <ul className="flex flex-wrap gap-3">
            <li>
              <Link href="/offers" className="inline-block px-4 py-2 rounded-xl bg-white border border-[#E8DFD3] hover:border-[#EA580C] font-semibold">
                Golden Triangle 4 Nights / 5 Days
              </Link>
            </li>
            {otherOffers.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/offers/${x.slug}`}
                  className="inline-block px-4 py-2 rounded-xl bg-white border border-[#E8DFD3] hover:border-[#EA580C] font-semibold"
                >
                  India tours {x.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Browse <Link href="/tours" className="font-semibold underline text-[#C2410C]">all tour packages</Link>, our{' '}
            <Link href="/destinations/rajasthan" className="font-semibold underline text-[#C2410C]">Rajasthan tours</Link>, or
            read the <Link href="/blog" className="font-semibold underline text-[#C2410C]">{SITE_NAME} travel blog</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
