import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_TOURS } from '@/lib/data/toursData';
import { COUNTRY_OFFERS } from '@/lib/data/offersData';
import { getPhotoForItineraryDay } from '@/lib/data/itineraryImages';
import { CustomTripForm } from '@/components/CustomTripForm';
import { SITE_URL, SITE_NAME, PHONE_TEL, PHONE_DISPLAY, PHONE_WHATSAPP, OG_IMAGE } from '@/lib/constants';

// Landing page for the 2027-season Golden Triangle 4 Nights / 5 Days package, aimed at
// international travellers. No prices are shown anywhere on the site: every trip is quoted
// individually and confirmed in writing.

const PACKAGE_HEADINGS: Record<string, string> = {
  'Golden Triangle': 'Golden Triangle Tours',
  'Same Day': 'Same-Day & Short Tours from Delhi',
  Rajasthan: 'Rajasthan & Central India Tours',
  Himachal: 'Himachal Pradesh Tours',
  Uttarakhand: 'Uttarakhand Tours',
};

const PACKAGE_GROUPS = Object.entries(PACKAGE_HEADINGS)
  .map(([category, heading]) => ({ category, heading, tours: ALL_TOURS.filter((t) => t.category === category) }))
  .filter((g) => g.tours.length > 0);

const TOUR_SLUG = 'golden-triangle-tour-5-days';
const PAGE_PATH = '/offers';

// Layout template appends " | Satnam Voyages" (keep ≤ 45 chars).
const TITLE = 'Golden Triangle Tour Offer: 4N/5D India';
const DESCRIPTION =
  'Golden Triangle tour 2027 for international travellers: 4 nights, 5 days in Delhi, Agra and Jaipur with airport pickup and a private chauffeur. Free quote.';

// Only add perks you will actually honour. The perks section is hidden while this list is empty.
const OFFER_PERKS: string[] = ['Free Delhi Airport pickup on arrival, with a name board and help with your luggage'];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [OG_IMAGE],
  },
};

const WHY_PRIVATE = [
  {
    title: 'One car, one chauffeur, all five days',
    text: 'The same English-speaking chauffeur meets you at Delhi Airport and stays with you until your departure drop. No train stations, no taxi queues, no haggling.',
  },
  {
    title: 'Your pace, not a coach timetable',
    text: 'Stop for photos, chai or a market whenever you like. Start early for the Taj Mahal sunrise or take a slow morning in Jaipur.',
  },
  {
    title: 'One written quote, no surprises',
    text: 'The car, chauffeur, fuel, highway tolls, state permits, parking and the driver’s own food and lodging are all listed in a single written quote before you pay anything.',
  },
  {
    title: 'Hotels your way',
    text: 'Book your own hotels, or ask us to reserve Standard, Deluxe or Luxury heritage hotels and add them to the same quote.',
  },
];

const SUITS = [
  'First-time visitors to India who want the highlights without rushing',
  'Couples, families and small groups of up to 12 (Tempo Traveller available)',
  'Travellers from the USA, UK, Europe, Canada and Australia who prefer a private car to group coaches',
  'Business travellers adding a short trip before or after meetings in Delhi',
];

const STEPS = [
  {
    title: 'Message us on WhatsApp',
    text: 'Send your arrival date, number of travellers and hotel preference. We reply with a tailored quote.',
  },
  {
    title: 'Get your written itinerary',
    text: 'You receive a day-by-day plan listing the vehicle and every inclusion and exclusion, adjusted around the Taj Mahal’s Friday closure.',
  },
  {
    title: 'Confirm with a deposit',
    text: 'A 20–25% deposit confirms the booking. We accept international cards, bank transfer, UPI and cash.',
  },
  {
    title: 'Pay the balance on arrival',
    text: 'The balance is payable when you arrive in India. Your chauffeur is waiting at Delhi Airport on Day 1.',
  },
];

