import React, { useState } from 'react';
import { Camera, MapPin, X, ChevronLeft, ChevronRight, MessageSquare, Car, ExternalLink, Sparkles } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'forts' | 'himalayas' | 'spiritual' | 'fleet';
  categoryLabel: string;
  image: string;
  caption: string;
  tourSlug?: string;
  tourName?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Taj Mahal at Sunrise',
    location: 'Agra, Uttar Pradesh',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    caption: 'Pure white Makrana marble reflecting the golden sunrise hues over the Yamuna River.',
    tourSlug: 'golden-triangle-tour',
    tourName: 'Golden Triangle Tour'
  },
  {
    id: 'gal-2',
    title: 'Hawa Mahal — Palace of Winds',
    location: 'Jaipur, Rajasthan',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    caption: '953 latticework honeycomb windows carved from pink and red sandstone in the heart of the Pink City.',
    tourSlug: 'same-day-delhi-jaipur-tour',
    tourName: 'Same Day Delhi • Jaipur Tour'
  },
  {
    id: 'gal-3',
    title: 'Amber Fort & Maota Lake',
    location: 'Jaipur, Rajasthan',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Majestic Rajput hilltop citadel overlooking serene waters, featuring mirror-mosaic Sheesh Mahal.',
    tourSlug: 'delhi-agra-jaipur-udaipur-tour',
    tourName: 'Delhi • Agra • Jaipur • Udaipur Tour'
  },
  {
    id: 'gal-4',
    title: 'Lake Pichola & City Palace',
    location: 'Udaipur, Rajasthan',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    caption: 'The Venice of the East bathed in afternoon Mediterranean-like golden glow over tranquil royal waters.',
    tourSlug: 'jaipur-jodhpur-udaipur-tour',
    tourName: 'Jaipur • Jodhpur • Udaipur Tour'
  },
  {
    id: 'gal-5',
    title: 'Mehrangarh Fort & The Blue City',
    location: 'Jodhpur, Rajasthan',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Towering 400 feet above the cobalt blue rooftops of Jodhpur, guarding centuries of Marwar valour.',
    tourSlug: 'jaipur-jodhpur-jaisalmer-tour',
    tourName: 'Jaipur • Jodhpur • Jaisalmer Tour'
  },
  {
    id: 'gal-6',
    title: 'Golden Sand Dunes & Desert Safari',
    location: 'Jaisalmer, Thar Desert',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sunset camel caravans sweeping across the shimmering undulating ripples of Sam Sand Dunes.',
    tourSlug: 'rajasthan-heritage-tour',
    tourName: 'Rajasthan Heritage Tour'
  },
  {
    id: 'gal-7',
    title: 'Snow Peaks of Solang & Rohtang',
    location: 'Manali, Himachal Pradesh',
    category: 'himalayas',
    categoryLabel: 'Himalayas & Alpine',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp alpine air, pine-scented mountain valleys, and snow-draped Pir Panjal ranges.',
    tourSlug: 'shimla-manali-tour',
    tourName: 'Shimla • Manali Tour'
  },
  {
    id: 'gal-8',
    title: 'Kasol & The Parvati River Rapids',
    location: 'Parvati Valley, Himachal Pradesh',
    category: 'himalayas',
    categoryLabel: 'Himalayas & Alpine',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80',
    caption: 'Turquoise glacial waters rushing through deodar forests in India’s serene bohemian mountain sanctuary.',
    tourSlug: 'shimla-manali-kasol-tour',
    tourName: 'Shimla • Manali • Kasol Tour'
  },
  {
    id: 'gal-9',
    title: 'Manikaran Sahib Sacred Hot Springs',
    location: 'Kullu, Himachal Pradesh',
    category: 'himalayas',
    categoryLabel: 'Himalayas & Alpine',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    caption: 'Centuries-old geothermal mineral springs revered in Sikh and Hindu pilgrimage traditions.',
    tourSlug: 'manali-kasol-manikaran-tour',
    tourName: 'Manali • Kasol • Manikaran Tour'
  },
  {
    id: 'gal-10',
    title: 'Divine Evening Ganga Aarti',
    location: 'Haridwar & Rishikesh, Uttarakhand',
    category: 'spiritual',
    categoryLabel: 'Spiritual & Sacred',
    image: 'https://images.unsplash.com/photo-1511754863001-18d44abd0a93?auto=format&fit=crop&w=1200&q=80',
    caption: 'Thousands of floating brass oil lamps and Vedic chants harmonizing along sacred river ghats at dusk.',
    tourSlug: 'rishikesh-haridwar-tour',
    tourName: 'Rishikesh • Haridwar Tour'
  },
  {
    id: 'gal-11',
    title: 'Beatles Ashram & Suspension Bridge',
    location: 'Rishikesh, Uttarakhand',
    category: 'spiritual',
    categoryLabel: 'Spiritual & Sacred',
    image: 'https://images.unsplash.com/photo-1712510817140-917938f92e5b?auto=format&fit=crop&w=1200&q=80',
    caption: 'The tranquil foothills of the Garhwal Himalayas where river spirituality meets world meditation.',
    tourSlug: 'rishikesh-haridwar-mussoorie-tour',
    tourName: 'Rishikesh • Haridwar • Mussoorie Tour'
  },
  {
    id: 'gal-12',
    title: 'UNESCO Temples of Khajuraho & Orchha',
    location: 'Madhya Pradesh',
    category: 'spiritual',
    categoryLabel: 'Spiritual & Sacred',
    image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?auto=format&fit=crop&w=1200&q=80',
    caption: 'Intricately sculptured sandstone nagara temples and medieval riverside palaces of Orchha.',
    tourSlug: 'gwalior-orchha-khajuraho-tour',
    tourName: 'Gwalior • Orchha • Khajuraho Tour'
  },
  {
    id: 'gal-13',
    title: 'Luxury Chauffeur Highway Cruising',
    location: 'Yamuna & Delhi-Mumbai Expressways',
    category: 'fleet',
    categoryLabel: 'Chauffeur Fleet',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    caption: 'Pristine, sanitized Toyota Innova Crysta cruising intercity expressways with English-speaking chauffeurs.',
    tourSlug: 'cabs',
    tourName: 'Outstation Cabs Fleet'
  },
  {
    id: 'gal-14',
    title: 'Royal Bengal Tiger Safari',
    location: 'Ranthambore National Park, Rajasthan',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Open-top 4x4 safari tracking elusive wild Bengal tigers beneath the ancient Ranthambore Fort ruins.',
    tourSlug: 'golden-triangle-ranthambore',
    tourName: 'Golden Triangle + Ranthambore'
  },
  {
    id: 'gal-15',
    title: 'Humayun’s Tomb & Mughal Gardens',
    location: 'New Delhi',
    category: 'forts',
    categoryLabel: 'Royal Forts & Palaces',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    caption: 'The red sandstone precursor to the Taj Mahal framed by symmetrical Mughal charbagh water channels.',
    tourSlug: 'delhi-sightseeing-old-and-new',
    tourName: 'Delhi Sightseeing Old and New'
  },
  {
    id: 'gal-16',
    title: 'Misty Ridges of Mussoorie',
    location: 'Mussoorie, Uttarakhand',
    category: 'himalayas',
    categoryLabel: 'Himalayas & Alpine',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    caption: 'The Queen of Hills overlooking the Doon Valley and Shivalik mountain ranges under warm sunset skies.',
    tourSlug: 'rishikesh-mussoorie-tour',
    tourName: 'Rishikesh • Mussoorie Tour'
  }
];

