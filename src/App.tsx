import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingActions } from './components/FloatingActions';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { SEOInspectorModal } from './components/SEOInspectorModal';
import { HomePage } from './pages/HomePage';
import { ToursDirectoryPage } from './pages/ToursDirectoryPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { CabsPage } from './pages/CabsPage';
import { DestinationPage } from './pages/DestinationPage';
import { GalleryPage } from './pages/GalleryPage';
import { SitemapPage } from './pages/SitemapPage';
import { Currency } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [currency, setCurrency] = useState<Currency>('INR');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPackageTitle, setInquiryPackageTitle] = useState<string | undefined>(undefined);

  // Initialize path from window.location on mount
  useEffect(() => {
    const handleLocationChange = () => {
      let path = window.location.pathname;
      if (!path || path === '') path = '/';
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Programmatic client navigation with History API
  const handleNavigate = (newPath: string) => {
    if (newPath === currentPath) return;
    window.history.pushState({}, '', newPath);
    setCurrentPath(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (packageTitle?: string) => {
    setInquiryPackageTitle(packageTitle);
    setInquiryModalOpen(true);
  };

  // Route matching logic
  const renderCurrentView = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 2. Tours Directory (/tours)
    if (currentPath === '/tours') {
      return (
        <ToursDirectoryPage
          onNavigate={handleNavigate}
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 3. Tour Detail (/tours/[slug])
    if (currentPath.startsWith('/tours/')) {
      const slug = currentPath.replace('/tours/', '').split('/')[0];
      return (
        <TourDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 4. Cabs & Fleet (/cabs)
    if (currentPath === '/cabs') {
      return (
        <CabsPage
          onNavigate={handleNavigate}
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 5. Regional Destinations (/destinations/[region])
    if (currentPath.startsWith('/destinations/')) {
      const regionSlug = currentPath.replace('/destinations/', '').split('/')[0];
      return (
        <DestinationPage
          regionSlug={regionSlug}
          onNavigate={handleNavigate}
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 6. Client Gallery (/gallery)
    if (currentPath === '/gallery') {
      return (
        <GalleryPage
          onNavigate={handleNavigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    // 7. XML Sitemap (/sitemap or /sitemap.xml)
    if (currentPath === '/sitemap' || currentPath === '/sitemap.xml') {
      return <SitemapPage onNavigate={handleNavigate} />;
    }

    // Fallback default: Homepage
    return (
      <HomePage
        onNavigate={handleNavigate}
        currency={currency}
        onOpenInquiry={handleOpenInquiry}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen text-[#1C1917] bg-[#FAF9F6] font-sans">
      {/* Top Navbar with live contact, currency toggle, and links */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        currency={currency}
        onToggleCurrency={setCurrency}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenInquiry={handleOpenInquiry} />

      {/* Mobile App-like Bottom Navigation (< 768px) */}
      <MobileBottomNav
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Floating Action Buttons: WhatsApp & Direct Call */}
      <FloatingActions onOpenInquiry={() => handleOpenInquiry()} />

      {/* Live JSON-LD & AEO Structured Data Inspector */}
      <SEOInspectorModal currentPath={currentPath} />

      {/* Instant Inquiry & WhatsApp Quote Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        prefilledPackageTitle={inquiryPackageTitle}
      />
    </div>
  );
}
