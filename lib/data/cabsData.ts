import { CabVehicle } from '../types';

// TODO: replace the /assets/fleet/*.svg category illustrations with real photos of your own fleet vehicles.
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
    image: '/assets/fleet/sedan.svg',
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
    image: '/assets/fleet/suv.svg',
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
    image: '/assets/fleet/luxury-suv.svg',
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
    image: '/assets/fleet/tempo.svg',
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
    image: '/assets/fleet/coach.svg',
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

export interface RouteFaq {
  q: string;
  a: string;
}

export interface PopularRoute {
  slug: string;
  from: string;
  to: string;
  distanceKm: number;
  driveTime: string;
  sedanFareINR: number;
  suvFareINR: number;
  tempoFareINR: number;
  /** Main highway / expressway used */
  highway: string;
  /** Route narrative: main stops and road */
  description: string;
  /** Tolls, FASTag, state entry notes */
  tollsNote: string;
  bestTime: string;
  attractions: string[];
  /** Related tour package slug, if any */
  relatedTourSlug?: string;
  faqs: RouteFaq[];
}

const ALLOWANCE_NOTE =
  'Driver night allowance is charged extra for each overnight stay and is shown separately on your quote.';

export const POPULAR_CAB_ROUTES: PopularRoute[] = [
  {
    slug: 'delhi-to-agra',
    from: 'Delhi', to: 'Agra', distanceKm: 230, driveTime: '3.5 hrs (Yamuna Expy)', sedanFareINR: 2800, suvFareINR: 4200, tempoFareINR: 6200,
    highway: 'Yamuna Expressway',
    description:
      'The fastest way from Delhi to Agra is the 165 km Yamuna Expressway, joined at Noida/Greater Noida after leaving South or East Delhi. The expressway is fenced, six-lane and has no traffic signals, so most of the drive is steady cruising. Pickup can be from any Delhi, Noida or Gurgaon address, including IGI Airport, and the driver will stop at an expressway food court whenever you want a break.',
    tollsNote:
      'The Yamuna Expressway charges a distance-based toll collected via FASTag. Tolls and Agra city parking are billed at actuals with receipts.',
    bestTime:
      'October to March is the most comfortable season. Leave Delhi by 6 am to reach the Taj Mahal near opening time. The Taj Mahal is closed to visitors every Friday.',
    attractions: ['Taj Mahal (closed Fridays)', 'Agra Fort', 'Mehtab Bagh sunset view', 'Itmad-ud-Daula (Baby Taj)', 'Mathura & Vrindavan temples (short detour)', 'Fatehpur Sikri (about 40 km beyond Agra)'],
    relatedTourSlug: 'same-day-delhi-agra-tour',
    faqs: [
      { q: 'Do you offer one-way drops and same-day returns?', a: 'Yes. We offer one-way drops, same-day returns and multi-day hire. A same-day return is usually better value than two one-way trips; tell us your plan and we will quote the best option.' },
      { q: 'Can I do Delhi to Agra and back in one day?', a: 'Yes. With a 6 am departure you get roughly 6 hours in Agra for the Taj Mahal and Agra Fort and are back in Delhi by late evening. Avoid Fridays, when the Taj Mahal is closed.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE + ' A same-day return has no night allowance.' },
      { q: 'Is it safe to drive the Yamuna Expressway at night?', a: 'The expressway is patrolled, but it is known for dense fog from late December to January. In fog our drivers reduce speed or pause at a service area, so allow extra time on winter evenings.' },
    ],
  },
  {
    slug: 'delhi-to-jaipur',
    from: 'Delhi', to: 'Jaipur', distanceKm: 280, driveTime: '4.0 hrs (Delhi-Mumbai Expy)', sedanFareINR: 3400, suvFareINR: 4900, tempoFareINR: 7500,
    highway: 'Delhi–Mumbai Expressway / NH48',
    description:
      'Most Delhi to Jaipur cabs now take the Delhi–Mumbai Expressway from Sohna, exiting near Dausa for the final run into Jaipur. It avoids the truck traffic of the older NH48 via Gurgaon, Behror and Shahpura. That route is still used for pickups in west Gurgaon or when travellers want a stop at Neemrana Fort Palace.',
    tollsNote:
      'Both routes are tolled and collected via FASTag, billed at actuals. Any Rajasthan state tax payable on an out-of-state tourist vehicle is passed on at actuals with the official receipt.',
    bestTime:
      'October to March is ideal for sightseeing in Jaipur. Summer (April–June) is very hot, so plan forts for early morning.',
    attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace & Jantar Mantar', 'Jal Mahal', 'Nahargarh Fort sunset', 'Neemrana Fort Palace (en route via NH48)'],
    relatedTourSlug: 'same-day-delhi-jaipur-tour',
    faqs: [
      { q: 'Which route will the driver take?', a: 'By default the Delhi–Mumbai Expressway, which is faster and smoother. Tell us if you prefer NH48 to stop at Neemrana or to start from west Gurgaon.' },
      { q: 'Is a same-day Delhi–Jaipur–Delhi trip practical?', a: 'It is possible but long, with about 8 hours of driving in total. We recommend at least one night in Jaipur to see Amber Fort and the old city without rushing.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Are there extra charges at the Rajasthan border?', a: 'Rajasthan can levy a tax on tourist vehicles registered outside the state. If it applies to your vehicle, it is billed at actuals with the official receipt and never marked up.' },
    ],
  },
  {
    slug: 'delhi-to-chandigarh',
    from: 'Delhi', to: 'Chandigarh', distanceKm: 250, driveTime: '4.0 hrs (NH44)', sedanFareINR: 3100, suvFareINR: 4500, tempoFareINR: 6800,
    highway: 'NH44 (GT Karnal Road)',
    description:
      'Delhi to Chandigarh runs north along NH44 through Sonipat, Panipat, Karnal and Ambala. It is a wide divided highway lined with dhabas, including the well-known Murthal stretch famous for parathas. Chandigarh is also the usual halfway point for travellers continuing to Shimla, Kasauli or Manali.',
    tollsNote:
      'NH44 has several toll plazas between Delhi and Ambala, all collected via FASTag and billed at actuals. Any applicable state tax for out-of-state tourist vehicles is billed at actuals.',
    bestTime: 'Year-round. October to March is pleasant; fog can slow early-morning drives in late December and January.',
    attractions: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Capitol Complex (Le Corbusier, UNESCO)', 'Murthal dhabas (en route)', 'Pinjore Gardens'],
    faqs: [
      { q: 'Can I continue from Chandigarh to Shimla in the same cab?', a: 'Yes. Most travellers book Delhi–Shimla directly; the cab passes Chandigarh and climbs via Parwanoo. Booking it as one trip avoids a second one-way charge.' },
      { q: 'Is the fare one-way or round trip?', a: 'We offer both one-way drops and round trips. Share your dates and we will quote either option.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Can we stop at Murthal for food?', a: 'Yes, meal stops are included. Just tell the driver when you would like to stop.' },
    ],
  },
  {
    slug: 'delhi-to-haridwar-rishikesh',
    from: 'Delhi', to: 'Haridwar / Rishikesh', distanceKm: 240, driveTime: '4.5 hrs (Meerut Expy)', sedanFareINR: 3200, suvFareINR: 4600, tempoFareINR: 6900,
    highway: 'Delhi–Meerut Expressway / NH334',
    description:
      'The cab leaves Delhi on the Delhi–Meerut Expressway, then follows NH334 through Muzaffarnagar and Roorkee to Haridwar. Rishikesh is a further 25 km upstream along the Ganga. Highway food plazas around Khatauli are the usual halfway stop.',
    tollsNote:
      'Tolls on the Meerut Expressway and NH334 are collected via FASTag and billed at actuals. Uttarakhand can levy an entry tax on out-of-state tourist vehicles; if applicable it is billed at actuals with a receipt.',
    bestTime:
      'September to April. During the Kanwar Yatra (usually July) the highway is diverted for days, so avoid travel then if you can. Monsoon (July–August) can bring landslides in the hills beyond Rishikesh.',
    attractions: ['Har Ki Pauri Ganga Aarti (Haridwar)', 'Mansa Devi & Chandi Devi temples', 'Laxman Jhula & Ram Jhula (Rishikesh)', 'Triveni Ghat evening aarti', 'River rafting at Shivpuri', 'Beatles Ashram'],
    relatedTourSlug: 'rishikesh-haridwar-tour',
    faqs: [
      { q: 'Can I be dropped at my Rishikesh hotel or ashram?', a: 'Yes. Drops anywhere in Haridwar or Rishikesh, including Tapovan and Laxman Jhula, are included in the drop where vehicles are allowed.' },
      { q: 'Can I travel during the Kanwar Yatra?', a: 'During the Kanwar Yatra (usually July) the highway is diverted and the drive takes much longer. We can still plan the trip, but confirm dates with us first.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Will you drive at night?', a: 'The plains section is fine at night. Beyond Rishikesh towards the hills we avoid night driving for safety.' },
    ],
  },
  {
    slug: 'delhi-to-shimla',
    from: 'Delhi', to: 'Shimla', distanceKm: 350, driveTime: '7.5 hrs (Himalayan Expy)', sedanFareINR: 5200, suvFareINR: 7500, tempoFareINR: 10800,
    highway: 'NH44 + Himalayan Expressway (NH5)',
    description:
      'The drive follows NH44 to Ambala and Zirakpur, then the Himalayan Expressway to Parwanoo, where the hill road (NH5) climbs through Dharampur and Solan to Shimla. Expect slower hill traffic after Parwanoo. Barog and Solan are common tea and photo stops.',
    tollsNote:
      'Tolls on NH44 and the Himalayan Expressway are collected via FASTag and billed at actuals. Himachal Pradesh charges an entry tax on out-of-state vehicles at the border barrier, billed at actuals with a receipt. Vehicles are restricted around Mall Road and the Ridge, so drops are at the nearest permitted point.',
    bestTime:
      'March to June for pleasant weather, December to February for a chance of snow. Monsoon (July–August) can cause landslides and delays.',
    attractions: ['The Ridge & Mall Road', 'Jakhu Temple', 'Kufri', 'Christ Church', 'Chail Palace (detour)', 'Barog & Solan (en route)'],
    relatedTourSlug: 'shimla-manali-tour',
    faqs: [
      { q: 'Do I have to pay a Himachal entry tax?', a: 'Yes. Himachal Pradesh charges an entry tax on out-of-state tourist vehicles at the border barrier. It is billed at actuals with the official receipt.' },
      { q: 'Is the fare one-way or round trip?', a: 'Both are available. For a multi-day hill holiday the cab and chauffeur stay with you for the whole trip, quoted per day.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Do you drive hill roads at night?', a: 'We plan to reach Shimla before dark. Hill sections are not driven late at night, for safety.' },
      { q: 'Can the cab drop me on Mall Road?', a: 'Private vehicles are restricted on Mall Road and the Ridge. The driver drops you at the closest permitted point, or at your hotel if it has vehicle access.' },
    ],
  },
  {
    slug: 'delhi-to-manali',
    from: 'Delhi', to: 'Manali', distanceKm: 530, driveTime: '11.5 hrs', sedanFareINR: 8400, suvFareINR: 12200, tempoFareINR: 17500,
    highway: 'NH44 + Kiratpur–Manali highway',
    description:
      'This long drive goes up NH44 towards Chandigarh, then via Kiratpur Sahib, Bilaspur, Sundernagar and Mandi into the Kullu valley along the Beas river, through the Aut tunnel to Kullu and on to Manali. It is a full-day journey, so we start early. Many travellers break it with a night in Chandigarh or Mandi.',
    tollsNote:
      'Highway tolls are collected via FASTag and billed at actuals. Himachal Pradesh entry tax for out-of-state vehicles is billed at actuals. Rohtang Pass needs a separate online vehicle permit, which we can apply for on your behalf.',
    bestTime:
      'March to June and September to November. December to February brings snow and possible road closures above Manali. Monsoon (July–August) can cause landslides on the Mandi–Kullu stretch.',
    attractions: ['Hadimba Devi Temple', 'Old Manali', 'Solang Valley', 'Atal Tunnel & Sissu', 'Kullu river rafting', 'Pandoh Dam (en route)'],
    relatedTourSlug: 'shimla-manali-tour',
    faqs: [
      { q: 'How long does Delhi to Manali take by taxi?', a: 'About 11–12 hours of driving plus stops, depending on traffic on the Mandi–Kullu section. We start early in the morning so you reach before dark.' },
      { q: 'Do I need a permit?', a: 'Not for Manali town. Himachal entry tax is payable at the border and billed at actuals. Rohtang Pass needs a separate online permit with limited daily quotas; we can apply for it for you.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Can I travel overnight?', a: 'Overnight travel is possible only with two drivers on board, which costs extra. Otherwise we drive the hill sections in daylight.' },
      { q: 'Can I book a one-way drop to Manali?', a: 'Yes. We offer one-way drops, return trips and local Manali sightseeing; return trips and sightseeing are quoted per day.' },
    ],
  },
  {
    slug: 'delhi-to-dehradun-mussoorie',
    from: 'Delhi', to: 'Dehradun / Mussoorie', distanceKm: 290, driveTime: '5.5 hrs', sedanFareINR: 3800, suvFareINR: 5400, tempoFareINR: 8200,
    highway: 'Delhi–Meerut Expressway / NH334 / NH307',
    description:
      'The route leaves Delhi via the Meerut Expressway and NH334, then turns towards Dehradun through Roorkee or via the newer Delhi–Dehradun expressway sections where open. From Dehradun it is about a 35 km hill climb to Mussoorie.',
    tollsNote:
      'Tolls are collected via FASTag and billed at actuals. Any Uttarakhand entry tax for out-of-state tourist vehicles, and Mussoorie local entry and parking fees, are billed at actuals.',
    bestTime: 'March to June and September to November. Winter weekends can be crowded; monsoon brings landslide risk on the Mussoorie road.',
    attractions: ['Mall Road & Camel’s Back Road (Mussoorie)', 'Kempty Falls', 'Gun Hill', 'Robber’s Cave (Dehradun)', 'Forest Research Institute', 'Landour'],
    relatedTourSlug: 'rishikesh-mussoorie-tour',
    faqs: [
      { q: 'Can you drop us in Dehradun or Mussoorie?', a: 'Yes. We drop in either Dehradun or Mussoorie; tell us your hotel and we will include it in your quote.' },
      { q: 'Can I add Rishikesh on the way?', a: 'Yes. Tell us when booking and we will quote Delhi–Rishikesh–Mussoorie as one trip.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Do you drive up to Mussoorie at night?', a: 'We prefer to complete the Dehradun–Mussoorie climb before dark.' },
    ],
  },
  {
    slug: 'jaipur-to-jodhpur',
    from: 'Jaipur', to: 'Jodhpur', distanceKm: 340, driveTime: '5.5 hrs', sedanFareINR: 4200, suvFareINR: 5900, tempoFareINR: 8900,
    highway: 'NH48 / NH58 via Ajmer',
    description:
      'From Jaipur the cab heads to Ajmer and on through Beawar to Jodhpur. A short detour from Ajmer takes you to Pushkar and its lake ghats. The road crosses the Aravalli hills before opening into the Marwar plains near Jodhpur.',
    tollsNote: 'Highway tolls are collected via FASTag and billed at actuals. The trip stays within Rajasthan, so no interstate entry tax applies.',
    bestTime: 'October to March. Summer temperatures in Jodhpur often exceed 40°C, so drive early in April–June.',
    attractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan Palace', 'Clock Tower market', 'Ajmer Sharif Dargah (en route)', 'Pushkar (short detour)'],
    relatedTourSlug: 'jaipur-jodhpur-jaisalmer-tour',
    faqs: [
      { q: 'Can I stop at Pushkar and Ajmer?', a: 'Yes. Ajmer is on the way and Pushkar is a short detour. We include them if you tell us when booking.' },
      { q: 'Can I book a one-way cab?', a: 'Yes, one-way drops are available. Multi-city Rajasthan trips are usually better value as a per-day booking with the same chauffeur.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Do you drive at night in Rajasthan?', a: 'Highway driving after dark is possible, but we plan arrivals by evening because of stray cattle on some stretches.' },
    ],
  },
  {
    slug: 'jaipur-to-udaipur',
    from: 'Jaipur', to: 'Udaipur', distanceKm: 390, driveTime: '6.5 hrs', sedanFareINR: 4800, suvFareINR: 6800, tempoFareINR: 9800,
    highway: 'NH48 via Ajmer, Bhilwara and Chittorgarh',
    description:
      'The Jaipur to Udaipur drive runs past Ajmer, Bhilwara and Chittorgarh. Chittorgarh Fort, one of the largest forts in India, sits right on the route and makes a worthwhile stop before the final stretch into the lake city of Udaipur.',
    tollsNote: 'Highway tolls are collected via FASTag and billed at actuals. Monument entry fees such as Chittorgarh Fort are paid by travellers directly. The trip stays within Rajasthan, so no interstate entry tax applies.',
    bestTime: 'September to March, when the lakes are fuller and the weather is mild. Summer is hot; plan the drive for early morning.',
    attractions: ['City Palace & Lake Pichola', 'Jag Mandir', 'Saheliyon-ki-Bari', 'Fateh Sagar Lake', 'Chittorgarh Fort (en route)', 'Kumbhalgarh Fort (day trip)'],
    relatedTourSlug: 'jaipur-jodhpur-udaipur-tour',
    faqs: [
      { q: 'Can we visit Chittorgarh Fort on the way?', a: 'Yes. Chittorgarh is on the route, and a 2–3 hour stop fits in easily if you leave Jaipur early.' },
      { q: 'Is the fare one-way?', a: 'Yes. Return trips and Udaipur local sightseeing are charged per day on a 250 km minimum.' },
      { q: 'Is driver allowance included?', a: ALLOWANCE_NOTE },
      { q: 'Is this drive safe at night?', a: 'It is a good highway, but we plan arrival by evening and avoid late-night driving where possible.' },
    ],
  },
  {
    slug: 'delhi-airport-transfer',
    from: 'Delhi IGI Airport', to: 'Central Delhi / Gurgaon', distanceKm: 35, driveTime: '45 mins', sedanFareINR: 1100, suvFareINR: 1800, tempoFareINR: 2800,
    highway: 'NH48 / Aerocity link roads',
    description:
      'A private transfer between Indira Gandhi International Airport (Terminals 1 and 3) and hotels or homes in Central Delhi, Connaught Place, Aerocity, South Delhi or Gurgaon. The driver tracks your flight and meets you in the arrivals area with a name card, so late arrivals are covered.',
    tollsNote: 'Airport parking and any toll on the route are billed at actuals. Fares for Noida, Faridabad or Ghaziabad are quoted separately.',
    bestTime: 'Available 24 hours. Allow extra time for weekday peak traffic between 8–11 am and 5–9 pm.',
    attractions: ['Connaught Place', 'India Gate & Kartavya Path', 'Aerocity hotel district', 'Cyber Hub, Gurgaon'],
    faqs: [
      { q: 'What happens if my flight is delayed?', a: 'We track the flight and adjust the pickup time at no extra charge for airline delays. Long waits after landing may incur a waiting charge, which we tell you about in advance.' },
      { q: 'Where will the driver meet me?', a: 'In the arrivals area of your terminal, holding a name card. You also get the driver’s name and mobile number on WhatsApp before landing.' },
      { q: 'Is the fare one-way?', a: 'Yes, one-way between the airport and your Central Delhi or Gurgaon address.' },
      { q: 'Do you charge extra at night?', a: 'No. The fare is the same at night, and driver allowance does not apply to airport transfers.' },
    ],
  },
];

export function getCabRoute(slug: string): PopularRoute | undefined {
  return POPULAR_CAB_ROUTES.find((r) => r.slug === slug);
}
