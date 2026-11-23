'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Car, MessageCircle } from 'lucide-react';
import { useAppContext } from './Providers';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const { openInquiry } = useAppContext();

  return (
    <div
      id="mobile-bottom-navbar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#E8DFD3] shadow-lg px-2 py-1.5 flex justify-around items-center font-montserrat"
    >
      <Link
        href="/"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          pathname === '/' ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-semibold">Home</span>
      </Link>

      <Link
        href="/tours"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          pathname?.startsWith('/tours') ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-semibold">Tours</span>
      </Link>

      <Link
        href="/cabs"
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          pathname === '/cabs' ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <div className="relative">
          <Car className="w-5 h-5 mb-0.5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EA580C] rounded-full"></span>
        </div>
        <span className="text-[11px] leading-tight font-semibold">Book Cab</span>
      </Link>

      <button
        onClick={() => openInquiry()}
        className="flex flex-col items-center justify-center flex-1 py-1 text-[#EA580C] hover:text-[#C2410C] transition-colors"
      >
        <MessageCircle className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-bold">Chat / Call</span>
      </button>
    </div>
  );
};
