import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageSquare, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { DESTINATIONS } from '../data/destinationsData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-[#141210] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80 text-sm">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div
              onClick={() => onNavigate('/')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-headline text-xl font-extrabold text-white tracking-tight uppercase">
                Satnam <span className="text-[#EA580C]">Voyages</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-montserrat">
              India’s premier travel agency and outstation chauffeur cab service. Handcrafted Golden Triangle, royal Rajasthan, alpine Himachal, holy Uttarakhand, and Khajuraho circuits with verified English-speaking chauffeurs and sanitized fleets.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-medium flex items-center space-x-1.5 font-montserrat">
              <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
              <span>Ministry of Tourism Compliant • 100% Fixed Rates</span>
            </div>
          </div>

          {/* Column 2: Popular Tour Circuits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Popular Tour Circuits
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/tours/golden-triangle-tour')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Golden Triangle (Delhi • Agra • Jaipur)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tours/golden-triangle-ranthambore')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Golden Triangle + Ranthambore Tiger Safari
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tours/jaipur-jodhpur-jaisalmer-tour')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Jaipur • Jodhpur • Jaisalmer Desert Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tours/delhi-agra-jaipur-udaipur-tour')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Delhi • Agra • Jaipur • Udaipur Royal Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tours/shimla-manali-kasol-tour')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Shimla • Manali • Kasol Himalayan Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tours/gwalior-orchha-khajuraho-tour')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Gwalior • Orchha • Khajuraho Heritage Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Outstation Cabs & Fleets */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Outstation Cabs &amp; Fleets
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Delhi to Agra Cab (Yamuna Expy)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Delhi to Jaipur Cab (Expressway)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Delhi to Haridwar / Rishikesh Cab
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Toyota Innova Crysta Chauffeur Hire
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  12/16-Seater Maharaja Tempo Traveller
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/cabs')}
                  className="hover:text-[#EA580C] transition-colors text-left"
                >
                  Delhi Airport (IGI T3) Transfers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Booking Desk */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              24/7 Booking Desk
            </h4>
            <div className="space-y-2 text-xs text-stone-300 font-montserrat">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
                <span>Outer Circle, Connaught Place, New Delhi, 110001, India</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                <a href="tel:+919811776525" className="hover:text-[#EA580C] font-bold">
                  +91 98117 76525
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                <a href="mailto:booking@satnamvoyages.com" className="hover:text-[#EA580C]">
                  booking@satnamvoyages.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919811776525?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20plan%20a%20tour%20in%20India."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Instant WhatsApp Booking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 font-montserrat">
          <div>
            © {new Date().getFullYear()} Satnam Voyages (satnamvoyages.com). All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('/tours')}
              className="hover:text-[#EA580C] transition-colors"
            >
              All 16 Tours
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/gallery')}
              className="hover:text-[#EA580C] transition-colors"
            >
              Client Gallery
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/sitemap')}
              className="hover:text-[#EA580C] transition-colors"
            >
              XML Sitemap
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenInquiry()}
              className="hover:text-[#EA580C] transition-colors"
            >
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
