'use client';

import React from 'react';
import { Car, Users, Luggage, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { CAB_FLEET } from '@/lib/data/cabsData';
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
              Premier Outstation Cabs &amp; Fleets
            </h1>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed font-montserrat">
              Travel across North India in pristine, sanitized private vehicles. Clean AC sedans, Toyota Innova Crysta SUVs, and Maharaja Tempo Travellers driven by veteran highway chauffeurs.
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
              <span>100% Police Verified &amp; Professional Drivers</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>GPS Live Tracking in Every Vehicle</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Chilled Mineral Water &amp; USB Chargers</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Zero Surge Pricing / Transparent FASTag Bills</span>
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
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" loading="lazy" />
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
                  <span>Book Cab on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
