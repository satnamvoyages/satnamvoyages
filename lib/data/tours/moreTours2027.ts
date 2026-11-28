import { JAIPUR_GUEST_HERO } from '../clientPhotosData';
import type { TourPackage } from '../../types';

// 2027 keyword-led packages for international travellers.
// Owner policy: no prices anywhere on the site, so startingPrice fields are 0 and never rendered.

const IMG = {
  taj: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
  tajDetail: 'https://images.unsplash.com/photo-1548013146-72479768bada',
  agraFort: 'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4',
  indiaGate: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
  hawaMahal: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33',
  amber: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a',
  jaipurOld: 'https://images.unsplash.com/photo-1599661046289-e31897846e41',
  cityPalaceJaipur: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
  mehrangarh: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0',
  jaswantThada: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1',
  jaisalmer: 'https://images.unsplash.com/photo-1509233725247-49e657c54213',
  jaisalmerFort: 'https://images.unsplash.com/photo-1686825780583-8be7c349a4b4',
  pichola: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
  cityPalaceUdaipur: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10',
};

const big = (u: string) => `${u}?auto=format&fit=crop&w=1200&q=80`;
const small = (u: string) => `${u}?auto=format&fit=crop&w=800&q=80`;

const CAR_INCLUSIONS = [
  'Private air-conditioned vehicle (Dzire/Innova) with English-speaking chauffeur',
  'All fuel costs, highway tolls, state border permits, and parking charges',
  'Driver lodging, meals, and daily allowances',
  'Bottled mineral water in the cab',
  'Dedicated 24/7 concierge and itinerary coordination',
];

const STANDARD_EXCLUSIONS = [
  'Monument entrance tickets & camera fees (available as add-on)',
  'Hotel accommodation (we can book Standard, Deluxe or Luxury hotels at extra cost)',
  'Personal expenses, laundry, and guide tips',
  'International and domestic flights',
];

export const MORE_TOURS_2027_DRIVE_LEGS: Record<string, { km: number; time: string }> = {
  'Delhi Airport to Agra': { km: 240, time: '4 hrs via Yamuna Expressway' },
  'Agra to Delhi': { km: 230, time: '3.5 hrs via Yamuna Expressway (add about 1.5 hrs for the Fatehpur Sikri detour)' },
  'Delhi to Jaipur': { km: 280, time: '4 hrs via Delhi-Mumbai Expressway' },
  'Delhi to Mandawa': { km: 260, time: '5.5 hrs' },
  'Mandawa to Bikaner': { km: 190, time: '3.5 hrs' },
  'Bikaner to Jaisalmer': { km: 330, time: '5.5 hrs' },
  'Udaipur - Kumbhalgarh - Ranakpur - Udaipur': { km: 280, time: 'About 6 hrs of driving across the loop' },
};

