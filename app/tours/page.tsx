import type { Metadata } from 'next';
import { ToursDirectoryClient } from '@/components/ToursDirectoryClient';
import Link from 'next/link';
import { ALL_TOURS, DRIVE_LEGS } from '@/lib/data/toursData';
import { SITE_URL, OG_IMAGE, absoluteUrl } from '@/lib/constants';

const TITLE = 'Private India Tour Packages 2027 from Delhi';
const DESCRIPTION = `${ALL_TOURS.length} private India tour packages from Delhi for international travellers: Golden Triangle, Rajasthan, same day Taj Mahal and Himalayan tours. Free quote.`;

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

const maxDays = Math.max(...ALL_TOURS.map((t) => t.durationDays));
const leg = (k: string) => DRIVE_LEGS[k]?.km;

/** Answers use only facts already published on the site. */
const FAQS: { q: string; a: string; link?: { href: string; label: string } }[] = [
  {
    q: 'How many days do I need for an India tour?',
    a: `For a first trip, 5 or 6 days covers the Golden Triangle of Delhi, Agra and Jaipur at a comfortable pace. With 7 to 9 days you can add Ranthambore, Pushkar, Varanasi or Amritsar, and with ${maxDays} days you can see Rajasthan properly. If you only have one day, a same-day trip to the Taj Mahal from Delhi is possible.`,
  },
  {
    q: 'What is the best time to visit India?',
    a: 'October to March is the best season for Delhi, Agra, Jaipur and Rajasthan: dry, sunny and cool. The Himalayan hill stations of Himachal and Uttarakhand are best from March to June and September to November. Each tour page shows its own best season.',
    link: { href: '/blog/best-time-to-visit-india-2027', label: 'Month-by-month guide' },
  },
  {
    q: 'What is the Golden Triangle?',
    a: `The Golden Triangle is the loop between Delhi, Agra (the Taj Mahal) and Jaipur, the Pink City. The legs are about ${leg('Delhi to Agra')} km, ${leg('Agra to Jaipur')} km and ${leg('Jaipur to Delhi')} km, and it is the most popular first trip to India.`,
    link: { href: '/tours/golden-triangle-tour', label: 'Private Golden Triangle tour' },
  },
  {
    q: 'Is it safe to tour India by road with a driver?',
    a: 'You travel in one private car with the same chauffeur for the whole trip, so there are no trains, taxis or touts to deal with. We avoid late-night driving where possible, and our Delhi desk is reachable 24/7 on phone and WhatsApp while you travel.',
  },
  {
    q: 'Do I need a visa for India?',
    a: 'Most visitors, including citizens of the USA, UK and Australia, are eligible for the Indian e-Visa. Apply only on the official Government of India website, well before you fly.',
    link: { href: '/offers/india-tour-package-from-usa', label: 'Tips for US travellers' },
  },
  {
    q: 'Why are there no prices on the tours?',
    a: 'Every trip is quoted individually, because the cost depends on the car, the number of travellers, the hotel category if we book hotels, your dates and any add-ons such as guides or monument tickets. You get a written quote that shows what is and is not included.',
  },
  {
    q: 'Can I change a tour or build my own?',
    a: 'Yes. Every tour is private, so you can add or remove days, change the route and choose your hotels. Send us your dates and the places you want to see, and we plan the trip around them.',
  },
];

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
        image: absoluteUrl(tour.primaryImage),
        touristType: 'Cultural Tourism',
      },
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ToursDirectoryClient />

      <div className="bg-[#FAF6F0] pb-20 font-montserrat">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section aria-labelledby="how-booking-works">
            <h2 id="how-booking-works" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
              How booking works
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-stone-700">
              <li className="rounded-2xl border border-[#E8DFD3] bg-white p-5">
                <strong className="block text-[#1C1917] mb-1">1. Tell us your plans</strong>
                Send your dates, group size and the places you want to see on WhatsApp or through the form.
              </li>
              <li className="rounded-2xl border border-[#E8DFD3] bg-white p-5">
                <strong className="block text-[#1C1917] mb-1">2. Get your plan and quote</strong>
                We reply with a day-by-day itinerary and an itemised quote showing what is and is not included.
              </li>
              <li className="rounded-2xl border border-[#E8DFD3] bg-white p-5">
                <strong className="block text-[#1C1917] mb-1">3. Travel with your chauffeur</strong>
                A deposit confirms the booking. Your chauffeur meets you on arrival and stays with you for the whole trip.
              </li>
            </ol>
          </section>

          <section aria-labelledby="tours-faq">
            <h2 id="tours-faq" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-[#E8DFD3] bg-white p-5">
                  <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                  <p className="mt-1.5 text-sm text-stone-700 leading-relaxed">
                    {f.a}
                    {f.link && (
                      <>
                        {' '}
                        <Link href={f.link.href} className="font-semibold text-[#C2410C] underline">
                          {f.link.label}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
