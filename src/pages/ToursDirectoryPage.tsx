import React, { useState } from 'react';
import { Search, Star, MapPin, ArrowRight, Filter, Compass, Clock, CheckCircle2 } from 'lucide-react';
import { ALL_TOURS } from '../data/toursData';
import { Currency, TourPackage } from '../types';
import { SEOHead } from '../components/SEOHead';

interface ToursDirectoryPageProps {
  onNavigate: (path: string) => void;
  currency: Currency;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const ToursDirectoryPage: React.FC<ToursDirectoryPageProps> = ({
  onNavigate,
  currency,
  onOpenInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');

  const categories = ['All', 'Golden Triangle', 'Rajasthan', 'Himachal', 'Uttarakhand', 'Same Day', 'Central India'];

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') return `$${usd}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  // Filter and Sort
  const filteredTours = ALL_TOURS.filter((tour) => {
    const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
    const matchesSearch =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.startingPriceINR - b.startingPriceINR;
    if (sortBy === 'price-desc') return b.startingPriceINR - a.startingPriceINR;
    if (sortBy === 'duration') return a.durationDays - b.durationDays;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  // JSON-LD ItemList Schema for Tour Directory
  const toursDirectoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Satnam Voyages India Tour Packages Directory",
    "description": "All 16 premier private tour packages across the Golden Triangle, Rajasthan, Himachal Pradesh, Uttarakhand, and Central India.",
    "numberOfItems": ALL_TOURS.length,
    "itemListElement": ALL_TOURS.map((tour, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "name": tour.title,
        "description": tour.overview,
        "url": `https://satnamvoyages.com/tours/${tour.slug}`,
        "image": tour.primaryImage,
        "touristType": "Cultural Tourism",
        "offers": {
          "@type": "Offer",
          "price": tour.startingPriceINR,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <SEOHead
        title="All 16 Tour Packages — Golden Triangle, Rajasthan, Himachal & Uttarakhand"
        description="Browse all 16 private guided tour packages by Satnam Voyages. Dedicated chauffeur, sanitized AC cabs, flexible custom itineraries, and 5-star verified service."
        canonicalPath="/tours"
        jsonLdSchema={toursDirectoryJsonLd}
      />

      {/* Directory Header Banner */}
      <div className="bg-[#141210] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-wider block mb-2 font-headline">
              Bespoke Private Chauffeur Itineraries
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
              All Tour Packages ({ALL_TOURS.length})
            </h1>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed font-montserrat">
              Explore our complete collection of 16 handcrafted tours across India’s most celebrated heritage, wildlife, mountain, and spiritual circuits. Every package is fully customizable.
            </p>
          </div>

          {/* Search & Sort Controls Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-2 relative">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages by destination, city or keyword (e.g. Taj Mahal, Manali, Tiger, Udaipur)..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#201D1A] border border-stone-700 text-white placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full py-3 px-3.5 rounded-xl bg-[#201D1A] border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
              >
                <option value="featured">Sort: Featured &amp; Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Duration: Shortest to Longest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="sticky top-20 z-20 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8DFD3] py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-stone-400 uppercase mr-1 hidden sm:inline flex items-center font-headline">
              <Filter className="w-3 h-3 mr-1" /> Circuits:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all font-montserrat ${
                  selectedCategory === cat
                    ? 'bg-[#EA580C] text-white shadow-md shadow-orange-600/20 font-bold'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E8DFD3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6 text-xs text-stone-500 font-medium font-montserrat">
          <span>Showing {filteredTours.length} of {ALL_TOURS.length} packages</span>
          <span>Prices shown per person (Double Occupancy)</span>
        </div>

        {filteredTours.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#E8DFD3]">
            <Compass className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-900 font-headline uppercase">No tour packages match your search.</h3>
            <p className="text-stone-500 text-xs mt-1">Try another search keyword or select [All] categories.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#EA580C] text-white font-bold rounded-xl text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, idx) => (
              <div
                key={tour.id}
                id={`tour-package-card-${tour.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DFD3] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={tour.primaryImage}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-white text-xs font-semibold flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-orange-400" />
                      {tour.durationLabel}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-amber-500 text-xs font-bold flex items-center shadow-sm border border-amber-100">
                      <Star className="w-3.5 h-3.5 fill-current mr-1 text-amber-500" />
                      {tour.rating}
                    </div>

                    <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-[#EA580C]/90 text-white text-[10px] font-bold uppercase tracking-wider font-headline">
                      #{idx + 1} • {tour.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-[#1C1917] group-hover:text-[#EA580C] transition-colors leading-snug font-headline uppercase">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1.5 font-medium flex items-center">
                      <MapPin className="w-3.5 h-3.5 text-[#EA580C] mr-1 shrink-0" />
                      <span className="truncate">{tour.route}</span>
                    </p>
                    <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 font-montserrat leading-relaxed">
                      {tour.overview}
                    </p>

                    {/* Highlights pill tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center text-[10px] bg-[#FAF6F0] border border-[#E8DFD3] text-stone-700 px-2 py-0.5 rounded font-medium"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#EA580C] mr-1" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    {/* <div>
                      <span className="text-[10px] text-stone-400 uppercase font-bold block font-headline">Starting From</span>
                      <span className="text-lg font-extrabold text-[#1C1917] font-headline">
                        {formatPrice(tour.startingPriceINR, tour.startingPriceUSD)}
                      </span>
                      <span className="text-[11px] text-stone-500 ml-1">/ person</span>
                    </div> */}

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onNavigate(`/tours/${tour.slug}`)}
                        className="px-3.5 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold transition-colors inline-flex items-center uppercase tracking-wider"
                      >
                        <span>Itinerary</span>
                        <ArrowRight className="w-3 h-3 ml-1 text-orange-200" />
                      </button>
                      <button
                        onClick={() => onOpenInquiry(tour.title)}
                        className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold transition-colors uppercase tracking-wider"
                        title="Quick Quote on WhatsApp"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
