import React, { useState, useRef, useEffect } from 'react';
import {
  Car,
  Star,
  ShieldCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Phone,
  Clock,
  Users,
  Luggage,
  Sparkles,
  ChevronDown,
  MessageSquare
} from 'lucide-react';
import { ALL_TOURS } from '../data/toursData';
import { CAB_FLEET } from '../data/cabsData';
import { GLOBAL_FAQS, REVIEWS_LIST } from '../data/faqsData';
import { Currency, TourPackage } from '../types';
import { TrustBadges } from '../components/TrustBadges';
import { GallerySection } from '../components/GallerySection';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  currency: Currency;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  currency,
  onOpenInquiry
}) => {
  const [selectedTourCategory, setSelectedTourCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Guarantee seamless video playback across all browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Video autoplay prevented or suspended:', err);
        });
      }
    }
  }, []);

  // Filter featured tours
  const filterCategories = ['All', 'Golden Triangle', 'Rajasthan', 'Himachal', 'Uttarakhand', 'Same Day'];
  const filteredTours = ALL_TOURS.filter((tour) => {
    if (selectedTourCategory === 'All') return true;
    return tour.category === selectedTourCategory;
  }).slice(0, 6); // Top 6 on home

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') return `$${usd}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  // Structured Data (JSON-LD) for Homepage: TravelAgency, TaxiService, FAQPage
  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://satnamvoyages.com/#agency",
        "name": "Satnam Voyages",
        "url": "https://satnamvoyages.com/",
        "logo": "https://satnamvoyages.com/logo.png",
        "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
        "description": "Premier travel agency and outstation cab provider in India specializing in Golden Triangle, Rajasthan, Himachal and Uttarakhand tours.",
        "telephone": "+91-9811776525",
        "email": "booking@satnamvoyages.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Connaught Place, Central Delhi",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.92",
          "reviewCount": "1450"
        }
      },
      {
        "@type": "TaxiService",
        "@id": "https://satnamvoyages.com/#taxi",
        "name": "Satnam Voyages Outstation Cabs",
        "provider": { "@id": "https://satnamvoyages.com/#agency" },
        "serviceArea": {
          "@type": "Country",
          "name": "India"
        },
        "areaServed": ["Delhi NCR", "Agra", "Jaipur", "Rajasthan", "Himachal Pradesh", "Uttarakhand"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": GLOBAL_FAQS.slice(0, 5).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-16">
      <SEOHead
        title="Explore India with Comfort & Confidence — Premier Cabs & Tours"
        description="Satnam Voyages is India's premier travel agency and outstation cab provider. Private Golden Triangle tours, Rajasthan circuits, Himachal hill retreats, and verified chauffeur cabs."
        canonicalPath="/"
        jsonLdSchema={homepageJsonLd}
      />

      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center bg-[#141210] text-white overflow-hidden">
        {/* Ambient Video Loop with Poster Fallback */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=85"
            className="w-full h-full object-cover object-center opacity-75 scale-105 transform duration-1000"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=85"
              alt="Taj Mahal Agra Sunrise - Satnam Voyages Tour"
              className="w-full h-full object-cover object-center"
            />
          </video>

          {/* Cinematic Dark Overlays with Warm Hue */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/50 to-[#141210]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/80 via-transparent to-[#141210]/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 text-center">
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-tight drop-shadow-[0_8px_32px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
            DISCOVER INDIA IN COMFORT &amp; LUXURY
          </h1>

          {/* Subheading with Orange Color */}
          <p className="mt-4 sm:mt-6 font-headline text-lg sm:text-2xl md:text-3xl font-bold text-[#EA580C] uppercase tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
            Bespoke Private Journeys &amp; Chauffeured Outstation Fleets
          </p>

          {/* Banner Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry ? onOpenInquiry('Custom India Tour') : onNavigate('/tours')}
              id="hero-banner-btn"
              className="px-8 py-4 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-orange-600/50 hover:shadow-orange-600/70 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2.5 font-headline border border-orange-400/30"
            >
              <span>Book Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BADGES GRID */}

      {/* 3. REGIONAL DESTINATIONS CAROUSEL / GRID */}
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
            Handcrafted travel routes and dedicated outstation cab networks connecting Delhi to North India’s greatest treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Rajasthan */}
          <div
            onClick={() => onNavigate('/destinations/rajasthan')}
            className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#E8DFD3] hover:shadow-xl transition-all"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
                alt="Rajasthan Palaces & Desert - Satnam Voyages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/40 to-transparent"></div>
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#EA580C] text-white text-xs font-bold shadow">
                7 Tours Available
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <h3 className="font-headline uppercase text-lg font-bold group-hover:text-amber-300 transition-colors">
                Rajasthan — The Land of Kings
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2 font-montserrat">
                Jaipur, Jodhpur, Jaisalmer, Udaipur &amp; Ranthambore Tiger Reserve.
              </p>
              <div className="mt-3 flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span>View Circuit &amp; Cabs</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Himachal */}
          <div
            onClick={() => onNavigate('/destinations/himachal')}
            className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#E8DFD3] hover:shadow-xl transition-all"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
                
                alt="Himachal Snow Mountains - Satnam Voyages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/40 to-transparent"></div>
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#EA580C] text-white text-xs font-bold shadow">
                3 Tours Available
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <h3 className="font-headline uppercase text-lg font-bold group-hover:text-amber-300 transition-colors">
                Himachal — Abode of Snow
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2 font-montserrat">
                Shimla colonial promenades, Manali Solang snow adventures &amp; Kasol Parvati Valley.
              </p>
              <div className="mt-3 flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span>View Circuit &amp; Cabs</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Uttarakhand */}
          <div
            onClick={() => onNavigate('/destinations/uttarakhand')}
            className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#E8DFD3] hover:shadow-xl transition-all"
          >
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1650341259809-9314b0de9268?auto=format&fit=crop&w=800&q=80"
                alt="Rishikesh Ganga Aarti - Satnam Voyages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/95 via-[#141210]/40 to-transparent"></div>
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#EA580C] text-white text-xs font-bold shadow">
                3 Tours Available
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <h3 className="font-headline uppercase text-lg font-bold group-hover:text-amber-300 transition-colors">
                Uttarakhand — Devbhoomi
              </h3>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2 font-montserrat">
                Divine Ganga Aarti at Haridwar &amp; Rishikesh, yoga sanctuaries &amp; misty Mussoorie hills.
              </p>
              <div className="mt-3 flex items-center text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span>View Circuit &amp; Cabs</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TOUR PACKAGES GRID */}
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
            <button
              onClick={() => onNavigate('/tours')}
              className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-3 md:mt-0"
            >
              <span>View All 16 Tour Packages</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTourCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedTourCategory === cat
                    ? 'bg-[#EA580C] text-white shadow-md font-bold'
                    : 'bg-white text-[#57534E] hover:text-[#EA580C] hover:bg-stone-50 border border-[#E8DFD3]'
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
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.primaryImage}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-white text-xs font-semibold">
                    {tour.durationLabel}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[#EA580C] text-xs font-bold flex items-center shadow-sm border border-orange-100">
                    <Star className="w-3.5 h-3.5 fill-current mr-1 text-[#EA580C]" />
                    {tour.rating}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-[#EA580C]/90 text-white text-[11px] font-bold uppercase tracking-wider">
                    {tour.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#1C1917] group-hover:text-[#EA580C] transition-colors leading-snug font-headline">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-[#78716C] mt-1 font-medium flex items-center">
                      <MapPin className="w-3 h-3 text-[#EA580C] mr-1 shrink-0" />
                      <span className="truncate">{tour.route}</span>
                    </p>
                    <p className="text-xs text-[#57534E] mt-2 line-clamp-2 font-montserrat">
                      {tour.overview}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-bold">Starting from</span>
                      <span className="text-lg font-extrabold text-[#1C1917] font-headline">
                        {formatPrice(tour.startingPriceINR, tour.startingPriceUSD)}
                      </span>
                      <span className="text-[11px] text-stone-500 ml-1">/ person</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onNavigate(`/tours/${tour.slug}`)}
                        className="px-3.5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        View Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('/tours')}
              className="px-8 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All 16 Tour Itineraries</span>
              <ArrowRight className="w-4 h-4 text-amber-200" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. VISUAL GALLERY SECTION (Home Page & Navbar Anchor) */}
      <GallerySection onNavigate={onNavigate} onOpenInquiry={onOpenInquiry} />

      {/* 6. CAB FLEET SECTION */}
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
          <button
            onClick={() => onNavigate('/cabs')}
            className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-2 md:mt-0"
          >
            <span>View Full Fleet &amp; Rates</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAB_FLEET.slice(0, 3).map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#EA580C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#141210]/85 backdrop-blur text-amber-300 text-xs font-bold uppercase tracking-wider">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#1C1917] font-headline uppercase">{vehicle.name}</h3>
                  <p className="text-xs text-[#78716C] font-medium mb-3">{vehicle.models}</p>

                  <div className="flex items-center space-x-4 text-xs text-[#57534E] mb-4 pb-3 border-b border-stone-100 font-montserrat">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.seats} Pax
                    </span>
                    <span className="flex items-center">
                      <Luggage className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.luggageCount} Bags
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-1.5" /> Sanitized
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
                <div className="bg-[#FAF6F0] p-3 rounded-xl flex items-center justify-between mb-3 border border-[#E8DFD3]">
                  <div>
                    <span className="text-[10px] text-[#78716C] uppercase font-bold block">Outstation Rate</span>
                    <span className="text-base font-extrabold text-[#1C1917] font-headline">
                      {currency === 'USD' ? `$${vehicle.perKmRateUSD}/km` : `₹${vehicle.perKmRateINR}/km`}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#78716C] uppercase font-bold block">Local 8h/80km</span>
                    <span className="text-sm font-bold text-[#EA580C] font-headline">
                      {formatPrice(vehicle.local8hr80kmRateINR, vehicle.local8hr80kmRateUSD)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry(`Outstation Cab - ${vehicle.name}`)}
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

      {/* 7. CUSTOMER TESTIMONIALS & REVIEWS */}
      <section className="py-16 bg-[#141210] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Verified Traveler Experiences
            </span>
            <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-white">
              Trusted by 10,000+ Happy Explorers
            </h2>
            <p className="text-stone-300 text-sm mt-2 font-montserrat">
              Read authentic feedback from international and domestic guests who journeyed through India with Satnam Voyages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS_LIST.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#1C1917] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-200 italic leading-relaxed mb-4 font-montserrat">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center space-x-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#EA580C]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight font-headline">{rev.name}</h4>
                    <p className="text-[11px] text-stone-400">
                      {rev.location}, {rev.country}
                    </p>
                    <span className="inline-block mt-0.5 text-[10px] text-amber-400 font-semibold">
                      ✓ {rev.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AEO FAQ SECTION (VOICE SEARCH OPTIMIZED) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
            Answers for Travelers &amp; Search Engines (AEO)
          </span>
          <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] mt-2 font-montserrat">
            Clear, authoritative direct answers regarding private chauffeur travel, pricing, permits, and tour arrangements in India.
          </p>
        </div>

        <div className="space-y-3">
          {GLOBAL_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#E8DFD3] bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#1C1917] text-sm sm:text-base hover:text-[#EA580C] transition-colors"
                >
                  <span className="font-headline text-sm uppercase">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#EA580C] shrink-0 ml-3 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#E8DFD3]/60 pt-3 font-montserrat">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-[#EA580C] via-[#E05A1B] to-[#C2410C] py-14 text-white shadow-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-headline uppercase text-2xl sm:text-4xl font-extrabold mb-2 text-white tracking-tight">
            Ready to Experience the Wonders of India?
          </h3>
          <p className="text-orange-100 font-medium text-sm sm:text-base max-w-xl mx-auto mb-8 font-montserrat">
            Get an instant custom itinerary quote with your preferred vehicle and budget within minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="px-7 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-[#EA580C] font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Request Custom Itinerary Quote
            </button>
            <a
              href="https://wa.me/919811776525?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20speak%20with%20a%20tour%20consultant."
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
