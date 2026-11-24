'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Car, Users, Luggage, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { CAB_FLEET, POPULAR_CAB_ROUTES } from '@/lib/data/cabsData';
import { useAppContext } from './Providers';
import { PHONE_WHATSAPP } from '@/lib/constants';

export const CabsClient: React.FC = () => {
  const { openInquiry } = useAppContext();

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      {/* Header Banner */}
      <div className="bg-[#141210] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-wider block mb-2 font-headline">
              Chauffeur-Driven Tourist Transport
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
              Outstation Cabs from Delhi
            </h1>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed font-montserrat">
              Private chauffeur-driven cabs from Delhi to Agra, Jaipur, Shimla, Manali, Rishikesh and across North India in AC sedans, Toyota Innova Crysta and Tempo Travellers. Message us your route and dates for today&apos;s fare.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20I%20need%20an%20outstation%20cab%20from%20Delhi.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/20 flex items-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>

              <button
                onClick={() => openInquiry('Custom Outstation Cab Hire')}
                className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow transition-all border border-stone-700"
              >
                Get a Fare Quote
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-[#201D1A] p-5 rounded-2xl border border-stone-800 text-xs text-stone-200 font-montserrat">
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Experienced highway &amp; hill-route chauffeurs</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Fare confirmed in writing before you travel</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>AC vehicles with drinking water &amp; USB charging</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Tolls &amp; parking billed at actuals with receipts</span>
            </div>
          </div>
        </div>
      </div>

      {/* FLEET COMPARISON GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1 font-headline">
            Complete Vehicle Specs
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase">
            Our Chauffeur Fleet Comparison
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-montserrat">
            Every vehicle in our fleet is company-maintained, regularly serviced, and driven by an experienced tourism chauffeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAB_FLEET.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  {/* TODO: replace with real fleet photos (currently neutral category illustrations) */}
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.category} illustration — ${vehicle.models}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    unoptimized={vehicle.image.endsWith('.svg')}
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-orange-400 text-xs font-bold uppercase font-headline">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-headline uppercase">{vehicle.name}</h3>
                  <p className="text-xs text-stone-500 font-medium mb-3 font-montserrat">{vehicle.models}</p>

                  <div className="flex items-center space-x-4 text-xs text-stone-700 mb-4 pb-3 border-b border-stone-100 font-semibold font-montserrat">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.seats} Pax
                    </span>
                    <span className="flex items-center">
                      <Luggage className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.luggageCount} Luggage
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 text-orange-600 mr-1.5" /> Full AC
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mb-4 italic font-accent">&ldquo;{vehicle.idealFor}&rdquo;</p>

                  <ul className="space-y-1.5 text-xs text-stone-600 font-montserrat">
                    {vehicle.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openInquiry(`Outstation Cab - ${vehicle.name}`)}
                  className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Car className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW FARES WORK (no fixed prices: fares change with season and availability) */}
      <section aria-labelledby="how-fares-work" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="how-fares-work" className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase mb-4">
          How Our Cab Fares Work
        </h2>
        <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-700">
          <p>
            <strong className="text-[#1C1917]">Quoted for your trip.</strong> Fares depend on your route, travel dates,
            vehicle and season, so we quote each trip individually and confirm the fare in writing before you book.
          </p>
          <p>
            <strong className="text-[#1C1917]">One-way or round trip.</strong> We offer one-way drops, round trips and
            multi-day hire with the same chauffeur for the whole journey.
          </p>
          <p>
            <strong className="text-[#1C1917]">Tolls and taxes.</strong> Tolls, parking and state entry taxes are billed at
            actuals with receipts.
          </p>
          <p>
            <strong className="text-[#1C1917]">Overnight trips.</strong> A driver night allowance applies for each overnight
            stay and is shown separately on your quote.
          </p>
        </div>
        <div className="mt-4">
          <a
            href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20please%20share%20a%20cab%20fare%20quote.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get Today&apos;s Fare on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section aria-labelledby="popular-routes" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="popular-routes" className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase mb-4">
          Popular Taxi Routes from Delhi
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_CAB_ROUTES.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/cabs/${r.slug}`}
                className="block h-full bg-white border border-[#E8DFD3] rounded-2xl p-5 hover:border-[#EA580C] hover:shadow-md transition-all"
              >
                <span className="block font-headline font-bold text-[#1C1917] uppercase">
                  {r.from} to {r.to}
                </span>
                <span className="block text-xs text-stone-500 mt-1">
                  {r.distanceKm} km · {r.driveTime}
                </span>
                <span className="block mt-3 text-sm font-semibold text-[#EA580C]">View route details &rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
