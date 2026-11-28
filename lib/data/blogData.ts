// India travel blog for international visitors planning 2027 trips.
// Owner policy: no prices or currency amounts anywhere (fares and package
// prices change with season and availability, so readers are asked for a quote).

import { POSTS_B } from './blog/postsB';
import { POSTS_C } from './blog/postsC';

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Layout appends " | Satnam Voyages"; keep to 45 characters or fewer */
  seoTitle: string;
  /** 160 characters or fewer */
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  heroImage: string;
  heroAlt: string;
  keywords: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  relatedTourSlugs: string[];
}

const IMG = {
  taj: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
  tajDetail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
  hawaMahal: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1600&q=80',
  amber: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  udaipur: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=80',
  jaisalmer: 'https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?auto=format&fit=crop&w=1600&q=80',
  humayun: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
  rishikesh: 'https://images.unsplash.com/photo-1511754863001-18d44abd0a93?auto=format&fit=crop&w=1600&q=80',
};

const PUBLISHED = '2026-11-24';

export type RawPost = Omit<BlogPost, 'readMinutes' | 'datePublished' | 'dateModified'>;

const RAW_POSTS: RawPost[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'golden-triangle-tour-india-2027-guide',
    title: 'Golden Triangle Tour India 2027: The Complete Planning Guide',
    seoTitle: 'Golden Triangle Tour India 2027 Guide',
    metaDescription:
      'Plan a Golden Triangle tour of India in 2027: Delhi, Agra and Jaipur itineraries for 4 to 7 days, drive times, best months, Taj Mahal rules and tips.',
    excerpt:
      'Delhi, Agra and Jaipur in one loop: how many days you need, the best route, drive times, Taj Mahal rules and the months to go in 2027.',
    heroImage: IMG.taj,
    heroAlt: 'The Taj Mahal in Agra seen from the main gateway garden',
    keywords: ['Golden Triangle tour India', 'Golden Triangle tour 2027', 'Delhi Agra Jaipur tour', 'Golden Triangle itinerary'],
    relatedTourSlugs: ['golden-triangle-tour-5-days', 'golden-triangle-tour', 'golden-triangle-ranthambore', 'delhi-agra-jaipur-udaipur-tour'],
    sections: [
      {
        heading: 'What is the Golden Triangle?',
        paragraphs: [
          'The Golden Triangle is the classic first trip to India: a road loop that links Delhi, Agra and Jaipur. On a map the three cities form a rough triangle, and each leg is a comfortable half-day drive on modern expressways. In one week you see Mughal Delhi, the Taj Mahal and the forts and palaces of Rajasthan\'s Pink City, with very little time lost in transit.',
          'For international visitors it is popular for a practical reason too. Most long-haul flights land at Delhi\'s Indira Gandhi International Airport, so the trip starts and ends at the same airport. There are no domestic flights to arrange, and a private car with a driver can collect you at arrivals and drop you back at departures.',
        ],
      },
      {
        heading: 'How many days do you need?',
        paragraphs: [
          'Five days (four nights) is the shortest trip that still feels relaxed. Six or seven days lets you add Old Delhi on foot, Fatehpur Sikri, a second morning in Jaipur or a sunrise visit to the Taj Mahal without rushing.',
        ],
        bullets: [
          '4 nights / 5 days: Delhi (1 night), Agra (1 night), Jaipur (2 nights), return to Delhi airport. Best for travellers with limited leave.',
          '5 nights / 6 days: adds a full day in Delhi so you can recover from the flight before touring.',
          '6 to 7 nights: adds Fatehpur Sikri, the Abhaneri stepwell, or a detour to Ranthambore for tiger safaris.',
          '9 days or more: continue from Jaipur to Pushkar and Udaipur, the City of Lakes.',
        ],
      },
      {
        heading: 'Route, distances and drive times',
        paragraphs: [
          'Delhi to Agra is about 230 km and takes roughly 3.5 hours on the Yamuna Expressway. Agra to Jaipur is about 240 km, around 4.5 to 5 hours, and most drivers stop at Fatehpur Sikri on the way. Jaipur back to Delhi is about 280 km, roughly 4 hours on the Delhi-Mumbai Expressway, though traffic around Gurgaon can add time in the evening.',
          'Most people run the loop clockwise: Delhi, then Agra, then Jaipur. Doing Agra second means your sunrise at the Taj Mahal comes after a night\'s sleep in India rather than straight off a long flight. If your arrival day is a Thursday, swap the order so you are not in Agra on a Friday.',
        ],
      },
      {
        heading: 'A sample 5-day Golden Triangle itinerary',
        paragraphs: [
          'Day 1, Delhi: airport pickup, rest, then afternoon sightseeing at Humayun\'s Tomb, India Gate and Qutub Minar. Day 2, Delhi to Agra: a morning in Old Delhi (Jama Masjid and a cycle-rickshaw ride through Chandni Chowk), then the drive to Agra with Agra Fort or Mehtab Bagh at sunset. Day 3, Agra to Jaipur: the Taj Mahal at sunrise, breakfast, then Fatehpur Sikri on the road to Jaipur. Day 4, Jaipur: Amber Fort in the morning, City Palace, Jantar Mantar and Hawa Mahal. Day 5, Jaipur to Delhi: a short morning stop at Albert Hall or the bazaars, then the drive to Delhi airport for an evening or night flight.',
          'Our 4 nights / 5 days Golden Triangle offer follows this plan, and every day can be adjusted to your flight times.',
        ],
      },
      {
        heading: 'Taj Mahal rules you need to know',
        paragraphs: ['The Taj Mahal has its own rules, and a few of them catch first-time visitors out.'],
        bullets: [
          'It is closed every Friday for prayers. Plan your Agra day around this.',
          'It opens about 30 minutes before sunrise and closes about 30 minutes before sunset. Sunrise is the quietest and coolest time to visit.',
          'Large bags, food, tripods and drones are not allowed. Bring a small bag, your passport and a water bottle.',
          'Book entry tickets online through the official Archaeological Survey of India website to skip the ticket queue.',
          'Night viewing runs on a few nights around each full moon (not Fridays) with limited tickets that must be booked in advance.',
        ],
      },
      {
        heading: 'Best time for a Golden Triangle tour in 2027',
        paragraphs: [
          'October to March is the best season. Days are sunny and pleasant, usually in the low to mid 20s °C. December and January mornings can be foggy, which sometimes delays early starts and makes the Taj Mahal look hazy at dawn; February and March are clearer. April to June is very hot, often above 40 °C, so sightseeing is limited to early mornings and late afternoons. July to September is monsoon season: greener and quieter, with afternoon showers.',
          'If you can choose, late October, November, February and early March give the best balance of weather and crowds.',
        ],
      },
      {
        heading: 'Private car or group tour?',
        paragraphs: [
          'A private car with a driver is the most comfortable way to do the Golden Triangle. You leave when you want, stop for photos, and change the plan if you are tired. It is also simpler for families and older travellers, because the car waits at every monument and your luggage stays with you between cities.',
          'Hotels are flexible. Some travellers book their own hotels and only need the car and driver; others ask us to suggest hotels in their budget. A licensed local guide can be added at the Taj Mahal, Agra Fort and Amber Fort, which we recommend for first-time visitors.',
        ],
      },
      {
        heading: 'How to book',
        paragraphs: [
          'Send us your arrival and departure flights, number of travellers and the kind of hotel you like. We reply on WhatsApp or email with a day-by-day plan and a written quote that lists exactly what is included. Prices depend on season, vehicle and hotel choice, so we quote every trip individually.',
        ],
      },
    ],
    faqs: [
      { q: 'Is 5 days enough for the Golden Triangle?', a: 'Yes. Five days covers Delhi, the Taj Mahal and Agra Fort, Fatehpur Sikri and the main sights of Jaipur at a comfortable pace. Add a day or two if you want more time in Old Delhi or Jaipur.' },
      { q: 'Which day should I avoid in Agra?', a: 'Friday. The Taj Mahal is closed to visitors every Friday.' },
      { q: 'Can the tour start from Delhi airport?', a: 'Yes. Your driver can meet you at arrivals at any terminal of Delhi IGI Airport and drop you back for your departure flight.' },
      { q: 'Is the Golden Triangle safe for solo and female travellers?', a: 'It is one of the most travelled routes in India. A private car with a vetted driver adds comfort and security; use normal city precautions in crowded markets and at night.' },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'rajasthan-tour-packages-2027',
    title: 'Rajasthan Tour Packages 2027: Itineraries from 7 to 14 Days',
    seoTitle: 'Rajasthan Tour Packages 2027: Itineraries',
    metaDescription:
      'Compare Rajasthan tour itineraries for 2027: 7, 9, 12 and 14 days covering Jaipur, Jodhpur, Jaisalmer, Udaipur, Pushkar and Ranthambore by private car.',
    excerpt:
      'Which Rajasthan route suits your trip length: forts, deserts, lakes and tiger reserves, with realistic drive times between each city.',
    heroImage: IMG.udaipur,
    heroAlt: 'City Palace and Lake Pichola in Udaipur, Rajasthan',
    keywords: ['Rajasthan tour packages', 'Rajasthan itinerary', 'Rajasthan tour 2027', 'Rajasthan tour by car'],
    relatedTourSlugs: ['rajasthan-heritage-tour', 'jaipur-jodhpur-udaipur-tour', 'jaipur-jodhpur-jaisalmer-tour', 'delhi-agra-jaipur-udaipur-tour'],
    sections: [
      {
        heading: 'Why Rajasthan works best by road',
        paragraphs: [
          'Rajasthan is India\'s largest state, and its highlights are spread out: the hill forts of Jaipur, the blue city of Jodhpur, the golden sandstone of Jaisalmer, the lakes of Udaipur and the tiger reserve at Ranthambore. Trains and flights connect some of these, but not all, and the timings rarely suit sightseeing. A private car with a driver links them door to door, lets you stop at villages, stepwells and roadside dhabas, and keeps your luggage safe in the boot.',
          'Main highways are in good condition, and most legs take 4 to 6 hours. A well-planned Rajasthan tour keeps driving days short and spends two nights in the big cities.',
        ],
      },
      {
        heading: 'Key distances and drive times',
        paragraphs: ['These are typical times in daylight with a short break. Allow extra time in winter fog or around festivals.'],
        bullets: [
          'Delhi to Jaipur: about 280 km, 4 hours via the Delhi-Mumbai Expressway.',
          'Jaipur to Ranthambore (Sawai Madhopur): about 180 km, 3.5 hours.',
          'Jaipur to Jodhpur: about 340 km, 5.5 hours, often via Pushkar.',
          'Jodhpur to Jaisalmer: about 285 km, 5 hours.',
          'Jodhpur to Udaipur via Ranakpur: about 250 km, 6 hours including the temple visit.',
          'Jaipur to Udaipur: about 390 km, 6.5 hours.',
        ],
      },
      {
        heading: '7 days: Jaipur, Jodhpur and Jaisalmer (the desert route)',
        paragraphs: [
          'Two nights in Jaipur for Amber Fort, City Palace and the bazaars; one night in Jodhpur for Mehrangarh Fort and the blue lanes below it; two nights in Jaisalmer for the living fort, the havelis and an evening at the Sam sand dunes, ideally with a night in a desert camp. Then drive back to Jodhpur or Jaipur for your onward journey. This is the best short route if the desert is the reason you are coming.',
        ],
      },
      {
        heading: '8 to 9 days: Jaipur, Pushkar, Jodhpur, Ranakpur and Udaipur',
        paragraphs: [
          'This is the route for palaces and lakes. Jaipur, then Pushkar\'s holy lake and ghats, then Jodhpur. On the drive to Udaipur, stop at the marble Jain temple at Ranakpur, which non-Jain visitors can usually enter around midday to late afternoon. End with two nights in Udaipur for the City Palace, a boat on Lake Pichola and the old town. Add Delhi and Agra at the start and it becomes a 9-day Golden Triangle plus Udaipur trip.',
        ],
      },
      {
        heading: '12 to 14 days: the full Rajasthan circuit',
        paragraphs: [
          'With two weeks you can see almost everything. A typical grand loop from Delhi runs Mandawa (painted havelis of Shekhawati), Bikaner, Jaisalmer, Jodhpur, Ranakpur, Udaipur, Chittorgarh or Bundi, Pushkar and Jaipur, then back to Delhi. Add Agra and Ranthambore and you have a complete northern India journey. On longer trips, schedule a rest day every four or five days; you will enjoy the second week far more.',
        ],
      },
      {
        heading: 'Adding Ranthambore tiger safaris',
        paragraphs: [
          'Ranthambore National Park sits between Jaipur and Agra, so it slots neatly into a Golden Triangle or a Rajasthan loop. Safaris run in the early morning and afternoon in open jeeps (gypsies) or larger canters. The main core zones are usually open from October to June and close during the monsoon. Safari permits are limited and sold through the Rajasthan forest department, so book them as soon as your dates are fixed. Two safaris give you a much better chance of a tiger sighting than one.',
        ],
      },
      {
        heading: 'When to travel in 2027',
        paragraphs: [
          'October to March is ideal. November brings the Pushkar camel fair and Diwali lights; December and January are cool, with cold nights in the desert, so pack a warm layer. February is excellent for Jaisalmer, which hosts its desert festival around then. From April the heat builds quickly, and May and June are very hot. The monsoon (July to September) turns Udaipur and the Aravalli hills green, and is a quiet, good-value time if you do not mind showers.',
        ],
      },
      {
        heading: 'Hotels: forts, havelis and palaces',
        paragraphs: [
          'Part of the magic of Rajasthan is where you sleep. Many old forts and havelis are now heritage hotels, from simple family-run havelis to grand palace hotels. Mixing them with comfortable modern hotels keeps a long trip balanced. Tell us your style and we will suggest options, or book your own and use us only for the car and driver.',
        ],
      },
      {
        heading: 'Getting a quote',
        paragraphs: [
          'Every Rajasthan tour we run is private and tailor-made, so prices depend on your dates, route length, vehicle and hotels. Send us your dates and the places you want to see, and we will reply with a day-by-day plan and a written quote. You can also start from one of our ready-made Rajasthan itineraries and change it.',
        ],
      },
    ],
    faqs: [
      { q: 'How many days do I need for Rajasthan?', a: 'Seven days covers one region well (the desert or the lakes). Ten to fourteen days lets you see Jaipur, Jodhpur, Jaisalmer and Udaipur without long driving days.' },
      { q: 'Is it better to fly or drive around Rajasthan?', a: 'Driving is usually better. Most legs are 4 to 6 hours, you see village life along the way, and the car is available for sightseeing in each city.' },
      { q: 'Can I combine Rajasthan with the Taj Mahal?', a: 'Yes. Agra is about 4.5 to 5 hours from Jaipur, so most Rajasthan tours start in Delhi and include Agra on the way.' },
      { q: 'Are desert camps comfortable?', a: 'Camps near the Sam dunes range from basic to luxury tents with private bathrooms. Nights in December and January are cold, so choose a camp with proper bedding and bring a warm layer.' },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'same-day-taj-mahal-tour-from-delhi',
    title: 'Same Day Taj Mahal Tour from Delhi: How to Do Agra in One Day',
    seoTitle: 'Same Day Taj Mahal Tour from Delhi: Guide',
    metaDescription:
      'Plan a same day Taj Mahal tour from Delhi: early start, Yamuna Expressway timing, Agra Fort, lunch stops, Friday closure and what to carry. Private car tips.',
    excerpt:
      'Yes, you can see the Taj Mahal and Agra Fort in a day trip from Delhi. Here is the timing that works, what to skip and what to carry.',
    heroImage: IMG.tajDetail,
    heroAlt: 'Close view of the white marble dome of the Taj Mahal',
    keywords: ['same day Taj Mahal tour from Delhi', 'Agra day trip from Delhi', 'Taj Mahal day tour', 'Delhi to Agra by car'],
    relatedTourSlugs: ['same-day-delhi-agra-tour', 'golden-triangle-tour-5-days', 'golden-triangle-tour'],
    sections: [
      {
        heading: 'Is a same day Agra trip worth it?',
        paragraphs: [
          'If you only have a short stopover in Delhi, a same day Taj Mahal tour is absolutely worth it. Agra is about 230 km from Delhi, and the Yamuna Expressway makes it roughly 3.5 hours each way by car. That leaves five to six hours in Agra, enough for the Taj Mahal, Agra Fort and a relaxed lunch. It is a long day, typically 12 to 14 hours door to door, but most travellers sleep in the car on the way back.',
          'If your schedule allows, an overnight stay in Agra is more relaxed and lets you see the Taj at sunrise and sunset. But for many business travellers and stopover visitors, the day trip is the only option, and it works well with the right timing.',
        ],
      },
      {
        heading: 'Check the day first: no Fridays',
        paragraphs: [
          'The Taj Mahal is closed every Friday. A Friday day trip to Agra still lets you see Agra Fort, Mehtab Bagh (with a view of the Taj across the river) and the Baby Taj, but you will not enter the Taj Mahal itself. Choose another day if you can.',
        ],
      },
      {
        heading: 'The timing that works',
        paragraphs: ['This is the plan most of our drivers follow for a same day Delhi to Agra trip.'],
        bullets: [
          'Around 6:00 am: hotel pickup in Delhi, Gurgaon or Noida. Earlier starts beat traffic and the midday heat.',
          'About 9:30 am: arrive in Agra, meet your guide if booked, and enter the Taj Mahal. Allow two to three hours.',
          'Around 12:30 pm: lunch in Agra.',
          'About 1:30 pm: Agra Fort, the red sandstone fortress where Shah Jahan spent his final years looking out at the Taj.',
          'Optional: the tomb of Itimad-ud-Daulah (the "Baby Taj") or Mehtab Bagh for a riverside view in the late afternoon.',
          'Around 4:00 to 5:00 pm: start back to Delhi, arriving in the evening around 8:00 to 9:00 pm.',
        ],
      },
      {
        heading: 'Sunrise version',
        paragraphs: [
          'For photographers, a sunrise departure leaves Delhi around 3:00 am to reach the Taj gates when they open, about 30 minutes before sunrise. The light is soft and the crowds are at their thinnest. It is a very early start, but you are back in Delhi by mid-afternoon. In December and January, dense fog can delay the early drive and hide the dome at dawn, so the standard morning start is often better in those months.',
        ],
      },
      {
        heading: 'What to carry and what to leave in the car',
        bullets: [
          'Your passport: you may be asked for ID at ticket checks.',
          'A small bag only. Large backpacks, food, tripods, drones and many electronic items are not allowed inside.',
          'Water, sunscreen and a hat outside the winter months.',
          'Shoe covers are given for the main mausoleum platform; alternatively you remove your shoes.',
          'Modest clothing is appreciated at the mosque within the complex, though there is no strict dress code for the monument.',
        ],
        paragraphs: ['Leave everything else locked in the car; your driver waits at the parking area.'],
      },
      {
        heading: 'Tickets and guides',
        paragraphs: [
          'Buy your Taj Mahal ticket online on the official Archaeological Survey of India website before you go; it saves queueing at the counter. A licensed guide makes a big difference at the Taj and Agra Fort: the stories behind the inlay work, the calligraphy and Shah Jahan\'s family make the visit far more memorable. Only use government-licensed guides who carry an ID card, and ignore touts at the gates.',
        ],
      },
      {
        heading: 'Avoid the common traps',
        paragraphs: [
          'Some drivers and guides in Agra take visitors to marble inlay or carpet shops where they earn commission. Our drivers only stop where you ask. If you would like to see inlay work, say so and we will suggest a workshop; if not, you will not be taken to shops. Also politely ignore anyone at the gates claiming the monument is closed or offering "special" entry.',
        ],
      },
      {
        heading: 'Booking a private same day Agra tour',
        paragraphs: [
          'A private car with a driver collects you from your hotel, waits at every stop and brings you back. You can choose a sedan for two, an SUV for families, or a Tempo Traveller for groups. Message us your date, pickup point and number of travellers on WhatsApp and we will confirm availability and send a quote the same day.',
        ],
      },
    ],
    faqs: [
      { q: 'How long is the drive from Delhi to Agra?', a: 'About 3.5 hours each way via the Yamuna Expressway, depending on traffic leaving Delhi.' },
      { q: 'Can I take the train instead?', a: 'Yes, fast trains such as the Gatimaan Express run between Delhi and Agra. A private car is more flexible: it collects you from your hotel and waits at each monument.' },
      { q: 'Is the Taj Mahal open on Sundays?', a: 'Yes. It is open every day except Friday.' },
      { q: 'Can I add Fatehpur Sikri to a day trip?', a: 'It is possible but makes a very long day. Fatehpur Sikri fits better into an overnight trip or a Golden Triangle tour on the way to Jaipur.' },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'best-time-to-visit-india-2027',
    title: 'Best Time to Visit India in 2027: A Month-by-Month Guide',
    seoTitle: 'Best Time to Visit India 2027: By Month',
    metaDescription:
      'When to visit India in 2027: month-by-month weather for Delhi, Agra, Rajasthan and the Himalayas, plus festivals, fog, monsoon and the best months to travel.',
    excerpt:
      'Weather, crowds and festivals month by month, so you can choose the right time for the Golden Triangle, Rajasthan or the mountains.',
    heroImage: IMG.hawaMahal,
    heroAlt: 'The pink sandstone facade of Hawa Mahal in Jaipur',
    keywords: ['best time to visit India', 'India weather by month', 'when to visit India 2027', 'best time for Golden Triangle'],
    relatedTourSlugs: ['golden-triangle-tour-5-days', 'rajasthan-heritage-tour', 'shimla-manali-tour', 'rishikesh-haridwar-tour'],
    sections: [
      {
        heading: 'The short answer',
        paragraphs: [
          'For Delhi, Agra and Rajasthan, the best time to visit India is October to March. For the Himalayas (Shimla, Manali, Mussoorie, Rishikesh), the best months are March to June and September to November. India is big enough that somewhere is always in season; the trick is matching the region to the month.',
        ],
      },
      {
        heading: 'January',
        paragraphs: [
          'Cool and dry in the north, with sunny afternoons around 20 °C and cold nights. Dense morning fog is common in Delhi and Agra, and it can delay flights, trains and early drives. Rajasthan is lovely, though desert nights are cold. Republic Day on 26 January brings a parade in Delhi and security closures around central Delhi in the days before. The Jaipur Literature Festival usually takes place in late January.',
        ],
      },
      {
        heading: 'February',
        paragraphs: [
          'One of the best months overall: clear skies, comfortable temperatures and less fog. Excellent for the Golden Triangle, Ranthambore and Jaisalmer, which usually hosts its desert festival around this time. Snow is likely in Manali and the higher parts of Himachal.',
        ],
      },
      {
        heading: 'March',
        paragraphs: [
          'Warm days and pleasant evenings. Holi, the festival of colours, falls in March in 2027 and is the highlight of the month; book hotels early. Rishikesh usually holds its International Yoga Festival in early March. By late March the plains start to heat up.',
        ],
      },
      {
        heading: 'April to June',
        paragraphs: [
          'Hot season on the plains. Delhi, Agra and Rajasthan regularly pass 40 °C in May and June, so sightseeing should be limited to early mornings and evenings. This is peak season for the hill stations: Shimla, Manali and Mussoorie are pleasant, and the high passes beyond Manali usually open around late May or June. Indian school holidays make the hills busy in May and June.',
        ],
      },
      {
        heading: 'July to September: monsoon',
        paragraphs: [
          'The monsoon brings heavy showers, humidity and green landscapes. Agra and Jaipur are quieter and hotels are easier to find. Udaipur\'s lakes fill up and the Aravalli hills turn green. Mountain roads in Himachal and Uttarakhand can be blocked by landslides, so we avoid long Himalayan drives at the peak of the rains. Ranthambore\'s main safari zones close for the monsoon.',
        ],
      },
      {
        heading: 'October',
        paragraphs: [
          'The rains have ended, the air is clear and the main travel season begins. Dussehra and the run-up to Diwali bring lights and markets. A superb month for both the plains and the mountains, with crisp views in Himachal.',
        ],
      },
      {
        heading: 'November',
        paragraphs: [
          'Peak season. Pleasant days, cool nights and festivals: Diwali falls in late October or November depending on the lunar calendar, and the Pushkar camel fair usually takes place in late October or November. Hotels in Jaipur, Udaipur and Pushkar fill up around these dates, so plan early. Delhi can have poor air quality in November; a few days of touring outside the city helps.',
        ],
      },
      {
        heading: 'December',
        paragraphs: [
          'Cool and festive, with Christmas and New Year bringing a surge of travellers. Fog returns to the northern plains towards the end of the month. Rajasthan is beautiful, and desert camps are atmospheric but cold at night. Book well ahead for the holiday weeks.',
        ],
      },
      {
        heading: 'Peak season, shoulder season and booking ahead',
        paragraphs: [
          'From mid-October to March, especially around Diwali, Christmas, New Year and Holi, the best hotels in Agra, Jaipur, Udaipur and Jaisalmer fill early. If you are travelling in these weeks, confirm hotels and your car two to three months in advance. Ranthambore safari permits are limited and should be booked as soon as your dates are fixed.',
          'The shoulder months, September and early October and then late March and April, are a good compromise: fewer crowds, easier hotel availability and still-reasonable weather if you start your sightseeing early. The monsoon months are the quietest of all on the plains, and some heritage hotels offer their best value then.',
        ],
      },
      {
        heading: 'Which months to choose for your trip',
        bullets: [
          'Golden Triangle (Delhi, Agra, Jaipur): October to March; best clarity in February, March, October and November.',
          'Rajasthan desert and lakes: October to March.',
          'Ranthambore tigers: October to June; sightings often improve in the hotter months as animals gather at water.',
          'Shimla and Manali: March to June and September to November; December to February for snow.',
          'Rishikesh and Haridwar: September to April; avoid peak monsoon.',
        ],
        paragraphs: [
          'Not sure which month suits your plan? Send us your dates and interests and we will suggest the best route for that time of year.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the single best month to visit India?', a: 'For a first trip covering Delhi, Agra and Rajasthan, February and November are hard to beat: clear, comfortable weather and lively festivals.' },
      { q: 'Is it too hot to visit India in summer?', a: 'The plains are very hot from April to June. You can still travel with early starts and air-conditioned transport, or head to the Himalayan hill stations instead.' },
      { q: 'Does fog affect a Golden Triangle tour?', a: 'In late December and January, morning fog can delay early drives and hide the Taj Mahal at dawn. Plan flexible mornings and later Taj visits in those weeks.' },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'india-travel-tips-first-time-visitors',
    title: 'India Travel Tips for First-Time Visitors (2027 Edition)',
    seoTitle: 'India Travel Tips for First-Time Visitors',
    metaDescription:
      'First trip to India? Practical 2027 tips on the e-Visa, SIM and eSIM, money and UPI, what to wear, food safety, common scams and hiring a private driver.',
    excerpt:
      'Visas, phones, money, clothing, food and scams: the practical things we tell every first-time visitor before they land in Delhi.',
    heroImage: IMG.humayun,
    heroAlt: 'Humayun\'s Tomb in Delhi framed by gardens',
    keywords: ['India travel tips', 'first time in India', 'India e-Visa', 'India travel advice 2027'],
    relatedTourSlugs: ['golden-triangle-tour-5-days', 'delhi-sightseeing-old-and-new', 'golden-triangle-tour'],
    sections: [
      {
        heading: '1. Get the e-Visa from the official website only',
        paragraphs: [
          'Most nationalities, including citizens of the USA, UK, Canada, Australia and EU countries, can apply for an Indian e-Tourist Visa online. Apply only on the Government of India\'s official site (indianvisaonline.gov.in); many look-alike websites charge extra fees. Apply at least a few days before your flight, and preferably two to four weeks ahead in peak season. Your passport should be valid for at least six months from arrival and have two blank pages. Print the approval (the ETA) and keep a copy on your phone. Rules change, so check the official site for your nationality before you book.',
        ],
      },
      {
        heading: '2. Sort out your phone before you need it',
        paragraphs: [
          'Indian mobile data is fast and cheap. You can buy a prepaid SIM from Airtel or Jio at the airport or a shop in town with your passport, visa and a passport photo; activation can take a few hours. An international eSIM bought before you fly is easier and works on arrival. Either way, install WhatsApp: hotels, drivers, guides and tour companies in India all use it.',
        ],
      },
      {
        heading: '3. Money: cards, cash and UPI',
        paragraphs: [
          'Hotels, good restaurants and larger shops take international cards. Smaller shops, rickshaws, tips and street food are cash-based, so carry some small notes. ATMs are everywhere in cities; use ones attached to bank branches. India\'s UPI app payments are used for almost everything, and some foreign visitors can now use UPI through prepaid wallets offered at major airports. Tell your bank you are travelling so your card is not blocked.',
        ],
      },
      {
        heading: '4. What to wear',
        paragraphs: [
          'Light, loose cotton clothing that covers shoulders and knees works everywhere and is comfortable in the heat. At temples, mosques and gurdwaras you will remove your shoes; at gurdwaras and some mosques you will also cover your head (scarves are usually provided). Slip-on shoes save time. Pack a warm layer for winter evenings in the north and for air-conditioned cars and trains.',
        ],
      },
      {
        heading: '5. Food and water',
        bullets: [
          'Drink sealed bottled water or filtered water from your hotel. Your driver will usually have bottled water in the car.',
          'Eat freshly cooked hot food. Busy places with high turnover are safest.',
          'Go easy on raw salads, cut fruit from street stalls and ice for the first few days.',
          'Carry hand sanitiser and basic stomach medicine just in case.',
        ],
        paragraphs: ['Indian food is a highlight of the trip. If you are unsure about spice, ask for "less spicy" and your waiter will adjust.'],
      },
      {
        heading: '6. Common scams and how to avoid them',
        bullets: [
          'Someone at a station or monument says your hotel or the sight is closed and offers to take you elsewhere. Ignore them.',
          'Fake "official tourist offices" near Connaught Place and New Delhi station. Only book with companies you have researched.',
          'Unofficial guides at monument gates. Use licensed guides with ID cards, or book through your tour company.',
          'Commission shopping stops. Tell your driver clearly if you do not want to visit shops; a good company respects that.',
          'Unmetered taxis from the airport. Use the official prepaid taxi counter, an app cab or a pre-booked pickup.',
        ],
        paragraphs: [],
      },
      {
        heading: '7. Getting around: why many visitors hire a car and driver',
        paragraphs: [
          'India\'s trains and domestic flights are good, but for touring the north a private car with a driver is the most comfortable option. Your driver knows the roads, waits at every sight, looks after your luggage and helps with directions and local customs. Self-driving is not recommended for visitors: traffic rules are loosely followed, and an international driving permit is required anyway. Read our guide to hiring a private car and driver in India for what to look for.',
        ],
      },
      {
        heading: '8. Health and insurance',
        paragraphs: [
          'Take out travel insurance that covers medical treatment. Check with a travel clinic about recommended vaccinations a few weeks before departure. Pack mosquito repellent, especially during and just after the monsoon. Delhi\'s air quality is often poor from November to January; if you have asthma, bring your medication and plan more time outside the city.',
        ],
      },
      {
        heading: '9. Pace yourself',
        paragraphs: [
          'The most common mistake on a first trip is trying to see too much. Distances are bigger than they look and every city deserves time. Two nights in each major stop, early mornings for big monuments and a rest in the afternoon heat will make your trip far more enjoyable.',
        ],
      },
    ],
    faqs: [
      { q: 'Do I need a visa for India?', a: 'Most visitors do. Citizens of many countries can apply online for an e-Tourist Visa on the official Government of India website before travelling.' },
      { q: 'Is India safe for tourists?', a: 'Millions of visitors travel safely every year. Use licensed transport and guides, keep valuables secure in crowds, and follow your hotel\'s advice about areas to avoid at night.' },
      { q: 'Can I use my credit card in India?', a: 'Yes, at hotels, larger restaurants and shops. Carry cash for small purchases, tips and markets.' },
      { q: 'Should I tip in India?', a: 'Tipping is customary for drivers, guides and restaurant staff but always at your discretion, based on the service you received.' },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'hire-private-car-and-driver-in-india',
    title: 'How to Hire a Private Car and Driver in India (2027 Guide)',
    seoTitle: 'Hire a Private Car and Driver in India',
    metaDescription:
      'How hiring a private car and driver in India works: vehicle types, what is included, driver meals and nights, tolls, permits, tipping and questions to ask.',
    excerpt:
      'What is included, which car to choose, how drivers are accommodated, tolls and permits, and the questions to ask before you book.',
    heroImage: IMG.amber,
    heroAlt: 'Amber Fort above the road near Jaipur',
    keywords: ['private car and driver India', 'hire driver in India', 'India car with driver', 'chauffeur India tour'],
    relatedTourSlugs: ['golden-triangle-tour-5-days', 'golden-triangle-tour', 'rajasthan-heritage-tour'],
    sections: [
      {
        heading: 'Why a private car and driver?',
        paragraphs: [
          'For most international visitors touring northern India, a private car with a professional driver is the best way to travel. You set the schedule, the car waits at every monument, luggage stays locked in the boot between cities, and you see village India between the famous sights. It is common in India and far more affordable than in Europe or North America, which is why it is the standard way to do the Golden Triangle and Rajasthan.',
        ],
      },
      {
        heading: 'Choosing the right vehicle',
        bullets: [
          'Sedan (Swift Dzire, Toyota Etios or similar): up to 3 adults with medium luggage. Fine for couples on the Golden Triangle.',
          'SUV (Toyota Innova Crysta): up to 6 or 7 passengers with more luggage space and a smoother ride. The most popular choice for families and long Rajasthan routes.',
          'Tempo Traveller: a minibus for groups and extended families, available in sizes to suit any group.',
          'Luxury cars and coaches for larger groups can be arranged on request.',
        ],
        paragraphs: [
          'For trips longer than a week or with large suitcases, choose the SUV. The extra space and comfort matter over long driving days.',
        ],
      },
      {
        heading: 'What is usually included',
        paragraphs: [
          'A good quote for a private car tour should clearly state what is included. Typically that is the vehicle, the driver, fuel, the driver\'s allowance for meals and overnight stays, and pickup and drop-off at your hotel or airport. Ask how tolls, parking and state entry taxes are handled: some companies include them, others bill them at actual cost against receipts. Hotels, monument tickets, guides and meals for travellers are usually separate unless you book a full package.',
        ],
      },
      {
        heading: 'Where does the driver sleep and eat?',
        paragraphs: [
          'You do not need to arrange this. On multi-day tours, drivers sleep in driver accommodation provided by most hotels or arranged locally, and eat at places they know along the route. This is covered by the driver allowance in your quote. You are welcome to invite your driver to share a meal, and many travellers enjoy doing so, but it is never expected.',
        ],
      },
      {
        heading: 'Permits, plates and safety',
        paragraphs: [
          'Tourist vehicles in India must be commercially registered (they carry yellow number plates) and hold the right permits to travel between states. Ask the company to confirm this; a private car with white plates is not licensed to carry paying passengers. Seat belts should be fitted and working in the back as well as the front. Ask about the driver\'s experience on your route, especially for mountain roads in Himachal or Uttarakhand.',
        ],
      },
      {
        heading: 'Driving hours and night driving',
        paragraphs: [
          'Most drivers work a daytime schedule and rest at night. For safety we avoid long night drives on highways, where trucks, fog and unlit vehicles are common. Plan your days so most driving finishes before dark. If you have a late flight, a short transfer from a nearby city is fine.',
        ],
      },
      {
        heading: 'English and local knowledge',
        paragraphs: [
          'Drivers are drivers first, not guides, but experienced tour drivers speak conversational English and know the routes, rest stops and clean restaurants well. For the history of the monuments, hire a licensed local guide at each major site. A good driver will advise you on timing, help with tickets and parking, and keep you away from touts.',
        ],
      },
      {
        heading: 'Tipping your driver',
        paragraphs: [
          'Tipping is customary at the end of a multi-day trip if you were happy with the service. The amount is entirely your choice. Most travellers give it directly to the driver on the last day.',
        ],
      },
      {
        heading: 'Questions to ask before you book',
        bullets: [
          'Is the vehicle commercially registered with an all-India tourist permit?',
          'What exactly is included: fuel, tolls, parking, state taxes, driver allowance?',
          'Will the same driver stay with us for the whole trip?',
          'Are there any shopping stops? (The right answer: only if you ask.)',
          'How do I reach the office if something goes wrong during the trip?',
          'What is the cancellation policy?',
        ],
        paragraphs: [
          'We are a Delhi-based company with an office in Connaught Place, and we answer these questions in writing with every quote. Message us your route and dates on WhatsApp for a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'Is it safe to hire a driver in India?', a: 'Yes, when you book through an established company with commercially registered vehicles and experienced drivers. Avoid unregistered cars and drivers found through touts.' },
      { q: 'Can the driver also be my guide?', a: 'Drivers help with logistics and local tips, but for monument history we recommend licensed local guides at each major site.' },
      { q: 'Can I change the route during the trip?', a: 'Usually, yes. Small changes are easy; larger changes in distance or days may change the quote, which we confirm with you first.' },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'jaipur-day-trip-from-delhi',
    title: 'Same Day Jaipur Tour from Delhi: Itinerary and Tips',
    seoTitle: 'Same Day Jaipur Tour from Delhi: Itinerary',
    metaDescription:
      'Plan a same day Jaipur tour from Delhi by car: 4-hour expressway drive, Amber Fort, City Palace, Hawa Mahal and Jal Mahal, with timings and practical tips.',
    excerpt:
      'Jaipur is about 4 hours from Delhi on the new expressway. Here is how to see Amber Fort and the Pink City in one long day.',
    heroImage: IMG.hawaMahal,
    heroAlt: 'Hawa Mahal, the Palace of Winds, in Jaipur',
    keywords: ['same day Jaipur tour from Delhi', 'Jaipur day trip from Delhi', 'Delhi to Jaipur by car', 'Pink City day tour'],
    relatedTourSlugs: ['same-day-delhi-jaipur-tour', 'golden-triangle-tour-5-days', 'jaipur-jodhpur-udaipur-tour'],
    sections: [
      {
        heading: 'Can you visit Jaipur in a day from Delhi?',
        paragraphs: [
          'Yes. Jaipur is about 280 km from Delhi, and the Delhi-Mumbai Expressway has brought the drive down to roughly 4 hours each way. A same day Jaipur tour is a long day, usually 14 to 16 hours, but it is a good choice if you are based in Delhi and want a taste of Rajasthan without changing hotels.',
          'If you can spare a night, staying in Jaipur is much more relaxed and lets you add the bazaars, Nahargarh Fort at sunset and Albert Hall lit up at night.',
        ],
      },
      {
        heading: 'A day plan that works',
        bullets: [
          'Around 5:30 am: pickup from your Delhi hotel. An early start avoids Gurgaon traffic.',
          'About 9:30 am: arrive at Amber Fort, before the heat and the tour buses. Allow two hours for the palace courtyards, the Sheesh Mahal (mirror palace) and the views.',
          'Photo stop at Jal Mahal, the palace in the middle of Man Sagar Lake.',
          'Around 12:30 pm: lunch in the city.',
          'Early afternoon: City Palace and the Jantar Mantar observatory next door, a UNESCO World Heritage Site.',
          'Hawa Mahal, the honeycomb "Palace of Winds", best photographed from the cafés opposite.',
          'Around 4:30 pm: depart for Delhi, arriving around 9:00 pm.',
        ],
        paragraphs: [],
      },
      {
        heading: 'Amber Fort tips',
        paragraphs: [
          'Amber Fort is the highlight, and it is best visited early. You can walk up the ramp from the lake or be driven up by jeep. We recommend not taking the elephant rides, for animal welfare reasons. A licensed guide brings the palace to life: the Diwan-e-Aam, Ganesh Pol and the mirror work of the Sheesh Mahal are much more interesting with the stories behind them. A composite ticket covers several Jaipur monuments if you plan to return.',
        ],
      },
      {
        heading: 'Is it better to combine Jaipur with Agra?',
        paragraphs: [
          'If you want to see both the Taj Mahal and Jaipur, a short Golden Triangle tour is more efficient than two separate day trips from Delhi. Delhi to Agra, Agra to Jaipur and Jaipur back to Delhi is a loop of about 750 km, and with two or three nights on the road you see far more with less driving per day. Our 4 nights / 5 days Golden Triangle tour is built for exactly this.',
        ],
      },
      {
        heading: 'If you stay overnight: what to add',
        paragraphs: [
          'With a night in Jaipur the trip changes from a sprint to a proper visit. In the late afternoon, drive up to Nahargarh Fort for sunset over the old city, then see Albert Hall Museum lit up after dark. The next morning, walk the old city before the shops open: the pink facades along Tripolia Bazaar and the flower and vegetable markets are at their liveliest early. Jaigarh Fort, on the ridge above Amber, has the huge Jaivana cannon and quieter ramparts. Galta Ji, the "monkey temple" in a gorge east of the city, is a peaceful stop on the way out.',
          'On the drive back to Delhi you can break the journey at the Abhaneri stepwell (Chand Baori), one of the deepest and most photographed stepwells in India, about 90 km from Jaipur on the Agra road, or simply take the expressway straight back.',
        ],
      },
      {
        heading: 'Weather and timing',
        paragraphs: [
          'October to March is the best time for a Jaipur day trip: mornings are cool and afternoons pleasant. In late December and January, early-morning fog on the highways can slow the outbound drive, so build in a little slack. From April to June, start even earlier and plan to be indoors at lunchtime, because Jaipur often passes 40 °C. During the monsoon (July to September) the Aravalli hills around Amber turn green, and a dry morning can be beautiful.',
        ],
      },
      {
        heading: 'Shopping in Jaipur',
        paragraphs: [
          'Jaipur is famous for block-printed textiles, blue pottery, gemstones and silver jewellery. Johari Bazaar and Bapu Bazaar in the old city are lively places to browse. On a day trip there is little time for shopping, and you will not be taken to commission shops unless you ask. Be cautious with high-value gem purchases and never agree to "export" deals offered by strangers.',
        ],
      },
      {
        heading: 'What to bring',
        bullets: [
          'Passport or photo ID.',
          'Comfortable walking shoes: Amber Fort involves ramps and stairs.',
          'Sun protection outside the winter months, and a warm layer for the early start in winter.',
          'Some cash for small purchases and tips.',
        ],
        paragraphs: [],
      },
      {
        heading: 'Booking',
        paragraphs: [
          'A private car for a same day Jaipur tour collects you from your hotel in Delhi, Gurgaon or Noida and brings you back the same night. Tell us your date and number of travellers on WhatsApp and we will confirm the car, the driver and a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'How long is the drive from Delhi to Jaipur?', a: 'About 4 hours each way on the Delhi-Mumbai Expressway, depending on traffic leaving Delhi.' },
      { q: 'Which Jaipur sights are open every day?', a: 'Amber Fort, City Palace, Hawa Mahal and Jantar Mantar are open daily. Timings vary slightly by season, and the City Palace can close for private events.' },
      { q: 'Is a Jaipur day trip too tiring?', a: 'It is long, at around 14 to 16 hours, but the expressway is comfortable and most travellers rest in the car. Staying one night in Jaipur is more relaxed if you have time.' },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    slug: 'india-festivals-2027-calendar',
    title: 'India Festivals 2027: When to Travel for Holi, Diwali and More',
    seoTitle: 'India Festivals 2027: Travel Calendar',
    metaDescription:
      'Plan your India trip around festivals in 2027: Holi, Diwali, Pushkar camel fair, Jaipur Literature Festival, Desert Festival and more, with travel tips.',
    excerpt:
      'The festivals worth planning a trip around in 2027, which months they fall in, and how to travel well when hotels and roads are busy.',
    heroImage: IMG.jaisalmer,
    heroAlt: 'Golden sandstone walls of Jaisalmer fort in the Thar desert',
    keywords: ['India festivals 2027', 'Holi 2027', 'Diwali 2027', 'Pushkar camel fair 2027', 'festival tours India'],
    relatedTourSlugs: ['rajasthan-heritage-tour', 'golden-triangle-tour-5-days', 'jaipur-jodhpur-jaisalmer-tour', 'rishikesh-haridwar-tour'],
    sections: [
      {
        heading: 'Why plan around a festival?',
        paragraphs: [
          'Festivals are when India is at its most colourful: streets are lit, markets are full and families celebrate in public. Seeing Holi in Rajasthan or Diwali lights in Jaipur can be the highlight of a trip. The trade-off is busier roads, fuller hotels and occasional closures, so a little planning goes a long way.',
          'Most Hindu and Muslim festivals follow lunar calendars, so their dates move every year. Where we give a month below, confirm the exact 2027 date closer to the time; we are happy to check for you when you enquire.',
        ],
      },
      {
        heading: 'Fixed-date national holidays',
        bullets: [
          'Republic Day, 26 January: a grand parade in Delhi. Central Delhi has security closures in the days before, and some monuments may close.',
          'Independence Day, 15 August: flag-raising at the Red Fort in Delhi, with closures nearby.',
          'Gandhi Jayanti, 2 October: a national holiday; alcohol is not sold that day.',
          'Christmas, 25 December: celebrated in cities and hotels, and the start of the busiest travel week of the year.',
        ],
        paragraphs: [],
      },
      {
        heading: 'January to March',
        bullets: [
          'Jaipur Literature Festival: usually held in late January in Jaipur; a free-to-attend festival with international writers. Confirm the exact 2027 dates.',
          'Desert Festival, Jaisalmer: usually in late January or February, with camel races, folk music and turban-tying contests near the dunes.',
          'Holi, the festival of colours: falls in March in 2027. Bonfires (Holika Dahan) are lit the night before, and coloured powder fills the streets the next morning. Celebrations in Mathura and Vrindavan, near Agra, start days earlier. Wear old clothes and protect your camera and phone.',
          'International Yoga Festival, Rishikesh: usually in early March on the banks of the Ganges.',
          'Gangaur, Jaipur and Udaipur: usually in March or April, with processions of women in festive dress.',
        ],
        paragraphs: [],
      },
      {
        heading: 'April to September',
        paragraphs: [
          'This is the quieter festival season for foreign visitors because of the heat and the monsoon. Teej, a monsoon festival celebrated with swings and processions in Jaipur, usually falls in July or August. Raksha Bandhan and Janmashtami (Krishna\'s birthday, celebrated strongly in Mathura and Vrindavan) also fall in August or September. Eid celebrations follow the Islamic calendar and fall earlier each year; old Delhi around Jama Masjid is especially atmospheric.',
        ],
      },
      {
        heading: 'October and November: the big season',
        bullets: [
          'Dussehra: usually in October, marking the victory of Rama over Ravana, with giant effigies burned at sunset in Delhi and across the north.',
          'Diwali, the festival of lights: falls in late October or November. Homes, markets and palaces are lit with lamps, and Jaipur\'s bazaars are spectacular. Expect fireworks, crowds and some shop closures on the main day.',
          'Pushkar Camel Fair: usually in late October or November around the Kartik full moon. Livestock trading, camel races, music and pilgrims at the holy lake. Hotels and camps in Pushkar book up months ahead.',
          'Dev Deepawali, Varanasi: around the Kartik full moon, when the ghats are lit with thousands of lamps.',
        ],
        paragraphs: [],
      },
      {
        heading: 'December',
        paragraphs: [
          'Christmas and New Year bring holiday crowds to Rajasthan, Agra and the hill stations, and hotel rates rise accordingly. Desert camps near Jaisalmer and heritage hotels in Udaipur host New Year events. Book at least two to three months ahead if you are travelling over the holidays.',
        ],
      },
      {
        heading: 'Tips for travelling during festivals',
        bullets: [
          'Book hotels and your car early: festival weeks fill up quickly.',
          'Expect slower traffic in cities on the main festival days and plan shorter driving days.',
          'Some monuments or shops close on the main day of Diwali or on national holidays.',
          'At Holi, decide in advance whether you want to join in or watch from a hotel terrace. Ask your hotel about women-friendly celebrations.',
          'Be respectful at religious events: ask before photographing people and follow local dress customs.',
        ],
        paragraphs: [
          'Tell us which festival you want to see and we will plan a route around it, with your own car and driver for the whole trip.',
        ],
      },
    ],
    faqs: [
      { q: 'When is Holi in 2027?', a: 'Holi falls in March in 2027. It is set by the Hindu lunar calendar, so confirm the exact date when you plan; we can check it for you.' },
      { q: 'When is Diwali in 2027?', a: 'Diwali falls in late October or early November, depending on the lunar calendar. Confirm the exact 2027 date before booking festival-specific plans.' },
      { q: 'Is it safe for tourists to celebrate Holi?', a: 'Yes, with sensible precautions. Celebrate with your hotel or a known group, wear old clothes, protect your eyes and electronics, and avoid very crowded street celebrations.' },
      { q: 'When is the Pushkar Camel Fair?', a: 'It is usually held in late October or November around the Kartik full moon. Book accommodation early, as Pushkar fills up.' },
    ],
  },
];

function countWords(p: RawPost) {
  const text = [
    p.title,
    ...p.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...p.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export const BLOG_POSTS: BlogPost[] = [...RAW_POSTS, ...POSTS_B, ...POSTS_C].map((p) => ({
  ...p,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  readMinutes: Math.max(3, Math.round(countWords(p) / 220)),
}));

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/**
 * Other posts to link from a post. Ranked by how many related tours they share,
 * then filled in a rotating order that starts after the current post, so every
 * post gets inbound links from several others instead of the first few posts
 * getting all of them.
 */
export function getRelatedPosts(slug: string, limit = 4): BlogPost[] {
  const idx = BLOG_POSTS.findIndex((p) => p.slug === slug);
  if (idx === -1) return [];
  const tours = new Set(BLOG_POSTS[idx].relatedTourSlugs);
  const rotated = [...BLOG_POSTS.slice(idx + 1), ...BLOG_POSTS.slice(0, idx)];
  const shared = (p: BlogPost) => p.relatedTourSlugs.filter((s) => tours.has(s)).length;
  // Take the best topical matches for half the slots, then rotate for the rest.
  const topical = rotated
    .filter((p) => shared(p) > 0)
    .sort((a, b) => shared(b) - shared(a))
    .slice(0, Math.ceil(limit / 2));
  const fill = rotated.filter((p) => !topical.includes(p));
  return [...topical, ...fill].slice(0, limit);
}

/**
 * Guides to link from a tour page: posts that list this tour first, then posts
 * that list another tour in the same category.
 */
export function getGuidesForTour(tourSlug: string, sameCategoryTourSlugs: string[], limit = 3): BlogPost[] {
  const direct = BLOG_POSTS.filter((p) => p.relatedTourSlugs.includes(tourSlug)).sort(
    (a, b) => a.relatedTourSlugs.indexOf(tourSlug) - b.relatedTourSlugs.indexOf(tourSlug)
  );
  const category = new Set(sameCategoryTourSlugs);
  const nearby = BLOG_POSTS.filter((p) => !direct.includes(p) && p.relatedTourSlugs.some((s) => category.has(s)));
  return [...direct, ...nearby].slice(0, limit);
}
