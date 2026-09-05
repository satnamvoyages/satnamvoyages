import React, { useState } from 'react';
import { Compass, Phone, MessageSquare, ChevronDown, Menu, X, Car, MapPin, Globe } from 'lucide-react';
import { Currency } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  currency: Currency;
  onToggleCurrency: (c: Currency) => void;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  currency,
  onToggleCurrency,
  onOpenInquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Tour Packages', path: '/tours' },
    { label: 'Outstation Cabs', path: '/cabs' },
    { label: 'Client Gallery', path: '/gallery' },
  ];

  const destinationItems = [
    { label: 'Rajasthan Heritage', path: '/destinations/rajasthan', desc: 'Jaipur, Jodhpur, Udaipur, Jaisalmer' },
    { label: 'Himachal Hills', path: '/destinations/himachal', desc: 'Shimla, Manali, Solang, Kasol' },
    { label: 'Uttarakhand Devbhoomi', path: '/destinations/uttarakhand', desc: 'Rishikesh, Haridwar, Mussoorie' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDestinationsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8DFD3]">
      {/* Top Banner Bar */}
      <div className="bg-[#141210] text-stone-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-amber-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse mr-2"></span>
              24/7 Live Desk:
            </span>
            <a
              href="tel:+919811776525"
              className="hover:text-amber-400 font-medium tracking-wide flex items-center transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" /> +91 98117 76525
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-400">Government Approved • Verified Drivers</span>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {/* Currency Selector */}
            <div className="flex items-center bg-stone-800 rounded-lg p-0.5 border border-stone-700 text-xs">
              <button
                onClick={() => onToggleCurrency('INR')}
                className={`px-2 py-0.5 rounded font-medium transition-all ${
                  currency === 'INR' ? 'bg-[#EA580C] text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="View prices in Indian Rupees"
              >
                ₹ INR
              </button>
              <button
                onClick={() => onToggleCurrency('USD')}
                className={`px-2 py-0.5 rounded font-medium transition-all ${
                  currency === 'USD' ? 'bg-[#EA580C] text-white font-bold' : 'text-stone-300 hover:text-white'
                }`}
                title="View prices in US Dollars"
              >
                $ USD
              </button>
            </div>

            <a
              href="https://wa.me/919811776525?text=Hello%20Satnam%20Voyages%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package%20or%20cab%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2.5 py-1 rounded bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold transition-colors"
            >
              <MessageSquare className="w-3 h-3 mr-1" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleLinkClick('/')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div> <img src="/assets/header_logo.png" alt="satnam voyages" className="h-16 w-auto" /> </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-colors uppercase tracking-wide ${
                    isActive
                      ? 'text-[#EA580C] bg-[#FFF7ED] font-bold'
                      : 'text-[#1C1917] hover:text-[#EA580C] hover:bg-white/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Destinations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold flex items-center transition-colors uppercase tracking-wide ${
                  currentPath.startsWith('/destinations')
                    ? 'text-[#EA580C] bg-[#FFF7ED] font-bold'
                    : 'text-[#1C1917] hover:text-[#EA580C] hover:bg-white/80'
                }`}
              >
                Destinations
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {destinationsOpen && (
                <div
                  onMouseLeave={() => setDestinationsOpen(false)}
                  className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E8DFD3] py-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  {destinationItems.map((item) => (
                    <button
                      key={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className="w-full text-left px-4 py-2.5 hover:bg-[#FFF7ED] transition-colors block group"
                    >
                      <span className="font-semibold text-stone-900 group-hover:text-[#EA580C] text-sm block">
                        {item.label}
                      </span>
                      <span className="text-xs text-stone-500 block">{item.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onOpenInquiry()}
              id="header-plan-trip-cta"
              className="px-5 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 hover:shadow-lg transition-all flex items-center"
            >
              <Car className="w-4 h-4 mr-2" /> Book Cab / Tour
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8DFD3] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => handleLinkClick('/')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                currentPath === '/' ? 'bg-[#FFF7ED] text-[#EA580C]' : 'text-stone-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('/tours')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                currentPath === '/tours' ? 'bg-[#FFF7ED] text-[#EA580C]' : 'text-stone-800'
              }`}
            >
              All 16 Tour Packages
            </button>
            <button
              onClick={() => handleLinkClick('/cabs')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                currentPath === '/cabs' ? 'bg-[#FFF7ED] text-[#EA580C]' : 'text-stone-800'
              }`}
            >
              Outstation Cabs &amp; Fleet
            </button>
            <button
              onClick={() => handleLinkClick('/gallery')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wide ${
                currentPath === '/gallery' ? 'bg-[#FFF7ED] text-[#EA580C]' : 'text-stone-800 hover:text-[#EA580C] hover:bg-[#FFF7ED]'
              }`}
            >
              Client Photo Gallery
            </button>

            <div className="pt-2 pb-1 px-3 text-xs font-bold text-stone-400 uppercase tracking-wider">
              Destinations
            </div>
            {destinationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPath === item.path ? 'bg-[#FFF7ED] text-[#EA580C]' : 'text-stone-700'
                }`}
              >
                📍 {item.label}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick('/sitemap')}
              className="text-left px-3 py-2 rounded-lg text-sm text-stone-600"
            >
              XML Sitemap &amp; Route Index
            </button>
          </div>

          <div className="pt-3 border-t border-[#E8DFD3] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-center text-xs uppercase tracking-wider shadow"
            >
              Instant Inquiry &amp; Custom Quote
            </button>
            <a
              href="tel:+919811776525"
              className="w-full py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-stone-800 font-semibold text-center text-sm flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2 text-stone-600" /> Call +91 98117 76525
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
