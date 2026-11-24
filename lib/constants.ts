// Canonical host. The apex (satnamvoyages.com) 308-redirects to www, so every
// canonical, sitemap URL, og:url and JSON-LD @id must use the www host.
export const SITE_URL = 'https://www.satnamvoyages.com';
export const SITE_NAME = 'Satnam Voyages';
export const PHONE_DISPLAY = '+91 97184 50905';
export const PHONE_TEL = '+919718450905';
export const PHONE_WHATSAPP = '919718450905';
export const CONTACT_EMAIL = 'satnamvoyages@gmail.com';
export const ADDRESS = {
  // TODO (owner): add the building / shop number, e.g. 'M-12, Outer Circle, Connaught Place'.
  street: 'Outer Circle, Connaught Place',
  locality: 'New Delhi',
  region: 'Delhi',
  postalCode: '110001',
  country: 'IN',
};

// Approximate coordinates for Outer Circle, Connaught Place.
// TODO (owner): replace with the exact office pin from Google Maps (5 decimals).
export const GEO = { latitude: 28.6315, longitude: 77.2167 };

export const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Satnam+Voyages+Connaught+Place+New+Delhi';

// Official off-site profiles. Add Google Business Profile, Facebook,
// TripAdvisor, Justdial etc. here as they are created/claimed.
export const SOCIAL_PROFILES: string[] = ['https://www.instagram.com/satnamvoyages/'];

export const INSTAGRAM_URL = 'https://www.instagram.com/satnamvoyages/';
