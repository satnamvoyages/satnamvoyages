import { CabVehicle } from '../types';

export const CAB_FLEET: CabVehicle[] = [
  {
    id: 'sedan-prime',
    name: 'Executive Sedan',
    category: 'Sedan',
    models: 'Maruti Suzuki Dzire / Toyota Etios / Honda Amaze',
    seats: 4,
    luggageCount: 3,
    airConditioned: true,
    perKmRateINR: 11,
    perKmRateUSD: 0.14,
    local8hr80kmRateINR: 2000,
    local8hr80kmRateUSD: 25,
    driverAllowancePerDayINR: 350,
    minKmPerDay: 250,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: [
      'Dual Front Airbags & ABS with EBD',
      'Whisper-quiet AC with rear vents',
      'Clean sanitized seat covers & mineral water',
      'Mobile charging ports & auxiliary audio',
      'English-conversant, verified chauffeur'
    ],
    idealFor: 'Couples, solo travelers, business trips, and small families up to 3-4 passengers'
  },
  {
    id: 'suv-crysta',
    name: 'Luxury SUV — Innova Crysta',
    category: 'SUV',
    models: 'Toyota Innova Crysta (Captain / Bench Seats)',
    seats: 7,
    luggageCount: 5,
    airConditioned: true,
    perKmRateINR: 17,
    perKmRateUSD: 0.22,
    local8hr80kmRateINR: 3200,
    local8hr80kmRateUSD: 40,
    driverAllowancePerDayINR: 400,
    minKmPerDay: 250,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: [
      'Plush reclining leather captain chairs',
      'Dual-zone climate control AC on all 3 rows',
      'Generous boot space for 4-5 large international bags',
      'Smooth highway suspension suited for long outstation tours',
      'Highway veteran chauffeur with mountain and desert experience'
    ],
    idealFor: 'Families, international tourists with heavy luggage, and Golden Triangle excursions'
  },
  {
    id: 'suv-fortuner',
    name: 'VIP Premium SUV',
    category: 'Luxury SUV',
    models: 'Toyota Fortuner 4x4 / Ford Endeavour',
    seats: 6,
    luggageCount: 4,
    airConditioned: true,
    perKmRateINR: 38,
    perKmRateUSD: 0.48,
    local8hr80kmRateINR: 7500,
    local8hr80kmRateUSD: 94,
    driverAllowancePerDayINR: 600,
    minKmPerDay: 250,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    features: [
      'VIP protocol appearance & tinted privacy glass',
      'High ground clearance for rugged terrain & wildlife safaris',
      'Premium surround sound system',
      'Complimentary onboard refreshments & Wi-Fi',
      'Elite senior concierge driver in suit'
    ],
    idealFor: 'Delegates, corporate leadership, luxury seekers, and VIP diplomatic tours'
  },
  {
    id: 'tempo-12',
    name: 'Maharaja Tempo Traveller (12/16 Seater)',
    category: 'Tempo Traveller',
    models: 'Force Urbania / Force Maharaja Modified 12-16-20 Seater',
    seats: 12,
    luggageCount: 12,
    airConditioned: true,
    perKmRateINR: 24,
    perKmRateUSD: 0.30,
    local8hr80kmRateINR: 5200,
    local8hr80kmRateUSD: 65,
    driverAllowancePerDayINR: 600,
    minKmPerDay: 250,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    features: [
      '1x1 Individual Maharaja pushback bucket seats',
      'Overhead individual AC blowers & reading lights',
      'LED TV screen, karaoke mic & premium music system',
      'Dedicated rear luggage carrier with waterproof tarp',
      'Wide panoramic windows for sightseeing'
    ],
    idealFor: 'Extended family groups, wedding parties, friends retreats, and group tours'
  },
  {
    id: 'coach-bus',
    name: 'Luxury Volvo & Mini Coach (27 / 45 Seater)',
    category: 'Coach',
    models: 'BharatBenz / Volvo 9600 Air-Suspension Coach',
    seats: 27,
    luggageCount: 30,
    airConditioned: true,
    perKmRateINR: 42,
    perKmRateUSD: 0.52,
    local8hr80kmRateINR: 9500,
    local8hr80kmRateUSD: 118,
    driverAllowancePerDayINR: 800,
    minKmPerDay: 300,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: [
      'Air-cushioned pneumatic suspension for zero fatigue',
      'High-deck seating with clear landscape vistas',
      'Public address (PA) guide microphone system',
      'Dual chauffeurs + helper boy on board for long trips',
      'First-aid kit and GPS live tracking enabled'
    ],
    idealFor: 'Corporate retreats, destination weddings, school/college groups, and international tour delegations'
  }
];

export interface PopularRoute {
  from: string;
  to: string;
  distanceKm: number;
  driveTime: string;
  sedanFareINR: number;
  suvFareINR: number;
  tempoFareINR: number;
}

export const POPULAR_CAB_ROUTES: PopularRoute[] = [
  { from: 'Delhi', to: 'Agra', distanceKm: 230, driveTime: '3.5 hrs (Yamuna Expy)', sedanFareINR: 2800, suvFareINR: 4200, tempoFareINR: 6200 },
  { from: 'Delhi', to: 'Jaipur', distanceKm: 280, driveTime: '4.0 hrs (Delhi-Mumbai Expy)', sedanFareINR: 3400, suvFareINR: 4900, tempoFareINR: 7500 },
  { from: 'Delhi', to: 'Chandigarh', distanceKm: 250, driveTime: '4.0 hrs (NH44)', sedanFareINR: 3100, suvFareINR: 4500, tempoFareINR: 6800 },
  { from: 'Delhi', to: 'Haridwar / Rishikesh', distanceKm: 240, driveTime: '4.5 hrs (Meerut Expy)', sedanFareINR: 3200, suvFareINR: 4600, tempoFareINR: 6900 },
  { from: 'Delhi', to: 'Shimla', distanceKm: 350, driveTime: '7.5 hrs (Himalayan Expy)', sedanFareINR: 5200, suvFareINR: 7500, tempoFareINR: 10800 },
  { from: 'Delhi', to: 'Manali', distanceKm: 530, driveTime: '11.5 hrs', sedanFareINR: 8400, suvFareINR: 12200, tempoFareINR: 17500 },
  { from: 'Delhi', to: 'Dehradun / Mussoorie', distanceKm: 290, driveTime: '5.5 hrs', sedanFareINR: 3800, suvFareINR: 5400, tempoFareINR: 8200 },
  { from: 'Jaipur', to: 'Jodhpur', distanceKm: 340, driveTime: '5.5 hrs', sedanFareINR: 4200, suvFareINR: 5900, tempoFareINR: 8900 },
  { from: 'Jaipur', to: 'Udaipur', distanceKm: 390, driveTime: '6.5 hrs', sedanFareINR: 4800, suvFareINR: 6800, tempoFareINR: 9800 },
  { from: 'Delhi IGI Airport', to: 'Central Delhi / Gurgaon', distanceKm: 35, driveTime: '45 mins', sedanFareINR: 1100, suvFareINR: 1800, tempoFareINR: 2800 },
];
