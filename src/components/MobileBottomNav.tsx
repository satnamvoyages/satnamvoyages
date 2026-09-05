import React from 'react';
import { Home, Compass, Car, MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPath,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div
      id="mobile-bottom-navbar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#E8DFD3] shadow-lg px-2 py-1.5 flex justify-around items-center font-montserrat"
    >
      {/* 1. Home */}
      <button
        onClick={() => onNavigate('/')}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentPath === '/' ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-semibold">Home</span>
      </button>

      {/* 2. Tour Packages */}
      <button
        onClick={() => onNavigate('/tours')}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentPath.startsWith('/tours') ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <Compass className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-semibold">Tours</span>
      </button>

      {/* 3. Book Cab */}
      <button
        onClick={() => onNavigate('/cabs')}
        className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
          currentPath === '/cabs' ? 'text-[#EA580C] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
        }`}
      >
        <div className="relative">
          <Car className="w-5 h-5 mb-0.5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#EA580C] rounded-full"></span>
        </div>
        <span className="text-[11px] leading-tight font-semibold">Book Cab</span>
      </button>

      {/* 4. Chat / Call */}
      <button
        onClick={() => onOpenInquiry()}
        className="flex flex-col items-center justify-center flex-1 py-1 text-[#EA580C] hover:text-[#C2410C] transition-colors"
      >
        <MessageCircle className="w-5 h-5 mb-0.5" />
        <span className="text-[11px] leading-tight font-bold">Chat / Call</span>
      </button>
    </div>
  );
};
