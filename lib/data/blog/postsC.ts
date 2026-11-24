import type { RawPost } from '../blogData';

// Blog batch C: destination and practical guides for international travellers (2027).
// Owner policy: no prices or currency amounts. Anything that changes (timings, ticket
// rules, train schedules) is hedged and readers are pointed to the official source.

const IMG_C = {
  gangaAarti: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
  sandstone: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
  desert: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1600&q=80',
  palace: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
  taj: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
  pichola: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
  monument: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80',
};

export const POSTS_C: RawPost[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: 'varanasi-travel-guide-2027',
    title: 'Varanasi Travel Guide 2027: Ghats, Ganga Aarti and Adding Varanasi to the Golden Triangle',
    seoTitle: 'Varanasi Tour Guide 2027: Ghats & Aarti',
    metaDescription:
      'Plan a Varanasi tour in 2027: the ghats, evening Ganga Aarti, a sunrise boat ride, Sarnath, and how to add Varanasi to a Golden Triangle trip from Delhi.',
    excerpt:
      'The ghats, the evening Ganga Aarti, a sunrise boat on the Ganges and Sarnath, plus the easiest ways to add Varanasi to a Delhi, Agra and Jaipur tour.',
    heroImage: IMG_C.gangaAarti,
    heroAlt: 'Brass lamps raised during an evening Ganga Aarti on the river Ganges',
    keywords: ['Varanasi tour', 'Golden Triangle and Varanasi', 'Varanasi travel guide 2027', 'Ganga Aarti Varanasi', 'Sarnath'],
    relatedTourSlugs: ['golden-triangle-varanasi-tour', 'golden-triangle-tour-5-days', 'golden-triangle-tour', 'golden-triangle-tour-4-days'],
    sections: [
      {
        heading: 'Why add Varanasi to your India trip',
        paragraphs: [
          'Varanasi, also called Kashi or Banaras, is one of the oldest continuously inhabited cities in the world and the holiest city in Hinduism. Where Delhi, Agra and Jaipur show you the India of emperors and maharajas, Varanasi shows you living faith: pilgrims bathing at dawn, priests performing rituals on the steps of the river, and cremations that have continued on the same ghats for centuries.',
          'For many international travellers it becomes the most memorable stop of the whole trip. It is also very different in pace and feel, which is exactly why it pairs so well with the Golden Triangle. Most visitors find two nights enough to see the essentials without rushing.',
        ],
      },
      {
        heading: 'How to get from Delhi to Varanasi',
        paragraphs: [
          'Varanasi is roughly 800 km from Delhi, which is too far for a comfortable drive on a short holiday. There are two practical options.',
        ],
        bullets: [
          'Flight: non-stop flights from Delhi take around 1.5 hours. Varanasi airport (Lal Bahadur Shastri International) is about 25 km from the old city; allow an hour or more for the transfer because of traffic.',
          'Train: the Vande Bharat Express between New Delhi and Varanasi is a fast day train taking roughly 8 hours, with airline-style seating and meals. Check the current timetable and book on the official IRCTC site, as trains fill up early in peak season.',
          'From Agra or Jaipur: some airlines run direct flights from Jaipur, but schedules change by season. Most travellers return to Delhi and fly from there, which keeps the Golden Triangle loop simple.',
        ],
      },
      {
        heading: 'The ghats: what to see along the river',
        paragraphs: [
          'Varanasi has more than 80 ghats (stone steps leading down to the Ganges) stretching several kilometres along the western bank. Walking between them is the best way to understand the city, ideally in the early morning or late afternoon when the light is soft and the heat is lower.',
        ],
        bullets: [
          'Dashashwamedh Ghat: the busiest and most central ghat, and the setting for the main evening Ganga Aarti.',
          'Assi Ghat: at the southern end, calmer, with a morning Aarti and music programme at dawn.',
          'Manikarnika Ghat: the main cremation ghat. Visitors may watch quietly from a respectful distance, but photography of cremations is not appropriate. Ignore anyone offering an unofficial "tour" here and asking for donations.',
          'Darbhanga and Munshi Ghats: some of the most photogenic architecture on the river.',
          'Kedar Ghat and Harishchandra Ghat: colourful and less crowded, good for a slower walk.',
        ],
      },
      {
        heading: 'The evening Ganga Aarti at Dashashwamedh Ghat',
        paragraphs: [
          'Every evening around sunset, a group of young priests performs the Ganga Aarti, a choreographed ritual of fire, incense, bells and chanting offered to the river. The exact start time shifts with the season, so ask your hotel on the day. The ceremony lasts roughly 45 minutes.',
          'You can watch from the steps, from a rooftop restaurant overlooking the ghat, or from a boat on the river. A boat gives the best front-on view but can get crowded with other boats; the steps give you the sound and atmosphere up close. Arrive at least 30 to 45 minutes early in winter, when crowds are largest.',
        ],
      },
      {
        heading: 'Sunrise boat ride on the Ganges',
        paragraphs: [
          'If you do only one thing in Varanasi, make it a rowing boat at sunrise. Pilgrims bathe, yoga groups practise on the steps, laundry men beat cloth on stones and the whole riverfront turns gold as the sun rises over the far bank. Most boats leave from Dashashwamedh or Assi Ghat about 30 minutes before sunrise and run for one to two hours.',
          'In December and January, mornings can be cold and foggy; bring a warm layer and accept that the view may be hazy. Hand-rowed boats are quieter and slower than motor boats and are worth asking for.',
        ],
      },
      {
        heading: 'Old city lanes and Kashi Vishwanath',
        paragraphs: [
          'Behind the ghats lies a maze of narrow lanes (galis) too tight for cars. Here you will find tiny temples, sweet shops, silk weavers and the famous Kashi Vishwanath Temple, dedicated to Lord Shiva. Security at the temple is strict: phones, bags, cameras and leather items usually have to be deposited in lockers before entry, and queues can be long. Check the temple’s official guidance before you go.',
          'Cars drop you at the edge of the old city; from there you walk or take a cycle rickshaw. Wear comfortable closed shoes, as lanes can be wet and crowded.',
        ],
      },
      {
        heading: 'Sarnath: where the Buddha first taught',
        paragraphs: [
          'About 10 km from central Varanasi, Sarnath is where the Buddha gave his first sermon after enlightenment. It is a peaceful half-day trip and a complete contrast to the ghats.',
        ],
        bullets: [
          'Dhamek Stupa, the large brick and stone stupa marking the site of the first sermon.',
          'The excavated monastery ruins in the surrounding park.',
          'The Sarnath Archaeological Museum, home to the Lion Capital of Ashoka, India’s national emblem. Museum opening days can change, so check before you go (many ASI museums close on Fridays).',
          'Temples built by Buddhist communities from Thailand, Japan, Tibet, Sri Lanka and other countries.',
        ],
      },
      {
        heading: 'A sample Golden Triangle and Varanasi route',
        paragraphs: [
          'You can fly from Delhi to Varanasi, or travel the whole way by road with one car and driver: Delhi, Jaipur and Agra, then east on the Agra–Lucknow Expressway with a night in Lucknow. This is the by-road route we run:',
        ],
        bullets: [
          'Day 1: Arrive in Delhi, New Delhi sightseeing.',
          'Day 2: Old Delhi, then drive to Jaipur.',
          'Day 3: Amber Fort, City Palace and Hawa Mahal in Jaipur.',
          'Day 4: Drive to Agra via Fatehpur Sikri, sunset at Mehtab Bagh.',
          'Day 5: Taj Mahal at sunrise, Agra Fort, drive to Lucknow.',
          'Day 6: Drive to Varanasi, evening Ganga Aarti.',
          'Day 7: Sunrise boat ride, old city lanes and Sarnath.',
          'Day 8: Morning at the ghats, drop at Varanasi airport or station for your onward journey.',
        ],
      },
      {
        heading: 'Best time to visit Varanasi',
        paragraphs: [
          'October to March is the most comfortable period, with warm days and cool to cold nights. Dev Deepawali, held on the full moon of the Hindu month of Kartik (usually in November), lights the ghats with thousands of lamps and is spectacular but extremely crowded; confirm the exact 2027 date and book hotels well ahead. April to June is very hot, and during the monsoon (July to September) high water can submerge the lower ghats and stop boat rides.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many days do I need in Varanasi?',
        a: 'Two nights is ideal for most visitors. It gives you one evening Aarti, one sunrise boat ride, time for the old city lanes and a half-day at Sarnath. Add a third night if you want a slower pace.',
      },
      {
        q: 'Can I add Varanasi to a Golden Triangle tour?',
        a: 'Yes. You can fly from Delhi for two nights, or go the whole way by road with your own car and driver via Jaipur, Agra and Lucknow, which is how our Golden Triangle with Varanasi tour runs.',
      },
      {
        q: 'Is Varanasi safe for foreign tourists?',
        a: 'Varanasi is generally safe, but it is crowded and intense. Keep valuables secure in the lanes, use registered boats and guides, and be firm with touts, especially around the cremation ghats.',
      },
      {
        q: 'Can I take photos at the cremation ghats?',
        a: 'No. Photographing cremations is considered disrespectful and is not allowed. You may observe quietly from a distance.',
      },
      {
        q: 'Should I fly or take the train from Delhi to Varanasi?',
        a: 'Flying is quickest at around 1.5 hours. The Vande Bharat Express takes roughly 8 hours but is comfortable and shows you the countryside. Choose based on how much time you have.',
      },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: 'khajuraho-travel-guide',
    title: 'Khajuraho Travel Guide: The UNESCO Temples, Light Show and the Orchha and Gwalior Route',
    seoTitle: 'Khajuraho Tour Guide: Temples & Route',
    metaDescription:
      'Plan a Khajuraho tour: the UNESCO Western Group temples, the sound-and-light show, how to get there from Delhi, and combining Gwalior and Orchha on one trip.',
    excerpt:
      'What to see at the Khajuraho temples, how to reach them from Delhi and Agra, and why Gwalior and Orchha make the perfect route there.',
    heroImage: IMG_C.sandstone,
    heroAlt: 'Carved sandstone heritage architecture on a central India heritage route',
    keywords: ['Khajuraho tour', 'Khajuraho temples', 'Khajuraho travel guide', 'Gwalior Orchha Khajuraho', 'Western Group of temples'],
    relatedTourSlugs: ['gwalior-orchha-khajuraho-tour', 'golden-triangle-tour', 'golden-triangle-varanasi-tour', 'golden-triangle-tour-5-days'],
    sections: [
      {
        heading: 'What makes Khajuraho special',
        paragraphs: [
          'The Khajuraho Group of Monuments in Madhya Pradesh is a UNESCO World Heritage Site and one of the finest collections of medieval temple architecture in India. The temples were built mostly between about 950 and 1050 CE under the Chandela dynasty. Of the many temples originally built, around 20 to 25 survive today, spread across three groups.',
          'Khajuraho is famous for its erotic sculpture, but that is only a small part of the story. The temple walls are covered with thousands of carved figures: gods and goddesses, celestial dancers, musicians, warriors, animals and scenes of everyday life. The overall effect, especially in the warm light of early morning or late afternoon, is extraordinary.',
        ],
      },
      {
        heading: 'The Western Group: the main temples',
        paragraphs: [
          'The Western Group sits inside a landscaped, ticketed enclosure and contains the largest and best-preserved temples. Allow at least two to three hours, ideally with a licensed guide who can explain the iconography.',
        ],
        bullets: [
          'Kandariya Mahadeva Temple: the largest and most elaborate temple, dedicated to Shiva, with a soaring spire designed to evoke a mountain peak.',
          'Lakshmana Temple: one of the earliest and best preserved, dedicated to Vishnu, with superb friezes along its base.',
          'Vishvanatha Temple: a Shiva temple with fine sculptures of celestial women.',
          'Chitragupta Temple: dedicated to the sun god Surya.',
          'Devi Jagadambi Temple: compact and richly carved.',
          'Varaha shrine: a single monolithic sculpture of Vishnu’s boar incarnation covered in tiny carved figures.',
        ],
      },
      {
        heading: 'The Eastern and Southern Groups',
        paragraphs: [
          'The Eastern Group includes a cluster of Jain temples, the most impressive being the Parshvanath Temple, as well as several Hindu temples nearby. The Southern Group, a short drive away, includes the Duladeo and Chaturbhuj temples. These are quieter than the Western Group and well worth a couple of hours, especially by cycle or with your driver.',
        ],
      },
      {
        heading: 'The sound-and-light show',
        paragraphs: [
          'In the evening, a sound-and-light show is held at the Western Group, narrating the history of the Chandela kings and the temples. Shows usually run in English and Hindi at different times. Timings and languages change with the season, so check with your hotel or the Madhya Pradesh Tourism website on the day.',
        ],
      },
      {
        heading: 'How to get to Khajuraho from Delhi or Agra',
        paragraphs: [
          'Khajuraho is not on the Golden Triangle, but it is reachable as an extension. The best option depends on your route.',
        ],
        bullets: [
          'By flight: Khajuraho has a small airport with limited flights from Delhi and Varanasi. Schedules change seasonally, so check availability before planning around them.',
          'By train and road: fast trains from Delhi to Jhansi (such as the Gatimaan or Vande Bharat services, subject to current timetables) take you within reach of Orchha and Khajuraho. From Jhansi it is about 20 minutes to Orchha and roughly 4 to 5 hours by road to Khajuraho.',
          'By road from Agra: a full road trip via Gwalior, Orchha and Khajuraho is the most rewarding way to see central India, with stops that break up the driving.',
        ],
      },
      {
        heading: 'The Gwalior, Orchha and Khajuraho route',
        paragraphs: [
          'Combining these three towns gives you a heritage circuit that many travellers miss entirely.',
        ],
        bullets: [
          'Gwalior Fort: a vast hilltop fort, with the tiled Man Mandir Palace, the Sas-Bahu temples and the Teli ka Mandir. Gwalior is a manageable drive from Agra.',
          'Orchha: a small, peaceful riverside town with the Jahangir Mahal and Raja Mahal palaces, the Chaturbhuj Temple and a row of royal cenotaphs (chhatris) along the Betwa River. Sunset at the chhatris is a highlight.',
          'Khajuraho: two nights lets you see the Western Group in morning light, the Eastern and Southern Groups, and the evening show.',
          'Optional: Panna National Park lies close to Khajuraho and offers jeep safaris in season; the core zone is usually closed during the monsoon.',
        ],
      },
      {
        heading: 'Best time to visit and practical tips',
        paragraphs: [
          'October to March is the best time, with comfortable days. The Khajuraho Dance Festival, a week of classical Indian dance performed against the floodlit temples, is usually held in February; confirm the exact 2027 dates before booking. April to June is very hot.',
        ],
        bullets: [
          'The temples open from sunrise to sunset. Visit the Western Group early in the morning for soft light and fewer people.',
          'Remove shoes where asked inside active shrines, and dress modestly.',
          'Hire only licensed guides; ask to see their identification.',
          'Carry water and a hat, as there is little shade between temples.',
        ],
      },
      {
        heading: 'Reading the temple architecture',
        paragraphs: [
          'Khajuraho temples follow the Nagara style of north India. Each stands on a high platform and is built as a sequence of spaces leading from light into darkness: an entrance porch, a pillared hall, a vestibule and finally the small inner sanctum (garbhagriha) that holds the deity. Outside, the roof rises in a cluster of spires that build up to the tallest tower above the sanctum, symbolising the sacred mountain.',
          'The sculpture is arranged in horizontal bands around the walls. Look for the surasundaris, the graceful celestial women shown applying make-up, writing letters or removing a thorn from a foot; they are among the finest figures in Indian art. The famous mithuna (amorous couple) panels are usually placed at structurally significant junctions of the wall, a detail a good guide will point out.',
          'If you visit only one temple in depth, make it Kandariya Mahadeva. Walk slowly around the platform first, then go inside and let your eyes adjust to the dim light around the sanctum.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many days do I need for Khajuraho?',
        a: 'One full day covers the main temples, but two nights is more relaxed and lets you see the evening show and the Eastern and Southern groups. A Gwalior, Orchha and Khajuraho circuit usually takes four to five days.',
      },
      {
        q: 'Are the Khajuraho temples suitable for families?',
        a: 'Yes. The erotic carvings make up only a small portion of the sculpture, and most of the art shows gods, dancers, musicians and daily life. A good guide will put everything in historical context.',
      },
      {
        q: 'Can I combine Khajuraho with the Golden Triangle?',
        a: 'Yes. A popular route is Delhi, Agra, then Gwalior, Orchha and Khajuraho, continuing by flight or train to Varanasi or back to Delhi. Ask us to plan the road portion with your own car and driver.',
      },
      {
        q: 'Is there a light show at Khajuraho?',
        a: 'Yes, an evening sound-and-light show is held at the Western Group, with separate English and Hindi shows. Timings vary by season, so check locally on the day.',
      },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: 'rajasthan-road-trip-guide',
    title: 'Rajasthan Road Trip Guide: Routes, Road Conditions, Driver Etiquette and Safety Tips',
    seoTitle: 'Rajasthan Road Trip Guide: Routes & Tips',
    metaDescription:
      'Plan a Rajasthan road trip: classic routes and drive times, road conditions, travelling with a chauffeur, tipping etiquette and why to avoid night driving.',
    excerpt:
      'The classic Rajasthan routes with real drive times, what the roads are like, how to travel well with a chauffeur and the safety rules that matter most.',
    heroImage: IMG_C.desert,
    heroAlt: 'Desert landscape near Jaisalmer on a Rajasthan road trip',
    keywords: ['Rajasthan road trip', 'Rajasthan road trip itinerary', 'Rajasthan driving tips', 'Rajasthan by road', 'chauffeur in Rajasthan'],
    relatedTourSlugs: ['rajasthan-tour-by-car-and-driver', 'rajasthan-heritage-tour', 'jaipur-jodhpur-udaipur-tour', 'jaipur-jodhpur-jaisalmer-tour'],
    sections: [
      {
        heading: 'Why Rajasthan is made for a road trip',
        paragraphs: [
          'Rajasthan is India’s largest state, and its highlights are spread out: the Pink City of Jaipur, the blue lanes of Jodhpur, the golden fort of Jaisalmer, the lakes of Udaipur and dozens of smaller towns in between. Few of these places are well connected by direct flights, and trains run on fixed schedules. A road trip lets you set your own pace, stop at villages, stepwells and roadside temples, and see how the landscape changes from farmland to scrub to the Thar Desert.',
          'For international visitors, the usual and strongly recommended approach is to travel with a private car and a professional chauffeur rather than drive yourself. Indian traffic follows its own unwritten rules, and an experienced local driver makes the journey relaxed and safe.',
        ],
      },
      {
        heading: 'Classic Rajasthan routes and drive times',
        paragraphs: [
          'These are typical road distances and driving times for the most popular legs. Real times depend on traffic, roadworks and stops, so treat them as a planning guide.',
        ],
        bullets: [
          'Delhi to Jaipur: about 280 km, roughly 4 hours via the Delhi–Mumbai Expressway.',
          'Agra to Jaipur: about 240 km, around 4.5 hours with a stop at Fatehpur Sikri or the Chand Baori stepwell at Abhaneri.',
          'Jaipur to Pushkar: about 145 km, roughly 2.5 hours.',
          'Jaipur to Jodhpur: about 340 km, roughly 5.5 hours.',
          'Jodhpur to Jaisalmer: about 285 km, roughly 5 hours across increasingly desert landscape.',
          'Jodhpur to Udaipur: about 260 km, around 5 hours plus a stop at the Ranakpur Jain temple.',
          'Jaipur to Udaipur: about 390 km, roughly 6.5 hours.',
        ],
      },
      {
        heading: 'Three road trip shapes that work',
        paragraphs: [
          'Most good Rajasthan itineraries follow one of these patterns. Each assumes at least two nights in the main cities.',
        ],
        bullets: [
          'The short loop (7 to 8 days): Delhi, Jaipur, Pushkar, Udaipur, then fly back to Delhi from Udaipur.',
          'The desert loop (10 to 12 days): Delhi, Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, then fly or drive back.',
          'The grand circuit (14 days or more): Delhi, Agra, Jaipur, Ranthambore, Pushkar, Jodhpur, Jaisalmer, Udaipur, finishing with a flight to Delhi or Mumbai.',
        ],
      },
      {
        heading: 'What the roads are like',
        paragraphs: [
          'Main highways in Rajasthan are generally good: wide, mostly divided and well surfaced, with regular toll plazas. The newer expressways around Jaipur are excellent. State highways and village roads are narrower and slower, sometimes with potholes or roadworks.',
          'Expect to share the road with trucks, tractors, motorbikes carrying whole families, camel carts and livestock. Cows and goats wander freely, even on highways. Drivers use the horn constantly to signal their presence; it is communication rather than aggression. Average speeds are lower than the distances suggest, which is why the drive times above are longer than you might expect.',
        ],
      },
      {
        heading: 'Why you should avoid driving at night',
        paragraphs: [
          'The single most important safety rule on a Rajasthan road trip is to finish driving before dark. After sunset, slow vehicles without lights, animals on the road, pedestrians and overloaded trucks become much harder to see. Good operators plan days so you leave early and arrive at the next hotel by late afternoon.',
          'In December and January, dense fog can also affect northern India in the early morning and late evening, particularly around Delhi and Agra. Your driver may suggest a later start on foggy days; trust their judgement.',
        ],
      },
      {
        heading: 'Travelling well with a chauffeur',
        paragraphs: [
          'Your chauffeur will be with you for the whole trip, so a little understanding goes a long way.',
        ],
        bullets: [
          'Your driver will usually stay in dedicated driver accommodation at or near your hotel and eat separately. This is normal practice in India.',
          'Agree the next morning’s start time each evening, and tell your driver if you want extra stops for photos, tea or toilets.',
          'Drivers are not licensed guides. At major forts and palaces, hire an official guide at the entrance or ask us to arrange one in advance.',
          'Some drivers may suggest shops or restaurants. You are always free to say no, or to ask for somewhere specific.',
          'Ask your driver to keep to safe speeds if you feel uncomfortable; a good chauffeur will happily adjust.',
          'Keep valuables with you or out of sight in the car, and lock the car at stops.',
        ],
      },
      {
        heading: 'Tipping etiquette on a road trip',
        paragraphs: [
          'Tipping is customary in India’s tourism industry but always at your discretion. For a chauffeur, most travellers give a single tip at the end of the trip rather than daily, handed directly to the driver, often in an envelope with a short thank-you note. Base it on the length of the trip and how well you were looked after.',
          'Hotel porters, local guides and boatmen are usually tipped individually at the time of service. Tip in Indian rupees, as foreign coins cannot be exchanged. If you are unsure what is appropriate, ask your tour operator for current local norms before you travel.',
        ],
      },
      {
        heading: 'Food and comfort stops on the highway',
        paragraphs: [
          'Highway food is served at roadside restaurants called dhabas, plus a growing number of modern food courts on the expressways. Your driver will know clean, reliable places. Stick to freshly cooked hot food and bottled water. Toilet standards vary at roadside stops; restaurants in hotels and the larger highway plazas are usually the best option, and carrying tissues and hand sanitiser is wise.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can foreigners drive themselves in Rajasthan?',
        a: 'It is legally possible with an International Driving Permit, but it is not recommended. Traffic is unpredictable and road signage is limited. Most international visitors travel with a private car and professional driver.',
      },
      {
        q: 'How many hours a day should we drive?',
        a: 'Aim for no more than five to six hours of driving on any day, with stops. Plan two nights in each main city so you are not on the road every day.',
      },
      {
        q: 'Is it safe to travel by road at night in Rajasthan?',
        a: 'It is best avoided. Unlit vehicles and animals on the road make night driving risky. Plan to reach your hotel before dark.',
      },
      {
        q: 'Do we need permits for a Rajasthan road trip?',
        a: 'No special permits are needed for the usual tourist routes. Your operator handles state road taxes and tolls for the vehicle.',
      },
      {
        q: 'What is the best time for a Rajasthan road trip?',
        a: 'October to March, when days are warm and nights are cool. December and January nights in the desert can be cold, so pack a warm layer.',
      },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: 'senior-travel-india-tips',
    title: 'India Travel Tips for Senior Citizens: Pace, Health, Accessibility and Comfort',
    seoTitle: 'India Travel Tips for Senior Citizens',
    metaDescription:
      'Practical India travel tips for senior citizens: a comfortable pace, health and insurance, accessibility at the Taj Mahal and forts, and choosing hotels.',
    excerpt:
      'How older travellers can enjoy India comfortably: realistic pacing, health preparation, which monuments are easy and which are steep, and hotel tips.',
    heroImage: IMG_C.palace,
    heroAlt: 'Pink sandstone palace architecture in Jaipur, Rajasthan',
    keywords: ['India travel for senior citizens tips', 'India for older travellers', 'senior friendly India travel', 'accessible India travel'],
    relatedTourSlugs: ['india-tour-for-senior-citizens', 'golden-triangle-tour-5-days', 'golden-triangle-tour', 'luxury-rajasthan-tour'],
    sections: [
      {
        heading: 'India is very achievable at any age',
        paragraphs: [
          'Many of our guests are in their sixties, seventies and beyond, and India rewards older travellers enormously. The key is planning for comfort: fewer places, more nights in each, a private car that waits for you, and an itinerary built around how you like to travel rather than squeezing in every sight.',
          'This guide covers the practical points we discuss with every senior traveller before they book.',
        ],
      },
      {
        heading: 'Choose a comfortable pace',
        paragraphs: [
          'The most common mistake is trying to do too much. A slower pace means you enjoy each place more and arrive home rested rather than exhausted.',
        ],
        bullets: [
          'Plan one major sight in the morning and one lighter activity in the afternoon, with a rest at the hotel in between.',
          'Stay at least two nights in each city to avoid packing and unpacking every day.',
          'Keep road journeys to four or five hours, with comfort stops every 90 minutes or so.',
          'Start early in the cooler hours and avoid sightseeing in the midday heat.',
          'Build in a free day or half-day every few days.',
        ],
      },
      {
        heading: 'Health preparation and insurance',
        paragraphs: [
          'See your doctor or a travel clinic six to eight weeks before departure to discuss vaccinations and any conditions you manage. Bring enough prescription medicine for the whole trip plus extra, in original packaging, with a copy of your prescriptions and a doctor’s letter listing your medicines.',
          'Comprehensive travel insurance with medical cover and emergency evacuation is essential; check that it covers your age group and any pre-existing conditions. Major cities such as Delhi and Jaipur have well-equipped private hospitals, and a good operator can help you reach one quickly if needed.',
        ],
        bullets: [
          'Drink only bottled or filtered water and avoid ice from unknown sources.',
          'Eat freshly cooked hot food; go easy on spicy dishes for the first few days.',
          'Carry oral rehydration salts, sun cream, a hat and hand sanitiser.',
          'Pack comfortable walking shoes with good grip; marble floors can be slippery.',
        ],
      },
      {
        heading: 'Accessibility at the main monuments',
        paragraphs: [
          'India’s heritage sites were not built with accessibility in mind, but many are manageable with planning. Here is what to expect at the most visited places.',
        ],
        bullets: [
          'Taj Mahal: petrol vehicles are not allowed near the monument, so battery-operated buses and golf carts carry visitors from the parking area to the gates. Inside, the gardens are flat, but the main mausoleum sits on a raised platform reached by steps. Wheelchairs may be available at the entrance; check with the site on arrival.',
          'Agra Fort: a ramp leads up from the entrance; it is long and fairly steep but manageable at a slow pace.',
          'Amber Fort, Jaipur: the walk up from the road is steep. Ask for a jeep transfer to the upper courtyard instead of walking, and allow time inside, where there are many steps between levels.',
          'Qutub Minar and Humayun’s Tomb, Delhi: mostly flat grounds with gentle paths, though Humayun’s Tomb has a staircase up to the main platform.',
          'Old Delhi: lanes are crowded and uneven. A cycle rickshaw ride is a gentle way to see the Chandni Chowk area.',
          'Mehrangarh Fort, Jodhpur: a lift serves part of the climb; check it is running on the day.',
        ],
      },
      {
        heading: 'Choosing the right hotels',
        paragraphs: [
          'Heritage hotels in converted palaces and havelis are a highlight of Rajasthan, but many have steep staircases and no lift. If stairs are a concern, tell your operator so they can request ground-floor rooms or choose modern hotels with lifts.',
        ],
        bullets: [
          'Ask for rooms close to the lift or on the ground floor.',
          'Request walk-in showers rather than bathtubs where possible.',
          'Choose hotels with on-site restaurants so you do not need to go out every evening.',
          'Prefer central locations to reduce time in traffic.',
        ],
      },
      {
        heading: 'Getting around in comfort',
        paragraphs: [
          'A private car with a professional driver is the most comfortable way for seniors to travel. The car waits at every stop, carries your luggage and lets you rest between sights. A higher vehicle such as a Toyota Innova Crysta is often easier to get in and out of than a low sedan. For longer distances such as Delhi to Varanasi or Udaipur, a short flight can replace a very long drive.',
        ],
      },
      {
        heading: 'Food, rest and staying well on the road',
        paragraphs: [
          'Indian hotel breakfasts are generous, with both Indian and continental options, and most good hotels will happily prepare plainer food on request. Lunch on long driving days is usually at a clean highway restaurant your driver knows; ask for mild (not spicy) dishes and freshly cooked food.',
          'Heat, dust and long days are more tiring than people expect. Rest after lunch, drink water regularly even when you do not feel thirsty, and carry a small bag with medicines, a scarf, sunglasses and tissues for the day. If you feel unwell, tell your driver or operator straight away; they can find a doctor or pharmacy quickly in every city on the main tourist routes.',
          'Finally, keep a printed copy of your itinerary, insurance details and emergency contacts with you, and share them with family at home.',
        ],
      },
      {
        heading: 'Best months for senior travellers',
        paragraphs: [
          'November to February is the most comfortable period for most older travellers in northern India, with warm days and cool evenings. Mornings and evenings can be cold in December and January, and fog can delay early starts, so pack layers. Avoid April to June, when heat on the plains can be dangerous.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is India suitable for elderly travellers?',
        a: 'Yes. With a private car, a gentle pace and well-chosen hotels, India is very manageable for older travellers. Planning around rest and short walking distances makes the biggest difference.',
      },
      {
        q: 'Is the Taj Mahal wheelchair accessible?',
        a: 'Partly. Battery vehicles take visitors close to the gates and the gardens are flat, but the main mausoleum platform is reached by steps. Wheelchairs may be available on site; ask on arrival.',
      },
      {
        q: 'How long should a Golden Triangle trip be for seniors?',
        a: 'Six or seven days is comfortable, with two nights in Delhi, Agra and Jaipur. A shorter trip is possible but involves more time in the car each day.',
      },
      {
        q: 'Can you arrange a guide who walks at a slower pace?',
        a: 'Yes. Tell us about mobility needs when you request a quote and we will brief your driver and guides, plan shorter walks and arrange jeep or vehicle transfers where possible.',
      },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: 'taj-mahal-visiting-guide-2027',
    title: 'Taj Mahal Timings and Rules 2027: Opening Hours, Tickets, Gates and Night Viewing',
    seoTitle: 'Taj Mahal Timings and Rules 2027',
    metaDescription:
      'Taj Mahal timings and rules for 2027: closed on Fridays, sunrise opening, official tickets, East vs West Gate, banned items and full-moon night viewing.',
    excerpt:
      'Everything to know before you visit the Taj Mahal in 2027: opening days and hours, buying official tickets, which gate to use, what you can bring and night viewing.',
    heroImage: IMG_C.taj,
    heroAlt: 'The Taj Mahal seen across its garden and reflecting pool in Agra',
    keywords: ['Taj Mahal timings 2027', 'Taj Mahal rules', 'Taj Mahal tickets', 'Taj Mahal night viewing', 'Taj Mahal closed Friday'],
    relatedTourSlugs: ['taj-mahal-sunrise-tour-from-delhi', 'same-day-delhi-agra-tour', 'overnight-agra-tour-from-delhi', 'delhi-airport-to-taj-mahal-tour'],
    sections: [
      {
        heading: 'Opening days and hours',
        paragraphs: [
          'The Taj Mahal is open every day except Friday. On Fridays the monument is closed to sightseers and the mosque inside is used only for afternoon prayers. Plan your Agra day around this; it is the most common mistake visitors make.',
          'On open days, the Taj Mahal typically opens about 30 minutes before sunrise and closes about 30 minutes before sunset. Exact times therefore change through the year. Always check the current hours with the Archaeological Survey of India (ASI) or your operator close to your visit.',
        ],
        bullets: [
          'Closed: every Friday.',
          'Opens: around 30 minutes before sunrise.',
          'Closes: around 30 minutes before sunset.',
          'Best time: the first hour after opening, for soft light and smaller crowds.',
        ],
      },
      {
        heading: 'How to buy official tickets',
        paragraphs: [
          'Buy tickets on the official ASI online booking platform or at the official ticket counters at the gates. Online tickets usually let you skip the ticket queue and go straight to the security line. Avoid third-party sellers who approach you near the gates.',
          'Foreign nationals pay a different entry fee from Indian citizens, and a separate additional ticket is required to enter the main mausoleum building itself, rather than only the grounds. Children below a certain age enter free. Ticket rules are revised from time to time, so confirm the current details on the ASI website before your visit.',
        ],
      },
      {
        heading: 'East Gate, West Gate or South Gate?',
        paragraphs: [
          'The Taj Mahal has three entrances, and choosing the right one can save time.',
        ],
        bullets: [
          'East Gate: popular with visitors staying in the hotel area east of the monument and often less crowded at opening time. Battery vehicles run from the parking area.',
          'West Gate: the main entrance closest to the city and usually the busiest, with large domestic tour groups.',
          'South Gate: opens onto the old Taj Ganj neighbourhood and may have more limited opening hours; check locally.',
        ],
      },
      {
        heading: 'What you can and cannot bring',
        paragraphs: [
          'Security at the Taj Mahal is airport-style, and prohibited items will be refused at the gate. There is limited locker space, so it is easiest to leave non-essentials in your car or hotel.',
        ],
        bullets: [
          'Allowed: mobile phones, small cameras, a small bag, a water bottle, essential medicines.',
          'Not allowed: food, tobacco and lighters, knives, tripods, drones, large bags, and most electrical items other than phones and cameras.',
          'Photography is allowed in the grounds but not inside the main mausoleum.',
          'Shoe covers are provided so you can walk on the marble platform without removing your shoes.',
          'The list of banned items can change, so check the ASI guidance before you go.',
        ],
      },
      {
        heading: 'Full-moon night viewing',
        paragraphs: [
          'The Taj Mahal is open for night viewing on a few nights each month around the full moon, usually the full-moon night itself and two nights before and after, except on Fridays and during Ramadan. Visitors are admitted in small batches for a short time slot and view the monument from a designated area rather than walking up to it.',
          'Tickets are very limited and are usually sold in advance through the ASI, sometimes only one day ahead. If you want to see it, plan to stay overnight in Agra and confirm availability as early as possible. Weather and haze can affect visibility.',
        ],
      },
      {
        heading: 'Sunrise vs sunset',
        paragraphs: [
          'Sunrise is the classic time to visit: the marble glows pink and gold, the air is cooler and crowds are lighter. To be at the gate at opening time you either stay overnight in Agra or leave Delhi very early, around 3 to 4 am, for the roughly 3.5-hour drive.',
          'Late afternoon light is also beautiful, but crowds are bigger. For a sunset view without the crowds, visit Mehtab Bagh, a Mughal garden on the opposite bank of the Yamuna River with a direct view of the Taj Mahal. It closes around sunset.',
        ],
      },
      {
        heading: 'Dress, conduct and practical tips',
        paragraphs: [
          'There is no formal dress code, but modest clothing that covers the shoulders and knees is respectful, and light colours help in the heat. Inside the mausoleum, keep your voice low and keep moving with the flow of visitors.',
        ],
        bullets: [
          'Hire only licensed guides, ideally arranged through your operator or at the official counter.',
          'Allow two to three hours for the visit.',
          'Combine with Agra Fort, about 2.5 km away, which is open on Fridays.',
          'Expect large crowds on weekends and Indian public holidays.',
        ],
      },
      {
        heading: 'A smooth Taj Mahal morning, step by step',
        paragraphs: [
          'This is how a well-planned sunrise visit usually runs for our guests staying in Agra.',
        ],
        bullets: [
          'Buy your official tickets online the day before, including the mausoleum ticket.',
          'Leave the hotel about 45 minutes before opening and take the battery vehicle from the parking area to the gate.',
          'Join the security queue (separate lines for men and women) with only essentials.',
          'Walk through the Great Gate, the Darwaza-i-Rauza, for the famous first view framed by its arch.',
          'Take photos along the reflecting pool early, before crowds build in front of the central bench.',
          'Visit the mausoleum, then the mosque and the guesthouse building on either side of the Taj.',
          'Leave by mid-morning, have breakfast, and continue to Agra Fort.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the Taj Mahal closed on Fridays?',
        a: 'Yes. The Taj Mahal is closed to visitors every Friday. Agra Fort, Mehtab Bagh and other Agra sights are open on Fridays.',
      },
      {
        q: 'What time does the Taj Mahal open?',
        a: 'It opens around 30 minutes before sunrise and closes around 30 minutes before sunset, so the times change through the year. Check current hours with the ASI before your visit.',
      },
      {
        q: 'Where should I buy Taj Mahal tickets?',
        a: 'Buy on the official ASI online booking site or at the official counters at the gates. Avoid people selling tickets outside the gates.',
      },
      {
        q: 'Can I visit the Taj Mahal at night?',
        a: 'Yes, on a few nights around each full moon, except Fridays and during Ramadan. Tickets are very limited and sold in advance through the ASI.',
      },
      {
        q: 'Can I see the Taj Mahal on a day trip from Delhi?',
        a: 'Yes. Agra is about 3.5 hours from Delhi by the Yamuna Expressway, so a same-day trip by private car is very popular. Leave early to arrive close to opening time.',
      },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: 'udaipur-travel-guide',
    title: 'Udaipur Travel Guide: Best Tourist Places, Lake Pichola and Day Trips',
    seoTitle: 'Udaipur Tourist Places: Travel Guide',
    metaDescription:
      'The best Udaipur tourist places: City Palace, a Lake Pichola boat ride to Jag Mandir, Saheliyon ki Bari, the Bagore ki Haveli show and Kumbhalgarh day trips.',
    excerpt:
      'The City of Lakes at its best: the palace, a boat ride on Lake Pichola, gardens, a folk dance evening and the day trips to Kumbhalgarh and Ranakpur.',
    heroImage: IMG_C.pichola,
    heroAlt: 'Lake Pichola and the palaces of Udaipur in Rajasthan',
    keywords: ['Udaipur tourist places', 'Udaipur travel guide', 'things to do in Udaipur', 'Lake Pichola boat ride', 'Kumbhalgarh day trip'],
    relatedTourSlugs: ['udaipur-tour-package', 'delhi-agra-jaipur-udaipur-tour', 'jaipur-jodhpur-udaipur-tour', 'luxury-rajasthan-tour'],
    sections: [
      {
        heading: 'Why Udaipur is a favourite',
        paragraphs: [
          'Udaipur, the former capital of the Mewar kingdom, is often called the City of Lakes and is widely considered one of the most romantic cities in India. White palaces rise from the water, the Aravalli hills frame the skyline and the old city is compact enough to explore on foot. It is a calmer, gentler place than Jaipur or Delhi and a perfect place to slow down at the end of a Rajasthan trip.',
          'Plan at least two full days to see the main sights at a relaxed pace, and three if you want a day trip to Kumbhalgarh and Ranakpur.',
        ],
      },
      {
        heading: 'City Palace',
        paragraphs: [
          'The City Palace complex stretches along the eastern shore of Lake Pichola and was built and extended by successive Mewar rulers over several centuries. Inside, a museum winds through courtyards, mirrored rooms, balconies with lake views and galleries of miniature paintings. Allow two to three hours and go early to avoid the midday crowds. Part of the palace is still the residence of the former royal family.',
        ],
      },
      {
        heading: 'Lake Pichola boat ride and Jag Mandir',
        paragraphs: [
          'A boat ride on Lake Pichola is the classic Udaipur experience. Boats usually leave from jetties near the City Palace and give you views of the palace, the ghats and the Lake Palace hotel, which sits on its own island (the hotel is open only to guests). Many rides include a stop at Jag Mandir, another island palace with gardens and a café.',
          'The late afternoon sunset ride is the most popular; book ahead in peak season. Water levels vary with the monsoon, and occasionally rides are affected after a dry year.',
        ],
      },
      {
        heading: 'More Udaipur tourist places',
        paragraphs: [
          'Beyond the palace and the lake, these are the sights most visitors enjoy.',
        ],
        bullets: [
          'Jagdish Temple: a large, finely carved Vishnu temple in the heart of the old city, a short walk from the palace.',
          'Saheliyon ki Bari: an 18th-century garden of fountains, lotus pools and marble pavilions, peaceful in the morning.',
          'Bagore ki Haveli: a restored mansion on Gangaur Ghat, home to an evening folk dance and music show featuring Rajasthani dances and puppetry. Arrive early for good seats.',
          'Fateh Sagar Lake: a larger, more open lake with a lakeside promenade popular with local families.',
          'Sajjangarh (Monsoon Palace): a hilltop palace with sweeping sunset views over the city and lakes.',
          'Ambrai Ghat: the best spot for an evening view of the City Palace lit up across the water.',
          'Shilpgram: a crafts village on the outskirts showcasing rural architecture and handicrafts.',
        ],
      },
      {
        heading: 'Day trips from Udaipur',
        paragraphs: [
          'Udaipur is a good base for some of Rajasthan’s finest sights. A private car makes these easy to combine.',
        ],
        bullets: [
          'Kumbhalgarh Fort: a UNESCO-listed hill fort roughly 2 to 2.5 hours away, famous for its immensely long defensive wall winding over the hills.',
          'Ranakpur Jain Temple: a marble temple with a forest of intricately carved pillars, about 2 to 2.5 hours away. Visiting hours for non-Jain visitors are limited, and leather items are not allowed inside; check timings before you go. Kumbhalgarh and Ranakpur combine well into one long day.',
          'Chittorgarh Fort: one of India’s largest forts, with towers, palaces and stories of Rajput heroism, roughly 2 hours away.',
          'Eklingji and Nagda: a temple complex and ancient temple ruins about 30 to 40 minutes from the city.',
        ],
      },
      {
        heading: 'A two-day Udaipur plan',
        paragraphs: [
          'If you have two full days, this plan covers the highlights at an easy pace.',
        ],
        bullets: [
          'Day 1 morning: City Palace museum, then Jagdish Temple and a walk through the old city lanes.',
          'Day 1 afternoon: rest at the hotel, then a sunset boat ride on Lake Pichola with a stop at Jag Mandir.',
          'Day 1 evening: the folk dance show at Bagore ki Haveli, followed by dinner with a view of the lit-up palace.',
          'Day 2 morning: Saheliyon ki Bari gardens and Fateh Sagar Lake.',
          'Day 2 afternoon: Shilpgram crafts village or shopping for miniature paintings and textiles.',
          'Day 2 evening: sunset at Sajjangarh (Monsoon Palace) above the city.',
        ],
      },
      {
        heading: 'Shopping and food in Udaipur',
        paragraphs: [
          'Udaipur is known for miniature paintings, silver jewellery, block-printed textiles and leather-free crafts. Buy from established shops, ask for certificates on silver, and take your time; there is no obligation to buy at any shop your guide or driver suggests. For food, try Rajasthani thalis with dal baati churma and gatte ki sabzi, and book a rooftop restaurant for at least one evening overlooking the lake.',
        ],
      },
      {
        heading: 'How to get to Udaipur',
        paragraphs: [
          'Udaipur’s Maharana Pratap Airport has direct flights from Delhi and Mumbai, taking roughly 1.5 hours from Delhi. By road, Udaipur is about 390 km (around 6.5 hours) from Jaipur and about 260 km from Jodhpur, with the Ranakpur temple as a natural stop on the Jodhpur route. Many travellers drive into Udaipur on a Rajasthan road trip and fly out at the end.',
        ],
      },
      {
        heading: 'Best time to visit',
        paragraphs: [
          'October to March is the best time, with pleasant days and cool nights. The lakes are fullest after the monsoon, which makes September and October particularly attractive. April to June is hot.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How many days do I need in Udaipur?',
        a: 'Two full days covers the City Palace, a lake boat ride, the main temples and gardens and an evening show. Add a third day for Kumbhalgarh and Ranakpur.',
      },
      {
        q: 'Can I visit the Lake Palace in Udaipur?',
        a: 'The Lake Palace is a hotel and is open only to staying guests or by prior reservation. You can see it closely on a Lake Pichola boat ride.',
      },
      {
        q: 'Is Udaipur worth visiting on a first trip to India?',
        a: 'Yes. Udaipur pairs well with the Golden Triangle, either by a short flight from Delhi or as the final stop on a Rajasthan road trip.',
      },
      {
        q: 'What is the best day trip from Udaipur?',
        a: 'Kumbhalgarh Fort and the Ranakpur Jain temple combined in one day is the most popular. Chittorgarh is another excellent choice.',
      },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: 'amritsar-golden-temple-wagah-guide',
    title: 'Amritsar Guide: The Golden Temple, Wagah Border Ceremony and Getting There from Delhi',
    seoTitle: 'Amritsar Golden Temple & Wagah Border Guide',
    metaDescription:
      'Visit Amritsar: the Golden Temple and its langar, dress rules, the Wagah border ceremony at sunset, Jallianwala Bagh and how to get there from Delhi.',
    excerpt:
      'How to visit the Golden Temple respectfully, what happens at the Wagah border ceremony, and the easiest ways to add Amritsar to a Delhi or Golden Triangle trip.',
    heroImage: IMG_C.monument,
    heroAlt: 'A historic monument in north India on a Golden Triangle and Amritsar journey',
    keywords: ['Amritsar Golden Temple and Wagah border', 'Golden Temple Amritsar', 'Wagah border ceremony', 'Golden Triangle with Amritsar', 'Amritsar travel guide'],
    relatedTourSlugs: ['golden-triangle-amritsar-tour', 'golden-triangle-tour-5-days', 'golden-triangle-tour', 'golden-triangle-tour-4-days'],
    sections: [
      {
        heading: 'Why Amritsar belongs on your India itinerary',
        paragraphs: [
          'Amritsar, in the state of Punjab, is home to the Golden Temple (Sri Harmandir Sahib), the holiest site of the Sikh faith. Its gilded sanctuary floating on a sacred pool, the constant sound of hymns and the extraordinary hospitality of its community kitchen make it one of the most moving places in India. Add the dramatic border ceremony at Wagah and the history of Jallianwala Bagh, and two days here becomes a highlight for many travellers.',
        ],
      },
      {
        heading: 'Visiting the Golden Temple',
        paragraphs: [
          'The Golden Temple is open to people of all faiths and backgrounds, and it is open around the clock. There is no entry fee. The temple stands in the middle of the Amrit Sarovar (pool of nectar), surrounded by a white marble walkway where pilgrims walk, sit and listen to the continuous singing of hymns.',
          'Visit twice if you can: once in the early morning or late evening, when the gold reflects the light and the atmosphere is calm, and once in the daytime to see the temple at its busiest. Late in the evening and before dawn, the Palki Sahib ceremony carries the holy book between the sanctuary and the Akal Takht, a moving ritual to witness.',
        ],
      },
      {
        heading: 'Golden Temple rules and dress code',
        paragraphs: [
          'Visitors are warmly welcomed, and following a few simple rules shows respect.',
        ],
        bullets: [
          'Cover your head at all times inside the complex. Scarves are available at the entrance if you do not have one.',
          'Remove shoes and socks and leave them at the free shoe deposit; you will wash your feet in a shallow channel before entering.',
          'Dress modestly, covering shoulders and legs.',
          'Tobacco, alcohol and drugs are strictly prohibited.',
          'Photography is generally allowed around the pool but not inside the inner sanctum; follow guidance from the volunteers.',
          'Walk clockwise around the pool and sit quietly if you wish to listen.',
        ],
      },
      {
        heading: 'The langar: India’s great community kitchen',
        paragraphs: [
          'The Golden Temple’s langar serves free vegetarian meals to everyone who comes, regardless of religion, caste or nationality, every day of the year. Huge numbers of people are fed daily, sitting together in rows on the floor, served by volunteers. Eating here is a humbling and memorable experience.',
          'You can also volunteer: visitors are welcome to help with chopping vegetables, rolling chapatis or washing dishes. Simply ask in the kitchen area. It is an easy way to take part rather than just watch.',
        ],
      },
      {
        heading: 'Jallianwala Bagh and the Partition Museum',
        paragraphs: [
          'A short walk from the Golden Temple, Jallianwala Bagh is the garden where British troops fired on a peaceful gathering in April 1919, killing many unarmed people. Today it is a memorial with a museum, bullet-marked walls and the well where people jumped to escape. It is a sobering but important visit.',
          'Nearby, the Partition Museum in the Town Hall tells the stories of the 1947 partition of India and Pakistan through personal accounts and artefacts. Check opening days before you go.',
        ],
      },
      {
        heading: 'The Wagah–Attari border ceremony',
        paragraphs: [
          'Every evening, Indian and Pakistani border guards perform the Beating Retreat ceremony at the Attari–Wagah border, about 30 km from central Amritsar. It is a theatrical display of high kicks, fierce stares, marching and the synchronised lowering of both national flags, accompanied by music, cheering crowds and patriotic chants.',
          'The ceremony takes place shortly before sunset, so its timing shifts during the year. Arrive at least 1.5 to 2 hours early to get through security and find a seat, especially on weekends and holidays.',
        ],
        bullets: [
          'Carry your passport: foreign visitors are often directed to a separate seating area and asked for ID.',
          'Bags are usually not allowed; carry only your phone, camera, passport and water.',
          'Expect large crowds and long walks from the parking area.',
          'Confirm the day’s timing locally, as it changes with the season and occasionally for security reasons.',
        ],
      },
      {
        heading: 'Food to try in Amritsar',
        paragraphs: [
          'Amritsar is one of India’s great food cities, famous for rich Punjabi cooking. Try Amritsari kulcha (stuffed, tandoor-baked bread served with chickpea curry), creamy lassi served in tall steel glasses, and Amritsari fried fish in winter. Vegetarians are spoilt for choice. Eat at busy, well-known places with high turnover, and if you have a sensitive stomach, start with milder dishes.',
        ],
      },
      {
        heading: 'How to get to Amritsar from Delhi',
        paragraphs: [
          'Amritsar is about 450 km from Delhi. You can fly, take a fast train, or go by road with your own car and driver.',
        ],
        bullets: [
          'Flight: direct flights take roughly 1 hour 15 minutes. Amritsar airport is about 11 km from the city.',
          'Train: fast day trains such as the Shatabdi and Vande Bharat services take around 6 hours; check current timetables and book on the official IRCTC site.',
          'Road: about 7 to 8 hours by car on the NH44. The same chauffeur stays with you in Amritsar for the Golden Temple and Wagah border, and drives you back.',
        ],
      },
      {
        heading: 'Adding Amritsar to the Golden Triangle',
        paragraphs: [
          'A simple plan is to drive from Delhi to Amritsar for two nights, then return to Delhi and continue to Agra and Jaipur with the same car and driver. Arrive in the morning, visit Jallianwala Bagh and the Golden Temple, see the Wagah ceremony in the afternoon, and return to the Golden Temple at night. The next morning, revisit the temple at dawn before heading back to Delhi.',
          'October to March is the best time, though December and January nights are cold in Punjab and fog can affect early flights and trains.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can non-Sikhs visit the Golden Temple?',
        a: 'Yes. The Golden Temple welcomes people of all faiths. Cover your head, remove your shoes, dress modestly and avoid tobacco and alcohol.',
      },
      {
        q: 'Is there an entry fee for the Golden Temple?',
        a: 'No. Entry is free, and the langar serves free meals to all visitors every day.',
      },
      {
        q: 'What time is the Wagah border ceremony?',
        a: 'It takes place shortly before sunset, so the time changes through the year. Arrive 1.5 to 2 hours early and confirm the day’s timing locally.',
      },
      {
        q: 'How many days do I need in Amritsar?',
        a: 'Two days is ideal: enough to visit the Golden Temple at different times of day, see Jallianwala Bagh and the Partition Museum, and attend the Wagah ceremony.',
      },
      {
        q: 'Can I combine Amritsar with the Golden Triangle?',
        a: 'Yes. Our Golden Triangle with Amritsar tour does it all by road in 8 days: two nights in Amritsar, then Delhi, Agra and Jaipur with the same car and driver.',
      },
    ],
  },
];
