'use client';

import React, { useState } from 'react';
import {
  PlaneLanding,
  PlaneTakeoff,
  Car,
  Hotel,
  UtensilsCrossed,
  Landmark,
  Route,
  Languages,
  UserCheck,
  Send,
  Loader2,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import { PHONE_WHATSAPP } from '@/lib/constants';

/**
 * "Build your trip" request form for the offer pages. The guest ticks the services they want
 * (airport arrival / departure, taxi, hotel, meals, guide, transfers, language guide, escort)
 * and we email the request through /api/send-inquiry. No prices are shown: every trip is quoted.
 */

const SERVICES = [
  { key: 'arrival', label: 'Airport arrival pickup', icon: PlaneLanding },
  { key: 'departure', label: 'Airport departure drop', icon: PlaneTakeoff },
  { key: 'taxi', label: 'Taxi / car with driver', icon: Car },
  { key: 'hotel', label: 'Hotel booking', icon: Hotel },
  { key: 'meals', label: 'Meals', icon: UtensilsCrossed },
  { key: 'guide', label: 'Local sightseeing guide', icon: Landmark },
  { key: 'transfers', label: 'City-to-city transfers', icon: Route },
  { key: 'languageGuide', label: 'Language-speaking guide', icon: Languages },
  { key: 'escort', label: 'Tour escort (travels with you)', icon: UserCheck },
] as const;

type ServiceKey = (typeof SERVICES)[number]['key'];

const VEHICLES = ['Sedan (up to 3 guests)', 'Toyota Innova Crysta (up to 6)', 'Tempo Traveller (up to 12)', 'Luxury SUV', 'Coach (large groups)'];
const HOTELS = ['3-star / Standard', '4-star / Deluxe', '5-star / Luxury', 'Heritage palace hotels', 'Mix, please advise'];
const MEALS = ['Breakfast only', 'Breakfast + dinner', 'All meals', 'Vegetarian', 'Vegan / special diet'];
const LANGUAGES = ['English', 'French', 'German', 'Spanish', 'Italian', 'Portuguese', 'Russian', 'Japanese', 'Chinese (Mandarin)', 'Other'];

const field =
  'w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white';
const lbl = 'block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5';

export const CustomTripForm: React.FC<{ packageTitle: string; source: string }> = ({ packageTitle, source }) => {
  const [f, setF] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    adults: 2,
    children: 0,
    arrivalDate: '',
    arrivalAirport: 'Delhi (DEL)',
    arrivalFlight: '',
    departureDate: '',
    departureAirport: 'Delhi (DEL)',
    departureFlight: '',
    vehicle: VEHICLES[1],
    hotel: HOTELS[1],
    rooms: 1,
    meals: MEALS[0],
    language: LANGUAGES[0],
    notes: '',
  });
  const [services, setServices] = useState<Record<ServiceKey, boolean>>({
    arrival: true,
    departure: true,
    taxi: true,
    hotel: false,
    meals: false,
    guide: false,
    transfers: true,
    languageGuide: false,
    escort: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [ref, setRef] = useState('');
  const [error, setError] = useState('');

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.type === 'number' ? Math.max(0, Number(e.target.value)) : e.target.value }));
  const toggle = (k: ServiceKey) => setServices((s) => ({ ...s, [k]: !s[k] }));

  const details = () => {
    const rows: { label: string; value: string }[] = [
      { label: 'Country of residence', value: f.country },
      {
        label: 'Services requested',
        value: SERVICES.filter((s) => services[s.key]).map((s) => s.label).join(', ') || 'None ticked',
      },
    ];
    if (services.arrival)
      rows.push({ label: 'Arrival', value: [f.arrivalDate, f.arrivalAirport, f.arrivalFlight && `flight ${f.arrivalFlight}`].filter(Boolean).join(' · ') });
    if (services.departure)
      rows.push({ label: 'Departure', value: [f.departureDate, f.departureAirport, f.departureFlight && `flight ${f.departureFlight}`].filter(Boolean).join(' · ') });
    if (services.taxi || services.transfers) rows.push({ label: 'Vehicle', value: f.vehicle });
    if (services.hotel) rows.push({ label: 'Hotel', value: `${f.hotel}, ${f.rooms} room(s)` });
    if (services.meals) rows.push({ label: 'Meals', value: f.meals });
    if (services.languageGuide) rows.push({ label: 'Guide language', value: f.language });
    return rows.filter((r) => r.value);
  };

  const waText = () =>
    encodeURIComponent(
      `Hello Satnam Voyages, I'd like a quote for: ${packageTitle}\n` +
        `Name: ${f.name}\nTravellers: ${f.adults} adults${f.children ? `, ${f.children} children` : ''}\n` +
        details().map((r) => `${r.label}: ${r.value}`).join('\n') +
        (f.notes ? `\nNotes: ${f.notes}` : '')
    );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!f.name.trim() || !f.phone.trim()) {
      setError('Please add your name and phone / WhatsApp number.');
      return;
    }
    setStatus('sending');
    const r = `SV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRef(r);
    try {
      await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: f.name.trim(),
          phone: f.phone.trim(),
          email: f.email.trim(),
          travelDate: f.arrivalDate || 'Flexible',
          adults: f.adults,
          children: f.children,
          tourTitle: packageTitle,
          vehicle: services.taxi || services.transfers ? f.vehicle : 'Not requested',
          tier: services.hotel ? f.hotel : 'No hotel requested',
          pickupLocation: services.arrival ? f.arrivalAirport : undefined,
          specialRequests: f.notes,
          serviceDetails: details(),
          refCode: r,
          source,
        }),
      });
    } catch {
      // The guest still gets the WhatsApp fallback below.
    }
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 sm:p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="font-headline text-xl font-extrabold uppercase text-[#1C1917]">Thank you, {f.name}!</h3>
        <p className="text-sm text-stone-600">
          Your request <strong className="text-[#EA580C] font-mono">#{ref}</strong> has reached our team. We&apos;ll reply with a
          written quote and itinerary. For a faster reply, send it on WhatsApp too.
        </p>
        <a
          href={`https://wa.me/${PHONE_WHATSAPP}?text=${waText()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-xs uppercase tracking-wider"
        >
          <MessageSquare className="w-4 h-4 mr-2" /> Send on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-2xl border border-[#E8DFD3] shadow-sm p-5 sm:p-8 space-y-6 font-montserrat">
      {/* Services */}
      <fieldset>
        <legend className={lbl}>What would you like us to arrange?</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-1">
          {SERVICES.map(({ key, label, icon: Icon }) => (
            <label
              key={key}
              className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-sm transition-colors ${
                services[key] ? 'border-[#EA580C] bg-orange-50 text-[#1C1917] font-semibold' : 'border-[#E8DFD3] text-stone-700 hover:bg-[#FAF6F0]'
              }`}
            >
              <input type="checkbox" checked={services[key]} onChange={() => toggle(key)} className="accent-[#EA580C] w-4 h-4" />
              <Icon className="w-4 h-4 text-[#EA580C] shrink-0" aria-hidden="true" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Arrival / departure */}
      {(services.arrival || services.departure) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.arrival && (
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] space-y-3">
              <p className="text-xs font-bold uppercase text-[#EA580C] flex items-center"><PlaneLanding className="w-4 h-4 mr-1.5" /> Arrival</p>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={lbl} htmlFor="ctf-ad">Date</label><input id="ctf-ad" type="date" value={f.arrivalDate} onChange={set('arrivalDate')} className={field} /></div>
                <div><label className={lbl} htmlFor="ctf-af">Flight no.</label><input id="ctf-af" value={f.arrivalFlight} onChange={set('arrivalFlight')} placeholder="e.g. BA143" className={field} /></div>
              </div>
              <div><label className={lbl} htmlFor="ctf-aa">Airport</label><input id="ctf-aa" value={f.arrivalAirport} onChange={set('arrivalAirport')} className={field} /></div>
            </div>
          )}
          {services.departure && (
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD3] space-y-3">
              <p className="text-xs font-bold uppercase text-[#EA580C] flex items-center"><PlaneTakeoff className="w-4 h-4 mr-1.5" /> Departure</p>
              <div className="grid grid-cols-2 gap-3">
                <div><label className={lbl} htmlFor="ctf-dd">Date</label><input id="ctf-dd" type="date" value={f.departureDate} onChange={set('departureDate')} className={field} /></div>
                <div><label className={lbl} htmlFor="ctf-df">Flight no.</label><input id="ctf-df" value={f.departureFlight} onChange={set('departureFlight')} placeholder="e.g. AI101" className={field} /></div>
              </div>
              <div><label className={lbl} htmlFor="ctf-da">Airport</label><input id="ctf-da" value={f.departureAirport} onChange={set('departureAirport')} className={field} /></div>
            </div>
          )}
        </div>
      )}

      {/* Preferences for ticked services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(services.taxi || services.transfers) && (
          <div><label className={lbl} htmlFor="ctf-v">Vehicle</label><select id="ctf-v" value={f.vehicle} onChange={set('vehicle')} className={field}>{VEHICLES.map((v) => <option key={v}>{v}</option>)}</select></div>
        )}
        {services.hotel && (
          <>
            <div><label className={lbl} htmlFor="ctf-h">Hotel category</label><select id="ctf-h" value={f.hotel} onChange={set('hotel')} className={field}>{HOTELS.map((v) => <option key={v}>{v}</option>)}</select></div>
            <div><label className={lbl} htmlFor="ctf-r">Rooms</label><input id="ctf-r" type="number" min={1} value={f.rooms} onChange={set('rooms')} className={field} /></div>
          </>
        )}
        {services.meals && (
          <div><label className={lbl} htmlFor="ctf-m">Meal plan</label><select id="ctf-m" value={f.meals} onChange={set('meals')} className={field}>{MEALS.map((v) => <option key={v}>{v}</option>)}</select></div>
        )}
        {services.languageGuide && (
          <div><label className={lbl} htmlFor="ctf-l">Guide language</label><select id="ctf-l" value={f.language} onChange={set('language')} className={field}>{LANGUAGES.map((v) => <option key={v}>{v}</option>)}</select></div>
        )}
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className={lbl} htmlFor="ctf-n">Full name *</label><input id="ctf-n" required value={f.name} onChange={set('name')} autoComplete="name" className={field} /></div>
        <div><label className={lbl} htmlFor="ctf-p">Phone / WhatsApp (with country code) *</label><input id="ctf-p" required type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="+44 7700 900123" className={field} /></div>
        <div><label className={lbl} htmlFor="ctf-e">Email</label><input id="ctf-e" type="email" value={f.email} onChange={set('email')} autoComplete="email" className={field} /></div>
        <div><label className={lbl} htmlFor="ctf-c">Country of residence</label><input id="ctf-c" value={f.country} onChange={set('country')} autoComplete="country-name" placeholder="e.g. United Kingdom" className={field} /></div>
        <div><label className={lbl} htmlFor="ctf-ad2">Adults</label><input id="ctf-ad2" type="number" min={1} value={f.adults} onChange={set('adults')} className={field} /></div>
        <div><label className={lbl} htmlFor="ctf-ch">Children</label><input id="ctf-ch" type="number" min={0} value={f.children} onChange={set('children')} className={field} /></div>
      </div>
      <div><label className={lbl} htmlFor="ctf-no">Anything else?</label><textarea id="ctf-no" rows={3} value={f.notes} onChange={set('notes')} placeholder="Cities you want to see, special occasions, mobility needs, dietary requirements..." className={field} /></div>

      {error && <p className="text-sm text-rose-600" role="alert">{error}</p>}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p className="text-xs text-stone-500">Free, no-obligation quote. We confirm every service and price in writing before you pay anything.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-8 py-3.5 rounded-xl bg-[#EA580C] hover:bg-[#C2410C] disabled:bg-orange-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 font-headline"
        >
          {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {status === 'sending' ? 'Sending…' : 'Get My Free Quote'}
        </button>
      </div>
    </form>
  );
};