const FAQS = [
  {
    q: 'Is 4 nights and 5 days enough for the Golden Triangle?',
    a: 'Yes. Five days covers Delhi, the Taj Mahal and Agra Fort, Fatehpur Sikri and Jaipur’s main forts and palaces at a comfortable pace. If you want more time in Jaipur or to add Ranthambore or Udaipur, we can extend the trip.',
  },
  {
    q: 'Is the Taj Mahal open every day?',
    a: 'The Taj Mahal is closed on Fridays. When you share your dates, we arrange the itinerary so your Agra day does not fall on a Friday.',
  },
  {
    q: 'Are hotels included?',
    a: 'Hotels are not included by default, so you can use your own bookings or loyalty points. We can reserve Standard, Deluxe or Luxury hotels on request and add them to your quote.',
  },
  {
    q: 'Do you pick up from Delhi Airport?',
    a: 'Yes. Your chauffeur meets you at Delhi Airport (IGI) with a name board on Day 1 and drops you at the airport for your flight on Day 5. Share your flight number and we track the arrival.',
  },
  {
    q: 'Does the chauffeur speak English?',
    a: 'Yes. Our chauffeurs speak English and Hindi. Licensed local guides for the Taj Mahal, Agra Fort and Amber Fort can be added on request.',
  },
  {
    q: 'Are monument tickets included?',
    a: 'Monument entrance tickets and camera fees are not included. We can arrange them for you as an add-on.',
  },
  {
    q: 'When is the best time to do this tour?',
    a: 'October to March has the most comfortable weather in Delhi, Agra and Jaipur. The tour runs all year; April to June is hot, and July to September is the monsoon season.',
  },
];

