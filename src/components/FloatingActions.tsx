import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onOpenInquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenInquiry }) => {
  return (
    <div className="fixed z-40 flex flex-col space-y-3 bottom-20 right-4 md:bottom-6 md:right-6">
      {/* Direct Call Button */}
      <a
        href="tel:+919811776525"
        id="floating-call-btn"
        className="w-13 h-13 rounded-full bg-[#141210] text-[#EA580C] flex items-center justify-center shadow-xl hover:bg-black transition-all hover:scale-105 group border-2 border-[#EA580C]/40"
        title="Call Satnam Voyages (+91 98117 76525)"
        aria-label="Call Satnam Voyages"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce" />
      </a>

      {/* Permanent WhatsApp Chat Button */}
      <a
        href="https://wa.me/919811776525?text=Hello%20Satnam%20Voyages%2C%20I%20am%20interested%20in%20booking%20a%20tour%20package%20or%20private%20cab%20in%20India.%20Please%20assist%20me."
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative w-14 h-14 rounded-full bg-[#EA580C] text-white flex items-center justify-center shadow-2xl hover:bg-[#C2410C] transition-all hover:scale-110 group border-2 border-white"
        title="Chat on WhatsApp with Satnam Voyages"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#141210] text-[9px] font-extrabold text-amber-400 items-center justify-center">
            1
          </span>
        </span>
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
