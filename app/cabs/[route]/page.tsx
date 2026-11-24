import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CAB_FLEET, POPULAR_CAB_ROUTES, getCabRoute, type PopularRoute } from '@/lib/data/cabsData';
import { ALL_TOURS } from '@/lib/data/toursData';
import { SITE_URL, SITE_NAME, PHONE_TEL, PHONE_DISPLAY, PHONE_WHATSAPP } from '@/lib/constants';

interface PageProps {
  params: Promise<{ route: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return POPULAR_CAB_ROUTES.map((r) => ({ route: r.slug }));
}

const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

function routeName(r: PopularRoute) {
  return r.slug === 'delhi-airport-transfer' ? 'Delhi Airport Taxi Transfer' : `${r.from} to ${r.to} Taxi`;
}

function pageTitle(r: PopularRoute) {
  // Layout template appends " | Satnam Voyages" — keep this part ≤ 43 chars.
  const full = `${routeName(r)} Fare from ${inr(r.sedanFareINR)}`;
  return full.length <= 43 ? full : `${r.from} to ${r.to} Cab ${inr(r.sedanFareINR)}`;
}

function pageDescription(r: PopularRoute) {
  const d =
    r.slug === 'delhi-airport-transfer'
      ? `Private Delhi IGI Airport taxi to Central Delhi or Gurgaon from ${inr(r.sedanFareINR)}. Flight tracking, name-card pickup, sedan, Innova or Tempo Traveller.`
      : `${r.from} to ${r.to} cab: ${r.distanceKm} km, about ${r.driveTime.split(' (')[0]}. One-way fares from ${inr(r.sedanFareINR)} sedan, ${inr(r.suvFareINR)} Innova. Tolls at actuals.`;
  return d.length > 160 ? d.slice(0, 157).replace(/\s+\S*$/, '') + '…' : d;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { route } = await params;
  const r = getCabRoute(route);
  if (!r) return {};
  const title = pageTitle(r);
  const description = pageDescription(r);
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/cabs/${r.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/cabs/${r.slug}` },
  };
}

function cityNodes(r: PopularRoute) {
  return [r.from, ...r.to.split('/')].map((name) => ({ '@type': 'City', name: name.trim() }));
}

export default async function CabRoutePage({ params }: PageProps) {
  const { route } = await params;
  const r = getCabRoute(route);
  if (!r) notFound();

  const name = routeName(r);
  const relatedTour = r.relatedTourSlug ? ALL_TOURS.find((t) => t.slug === r.relatedTourSlug) : undefined;
  const otherRoutes = POPULAR_CAB_ROUTES.filter((o) => o.slug !== r.slug);
  const sedan = CAB_FLEET.find((v) => v.category === 'Sedan');
  const suv = CAB_FLEET.find((v) => v.category === 'SUV');
  const tempo = CAB_FLEET.find((v) => v.category === 'Tempo Traveller');

  const fares = [
    { vehicle: sedan, label: 'Sedan', fare: r.sedanFareINR },
    { vehicle: suv, label: 'Innova Crysta (SUV)', fare: r.suvFareINR },
    { vehicle: tempo, label: 'Tempo Traveller', fare: r.tempoFareINR },
  ];

  const waText = encodeURIComponent(`Hello ${SITE_NAME}, I'd like to book a ${r.from} to ${r.to} cab.`);
  const pageUrl = `${SITE_URL}/cabs/${r.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TaxiService',
        '@id': `${pageUrl}#service`,
        name: `${name} — ${SITE_NAME}`,
        url: pageUrl,
        description: r.description,
        provider: { '@id': `${SITE_URL}/#agency` },
        areaServed: cityNodes(r),
        offers: fares.map((f) => ({
          '@type': 'Offer',
          name: `${r.from} to ${r.to} one-way — ${f.label}`,
          url: pageUrl,
          priceCurrency: 'INR',
          price: f.fare,
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: f.fare,
            priceCurrency: 'INR',
            valueAddedTaxIncluded: false,
          },
          availability: 'https://schema.org/InStock',
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Outstation Cabs', item: `${SITE_URL}/cabs` },
          { '@type': 'ListItem', position: 3, name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <div className="bg-[#141210] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-xs text-stone-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/cabs" className="hover:text-white">Outstation Cabs</Link>
            <span className="mx-2">/</span>
            <span className="text-stone-200">{name}</span>
          </nav>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">{name}</h1>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            {r.distanceKm} km · about {r.driveTime} · via {r.highway}
          </p>
          <p className="mt-2 text-2xl font-extrabold text-orange-400 font-headline">
            One-way from {inr(r.sedanFareINR)} <span className="text-sm font-semibold text-stone-300">(sedan)</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              Book on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-sm uppercase tracking-wider border border-stone-700 transition-all"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Fare table */}
        <section aria-labelledby="fares">
          <h2 id="fares" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            {r.from} to {r.to} Cab Fares
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-[#E8DFD3]">
            <table className="w-full text-sm text-left">
              <thead className="bg-stone-50 text-stone-600 text-xs uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">Vehicle</th>
                  <th scope="col" className="px-4 py-3">Seats</th>
                  <th scope="col" className="px-4 py-3">One-way fare</th>
                  <th scope="col" className="px-4 py-3">Driver night allowance</th>
                </tr>
              </thead>
              <tbody>
                {fares.map((f) => (
                  <tr key={f.label} className="border-t border-stone-100">
                    <th scope="row" className="px-4 py-3 font-semibold text-[#1C1917]">
                      {f.label}
                      {f.vehicle && <span className="block text-xs font-normal text-stone-500">{f.vehicle.models}</span>}
                    </th>
                    <td className="px-4 py-3">{f.vehicle?.seats ?? '—'}</td>
                    <td className="px-4 py-3 font-bold text-[#EA580C]">{inr(f.fare)}</td>
                    <td className="px-4 py-3">
                      {r.slug === 'delhi-airport-transfer'
                        ? 'Not applicable'
                        : f.vehicle
                          ? `${inr(f.vehicle.driverAllowancePerDayINR)} / night (extra)`
                          : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-stone-600">
            Fares are for a one-way drop and exclude tolls, parking and state entry tax, which are billed at actuals with
            receipts. Round trips and multi-day hire are charged per km on a {sedan?.minKmPerDay ?? 250} km per day minimum —
            see <Link href="/cabs" className="underline text-[#C2410C]">all per-km rates</Link>.
          </p>
        </section>

        {/* Route */}
        <section aria-labelledby="route">
          <h2 id="route" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-3">The Route</h2>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{r.description}</p>
          <h3 className="mt-6 font-headline text-lg font-bold text-[#1C1917] uppercase">Tolls, taxes &amp; permits</h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{r.tollsNote}</p>
          <h3 className="mt-6 font-headline text-lg font-bold text-[#1C1917] uppercase">Best time to travel</h3>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">{r.bestTime}</p>
        </section>

        {/* Attractions */}
        <section aria-labelledby="see">
          <h2 id="see" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-3">
            What to see in and around {r.to}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
            {r.attractions.map((a) => (
              <li key={a} className="bg-white border border-[#E8DFD3] rounded-xl px-4 py-2">{a}</li>
            ))}
          </ul>
          {relatedTour && (
            <p className="mt-4 text-sm text-stone-700">
              Want a planned itinerary with hotels and guides instead of a point-to-point drop? See our{' '}
              <Link href={`/tours/${relatedTour.slug}`} className="font-semibold underline text-[#C2410C]">
                {relatedTour.title}
              </Link>
              .
            </p>
          )}
        </section>

        {/* FAQs — rendered in HTML, not click-to-reveal */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">
            {r.from} to {r.to} Taxi: Common Questions
          </h2>
          <div className="space-y-4">
            {r.faqs.map((f) => (
              <div key={f.q} className="bg-white border border-[#E8DFD3] rounded-xl p-5">
                <h3 className="font-bold text-[#1C1917] text-sm sm:text-base">{f.q}</h3>
                <p className="mt-2 text-sm text-stone-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other routes */}
        <section aria-labelledby="more">
          <h2 id="more" className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase mb-4">Other Popular Routes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherRoutes.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/cabs/${o.slug}`}
                  className="block bg-white border border-[#E8DFD3] rounded-xl px-4 py-3 hover:border-[#EA580C] transition-colors"
                >
                  <span className="block font-semibold text-[#1C1917] text-sm">{routeName(o)}</span>
                  <span className="block text-xs text-stone-500">
                    {o.distanceKm} km · from {inr(o.sedanFareINR)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
