import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';
import { CLIENT_MOMENTS, ClientMoment } from '../data/clientPhotosData';

interface ClientPhotoScrollerProps {
  onNavigate?: (path: string) => void;
}

export const ClientPhotoScroller: React.FC<ClientPhotoScrollerProps> = ({ onNavigate }) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollByCards = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + 16
      : 240;
    track.scrollBy({ left: direction === 'left' ? -cardWidth * 3 : cardWidth * 3, behavior: 'smooth' });
  };

  const openAt = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + CLIENT_MOMENTS.length) % CLIENT_MOMENTS.length));
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % CLIENT_MOMENTS.length));
  };

  const active: ClientMoment | null = activeIndex !== null ? CLIENT_MOMENTS[activeIndex] : null;

  return (
    <section className="py-16 bg-[#FAF6F0] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1">
              Moments From The Road
            </span>
            <h2 className="font-headline uppercase text-2xl sm:text-3xl font-extrabold text-[#1C1917] flex items-center gap-2">
              <Camera className="w-6 h-6 text-[#EA580C]" />
              Real Travelers, Real Photos
            </h2>
          </div>
          {onNavigate && (
            <button
              onClick={() => onNavigate('/gallery')}
              className="inline-flex items-center text-[#EA580C] hover:text-[#C2410C] font-bold text-xs uppercase tracking-wider mt-3 md:mt-0"
            >
              <span>View Full Gallery</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

        {/* Scroller */}
        <div className="relative group/scroller">
          <button
            onClick={() => scrollByCards('left')}
            aria-label="Scroll left"
            className="hidden sm:flex items-center justify-center absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E8DFD3] shadow-md hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors opacity-0 group-hover/scroller:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
          >
            {CLIENT_MOMENTS.map((moment, idx) => (
              <button
                key={moment.id}
                onClick={() => openAt(idx)}
                className="relative shrink-0 w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 snap-start border border-[#E8DFD3] shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={moment.image}
                  alt="Satnam Voyages client moment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollByCards('right')}
            aria-label="Scroll right"
            className="hidden sm:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#E8DFD3] shadow-md hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] transition-colors opacity-0 group-hover/scroller:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.image}
              alt="Satnam Voyages client moment"
              className="w-full max-h-[85vh] object-contain rounded-2xl mx-auto"
            />
            <p className="text-center text-stone-400 text-xs mt-3 font-montserrat">
              {activeIndex! + 1} / {CLIENT_MOMENTS.length}
            </p>
          </div>

          <button
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};