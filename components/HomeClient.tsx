"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  ShieldCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Luggage,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import { ALL_TOURS } from "@/lib/data/toursData";
import { CAB_FLEET } from "@/lib/data/cabsData";
import { GLOBAL_FAQS } from "@/lib/data/faqsData";
import { GallerySection } from "./GallerySection";
import { ClientPhotoScroller } from "./ClientPhotoScroller";
import { useAppContext } from "./Providers";
import { PHONE_WHATSAPP } from "@/lib/constants";

const REGION_CARDS = [
  {
    slug: "rajasthan",
    title: "Rajasthan — The Land of Kings",
    blurb: "Jaipur, Jodhpur, Jaisalmer, Udaipur & Ranthambore Tiger Reserve.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    tourCount: "7 Tours Available",
  },
  {
    slug: "himachal",
    title: "Himachal — Abode of Snow",
    blurb:
      "Shimla colonial promenades, Manali Solang snow adventures & Kasol Parvati Valley.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    tourCount: "3 Tours Available",
  },
  {
    slug: "uttarakhand",
    title: "Uttarakhand — Devbhoomi",
    blurb:
      "Divine Ganga Aarti at Haridwar & Rishikesh, yoga sanctuaries & misty Mussoorie hills.",
    image:
      "https://images.unsplash.com/photo-1650341259809-9314b0de9268?auto=format&fit=crop&w=800&q=80",
    tourCount: "3 Tours Available",
  },
];
const HERO_IMAGE = 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=85';
const HERO_VIDEO = '/assets/hero.mp4';
export const HomeClient: React.FC = () => {
  const { openInquiry } = useAppContext();
  const [selectedTourCategory, setSelectedTourCategory] = useState<string>("All");
  const [videoReady, setVideoReady] = useState(false);
  const [videoErrored, setVideoErrored] = useState(false);
  // The hero video is decorative. Only load it on tablet/desktop screens and
  // never when the visitor has Data Saver on; the poster image stays the LCP element.
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = connection?.saveData === true;
    const wideScreen = window.matchMedia("(min-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAllowVideo(wideScreen && !saveData && !reducedMotion);
  }, []);

  const filterCategories = [
    "All",
    "Golden Triangle",
    "Rajasthan",
    "Himachal",
    "Uttarakhand",
    "Same Day",
  ];
  const filteredTours = ALL_TOURS.filter((tour) => {
    if (selectedTourCategory === "All") return true;
    return tour.category === selectedTourCategory;
  }).slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center bg-[#141210] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Poster image: always rendered first (SSR'd, crawlable, LCP-friendly),
        fades out once the video has buffered enough to play smoothly. */}
          <Image
            src={HERO_IMAGE}
            alt="Taj Mahal Agra Sunrise - Satnam Voyages Tour"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-700 ${
              videoReady && !videoErrored ? "opacity-0" : "opacity-75"
            }`}
          />

          {allowVideo && !videoErrored && (
            <video
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                videoReady ? "opacity-75" : "opacity-0"
              }`}
              src={HERO_VIDEO}
              poster={HERO_IMAGE}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              onCanPlay={() => setVideoReady(true)}
              onError={() => setVideoErrored(true)}
            />
          )}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
            Private India Tours &amp; Golden Triangle Tour Packages
          </h1>

          <p className="mt-4 sm:mt-6 font-headline text-lg sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
            Delhi &bull; Agra &bull; Jaipur &bull; Rajasthan &mdash; with your own English-speaking chauffeur
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openInquiry("Custom India Tour")}
              id="hero-banner-btn"
              className="px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-orange-600/50 hover:shadow-orange-600/70 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 font-headline border border-orange-400/30"
            >
              <span>Book Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* GOLDEN TRIANGLE 4N/5D OFFER STRIP */}
      <section aria-labelledby="gt-offer" className="bg-[#141210] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1 font-headline">2027 Season Offer</span>
            <h2 id="gt-offer" className="font-headline uppercase text-xl sm:text-2xl font-extrabold">
              Golden Triangle Tour: 4 Nights / 5 Days
            </h2>
            <p className="text-sm text-stone-300 mt-1 max-w-2xl">
              Delhi, Agra (Taj Mahal at sunrise) and Jaipur with your own car and English-speaking chauffeur, airport pickup to airport drop.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/offers"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider font-headline"
            >
              See the Offer
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl border border-stone-600 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider font-headline"
            >
              2027 Travel Guides
            </Link>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL DESTINATIONS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
              Iconic Circuits &amp; Terrains
            </span>
            <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
              Explore India by Region
            </h2>
          </div>
          <p className="text-sm text-[#57534E] max-w-md mt-2 md:mt-0 font-montserrat">
            Handcrafted travel routes and dedicated outstation cab networks
            connecting Delhi to North India&rsquo;s greatest treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REGION_CARDS.map((r) => (
            <Link
              key={r.slug}
              href={`/destinations/${r.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#E8DFD3] hover:shadow-xl transition-all block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={r.image}
                  alt={`${r.title} - Satnam Voyages`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/40 to-transparent"></div>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#EA580C] text-white text-xs font-bold shadow">
                  {r.tourCount}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-headline uppercase text-lg font-bold group-hover:text-amber-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2 font-montserrat">
                  {r.blurb}
                </p>
                <div className="mt-3 flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span>View Circuit &amp; Cabs</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED TOUR PACKAGES GRID */}
      <section className="py-16 bg-[#F5EFEB] border-t border-[#E8DFD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
                Curated Private Itineraries
              </span>
              <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
                Featured Tour Packages
              </h2>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-3 md:mt-0"
            >
              <span>View All {ALL_TOURS.length} Tour Packages</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTourCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedTourCategory === cat
                    ? "bg-[#EA580C] text-white shadow-md font-bold"
                    : "bg-white text-[#57534E] hover:text-[#EA580C] hover:bg-stone-50 border border-[#E8DFD3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                id={`featured-tour-card-${tour.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm hover:shadow-xl hover:border-[#EA580C]/40 transition-all flex flex-col group"
              >
                <Link
                  href={`/tours/${tour.slug}`}
                  className="relative h-56 overflow-hidden block"
                >
                  <Image
                    src={tour.primaryImage}
                    alt={tour.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-white text-xs font-semibold">
                    {tour.durationLabel}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-[#EA580C]/90 text-white text-[11px] font-bold uppercase tracking-wider">
                    {tour.category}
                  </div>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/tours/${tour.slug}`}>
                      <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#EA580C] transition-colors leading-snug font-headline">
                        {tour.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#78716C] mt-1 font-medium flex items-center">
                      <MapPin className="w-3 h-3 text-[#EA580C] mr-1 shrink-0" />
                      <span className="truncate">{tour.route}</span>
                    </p>
                    <p className="text-xs text-[#57534E] mt-2 line-clamp-2 font-montserrat">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="px-3.5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        View Itinerary
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/tours"
              className="px-8 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All {ALL_TOURS.length} Tour Itineraries</span>
              <ArrowRight className="w-4 h-4 text-amber-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VISUAL GALLERY SECTION */}
      <GallerySection />

      {/* 4b. CLIENT PHOTO SCROLLER */}
      <ClientPhotoScroller />

      {/* 5. CAB FLEET SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
              Sanitized Private Fleet
            </span>
            <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
              Outstation Cabs &amp; Chauffeur Hire
            </h2>
          </div>
          <Link
            href="/cabs"
            className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-2 md:mt-0"
          >
            <span>View Full Fleet &amp; Rates</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAB_FLEET.slice(0, 3).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#EA580C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  {/* Fleet illustrations are SVGs, so next/image optimisation adds nothing here. */}
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} (${vehicle.models})`}
                    width={640}
                    height={384}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#141210]/85 backdrop-blur text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#1C1917] font-headline uppercase">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-[#78716C] font-medium mb-3">
                    {vehicle.models}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-[#57534E] mb-4 pb-3 border-b border-stone-100 font-montserrat">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 text-[#EA580C] mr-1.5" />{" "}
                      {vehicle.seats} Pax
                    </span>
                    <span className="flex items-center">
                      <Luggage className="w-4 h-4 text-[#EA580C] mr-1.5" />{" "}
                      {vehicle.luggageCount} Bags
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-1.5" />{" "}
                      Sanitized
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#57534E] font-montserrat">
                    {vehicle.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] mr-1.5 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() =>
                    openInquiry(`Outstation Cab - ${vehicle.name}`)
                  }
                  className="w-full py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Car className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. REAL TRAVELLERS (links to genuine client photos instead of testimonials) */}
      <section className="py-14 bg-[#141210] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
            Real Travellers, Real Journeys
          </span>
          <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-white">
            See Our Travellers on the Road
          </h2>
          <p className="text-stone-300 text-sm mt-2 font-montserrat max-w-2xl mx-auto">
            Photos shared by guests who have travelled with Satnam Voyages, from the Taj Mahal
            to Rajasthan&rsquo;s forts and the Himalayan hill stations.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-flex items-center px-7 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <span>See Our Travellers</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* 7. AEO FAQ SECTION (VOICE SEARCH / ANSWER ENGINE OPTIMIZED) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
            Answers for Travellers
          </span>
          <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] mt-2 font-montserrat">
            Straight answers about private chauffeur
            travel, pricing, permits, and tour arrangements in India.
          </p>
        </div>

        <div className="space-y-3">
          {GLOBAL_FAQS.map((faq, idx) => (
            <details
              key={faq.id}
              open={idx === 0}
              className="group rounded-xl border border-[#E8DFD3] bg-white overflow-hidden shadow-sm"
            >
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#1C1917] text-sm sm:text-base hover:text-[#EA580C] transition-colors">
                <h3 className="font-headline text-sm uppercase">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-[#EA580C] shrink-0 ml-3 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#E8DFD3]/60 pt-3 font-montserrat">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-[#EA580C] via-[#E05A1B] to-[#C2410C] py-14 text-white shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-headline uppercase text-2xl sm:text-4xl font-extrabold mb-2 text-white tracking-tight">
            Ready to Experience the Wonders of India?
          </h3>
          <p className="text-orange-100 font-medium text-sm sm:text-base max-w-xl mx-auto mb-8 font-montserrat">
            Get an instant custom itinerary quote with your preferred vehicle
            and budget within minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openInquiry()}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-[#EA580C] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Request Custom Itinerary Quote
            </button>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20speak%20with%20a%20tour%20consultant.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#141210] hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center border border-white/20"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