interface GallerySectionProps {
  onNavigate?: (path: string) => void;
  onOpenInquiry?: (packageTitle?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Highlights' },
    { id: 'forts', label: 'Royal Forts & Palaces' },
    { id: 'himalayas', label: 'Himalayas & Alpine' },
    { id: 'spiritual', label: 'Spiritual & Sacred' },
    { id: 'fleet', label: 'Chauffeur Fleet' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleBooking = (item: GalleryItem) => {
    if (onOpenInquiry) {
      onOpenInquiry(item.tourName || item.title);
    } else if (onNavigate && item.tourSlug) {
      onNavigate(item.tourSlug === 'cabs' ? '/cabs' : `/tours/${item.tourSlug}`);
    }
    setSelectedItemIndex(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#FAF6F0] relative overflow-hidden border-t border-[#E8DFD3]">
      {/* Subtle warm sunny backdrop glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Strict Montserrat + Playfair Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#EA580C]/20 text-[#EA580C] text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Voyage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1917] tracking-tight uppercase font-headline">
            DISCOVER INCREDIBLE INDIA{' '}
            <span className="font-accent lowercase italic text-[#EA580C] tracking-normal block sm:inline font-normal">
              through the lens
            </span>
          </h2>

          <p className="mt-4 text-[#57534E] text-sm sm:text-base leading-relaxed font-montserrat">
            A curated visual anthology of royal Mughal fortresses, sacred river ghats, snow-crowned Himalayan valleys, and luxury private chauffeur journeys.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate && onNavigate('/gallery')}
              className="px-5 py-2.5 rounded-xl bg-[#1C1917] hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all inline-flex items-center space-x-2 font-headline"
            >
              <span>📸 View Dedicated Client Moments Page ({50}+ Real Guest Photos)</span>
              <ChevronRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#EA580C] text-white shadow-md shadow-orange-500/20 scale-105 font-bold'
                    : 'bg-white text-[#57534E] border border-[#E8DFD3] hover:border-[#EA580C]/40 hover:text-[#EA580C] hover:bg-[#FFF7ED]/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-200 border border-[#E8DFD3] shadow-sm hover:shadow-xl hover:border-[#EA580C]/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Category pill on top-left */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-[#141210]/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* View zoom icon on top-right */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <p className="flex items-center text-amber-300 text-xs font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 mr-1 shrink-0 text-[#EA580C]" />
                  <span className="truncate">{item.location}</span>
                </p>
                <h3 className="font-bold text-base text-white leading-snug group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A1816] via-[#2A2420] to-[#1A1816] border border-[#E8DFD3]/20 shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-600/30">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                Live Your Own Photographic Journey
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold uppercase font-headline text-white mt-0.5">
                Ready to Experience These Sights in Person?
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Every tour includes private chauffeur transport, custom photo-stop itineraries, and sunrise access.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('/gallery')}
                className="px-5 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all font-headline"
              >
                Explore Client Gallery
              </button>
            )}
            {onNavigate && (
              <button
                onClick={() => onNavigate('/tours')}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all font-headline"
              >
                All 16 Tours
              </button>
            )}
            <a
              href="https://wa.me/919718450905?text=Hello%20Satnam%20Voyages%2C%20I%20saw%20your%20photo%20gallery%20and%20would%20like%20to%20plan%20a%20private%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/25 flex items-center space-x-2 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div> 
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedItem !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141210]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#1C1917] rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#141210]/80 text-white hover:bg-[#EA580C] flex items-center justify-center transition-colors border border-white/20"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#141210]/80 text-white hover:bg-[#EA580C] flex items-center justify-center transition-colors border border-white/20"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right/Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 lg:right-[360px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#141210]/80 text-white hover:bg-[#EA580C] flex items-center justify-center transition-colors border border-white/20"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Stage */}
            <div className="flex-1 relative bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
              <div className="absolute bottom-3 left-4 text-xs font-mono text-white/70 bg-black/60 px-3 py-1 rounded-full">
                {(selectedItemIndex ?? 0) + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="w-full lg:w-[350px] p-6 sm:p-8 bg-[#1C1917] text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#EA580C]/20 border border-[#EA580C]/40 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  {selectedItem.categoryLabel}
                </span>

                <h3 className="font-headline text-2xl font-extrabold text-white leading-tight mb-2 uppercase">
                  {selectedItem.title}
                </h3>

                <p className="flex items-center text-amber-300 text-sm font-semibold mb-4">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#EA580C]" />
                  <span>{selectedItem.location}</span>
                </p>

                <p className="text-stone-300 text-sm leading-relaxed mb-6 font-montserrat">
                  {selectedItem.caption}
                </p>

                {selectedItem.tourName && (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                      Featured in Tour Package:
                    </span>
                    <span className="text-sm font-bold text-amber-200 block">
                      {selectedItem.tourName}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleBooking(selectedItem)}
                  className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center space-x-2"
                >
                  <Car className="w-4 h-4" />
                  <span>Book Tour for this Destination</span>
                </button>

                <a
                  href={`https://wa.me/919718450905?text=Hello%20Satnam%20Voyages%2C%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(selectedItem.title)}%20in%20${encodeURIComponent(selectedItem.location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
