'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, MapPin, Sparkles, ChevronLeft, X, ShieldCheck, UploadCloud, CheckCircle2 } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/constants';
import { CLIENT_MOMENTS, ClientMoment } from '@/lib/data/clientPhotosData';
import { GALLERY_ITEMS } from './GallerySection';

const momentAlt = (moment: ClientMoment) =>
  moment.alt;

export const GalleryClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clients' | 'destinations'>(CLIENT_MOMENTS.length > 0 ? 'clients' : 'destinations');
  const [activeModalItem, setActiveModalItem] = useState<ClientMoment | null>(null);

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitForm, setSubmitForm] = useState({
    name: '',
    email: '',
    tourTaken: 'Golden Triangle Tour',
    story: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitForm.name || !submitForm.story) return;
    // There is no backend for stories yet, so hand the story to the visitor's email app.
    const subject = encodeURIComponent(`My Satnam Voyages story - ${submitForm.tourTaken}`);
    const body = encodeURIComponent(
      `Name: ${submitForm.name}\nEmail: ${submitForm.email}\nTour: ${submitForm.tourTaken}\n\n${submitForm.story}\n\n(Please attach your favourite photo.)`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setSubmitForm({ name: '', email: '', tourTaken: 'Golden Triangle Tour', story: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24 font-montserrat">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E8DFD3] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-stone-500 font-montserrat">
          <Link href="/" className="hover:text-[#EA580C] flex items-center font-semibold">
            <ChevronLeft className="w-4 h-4 mr-0.5" /> Home
          </Link>
          <span>/</span>
          <span className="text-[#1C1917] font-bold">Client Moments Gallery</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="relative bg-[#141210] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/30 text-amber-200 text-xs font-semibold backdrop-blur font-headline uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Photos Shared by Our Guests</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            REAL TRAVELERS. UNFORGETTABLE JOURNEYS.
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-montserrat">
            See India through the eyes of the guests who travelled with us: smiles in front of the Taj Mahal, Rajasthan&rsquo;s forts and the Himalayan hill stations.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-stone-300 font-montserrat">
            <div className="flex items-center space-x-2 bg-[#201D1A]/80 px-4 py-2 rounded-xl border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span className="font-bold text-white">100% Private Fleet</span>
              <span className="text-stone-400">(Dedicated Chauffeurs)</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#201D1A]/80 px-4 py-2 rounded-xl border border-stone-800">
              <Camera className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white">{CLIENT_MOMENTS.length} Client Photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <div className="sticky top-20 z-20 bg-[#FAF6F0]/95 backdrop-blur border-b border-[#E8DFD3] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex rounded-xl bg-white p-1 border border-[#E8DFD3] shadow-inner text-xs font-bold uppercase tracking-wider font-headline">
              <button
                onClick={() => setActiveTab('clients')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'clients' ? 'bg-[#EA580C] text-white shadow' : 'text-stone-600 hover:text-stone-900'}`}
              >
                📸 Client Moments ({CLIENT_MOMENTS.length})
              </button>
              <button
                onClick={() => setActiveTab('destinations')}
                className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'destinations' ? 'bg-[#EA580C] text-white shadow' : 'text-stone-600 hover:text-stone-900'}`}
              >
                🏛️ Sights &amp; Monuments ({GALLERY_ITEMS.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'clients' ? (
          CLIENT_MOMENTS.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E8DFD3]">
              <Camera className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-stone-900 font-headline uppercase">Client photos coming soon</h3>
              <p className="text-stone-500 text-xs mt-1">Check back shortly, or browse the sights &amp; monuments tab.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {CLIENT_MOMENTS.map((moment) => (
                <button
                  type="button"
                  key={moment.id}
                  onClick={() => setActiveModalItem(moment)}
                  aria-label={`Open ${momentAlt(moment)}`}
                  className="relative block w-full aspect-square rounded-2xl overflow-hidden bg-stone-900 cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={moment.image}
                    alt={momentAlt(moment)}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                  <p className="text-xs text-stone-600 font-montserrat leading-relaxed">{item.caption}</p>
                  <div className="pt-3 border-t border-[#E8DFD3] flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium font-montserrat">
                      Featured in: <strong className="text-stone-800">{item.tourName}</strong>
                    </span>
                    <Link
                      href={item.tourSlug === 'cabs' ? '/cabs' : `/tours/${item.tourSlug}`}
                      className="px-3 py-1.5 rounded-lg bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider font-headline"
                    >
                      View Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guest Story Submission */}
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
                Email your favourite photo and a few words about your trip to <strong>{CONTACT_EMAIL}</strong>, or fill in the form below. We always ask before featuring anything you send.
              </p>
              <div className="space-y-2 pt-2 text-xs text-stone-600 font-montserrat">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                  <span>Your photos appear in our traveller gallery, with your permission</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                  <span>Give public shout-out to your dedicated chauffeur</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E8DFD3]">
              {submitSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EA580C] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-stone-900 uppercase">Thank You for Sharing!</h3>
                  <p className="text-xs text-stone-600 font-montserrat max-w-sm mx-auto">
                    Your email app should now open with your story filled in. Attach a photo and press send. If nothing opened, email us at {CONTACT_EMAIL}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 font-montserrat text-xs">
                  <div>
                    <label htmlFor="story-name" className="block font-bold text-stone-700 uppercase mb-1 font-headline">Your Full Name</label>
                    <input
                      id="story-name"
                      name="name"
                      autoComplete="name"
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
                      <label htmlFor="story-email" className="block font-bold text-stone-700 uppercase mb-1 font-headline">Email Address</label>
                      <input
                        id="story-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        value={submitForm.email}
                        onChange={(e) => setSubmitForm({ ...submitForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DFD3] text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
                      />
                    </div>
                    <div>
                      <label htmlFor="story-tour" className="block font-bold text-stone-700 uppercase mb-1 font-headline">Tour Taken</label>
                      <select
                        id="story-tour"
                        name="tour"
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
                    <label htmlFor="story-text" className="block font-bold text-stone-700 uppercase mb-1 font-headline">Your Memory / Chauffeur Review</label>
                    <textarea
                      id="story-text"
                      name="story"
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
                    Send My Story
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveModalItem(null)}>
          <div className="max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-black">
              <Image
                src={activeModalItem.image}
                alt={momentAlt(activeModalItem)}
                width={1600}
                height={1200}
                sizes="(min-width: 768px) 768px, 100vw"
                className="w-full h-auto max-h-[85vh] object-contain mx-auto"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
