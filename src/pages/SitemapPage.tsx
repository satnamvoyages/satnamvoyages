import React, { useState } from 'react';
import { FileCode, Copy, Check, Download, ExternalLink, Globe, Compass, Car, MapPin } from 'lucide-react';
import { ALL_TOURS } from '../data/toursData';
import { DESTINATIONS } from '../data/destinationsData';
import { SEOHead } from '../components/SEOHead';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'xml'>('visual');

  const today = new Date().toISOString().split('T')[0];

  // List of all site URLs
  const siteRoutes = [
    { loc: 'https://satnamvoyages.com/', path: '/', priority: '1.0', changefreq: 'daily', title: 'Homepage (Satnam Voyages)' },
    { loc: 'https://satnamvoyages.com/tours', path: '/tours', priority: '0.9', changefreq: 'daily', title: 'All 16 Tour Packages Directory' },
    { loc: 'https://satnamvoyages.com/cabs', path: '/cabs', priority: '0.9', changefreq: 'weekly', title: 'Outstation Cabs & Fleet Hire' },
    { loc: 'https://satnamvoyages.com/gallery', path: '/gallery', priority: '0.9', changefreq: 'weekly', title: 'Client Moments & Photo Gallery' },
    ...Object.values(DESTINATIONS).map((d) => ({
      loc: `https://satnamvoyages.com/destinations/${d.slug}`,
      path: `/destinations/${d.slug}`,
      priority: '0.8',
      changefreq: 'weekly',
      title: `${d.name} Destination Guide`
    })),
    ...ALL_TOURS.map((t) => ({
      loc: `https://satnamvoyages.com/tours/${t.slug}`,
      path: `/tours/${t.slug}`,
      priority: '0.85',
      changefreq: 'weekly',
      title: t.title
    }))
  ];

  // Generate XML string
  const xmlOutput = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${siteRoutes
  .map(
    (r) => `  <url>
    <loc>${r.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([xmlOutput], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <SEOHead
        title="XML Sitemap & Route Architecture (SEO / Googlebot)"
        description="Complete XML sitemap listing all 16 tour packages, outstation cab routes, and regional destination landings for search engines and AI crawlers."
        canonicalPath="/sitemap"
      />

      <div className="bg-[#141210] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-wider block mb-1 font-headline">
              Search Engine &amp; AI Crawler Index
            </span>
            <h1 className="font-headline text-2xl sm:text-4xl font-extrabold uppercase">
              Dynamic XML Sitemap Index
            </h1>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 font-montserrat">
              Live crawler index mapping {siteRoutes.length} canonical endpoints across Satnam Voyages.
            </p>
          </div>

          <div className="flex items-center space-x-2 font-montserrat">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold flex items-center border border-stone-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 mr-1.5 text-orange-400" /> : <Copy className="w-3.5 h-3.5 mr-1.5 text-orange-400" />}
              {copied ? 'Copied' : 'Copy XML'}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider flex items-center shadow-lg shadow-orange-600/20 transition-colors"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download sitemap.xml
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-montserrat">
        {/* Toggle between Visual Directory and Raw XML */}
        <div className="flex border-b border-[#E8DFD3] mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('visual')}
            className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 font-headline ${
              activeTab === 'visual'
                ? 'border-[#EA580C] text-[#EA580C]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Visual Route Index ({siteRoutes.length})
          </button>
          <button
            onClick={() => setActiveTab('xml')}
            className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors border-b-2 font-headline ${
              activeTab === 'xml'
                ? 'border-[#EA580C] text-[#EA580C]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Raw XML Code Output
          </button>
        </div>

        {activeTab === 'visual' ? (
          <div className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm">
            <div className="p-4 bg-[#FAF6F0] border-b border-[#E8DFD3] flex justify-between text-xs text-stone-500 font-bold uppercase font-headline">
              <span>Endpoint &amp; Page Title</span>
              <span className="hidden sm:inline">Priority / ChangeFreq</span>
            </div>
            <div className="divide-y divide-stone-100">
              {siteRoutes.map((route, i) => (
                <div
                  key={i}
                  className="p-4 flex items-center justify-between hover:bg-orange-50/40 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onNavigate(route.path)}
                      className="text-left group"
                    >
                      <span className="font-bold text-stone-900 group-hover:text-[#EA580C] text-sm block">
                        {route.title}
                      </span>
                      <code className="text-xs text-[#EA580C] font-mono">
                        {route.path}
                      </code>
                    </button>
                  </div>

                  <div className="flex items-center space-x-4 text-xs font-mono text-stone-500">
                    <span className="px-2 py-0.5 rounded bg-stone-100 font-semibold">
                      P: {route.priority}
                    </span>
                    <button
                      onClick={() => onNavigate(route.path)}
                      className="text-stone-400 hover:text-[#EA580C] p-1"
                      title="Navigate to route"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-800 bg-stone-950 p-6 shadow-2xl overflow-x-auto font-mono text-xs text-orange-400 leading-relaxed">
            <pre>{xmlOutput}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
