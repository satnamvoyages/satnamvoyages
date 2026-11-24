'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Car, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import type { DestinationRegion } from '@/lib/types';
import { ALL_TOURS } from '@/lib/data/toursData';
import { useAppContext } from './Providers';

const REGION_TABS = [
  { slug: 'rajasthan', label: 'Rajasthan Heritage' },
  { slug: 'himachal', label: 'Himachal Snow & Valleys' },
  { slug: 'uttarakhand', label: 'Uttarakhand Devbhoomi' },
];

export const DestinationClient: React.FC<{ destination: DestinationRegion }> = ({ destination }) => {
  const { openInquiry } = useAppContext();
  const regionalTours = ALL_TOURS.filter((tour) => destination.associatedPackageSlugs.includes(tour.slug));
  const regionName = destination.name.split('—')[0].trim();

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#E8DFD3] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-stone-500 font-montserrat">
          <Link href="/" className="hover:text-[#EA580C] font-semibold">Home</Link>
          <span>/</span>
          <Link href="/tours" className="hover:text-[#EA580C] font-semibold">Tours</Link>
          <span>/</span>
          <span className="text-[#1C1917] font-bold">{regionName}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-[#141210] text-white min-h-[380px] flex items-center overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider mb-3 font-headline">
            {regionalTours.length} private packages · free custom quote
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 uppercase">
            {destination.headline ?? destination.name}
          </h1>
          <p className="text-orange-300 text-base sm:text-lg font-medium max-w-3xl mb-4 font-accent">{destination.tagline}</p>
          {destination.intro && (
            <p className="text-stone-200 text-sm sm:text-base max-w-2xl leading-relaxed font-montserrat mb-3">{destination.intro}</p>
          )}
          <p className="text-stone-300 text-sm max-w-2xl leading-relaxed font-montserrat">{destination.description}</p>
          <a
            href="#region-packages"
            className="mt-5 inline-flex items-center px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider font-headline"
          >
            See {regionName} tour packages
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>

          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300 font-montserrat">
            <div className="bg-[#201D1A]/85 backdrop-blur px-3.5 py-2 rounded-xl border border-stone-700 flex items-center">
              <Calendar className="w-4 h-4 text-[#EA580C] mr-2" />
              <span>
                <strong>Best Season:</strong> {destination.bestSeason}
              </span>
            </div>
            <div className="bg-[#201D1A]/85 backdrop-blur px-3.5 py-2 rounded-xl border border-stone-700 flex items-center">
              <Car className="w-4 h-4 text-[#EA580C] mr-2" />
              <span>
                <strong>Drive from Delhi:</strong> {destination.cabTravelTimeFromDelhi}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Region Switcher Tabs */}
      <div className="bg-white border-b border-[#E8DFD3] sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-2 py-3 overflow-x-auto font-montserrat">
          {REGION_TABS.map((tab) => (
            <Link
              key={tab.slug}
              href={`/destinations/${tab.slug}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                destination.slug === tab.slug
                  ? 'bg-[#EA580C] text-white font-bold shadow-sm shadow-orange-600/30'
                  : 'bg-[#FAF6F0] border border-[#E8DFD3] text-stone-700 hover:bg-[#F5ECE0]'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Key Cities & Top Sights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1 font-headline">
            Must-Visit Destinations
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase">
            Key Cities &amp; Iconic Sights in {regionName}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.keyCities.map((city, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <Image
                    src={city.image}
                    alt={`${city.name}, ${regionName}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-orange-400 text-xs font-bold font-headline uppercase">
                    {city.name}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-[#1C1917] text-lg mb-1 font-headline uppercase">{city.name}</h3>
                  <p className="text-xs text-[#EA580C] font-semibold mb-4">{city.tagline}</p>

                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wide block mb-2 font-headline">
                    Top Attractions:
                  </span>
                  <ul className="space-y-1 text-xs text-stone-700 font-montserrat">
                    {city.attractions.map((att, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-3 h-3 text-[#EA580C] mr-1.5 shrink-0 mt-0.5" />
                        <span>{att}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => openInquiry(`Cab to ${city.name} (${destination.name})`)}
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1"
                >
                  <Car className="w-3.5 h-3.5 text-[#EA580C] mr-1" />
                  <span>Hire Cab to {city.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Associated Regional Tour Packages */}
      <div id="region-packages" className="bg-[#FAF6F0] border-t border-[#E8DFD3] py-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1 font-headline">
                Handcrafted Itineraries
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase">
                {regionName} Tour Packages
              </h2>
            </div>
            <Link href="/tours" className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-2 md:mt-0">
              <span>View All Tour Packages</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                <Link href={`/tours/${tour.slug}`}>
                  <div className="relative h-52 overflow-hidden bg-stone-100">
                    <Image
                      src={tour.primaryImage}
                      alt={tour.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-white text-xs font-bold font-headline uppercase">
                      {tour.durationLabel}
                    </div>

                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-[#1C1917] text-base leading-snug font-headline uppercase">{tour.title}</h3>
                    <p className="text-xs text-stone-500 mt-1 font-medium flex items-center font-montserrat">
                      <MapPin className="w-3.5 h-3.5 text-[#EA580C] mr-1 shrink-0" />
                      <span className="truncate">{tour.route}</span>
                    </p>
                    <p className="text-xs text-stone-600 mt-2 line-clamp-2 font-montserrat">{tour.overview}</p>
                  </div>
                </Link>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-bold block">Private tour</span>
                      <span className="text-sm font-extrabold text-[#1C1917] font-headline">Free Quote</span>
                    </div>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="px-3.5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      View Itinerary
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
