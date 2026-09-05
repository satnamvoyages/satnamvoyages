import React from 'react';
import { ShieldCheck, UserCheck, Clock, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Government Approved',
      subtitle: 'Ministry of Tourism Compliant',
      description: 'Fully licensed Indian travel agency adhering strictly to tourist transport safety and fair trade norms.'
    },
    {
      icon: UserCheck,
      title: 'Verified Drivers',
      subtitle: 'English Speaking & Courteous',
      description: 'Police-vetted chauffeurs with 10+ years highway, mountain, and golden triangle navigation expertise.'
    },
    {
      icon: Clock,
      title: '24/7 Live Support',
      subtitle: 'Real-time Trip Concierge',
      description: 'Instant WhatsApp assistance, flight delay tracking, and dedicated trip coordinator on call.'
    },
    {
      icon: CheckCircle2,
      title: '100% Fixed Fares',
      subtitle: 'No Hidden Tolls or Surcharges',
      description: 'Crystal-clear per-km and package rates with all highway permits, fuel, and allowances stated upfront.'
    }
  ];

  return (
    <section className="py-10 bg-[#FAF6F0] border-y border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                id={`trust-badge-${idx}`}
                className="flex items-start p-4 rounded-xl bg-white border border-[#E8DFD3] hover:border-[#EA580C]/40 hover:shadow-[0_6px_20px_-2px_rgba(234,88,12,0.1)] transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFF7ED] border border-orange-200 flex items-center justify-center text-[#EA580C] shrink-0 mr-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1C1917] leading-snug font-headline uppercase">{badge.title}</h4>
                  <p className="text-[11px] font-semibold text-[#EA580C] uppercase tracking-wide mb-1">{badge.subtitle}</p>
                  <p className="text-xs text-[#57534E] leading-relaxed font-montserrat">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
