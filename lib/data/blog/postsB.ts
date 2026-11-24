import type { RawPost } from '../blogData';

// Blog batch B: 2027 trip-planning guides for international travellers.
// Owner policy: no prices or currency amounts anywhere; readers are asked for a quote.

const IMG = {
  taj: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
  tajDetail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
  amber: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  udaipur: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1600&q=80',
  jaisalmer: 'https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?auto=format&fit=crop&w=1600&q=80',
  jaisalmerFort: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1600&q=80',
  tiger: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80',
  rishikesh: 'https://images.unsplash.com/photo-1511754863001-18d44abd0a93?auto=format&fit=crop&w=1600&q=80',
};

export const POSTS_B: RawPost[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'north-india-itinerary-10-days',
    title: 'North India Itinerary for 10 Days: Three Routes That Work in 2027',
    seoTitle: 'North India Itinerary 10 Days (2027)',
    metaDescription:
      'A realistic 10-day India itinerary for first-time visitors: Delhi, Agra and Jaipur plus Udaipur, Ranthambore or Varanasi, with drive times and day plans.',
    excerpt:
      'Ten days is enough for the Golden Triangle plus one more highlight. Here are three tested 10-day North India routes, with drive times and where to sleep.',
    heroImage: IMG.amber,
    heroAlt: 'Amber Fort above Maota Lake near Jaipur',
    keywords: ['India itinerary 10 days', 'North India itinerary 10 days', 'India trip 10 days', '10 day India tour'],
    relatedTourSlugs: ['golden-triangle-ranthambore', 'delhi-agra-jaipur-udaipur-tour', 'golden-triangle-varanasi-tour', 'golden-triangle-tour'],
    sections: [
      {
        heading: 'Is 10 days enough for India?',
        paragraphs: [
          'Ten days will not show you all of India, but it is enough for a rich first trip to the north if you choose one region and do not try to fly across the country every other day. The classic base is the Golden Triangle: Delhi, Agra (the Taj Mahal) and Jaipur. That loop needs five or six days at a comfortable pace, which leaves four days for a fourth destination.',
          'The three routes below all start and end in Delhi, which has the best international flight connections. They assume a private car with a driver for the road sections, because the distances are manageable (Delhi to Agra is about 230 km and 3.5 hours on the Yamuna Expressway, Agra to Jaipur about 240 km) and a car lets you stop at places such as Fatehpur Sikri and the Abhaneri stepwell that are awkward to reach by train.',
        ],
      },
      {
        heading: 'Route 1: Golden Triangle and Udaipur (culture and palaces)',
        paragraphs: [
          'This is the best choice if you want the romantic Rajasthan of lake palaces and old havelis. Jaipur to Udaipur is a long drive (about 390 km), so most travellers either break it in Pushkar or fly from Jaipur and keep the car for the Golden Triangle section.',
        ],
        bullets: [
          'Day 1: Arrive in Delhi, rest, evening walk at India Gate.',
          'Day 2: Old and New Delhi: Jama Masjid, Chandni Chowk by cycle rickshaw, Humayun’s Tomb, Qutub Minar.',
          'Day 3: Drive to Agra, Agra Fort in the afternoon, Mehtab Bagh at sunset across the river from the Taj.',
          'Day 4: Taj Mahal at sunrise, then Fatehpur Sikri on the way to Jaipur.',
          'Day 5: Jaipur: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar.',
          'Day 6: Drive to Pushkar (about 2.5 hours), lakeside ghats and the Brahma temple.',
          'Day 7: Drive to Udaipur (about 5 hours).',
          'Day 8: Udaipur: City Palace, Jagdish Temple, sunset boat on Lake Pichola.',
          'Day 9: Fly Udaipur to Delhi.',
          'Day 10: Departure.',
        ],
      },
      {
        heading: 'Route 2: Golden Triangle and Ranthambore (tigers and forts)',
        paragraphs: [
          'Ranthambore National Park sits between Agra and Jaipur, so it fits neatly into the loop without backtracking. Two safaris give you a reasonable chance of seeing a tiger, although sightings are never guaranteed. Note that the core zones close for the monsoon, roughly July to September, so this route is for October to June.',
        ],
        bullets: [
          'Days 1–2: Delhi sightseeing.',
          'Day 3: Drive to Agra, Agra Fort and Mehtab Bagh.',
          'Day 4: Sunrise Taj Mahal, then drive to Ranthambore (about 5.5 hours).',
          'Day 5: Morning and afternoon jeep safaris.',
          'Day 6: Optional third safari or Ranthambore Fort, drive to Jaipur (about 3.5 hours).',
          'Days 7–8: Jaipur sightseeing, plus a cooking class or block-printing workshop in Sanganer.',
          'Day 9: Drive back to Delhi (about 4 hours on the Delhi–Mumbai Expressway).',
          'Day 10: Departure.',
        ],
      },
      {
        heading: 'Route 3: Golden Triangle and Varanasi (spiritual India)',
        paragraphs: [
          'Varanasi on the Ganges is one of the oldest living cities in the world and a complete contrast to Rajasthan’s palaces. It is too far to drive comfortably, so you fly from Delhi (around 1.5 hours) or take an overnight train from Agra. A local guide in Varanasi makes a big difference, especially in the old lanes.',
        ],
        bullets: [
          'Days 1–2: Delhi.',
          'Day 3: Fly to Varanasi, evening Ganga Aarti at Dashashwamedh Ghat.',
          'Day 4: Sunrise boat ride along the ghats, old city walk, Sarnath in the afternoon.',
          'Day 5: Fly back to Delhi and drive to Agra, or take the train to Agra.',
          'Day 6: Taj Mahal at sunrise, Agra Fort, drive to Jaipur via Fatehpur Sikri.',
          'Days 7–8: Jaipur.',
          'Day 9: Drive to Delhi.',
          'Day 10: Departure.',
        ],
      },
      {
        heading: 'Planning tips for a 10-day trip',
        paragraphs: [
          'Check the day of the week before you fix your Agra day: the Taj Mahal is closed every Friday. If your Agra day lands on a Friday, swap it with the day before or after.',
          'Build in a slow first day. Most long-haul flights from Europe, North America and Australia land in Delhi late at night or early in the morning, and jet lag hits hard on day two.',
          'Book hotels for October to March early. This is peak season, and the best heritage hotels in Jaipur and Udaipur fill months ahead, especially around Diwali, Christmas and New Year.',
          'Keep road days to one long drive at a time. Indian roads are better than they used to be, but a 5-hour drive will still take most of the day once you add lunch and stops.',
        ],
      },
      {
        heading: 'Getting around: car, train or flights?',
        paragraphs: [
          'A private car and driver is the most comfortable way to do the Golden Triangle and Rajasthan sections. You keep the same vehicle and driver throughout, your luggage stays in the car, and you can stop wherever you like. Trains are excellent between some city pairs, such as Delhi to Agra, but you still need taxis at each end. For long jumps such as Udaipur to Delhi or Delhi to Varanasi, a domestic flight saves a full day.',
          'Satnam Voyages can combine all three: a private car for the road sections, and flight or train bookings where they make more sense. Message us your dates and we will suggest the best split and send a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best 10-day itinerary for India for first-time visitors?', a: 'For most first-time visitors, the Golden Triangle (Delhi, Agra, Jaipur) plus one extra stop works best. Add Udaipur for palaces and lakes, Ranthambore for wildlife, or Varanasi for spiritual India.' },
      { q: 'Can I see the Taj Mahal and Rajasthan in 10 days?', a: 'Yes. A 10-day route can cover Delhi, Agra, Jaipur and one or two more Rajasthan cities such as Pushkar and Udaipur, with one domestic flight back to Delhi.' },
      { q: 'What is the best month for a 10-day North India trip?', a: 'October to March is the most comfortable time, with warm days and cool nights. February and March are pleasant and slightly quieter than December.' },
      { q: 'Do I need a guide as well as a driver?', a: 'Drivers handle transport and logistics; licensed local guides explain the monuments. Many travellers book guides for the Taj Mahal, Amber Fort and Old Delhi only.' },
      { q: 'How much does a 10-day India tour cost?', a: 'It depends on the season, hotel category, vehicle and group size. We do not publish fixed prices; send us your dates and we will reply with a written quote.' },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'india-itinerary-2-weeks',
    title: 'India Itinerary for 2 Weeks: Golden Triangle and Rajasthan in 14 Days',
    seoTitle: 'India Itinerary 2 Weeks: 14-Day Route',
    metaDescription:
      'A 2-week India itinerary for 2027: the Golden Triangle plus Rajasthan’s Pushkar, Udaipur, Jodhpur and Jaisalmer, with daily plans and real drive times.',
    excerpt:
      'Two weeks lets you go beyond the Taj Mahal into the deserts and lake cities of Rajasthan. Here is a 14-day route with drive times, plus two alternatives.',
    heroImage: IMG.udaipur,
    heroAlt: 'City Palace and Lake Pichola in Udaipur at sunset',
    keywords: ['India itinerary 2 weeks', 'Golden Triangle itinerary 2 weeks', 'North India itinerary 2 weeks', '14 day India tour'],
    relatedTourSlugs: ['rajasthan-heritage-tour', 'delhi-agra-jaipur-udaipur-tour', 'rajasthan-tour-by-car-and-driver', 'jaipur-jodhpur-jaisalmer-tour'],
    sections: [
      {
        heading: 'Why two weeks is the sweet spot',
        paragraphs: [
          'With 14 days in India you can do the Golden Triangle properly and then continue into Rajasthan, the state of forts, palaces and desert towns. You will not be rushing from hotel to hotel, and you will have time for the moments that make a trip memorable: a slow breakfast overlooking a lake, an evening in a desert camp, an afternoon in a bazaar with no plan at all.',
          'The main route below is a loop by road with one domestic flight at the end. Distances are realistic estimates on current roads, and times do not include lunch or sightseeing stops.',
        ],
      },
      {
        heading: 'The 14-day Golden Triangle and Rajasthan route',
        paragraphs: [],
        bullets: [
          'Day 1: Arrive in Delhi. Rest and an easy evening.',
          'Day 2: Delhi: Old Delhi’s Jama Masjid and Chandni Chowk in the morning; Humayun’s Tomb, India Gate and Qutub Minar in the afternoon.',
          'Day 3: Drive to Agra (about 230 km, 3.5 hours). Agra Fort, Itmad-ud-Daulah (the “Baby Taj”) and Mehtab Bagh at sunset.',
          'Day 4: Taj Mahal at sunrise. Drive to Jaipur via Fatehpur Sikri (about 240 km plus stops).',
          'Day 5: Jaipur: Amber Fort in the morning, City Palace, Jantar Mantar and Hawa Mahal.',
          'Day 6: Jaipur at a slower pace: Nahargarh Fort, markets, or a cooking class.',
          'Day 7: Drive to Pushkar (about 145 km, 2.5 hours). Sacred lake and ghats.',
          'Day 8: Drive to Udaipur (about 280 km, 5 hours).',
          'Day 9: Udaipur: City Palace, Jagdish Temple, Bagore ki Haveli dance show, boat on Lake Pichola.',
          'Day 10: Drive to Jodhpur via the Ranakpur Jain temple (about 260 km plus the temple stop).',
          'Day 11: Jodhpur: Mehrangarh Fort, Jaswant Thada, the blue old city. Drive to Jaisalmer in the afternoon or next morning (about 285 km, 5 hours).',
          'Day 12: Jaisalmer: the living fort, Patwon ki Haveli, Gadisar Lake. Evening on the dunes and a night in a desert camp.',
          'Day 13: Fly Jaisalmer or Jodhpur to Delhi (check the 2027 schedule), or return by road over two days if you add a 15th day.',
          'Day 14: Departure from Delhi.',
        ],
      },
      {
        heading: 'Alternative 1: Golden Triangle, Varanasi and Rishikesh',
        paragraphs: [
          'If temples, rivers and yoga appeal more than forts, swap the western Rajasthan leg for the Ganges. After the Golden Triangle (days 1–6), fly from Delhi to Varanasi for two nights of ghats and evening aarti, return to Delhi, then drive to Haridwar and Rishikesh (about 240 km, 4.5 to 5 hours) for three nights of yoga, ashrams and the Himalayan foothills. Finish with a drive back to Delhi.',
        ],
      },
      {
        heading: 'Alternative 2: Golden Triangle, Ranthambore and Udaipur',
        paragraphs: [
          'Wildlife lovers can add two nights in Ranthambore between Agra and Jaipur (Agra to Ranthambore is about 280 km, Ranthambore to Jaipur about 160 km) and then continue to Udaipur. This keeps the trip at 14 days with fewer long drives than the full western loop. Remember that Ranthambore’s core zones close in the monsoon, roughly July to September.',
        ],
      },
      {
        heading: 'Pacing and practical tips',
        paragraphs: [
          'Plan at least two nights in each major city. One-night stops look efficient on paper but mean packing every morning and seeing each place only in a hurry.',
          'Watch the Friday rule: the Taj Mahal is closed to visitors every Friday, so plan your Agra sunrise for another day.',
          'Pack layers. Desert nights in December and January can drop close to freezing, while afternoons in Delhi are warm.',
          'Allow for festivals. Diwali (usually October or November) and Holi (usually March) are wonderful to experience but push up demand for hotels and cars. Book early if your dates overlap.',
          'Keep one buffer day. Long-haul delays, a stomach bug or simply loving a place more than expected are all common, and a spare day protects the rest of the plan.',
        ],
      },
      {
        heading: 'Where to stay on a 2-week route',
        paragraphs: [
          'Rajasthan is famous for heritage hotels: former palaces, forts and merchant havelis converted into places to stay. Staying in one or two of them is part of the experience, but they vary a lot in comfort, so it is worth mixing them with good modern hotels.',
        ],
        bullets: [
          'Delhi: stay central (Connaught Place, Lutyens’ Delhi or near Aerocity for late arrivals) to cut traffic time.',
          'Agra: choose a hotel within a short drive of the Taj Mahal’s East or West Gate for an easy sunrise visit.',
          'Jaipur: a haveli in or near the old walled city, or a palace hotel on the edge of town.',
          'Pushkar: small lakeside guesthouses and resorts outside the town; the town itself is vegetarian and alcohol-free.',
          'Udaipur: a lake-view room is worth it, either on Lake Pichola or Fateh Sagar.',
          'Jodhpur: a haveli in the blue old city with a rooftop view of Mehrangarh Fort.',
          'Jaisalmer: a hotel facing the fort, plus one night in a desert camp at Sam or Khuri.',
        ],
      },
      {
        heading: 'What to budget time for',
        paragraphs: [
          'Most first-time visitors underestimate how long sightseeing takes in India. Amber Fort alone is a half day, Mehrangarh Fort two to three hours, and the Taj Mahal two to three hours with security queues. Old city bazaars in Jaipur, Jodhpur and Delhi are best explored slowly. Plan one major monument in the morning and one lighter activity in the afternoon, and leave evenings free for rooftop dinners and sunset viewpoints.',
        ],
      },
      {
        heading: 'One car and driver for the whole trip',
        paragraphs: [
          'For a 2-week road trip, a private car with the same driver from start to finish is both comfortable and efficient. Your driver knows the highways, handles parking and tolls, and becomes a useful local contact. Satnam Voyages runs these trips with sedans for couples, Toyota Innova Crysta SUVs for families and Tempo Travellers for groups. Send us your dates and interests and we will reply with an itinerary and a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best 2-week itinerary for India?', a: 'For a first trip, combine the Golden Triangle (Delhi, Agra, Jaipur) with Rajasthan: Pushkar, Udaipur, Jodhpur and Jaisalmer. Spiritual travellers can swap Rajasthan for Varanasi and Rishikesh.' },
      { q: 'Is 2 weeks enough for the Golden Triangle and Rajasthan?', a: 'Yes. Fourteen days covers the Golden Triangle at a relaxed pace plus four or five Rajasthan cities, with one domestic flight back to Delhi.' },
      { q: 'Should I travel by car or train for 2 weeks in India?', a: 'A private car is easiest for Rajasthan, where many sights are between train stations. Combine it with a domestic flight for the longest jump back to Delhi.' },
      { q: 'When should I book a 2-week India trip for 2027?', a: 'For October 2027 to March 2028, book hotels and your car three to six months ahead, and earlier for Diwali, Christmas and New Year.' },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'ranthambore-safari-from-delhi-jaipur',
    title: 'Ranthambore Safari from Delhi and Jaipur: Zones, Bookings and Travel Times',
    seoTitle: 'Ranthambore Safari from Delhi & Jaipur',
    metaDescription:
      'How to plan a Ranthambore tiger safari from Delhi or Jaipur in 2027: travel times, safari zones, jeep vs canter, official booking and the best months.',
    excerpt:
      'Everything international visitors need for a Ranthambore tiger safari: how to get there from Delhi or Jaipur, zones, jeep or canter, permits and seasons.',
    heroImage: IMG.tiger,
    heroAlt: 'A Bengal tiger in dry forest',
    keywords: ['Ranthambore safari from Delhi', 'Ranthambore safari from Jaipur', 'Ranthambore tiger safari', 'Ranthambore national park'],
    relatedTourSlugs: ['golden-triangle-ranthambore', 'rajasthan-tour-by-car-and-driver', 'luxury-rajasthan-tour', 'jaipur-2-day-tour-from-delhi'],
    sections: [
      {
        heading: 'Why Ranthambore?',
        paragraphs: [
          'Ranthambore National Park, near the town of Sawai Madhopur in eastern Rajasthan, is one of the best-known places in India to see a wild Bengal tiger. The landscape is dry deciduous forest with lakes, cliffs and the ruins of a 10th-century fort, so even a safari without a tiger is beautiful. You may also see leopards (less often), sloth bears, sambar and spotted deer, crocodiles and many birds.',
          'Its location makes it easy to add to a Golden Triangle trip: it lies between Agra and Jaipur and is reachable from Delhi in a long day.',
        ],
      },
      {
        heading: 'Getting to Ranthambore from Delhi',
        paragraphs: [
          'By road: Delhi to Ranthambore is roughly 380 to 400 km. On the Delhi–Mumbai Expressway the drive takes about 5.5 to 6.5 hours, depending on where in Delhi you start and how many stops you make. A private car lets you leave early and arrive in time for an afternoon safari the next day, or to settle in and rest.',
          'By train: Sawai Madhopur Junction is on the main Delhi–Mumbai railway line, and several daily trains from New Delhi and Hazrat Nizamuddin stations take about 5 to 6 hours. Your hotel or driver can collect you at the station. Book train seats early in peak season.',
        ],
      },
      {
        heading: 'Getting to Ranthambore from Jaipur and Agra',
        paragraphs: [
          'From Jaipur, Ranthambore is about 160 km, around 3.5 hours by car, which makes a two-night Ranthambore stop easy at the start or end of a Jaipur visit. There are also trains between Jaipur and Sawai Madhopur.',
          'From Agra, the drive is about 280 km and 5.5 hours. Many Golden Triangle travellers go Delhi, Agra, Ranthambore and Jaipur, then return to Delhi, which avoids any backtracking.',
        ],
      },
      {
        heading: 'Safari zones, jeeps and canters',
        paragraphs: [
          'The park is divided into numbered safari zones. Zones 1 to 5 or 6 are generally considered the core areas, and higher-numbered zones lie in the buffer forest. Tigers move between zones and sightings depend on luck and season, so no zone is guaranteed. Vehicles must stay on their allotted route.',
          'There are two kinds of safari vehicle:',
        ],
        bullets: [
          'Jeep (Gypsy): six seats, quieter, more flexible and better for photography. Most international visitors prefer it.',
          'Canter: an open-top truck for about 20 people. Easier to get at short notice, but noisier and you share it with strangers.',
          'Safaris run twice a day, morning and afternoon, for about three hours each. Exact timings shift through the year with sunrise and sunset.',
          'Two or three safaris give you a much better chance of a sighting than one.',
        ],
      },
      {
        heading: 'How to book Ranthambore safaris',
        paragraphs: [
          'Safari permits are issued by the Rajasthan Forest Department through its official online booking system. Seats per zone are limited and fill up quickly in peak months, so book as soon as your dates are fixed. You need the passport details of every traveller at the time of booking, and the same original passports must be carried on the safari for checking.',
          'Be wary of websites that look official but are resellers. If we arrange your trip, we will help you book through the proper channel and plan your driving so you arrive on time for the gate.',
        ],
      },
      {
        heading: 'Best time to visit Ranthambore in 2027',
        paragraphs: [
          'The park is usually open from October to June. The core zones close for the monsoon from roughly July to September, although some buffer zones may stay open. Confirm closure dates with the forest department for 2027.',
        ],
        bullets: [
          'October to February: pleasant weather, green forest, cold early mornings in December and January. Bring a warm jacket and gloves for morning safaris.',
          'March to June: hot, but thinner vegetation and animals gathering at waterholes can make tigers easier to spot.',
          'July to September: core zones closed for the monsoon.',
        ],
      },
      {
        heading: 'Sample plans: how many nights do you need?',
        paragraphs: [
          'One night is the minimum and allows an afternoon safari on arrival day plus a morning safari before you leave. Two nights is better: three or four safaris, more chances to see a tiger and time to visit Ranthambore Fort, a UNESCO World Heritage Site inside the park with views over the forest. Keen photographers often stay three nights.',
        ],
        bullets: [
          'From Delhi (2 nights): drive in on day 1, afternoon safari on day 2 and morning plus afternoon on day 3 if timings allow, drive back or on to Jaipur.',
          'From Jaipur (1–2 nights): morning departure, afternoon safari, morning safari next day, return to Jaipur or continue to Agra.',
          'Within a Golden Triangle tour: Delhi, Agra, Ranthambore (2 nights), Jaipur, Delhi.',
        ],
      },
      {
        heading: 'Where to stay near the park',
        paragraphs: [
          'Hotels are spread along Ranthambore Road between Sawai Madhopur town and the park gates, from simple guesthouses to luxury jungle lodges. Staying closer to the gates means a shorter, colder ride before dawn. Most lodges arrange early breakfast boxes for morning safaris and can coordinate pickups with your safari vehicle.',
        ],
      },
      {
        heading: 'What to bring and responsible safari tips',
        paragraphs: [
          'Wear neutral colours, bring a hat, sunscreen, a scarf against dust and binoculars. Keep your voice low, never ask the driver to leave the track or crowd an animal, and do not feed wildlife. A long lens (200 mm or more) helps for photography.',
          'Ready to add Ranthambore to your trip? Satnam Voyages can plan the drive from Delhi, Agra or Jaipur, help you choose a hotel near the park, and send a written quote for the whole itinerary.',
        ],
      },
    ],
    faqs: [
      { q: 'How far is Ranthambore from Delhi?', a: 'Roughly 380 to 400 km by road, about 5.5 to 6.5 hours via the Delhi–Mumbai Expressway, or about 5 to 6 hours by train to Sawai Madhopur.' },
      { q: 'Can I do a Ranthambore safari as a day trip from Jaipur?', a: 'It is possible because Jaipur is about 3.5 hours away, but it makes a very long day. We recommend at least one night near the park so you can do an afternoon and a morning safari.' },
      { q: 'Is a tiger sighting guaranteed in Ranthambore?', a: 'No. Ranthambore has a good reputation for sightings, but tigers are wild animals. Taking two or three safaris improves your chances.' },
      { q: 'Jeep or canter: which is better?', a: 'A jeep (Gypsy) seats six and is quieter and better for photos. A canter seats about 20 and is easier to book at short notice.' },
      { q: 'When is Ranthambore closed?', a: 'The core zones usually close from about July to September for the monsoon. Check the official forest department notices for exact 2027 dates.' },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'jaisalmer-desert-festival-2027',
    title: 'Jaisalmer Desert Festival 2027: What It Is, When It Happens and How to Go',
    seoTitle: 'Jaisalmer Desert Festival 2027 Guide',
    metaDescription:
      'Plan your trip to the Jaisalmer Desert Festival 2027: when it is usually held, main events, where to stay, how to get there from Delhi and Jodhpur.',
    excerpt:
      'Camel races, turban-tying, folk music under the stars: how to plan a visit to Jaisalmer’s Desert Festival in 2027, from dates to hotels and transport.',
    heroImage: IMG.jaisalmerFort,
    heroAlt: 'The golden sandstone walls of Jaisalmer Fort',
    keywords: ['Jaisalmer Desert Festival 2027', 'Jaisalmer desert festival', 'Rajasthan festivals 2027', 'Jaisalmer in February'],
    relatedTourSlugs: ['jaipur-jodhpur-jaisalmer-tour', 'rajasthan-heritage-tour', 'rajasthan-tour-by-car-and-driver', 'luxury-rajasthan-tour'],
    sections: [
      {
        heading: 'What is the Jaisalmer Desert Festival?',
        paragraphs: [
          'The Desert Festival (often called Maru Mahotsav) is a three-day celebration of the culture of Rajasthan’s Thar Desert, held in and around Jaisalmer. It was started by Rajasthan Tourism to showcase the folk traditions of the region, and today it draws performers, camel herders and visitors from across India and abroad.',
          'Expect colour and noise: Rajasthani folk musicians and dancers, puppet shows, decorated camels, turban-tying and moustache competitions, and a light-hearted “Mr Desert” contest. The final evening is traditionally held at the Sam sand dunes, with music and dance against the sunset.',
        ],
      },
      {
        heading: 'When is the Desert Festival in 2027?',
        paragraphs: [
          'The festival follows the Hindu lunar calendar and usually takes place in February, ending on or around the full moon of the month of Magh (Magh Purnima). Because the dates move each year, always confirm the exact 2027 dates with Rajasthan Tourism before booking flights or hotels. The official schedule is normally announced a few months in advance.',
          'February is also an excellent month for the desert in general: days are warm and sunny, and nights are cool rather than freezing.',
        ],
      },
      {
        heading: 'Main events and where they happen',
        paragraphs: [],
        bullets: [
          'Opening procession: a parade of camels, musicians and performers through the town, usually starting near the fort or Gadisar Lake.',
          'Competitions: turban-tying, moustache contests, camel decoration and camel dances, often at the town stadium.',
          'Camel races and camel polo: held on open ground near town or at the dunes.',
          'Folk performances: Kalbelia dancers, Manganiyar and Langa musicians, fire dancers and puppeteers.',
          'Final evening at Sam dunes: music, dance and the famous desert sunset, about 40 km west of the city.',
        ],
      },
      {
        heading: 'How to get to Jaisalmer',
        paragraphs: [
          'Jaisalmer is in far western Rajasthan, close to the border with Pakistan. The most common way to reach it on a tour is by road from Jodhpur, about 285 km and roughly 5 hours. Jodhpur itself is about 340 km and 5.5 hours from Jaipur.',
          'Jaisalmer also has railway connections, including overnight trains from Delhi and Jaipur, and a small airport with seasonal domestic flights. Flight schedules change, so check what is operating in February 2027. Many travellers drive in and fly or take the train out to save a long road day.',
        ],
      },
      {
        heading: 'Where to stay during the festival',
        paragraphs: [
          'Hotels inside and around Jaisalmer Fort, and the desert camps at Sam and Khuri, fill up quickly in festival week. Book three to six months ahead if you can. Staying in the city puts you close to the parade and stadium events; a desert camp gives you starry nights and easy access to the final evening at the dunes. A good plan is two nights in town and one in a camp.',
        ],
      },
      {
        heading: 'Tips for enjoying the festival',
        paragraphs: [],
        bullets: [
          'Arrive early for the procession and stadium events to get a good viewing spot.',
          'Carry sunglasses, sunscreen, a hat and a scarf for the sun and the dust.',
          'Bring a warm layer: desert evenings cool down fast even in February.',
          'Ask before photographing people, and be ready for performers to request a tip for posed photos.',
          'Treat camels kindly; avoid rides on animals that look injured or overloaded.',
          'Keep a day free after the festival to explore the fort, Patwon ki Haveli and Bada Bagh without the crowds.',
        ],
      },
      {
        heading: 'What else to see in Jaisalmer',
        paragraphs: [
          'Festival or not, Jaisalmer rewards two or three days. Its sights are compact and best seen early in the morning or late in the afternoon, when the sandstone glows gold.',
        ],
        bullets: [
          'Jaisalmer Fort (Sonar Qila): one of the few living forts in the world, with homes, shops, Jain temples and a palace inside its walls.',
          'Patwon ki Haveli: a cluster of five merchant mansions with extraordinarily fine stone carving.',
          'Gadisar Lake: a historic reservoir with shrines and pavilions, beautiful at sunrise.',
          'Bada Bagh: royal cenotaphs on a hill just outside the city, a classic sunset spot.',
          'Kuldhara: an abandoned village west of the city, often visited on the way to the dunes.',
          'Sam or Khuri dunes: sunset camel rides and desert camps.',
        ],
      },
      {
        heading: 'Is it worth going outside festival time?',
        paragraphs: [
          'Absolutely. The festival is a spectacle, but it also means crowds, higher demand for hotels and busy roads to the dunes. If your dates do not match, Jaisalmer from October to March is still magical, and you will have the fort lanes and the dunes far more to yourself. Folk music and dance are performed at most desert camps throughout the season.',
        ],
      },
      {
        heading: 'Combining the festival with a Rajasthan tour',
        paragraphs: [
          'Jaisalmer fits naturally into a western Rajasthan loop: Delhi, Jaipur, Jodhpur, Jaisalmer, then back via Jodhpur or onward to Udaipur. Because the festival dates move with the moon, we build the itinerary backwards from the confirmed 2027 dates. Send us your travel window and we will reply with a route and a written quote, including camp or heritage hotel options.',
        ],
      },
    ],
    faqs: [
      { q: 'When is the Jaisalmer Desert Festival 2027?', a: 'It is usually held over three days in February, ending around the Magh full moon. Confirm the exact 2027 dates with Rajasthan Tourism before you book.' },
      { q: 'Where is the Desert Festival held?', a: 'Events take place in Jaisalmer town, including the stadium and the area around Gadisar Lake, with the final evening traditionally at the Sam sand dunes.' },
      { q: 'How do I get to Jaisalmer from Delhi?', a: 'Most tours drive via Jaipur and Jodhpur. There are also overnight trains and, in season, domestic flights. Jodhpur to Jaisalmer is about 285 km by road.' },
      { q: 'Do I need to book hotels early for the Desert Festival?', a: 'Yes. Hotels and desert camps fill quickly in festival week, so book three to six months ahead where possible.' },
      { q: 'How many days should I spend in Jaisalmer for the festival?', a: 'Plan at least three nights: two in town to see the parade, competitions and the fort, and one in a desert camp for the closing evening at the dunes. A fourth night lets you explore Jaisalmer after the crowds leave.' },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'jaisalmer-desert-camp-safari-guide',
    title: 'Jaisalmer Desert Camp and Safari Guide: Sam vs Khuri and What to Expect',
    seoTitle: 'Jaisalmer Desert Camp & Safari Guide',
    metaDescription:
      'Choosing a Jaisalmer desert camp and safari: Sam vs Khuri dunes, camel and jeep safaris, what a night in the Thar Desert is like, and how to travel responsibly.',
    excerpt:
      'A night under the Thar Desert stars is a Rajasthan highlight. How to choose between Sam and Khuri, camel or jeep, and a camp that suits you.',
    heroImage: IMG.jaisalmer,
    heroAlt: 'Sand dunes in the Thar Desert near Jaisalmer',
    keywords: ['Jaisalmer desert camp', 'Jaisalmer desert safari', 'Sam sand dunes', 'Khuri sand dunes', 'Thar desert camp'],
    relatedTourSlugs: ['jaipur-jodhpur-jaisalmer-tour', 'rajasthan-heritage-tour', 'rajasthan-tour-by-car-and-driver', 'luxury-rajasthan-tour'],
    sections: [
      {
        heading: 'Why spend a night in the desert?',
        paragraphs: [
          'Jaisalmer, the “Golden City”, rises out of the Thar Desert in far western Rajasthan. Its sandstone fort is still lived in, and its carved havelis are some of the finest in India. But for many travellers the highlight is outside the city: watching the sun set over the dunes, eating a Rajasthani dinner by the fire and sleeping under a sky full of stars.',
        ],
      },
      {
        heading: 'Sam vs Khuri: which dunes to choose',
        paragraphs: [
          'There are two main dune areas used by camps near Jaisalmer, both roughly 40 to 50 km from the city and about an hour’s drive.',
        ],
        bullets: [
          'Sam: the best-known and most developed dunes, west of Jaisalmer. High, photogenic dunes, many camps in all categories, lively evening cultural shows. It can be busy, especially around Christmas, New Year and the Desert Festival.',
          'Khuri: south-west of Jaisalmer, quieter and more village-like, with lower dunes and fewer camps. Better if you want peace and a simpler, more rural experience.',
          'Remote camps beyond the main dune fields: some operators run quieter camps away from the crowds. Ask exactly where the camp is before booking.',
        ],
      },
      {
        heading: 'Types of desert camp',
        paragraphs: [
          'Camps range widely in comfort. At the simple end are basic tents with shared facilities. Most international visitors choose “Swiss tents”: large canvas tents with a proper bed, electricity and an attached bathroom. Luxury camps add bigger tents, better bedding, private sit-outs and more refined dining. There are also non-camp options, such as sleeping in the open on the dunes with blankets on a camel safari, which some travellers love and others find too rustic.',
          'A typical evening includes a short camel or jeep ride on the dunes at sunset, folk music and dance by the campfire, and a Rajasthani vegetarian dinner. Breakfast is served the next morning before you return to Jaisalmer.',
        ],
      },
      {
        heading: 'Camel safari or jeep safari?',
        paragraphs: [],
        bullets: [
          'Camel ride: slow and atmospheric, usually 30 minutes to an hour at sunset. Longer overnight camel treks are available for adventurous travellers.',
          'Jeep (dune bashing): fast, bumpy and exhilarating. Not suitable for people with back problems or young children.',
          'Camel cart: a gentler option for older travellers or families.',
          'Walking: the dunes are best of all at dawn on foot, when they are empty and the sand is cool.',
        ],
      },
      {
        heading: 'Travelling responsibly with camels',
        paragraphs: [
          'Camels are working animals, and their welfare depends on their owners. Choose operators whose camels look healthy, with no open sores or visible injuries. A camel should carry no more than two adults, and rides should not be forced in the hottest part of the day. If something looks wrong, it is fine to decline the ride. Tipping the camel handler directly is appreciated.',
          'Please also help keep the desert clean: take your rubbish back with you and avoid single-use plastic bottles where you can.',
        ],
      },
      {
        heading: 'Best time and what to pack',
        paragraphs: [
          'October to March is the season for desert camps. Days are sunny and warm, but nights in December and January can drop close to freezing, so bring a fleece or down jacket, warm socks and a hat. From April the desert becomes very hot, and many camps close for the summer.',
        ],
        bullets: [
          'Warm layers for the evening and early morning.',
          'Sunglasses, sunscreen and a scarf for sun and sand.',
          'A torch or headlamp.',
          'A small bag for the night, so your main luggage can stay in the car.',
        ],
      },
      {
        heading: 'A typical desert camp evening, hour by hour',
        paragraphs: [
          'Most camps follow a similar rhythm. You leave Jaisalmer in the mid-afternoon, often stopping at the abandoned village of Kuldhara on the way. You arrive at the camp around an hour before sunset, check in, and head out on camels or by jeep to the dunes. After sunset you return to the camp for tea and snacks, followed by a folk music and dance performance around the fire. Dinner is usually a buffet of Rajasthani dishes such as dal baati, ker sangri and bajra roti. Later, the lights dim and the stars take over. Sunrise on the dunes the next morning, with coffee in hand, is often the quiet highlight.',
        ],
      },
      {
        heading: 'Questions to ask before you book a camp',
        paragraphs: [],
        bullets: [
          'Exactly where is the camp, and how close is it to the dunes and to other camps?',
          'Do tents have attached bathrooms, hot water and heating or extra blankets in winter?',
          'Are the camel ride, cultural programme, dinner and breakfast included?',
          'How loud and how late does the evening entertainment run?',
          'Can the camp cater for dietary needs, such as vegan or gluten-free meals?',
        ],
      },
      {
        heading: 'Getting there and fitting it into a tour',
        paragraphs: [
          'Jaisalmer is about 285 km from Jodhpur (around 5 hours by road), so it fits well into a western Rajasthan loop with Jaipur, Jodhpur and Udaipur. A good plan is two nights in Jaisalmer town plus one night at the dunes. Satnam Voyages can arrange the drive, choose a camp to match your comfort level, and include everything in one written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'Which is better for a desert camp, Sam or Khuri?', a: 'Sam has bigger dunes and more camps and is livelier. Khuri is quieter and more rural. Choose Sam for the classic experience and Khuri for peace.' },
      { q: 'How far are the dunes from Jaisalmer?', a: 'Both Sam and Khuri are roughly 40 to 50 km from Jaisalmer city, about an hour by car.' },
      { q: 'Is a desert camp safe and comfortable?', a: 'Established camps are safe and well run. Swiss-tent camps have proper beds and attached bathrooms. Ask what is included before booking.' },
      { q: 'When are Jaisalmer desert camps open?', a: 'Most camps operate from about October to March. Many close in the hot summer months.' },
      { q: 'Can children and older travellers stay in a desert camp?', a: 'Yes. Choose a camp with attached bathrooms and skip the jeep dune-bashing; a camel cart is a gentle alternative to riding.' },
      { q: 'Is one night in a desert camp enough?', a: 'For most travellers, yes. One night gives you the sunset ride, the cultural evening, a starry night and sunrise on the dunes. Add a second night only if you want a longer camel trek or simply more time to relax.' },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'rishikesh-trip-from-delhi',
    title: 'Rishikesh Trip from Delhi: Haridwar, Ganga Aarti and Yoga in 2 to 4 Days',
    seoTitle: 'Rishikesh Trip from Delhi: 2–4 Day Plan',
    metaDescription:
      'Plan a Haridwar and Rishikesh trip from Delhi: drive time, 2 to 4 day itineraries, Ganga Aarti, yoga, rafting season and tips for international visitors.',
    excerpt:
      'Rishikesh and Haridwar are about 4.5 to 5 hours from Delhi. Here is how to plan the trip, what to see, when to go and how many days you need.',
    heroImage: IMG.rishikesh,
    heroAlt: 'Suspension bridge over the Ganges in Rishikesh',
    keywords: ['Rishikesh trip from Delhi', 'Haridwar Rishikesh tour from Delhi', 'Rishikesh tour', 'Delhi to Rishikesh'],
    relatedTourSlugs: ['rishikesh-haridwar-tour', 'rishikesh-haridwar-mussoorie-tour', 'rishikesh-mussoorie-tour'],
    sections: [
      {
        heading: 'Why go to Rishikesh and Haridwar?',
        paragraphs: [
          'Rishikesh sits where the Ganges leaves the Himalayan foothills, and it is known worldwide as a centre for yoga and meditation. Its riverside ashrams, temples and cafés attract spiritual seekers, yoga students and adventure travellers alike. Haridwar, about 25 km downstream, is one of Hinduism’s holiest cities, and its evening Ganga Aarti at Har Ki Pauri is one of the most moving sights in India.',
          'Together they make an easy and rewarding trip from Delhi, and a calm contrast to the Golden Triangle.',
        ],
      },
      {
        heading: 'How far is Rishikesh from Delhi?',
        paragraphs: [
          'By road, Delhi to Haridwar is about 240 km and takes around 4.5 hours via the Delhi–Meerut Expressway, depending on traffic leaving Delhi. Rishikesh is a further 30 to 45 minutes. Leave Delhi early in the morning to avoid the worst traffic.',
          'Fast daytime trains such as the Shatabdi and Vande Bharat run from Delhi towards Dehradun with a stop at Haridwar. You then need a taxi to Rishikesh. A private car is the most flexible option if you want to stop along the way or continue to Mussoorie.',
        ],
      },
      {
        heading: '2-day itinerary: Haridwar and Rishikesh',
        paragraphs: [],
        bullets: [
          'Day 1: Drive from Delhi to Haridwar. Check in, then walk to Har Ki Pauri for the sunset Ganga Aarti, when hundreds of lamps are raised and floated on the river.',
          'Day 2: Drive to Rishikesh. Visit the ashrams around Ram Jhula, the riverside ghats and the Beatles Ashram (Chaurasi Kutia), then attend the evening aarti at Parmarth Niketan before driving back to Delhi, or stay overnight.',
        ],
      },
      {
        heading: '3 to 4-day itinerary: add yoga, rafting or the hills',
        paragraphs: [
          'With an extra day or two you can slow down. Join a drop-in yoga class or a short course at one of Rishikesh’s ashrams or studios, walk to Neer Garh waterfall, or raft a stretch of the Ganges (in season). From Rishikesh it is about 2 to 3 hours by road to Mussoorie, the “Queen of the Hills”, for Himalayan views and colonial-era walks.',
        ],
        bullets: [
          'Day 1: Delhi to Haridwar, evening Ganga Aarti.',
          'Day 2: Rishikesh ashrams, Beatles Ashram, aarti at Parmarth Niketan.',
          'Day 3: Morning yoga, rafting or waterfall walk; afternoon at leisure.',
          'Day 4: Drive back to Delhi, or continue to Mussoorie for one or two nights.',
        ],
      },
      {
        heading: 'Things to know before you go',
        paragraphs: [],
        bullets: [
          'Haridwar and the main parts of Rishikesh are vegetarian and alcohol is not served in most areas, out of respect for their religious status.',
          'The old Laxman Jhula suspension bridge was closed for safety in 2020; use Ram Jhula or the newer bridges and check the current status locally.',
          'Rafting usually runs from about September or October to June and is suspended in the monsoon when the river is high.',
          'Dress modestly at temples and ghats, and remove shoes where asked.',
          'Haridwar is extremely crowded during big religious festivals and the Kanwar Yatra (usually July). Check dates before you travel.',
          'The International Yoga Festival is usually held in Rishikesh in early March.',
        ],
      },
      {
        heading: 'Top things to do in Rishikesh and Haridwar',
        paragraphs: [],
        bullets: [
          'Watch the Ganga Aarti at Har Ki Pauri in Haridwar at sunset, one of the most powerful rituals in India.',
          'Attend the gentler evening aarti at Parmarth Niketan ashram on the riverbank in Rishikesh.',
          'Take a yoga or meditation class; many studios welcome drop-in beginners.',
          'Visit the Beatles Ashram (Chaurasi Kutia), where the band stayed in 1968, now a ruin covered in murals.',
          'Walk across Ram Jhula and explore the temples and cafés on both banks.',
          'Raft the Ganges in season with a licensed operator.',
          'Hike to Neer Garh waterfall, a short walk from the main road.',
          'Ride the cable car to Mansa Devi temple in Haridwar for views over the river.',
        ],
      },
      {
        heading: 'Where to stay',
        paragraphs: [
          'In Haridwar, choose a hotel close to Har Ki Pauri so you can walk to the evening aarti and avoid traffic. In Rishikesh, the areas around Tapovan and Ram Jhula are lively and well located, while riverside resorts a little upstream are quieter. Ashram stays are possible for yoga students, but they follow strict rules on meals, timings and silence, so read the conditions first.',
        ],
      },
      {
        heading: 'Best time to visit',
        paragraphs: [
          'October to April is the most pleasant time, with clear days and cool nights. March is lovely and coincides with the yoga festival. May and June are hot in Haridwar but still fine in the hills. July to September brings heavy monsoon rain, landslide risk on mountain roads and no rafting.',
        ],
      },
      {
        heading: 'Plan your trip with a private car',
        paragraphs: [
          'Satnam Voyages runs private Haridwar and Rishikesh trips from Delhi with experienced drivers who know the expressway and the hill roads. We can include hotel suggestions, timing for the Ganga Aarti and an extension to Mussoorie. Message us your dates for a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'How long does it take to get from Delhi to Rishikesh?', a: 'About 5 to 5.5 hours by road via Haridwar, depending on traffic. Haridwar alone is about 4.5 hours from Delhi.' },
      { q: 'Can I visit Rishikesh as a day trip from Delhi?', a: 'It is possible but tiring, with 9 to 10 hours of driving. Two days is the minimum we recommend, so you can see the Ganga Aarti without rushing.' },
      { q: 'What time is the Ganga Aarti at Haridwar?', a: 'It is held at sunset, so the time changes through the year. Arrive about an hour early to find a good spot at Har Ki Pauri.' },
      { q: 'Is Rishikesh good for first-time visitors to India?', a: 'Yes. It is relaxed, compact and used to international visitors, and it pairs well with a Golden Triangle tour.' },
      { q: 'Should I stay in Haridwar or Rishikesh?', a: 'Stay in Haridwar if the evening Ganga Aarti at Har Ki Pauri is your priority, and in Rishikesh for yoga, cafés and a calmer atmosphere. On a two-night trip, many travellers spend one night in each.' },
      { q: 'Can I add Mussoorie to a Rishikesh trip?', a: 'Yes. Mussoorie is about 2 to 3 hours by road from Rishikesh, so one or two extra nights turn the trip into a Ganges-and-Himalayan-foothills loop before returning to Delhi.' },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'delhi-airport-to-agra-guide',
    title: 'Delhi Airport to Agra: Distance, Travel Time and the Best Way to Get There',
    seoTitle: 'Delhi Airport to Agra: Distance & Options',
    metaDescription:
      'How to get from Delhi IGI Airport to Agra: distance, drive time on the Yamuna Expressway, train options, and tips for heading to the Taj Mahal after landing.',
    excerpt:
      'Landing in Delhi and heading straight to Agra? Compare private car and train, see realistic travel times, and learn how to plan around jet lag and the Taj Mahal’s Friday closure.',
    heroImage: IMG.tajDetail,
    heroAlt: 'Close view of the Taj Mahal’s marble dome and minarets',
    keywords: ['Delhi airport to Agra', 'Delhi airport to Agra distance', 'IGI airport to Agra', 'Delhi airport to Agra by car'],
    relatedTourSlugs: ['delhi-airport-to-taj-mahal-tour', 'same-day-delhi-agra-tour', 'overnight-agra-tour-from-delhi', 'golden-triangle-tour-5-days'],
    sections: [
      {
        heading: 'How far is Agra from Delhi airport?',
        paragraphs: [
          'Agra is roughly 230 to 240 km from Indira Gandhi International (IGI) Airport by road. The usual route runs south-east through Delhi or the outskirts, then onto the Yamuna Expressway, a fast toll road that runs most of the way to Agra. In normal traffic the drive takes about 3.5 to 4 hours. Allow more time at peak hours on weekdays, when getting out of the Delhi area is slowest.',
        ],
      },
      {
        heading: 'Option 1: Private car from the airport (easiest)',
        paragraphs: [
          'For most international travellers, a pre-booked private car is the simplest way to reach Agra after a long flight. Your driver meets you at the arrivals exit with a name card, helps with your luggage and takes you directly to your hotel in Agra, with stops for food and rest whenever you need them. There is no need to cross Delhi to a railway station with heavy bags.',
          'It also works well at odd hours. Many long-haul flights from Europe, North America and Australia land late at night or early in the morning, when train options are limited.',
        ],
        bullets: [
          'Door-to-door, from the terminal to your Agra hotel.',
          'Flight tracking, so delays are not a problem.',
          'Space for luggage, child seats on request, and the option to stop whenever you need.',
          'You can keep the same car for the rest of a Golden Triangle trip.',
        ],
      },
      {
        heading: 'Option 2: Train from Delhi to Agra',
        paragraphs: [
          'Fast trains link Delhi and Agra Cantt in about 1 hour 40 minutes to 2 hours, including the Gatimaan Express from Hazrat Nizamuddin and the Shatabdi Express from New Delhi station. The train is quick and comfortable, but the airport is not on these lines: you first need to get from IGI to the right station.',
          'The Airport Express metro line runs from Terminal 3 to New Delhi station area, but with large suitcases and a long-haul flight behind you, most visitors find a taxi easier. Allow plenty of time for station crowds and security, book tickets in advance on Indian Railways, and arrange a taxi from Agra Cantt station to your hotel.',
        ],
      },
      {
        heading: 'What about flying to Agra?',
        paragraphs: [
          'Agra has a small airport with limited domestic flights, but there is no practical flight connection from Delhi for most travellers. By the time you add check-in and transfers, flying is not faster than the road. Driving or the train are the realistic options.',
        ],
      },
      {
        heading: 'Planning around jet lag',
        paragraphs: [
          'If you land in the morning, you can drive to Agra the same day, rest in the afternoon and see the Taj Mahal at sunrise the next day, which is the best light and the quietest time. If you land late at night, it is often kinder to sleep in a hotel near the airport and drive to Agra the next morning.',
          'Avoid going straight from a long-haul flight to a full sightseeing day. The Taj deserves fresh eyes.',
        ],
      },
      {
        heading: 'Important things to know about Agra',
        paragraphs: [],
        bullets: [
          'The Taj Mahal is closed every Friday. Do not plan your visit for a Friday.',
          'Only battery vehicles may go right up to the Taj; your car will park at an official parking area and you take an electric shuttle or walk the last stretch.',
          'Large bags, food, tripods and many other items are not allowed inside. Leave them in the car or hotel.',
          'Buy Taj Mahal tickets online in advance where possible, and carry your passport.',
          'Agra Fort, Mehtab Bagh and Itmad-ud-Daulah are all worth adding if you have time.',
        ],
      },
      {
        heading: 'What to see on the way and in Agra',
        paragraphs: [
          'The Yamuna Expressway itself is fast and fairly featureless, but there are worthwhile detours if you are not in a hurry. Mathura, the birthplace of Krishna, and the temple town of Vrindavan lie just off the route about two hours from Delhi, and make an interesting stop for travellers interested in Hindu culture.',
          'In Agra, beyond the Taj Mahal, plan time for Agra Fort, a red sandstone Mughal fortress with palaces inside; Itmad-ud-Daulah, the delicate marble tomb nicknamed the “Baby Taj”; and Mehtab Bagh, a garden across the river with a beautiful sunset view of the Taj. Fatehpur Sikri, the abandoned Mughal capital, is about an hour west of Agra on the road to Jaipur.',
        ],
      },
      {
        heading: 'Continuing from Agra',
        paragraphs: [
          'Many travellers use the airport-to-Agra drive as the first leg of a Golden Triangle tour. From Agra it is about 240 km to Jaipur via Fatehpur Sikri, and Jaipur is about 280 km (around 4 hours) back to Delhi on the Delhi–Mumbai Expressway. Keeping the same car and driver for the whole loop is usually simpler than mixing trains and taxis, especially with luggage.',
        ],
      },
      {
        heading: 'Arrange your transfer',
        paragraphs: [
          'Satnam Voyages provides private transfers from Delhi IGI Airport to Agra in air-conditioned sedans, Toyota Innova Crysta SUVs and Tempo Travellers, with English-speaking drivers. We can also continue to Jaipur and back to Delhi as a Golden Triangle trip. Send us your flight details for a written quote.',
        ],
      },
    ],
    faqs: [
      { q: 'How far is Agra from Delhi airport?', a: 'About 230 to 240 km by road, roughly 3.5 to 4 hours via the Yamuna Expressway in normal traffic.' },
      { q: 'What is the best way to get from Delhi airport to Agra?', a: 'A pre-booked private car is easiest after a long flight, because it goes door to door. Trains are fast but leave from city stations, not the airport.' },
      { q: 'Can I visit the Taj Mahal on the same day I land in Delhi?', a: 'If you land early in the morning it is possible, but most travellers prefer to rest and see the Taj at sunrise the next day.' },
      { q: 'Is there a train from Delhi airport to Agra?', a: 'No direct train. You need to reach Hazrat Nizamuddin or New Delhi station first, then take a train such as the Gatimaan or Shatabdi Express.' },
      { q: 'Is the Taj Mahal open every day?', a: 'No. The Taj Mahal is closed on Fridays. It is open from sunrise to sunset on the other days.' },
    ],
  },
];
