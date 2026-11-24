'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageSquare, Instagram } from 'lucide-react';
import { useAppContext } from './Providers';
import { PHONE_TEL, PHONE_DISPLAY, PHONE_WHATSAPP, CONTACT_EMAIL, ADDRESS, INSTAGRAM_URL } from '@/lib/constants';

// Every tour is linked here so each one gets a site-wide internal link.
const tourGroups = [
  {
    heading: 'Golden Triangle & Delhi',
    links: [
      { href: '/tours/golden-triangle-tour', label: 'Golden Triangle (Delhi, Agra, Jaipur)' },
      { href: '/tours/golden-triangle-ranthambore', label: 'Golden Triangle + Ranthambore' },
      { href: '/tours/same-day-delhi-agra-tour', label: 'Same Day Agra Tour from Delhi' },
      { href: '/tours/same-day-delhi-jaipur-tour', label: 'Same Day Jaipur Tour from Delhi' },
      { href: '/tours/delhi-sightseeing-old-and-new', label: 'Delhi Sightseeing, Old & New' },
      { href: '/tours/gwalior-orchha-khajuraho-tour', label: 'Gwalior, Orchha & Khajuraho' },
    ],
  },
  {
    heading: 'Rajasthan',
    links: [
      { href: '/tours/delhi-agra-jaipur-udaipur-tour', label: 'Delhi, Agra, Jaipur & Udaipur' },
      { href: '/tours/jaipur-jodhpur-jaisalmer-tour', label: 'Jaipur, Jodhpur & Jaisalmer' },
      { href: '/tours/jaipur-jodhpur-udaipur-tour', label: 'Jaipur, Jodhpur & Udaipur' },
      { href: '/tours/rajasthan-heritage-tour', label: 'Rajasthan Heritage Tour (12 days)' },
    ],
  },
  {
    heading: 'Himachal & Uttarakhand',
    links: [
      { href: '/tours/shimla-manali-tour', label: 'Shimla & Manali' },
      { href: '/tours/shimla-manali-kasol-tour', label: 'Shimla, Manali & Kasol' },
      { href: '/tours/manali-kasol-manikaran-tour', label: 'Manali, Kasol & Manikaran' },
      { href: '/tours/rishikesh-haridwar-tour', label: 'Rishikesh & Haridwar' },
      { href: '/tours/rishikesh-haridwar-mussoorie-tour', label: 'Rishikesh, Haridwar & Mussoorie' },
      { href: '/tours/rishikesh-mussoorie-tour', label: 'Rishikesh & Mussoorie' },
    ],
  },
];

// Route landing pages live at /cabs/{slug} (slugs defined in lib/data/cabsData.ts).
const cabLinks = [
  { href: '/cabs/delhi-to-agra', label: 'Delhi to Agra Cab' },
  { href: '/cabs/delhi-to-jaipur', label: 'Delhi to Jaipur Cab' },
  { href: '/cabs/delhi-to-chandigarh', label: 'Delhi to Chandigarh Cab' },
  { href: '/cabs/delhi-to-haridwar-rishikesh', label: 'Delhi to Haridwar / Rishikesh Cab' },
  { href: '/cabs/delhi-to-dehradun-mussoorie', label: 'Delhi to Dehradun / Mussoorie Cab' },
  { href: '/cabs/delhi-to-shimla', label: 'Delhi to Shimla Cab' },
  { href: '/cabs/delhi-to-manali', label: 'Delhi to Manali Cab' },
  { href: '/cabs/jaipur-to-jodhpur', label: 'Jaipur to Jodhpur Cab' },
  { href: '/cabs/jaipur-to-udaipur', label: 'Jaipur to Udaipur Cab' },
  { href: '/cabs/delhi-airport-transfer', label: 'Delhi Airport (IGI) Transfers' },
  { href: '/cabs', label: 'All Vehicles & Per-km Rates' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/tours', label: 'All Tours' },
  { href: '/gallery', label: 'Client Gallery' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/cancellation-policy', label: 'Cancellation Policy' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
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
              Delhi-based private tours and outstation chauffeur cabs. Golden Triangle, Rajasthan, Himachal, Uttarakhand and Khajuraho circuits in a private air-conditioned vehicle with your own driver.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs text-stone-300 hover:text-[#EA580C] transition-colors"
            >
              <Instagram className="w-4 h-4 mr-2" /> @satnamvoyages on Instagram
            </a>

            <ul className="pt-2 space-y-1.5 text-xs text-stone-400">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#EA580C] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tour packages, grouped by region */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Private Tour Packages
            </h4>
            {tourGroups.map((group) => (
              <div key={group.heading} className="space-y-1.5">
                <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">{group.heading}</p>
                <ul className="space-y-1.5 text-xs text-stone-400">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-[#EA580C] transition-colors text-left">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3: Outstation Cabs & Fleets */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-headline">
              Outstation Cabs &amp; Fleets
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {cabLinks.map((l) => (
                <li key={l.href}>
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
                <Link href="/contact" className="hover:text-[#EA580C]">
                  {ADDRESS.street}, {ADDRESS.locality}, {ADDRESS.postalCode}, India
                </Link>
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
            © {new Date().getFullYear()} Satnam Voyages (www.satnamvoyages.com). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-[#EA580C] transition-colors">
              Privacy
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms" className="hover:text-[#EA580C] transition-colors">
              Terms
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/sitemap.xml" className="hover:text-[#EA580C] transition-colors">
              XML Sitemap
            </Link>
            <span aria-hidden="true">•</span>
            <button onClick={() => openInquiry()} className="hover:text-[#EA580C] transition-colors">
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
