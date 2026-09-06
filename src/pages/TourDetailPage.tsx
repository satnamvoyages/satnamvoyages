import React, { useState, useMemo } from 'react';
import {
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  XCircle,
  Car,
  Hotel,
  Share2,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Info,
  Camera,
  X,
  Sparkles,
  Users,
  Compass,
  Phone,
  ThumbsUp
} from 'lucide-react';
import { ALL_TOURS } from '../data/toursData';
import { Currency, TourPackage } from '../types';
import { SEOHead } from '../components/SEOHead';
import { ItineraryBookingForm } from '../components/ItineraryBookingForm';
import { getPhotoForItineraryDay, getBentoGalleryPhotos } from '../data/itineraryImages';
import { CLIENT_MOMENTS } from '../data/clientPhotosData';

interface TourDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  currency: Currency;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const TourDetailPage: React.FC<TourDetailPageProps> = ({
  slug,
  onNavigate,
  currency,
  onOpenInquiry
}) => {
  // Find package by slug
  const tour = useMemo(() => {
    return ALL_TOURS.find((t) => t.slug === slug) || ALL_TOURS[0];
  }, [slug]);

  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [selectedTier, setSelectedTier] = useState<'Standard' | 'Deluxe' | 'Luxury'>('Deluxe');
  const [selectedVehicle, setSelectedVehicle] = useState<'Sedan' | 'Innova Crysta' | 'Tempo Traveller'>('Innova Crysta');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activePhotoModalIndex, setActivePhotoModalIndex] = useState<number | null>(null);

  // Bento gallery images (5 images)
  const bentoPhotos = useMemo(() => {
    return getBentoGalleryPhotos(tour.primaryImage, tour.galleryImages);
  }, [tour]);

  // Price adjustment multipliers based on tier & vehicle
  const calculatedPrice = useMemo(() => {
    let tierMultiplier = 1;
    if (selectedTier === 'Standard') tierMultiplier = 0.85;
    if (selectedTier === 'Luxury') tierMultiplier = 1.45;

    let vehicleMultiplier = 1;
    if (selectedVehicle === 'Sedan') vehicleMultiplier = 0.9;
    if (selectedVehicle === 'Tempo Traveller') vehicleMultiplier = 1.35;

    const baseInr = tour.startingPriceINR;
    const baseUsd = tour.startingPriceUSD;

    return {
      inr: Math.round(baseInr * tierMultiplier * vehicleMultiplier),
      usd: Math.round(baseUsd * tierMultiplier * vehicleMultiplier)
    };
  }, [tour, selectedTier, selectedVehicle]);

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.title,
        text: `Check out this private tour with Satnam Voyages: ${tour.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const scrollToBookingForm = () => {
    const el = document.getElementById('itinerary-booking-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Structured Data (JSON-LD): TouristTrip + BreadcrumbList
  const tourJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://satnamvoyages.com/tours/${tour.slug}#trip`,
        "name": tour.title,
        "description": tour.overview,
        "touristType": ["Cultural Tourism", "Heritage Tourism"],
        "image": [tour.primaryImage, ...tour.galleryImages],
        "offers": {
          "@type": "Offer",
          "price": calculatedPrice.inr,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01"
        },
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": tour.itinerary.length,
          "itemListElement": tour.itinerary.map((day, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "TouristAttraction",
              "name": `Day ${day.day}: ${day.title}`,
              "description": day.description
            }
          }))
        },
        "provider": {
          "@type": "TravelAgency",
          "name": "Satnam Voyages",
          "url": "https://satnamvoyages.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://satnamvoyages.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tours Directory",
            "item": "https://satnamvoyages.com/tours"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": tour.title,
            "item": `https://satnamvoyages.com/tours/${tour.slug}`
          }
        ]
      }
    ]
  };

  const whatsappInquiryUrl = `https://wa.me/919718450905?text=${encodeURIComponent(
    `Hello Satnam Voyages! I am interested in booking "${tour.title}" (${tour.durationLabel}) for ${selectedTier} tier with a ${selectedVehicle}. Please share availability and best price.`
  )}`;

  // Related client moments
  const relevantMoments = CLIENT_MOMENTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-28 font-montserrat">
      <SEOHead
        title={`${tour.title} (${tour.durationLabel}) - Private Chauffeur Tour`}
        description={tour.overview.slice(0, 160)}
        canonicalPath={`/tours/${tour.slug}`}
        jsonLdSchema={tourJsonLd}
      />

      {/* Breadcrumbs Bar */}
      {/* <div className="bg-white border-b border-[#E8DFD3] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-stone-500 font-montserrat">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onNavigate('/tours')}
              className="hover:text-[#EA580C] flex items-center font-semibold"
            >
              <ChevronLeft className="w-4 h-4 mr-0.5" /> All Tours
            </button>
            <span>/</span>
            <span className="text-stone-400">{tour.category}</span>
            <span>/</span>
            <span className="text-stone-800 font-bold truncate max-w-xs sm:max-w-md">
              {tour.title}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleShare}
              className="flex items-center text-stone-600 hover:text-[#EA580C] font-semibold px-2.5 py-1 rounded-lg hover:bg-[#FAF6F0] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 mr-1" />
              <span>{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Title & Key Specs Header */}
      <div className="bg-white border-b border-[#E8DFD3] pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] font-bold text-xs uppercase tracking-wider font-headline">
                  {tour.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#E8DFD3] text-stone-700 text-xs font-semibold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-[#EA580C]" />
                  {tour.durationLabel}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center">
                  <Star className="w-3.5 h-3.5 fill-current mr-1 text-amber-500" />
                  {tour.rating} ({tour.reviewsCount} reviews)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  100% Private Group Tour
                </span>
              </div>

              <h1 className="font-headline text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1C1917] uppercase leading-tight">
                {tour.title}
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-4xl">
                {tour.subtitle}
              </p>

              <div className="flex items-center text-xs text-stone-600 pt-1">
                <MapPin className="w-4 h-4 text-[#EA580C] mr-1.5 shrink-0" />
                <span className="font-semibold text-stone-900 mr-1">Route:</span>
                <span className="truncate">{tour.route}</span>
              </div>
            </div>

            {/* Quick Price Pill & CTA */}
            <div className="flex items-center sm:items-end lg:flex-col lg:items-end justify-between bg-[#FAF6F0] p-4 rounded-2xl border border-[#E8DFD3]">
              {/* <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block font-headline">
                  Starting From
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-headline">
                  {formatPrice(calculatedPrice.inr, calculatedPrice.usd)}
                </span>
                <span className="text-xs text-stone-500 ml-1">/ person</span>
              </div> */}

              <button
                onClick={scrollToBookingForm}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 transition-all font-headline"
              >
                Fill Booking Form ↓
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODERN BENTO-BOX PHOTO GALLERY (Like Viator / Airbnb Luxe) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD3] shadow-md bg-stone-900">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 h-[340px] sm:h-[420px] lg:h-[480px]">
            {/* Primary Large Image (Takes 2 Columns) */}
            <div
              className="md:col-span-2 relative overflow-hidden group cursor-pointer h-full"
              onClick={() => setActivePhotoModalIndex(0)}
            >
              <img
                src={bentoPhotos[0]}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur text-white text-xs font-bold font-headline uppercase flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C] mr-1" />
                  Primary Circuit Highlight
                </span>
              </div>
            </div>

            {/* Sub-grid 2nd & 3rd images */}
            <div className="hidden md:flex flex-col gap-1.5 h-full">
              <div
                className="relative flex-1 overflow-hidden group cursor-pointer"
                onClick={() => setActivePhotoModalIndex(1)}
              >
                <img
                  src={bentoPhotos[1]}
                  alt={`${tour.title} highlight 1`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div
                className="relative flex-1 overflow-hidden group cursor-pointer"
                onClick={() => setActivePhotoModalIndex(2)}
              >
                <img
                  src={bentoPhotos[2]}
                  alt={`${tour.title} highlight 2`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
            </div>

            {/* Sub-grid 4th & 5th images */}
            <div className="hidden md:flex flex-col gap-1.5 h-full">
              <div
                className="relative flex-1 overflow-hidden group cursor-pointer"
                onClick={() => setActivePhotoModalIndex(3)}
              >
                <img
                  src={bentoPhotos[3]}
                  alt={`${tour.title} highlight 3`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div
                className="relative flex-1 overflow-hidden group cursor-pointer"
                onClick={() => setActivePhotoModalIndex(4)}
              >
                <img
                  src={bentoPhotos[4]}
                  alt={`${tour.title} highlight 4`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>

          {/* "View All Photos" Floating Badge */}
          <button
            onClick={() => setActivePhotoModalIndex(0)}
            className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-white/95 hover:bg-white text-stone-900 font-bold text-xs uppercase tracking-wider backdrop-blur shadow-lg transition-all flex items-center space-x-2 font-headline"
          >
            <Camera className="w-4 h-4 text-[#EA580C]" />
            <span>View All Photos ({bentoPhotos.length + tour.itinerary.length})</span>
          </button>
        </div>
      </div>

      {/* QUICK TRUST ATTRIBUTES STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DFD3] shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-montserrat">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-stone-900 font-headline uppercase text-[11px]">Private Chauffeur</strong>
              <span className="text-stone-500 text-[11px]">English speaking, uniformed</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-stone-900 font-headline uppercase text-[11px]">Free Cancellation</strong>
              <span className="text-stone-500 text-[11px]">Up to 48 hours prior</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-stone-900 font-headline uppercase text-[11px]">Doorstep Pickup</strong>
              <span className="text-stone-500 text-[11px]">Delhi Airport (T3) / Hotel</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-stone-900 font-headline uppercase text-[11px]">Tailored Itinerary</strong>
              <span className="text-stone-500 text-[11px]">100% customizable schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT: Content (Left) + Sticky Booking Form & Estimator (Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT 2 COLUMNS: Journey Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview & Trip Highlights */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block font-headline mb-1">
                  Introduction
                </span>
                <h2 className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase">
                  Journey Overview
                </h2>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-montserrat">
                {tour.overview}
              </p>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 font-headline">
                  Curated Tour Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-stone-700 bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DFD3]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2.5 shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DAY-BY-DAY ITINERARY WITH ATTRACTIVE IMAGES (Visual Big Travel Layout) */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DFD3] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block font-headline">
                    Complete Day-by-Day Schedule
                  </span>
                  <h2 className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase">
                    Detailed Itinerary ({tour.itinerary.length} Days)
                  </h2>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setExpandedDay(expandedDay === null ? 1 : null)}
                    className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] uppercase tracking-wider font-headline"
                  >
                    {expandedDay === null ? 'Expand All Days' : 'Collapse All'}
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                {tour.itinerary.map((day) => {
                  const isExpanded = expandedDay === day.day || expandedDay === 0;
                  const dayPhoto = getPhotoForItineraryDay(day.location, day.title, day.day);

                  return (
                    <div
                      key={day.day}
                      className="border border-[#E8DFD3] rounded-2xl overflow-hidden shadow-xs hover:border-[#EA580C]/40 transition-all bg-white"
                    >
                      {/* Day Header Trigger */}
                      <button
                        onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                        className="w-full text-left p-4 sm:p-5 bg-[#FAF6F0]/70 hover:bg-[#F5ECE0] flex items-center justify-between transition-colors gap-4"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="w-10 h-10 rounded-xl bg-[#EA580C] text-white font-bold text-sm flex items-center justify-center shrink-0 font-headline shadow-sm">
                            Day {day.day}
                          </span>
                          <div>
                            <h4 className="font-bold text-[#1C1917] text-sm sm:text-base font-headline uppercase leading-snug">
                              {day.title}
                            </h4>
                            <div className="flex items-center space-x-3 mt-1 text-xs text-stone-500 font-montserrat">
                              <span className="text-[#EA580C] font-semibold flex items-center">
                                <MapPin className="w-3.5 h-3.5 mr-1" />
                                {day.location}
                              </span>
                              {day.stayCity && (
                                <span>• Stay: <strong className="text-stone-800">{day.stayCity}</strong></span>
                              )}
                              {day.mealsIncluded && (
                                <span className="hidden sm:inline">• Meals: <strong className="text-stone-800">{day.mealsIncluded}</strong></span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0">
                          <span className="text-[11px] text-stone-400 uppercase font-bold hidden sm:inline font-headline">
                            {isExpanded ? 'Hide' : 'View Details'}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-stone-500 transition-transform ${
                              isExpanded ? 'rotate-180 text-[#EA580C]' : ''
                            }`}
                          />
                        </div>
                      </button>

                      {/* Day Expanded Body with Photo */}
                      {isExpanded && (
                        <div className="p-5 sm:p-6 border-t border-stone-100 bg-white font-montserrat space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
                            {/* Day Photo Thumbnail */}
                            <div className="sm:col-span-1 rounded-2xl overflow-hidden h-48 sm:h-44 bg-stone-900 border border-[#E8DFD3] relative group">
                              <img
                                src={dayPhoto}
                                alt={`Day ${day.day}: ${day.title}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                              <span className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur uppercase">
                                {day.location}
                              </span>
                            </div>

                            {/* Day Narrative Content */}
                            <div className="sm:col-span-2 space-y-3">
                              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                                {day.description}
                              </p>

                              {day.highlights && day.highlights.length > 0 && (
                                <div>
                                  <span className="font-bold text-[#1C1917] text-xs block mb-1.5 font-headline uppercase">
                                    Key Sightseeing &amp; Activities:
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {day.highlights.map((sight, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-[#FAF6F0] text-[#EA580C] text-xs font-semibold border border-[#E8DFD3] flex items-center"
                                      >
                                        ★ {sight}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-500 border-t border-stone-100">
                                <span>Chauffeur: <strong>Dedicated Private AC Vehicle</strong></span>
                                <span>Hotel: <strong>{selectedTier} Tier</strong></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* FLEET OPTIONS ON THIS ITINERARY */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block font-headline mb-1">
                  Private Transportation Fleet
                </span>
                <h2 className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase">
                  Available Chauffeur Vehicles
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Sedan (Dzire / Etios)',
                    capacity: 'Up to 3 Passengers + 2 Bags',
                    ideal: 'Couples & Solo Travelers',
                    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
                    features: ['AC', 'Mineral Water', 'Luggage Boot']
                  },
                  {
                    name: 'Toyota Innova Crysta SUV',
                    capacity: 'Up to 6 Passengers + 4 Bags',
                    ideal: 'Families & Small Groups (Most Popular)',
                    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
                    features: ['Dual AC', 'Captain Seats', 'Highway Smooth']
                  },
                  {
                    name: '12-Seater Luxury Tempo',
                    capacity: 'Up to 12 Passengers + 10 Bags',
                    ideal: 'Large Family Groups & Friends',
                    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
                    features: ['Pushback Seats', 'Individual AC Vents', 'Big Luggage Space']
                  }
                ].map((v, i) => (
                  <div key={i} className="bg-[#FAF6F0] rounded-2xl border border-[#E8DFD3] overflow-hidden p-4 space-y-3 flex flex-col justify-between">
                    <div className="h-32 rounded-xl overflow-hidden bg-stone-200">
                      <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm font-headline uppercase">{v.name}</h4>
                      <p className="text-[11px] text-[#EA580C] font-semibold mt-0.5">{v.capacity}</p>
                      <p className="text-xs text-stone-500 mt-1">{v.ideal}</p>
                    </div>
                    <div className="pt-2 border-t border-[#E8DFD3] flex flex-wrap gap-1">
                      {v.features.map((f, fi) => (
                        <span key={fi} className="text-[10px] bg-white px-2 py-0.5 rounded-md border border-[#E8DFD3] text-stone-600">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-sm space-y-6">
              <h2 className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase">
                What's Included &amp; Excluded
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-3">
                  <h3 className="text-xs font-bold text-[#EA580C] uppercase tracking-wider flex items-center font-headline">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-1.5" />
                    Included in Your Tour
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-montserrat">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center font-headline">
                    <XCircle className="w-4 h-4 text-rose-500 mr-1.5" />
                    Not Included
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-montserrat">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start">
                        <XCircle className="w-4 h-4 text-rose-500 mr-2 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* EMBEDDED DIRECT BOOKING & CUSTOMIZATION FORM SECTION */}
            <section id="itinerary-booking-form-section" className="scroll-mt-24">
              <ItineraryBookingForm
                tourTitle={tour.title}
                tourSlug={tour.slug}
                durationLabel={tour.durationLabel}
                defaultTier={selectedTier}
                defaultVehicle={selectedVehicle}
                estimatedPriceINR={calculatedPrice.inr}
                estimatedPriceUSD={calculatedPrice.usd}
                currency={currency}
                isCompactSidebar={false}
              />
            </section>

            {/* CLIENT REVIEWS & MOMENTS FOR THIS ITINERARY */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD3] shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block font-headline">
                    Guest Memories
                  </span>
                  <h2 className="font-headline text-2xl font-extrabold text-[#1C1917] uppercase">
                    Traveler Reviews &amp; Photos
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="text-xs font-bold text-[#EA580C] hover:text-[#C2410C] uppercase tracking-wider font-headline"
                >
                  View Full Gallery →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relevantMoments.map((m) => (
                  <div key={m.id} className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#E8DFD3] space-y-3 flex flex-col justify-between">
                    <div className="h-36 rounded-xl overflow-hidden bg-stone-200">
                      <img src={m.image} alt={m.clientName} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-stone-900 font-headline flex items-center">
                          {m.clientName} <span className="ml-1">{m.clientFlag}</span>
                        </span>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 italic font-montserrat line-clamp-3">
                        "{m.reviewQuote}"
                      </p>
                    </div>
                    <span className="text-[11px] text-[#EA580C] font-semibold pt-1 border-t border-[#E8DFD3]">
                      Chauffeur: {m.chauffeurName}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR: Sticky Interactive Customizer + Compact Booking Form */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Customization Options Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DFD3] shadow-md space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA580C] block font-headline">
                  Live Price Customizer
                </span>
                <h3 className="font-headline text-xl font-extrabold text-[#1C1917] uppercase">
                  Select Travel Preferences
                </h3>
              </div>

              {/* 1. Hotel Tier Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2 flex items-center font-headline">
                  <Hotel className="w-3.5 h-3.5 text-[#EA580C] mr-1.5" />
                  Accommodation Level
                </label>
                <div className="grid grid-cols-3 gap-2 font-montserrat">
                  {(['Standard', 'Deluxe', 'Luxury'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTier(t)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        selectedTier === t
                          ? 'border-[#EA580C] bg-orange-50 text-[#1C1917] font-bold shadow-xs'
                          : 'border-stone-200 text-stone-600 hover:bg-[#FAF6F0]'
                      }`}
                    >
                      <span className="block text-xs font-semibold">{t}</span>
                      <span className="block text-[10px] text-stone-400">
                        {t === 'Standard' ? '3-Star' : t === 'Deluxe' ? '4-Star' : '5-Star Heritage'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Vehicle Preference */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2 flex items-center font-headline">
                  <Car className="w-3.5 h-3.5 text-[#EA580C] mr-1.5" />
                  Vehicle Preference
                </label>
                <div className="space-y-2 font-montserrat">
                  {[
                    { name: 'Sedan', desc: 'Maruti Dzire / Etios (Up to 3 Pax)' },
                    { name: 'Innova Crysta', desc: 'Toyota Innova Crysta SUV (Up to 6 Pax)' },
                    { name: 'Tempo Traveller', desc: '12-Seater Maharaja Luxury Tempo' }
                  ].map((v) => (
                    <div
                      key={v.name}
                      onClick={() => setSelectedVehicle(v.name as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedVehicle === v.name
                          ? 'border-[#EA580C] bg-orange-50 text-[#1C1917]'
                          : 'border-stone-200 text-stone-600 hover:bg-[#FAF6F0]'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-bold text-[#1C1917]">{v.name}</span>
                        <span className="block text-[11px] text-stone-500">{v.desc}</span>
                      </div>
                      <input
                        type="radio"
                        checked={selectedVehicle === v.name}
                        onChange={() => {}}
                        className="accent-[#EA580C] text-[#EA580C] focus:ring-[#EA580C]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Price Display */}
              {/* <div className="p-4 rounded-2xl bg-[#141210] text-white space-y-1">
                <div className="flex justify-between items-baseline font-headline">
                  <span className="text-xs text-stone-400 font-medium">Estimated Per Person</span>
                  <span className="text-2xl font-extrabold text-orange-400">
                    {formatPrice(calculatedPrice.inr, calculatedPrice.usd)}
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 font-montserrat">
                  Includes private chauffeur, AC vehicle fuel, tolls, permits, and {selectedTier} category stay.
                </p>
              </div> */}

              {/* Primary CTAs */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={scrollToBookingForm}
                  className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/20 flex items-center justify-center space-x-2 transition-all font-headline"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Fill Booking Form Online</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center space-x-2 transition-all font-headline"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Quick WhatsApp Inquire</span>
                </a>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center space-x-2 text-xs text-stone-500 font-montserrat">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
                <span>Zero advance deposit needed to receive quote</span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DFD3] space-y-3 font-montserrat">
              <h4 className="font-headline text-xs font-bold text-stone-900 uppercase tracking-wider">
                Need Help Customizing?
              </h4>
              <p className="text-xs text-stone-600">
                Speak directly with our senior tour manager for custom hotel upgrades or route modifications.
              </p>
              <div className="space-y-1 text-xs">
                <a href="tel:+919718450905" className="flex items-center text-stone-800 font-bold hover:text-[#EA580C]">
                  <Phone className="w-3.5 h-3.5 text-[#EA580C] mr-2 shrink-0" />
                  +91 97184 50905 (24/7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Photos */}
      {activePhotoModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhotoModalIndex(null)}
        >
          <div
            className="max-w-4xl w-full bg-black rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[480px] sm:h-[540px]">
              <img
                src={bentoPhotos[activePhotoModalIndex % bentoPhotos.length]}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePhotoModalIndex(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close photo modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/70 backdrop-blur p-3 rounded-xl">
                <span className="font-bold font-headline uppercase">{tour.title}</span>
                <span>Photo {activePhotoModalIndex + 1} of {bentoPhotos.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DFD3] px-4 py-2.5 shadow-lg flex items-center justify-between font-montserrat">
        <div>
          <span className="text-[10px] text-stone-400 uppercase font-bold block font-headline">Starting Quote</span>
          <span className="text-base font-extrabold text-[#1C1917] font-headline">
            {formatPrice(calculatedPrice.inr, calculatedPrice.usd)}
          </span>
          <span className="text-[10px] text-stone-500 ml-1">/ person</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={scrollToBookingForm}
            className="px-3.5 py-2 rounded-xl bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider font-headline"
          >
            Book Form
          </button>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center uppercase tracking-wider font-headline"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