export default function OffersPage() {
  const tour = ALL_TOURS.find((t) => t.slug === TOUR_SLUG);
  if (!tour) notFound();

  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  const tourUrl = `${SITE_URL}/tours/${tour.slug}`;
  const waText = encodeURIComponent(
    `Hello ${SITE_NAME}, I'd like a quote for the Golden Triangle Tour 4 Nights / 5 Days. Arrival date: __ , travellers: __ , hotels needed: yes/no.`
  );
  const waHref = `https://wa.me/${PHONE_WHATSAPP}?text=${waText}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // TouristTrip only: a Product without offers/reviews is flagged invalid by Google.
        '@type': 'TouristTrip',
        '@id': `${pageUrl}#package`,
        name: 'Golden Triangle Tour 4 Nights / 5 Days',
        description: tour.overview,
        url: pageUrl,
        image: tour.primaryImage,
        provider: { '@id': `${SITE_URL}/#agency` },
        touristType: ['International travellers', 'First-time visitors to India', 'Couples', 'Families'],
        itinerary: {
          '@type': 'ItemList',
          itemListElement: tour.itinerary.map((d) => ({
            '@type': 'ListItem',
            position: d.day,
            name: `Day ${d.day}: ${d.title}`,
            description: d.description,
          })),
        },
        subjectOf: { '@type': 'WebPage', url: tourUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Golden Triangle Tour Offer', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="relative bg-[#141210] text-white border-b border-stone-800 overflow-hidden">
        <Image
          src={tour.primaryImage}
          alt="The Taj Mahal in Agra at sunrise"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="relative max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-100">Golden Triangle Tour Offer</span>
          </nav>
          <span className="text-orange-400 text-xs font-bold uppercase tracking-wider block mb-2 font-headline">
            2027 Season · Private Tour for International Travellers
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
            Golden Triangle Tour Offer 2027: 4 Nights / 5 Days
          </h1>
          <p className="mt-4 max-w-2xl text-stone-200 text-sm sm:text-base leading-relaxed">
            Delhi, the Taj Mahal at sunrise, Fatehpur Sikri and Jaipur in five days, with your own private car and
            English-speaking chauffeur from airport pickup to airport drop. The car, chauffeur, fuel, tolls and permits
            are all listed in one written quote.
          </p>
          <p className="mt-3 text-sm text-stone-300">{tour.route}</p>
          <div className="mt-7 flex flex-wrap gap-3">
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
            <a
              href="#build-trip"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider border border-stone-500 transition-all"
            >
              Customise &amp; Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from(new Set([...tour.galleryImages, ...tour.itinerary.map((d) => getPhotoForItineraryDay(d.location, d.title, d.day))]))
            .slice(0, 4)
            .map((src, i) => (
              <div key={src} className="relative h-28 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-stone-200">
                <Image src={src} alt={`Golden Triangle tour photo ${i + 1}`} fill sizes="(min-width: 640px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Seasonal perks (owner-supplied only) */}
        {OFFER_PERKS.length > 0 && (
          <section aria-labelledby="perks" className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h2 id="perks" className="font-headline text-xl font-extrabold text-[#1C1917] uppercase mb-3">
              2027 Season Extras
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-stone-700">
              {OFFER_PERKS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Included */}
        <section aria-labelledby="included">
          <h2 id="included" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            What&apos;s Included in Your Quote
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#E8DFD3] rounded-2xl p-6">
              <h3 className="font-bold text-[#1C1917] mb-3">Included</h3>
              <ul className="space-y-2 text-sm text-stone-700">
                {tour.inclusions.map((i) => (
                  <li key={i} className="flex items-start">
                    <span aria-hidden="true" className="text-[#EA580C] mr-2 font-bold">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#E8DFD3] rounded-2xl p-6">
              <h3 className="font-bold text-[#1C1917] mb-3">Not included (available on request)</h3>
              <ul className="space-y-2 text-sm text-stone-700">
                {tour.exclusions.map((e) => (
                  <li key={e} className="flex items-start">
                    <span aria-hidden="true" className="text-stone-400 mr-2 font-bold">–</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section aria-labelledby="itinerary">
          <h2 id="itinerary" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            Day-by-Day Itinerary
          </h2>
          <ol className="space-y-4">
            {tour.itinerary.map((d) => (
              <li key={d.day} className="bg-white border border-[#E8DFD3] rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                <div className="relative sm:w-56 h-44 sm:h-auto shrink-0 bg-stone-200">
                  <Image
                    src={getPhotoForItineraryDay(d.location, d.title, d.day)}
                    alt={`Day ${d.day}: ${d.title}`}
                    fill
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-[#EA580C] text-white font-headline font-extrabold flex items-center justify-center shadow">
                    D{d.day}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1C1917]">
                    Day {d.day}: {d.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-700 leading-relaxed">{d.description}</p>
                  {d.stayCity && d.stayCity !== 'Departure' && (
                    <p className="mt-2 text-xs text-stone-500">Overnight: {d.stayCity}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-stone-700">
            The Taj Mahal is closed on Fridays. We plan your dates so your Agra day never lands on a Friday.{' '}
            <Link href={`/tours/${tour.slug}`} className="font-semibold underline text-[#C2410C]">
              See the full tour page
            </Link>
            .
          </p>
        </section>

        {/* Build your trip form */}
        <section aria-labelledby="build-trip-h" id="build-trip" className="scroll-mt-28">
          <h2 id="build-trip-h" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-2">
            Build Your Trip &amp; Get a Free Quote
          </h2>
          <p className="text-sm text-stone-700 mb-4">
            Tick what you need: airport arrival and departure, taxi, hotels, meals, sightseeing guide, transfers, a guide who
            speaks your language or a tour escort. We reply with a written itinerary and quote.
          </p>
          <CustomTripForm packageTitle="Golden Triangle Tour Offer 2027 (4 Nights / 5 Days)" source="Offers page form (/offers)" />
        </section>

        {/* Why private */}
        <section aria-labelledby="why">
          <h2 id="why" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            Why a Private Golden Triangle Tour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHY_PRIVATE.map((w) => (
              <div key={w.title} className="bg-white border border-[#E8DFD3] rounded-2xl p-5">
                <h3 className="font-bold text-[#1C1917]">{w.title}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it suits */}
        <section aria-labelledby="suits">
          <h2 id="suits" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            Who This Tour Suits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700">
            {SUITS.map((s) => (
              <li key={s} className="bg-white border border-[#E8DFD3] rounded-xl px-4 py-3">{s}</li>
            ))}
          </ul>
        </section>

        {/* How to book */}
        <section aria-labelledby="book">
          <h2 id="book" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            How to Book
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="bg-white border border-[#E8DFD3] rounded-2xl p-5">
                <span className="block font-headline text-3xl font-extrabold text-[#EA580C]">{i + 1}</span>
                <h3 className="mt-1 font-bold text-[#1C1917] text-sm">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Get a Free Quote on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-3 text-xs text-stone-600">
            Calling from abroad? WhatsApp is the easiest way to reach us, at any hour.
          </p>
        </section>

        {/* FAQs: rendered in HTML, not click-to-reveal */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            Golden Triangle Tour: Common Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="bg-white border border-[#E8DFD3] rounded-xl p-5">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section aria-labelledby="more" className="text-sm text-stone-700">
          <h2 id="more" className="font-headline text-xl font-extrabold text-[#1C1917] uppercase mb-3">
            Want a Longer Trip?
          </h2>
          <p>
            See the{' '}
            <Link href="/tours/golden-triangle-tour" className="font-semibold underline text-[#C2410C]">
              6-day Golden Triangle tour
            </Link>
            , the{' '}
            <Link href="/tours/golden-triangle-ranthambore" className="font-semibold underline text-[#C2410C]">
              Golden Triangle with Ranthambore tiger safari
            </Link>
            , or{' '}
            <Link href="/tours/delhi-agra-jaipur-udaipur-tour" className="font-semibold underline text-[#C2410C]">
              the Golden Triangle with Udaipur
            </Link>
            .
          </p>
        </section>

        {/* Country offers */}
        <section aria-labelledby="country-offers">
          <h2 id="country-offers" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            2027 Country Offers
          </h2>
          <p className="text-sm text-stone-700 mb-4">
            Flight routes, time differences, e-Visa notes and the best months to travel, planned for where you are flying from.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COUNTRY_OFFERS.map((c, ci) => (
              <li key={c.slug}>
                <Link
                  href={`/offers/${c.slug}`}
                  className="block h-full bg-white border border-[#E8DFD3] rounded-2xl overflow-hidden hover:border-[#EA580C] hover:shadow-md transition-all"
                >
                  <div className="relative h-40 bg-stone-200">
                    <Image
                      src={
                        Array.from(new Set(c.recommendedTourSlugs.map((sl) => ALL_TOURS.find((t) => t.slug === sl)?.primaryImage).filter(Boolean)))[ci] ??
                        tour.primaryImage
                      }
                      alt={`India tours for travellers ${c.label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                  <span className="block font-headline font-bold text-[#1C1917] uppercase">India Tours {c.label}</span>
                  <span className="block text-xs text-stone-600 mt-1">{c.metaDescription}</span>
                  <span className="block mt-3 text-sm font-semibold text-[#EA580C]">See the offer &rarr;</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* All packages */}
        <section aria-labelledby="all-packages">
          <h2 id="all-packages" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            All 2027 Tour Packages
          </h2>
          <div className="space-y-8">
            {PACKAGE_GROUPS.map((g) => (
              <div key={g.category}>
                <h3 className="font-headline text-lg font-bold text-[#1C1917] uppercase mb-3">{g.heading}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {g.tours.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/tours/${t.slug}`}
                        className="flex gap-3 items-center h-full bg-white border border-[#E8DFD3] rounded-xl p-2.5 hover:border-[#EA580C] transition-colors"
                      >
                        <span className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-stone-200">
                          <Image src={t.primaryImage} alt={t.title} fill sizes="80px" className="object-cover" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold text-[#1C1917] text-sm leading-snug">{t.title}</span>
                          <span className="block text-xs text-stone-500 mt-0.5">{t.durationLabel}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-stone-600">
            Every package is private, with your own car and chauffeur, and quoted free for your dates.
          </p>
        </section>
      </div>
    </div>
  );
}
