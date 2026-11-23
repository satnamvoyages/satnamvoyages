export type Currency = 'INR' | 'USD';

export interface TourDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  stayCity?: string;
  mealsIncluded?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Golden Triangle' | 'Rajasthan' | 'Himachal' | 'Uttarakhand' | 'Same Day';
  durationDays: number;
  durationNights: number;
  durationLabel: string;
  startingPriceINR: number;
  startingPriceUSD: number;
  rating: number;
  reviewsCount: number;
  primaryImage: string;
  galleryImages: string[];
  route: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourDay[];
  featured?: boolean;
  bestSeason?: string;
}

export interface CabVehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Luxury SUV' | 'Tempo Traveller' | 'Coach';
  models: string;
  seats: number;
  luggageCount: number;
  airConditioned: boolean;
  perKmRateINR: number;
  perKmRateUSD: number;
  local8hr80kmRateINR: number;
  local8hr80kmRateUSD: number;
  driverAllowancePerDayINR: number;
  minKmPerDay: number;
  image: string;
  features: string[];
  idealFor: string;
}

export interface DestinationRegion {
  id: string;
  slug: 'rajasthan' | 'himachal' | 'uttarakhand';
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  bestSeason: string;
  keyCities: {
    name: string;
    tagline: string;
    image: string;
    attractions: string[];
  }[];
  cabTravelTimeFromDelhi: string;
  associatedPackageSlugs: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  tourName: string;
  comment: string;
  source: 'Google Reviews' | 'TripAdvisor';
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Cabs' | 'Tours' | 'Payment';
  question: string;
  answer: string;
}

export interface BookingInquiry {
  name: string;
  phone: string;
  email?: string;
  date: string;
  travelers: number;
  packageTitle?: string;
  vehicleType?: string;
  tier?: 'Standard' | 'Deluxe' | 'Luxury';
  specialRequests?: string;
}
