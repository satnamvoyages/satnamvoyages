import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Car,
  Hotel,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Clock,
  Mail,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Currency } from '../types';

interface ItineraryBookingFormProps {
  tourTitle: string;
  tourSlug: string;
  durationLabel: string;
  defaultTier?: 'Standard' | 'Deluxe' | 'Luxury';
  defaultVehicle?: 'Sedan' | 'Innova Crysta' | 'Tempo Traveller';
  estimatedPriceINR: number;
  estimatedPriceUSD: number;
  currency: Currency;
  isCompactSidebar?: boolean;
}

export const ItineraryBookingForm: React.FC<ItineraryBookingFormProps> = ({
  tourTitle,
  tourSlug,
  durationLabel,
  defaultTier = 'Deluxe',
  defaultVehicle = 'Innova Crysta',
  estimatedPriceINR,
  estimatedPriceUSD,
  currency,
  isCompactSidebar = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+91',
    email: '',
    travelDate: '',
    adults: 2,
    children: 0,
    tier: defaultTier,
    vehicle: defaultVehicle,
    pickupLocation: 'Delhi Airport (IGI T3)',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [emailStatus, setEmailStatus] = useState<'sent' | 'local' | 'error'>('sent');

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') return `$${usd.toLocaleString()}`;
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    const ref = `SV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: `${formData.countryCode} ${formData.phone.trim()}`,
          email: formData.email.trim(),
          travelDate: formData.travelDate,
          adults: formData.adults,
          children: formData.children,
          tourTitle,
          vehicle: formData.vehicle,
          tier: formData.tier,
          pickupLocation: formData.pickupLocation,
          specialRequests: formData.specialRequests,
          refCode: ref,
          source: `Itinerary Booking Form (${tourTitle})`,
        }),
      });

      const data = await response.json();
      if (data.emailSent) {
        setEmailStatus('sent');
      } else {
        setEmailStatus('local');
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting itinerary inquiry:', err);
      setEmailStatus('local');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Satnam Voyages! 🇮🇳\nI would like to book an itinerary inquiry:\n\n` +
    `• Package: ${tourTitle} (${durationLabel})\n` +
    `• Name: ${formData.name}\n` +
    `• Phone: ${formData.countryCode} ${formData.phone}\n` +
    `• Email: ${formData.email || 'Not provided'}\n` +
    `• Date: ${formData.travelDate || 'Flexible'}\n` +
    `• Travelers: ${formData.adults} Adults${formData.children > 0 ? `, ${formData.children} Children` : ''}\n` +
    `• Tier: ${formData.tier} Stay\n` +
    `• Vehicle: ${formData.vehicle}\n` +
    `• Pickup: ${formData.pickupLocation}\n` +
    (formData.specialRequests ? `• Requests: ${formData.specialRequests}\n` : '') +
    (bookingRef ? `• Ref Code: #${bookingRef}\n` : '') +
    `\nPlease share availability and quote!`
  );

  const whatsappUrl = `https://wa.me/919718450905?text=${whatsappMessage}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 border border-[#E8DFD3] shadow-lg text-center space-y-4 animate-in fade-in">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 font-headline block">
            Booking Inquiry Received
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-[#1C1917] uppercase font-headline mt-1">
            Thank You, {formData.name}!
          </h3>
          <p className="text-xs text-stone-600 font-montserrat mt-1">
            Your inquiry reference is <strong className="text-[#EA580C] font-mono">#{bookingRef}</strong>. Our tour manager will contact you within <strong>15 minutes</strong> with the confirmed chauffeur details and itinerary.
          </p>
        </div>

        {emailStatus === 'sent' ? (
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 flex-shrink-0 text-emerald-600" />
            <span>Dispatched via <strong>Gmail SMTP</strong> to reservation desk!</span>
          </div>
        ) : (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs text-left">
            <p className="font-semibold flex items-center">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-amber-600 flex-shrink-0" />
              Inquiry logged in booking system.
            </p>
            <p className="text-[11px] text-amber-700 mt-1">
              (Configure <code>GMAIL_USER</code> and <code>GMAIL_APP_PASSWORD</code> in .env to deliver via Gmail SMTP).
            </p>
          </div>
        )}

        <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#E8DFD3] text-left text-xs space-y-1.5 font-montserrat">
          <div className="flex justify-between">
            <span className="text-stone-500">Selected Tour:</span>
            <span className="font-bold text-stone-900 truncate max-w-[180px]">{tourTitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Tier &amp; Vehicle:</span>
            <span className="font-semibold text-stone-800">{formData.tier} • {formData.vehicle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Estimated Total:</span>
            <span className="font-bold text-[#EA580C]">{formatPrice(estimatedPriceINR * formData.adults, estimatedPriceUSD * formData.adults)}</span>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md font-headline"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp Now</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-2 rounded-xl text-stone-500 hover:text-stone-800 text-xs font-semibold uppercase tracking-wider font-headline"
          >
            Edit or Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-[#E8DFD3] shadow-md font-montserrat ${
        isCompactSidebar ? 'p-5 space-y-4' : 'p-6 sm:p-8 space-y-6'
      }`}
    >
      {/* Form Header */}
      <div className="border-b border-[#E8DFD3] pb-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-full font-headline">
            <Sparkles className="w-3 h-3 mr-1 text-[#EA580C]" />
            Instant Itinerary Booking Form
          </span>
          <span className="text-[11px] text-stone-500 font-semibold flex items-center">
            <Clock className="w-3 h-3 mr-1 text-emerald-600" /> 15m Response
          </span>
        </div>

        <h3 className="font-headline text-lg sm:text-xl font-extrabold text-[#1C1917] uppercase mt-2">
          Reserve "{tourTitle}"
        </h3>
        <p className="text-xs text-stone-500 mt-0.5">
          Fill out this form to receive a detailed day-by-day quote, vehicle options, and confirmed driver schedule.
        </p>
      </div>

      {/* Inputs Grid */}
      <div className={`grid gap-4 ${isCompactSidebar ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Full Name <span className="text-[#EA580C]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. John Doe / David Smith"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
          />
        </div>

        {/* WhatsApp Phone */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Phone / WhatsApp Number <span className="text-[#EA580C]">*</span>
          </label>
          <div className="flex space-x-2">
            <select
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="w-24 px-2 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+65">🇸🇬 +65</option>
              <option value="+971">🇦🇪 +971</option>
            </select>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 98117 76525"
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Email Address (Optional)
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
          />
        </div>

        {/* Travel Start Date */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Expected Start Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Number of Travelers */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Adult Travelers (12+ yrs)
          </label>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
              className="w-9 h-9 rounded-lg bg-[#FAF6F0] border border-[#E8DFD3] text-stone-700 font-bold hover:bg-stone-200 text-sm flex items-center justify-center"
            >
              -
            </button>
            <span className="font-bold text-sm text-stone-900 min-w-[20px] text-center">
              {formData.adults}
            </span>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
              className="w-9 h-9 rounded-lg bg-[#FAF6F0] border border-[#E8DFD3] text-stone-700 font-bold hover:bg-stone-200 text-sm flex items-center justify-center"
            >
              +
            </button>
            <span className="text-xs text-stone-500 ml-1">Adults</span>
          </div>
        </div>

        {/* Vehicle Selection */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Vehicle Preference
          </label>
          <select
            value={formData.vehicle}
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value as any })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
          >
            <option value="Sedan">Swift Dzire / Etios AC (1-3 Pax)</option>
            <option value="Innova Crysta">Toyota Innova Crysta SUV (Up to 6 Pax)</option>
            <option value="Tempo Traveller">12/16-Seater Luxury Tempo Traveller</option>
          </select>
        </div>

        {/* Hotel Tier */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Hotel Tier Preference
          </label>
          <select
            value={formData.tier}
            onChange={(e) => setFormData({ ...formData, tier: e.target.value as any })}
            className="w-full px-3 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
          >
            <option value="Standard">Standard (3-Star Boutique)</option>
            <option value="Deluxe">Deluxe (4-Star Premium Hotel)</option>
            <option value="Luxury">Luxury (5-Star &amp; Royal Heritage Haveli)</option>
          </select>
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
            Pickup City / Station
          </label>
          <input
            type="text"
            value={formData.pickupLocation}
            onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
            placeholder="e.g. Delhi Airport T3 or Hotel in Central Delhi"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
          Special Requests / Customizations
        </label>
        <textarea
          rows={2}
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="Mention dietary preferences, child seat needed, monument guide requirements, or specific timings..."
          className="w-full px-3.5 py-2 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
        ></textarea>
      </div>

      {/* Price Summary & Submit CTA */}
      <div className="pt-2 border-t border-[#E8DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[11px] text-stone-500 block">Est. Total for {formData.adults} Adults:</span>
          <span className="text-xl sm:text-2xl font-extrabold text-[#1C1917] font-headline">
            {formatPrice(estimatedPriceINR * formData.adults, estimatedPriceUSD * formData.adults)}
          </span>
          <span className="text-[10px] text-stone-400 block">All-inclusive (Chauffeur, AC cab, fuel, tolls, stay)</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          id="submit-itinerary-inquiry-btn"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] disabled:bg-orange-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 font-headline cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending via Gmail SMTP...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 text-amber-200" />
              <span>Submit Booking Inquiry</span>
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center space-x-4 text-[11px] text-stone-500 pt-1">
        <span className="flex items-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C] mr-1" /> No Advance Payment Needed to Inquire
        </span>
        <span>•</span>
        <span>24/7 Chauffeur Coordination</span>
      </div>
    </form>
  );
};
