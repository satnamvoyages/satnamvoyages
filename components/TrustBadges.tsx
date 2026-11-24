import React from 'react';
import { MapPin, UserCheck, Clock, Receipt } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: MapPin,
      title: 'GPS-Tracked Vehicles',
      subtitle: 'Live Trip Tracking',
      description: 'Every car in our fleet is GPS-tracked, so we always know where your vehicle is on the road.'
    },
    {
      icon: UserCheck,
      title: 'Background-Checked Chauffeurs',
      subtitle: 'English & Hindi Speaking',
      description: 'Courteous, experienced chauffeurs who know the highway, mountain and Golden Triangle routes.'
    },
    {
      icon: Clock,
      title: '24/7 Booking Support',
      subtitle: 'Phone & WhatsApp',
      description: 'Reach us any time by phone or WhatsApp before and during your trip.'
    },
    {
      icon: Receipt,
      title: 'Transparent FASTag Toll Billing',
      subtitle: 'Every Charge Itemised',
      description: 'Per-km and package rates quoted in writing; tolls and state taxes billed at actual against official receipts.'
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
