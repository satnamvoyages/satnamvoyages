import React, { useState } from 'react';
import {
  Camera,
  Star,
  MapPin,
  Calendar,
  Car,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  ShieldCheck,
  UploadCloud,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { CLIENT_MOMENTS, ClientMoment } from '../data/clientPhotosData';
import { GALLERY_ITEMS, GalleryItem } from '../components/GallerySection';
import { SEOHead } from '../components/SEOHead';

interface GalleryPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'clients' | 'destinations'>('clients');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ClientMoment | null>(null);
  const [likedMoments, setLikedMoments] = useState<Record<string, boolean>>({});

  // Submission Form State for "Share Your Journey"
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitForm, setSubmitForm] = useState({
    name: '',
    email: '',
    tourTaken: 'Golden Triangle Tour',
    date: '',
    rating: 5,
    story: '',
    photoUploaded: false
  });

  const categories = [
    { id: 'all', label: 'All Guest Moments' },
    { id: 'couples', label: 'Couples & Honeymoons' },
    { id: 'families', label: 'Families & Groups' },
    { id: 'solo', label: 'Solo Explorers' },
    { id: 'chauffeurs', label: 'Guests with Chauffeurs' },
    { id: 'culture', label: 'Spiritual & Culture' },
  ];

  const filteredMoments = selectedCategory === 'all'
    ? CLIENT_MOMENTS
    : CLIENT_MOMENTS.filter((item) => item.category === selectedCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMoments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitForm.name || !submitForm.story) return;
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setSubmitForm({
        name: '',
        email: '',
        tourTaken: 'Golden Triangle Tour',
        date: '',
        rating: 5,
        story: '',
        photoUploaded: false
      });
    }, 5000);
  };

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Satnam Voyages Real Client Travel Photo Gallery",
    "description": "Authentic travel moments, guest reviews, and scenic photographs taken by real travelers across Golden Triangle, Rajasthan, Himachal and Uttarakhand with Satnam Voyages.",
    "url": "https://satnamvoyages.com/gallery"
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24 font-montserrat">
      <SEOHead
        title="Client Photo Gallery & Real Traveler Moments"
        description="Browse genuine photos and stories from international and domestic travelers who experienced India with Satnam Voyages private tours and chauffeur cabs."
        canonicalPath="/gallery"
        jsonLdSchema={galleryJsonLd}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-[#E8DFD3] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-stone-500 font-montserrat">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#EA580C] flex items-center font-semibold"
          >
            <ChevronLeft className="w-4 h-4 mr-0.5" /> Home
          </button>
          <span>/</span>
          <span className="text-[#1C1917] font-bold">Client Moments Gallery</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="relative bg-[#141210] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80"
            alt="Rajasthan Forts Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/30 text-amber-200 text-xs font-semibold backdrop-blur font-headline uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>100% Genuine Guest Memories • Verified Travelers</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            REAL TRAVELERS. UNFORGETTABLE JOURNEYS.
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-montserrat">
            See India through the eyes of our guests from the UK, USA, Europe, Australia, and across the globe. Real smiles in front of the Taj Mahal, desert camps, and Himalayan mountain passes.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-stone-300 font-montserrat">
            <div className="flex items-center space-x-2 bg-[#201D1A]/80 px-4 py-2 rounded-xl border border-stone-800">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="font-bold text-white">4.92 / 5</span>
              <span className="text-stone-400">(1,450+ Verified Reviews)</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#201D1A]/80 px-4 py-2 rounded-xl border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span className="font-bold text-white">100% Private Fleet</span>
              <span className="text-stone-400">(Dedicated Chauffeurs)</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#201D1A]/80 px-4 py-2 rounded-xl border border-stone-800">
              <Camera className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">500+ Client Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs & Category Filter Bar */}
      <div className="sticky top-20 z-20 bg-[#FAF6F0]/95 backdrop-blur border-b border-[#E8DFD3] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Main Mode Toggle: Client Photos vs Scenic Highlights */}
            <div className="flex rounded-xl bg-white p-1 border border-[#E8DFD3] shadow-inner text-xs font-bold uppercase tracking-wider font-headline">
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'clients'
                    ? 'bg-[#EA580C] text-white shadow'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                📸 Client Moments ({CLIENT_MOMENTS.length})
              </button>
              <button
                onClick={() => setActiveTab('destinations')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'destinations'
                    ? 'bg-[#EA580C] text-white shadow'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                🏛️ Sights &amp; Monuments ({GALLERY_ITEMS.length})
              </button>
            </div>

            {/* Category Filter Pills */}
            {activeTab === 'clients' && (
              <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all uppercase tracking-wide font-headline ${
                      selectedCategory === cat.id
                        ? 'bg-[#1C1917] text-white shadow-sm'
                        : 'bg-white border border-[#E8DFD3] text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'clients' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMoments.map((moment) => {
              const isLiked = likedMoments[moment.id];
              return (
                <div
                  key={moment.id}
                  onClick={() => setActiveModalItem(moment)}
                  className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  {/* Image Card Container */}
                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img
                      src={moment.image}
                      alt={moment.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20"></div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-white text-[11px] font-bold font-headline uppercase flex items-center">
                        <MapPin className="w-3 h-3 text-[#EA580C] mr-1" />
                        {moment.destination}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleLike(moment.id, e)}
                      aria-label="Like photo"
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur transition-all ${
                        isLiked ? 'bg-rose-500 text-white' : 'bg-black/50 text-white hover:bg-black/80'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>

                    {/* Bottom overlay with Tour Name */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block font-headline">
                        {moment.tourName}
                      </span>
                      <p className="text-xs text-stone-200 line-clamp-1 font-medium font-montserrat">
                        "{moment.caption}"
                      </p>
                    </div>
                  </div>

                  {/* Client Info & Testimonial Details */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <img
                            src={moment.avatar}
                            alt={moment.clientName}
                            className="w-9 h-9 rounded-full object-cover border border-[#E8DFD3]"
                          />
                          <div>
                            <h3 className="font-bold text-stone-900 text-sm font-headline flex items-center">
                              {moment.clientName}
                              <span className="ml-1.5 text-sm" title={moment.clientCountry}>{moment.clientFlag}</span>
                            </h3>
                            <span className="text-[11px] text-stone-500 block font-montserrat">
                              {moment.clientCountry} • {moment.travelDate}
                            </span>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex text-amber-400">
                          {[...Array(moment.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 italic font-montserrat line-clamp-3 bg-[#FAF6F0] p-3 rounded-xl border border-[#E8DFD3]/60">
                        "{moment.reviewQuote}"
                      </p>
                    </div>

                    {/* Chauffeur & Vehicle Tag */}
                    <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between text-[11px] text-stone-500 font-montserrat">
                      <span className="flex items-center text-stone-700 font-medium">
                        <Car className="w-3.5 h-3.5 text-[#EA580C] mr-1.5 shrink-0" />
                        Chauffeur: <strong className="ml-1 text-stone-900">{moment.chauffeurName}</strong>
                      </span>
                      <span className="text-[#EA580C] font-bold group-hover:translate-x-0.5 transition-transform flex items-center text-xs font-headline">
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Sights & Monuments Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#141210]/80 backdrop-blur text-white text-[11px] font-bold font-headline uppercase">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base font-headline uppercase">{item.title}</h3>
                    <p className="text-xs text-stone-300 flex items-center font-montserrat">
                      <MapPin className="w-3 h-3 text-[#EA580C] mr-1" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-stone-600 font-montserrat leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium font-montserrat">
                      Featured in: <strong className="text-stone-800">{item.tourName}</strong>
                    </span>
                    <button
                      onClick={() => onNavigate(item.tourSlug === 'cabs' ? '/cabs' : `/tours/${item.tourSlug}`)}
                      className="px-3 py-1.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider font-headline"
                    >
                      View Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guest Story Submission Form Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl border border-[#E8DFD3] shadow-md p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-bold uppercase tracking-wider font-headline">
                <UploadCloud className="w-4 h-4 mr-1" />
                <span>Traveler Community</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase">
                Traveled with Satnam Voyages? Share Your Story!
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed font-montserrat">
                Upload your favorite photo taken during your India tour or chauffeur journey. Featured travelers receive an exclusive <strong>10% loyalty discount voucher</strong> for family and future visits!
              </p>
              <div className="space-y-2 pt-2 text-xs text-stone-600 font-montserrat">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                  <span>Verified review showcase with your country flag</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                  <span>Give public shout-out to your dedicated chauffeur</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                  <span>Receive instant travel credit voucher via email</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E8DFD3]">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-stone-900 uppercase">
                    Thank You for Sharing!
                  </h3>
                  <p className="text-xs text-stone-600 font-montserrat max-w-sm mx-auto">
                    Your memory has been submitted for review and will be added to our traveler showcase. Check your inbox for your 10% voucher code!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 font-montserrat text-xs">
                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1 font-headline">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={submitForm.name}
                      onChange={(e) => setSubmitForm({ ...submitForm, name: e.target.value })}
                      placeholder="e.g. John & Lisa Cooper (London, UK)"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-stone-700 uppercase mb-1 font-headline">Email Address</label>
                      <input
                        type="email"
                        required
                        value={submitForm.email}
                        onChange={(e) => setSubmitForm({ ...submitForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-stone-700 uppercase mb-1 font-headline">Tour Taken</label>
                      <select
                        value={submitForm.tourTaken}
                        onChange={(e) => setSubmitForm({ ...submitForm, tourTaken: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                      >
                        <option>Golden Triangle Tour</option>
                        <option>Rajasthan Heritage Tour</option>
                        <option>Shimla • Manali Tour</option>
                        <option>Rishikesh • Haridwar Tour</option>
                        <option>Outstation Cab Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 uppercase mb-1 font-headline">Your Memory / Chauffeur Review</label>
                    <textarea
                      rows={3}
                      required
                      value={submitForm.story}
                      onChange={(e) => setSubmitForm({ ...submitForm, story: e.target.value })}
                      placeholder="Tell us about your favourite moment, your driver's hospitality, or sightseeing experience..."
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-orange-600/20 transition-all font-headline"
                  >
                    Submit Story &amp; Get Voucher
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Image & Client Story */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-700 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-96 bg-black">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.caption}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur text-white text-xs font-bold font-headline uppercase flex items-center">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C] mr-1" />
                {activeModalItem.destination}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={activeModalItem.avatar}
                    alt={activeModalItem.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-[#E8DFD3]"
                  />
                  <div>
                    <h3 className="font-bold text-stone-900 text-lg font-headline flex items-center">
                      {activeModalItem.clientName}
                      <span className="ml-2">{activeModalItem.clientFlag}</span>
                    </h3>
                    <span className="text-xs text-stone-500 font-montserrat">
                      {activeModalItem.clientCountry} • Tour: <strong>{activeModalItem.tourName}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(activeModalItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-sm text-stone-700 italic border-l-4 border-[#EA580C] pl-4 font-montserrat leading-relaxed">
                "{activeModalItem.reviewQuote}"
              </blockquote>

              <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD3] flex flex-wrap items-center justify-between gap-2 text-xs font-montserrat">
                <span>
                  Chauffeur: <strong className="text-stone-900">{activeModalItem.chauffeurName}</strong>
                </span>
                <span>
                  Vehicle: <strong className="text-stone-900">{activeModalItem.vehicleType}</strong>
                </span>
                <span>
                  Date: <strong className="text-stone-900">{activeModalItem.travelDate}</strong>
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const slug = activeModalItem.tourSlug;
                    setActiveModalItem(null);
                    onNavigate(slug === 'cabs' ? '/cabs' : `/tours/${slug}`);
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider text-center font-headline shadow-md transition-all"
                >
                  View This Exact Itinerary
                </button>
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    onOpenInquiry(`Inquiry about ${activeModalItem.tourName} (Inspired by ${activeModalItem.clientName})`);
                  }}
                  className="flex-1 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider text-center font-headline transition-all"
                >
                  Request Chauffeur &amp; Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
