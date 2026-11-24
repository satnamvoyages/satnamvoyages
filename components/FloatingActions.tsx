'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY, PHONE_WHATSAPP } from '@/lib/constants';

export const FloatingActions: React.FC = () => {
  return (
    // Hidden on mobile: MobileBottomNav already offers chat/call there, and the
    // floating bubbles covered the tour sticky bar and page content.
    <div className="hidden md:flex fixed z-40 flex-col space-y-3 md:bottom-6 md:right-6">
      <a
        href={`tel:${PHONE_TEL}`}
        id="floating-call-btn"
        className="w-13 h-13 rounded-full bg-[#141210] text-[#EA580C] flex items-center justify-center shadow-xl hover:bg-black transition-all hover:scale-105 group border-2 border-[#EA580C]/40"
        title={`Call Satnam Voyages (${PHONE_DISPLAY})`}
        aria-label="Call Satnam Voyages"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      <a
        href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20I%20am%20interested%20in%20booking%20a%20tour%20package%20or%20private%20cab%20in%20India.%20Please%20assist%20me.`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative w-14 h-14 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-2xl hover:bg-[#C2410C] transition-all hover:scale-110 group border-2 border-white"
        title="Chat on WhatsApp with Satnam Voyages"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
