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
              Private chauffeur-driven cabs from Delhi to Agra, Jaipur, Shimla, Manali, Rishikesh and across North India. AC sedans from ₹11/km, Toyota Innova Crysta from ₹17/km and Tempo Travellers from ₹24/km, with tolls billed at actuals.
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
                Get Instant Fare Estimate
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
              <span>Clear per-km pricing, minimum 250 km/day</span>
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

      {/* PER-KM FARE TABLE */}
      <section aria-labelledby="per-km-rates" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="per-km-rates" className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase mb-4">
          Outstation Cab Rates from Delhi
        </h2>
        <div className="overflow-x-auto bg-white rounded-2xl border border-[#E8DFD3]">
          <table className="w-full text-sm text-left">
            <thead className="bg-stone-50 text-stone-600 text-xs uppercase">
              <tr>
                <th scope="col" className="px-4 py-3">Vehicle</th>
                <th scope="col" className="px-4 py-3">Seats</th>
                <th scope="col" className="px-4 py-3">Rate per km</th>
                <th scope="col" className="px-4 py-3">Minimum / day</th>
                <th scope="col" className="px-4 py-3">Local 8 hr / 80 km</th>
                <th scope="col" className="px-4 py-3">Driver allowance / night</th>
              </tr>
            </thead>
            <tbody>
              {CAB_FLEET.map((v) => (
                <tr key={v.id} className="border-t border-stone-100">
                  <th scope="row" className="px-4 py-3 font-semibold text-[#1C1917]">
                    {v.name}
                    <span className="block text-xs font-normal text-stone-500">{v.models}</span>
                  </th>
                  <td className="px-4 py-3">{v.seats}</td>
                  <td className="px-4 py-3 font-bold text-[#EA580C]">₹{v.perKmRateINR}/km</td>
                  <td className="px-4 py-3">{v.minKmPerDay} km</td>
                  <td className="px-4 py-3">₹{v.local8hr80kmRateINR.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">₹{v.driverAllowancePerDayINR} (extra)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-stone-600">
          Outstation trips are charged per km with a daily minimum. Tolls, parking and state entry taxes are billed at actuals
          with receipts. Driver night allowance is charged extra and shown separately on your quote.
        </p>
      </section>

      {/* POPULAR ROUTES */}
      <section aria-labelledby="popular-routes" className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="popular-routes" className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase mb-4">
          Popular Taxi Routes &amp; One-way Fares
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
                <span className="block mt-3 text-sm text-stone-700">
                  Sedan <strong className="text-[#EA580C]">₹{r.sedanFareINR.toLocaleString('en-IN')}</strong> · Innova{' '}
                  <strong className="text-[#EA580C]">₹{r.suvFareINR.toLocaleString('en-IN')}</strong>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
