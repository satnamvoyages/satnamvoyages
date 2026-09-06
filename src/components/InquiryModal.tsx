import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Calendar, Users, Car, CheckCircle2, Mail, Loader2, AlertCircle } from 'lucide-react';
import { ALL_TOURS } from '../data/toursData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackageTitle?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledPackageTitle
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [serviceChoice, setServiceChoice] = useState(prefilledPackageTitle || 'Golden Triangle Tour — Delhi • Agra • Jaipur');
  const [vehicleChoice, setVehicleChoice] = useState('Toyota Innova Crysta (SUV)');
  const [tier, setTier] = useState<'Standard' | 'Deluxe' | 'Luxury'>('Deluxe');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [emailStatus, setEmailStatus] = useState<'sent' | 'local' | 'error'>('sent');

  useEffect(() => {
    if (prefilledPackageTitle) {
      setServiceChoice(prefilledPackageTitle);
    }
  }, [prefilledPackageTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    const generatedRef = `SV-${Date.now().toString().slice(-6)}`;
    setRefCode(generatedRef);

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          travelDate,
          travelers,
          serviceChoice,
          vehicleChoice,
          tier,
          notes,
          refCode: generatedRef,
          source: 'Quick Inquiry Modal',
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
      console.error('Error sending inquiry via API:', err);
      setEmailStatus('local');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const messageText = `*Trip Inquiry - Satnam Voyages (satnamvoyages.com)*%0A%0A` +
      `🔖 *Ref:* %23${refCode}%0A` +
      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      (email ? `✉️ *Email:* ${encodeURIComponent(email)}%0A` : '') +
      `🗓️ *Travel Date:* ${encodeURIComponent(travelDate || 'Flexible')}%0A` +
      `👥 *Travelers:* ${travelers} Pax%0A` +
      `📍 *Package:* ${encodeURIComponent(serviceChoice)}%0A` +
      `🚗 *Vehicle:* ${encodeURIComponent(vehicleChoice)}%0A` +
      `⭐ *Tier:* ${tier} Category%0A` +
      (notes ? `📝 *Notes:* ${encodeURIComponent(notes)}%0A%0A` : '%0A') +
      `Please confirm quote and availability.`;
    return `https://wa.me/919718450905?text=${messageText}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-in fade-in duration-200 font-montserrat">
      <div className="relative w-full max-w-lg bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#E8DFD3] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#141210] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
              Direct Desk • 100% Free Custom Quote
            </span>
            <h3 className="text-lg font-bold font-headline uppercase">Plan Your Trip with Satnam Voyages</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 my-auto bg-white m-4 rounded-2xl border border-[#E8DFD3]">
            <div className="w-16 h-16 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center mx-auto border border-orange-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#1C1917] font-headline uppercase">Inquiry Received!</h4>

            <div className="inline-block px-3 py-1 bg-stone-100 rounded-lg text-xs font-mono font-bold text-[#EA580C] border border-stone-200">
              Ref: #{refCode}
            </div>

            {emailStatus === 'sent' ? (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                <span>Dispatched to our reservation desk via <strong>Gmail SMTP</strong>!</span>
              </div>
            ) : (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs text-left">
                <p className="font-semibold flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1.5 text-amber-600 flex-shrink-0" />
                  Inquiry logged in system.
                </p>
                <p className="text-[11px] text-amber-700 mt-1">
                  (Note: Set <code>GMAIL_USER</code> and <code>GMAIL_APP_PASSWORD</code> in environment variables to receive automated emails directly).
                </p>
              </div>
            )}

            <p className="text-stone-600 text-xs sm:text-sm max-w-sm mx-auto font-montserrat">
              Thank you, <span className="font-semibold text-stone-800">{name}</span>! Our tour manager will contact you at <strong className="text-stone-800">{phone}</strong> within 15 minutes with complete route &amp; chauffeur details.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 font-montserrat">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Smith / Ananya Roy"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 focus:border-[#EA580C]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                  Phone / WhatsApp (with Country Code) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 9811X XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. traveler@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 focus:border-[#EA580C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 flex items-center font-headline">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-[#EA580C]" /> Expected Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 flex items-center font-headline">
                  <Users className="w-3.5 h-3.5 mr-1 text-[#EA580C]" /> Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white"
                >
                  <option value={1}>1 Solo Explorer</option>
                  <option value={2}>2 Couple / Travelers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers (Family)</option>
                  <option value={5}>5-6 Passengers (Group)</option>
                  <option value={8}>7-10 Passengers (Large Group)</option>
                  <option value={15}>11-20 (Tempo / Coach)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                Tour Package or Cab Route
              </label>
              <select
                value={serviceChoice}
                onChange={(e) => setServiceChoice(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white"
              >
                <optgroup label="Golden Triangle Circuits">
                  {ALL_TOURS.slice(0, 3).map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Rajasthan Heritage Circuits">
                  {ALL_TOURS.slice(3, 6).map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Himachal Hill Stations">
                  {ALL_TOURS.slice(6, 9).map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Uttarakhand Spiritual">
                  {ALL_TOURS.slice(9, 12).map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Same Day &amp; Central India">
                  {ALL_TOURS.slice(12).map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.durationLabel})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Outstation Cab Transfers">
                  <option value="Delhi to Agra Outstation Cab">Delhi to Agra Outstation Cab</option>
                  <option value="Delhi to Jaipur Outstation Cab">Delhi to Jaipur Outstation Cab</option>
                  <option value="Delhi to Shimla / Manali Cab">Delhi to Shimla / Manali Cab</option>
                  <option value="Delhi to Haridwar / Rishikesh Cab">Delhi to Haridwar / Rishikesh Cab</option>
                  <option value="Custom Outstation Multi-Day Hire">Custom Outstation Multi-Day Hire</option>
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 flex items-center font-headline">
                  <Car className="w-3.5 h-3.5 mr-1 text-[#EA580C]" /> Vehicle Choice
                </label>
                <select
                  value={vehicleChoice}
                  onChange={(e) => setVehicleChoice(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E8DFD3] text-xs focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40 bg-white"
                >
                  <option value="Maruti Dzire / Etios (Sedan)">Maruti Dzire / Etios (Sedan)</option>
                  <option value="Toyota Innova Crysta (SUV)">Toyota Innova Crysta (SUV)</option>
                  <option value="Toyota Fortuner (VIP SUV)">Toyota Fortuner (VIP SUV)</option>
                  <option value="12-Seater Maharaja Tempo Traveller">12-Seater Maharaja Tempo</option>
                  <option value="16-20 Seater Tempo Traveller">16-20 Seater Tempo</option>
                  <option value="Luxury 27-Seater Mini Coach">Luxury Mini Coach</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                  Accommodation Tier
                </label>
                <div className="flex rounded-xl border border-[#E8DFD3] p-1 bg-white text-xs">
                  {(['Standard', 'Deluxe', 'Luxury'] as const).map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTier(t)}
                      className={`flex-1 py-1 rounded-lg font-semibold transition-all ${
                        tier === t
                          ? 'bg-[#EA580C] text-white shadow-sm'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1 font-headline">
                Specific Requests or Pickup Location (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Pickup from Delhi Airport Terminal 3 at 9:00 AM, need baby car seat..."
                className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD3] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C]/40"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-inquiry-btn"
                className="w-full py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] disabled:bg-orange-400 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry via Gmail SMTP...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry (Free Instant Quote)</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-stone-500 mt-2">
                🔒 Safe &amp; verified. Powered by Gmail SMTP direct to Satnam Voyages reservations.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
