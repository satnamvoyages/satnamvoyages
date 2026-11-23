'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { useAppContext } from './Providers';
import { PHONE_TEL, PHONE_DISPLAY, PHONE_WHATSAPP, CONTACT_EMAIL, ADDRESS } from '@/lib/constants';

const tourCircuitLinks = [
  { href: '/tours/golden-triangle-tour', label: 'Golden Triangle (Delhi • Agra • Jaipur)' },
  { href: '/tours/golden-triangle-ranthambore', label: 'Golden Triangle + Ranthambore Tiger Safari' },
  { href: '/tours/jaipur-jodhpur-jaisalmer-tour', label: 'Jaipur • Jodhpur • Jaisalmer Desert Tour' },
  { href: '/tours/delhi-agra-jaipur-udaipur-tour', label: 'Delhi • Agra • Jaipur • Udaipur Royal Tour' },
  { href: '/tours/shimla-manali-kasol-tour', label: 'Shimla • Manali • Kasol Himalayan Tour' },
  { href: '/tours/gwalior-orchha-khajuraho-tour', label: 'Gwalior • Orchha • Khajuraho Heritage Tour' },
];

const cabLinks = [
  { href: '/cabs', label: 'Delhi to Agra Cab (Yamuna Expy)' },
  { href: '/cabs', label: 'Delhi to Jaipur Cab (Expressway)' },
  { href: '/cabs', label: 'Delhi to Haridwar / Rishikesh Cab' },
  { href: '/cabs', label: 'Toyota Innova Crysta Chauffeur Hire' },
  { href: '/cabs', label: '12/16-Seater Maharaja Tempo Traveller' },
  { href: '/cabs', label: 'Delhi Airport (IGI T3) Transfers' },
];

export const Footer: React.FC = () => {
  const { openInquiry } = useAppContext();

  return (
    <footer className="bg-[#141210] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80 text-sm">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
              <Image src="/assets/logo_ft.png" alt="Satnam Voyages" width={160} height={96} className="h-24 w-auto" />
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed font-montserrat">
              India&rsquo;s premier travel agency and outstation chauffeur cab service. Handcrafted Golden Triangle, royal Rajasthan, alpine Himachal, holy Uttarakhand, and Khajuraho circuits with verified English-speaking chauffeurs and sanitized fleets.
            </p>
          </div>

          {/* Column 2: Popular Tour Circuits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Popular Tour Circuits
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {tourCircuitLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#EA580C] transition-colors text-left">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Outstation Cabs & Fleets */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Outstation Cabs &amp; Fleets
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {cabLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#EA580C] transition-colors text-left">
                    {l.label}
                  </Link>
                </li>
              ))}
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
                <span>{ADDRESS.street}, {ADDRESS.locality}, {ADDRESS.postalCode}, India</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-[#EA580C] font-bold">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-[#EA580C] mr-2 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#EA580C]">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${PHONE_WHATSAPP}?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20plan%20a%20tour%20in%20India.`}
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
            <Link href="/tours" className="hover:text-[#EA580C] transition-colors">
              All Tours
            </Link>
            <span>•</span>
            <Link href="/gallery" className="hover:text-[#EA580C] transition-colors">
              Client Gallery
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-[#EA580C] transition-colors">
              XML Sitemap
            </Link>
            <span>•</span>
            <button onClick={() => openInquiry()} className="hover:text-[#EA580C] transition-colors">
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
