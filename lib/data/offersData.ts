// Country-targeted 2027 offer pages for international travellers (/offers/<slug>).
// Owner policy: no prices, currency amounts, discounts, reviews or awards. Every trip is quoted
// individually and confirmed in writing.
// Flight and time-zone notes describe typical patterns only; airlines change schedules.

export interface CountryOffer {
  slug: string;
  country: string;
  /** Short label used in cards, e.g. "From the UK" */
  label: string;
  /** Layout appends " | Satnam Voyages" — keep to 45 characters or fewer */
  seoTitle: string;
  /** 160 characters or fewer */
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  flights: { heading: string; paragraphs: string[] };
  timeZone: { heading: string; paragraphs: string[]; dayOnePlan: string[] };
  visa: string[];
  bestMonths: { heading: string; paragraphs: string[] };
  practical: { title: string; text: string }[];
  /** Recommended tour slugs; only those that exist in ALL_TOURS are rendered */
  recommendedTourSlugs: string[];
  recommendationNote: string;
  faqs: { q: string; a: string }[];
  waText: string;
}

const VISA_SITE = 'indianvisaonline.gov.in';

export const COUNTRY_OFFERS: CountryOffer[] = [
  // ── UK ───────────────────────────────────────────────────────────
  {
    slug: 'india-tour-package-from-uk',
    country: 'United Kingdom',
    label: 'From the UK',
    seoTitle: 'India Tour Packages from the UK 2027',
    metaDescription:
      'Golden Triangle and Rajasthan tour packages for UK travellers in 2027: private car and chauffeur from Delhi Airport, e-Visa tips and the best months to go.',
    h1: 'India Tour Packages from the UK: Golden Triangle 2027',
    intro:
      'Flying from London, Manchester or Birmingham? Delhi is the natural gateway for the Golden Triangle of Delhi, Agra and Jaipur. Your private chauffeur meets you in the arrivals hall at Delhi Airport and stays with you for the whole trip, so there are no train connections or taxi queues to deal with after a long flight.',
    keywords: [
      'golden triangle india tour packages from uk',
      'india holiday packages from uk',
      'north india tour packages from uk',
      'private india tour from uk',
    ],
    flights: {
      heading: 'Flights from the UK to Delhi',
      paragraphs: [
        'Non-stop flights to Delhi (DEL) typically leave from London Heathrow and take roughly nine hours. Travellers from Manchester, Birmingham, Edinburgh or Glasgow usually connect once, either through London or through a Gulf hub such as Dubai, Doha or Abu Dhabi.',
        'Many overnight flights from London land in Delhi in the morning or early afternoon. Send us your flight number and we track the arrival, so your chauffeur is waiting even if the flight is early or late.',
      ],
    },
    timeZone: {
      heading: 'Time difference and your first day',
      paragraphs: [
        'India is 5 hours 30 minutes ahead of the UK in winter (GMT) and 4 hours 30 minutes ahead in summer (BST). The jet lag is mild compared with long-haul flights west, but an overnight flight still leaves most people tired on arrival.',
      ],
      dayOnePlan: [
        'Chauffeur pickup at Delhi Airport and transfer to your hotel',
        'Rest for a few hours; most hotels can arrange early check-in on request',
        'Gentle late-afternoon visit to India Gate or Humayun’s Tomb, or simply dinner near the hotel',
        'Start the main sightseeing on Day 2, refreshed',
      ],
    },
    visa: [
      'British citizens are eligible for the Indian e-Visa. Apply only on the official Government of India website, ' +
        VISA_SITE +
        ', and avoid look-alike agency sites that add their own fees.',
      'Your passport should have at least six months of validity from the date you arrive and blank pages for stamps. Apply well before you fly and print the approval to show at immigration.',
    ],
    bestMonths: {
      heading: 'Best months for UK travellers',
      paragraphs: [
        'October to March is the main season for Delhi, Agra and Rajasthan, with warm, dry days. The October half-term is one of the best weeks of the year to go: the monsoon is over and the weather is clear.',
        'The Christmas and New Year weeks are popular, so book hotels early. Expect cold mornings and occasional fog in Delhi and Agra in late December and January. Easter can work well if it falls in March; by mid-April the plains are getting hot, so plan early-morning sightseeing.',
      ],
    },
    practical: [
      {
        title: 'Plugs and power',
        text: 'India runs on 230 V, like the UK, but uses round-pin sockets (Types C, D and M). Bring a travel adaptor; UK three-pin plugs do not fit.',
      },
      {
        title: 'Money and cards',
        text: 'Visa and Mastercard are widely accepted in hotels and larger shops. Carry some rupees from an airport ATM for markets, tips and small purchases. Tell your bank you are travelling.',
      },
      {
        title: 'Driving side',
        text: 'India drives on the left, as in the UK, so the road will feel familiar from the back seat. You will not need to drive: your chauffeur does all of it.',
      },
      {
        title: 'Staying connected',
        text: 'Most UK phones work in India on roaming, or you can buy a local SIM or eSIM with your passport. WhatsApp is the easiest way to reach us and your chauffeur.',
      },
    ],
    recommendedTourSlugs: [
      'golden-triangle-tour-5-days',
      'golden-triangle-tour',
      'golden-triangle-ranthambore',
      'delhi-agra-jaipur-udaipur-tour',
      'india-tour-for-senior-citizens',
    ],
    recommendationNote:
      'A week is enough for the Golden Triangle at a comfortable pace. With ten days or more, add Ranthambore for a tiger safari or continue to Udaipur.',
    faqs: [
      {
        q: 'Can you pick us up at Delhi Airport after our flight from London?',
        a: 'Yes. Send us your flight number and we track the arrival. Your chauffeur waits in the arrivals area with a name card, helps with luggage and drives you to your hotel.',
      },
      {
        q: 'How many days do we need for the Golden Triangle from the UK?',
        a: 'Five days (four nights) covers Delhi, Agra and Jaipur. Six or seven days is more relaxed and leaves time to recover from the flight. Add three or four days for Ranthambore or Udaipur.',
      },
      {
        q: 'Do you book hotels as well?',
        a: 'Yes, if you want us to. You can choose Standard, Deluxe or Luxury heritage hotels, and we add them to the same written quote. You can also book your own hotels and use us only for the car and chauffeur.',
      },
      {
        q: 'How do we pay from the UK?',
        a: 'A deposit of 20–25% confirms the booking, by international card or bank transfer. The balance is paid on arrival in India. Every charge is listed in your written quote first.',
      },
      {
        q: 'Is the Taj Mahal open every day?',
        a: 'No. The Taj Mahal is closed on Fridays, so we plan your Agra day around that.',
      },
    ],
    waText: 'Hello Satnam Voyages, we are travelling from the UK and would like a quote for an India tour.',
  },

  // ── USA ──────────────────────────────────────────────────────────
  {
    slug: 'india-tour-package-from-usa',
    country: 'United States',
    label: 'From the USA',
    seoTitle: 'India Tour Package from the USA 2027',
    metaDescription:
      'Private India tour packages for US travellers in 2027: Golden Triangle and Rajasthan with a chauffeur from Delhi Airport, plus jet-lag and e-Visa tips.',
    h1: 'India Tour Package from the USA: Private Tours for 2027',
    intro:
      'India is a long trip from the United States, so it pays to make the most of it. We plan private tours that start at Delhi Airport with your own car and English-speaking chauffeur, build in a gentle first day for jet lag, and pace the Golden Triangle and Rajasthan so you are not rushing between monuments.',
    keywords: [
      'india tour package from usa',
      'best india tour packages from usa',
      'luxury india tour packages from usa',
      'golden triangle tour from usa',
    ],
    flights: {
      heading: 'Flights from the USA to Delhi',
      paragraphs: [
        'Non-stop flights to Delhi (DEL) typically operate from a few major hubs such as New York, Newark, Chicago, Washington DC and San Francisco, and take roughly 14 to 16 hours. From other US cities, most travellers connect once in Europe or in a Gulf hub such as Dubai, Doha or Abu Dhabi.',
        'Many flights from the US land in Delhi late at night or in the early hours. That is normal for us: your chauffeur will be waiting whatever the time, and we track the flight so delays are covered.',
      ],
    },
    timeZone: {
      heading: 'Time difference and jet lag',
      paragraphs: [
        'India is 10 hours 30 minutes ahead of US Eastern Standard Time and 13 hours 30 minutes ahead of Pacific Standard Time. When US daylight saving time is in effect, the gap is one hour less. Day and night are almost reversed, so plan an easy start.',
      ],
      dayOnePlan: [
        'Airport pickup at any hour and transfer to your hotel',
        'A full rest day, or a light afternoon outing only if you feel up to it',
        'Get outside in the daylight to help reset your body clock',
        'Begin the main sightseeing on Day 2 or Day 3; we can start Agra or Jaipur later in the morning',
      ],
    },
    visa: [
      'US citizens are eligible for the Indian e-Visa. Apply only on the official Government of India website, ' +
        VISA_SITE +
        '. Many unofficial sites look similar and charge extra.',
      'Your passport should be valid for at least six months from your arrival date and have blank pages. Print the e-Visa approval and keep it with your passport for immigration in Delhi.',
    ],
    bestMonths: {
      heading: 'Best months for US travellers',
      paragraphs: [
        'October to March is the best season for Delhi, Agra and Rajasthan. Thanksgiving week in late November is an excellent time to go, with clear skies and comfortable temperatures. Spring break in March also works well before the heat builds in April.',
        'Christmas and New Year are peak weeks in India too, so reserve hotels and your car early. US summer vacation (June to August) falls in India’s hot season and monsoon; if those are your only dates, consider the Himalayan hill stations instead of the plains.',
      ],
    },
    practical: [
      {
        title: 'Plugs and voltage',
        text: 'India uses 230 V with round-pin sockets (Types C, D and M). US plugs need an adaptor, and devices that are not dual-voltage (check the label for 100–240 V) also need a converter.',
      },
      {
        title: 'Money and cards',
        text: 'Visa, Mastercard and American Express are accepted in most hotels; smaller shops prefer cash. Withdraw rupees from an airport ATM and let your bank know your travel dates.',
      },
      {
        title: 'Getting around',
        text: 'Traffic drives on the left and roads are busy, which is why a private chauffeur is the easiest way to travel between cities. Your driver handles parking, tolls and permits.',
      },
      {
        title: 'Phone and data',
        text: 'Check your US carrier’s international plan, or buy an Indian SIM or eSIM on arrival with your passport. Keep WhatsApp installed: it is how most Indians, including us, communicate.',
      },
    ],
    recommendedTourSlugs: [
      'golden-triangle-tour',
      'golden-triangle-ranthambore',
      'golden-triangle-varanasi-tour',
      'delhi-agra-jaipur-udaipur-tour',
      'luxury-rajasthan-tour',
      'rajasthan-heritage-tour',
    ],
    recommendationNote:
      'Because the flight is long, most US travellers choose 8 to 14 days: the Golden Triangle plus Varanasi, Ranthambore, Udaipur or a longer Rajasthan circuit.',
    faqs: [
      {
        q: 'Our flight lands in Delhi after midnight. Is that a problem?',
        a: 'No. Late-night arrivals are common from the US. Your chauffeur meets you whatever the time, and we can request early check-in at your hotel so you can sleep straight away.',
      },
      {
        q: 'How long should an India trip from the USA be?',
        a: 'We suggest at least 8 to 10 days on the ground. That allows a rest day for jet lag, the Golden Triangle, and one or two extra places such as Ranthambore, Udaipur or Varanasi.',
      },
      {
        q: 'Can you arrange a luxury tour?',
        a: 'Yes. We can reserve luxury and heritage palace hotels and a premium vehicle, and add private guides at the monuments. Tell us your preferences and we put everything into one written quote.',
      },
      {
        q: 'How do we pay from the US?',
        a: 'A 20–25% deposit confirms the booking, by international card or bank wire. The balance is due on arrival in India. Your written quote lists every charge before you pay.',
      },
      {
        q: 'Is it safe to travel by road in India?',
        a: 'Our chauffeurs are experienced on long highway drives and know the routes well. Intercity legs use the main expressways, and we plan driving in daylight wherever possible.',
      },
    ],
    waText: 'Hello Satnam Voyages, we are travelling from the USA and would like a quote for an India tour.',
  },

  // ── Australia ────────────────────────────────────────────────────
  {
    slug: 'india-tour-package-from-australia',
    country: 'Australia',
    label: 'From Australia',
    seoTitle: 'India Tours from Australia 2027',
    metaDescription:
      'Private and luxury India tours for Australian travellers in 2027: Golden Triangle and Rajasthan by chauffeur-driven car, flights, e-Visa and best months.',
    h1: 'India Tours from Australia: Private & Luxury Trips for 2027',
    intro:
      'From Sydney, Melbourne, Brisbane or Perth, India is closer than Europe and the time difference is small. We plan private tours from Delhi Airport with your own chauffeur, covering the Golden Triangle, Rajasthan’s palaces and forts, and extensions such as Amritsar’s Golden Temple.',
    keywords: [
      'india tours from australia',
      'luxury india tours from australia',
      'golden triangle tour from australia',
      'rajasthan tour from australia',
    ],
    flights: {
      heading: 'Flights from Australia to Delhi',
      paragraphs: [
        'Non-stop flights to Delhi (DEL) typically operate from Sydney and Melbourne, taking around 12 to 13 hours. From Brisbane, Perth and Adelaide, most travellers connect once, commonly through Singapore, Kuala Lumpur, Bangkok or a Gulf hub.',
        'Share your flight details and we track your arrival. Your chauffeur waits in the arrivals area and drives you straight to your hotel.',
      ],
    },
    timeZone: {
      heading: 'Time difference: an easy adjustment',
      paragraphs: [
        'India is 4 hours 30 minutes behind Sydney and Melbourne (AEST) and 5 hours 30 minutes behind during Australian daylight saving time. Perth is only 2 hours 30 minutes ahead of India. Most Australians adjust within a day.',
      ],
      dayOnePlan: [
        'Chauffeur pickup at Delhi Airport and hotel transfer',
        'Afternoon sightseeing in New Delhi if you arrive early: India Gate, Humayun’s Tomb or Qutub Minar',
        'An early night, because you will wake early anyway, which is perfect for a Taj Mahal sunrise later in the trip',
      ],
    },
    visa: [
      'Australian citizens are eligible for the Indian e-Visa. Apply only on the official Government of India website, ' +
        VISA_SITE +
        ', not through look-alike sites.',
      'Your passport needs at least six months of validity from arrival and blank pages. Print the approval and carry it with your passport.',
    ],
    bestMonths: {
      heading: 'Best months for Australian travellers',
      paragraphs: [
        'The best time for Delhi, Agra and Rajasthan is October to March. Australia’s late-September and early-October school holidays line up well with the start of India’s dry season, and the December–January summer break falls in North India’s pleasant winter.',
        'Australia’s winter (June to August) is India’s monsoon and the hottest, most humid time on the plains. If you can only travel then, we suggest the Himalayan hill stations such as Shimla and Manali rather than Rajasthan.',
      ],
    },
    practical: [
      {
        title: 'Plugs and power',
        text: 'Voltage is the same (230 V), but Indian sockets are round-pin Types C, D and M. Australian angled-pin plugs need an adaptor.',
      },
      {
        title: 'Money and cards',
        text: 'Cards are widely accepted in hotels and restaurants; carry cash in rupees for markets, rickshaws and tips. Use bank ATMs rather than standalone machines.',
      },
      {
        title: 'Driving side',
        text: 'India drives on the left, as in Australia. Your chauffeur handles every kilometre, including city traffic, tolls and parking.',
      },
      {
        title: 'Health',
        text: 'See your GP or a travel clinic a few weeks before you go for routine vaccinations and advice. Drink bottled or filtered water; your car is stocked with drinking water.',
      },
    ],
    recommendedTourSlugs: [
      'golden-triangle-tour-5-days',
      'golden-triangle-amritsar-tour',
      'luxury-rajasthan-tour',
      'rajasthan-heritage-tour',
      'rajasthan-tour-by-car-and-driver',
    ],
    recommendationNote:
      'Australian travellers often combine the Golden Triangle with Rajasthan or Amritsar. Ask us for a luxury version with heritage palace hotels throughout.',
    faqs: [
      {
        q: 'Is there a non-stop flight from Australia to Delhi?',
        a: 'Non-stop flights typically run from Sydney and Melbourne. From other cities you usually connect once in Asia or the Gulf. Check current schedules with your airline or travel agent.',
      },
      {
        q: 'Can we do a luxury India tour from Australia?',
        a: 'Yes. We can book luxury and heritage palace hotels, a premium SUV and private monument guides, all in one written quote. Tell us the style you want and we tailor the route.',
      },
      {
        q: 'Should we avoid India in June and July?',
        a: 'For Delhi, Agra and Rajasthan, yes if you can: it is very hot and then rainy. October to March is far more comfortable. For June and July, the Himalayan hill stations are a better choice.',
      },
      {
        q: 'Do you pick up from Delhi Airport?',
        a: 'Yes. Pickup and drop at Delhi Airport are included in our tours that start and end in Delhi. Your chauffeur meets you with a name card in the arrivals area.',
      },
      {
        q: 'How do we pay from Australia?',
        a: 'A 20–25% deposit by international card or bank transfer confirms the booking, and the balance is paid on arrival. Every charge is listed in the written quote first.',
      },
    ],
    waText: 'Hello Satnam Voyages, we are travelling from Australia and would like a quote for an India tour.',
  },

  // ── South Africa ────────────────────────────────────────────────
  {
    slug: 'india-tour-package-from-south-africa',
    country: 'South Africa',
    label: 'From South Africa',
    seoTitle: 'Golden Triangle Tour from South Africa',
    metaDescription:
      'Golden Triangle India tour packages for South African travellers in 2027: private chauffeur from Delhi Airport, flight routes, e-Visa and the best months.',
    h1: 'Golden Triangle India Tour Packages from South Africa',
    intro:
      'From Johannesburg, Cape Town or Durban, a Golden Triangle tour of Delhi, Agra and Jaipur is an easy first trip to India. The time difference is small, and your private chauffeur meets you at Delhi Airport and drives you for the whole tour, with no internal flights or trains to arrange.',
    keywords: [
      'golden triangle india tour packages from south africa',
      'india tour package from south africa',
      'golden triangle tour from johannesburg',
      'india holiday from south africa',
    ],
    flights: {
      heading: 'Flights from South Africa to Delhi',
      paragraphs: [
        'Most travellers from South Africa typically fly to Delhi (DEL) with one connection, commonly through Dubai, Doha or Abu Dhabi, or through Mumbai, Addis Ababa or Nairobi. Total journey time is usually 12 to 16 hours depending on the connection.',
        'Send us your flight number and we track the arrival into Delhi. Your chauffeur meets you in the arrivals hall.',
      ],
    },
    timeZone: {
      heading: 'Time difference and your first day',
      paragraphs: [
        'India is 3 hours 30 minutes ahead of South Africa (SAST) all year, as neither country uses daylight saving time. Jet lag is mild, though a long connection can still be tiring.',
      ],
      dayOnePlan: [
        'Airport pickup and transfer to your hotel',
        'Rest after the connection, then an easy New Delhi outing if you feel like it',
        'Full sightseeing starts on Day 2',
      ],
    },
    visa: [
      'South African citizens are eligible for the Indian e-Visa. Apply only on the official Government of India website, ' +
        VISA_SITE +
        '.',
      'Your passport needs at least six months of validity from arrival and blank pages. India has yellow fever vaccination rules for travellers arriving from, or transiting through, certain countries: if your connection goes through East Africa, check the current Indian health requirements before you fly.',
    ],
    bestMonths: {
      heading: 'Best months for South African travellers',
      paragraphs: [
        'October to March is the best season for Delhi, Agra and Jaipur. The late-September to early-October school holidays and the December–January holidays both fall in good weather, while the March–April holidays work best if you travel early before the heat builds.',
        'The June–July holidays fall in India’s monsoon, when the plains are hot and humid. If those are your dates, consider the Himalayan hill stations instead.',
      ],
    },
    practical: [
      {
        title: 'Plugs and power',
        text: 'Good news: India also uses the large round three-pin Type M socket common in South Africa, as well as Types C and D, and the same 230 V supply. A universal adaptor is still useful for every socket you might meet.',
      },
      {
        title: 'Money and cards',
        text: 'International Visa and Mastercard cards work in most hotels. Exchange or withdraw rupees on arrival for markets and tips, and tell your bank about your trip.',
      },
      {
        title: 'Driving side',
        text: 'India drives on the left, as in South Africa. Your chauffeur does all the driving, including busy city traffic.',
      },
      {
        title: 'Food and water',
        text: 'Indian food varies a lot by region and spice can be adjusted on request. Drink bottled or filtered water; your car carries drinking water.',
      },
    ],
    recommendedTourSlugs: [
      'golden-triangle-tour-3-days',
      'golden-triangle-tour-4-days',
      'golden-triangle-tour-5-days',
      'golden-triangle-ranthambore',
      'rajasthan-tour-by-car-and-driver',
    ],
    recommendationNote:
      'Short on leave? The Golden Triangle works in three or four days. With a week or more, add Ranthambore for a tiger safari or continue into Rajasthan.',
    faqs: [
      {
        q: 'Is there a direct flight from South Africa to Delhi?',
        a: 'Most routings involve one connection, commonly in the Gulf, Mumbai or East Africa. Check current schedules with your airline or travel agent.',
      },
      {
        q: 'What is the shortest Golden Triangle tour?',
        a: 'Three days covers the highlights of Delhi, Agra and Jaipur at a fast pace. Four or five days is more comfortable and leaves time for the Taj Mahal at sunrise.',
      },
      {
        q: 'Do South African plugs work in India?',
        a: 'Often, yes: India uses the large round three-pin Type M socket as well as Types C and D, at 230 V. Bring a universal adaptor for sockets that differ.',
      },
      {
        q: 'Can you book our hotels?',
        a: 'Yes. Choose Standard, Deluxe or Luxury heritage hotels and we add them to your written quote, or book your own and use us for the car and chauffeur only.',
      },
      {
        q: 'How do we pay from South Africa?',
        a: 'A 20–25% deposit by international card or bank transfer confirms the booking, and the balance is paid on arrival in India. Every charge is listed in your written quote first.',
      },
    ],
    waText: 'Hello Satnam Voyages, we are travelling from South Africa and would like a quote for a Golden Triangle tour.',
  },
];

export function getCountryOffer(slug: string): CountryOffer | undefined {
  return COUNTRY_OFFERS.find((o) => o.slug === slug);
}