export const MORE_TOURS_2027: TourPackage[] = [
  // 1 — taj mahal sunrise tour from delhi
  {
    id: 'tour-25',
    slug: 'taj-mahal-sunrise-tour-from-delhi',
    seoTitle: 'Taj Mahal Sunrise Tour from Delhi by Car',
    metaDescription: 'Taj Mahal sunrise tour from Delhi by private car: early hotel pickup, the Taj in first light, Agra Fort, back in Delhi by afternoon. Closed Fridays. Free quote.',
    title: 'Taj Mahal Sunrise Tour from Delhi',
    subtitle: 'See the Taj Mahal in soft first light, before the crowds, and be back in Delhi the same day',
    category: 'Same Day',
    durationDays: 1,
    durationNights: 0,
    durationLabel: 'Same Day Return (12-13 Hours)',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.taj),
    galleryImages: [small(IMG.taj), small(IMG.tajDetail), small(IMG.agraFort)],
    route: 'Delhi ➔ Agra (Taj Mahal at sunrise, Agra Fort) ➔ Delhi',
    overview:
      'The Taj Mahal is at its most beautiful in the first hour of the day, when the marble turns from grey to pink to white and the gardens are still quiet. On this private sunrise tour your chauffeur collects you from your Delhi hotel in the small hours and drives the Yamuna Expressway to Agra in about 3.5 hours, so you reach the gates as they open. After the Taj you visit Agra Fort, stop for breakfast, and are back in Delhi by mid-afternoon with the rest of the day free. The Taj Mahal is closed on Fridays.',
    highlights: [
      'Arrive at the Taj Mahal gates as they open around sunrise (exact time varies by season)',
      'Photograph the Taj in soft light with far fewer visitors than at midday',
      'Agra Fort, the red sandstone Mughal citadel with views back to the Taj',
      'Private AC car and English-speaking chauffeur door to door',
      'Back in Delhi by mid-afternoon; Taj Mahal closed on Fridays',
    ],
    inclusions: [
      ...CAR_INCLUSIONS,
      'Early-morning pickup from any Delhi, Gurgaon or Noida hotel',
    ],
    exclusions: [
      'Monument entrance tickets & camera fees (available as add-on)',
      'Licensed Taj Mahal guide (can be arranged on request)',
      'Breakfast and lunch',
      'Personal expenses and guide tips',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pre-dawn Drive, Taj Mahal at Sunrise & Agra Fort',
        location: 'Delhi - Agra - Delhi',
        description:
          'Pickup from your Delhi hotel at around 3:00 am, timed to the season’s sunrise. Drive the Yamuna Expressway to Agra and enter the Taj Mahal as the gates open, which is around sunrise and varies through the year. Spend about two hours at the mausoleum and gardens, then breakfast in Agra and a visit to Agra Fort. Drive back to Delhi, arriving by mid-afternoon. The Taj Mahal is closed on Fridays, so this tour runs Saturday to Thursday.',
        highlights: ['Taj Mahal at sunrise', 'Agra Fort', 'Yamuna Expressway'],
      },
    ],
    featured: true,
    bestSeason: 'October to March (clearest mornings; winter fog possible in late December and January)',
  },

  // 2 — delhi airport to taj mahal
  {
    id: 'tour-26',
    slug: 'delhi-airport-to-taj-mahal-tour',
    seoTitle: 'Delhi Airport to Taj Mahal Tour by Car',
    metaDescription: 'Taj Mahal trip from Delhi Airport: your chauffeur meets you at IGI arrivals and drives you and your luggage to Agra. Layover or arrival day. Free quote.',
    title: 'Delhi Airport to Taj Mahal Tour',
    subtitle: 'Land in Delhi, meet your chauffeur at arrivals, and see the Taj Mahal the same day',
    category: 'Same Day',
    durationDays: 1,
    durationNights: 0,
    durationLabel: 'Same Day (10-14 Hours)',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.tajDetail),
    galleryImages: [small(IMG.tajDetail), small(IMG.taj), small(IMG.agraFort)],
    route: 'Delhi IGI Airport ➔ Agra (Taj Mahal, Agra Fort) ➔ Agra hotel or back to Delhi / IGI Airport',
    overview:
      'Short on time in India, or arriving on an early flight? This private transfer-and-tour picks you up at the arrivals exit of Delhi’s Indira Gandhi International Airport, loads your luggage into a private air-conditioned car, and drives straight to Agra, about four hours away by the Yamuna Expressway. You visit the Taj Mahal and Agra Fort with your bags safely in the car, then either check in to an Agra hotel or ride back to Delhi or the airport for an onward flight. It suits long layovers, arrival days and travellers starting a Golden Triangle trip in Agra. The Taj Mahal is closed on Fridays.',
    highlights: [
      'Meet-and-greet with a name card at the IGI Airport arrivals exit (T1, T2 or T3)',
      'Your luggage stays secure in the private car while you sightsee',
      'Taj Mahal and Agra Fort on the day you land',
      'Finish at an Agra hotel, a Delhi hotel or back at the airport',
      'Flight-time based planning; Taj Mahal closed on Fridays',
    ],
    inclusions: [
      ...CAR_INCLUSIONS,
      'Pickup at Delhi IGI Airport arrivals with name-card greeting',
      'Drop at your Agra hotel, Delhi hotel or IGI Airport',
    ],
    exclusions: [
      'Monument entrance tickets & camera fees (available as add-on)',
      'Hotel accommodation in Agra (can be booked on request)',
      'Meals, personal expenses and guide tips',
      'International and domestic flights',
    ],
    itinerary: [
      {
        day: 1,
        title: 'IGI Airport Pickup, Taj Mahal & Agra Fort',
        location: 'Delhi Airport to Agra',
        description:
          'Your chauffeur tracks your flight and meets you at the arrivals exit with a name card. Drive about four hours to Agra on the Yamuna Expressway, with a rest stop on the way. Visit the Taj Mahal and its gardens, then Agra Fort. In the evening you are dropped at your Agra hotel, or driven back to your Delhi hotel or IGI Airport for an onward flight (allow at least 4 hours for the return drive and check-in). If you land late at night, we plan the Taj visit for the following morning instead.',
        highlights: ['IGI Airport meet and greet', 'Taj Mahal', 'Agra Fort'],
      },
    ],
    bestSeason: 'October to March',
  },

  // 3 — overnight agra tour from delhi
  {
    id: 'tour-27',
    slug: 'overnight-agra-tour-from-delhi',
    seoTitle: 'Overnight Agra Tour from Delhi: 2 Days',
    metaDescription: 'Overnight Agra tour from Delhi by private car: Taj Mahal at sunset from Mehtab Bagh, the Taj at sunrise, Agra Fort and Fatehpur Sikri. 2 days. Free quote.',
    title: 'Overnight Agra Tour from Delhi — 2 Days / 1 Night',
    subtitle: 'The Taj Mahal at sunset and again at sunrise, without a rushed same-day trip',
    category: 'Golden Triangle',
    durationDays: 2,
    durationNights: 1,
    durationLabel: '2 Days / 1 Night',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.taj),
    galleryImages: [small(IMG.taj), small(IMG.agraFort), small(IMG.tajDetail)],
    route: 'Delhi ➔ Agra (Mehtab Bagh, Taj Mahal, Agra Fort) ➔ Fatehpur Sikri ➔ Delhi',
    overview:
      'A same-day Agra trip means seven hours in a car for a few hours of sightseeing. Staying one night changes that. You drive to Agra at a relaxed hour, see Agra Fort in the afternoon and watch the sun set behind the Taj Mahal from Mehtab Bagh across the Yamuna river. Next morning you walk into the Taj as it opens around sunrise, when the light is softest and the crowds are thinnest, then visit the abandoned Mughal capital of Fatehpur Sikri before returning to Delhi. The Taj Mahal is closed on Fridays, so Friday is never your Taj morning.',
    highlights: [
      'Sunset view of the Taj Mahal from Mehtab Bagh across the Yamuna',
      'Taj Mahal at sunrise the next morning, before the day crowds',
      'Agra Fort and the UNESCO-listed Fatehpur Sikri',
      'Relaxed pace with one night in Agra',
      'Private AC car and English-speaking chauffeur for both days',
    ],
    inclusions: [...CAR_INCLUSIONS, 'Pickup and drop at any Delhi, Gurgaon or Noida hotel or IGI Airport'],
    exclusions: STANDARD_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: 'Drive to Agra, Agra Fort & Sunset at Mehtab Bagh',
        location: 'Delhi to Agra',
        description:
          'Morning pickup from your Delhi hotel or the airport and a 3.5-hour drive to Agra on the Yamuna Expressway. After lunch and hotel check-in, explore Agra Fort, then cross the river to Mehtab Bagh to watch the sun set behind the Taj Mahal. Optional visit to the Itimad-ud-Daulah tomb, the "Baby Taj". Overnight in Agra.',
        highlights: ['Agra Fort', 'Mehtab Bagh sunset', 'Itimad-ud-Daulah (optional)'],
        stayCity: 'Agra',
      },
      {
        day: 2,
        title: 'Sunrise Taj Mahal, Fatehpur Sikri & Return to Delhi',
        location: 'Agra to Delhi',
        description:
          'Walk to the Taj Mahal gates as they open around sunrise (exact time varies by season) and spend the early morning at the mausoleum. Back to the hotel for breakfast and check-out, then drive about 40 km to Fatehpur Sikri, Emperor Akbar’s red sandstone capital. Return to Delhi in the afternoon and drop at your hotel or the airport.',
        highlights: ['Taj Mahal at sunrise', 'Fatehpur Sikri', 'Buland Darwaza'],
      },
    ],
    featured: true,
    bestSeason: 'October to March',
  },

  // 4 — jaipur 2 day trip from delhi
  {
    id: 'tour-28',
    slug: 'jaipur-2-day-tour-from-delhi',
    seoTitle: 'Jaipur 2 Day Trip from Delhi by Car',
    metaDescription: 'Jaipur 2 day trip from Delhi by private car: Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and the bazaars with your own chauffeur. 1 night. Free quote.',
    title: 'Jaipur 2-Day Tour from Delhi',
    subtitle: 'The Pink City at an unhurried pace: forts, palaces and bazaars over two days',
    category: 'Rajasthan',
    durationDays: 2,
    durationNights: 1,
    durationLabel: '2 Days / 1 Night',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: JAIPUR_GUEST_HERO, // real guest photo at Amber Fort, Jaipur
    galleryImages: [small(IMG.hawaMahal), small(IMG.amber), small(IMG.cityPalaceJaipur)],
    route: 'Delhi ➔ Jaipur (Amber Fort, City Palace, Hawa Mahal) ➔ Delhi',
    overview:
      'Jaipur is about four hours from Delhi on the Delhi-Mumbai Expressway, which makes a same-day trip possible but tiring. Two days lets you see the Pink City properly. Day one covers the old walled city, City Palace, the Jantar Mantar observatory and the facade of Hawa Mahal, with the evening free for the bazaars. Day two starts early at Amber Fort, before the heat and the tour buses, then Jal Mahal and a relaxed drive back to Delhi.',
    highlights: [
      'Amber Fort early in the morning, before the crowds',
      'City Palace and the UNESCO-listed Jantar Mantar observatory',
      'Hawa Mahal, the Palace of Winds',
      'Evening in the Johari and Bapu bazaars for textiles, jewellery and block prints',
      'Private AC car and English-speaking chauffeur for both days',
    ],
    inclusions: [...CAR_INCLUSIONS, 'Pickup and drop at any Delhi, Gurgaon or Noida hotel or IGI Airport'],
    exclusions: STANDARD_EXCLUSIONS,
    itinerary: [
      {
        day: 1,
        title: 'Drive to Jaipur, City Palace, Jantar Mantar & Hawa Mahal',
        location: 'Delhi to Jaipur',
        description:
          'Morning pickup in Delhi and a 4-hour drive to Jaipur on the Delhi-Mumbai Expressway. After check-in and lunch, visit the City Palace, the Jantar Mantar astronomical observatory and the honeycomb facade of Hawa Mahal. Spend the evening in the old-city bazaars. Overnight in Jaipur.',
        highlights: ['City Palace', 'Jantar Mantar', 'Hawa Mahal', 'Johari Bazaar'],
        stayCity: 'Jaipur',
      },
      {
        day: 2,
        title: 'Amber Fort, Jal Mahal & Return to Delhi',
        location: 'Jaipur to Delhi',
        description:
          'An early start for Amber Fort on its hilltop above Maota Lake, reached by jeep or on foot. Photo stop at Jal Mahal, the water palace, and an optional visit to Nahargarh Fort for city views. Drive back to Delhi in the afternoon and drop at your hotel or the airport.',
        highlights: ['Amber Fort', 'Jal Mahal', 'Nahargarh (optional)'],
      },
    ],
    bestSeason: 'October to March',
  },

  // 5 — rajasthan tour by car and driver
  {
    id: 'tour-29',
    slug: 'rajasthan-tour-by-car-and-driver',
    seoTitle: 'Rajasthan Tour by Car and Driver: 10 Days',
    metaDescription: 'Rajasthan tour by car and driver: 10 days from Delhi through Mandawa, Bikaner, Jaisalmer, Jodhpur and Udaipur with one private chauffeur. Free quote.',
    title: 'Rajasthan Tour by Car & Driver — 10 Days',
    subtitle: 'Shekhawati havelis, the Thar desert, the Blue City and the City of Lakes with one chauffeur throughout',
    category: 'Rajasthan',
    durationDays: 10,
    durationNights: 9,
    durationLabel: '10 Days / 9 Nights',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.jaisalmerFort),
    galleryImages: [small(IMG.jaisalmerFort), small(IMG.jaisalmer), small(IMG.mehrangarh), small(IMG.pichola)],
    route: 'Delhi ➔ Mandawa ➔ Bikaner ➔ Jaisalmer ➔ Jodhpur ➔ Ranakpur ➔ Udaipur',
    overview:
      'Hiring a private car and driver is the most flexible way to see Rajasthan, and this ten-day route shows why. You leave Delhi for the painted havelis of Mandawa in Shekhawati, cross to Bikaner’s Junagarh Fort, and continue deep into the Thar desert to the golden fort city of Jaisalmer and the Sam sand dunes. From there it is the Blue City of Jodhpur and Mehrangarh Fort, the carved Jain temple at Ranakpur, and finally three nights in Udaipur by Lake Pichola. The same chauffeur stays with you from the first day to the last, and you can stop wherever you like along the way. The trip ends at Udaipur airport for a short flight back to Delhi (flight not included), or we can drive you back on request.',
    highlights: [
      'One private chauffeur and AC car for all ten days',
      'Painted havelis of Mandawa in the Shekhawati region',
      'Junagarh Fort in Bikaner and the living Jaisalmer Fort',
      'Sunset on the Sam sand dunes near Jaisalmer',
      'Mehrangarh Fort, Ranakpur Jain temple and Udaipur’s Lake Pichola',
    ],
    inclusions: [...CAR_INCLUSIONS, 'Drop at Udaipur Airport (or a drive back to Delhi on request)'],
    exclusions: [
      'Monument entrance tickets & camera fees (available as add-on)',
      'Hotel accommodation and desert camp (we can book heritage hotels or camps at extra cost)',
      'Camel or jeep rides on the dunes',
      'Personal expenses, laundry, and guide tips',
      'Udaipur to Delhi flight and any international flights',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Mandawa: The Open-Air Gallery of Shekhawati',
        location: 'Delhi to Mandawa',
        description:
          'Morning pickup in Delhi and a drive into the Shekhawati region. In the afternoon walk the lanes of Mandawa, where merchant families decorated their havelis with frescoes of gods, trains and early motor cars.',
        highlights: ['Painted havelis', 'Mandawa Castle area'],
        stayCity: 'Mandawa',
      },
      {
        day: 2,
        title: 'Mandawa to Bikaner: Junagarh Fort',
        location: 'Mandawa to Bikaner',
        description:
          'Drive to Bikaner and tour Junagarh Fort, one of the few major Rajasthan forts never conquered, with richly painted palace rooms. Optional visit to the Karni Mata temple at Deshnoke or the camel breeding farm.',
        highlights: ['Junagarh Fort', 'Old city bazaars', 'Karni Mata temple (optional)'],
        stayCity: 'Bikaner',
      },
      {
        day: 3,
        title: 'Bikaner to Jaisalmer: Into the Thar Desert',
        location: 'Bikaner to Jaisalmer',
        description:
          'A long, scenic desert drive west to Jaisalmer. Arrive in the afternoon and watch the golden sandstone fort glow at sunset from a viewpoint outside the city.',
        highlights: ['Thar desert drive', 'Sunset over Jaisalmer Fort'],
        stayCity: 'Jaisalmer',
      },
      {
        day: 4,
        title: 'Jaisalmer Fort, Havelis & Sam Sand Dunes',
        location: 'Jaisalmer',
        description:
          'Explore Jaisalmer Fort, still home to families, shops and Jain temples, then the carved Patwon ki Haveli and Gadisar Lake. In the afternoon drive about 40 km to the Sam sand dunes for sunset, with an optional camel ride and an overnight desert camp on request.',
        highlights: ['Jaisalmer Fort', 'Patwon ki Haveli', 'Gadisar Lake', 'Sam sand dunes'],
        stayCity: 'Jaisalmer',
      },
      {
        day: 5,
        title: 'Jaisalmer to Jodhpur, the Blue City',
        location: 'Jaisalmer to Jodhpur',
        description:
          'Drive east to Jodhpur. Spend the late afternoon in the Sardar Market around the clock tower, with Mehrangarh Fort towering above the blue houses of the old town.',
        highlights: ['Clock tower market', 'Blue city lanes'],
        stayCity: 'Jodhpur',
      },
      {
        day: 6,
        title: 'Mehrangarh Fort & Jaswant Thada',
        location: 'Jodhpur',
        description:
          'Tour Mehrangarh Fort and its museum galleries, then the white marble Jaswant Thada memorial. Optional visit to Umaid Bhawan Palace museum. Free evening.',
        highlights: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan museum (optional)'],
        stayCity: 'Jodhpur',
      },
      {
        day: 7,
        title: 'Jodhpur to Udaipur via Ranakpur Jain Temple',
        location: 'Jodhpur to Udaipur',
        description:
          'Drive through the Aravalli hills to the 15th-century Ranakpur Jain temple, famous for its 1,444 carved marble pillars, then continue to Udaipur in the evening.',
        highlights: ['Ranakpur Jain temple', 'Aravalli hills'],
        stayCity: 'Udaipur',
      },
      {
        day: 8,
        title: 'Udaipur City Palace & Lake Pichola',
        location: 'Udaipur',
        description:
          'Visit the City Palace complex above Lake Pichola, Jagdish Temple and Saheliyon ki Bari garden. Late-afternoon boat ride on Lake Pichola (tickets extra).',
        highlights: ['City Palace', 'Jagdish Temple', 'Lake Pichola boat ride'],
        stayCity: 'Udaipur',
      },
      {
        day: 9,
        title: 'Udaipur at Leisure or Day Trip to Kumbhalgarh',
        location: 'Udaipur',
        description:
          'A free day to rest, shop for miniature paintings or take a cooking class, or a day trip to the hilltop Kumbhalgarh Fort and its 36 km of walls.',
        highlights: ['Kumbhalgarh Fort (optional)', 'Udaipur old city'],
        stayCity: 'Udaipur',
      },
      {
        day: 10,
        title: 'Departure from Udaipur',
        location: 'Udaipur',
        description:
          'Drop at Udaipur Airport for your flight to Delhi or onward. If you prefer to return by road, we can quote for the drive back to Delhi.',
        highlights: ['Airport transfer'],
      },
    ],
    featured: true,
    bestSeason: 'October to March',
  },

  // 6 — india tour for senior citizens
  {
    id: 'tour-30',
    slug: 'india-tour-for-senior-citizens',
    seoTitle: 'India Tour for Senior Citizens: 7 Days',
    metaDescription: 'India tour for senior citizens: a slow 7-day Golden Triangle with short drives, no 3 am starts, rest afternoons and a private chauffeur throughout. Free quote.',
    title: 'Relaxed Golden Triangle Tour for Senior Travellers — 7 Days',
    subtitle: 'Delhi, Agra and Jaipur at a gentle pace, with two nights in each city',
    category: 'Golden Triangle',
    durationDays: 7,
    durationNights: 6,
    durationLabel: '7 Days / 6 Nights',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.tajDetail),
    galleryImages: [small(IMG.tajDetail), small(IMG.indiaGate), small(IMG.amber), small(IMG.hawaMahal)],
    route: 'Delhi (2 nights) ➔ Agra (2 nights) ➔ Jaipur (2 nights) ➔ Delhi',
    overview:
      'This Golden Triangle is planned for older travellers and anyone who prefers comfort over speed. You spend two nights in each of Delhi, Agra and Jaipur, so there is never a drive and a full day of sightseeing on the same day. Mornings are for sightseeing, afternoons are kept free to rest, and there are no pre-dawn starts. Your chauffeur drops you as close to each monument entrance as the rules allow. At the Taj Mahal, vehicles must park away from the gates and battery-operated buses or golf carts carry visitors to the entrance, and wheelchairs can be used inside the complex. Tell us about any mobility needs and we will plan each day around them. The Taj Mahal is closed on Fridays.',
    highlights: [
      'Two nights in each city: never more than one drive per day',
      'Sightseeing in the mornings, free afternoons to rest',
      'No early-morning starts; Taj Mahal visited mid-morning (closed Fridays)',
      'Battery buses or golf carts from the Taj Mahal parking to the gates; wheelchairs allowed inside',
      'Spacious Innova Crysta recommended for easy entry and extra legroom',
    ],
    inclusions: [
      ...CAR_INCLUSIONS,
      'Delhi Airport pickup on arrival and drop on departure',
      'Itinerary paced around your mobility needs on request',
    ],
    exclusions: [
      'Monument entrance tickets & camera fees (available as add-on)',
      'Hotel accommodation (we can book step-free or lift-equipped hotels at extra cost)',
      'Wheelchair hire and licensed guides (arranged on request)',
      'Personal expenses, laundry, and guide tips',
      'International and domestic flights',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Rest',
        location: 'Delhi',
        description:
          'Meet your chauffeur at Delhi Airport arrivals and transfer to your hotel. The rest of the day is free to recover from the journey.',
        highlights: ['Airport meet and greet', 'Hotel check-in'],
        stayCity: 'Delhi',
      },
      {
        day: 2,
        title: 'Gentle New Delhi Sightseeing',
        location: 'Delhi',
        description:
          'A late-morning start to see Humayun’s Tomb and its gardens, a drive past India Gate and the government buildings, and the Qutub Minar. Lunch, then back to the hotel by mid-afternoon to rest.',
        highlights: ['Humayun’s Tomb', 'India Gate', 'Qutub Minar'],
        stayCity: 'Delhi',
      },
      {
        day: 3,
        title: 'Drive to Agra & Afternoon Rest',
        location: 'Delhi to Agra',
        description:
          'After breakfast, a 3.5-hour drive on the smooth Yamuna Expressway with a comfort stop. Check in and rest; an optional short evening visit to Mehtab Bagh to see the Taj Mahal across the river.',
        highlights: ['Yamuna Expressway', 'Mehtab Bagh (optional)'],
        stayCity: 'Agra',
      },
      {
        day: 4,
        title: 'Taj Mahal & Agra Fort',
        location: 'Agra',
        description:
          'A mid-morning visit to the Taj Mahal, using the battery bus or golf cart from the parking area to the gate, followed by Agra Fort. Afternoon free at the hotel. The Taj Mahal is closed on Fridays, so we schedule this day accordingly.',
        highlights: ['Taj Mahal', 'Agra Fort'],
        stayCity: 'Agra',
      },
      {
        day: 5,
        title: 'Agra to Jaipur',
        location: 'Agra to Jaipur',
        description:
          'Drive to Jaipur with plenty of stops. Fatehpur Sikri is optional and involves some walking on uneven stone, so we only include it if you would like to. Afternoon rest in Jaipur.',
        highlights: ['Fatehpur Sikri (optional)', 'Rest afternoon'],
        stayCity: 'Jaipur',
      },
      {
        day: 6,
        title: 'Jaipur: City Palace, Hawa Mahal & Amber Fort',
        location: 'Jaipur',
        description:
          'Visit the City Palace and see Hawa Mahal from the street. Amber Fort is reached by jeep to save the steep climb. Afternoon free, with an optional gentle evening in the bazaars.',
        highlights: ['City Palace', 'Hawa Mahal', 'Amber Fort by jeep'],
        stayCity: 'Jaipur',
      },
      {
        day: 7,
        title: 'Return to Delhi & Departure',
        location: 'Jaipur to Delhi',
        description:
          'A relaxed late-morning drive back to Delhi on the expressway and drop at your hotel or Delhi Airport for your flight home.',
        highlights: ['Airport transfer'],
      },
    ],
    bestSeason: 'October to March (avoid the hot months of April to June)',
  },

  // 7 — udaipur tour package
  {
    id: 'tour-31',
    slug: 'udaipur-tour-package',
    seoTitle: 'Udaipur Tour Package: 4 Days with Ranakpur',
    metaDescription: 'Udaipur tour package: 4 days in the City of Lakes with City Palace, Lake Pichola, Kumbhalgarh Fort and Ranakpur temple by private car. Free quote.',
    title: 'Udaipur Tour Package — City of Lakes, Kumbhalgarh & Ranakpur',
    subtitle: 'Lakeside palaces, a hilltop fortress and India’s finest carved Jain temple',
    category: 'Rajasthan',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.pichola),
    galleryImages: [small(IMG.pichola), small(IMG.cityPalaceUdaipur), small(IMG.mehrangarh)],
    route: 'Udaipur Airport ➔ Udaipur ➔ Kumbhalgarh ➔ Ranakpur ➔ Udaipur',
    overview:
      'Udaipur is the most romantic city in Rajasthan, built around lakes and ringed by the Aravalli hills. This short private package starts and ends at Udaipur airport, a short flight from Delhi or Mumbai, so it works on its own or as an add-on to a Golden Triangle trip. You see the City Palace, Jagdish Temple and the old city, take a boat on Lake Pichola, and spend a full day on a loop through the hills to Kumbhalgarh Fort and the marble Jain temple at Ranakpur. Flights are not included.',
    highlights: [
      'City Palace complex above Lake Pichola',
      'Sunset boat ride on Lake Pichola (tickets extra)',
      'Kumbhalgarh Fort and its 36 km of walls',
      'Ranakpur Jain temple and its 1,444 carved marble pillars',
      'Private AC car and chauffeur from airport pickup to drop',
    ],
    inclusions: [...CAR_INCLUSIONS, 'Udaipur Airport pickup and drop'],
    exclusions: [
      'Monument entrance tickets, boat tickets & camera fees',
      'Hotel accommodation (we can book lake-view or heritage hotels at extra cost)',
      'Personal expenses, laundry, and guide tips',
      'Flights to and from Udaipur',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Udaipur & Lake Pichola at Sunset',
        location: 'Udaipur',
        description:
          'Meet your chauffeur at Udaipur Airport and transfer to your hotel. In the late afternoon, walk the lakeside ghats and take a sunset boat ride on Lake Pichola.',
        highlights: ['Airport pickup', 'Lake Pichola boat ride', 'Gangaur Ghat'],
        stayCity: 'Udaipur',
      },
      {
        day: 2,
        title: 'City Palace, Jagdish Temple & Saheliyon ki Bari',
        location: 'Udaipur',
        description:
          'Tour the City Palace and its museum, the Jagdish Temple and the Saheliyon ki Bari garden. Optional evening at a traditional Rajasthani folk dance show at Bagore ki Haveli.',
        highlights: ['City Palace', 'Jagdish Temple', 'Saheliyon ki Bari', 'Bagore ki Haveli (optional)'],
        stayCity: 'Udaipur',
      },
      {
        day: 3,
        title: 'Day Trip to Kumbhalgarh Fort & Ranakpur Jain Temple',
        location: 'Udaipur - Kumbhalgarh - Ranakpur - Udaipur',
        description:
          'A full-day loop through the Aravalli hills: the hilltop Kumbhalgarh Fort, birthplace of Maharana Pratap, then the 15th-century Ranakpur Jain temple. Return to Udaipur in the evening.',
        highlights: ['Kumbhalgarh Fort', 'Ranakpur Jain temple', 'Aravalli countryside'],
        stayCity: 'Udaipur',
      },
      {
        day: 4,
        title: 'Departure from Udaipur',
        location: 'Udaipur',
        description:
          'Free morning for shopping or a cooking class, then drop at Udaipur Airport for your onward flight.',
        highlights: ['Airport transfer'],
      },
    ],
    bestSeason: 'September to March (lakes are fullest after the monsoon)',
  },

  // 8 — luxury rajasthan tour
  {
    id: 'tour-32',
    slug: 'luxury-rajasthan-tour',
    seoTitle: 'Luxury India Tour: Rajasthan in 9 Days',
    metaDescription: 'Luxury India tour of Rajasthan: 9 days through Delhi, Agra, Jaipur, Jodhpur and Udaipur in a premium SUV, with heritage palace hotels on request. Free quote.',
    title: 'Luxury Rajasthan Tour with the Taj Mahal — 9 Days',
    subtitle: 'Palace hotels, a premium SUV and a private chauffeur through royal Rajasthan',
    category: 'Rajasthan',
    durationDays: 9,
    durationNights: 8,
    durationLabel: '9 Days / 8 Nights',
    startingPriceINR: 0,
    startingPriceUSD: 0,
    rating: 0,
    reviewsCount: 0,
    primaryImage: big(IMG.cityPalaceUdaipur),
    galleryImages: [small(IMG.cityPalaceUdaipur), small(IMG.taj), small(IMG.amber), small(IMG.mehrangarh), small(IMG.pichola)],
    route: 'Delhi ➔ Agra ➔ Jaipur ➔ Jodhpur ➔ Udaipur',
    overview:
      'Rajasthan has some of the most remarkable heritage hotels in the world: former palaces, forts and hunting lodges still run by royal families or restored by luxury groups. This nine-day private tour links the Taj Mahal with the three great royal cities of Jaipur, Jodhpur and Udaipur in a premium SUV with a senior English-speaking chauffeur. We build the trip around the hotels you choose, from heritage havelis to five-star palace hotels, and arrange private guides, early monument entry and special experiences on request. Hotels are booked to your choice and quoted with the trip.',
    highlights: [
      'Premium SUV (Innova Crysta or above) with a senior English-speaking chauffeur',
      'Heritage palace and fort hotels arranged to your choice on request',
      'Taj Mahal at sunrise with a private licensed guide on request (closed Fridays)',
      'Amber Fort, Mehrangarh Fort and Udaipur’s City Palace',
      'Private boat on Lake Pichola and curated dining experiences on request',
    ],
    inclusions: [
      'Premium air-conditioned SUV with senior English-speaking chauffeur for 9 days',
      'All fuel costs, highway tolls, state border permits, and parking charges',
      'Driver lodging, meals, and daily allowances',
      'Delhi Airport pickup and Udaipur Airport drop',
      'Bottled mineral water and refreshments in the car',
      'Dedicated 24/7 concierge and itinerary coordination',
    ],
    exclusions: [
      'Hotel accommodation (palace and heritage hotels booked to your choice and quoted separately)',
      'Monument entrance tickets, private guides & camera fees (arranged on request)',
      'Meals, personal expenses, and tips',
      'Udaipur to Delhi flight and any international flights',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        location: 'Delhi',
        description:
          'Private meet and greet at Delhi Airport arrivals and transfer to your hotel. Evening at leisure.',
        highlights: ['Airport meet and greet'],
        stayCity: 'Delhi',
      },
      {
        day: 2,
        title: 'Delhi Highlights & Drive to Agra',
        location: 'Delhi to Agra',
        description:
          'Morning visit to Humayun’s Tomb and a drive past India Gate, then the Yamuna Expressway to Agra. Evening view of the Taj Mahal from Mehtab Bagh.',
        highlights: ['Humayun’s Tomb', 'India Gate', 'Mehtab Bagh sunset'],
        stayCity: 'Agra',
      },
      {
        day: 3,
        title: 'Sunrise Taj Mahal & Drive to Jaipur',
        location: 'Agra to Jaipur',
        description:
          'Enter the Taj Mahal as it opens around sunrise (exact time varies by season), then breakfast and Agra Fort. Drive to Jaipur via Fatehpur Sikri.',
        highlights: ['Taj Mahal at sunrise', 'Agra Fort', 'Fatehpur Sikri'],
        stayCity: 'Jaipur',
      },
      {
        day: 4,
        title: 'Royal Jaipur',
        location: 'Jaipur',
        description:
          'Amber Fort early in the morning, then the City Palace, Jantar Mantar and Hawa Mahal. Evening at leisure at your palace hotel.',
        highlights: ['Amber Fort', 'City Palace', 'Jantar Mantar', 'Hawa Mahal'],
        stayCity: 'Jaipur',
      },
      {
        day: 5,
        title: 'Jaipur to Jodhpur',
        location: 'Jaipur to Jodhpur',
        description:
          'Drive west to Jodhpur, the Blue City. Late afternoon at the clock tower market below Mehrangarh Fort.',
        highlights: ['Blue city', 'Clock tower market'],
        stayCity: 'Jodhpur',
      },
      {
        day: 6,
        title: 'Mehrangarh Fort & Umaid Bhawan',
        location: 'Jodhpur',
        description:
          'Tour Mehrangarh Fort and its museum, the Jaswant Thada memorial and the Umaid Bhawan Palace museum. Optional village safari to the Bishnoi villages.',
        highlights: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan museum'],
        stayCity: 'Jodhpur',
      },
      {
        day: 7,
        title: 'Jodhpur to Udaipur via Ranakpur',
        location: 'Jodhpur to Udaipur',
        description:
          'Drive through the Aravalli hills with a stop at the Ranakpur Jain temple, arriving in Udaipur by evening.',
        highlights: ['Ranakpur Jain temple'],
        stayCity: 'Udaipur',
      },
      {
        day: 8,
        title: 'Udaipur: City Palace & Lake Pichola',
        location: 'Udaipur',
        description:
          'Visit the City Palace and Jagdish Temple, then a private boat on Lake Pichola at sunset (arranged on request).',
        highlights: ['City Palace', 'Lake Pichola', 'Jagdish Temple'],
        stayCity: 'Udaipur',
      },
      {
        day: 9,
        title: 'Departure from Udaipur',
        location: 'Udaipur',
        description: 'Drop at Udaipur Airport for your flight to Delhi or onward.',
        highlights: ['Airport transfer'],
      },
    ],
    bestSeason: 'October to March',
  },
];
