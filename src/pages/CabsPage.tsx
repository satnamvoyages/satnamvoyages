import React, { useState } from 'react';
import {
  Car,
  Users,
  Luggage,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Calculator,
  Navigation,
  Info
} from 'lucide-react';
import { CAB_FLEET, POPULAR_CAB_ROUTES } from '../data/cabsData';
import { Currency } from '../types';
import { SEOHead } from '../components/SEOHead';
import { TrustBadges } from '../components/TrustBadges';

interface CabsPageProps {
  onNavigate: (path: string) => void;
  currency: Currency;
  onOpenInquiry: (packageTitle?: string) => void;
}

export const CabsPage: React.FC<CabsPageProps> = ({
  onNavigate,
  currency,
  onOpenInquiry
}) => {
  // Cab Fare Calculator State
  const [selectedRouteIdx, setSelectedRouteIdx] = useState<number>(0);
  const [selectedVehicleType, setSelectedVehicleType] = useState<'sedan' | 'suv' | 'tempo'>('suv');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('round-trip');

  const currentRoute = POPULAR_CAB_ROUTES[selectedRouteIdx];

  const estimatedFare = (() => {
    const baseKm = currentRoute.distanceKm;
    const totalKm = tripType === 'round-trip' ? baseKm * 2 : baseKm;
    let ratePerKm = 17;
    let driverAllowance = 400;

    if (selectedVehicleType === 'sedan') {
      ratePerKm = 11;
      driverAllowance = 350;
    } else if (selectedVehicleType === 'tempo') {
      ratePerKm = 24;
      driverAllowance = 600;
    }

    const estimatedDays = Math.max(1, Math.ceil(totalKm / 350));
    const kmCost = totalKm * ratePerKm;
    const allowanceTotal = estimatedDays * driverAllowance;
    const stateTaxAndTollEst = tripType === 'round-trip' ? 950 : 550;

    return {
      totalKm,
      estimatedDays,
      kmCost,
      allowanceTotal,
      stateTaxAndTollEst,
      totalEstimateINR: kmCost + allowanceTotal + stateTaxAndTollEst,
      totalEstimateUSD: Math.round((kmCost + allowanceTotal + stateTaxAndTollEst) / 82)
    };
  })();

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') return `$${usd}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const getVehicleName = () => {
    if (selectedVehicleType === 'sedan') return 'Executive Sedan (Dzire / Etios)';
    if (selectedVehicleType === 'tempo') return '12-Seater Maharaja Tempo Traveller';
    return 'Toyota Innova Crysta (SUV)';
  };

  const whatsappCalculatorUrl = `https://wa.me/919811776525?text=${encodeURIComponent(
    `Hello Satnam Voyages! I would like to book an outstation cab for ${currentRoute.from} to ${currentRoute.to} (${tripType.toUpperCase()}) with ${getVehicleName()}. Est Distance: ${estimatedFare.totalKm} km. Please confirm availability.`
  )}`;

  // JSON-LD TaxiService Schema
  const cabsJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": "https://satnamvoyages.com/cabs#taxi",
    "name": "Satnam Voyages Outstation Cabs & Chauffeur Fleet India",
    "provider": {
      "@type": "TravelAgency",
      "name": "Satnam Voyages",
      "telephone": "+91-9811776525",
      "url": "https://satnamvoyages.com/"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outstation Cab Hire Rates",
      "itemListElement": CAB_FLEET.map((cab) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": cab.name,
          "description": `${cab.models}, seating ${cab.seats} passengers with ${cab.luggageCount} bags capacity.`
        },
        "price": cab.perKmRateINR,
        "priceCurrency": "INR"
      }))
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20 font-montserrat">
      <SEOHead
        title="Outstation Cabs & Chauffeur Hire in India — Fixed Fares & Verified Fleet"
        description="Hire private outstation cabs from Delhi to Agra, Jaipur, Shimla, Manali, Rishikesh. Sedan, Innova Crysta & Tempo Traveller with verified English-speaking chauffeurs."
        canonicalPath="/cabs"
        jsonLdSchema={cabsJsonLd}
      />

      {/* Header Banner */}
      <div className="bg-[#141210] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-[#EA580C] text-xs font-bold uppercase tracking-wider block mb-2 font-headline">
              Chauffeur-Driven Tourist Transport
            </span>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase">
              Premier Outstation Cabs &amp; Fleets
            </h1>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed font-montserrat">
              Travel across North India in pristine, sanitized private vehicles. Clean AC sedans, Toyota Innova Crysta SUVs, and Maharaja Tempo Travellers driven by veteran highway chauffeurs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919811776525?text=Hello%20Satnam%20Voyages%2C%20I%20need%20an%20outstation%20cab%20from%20Delhi."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/20 flex items-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenInquiry('Custom Outstation Cab Hire')}
                className="px-6 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow transition-all border border-stone-700"
              >
                Get Instant Fare Estimate
              </button>
            </div>
          </div>

          {/* Quick Perks List */}
          <div className="grid grid-cols-2 gap-3 bg-[#201D1A] p-5 rounded-2xl border border-stone-800 text-xs text-stone-200 font-montserrat">
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>100% Police Verified &amp; Professional Drivers</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>GPS Live Tracking in Every Vehicle</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Chilled Mineral Water &amp; USB Chargers</span>
            </div>
            <div className="flex items-start">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
              <span>Zero Surge Pricing / Transparent FASTag Bills</span>
            </div>
          </div>
        </div>
      </div>

      <TrustBadges />

      {/* 1. INSTANT CAB FARE ESTIMATOR CALCULATOR */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD3] shadow-md">
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] uppercase">
                Instant Outstation Fare Calculator
              </h2>
              <p className="text-xs text-stone-500 font-montserrat">
                Transparent distance-based fare calculation from Delhi NCR to popular tourist circuits.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-2 space-y-5">
              {/* Route Selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5 font-headline">
                  Select Destination Route (From Delhi)
                </label>
                <select
                  value={selectedRouteIdx}
                  onChange={(e) => setSelectedRouteIdx(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border border-stone-300 text-sm font-semibold text-stone-900 focus:ring-2 focus:ring-[#EA580C] bg-white font-montserrat"
                >
                  {POPULAR_CAB_ROUTES.map((route, i) => (
                    <option key={i} value={i}>
                      {route.from} ➔ {route.to} ({route.distanceKm} km • {route.driveTime})
                    </option>
                  ))}
                </select>
              </div>

              {/* Trip Type: One Way vs Round Trip */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5 font-headline">
                  Trip Type
                </label>
                <div className="grid grid-cols-2 gap-3 font-montserrat">
                  <button
                    type="button"
                    onClick={() => setTripType('round-trip')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      tripType === 'round-trip'
                        ? 'border-[#EA580C] bg-orange-50 text-[#1C1917] font-bold shadow-sm'
                        : 'border-stone-200 text-stone-600 hover:bg-[#FAF6F0]'
                    }`}
                  >
                    <span className="text-sm block font-semibold">Round Trip Tour</span>
                    <span className="text-[11px] text-stone-500">Includes return + local sightseeing</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType('one-way')}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      tripType === 'one-way'
                        ? 'border-[#EA580C] bg-orange-50 text-[#1C1917] font-bold shadow-sm'
                        : 'border-stone-200 text-stone-600 hover:bg-[#FAF6F0]'
                    }`}
                  >
                    <span className="text-sm block font-semibold">One-Way Drop</span>
                    <span className="text-[11px] text-stone-500">Point to point intercity transfer</span>
                  </button>
                </div>
              </div>

              {/* Vehicle Type Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5 font-headline">
                  Vehicle Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-montserrat">
                  {[
                    { type: 'sedan', name: 'Sedan (Dzire)', rate: '₹11 / km', cap: '4 Pax' },
                    { type: 'suv', name: 'Innova Crysta', rate: '₹17 / km', cap: '6-7 Pax' },
                    { type: 'tempo', name: 'Tempo (12s)', rate: '₹24 / km', cap: '12 Pax' }
                  ].map((v) => (
                    <button
                      key={v.type}
                      type="button"
                      onClick={() => setSelectedVehicleType(v.type as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedVehicleType === v.type
                          ? 'border-[#EA580C] bg-orange-50 text-[#1C1917] font-bold shadow-sm ring-1 ring-[#EA580C]'
                          : 'border-stone-200 text-stone-600 hover:bg-[#FAF6F0]'
                      }`}
                    >
                      <span className="block text-sm font-bold text-[#1C1917]">{v.name}</span>
                      <span className="block text-xs text-[#EA580C] font-semibold">{v.rate}</span>
                      <span className="block text-[10px] text-stone-400">{v.cap}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Quote Card */}
            <div className="bg-[#141210] text-white p-6 rounded-2xl border border-stone-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#EA580C] block mb-1 font-headline">
                  Estimated Transparent Quote
                </span>
                <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase">
                  {currentRoute.from} to {currentRoute.to}
                </h3>

                <div className="space-y-2.5 text-xs text-stone-300 pb-4 border-b border-stone-800 font-montserrat">
                  <div className="flex justify-between">
                    <span>Est. Distance:</span>
                    <span className="font-mono font-bold text-white">{estimatedFare.totalKm} Kms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span className="font-semibold text-orange-400">{getVehicleName()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kilometer Charges:</span>
                    <span>₹{estimatedFare.kmCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Allowance ({estimatedFare.estimatedDays} Day):</span>
                    <span>₹{estimatedFare.allowanceTotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-[11px]">
                    <span>Highway Tolls / State Tax:</span>
                    <span>~₹{estimatedFare.stateTaxAndTollEst}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-baseline font-headline">
                  <span className="text-xs text-stone-400 font-bold uppercase">All-Inclusive Total</span>
                  <span className="text-2xl font-extrabold text-orange-400">
                    {formatPrice(estimatedFare.totalEstimateINR, estimatedFare.totalEstimateUSD)}
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-2.5">
                <a
                  href={whatsappCalculatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/20 flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book This Route via WhatsApp</span>
                </a>
                <p className="text-[10px] text-center text-stone-400 font-montserrat">
                  *Official FASTag receipt provided. Zero surge pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLEET COMPARISON GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C] block mb-1 font-headline">
            Complete Vehicle Specs
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1917] uppercase">
            Our Chauffeur Fleet Comparison
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-montserrat">
            Every vehicle in our fleet is company-maintained, regularly serviced, and driven by an experienced tourism chauffeur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAB_FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#141210]/85 backdrop-blur text-orange-400 text-xs font-bold uppercase font-headline">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C1917] font-headline uppercase">{vehicle.name}</h3>
                  <p className="text-xs text-stone-500 font-medium mb-3 font-montserrat">{vehicle.models}</p>

                  <div className="flex items-center space-x-4 text-xs text-stone-700 mb-4 pb-3 border-b border-stone-100 font-semibold font-montserrat">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.seats} Pax
                    </span>
                    <span className="flex items-center">
                      <Luggage className="w-4 h-4 text-[#EA580C] mr-1.5" /> {vehicle.luggageCount} Luggage
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 text-orange-600 mr-1.5" /> Full AC
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mb-4 italic font-accent">
                    "{vehicle.idealFor}"
                  </p>

                  <ul className="space-y-1.5 text-xs text-stone-600 font-montserrat">
                    {vehicle.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] mr-2 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="bg-[#FAF6F0] p-3.5 rounded-xl border border-[#E8DFD3] space-y-1.5 mb-4 text-xs font-montserrat">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-medium">Outstation Rate:</span>
                    <span className="font-extrabold text-[#1C1917] text-sm font-headline">
                      {currency === 'USD' ? `$${vehicle.perKmRateUSD}/km` : `₹${vehicle.perKmRateINR}/km`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-medium">Local 8h / 80km:</span>
                    <span className="font-bold text-[#EA580C] font-headline">
                      {formatPrice(vehicle.local8hr80kmRateINR, vehicle.local8hr80kmRateUSD)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-stone-500 text-[11px]">
                    <span>Driver Allowance / Day:</span>
                    <span>₹{vehicle.driverAllowancePerDayINR}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry(`Outstation Cab - ${vehicle.name}`)}
                  className="w-full py-3 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Car className="w-4 h-4" />
                  <span>Book Cab on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RATE TABLE: LOCAL VS OUTSTATION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 sm:p-8 shadow-sm overflow-hidden">
          <h2 className="font-headline text-xl sm:text-2xl font-extrabold text-[#1C1917] mb-2 uppercase">
            Standard Pricing &amp; Transparent Rate Matrix
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mb-6 font-montserrat">
            All prices in INR. Inclusive of fuel and vehicle insurance. Tolls and state border taxes billed as per actual FASTag receipts.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-stone-700 font-montserrat">
              <thead className="bg-[#FAF6F0] text-[#1C1917] font-bold uppercase text-[11px] tracking-wider border-b border-[#E8DFD3] font-headline">
                <tr>
                  <th className="py-3 px-4">Vehicle Category</th>
                  <th className="py-3 px-4">Models</th>
                  <th className="py-3 px-4">Capacity</th>
                  <th className="py-3 px-4">Outstation (per km)</th>
                  <th className="py-3 px-4">Local (8hr / 80km)</th>
                  <th className="py-3 px-4">Airport Drop (IGI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {CAB_FLEET.map((cab) => (
                  <tr key={cab.id} className="hover:bg-orange-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#1C1917] font-headline uppercase">{cab.name}</td>
                    <td className="py-3.5 px-4 text-stone-500 text-xs">{cab.models}</td>
                    <td className="py-3.5 px-4">{cab.seats} Pax / {cab.luggageCount} Bags</td>
                    <td className="py-3.5 px-4 font-bold text-[#EA580C]">₹{cab.perKmRateINR} / km</td>
                    <td className="py-3.5 px-4 font-bold text-[#C2410C]">₹{cab.local8hr80kmRateINR}</td>
                    <td className="py-3.5 px-4 text-stone-700">From ₹1,100</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
