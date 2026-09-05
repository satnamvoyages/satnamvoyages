import { TourPackage } from '../types';

export const ALL_TOURS: TourPackage[] = [
  {
    id: 'tour-1',
    slug: 'golden-triangle-tour',
    title: 'Golden Triangle Tour — Delhi • Agra • Jaipur',
    subtitle: 'The timeless classic Indian royal heritage and architectural circuit',
    category: 'Golden Triangle',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    startingPriceINR: 18500,
    startingPriceUSD: 235,
    rating: 4.9,
    reviewsCount: 342,
    primaryImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80', // Taj Mahal
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Agra ➔ Fatehpur Sikri ➔ Jaipur ➔ Delhi',
    overview: 'Experience the quintessential introductory circuit of northern India. From the vibrant Mughal monuments of Delhi and the world-wonder Taj Mahal in Agra to the pink sandstone palaces and hilltop fortresses of Jaipur, journey in luxury with a dedicated chauffeur and private local guides.',
    highlights: [
      'Sunrise view of the majestic Taj Mahal with priority entry',
      'Chauffeur-driven private AC sedan or SUV across the Yamuna Expressway',
      'Elephant or Jeep ascent to Amber Fort in Jaipur',
      'Explore Old Delhi Chandni Chowk spice bazaar via private rickshaw',
      'Visit UNESCO World Heritage Sites: Qutub Minar, Agra Fort & Fatehpur Sikri'
    ],
    inclusions: [
      'Private air-conditioned vehicle (Dzire/Innova) with English-speaking chauffeur',
      'All fuel costs, highway tolls, state border permits, and parking charges',
      'Driver lodging, meals, and daily allowances',
      'Chilled bottled mineral water and Wi-Fi hotspot in the cab',
      'Dedicated 24/7 concierge and itinerary coordination'
    ],
    exclusions: [
      'Monument entrance tickets & camera fees (available as add-on)',
      'Hotel accommodation (available in Deluxe & Luxury tiers)',
      'Personal expenses, laundry, and guide tips',
      'International and domestic flights'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & New Delhi Sightseeing',
        location: 'Delhi',
        description: 'Meet and greet by your dedicated Satnam Voyages chauffeur at Delhi Airport or your hotel. Explore New Delhi highlights including India Gate, Rashtrapati Bhavan, Humayun’s Tomb, and Qutub Minar.',
        highlights: ['India Gate', 'Humayun’s Tomb', 'Qutub Minar'],
        stayCity: 'Delhi',
        mealsIncluded: 'Welcome Drink'
      },
      {
        day: 2,
        title: 'Old Delhi Heritage & Drive to Agra',
        location: 'Delhi to Agra',
        description: 'Morning exploration of Old Delhi: Jama Masjid, Red Fort photo stop, and a cycle rickshaw ride through the buzzing lanes of Chandni Chowk. Afternoon scenic drive along the Yamuna Expressway to Agra.',
        highlights: ['Jama Masjid', 'Chandni Chowk Rickshaw Ride', 'Yamuna Expressway'],
        stayCity: 'Agra',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 3,
        title: 'Sunrise Taj Mahal, Agra Fort & Transfer to Jaipur',
        location: 'Agra to Jaipur',
        description: 'Marvel at the Taj Mahal at dawn as golden sunlight reflects upon the white Makrana marble. Visit the red sandstone ramparts of Agra Fort. En route to Jaipur, stop at the ghost city of Fatehpur Sikri and the ancient stepwell of Abhaneri.',
        highlights: ['Sunrise Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Chand Baori Stepwell'],
        stayCity: 'Jaipur',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 4,
        title: 'The Pink City: Amber Fort & Royal Palaces',
        location: 'Jaipur',
        description: 'Ascend to the grand Amber Fort overlooking Maota Lake. In the afternoon, visit City Palace, Jantar Mantar observatory, and click postcard photos at the intricate honeycomb facade of Hawa Mahal (Palace of Winds).',
        highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
        stayCity: 'Jaipur',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 5,
        title: 'Jaipur Heritage Bazaars & Jal Mahal',
        location: 'Jaipur',
        description: 'Explore the submerged palace of Jal Mahal, Nahargarh Fort for panoramic sunset views over Jaipur, and browse traditional textile block printing and gemstone markets in Johari Bazaar.',
        highlights: ['Jal Mahal', 'Nahargarh Fort', 'Johari Bazaar shopping'],
        stayCity: 'Jaipur',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 6,
        title: 'Return Drive to Delhi & Departure',
        location: 'Jaipur to Delhi',
        description: 'Enjoy a leisurely breakfast before comfortable cruising back to Delhi via the Delhi-Mumbai Expressway. Drop-off at New Delhi Railway Station or IGI Airport for onward flight.',
        highlights: ['Scenic Expressway Drive', 'Airport Transfer'],
        stayCity: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ],
    featured: true,
    bestSeason: 'October to April'
  },
  {
    id: 'tour-2',
    slug: 'golden-triangle-ranthambore',
    title: 'Golden Triangle + Ranthambore',
    subtitle: 'Mughal wonders, royal palaces, and Bengal tiger safaris in the wild',
    category: 'Golden Triangle',
    durationDays: 8,
    durationNights: 7,
    durationLabel: '8 Days / 7 Nights',
    startingPriceINR: 27900,
    startingPriceUSD: 345,
    rating: 4.95,
    reviewsCount: 218,
    primaryImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80', // Royal Bengal Tiger
    galleryImages: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Agra ➔ Ranthambore Tiger Reserve ➔ Jaipur ➔ Delhi',
    overview: 'Combine India’s quintessential Golden Triangle circuit with thrilling jungle safaris in Ranthambore National Park, home of the legendary Royal Bengal Tiger and ancient 10th-century forest fortresses.',
    highlights: [
      'Two guided open-top 4x4 Gypsy or Canter jungle safaris in Ranthambore',
      'Sunrise visit to Taj Mahal and UNESCO Agra Fort',
      'Spectacular views from Ranthambore Fort within the tiger reserve',
      'Elephant ride / Jeep ride to Jaipur Amber Fort',
      'Chauffeur-driven private intercity transport throughout'
    ],
    inclusions: [
      'Dedicated AC private vehicle for all intercity transfers and city tours',
      'All toll taxes, state road taxes, parking fees, and driver allowances',
      'Ranthambore National Park entry permissions and safari vehicle arrangement',
      'Bottled water and on-board assistance'
    ],
    exclusions: [
      'Hotel stays (optional deluxe/luxury upgrades available)',
      'Camera and video fees inside sanctuaries',
      'Personal dining and shopping expenses'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', location: 'Delhi', description: 'Chauffeur pickup from Delhi Airport, check-in to hotel, evening tour of India Gate and Bangla Sahib.', highlights: ['India Gate', 'Bangla Sahib Gurudwara'] },
      { day: 2, title: 'Delhi Sightseeing to Agra', location: 'Delhi to Agra', description: 'Visit Qutub Minar and Humayun’s Tomb, then drive to Agra via Yamuna Expressway.', highlights: ['Qutub Minar', 'Yamuna Expressway'] },
      { day: 3, title: 'Taj Mahal Sunrise to Ranthambore', location: 'Agra to Ranthambore', description: 'Witness Taj Mahal at sunrise, tour Agra Fort, then drive to Sawai Madhopur (Ranthambore).', highlights: ['Taj Mahal', 'Agra Fort', 'Rural Rajasthan Drive'] },
      { day: 4, title: 'Morning & Afternoon Tiger Safaris', location: 'Ranthambore', description: 'Early morning game drive in search of Royal Bengal Tigers, followed by an afternoon safari and Ranthambore Fort visit.', highlights: ['Tiger Safari', 'Crocodiles in Padam Talao', 'Ranthambore Fort'] },
      { day: 5, title: 'Ranthambore to Pink City Jaipur', location: 'Ranthambore to Jaipur', description: 'Drive to Jaipur. Afternoon visit to Birla Mandir and evening Chokhi Dhani ethnic village experience.', highlights: ['Birla Mandir', 'Chokhi Dhani'] },
      { day: 6, title: 'Jaipur Palaces & Fortresses', location: 'Jaipur', description: 'Full day exploration of Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar.', highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace'] },
      { day: 7, title: 'Jaipur Heritage & Jal Mahal', location: 'Jaipur', description: 'Nahargarh Fort sunset view, Jal Mahal photo stop, and shopping for handicrafts and gems.', highlights: ['Nahargarh Fort', 'Jal Mahal'] },
      { day: 8, title: 'Jaipur to Delhi Departure', location: 'Jaipur to Delhi', description: 'Comfortable return drive back to Delhi for scheduled departure.', highlights: ['Expressway Drive', 'Departure'] }
    ],
    featured: true,
    bestSeason: 'October to May (Park closed July-Sept)'
  },
  {
    id: 'tour-3',
    slug: 'delhi-sightseeing-old-and-new',
    title: 'Delhi Sightseeing Old and New',
    subtitle: 'A full spectrum journey through 1,000 years of imperial history',
    category: 'Same Day',
    durationDays: 1,
    durationNights: 0,
    durationLabel: 'Full Day (8 to 10 Hours)',
    startingPriceINR: 2200,
    startingPriceUSD: 28,
    rating: 4.88,
    reviewsCount: 512,
    primaryImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80', // Humayun Tomb
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Old Delhi (Chandni Chowk, Jama Masjid) ➔ Central Delhi ➔ New Delhi',
    overview: 'Discover India’s dynamic capital city in a sanitized private air-conditioned cab. Experience the contrasting charms of ancient walled Mughal Shahjahanabad and Sir Edwin Lutyens’ sprawling imperial avenues.',
    highlights: [
      'Private air-conditioned sedan with knowledgeable local chauffeur',
      'Chandni Chowk rickshaw ride through spice and bridal alleys',
      'Majestic Jama Masjid, Red Fort, and Raj Ghat memorial',
      'Lutyens Delhi: India Gate, President’s House, and Parliament',
      'UNESCO World Heritage Qutub Minar & Lotus Temple'
    ],
    inclusions: ['8 Hours / 80 Kms or 12 Hours / 120 Kms private cab', 'Uniformed driver, fuel, tolls, and parking'],
    exclusions: ['Monument entry tickets', 'Meals and guide fees'],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Comprehensive Delhi City Tour',
        location: 'Delhi',
        description: 'Morning pickup from your hotel. Visit Jama Masjid and Chandni Chowk, drive past Red Fort, pay homage at Raj Ghat. Continue to India Gate, Rashtrapati Bhavan, Humayun’s Tomb, Lotus Temple, and Qutub Minar.',
        highlights: ['Chandni Chowk', 'Jama Masjid', 'India Gate', 'Qutub Minar', 'Lotus Temple']
      }
    ],
    featured: false,
    bestSeason: 'Year Round'
  },
  {
    id: 'tour-4',
    slug: 'same-day-delhi-agra-tour',
    title: 'Same Day Delhi • Agra Tour',
    subtitle: 'Swift same-day return private excursion to the Taj Mahal & Agra Fort',
    category: 'Same Day',
    durationDays: 1,
    durationNights: 0,
    durationLabel: 'Same Day Return (12-14 Hours)',
    startingPriceINR: 5200,
    startingPriceUSD: 65,
    rating: 4.96,
    reviewsCount: 890,
    primaryImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80', // Taj Mahal detail
    galleryImages: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Yamuna Expressway ➔ Agra ➔ Delhi',
    overview: 'Travel comfortably from Delhi to Agra via the Yamuna Expressway in just 3 hours. Witness the breathtaking Taj Mahal, explore Agra Fort, and return to Delhi the same evening.',
    highlights: [
      'Early 6:00 AM hotel pickup to beat highway crowds and heat',
      'Yamuna 6-lane Expressway smooth private drive',
      'Comprehensive guided tour of the Taj Mahal and Agra Fort',
      'Optional stop at Mehtab Bagh for sunset reflection views',
      'Same evening drop-off back in Delhi/Gurgaon/Noida'
    ],
    inclusions: ['Round-trip private AC sedan or SUV', 'Yamuna Expressway tolls, parking, and driver allowance', 'Mineral water bottles'],
    exclusions: ['Monument tickets', 'Lunch at Agra (recommendations provided)'],
    itinerary: [
      {
        day: 1,
        title: 'Same Day Delhi to Agra and Return',
        location: 'Delhi - Agra - Delhi',
        description: 'Pickup at 6:00 AM. 3.5 hour smooth drive to Agra. Meet private tour guide, visit the breathtaking Taj Mahal, explore the palace complex of Agra Fort, enjoy lunch at a 5-star restaurant, visit Baby Taj or Mehtab Bagh, and return to Delhi by 8:30 PM.',
        highlights: ['Taj Mahal', 'Agra Fort', 'Yamuna Expressway', 'Mehtab Bagh']
      }
    ],
    featured: true,
    bestSeason: 'Year Round (Taj closed on Fridays)'
  },
  {
    id: 'tour-5',
    slug: 'same-day-delhi-jaipur-tour',
    title: 'Same Day Delhi • Jaipur Tour',
    subtitle: 'Speedy express day-trip to Rajasthan’s royal Pink City',
    category: 'Same Day',
    durationDays: 1,
    durationNights: 0,
    durationLabel: 'Same Day Return (14-16 Hours)',
    startingPriceINR: 6400,
    startingPriceUSD: 80,
    rating: 4.82,
    reviewsCount: 174,
    primaryImage: 'https://images.unsplash.com/photo-1603288940384-824b423c72b2?auto=format&fit=crop&w=1200&q=80', // Hawa Mahal
    galleryImages: [
      'https://images.unsplash.com/photo-1603288940384-824b423c72b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Delhi-Mumbai Expressway ➔ Jaipur ➔ Delhi',
    overview: 'Take advantage of the new Delhi-Mumbai Expressway to reach Jaipur in under 3.5 hours. Explore Amber Fort, Hawa Mahal, Jal Mahal, and City Palace in a single action-packed day.',
    highlights: [
      'Fast travel via newly opened Delhi-Dausa-Jaipur expressway',
      'Amber Fort Jeep ascent and panoramic photography',
      'Hawa Mahal and Jal Mahal photo stops',
      'City Palace royal courtyard & museum',
      'Return to Delhi the same night'
    ],
    inclusions: ['Full day dedicated private cab', 'Expressway toll charges, parking, driver allowance'],
    exclusions: ['Entry fees', 'Food & beverages'],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Jaipur Royal Express Excursion',
        location: 'Delhi - Jaipur - Delhi',
        description: 'Early morning 5:30 AM pickup. Drive via expressway to Jaipur. Tour Amber Fort, photo stop at Jal Mahal, visit City Palace and Hawa Mahal. Late afternoon return drive to Delhi.',
        highlights: ['Amber Fort', 'Jal Mahal', 'Hawa Mahal', 'City Palace']
      }
    ],
    featured: false,
    bestSeason: 'October to March'
  },
  {
    id: 'tour-6',
    slug: 'delhi-agra-jaipur-udaipur-tour',
    title: 'Delhi • Agra • Jaipur • Udaipur Tour',
    subtitle: 'The Grand Royal Odyssey: Golden Triangle combined with the City of Lakes',
    category: 'Rajasthan',
    durationDays: 9,
    durationNights: 8,
    durationLabel: '9 Days / 8 Nights',
    startingPriceINR: 34500,
    startingPriceUSD: 425,
    rating: 4.97,
    reviewsCount: 310,
    primaryImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80', // Lake Pichola Udaipur
    galleryImages: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Agra ➔ Jaipur ➔ Pushkar ➔ Udaipur ➔ Delhi',
    overview: 'Experience the crown jewels of northern India. Journey through imperial Delhi, romantic Agra, the vibrant pink palaces of Jaipur, sacred Pushkar, and conclude in Udaipur, Venice of the East, surrounded by serene Aravalli mountains and reflective lakes.',
    highlights: [
      'Sunset boat ride on Lake Pichola overlooking Jag Mandir and Lake Palace',
      'Visit grand City Palace of Udaipur, Rajasthan’s largest royal palace',
      'Sunrise at the Taj Mahal and UNESCO monuments in Agra & Delhi',
      'En route visit to sacred Pushkar Brahma Temple and Holy Lake',
      'Luxury chauffeured transport across all state borders'
    ],
    inclusions: ['Dedicated private AC vehicle with English-speaking chauffeur', 'All tolls, inter-state taxes, parking, driver stay', 'Bottled water and personalized concierge support'],
    exclusions: ['Hotel bookings (custom luxury/boutique packages available)', 'Monument entry fees', 'Boat cruise tickets'],
    itinerary: [
      { day: 1, title: 'Delhi Arrival & Exploration', location: 'Delhi', description: 'Pickup and tour of Qutub Minar, India Gate, and Humayun’s Tomb.', highlights: ['Qutub Minar', 'India Gate'] },
      { day: 2, title: 'Delhi to Agra', location: 'Delhi to Agra', description: 'Chandni Chowk tour in morning, scenic afternoon drive to Agra.', highlights: ['Chandni Chowk', 'Agra Sunset'] },
      { day: 3, title: 'Agra to Jaipur via Fatehpur Sikri', location: 'Agra to Jaipur', description: 'Sunrise Taj Mahal, Agra Fort, stop at Fatehpur Sikri, reach Jaipur by evening.', highlights: ['Sunrise Taj', 'Fatehpur Sikri'] },
      { day: 4, title: 'Jaipur The Pink City Highlights', location: 'Jaipur', description: 'Amber Fort jeep ride, Hawa Mahal, City Palace, and Jantar Mantar.', highlights: ['Amber Fort', 'City Palace', 'Hawa Mahal'] },
      { day: 5, title: 'Jaipur to Pushkar', location: 'Jaipur to Pushkar', description: 'Drive to sacred Pushkar town. Visit Lord Brahma Temple, Ghats, and camel market.', highlights: ['Pushkar Lake', 'Brahma Temple'] },
      { day: 6, title: 'Pushkar to Udaipur', location: 'Pushkar to Udaipur', description: 'Scenic drive through the Aravalli ranges to Udaipur, the City of Lakes.', highlights: ['Aravalli Hills Drive', 'Udaipur Check-in'] },
      { day: 7, title: 'Udaipur Palaces & Lake Pichola', location: 'Udaipur', description: 'City Palace complex, Saheliyon-ki-Bari, Jagdish Temple, and evening boat cruise.', highlights: ['City Palace', 'Lake Pichola Boat Ride', 'Jagdish Temple'] },
      { day: 8, title: 'Monsoon Palace & Artisan Markets', location: 'Udaipur', description: 'Sajjangarh (Monsoon Palace) hill panoramic view and Shilpgram artisan village.', highlights: ['Monsoon Palace', 'Shilpgram'] },
      { day: 9, title: 'Udaipur Departure / Delhi Transfer', location: 'Udaipur', description: 'Drop-off at Udaipur Airport or return journey to Delhi as desired.', highlights: ['Departure Transfer'] }
    ],
    featured: true,
    bestSeason: 'September to April'
  },
  {
    id: 'tour-7',
    slug: 'jaipur-jodhpur-jaisalmer-tour',
    title: 'Jaipur • Jodhpur • Jaisalmer Tour',
    subtitle: 'The Desert Kingdom: Golden sands, blue city alleys, and desert dunes',
    category: 'Rajasthan',
    durationDays: 7,
    durationNights: 6,
    durationLabel: '7 Days / 6 Nights',
    startingPriceINR: 26500,
    startingPriceUSD: 330,
    rating: 4.93,
    reviewsCount: 195,
    primaryImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80', // Jaisalmer fort & desert
    galleryImages: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Jaipur ➔ Jodhpur (Blue City) ➔ Jaisalmer (Thar Desert) ➔ Jodhpur / Jaipur',
    overview: 'Delve into authentic desert folklore. Wander through Jaipur’s royal courtyards, gaze over the indigo-blue lanes from Jodhpur’s Mehrangarh Fort, and sleep under millions of stars in the Thar Desert dunes of Jaisalmer.',
    highlights: [
      'Overnight luxury Swiss tent stay in Sam Sand Dunes Jaisalmer',
      'Camel safari and 4x4 dune bashing during sunset',
      'Mehrangarh Fort audio-guided tour in Jodhpur',
      'Walk inside the living golden sandstone Jaisalmer Fort (Sonar Qila)',
      'Private air-conditioned SUV for comfortable desert highways'
    ],
    inclusions: ['Dedicated cab throughout itinerary', 'Desert camp stay with cultural Kalbelia dance & gala dinner', 'Tolls, parking, driver lodging'],
    exclusions: ['Monument tickets', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', location: 'Jaipur', description: 'Pickup, check-in, visit Birla Temple and Albert Hall Museum.', highlights: ['Albert Hall', 'Birla Mandir'] },
      { day: 2, title: 'Jaipur Sightseeing', location: 'Jaipur', description: 'Amber Fort, Jal Mahal, City Palace, Hawa Mahal.', highlights: ['Amber Fort', 'Hawa Mahal'] },
      { day: 3, title: 'Jaipur to Jodhpur (The Blue City)', location: 'Jaipur to Jodhpur', description: 'Drive to Jodhpur. Visit Jaswant Thada marble cenotaph and Clock Tower market.', highlights: ['Jaswant Thada', 'Clock Tower'] },
      { day: 4, title: 'Mehrangarh Fort & Drive to Jaisalmer', location: 'Jodhpur to Jaisalmer', description: 'Explore Mehrangarh Fort perched 400 feet above Jodhpur, then drive to Jaisalmer.', highlights: ['Mehrangarh Fort', 'Desert Highway'] },
      { day: 5, title: 'Jaisalmer Fort & Sam Desert Dunes', location: 'Jaisalmer', description: 'Explore Patwon Ki Haveli and the living Fort. Afternoon transfer to desert camp for camel ride and folk dances.', highlights: ['Sonar Qila', 'Sam Sand Dunes', 'Folk Dance'] },
      { day: 6, title: 'Jaisalmer to Jodhpur', location: 'Jaisalmer to Jodhpur', description: 'Visit Kuldhara abandoned village, drive back to Jodhpur.', highlights: ['Kuldhara Village', 'Umaid Bhawan'] },
      { day: 7, title: 'Jodhpur Departure', location: 'Jodhpur', description: 'Tour Umaid Bhawan Palace museum and drop-off at Jodhpur Airport/Railway Station.', highlights: ['Umaid Bhawan', 'Departure'] }
    ],
    featured: false,
    bestSeason: 'October to March'
  },
  {
    id: 'tour-8',
    slug: 'jaipur-jodhpur-udaipur-tour',
    title: 'Jaipur • Jodhpur • Udaipur Tour',
    subtitle: 'The Royal Trinity: Pink Palaces, Blue Fortresses, and Romantic Lakes',
    category: 'Rajasthan',
    durationDays: 8,
    durationNights: 7,
    durationLabel: '8 Days / 7 Nights',
    startingPriceINR: 28900,
    startingPriceUSD: 360,
    rating: 4.91,
    reviewsCount: 220,
    primaryImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80', // Jaipur Amber Fort
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Jaipur ➔ Ajmer/Pushkar ➔ Jodhpur ➔ Ranakpur Jain Temple ➔ Udaipur',
    overview: 'The definitive royal Rajasthan circuit covering its three most iconic cities: Jaipur (Pink City), Jodhpur (Blue City), and Udaipur (City of Lakes), with an en-route stop at the 1,444-pillar Ranakpur marble temple.',
    highlights: [
      'En-route visit to world-famous Ranakpur Jain Temple',
      'Mehrangarh Fort and Jaswant Thada in Jodhpur',
      'Sunset cruise on Lake Pichola in Udaipur',
      'Amber Fort elephant/jeep ride in Jaipur',
      'Chauffeur-assisted custom boutique shopping experience'
    ],
    inclusions: ['Complete private vehicle logistics', 'Driver food and night halt', 'All road tolls and entry taxes'],
    exclusions: ['Hotel stay', 'Entry tickets'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', location: 'Jaipur', description: 'Pickup and transfer to hotel, evening light show at Amber Fort.', highlights: ['Amber Fort Light Show'] },
      { day: 2, title: 'Jaipur Royal Palaces', location: 'Jaipur', description: 'City Palace, Jantar Mantar, Hawa Mahal, and local bazaars.', highlights: ['City Palace', 'Hawa Mahal'] },
      { day: 3, title: 'Jaipur to Jodhpur via Ajmer/Pushkar', location: 'Jaipur to Jodhpur', description: 'Stop at Pushkar Lake & Brahma Temple, reach Jodhpur.', highlights: ['Pushkar Brahma Temple'] },
      { day: 4, title: 'Jodhpur Sightseeing', location: 'Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada, and blue city heritage walk.', highlights: ['Mehrangarh Fort', 'Blue Houses'] },
      { day: 5, title: 'Jodhpur to Udaipur via Ranakpur', location: 'Jodhpur to Udaipur', description: 'Drive through Aravalli hills, stop at Ranakpur’s intricately carved marble temple.', highlights: ['Ranakpur Temple'] },
      { day: 6, title: 'Udaipur City of Lakes', location: 'Udaipur', description: 'City Palace museum, Saheliyon-ki-Bari, Jagdish Temple, Lake Pichola.', highlights: ['Lake Pichola', 'City Palace'] },
      { day: 7, title: 'Udaipur Leisure & Sajjangarh', location: 'Udaipur', description: 'Monsoon Palace mountain sunset and Bagore Ki Haveli cultural dance.', highlights: ['Monsoon Palace', 'Bagore Ki Haveli'] },
      { day: 8, title: 'Departure from Udaipur', location: 'Udaipur', description: 'Drop-off at Udaipur Airport or train station.', highlights: ['Departure'] }
    ],
    featured: true,
    bestSeason: 'September to April'
  },
  {
    id: 'tour-9',
    slug: 'rajasthan-heritage-tour',
    title: 'Rajasthan Heritage Tour',
    subtitle: 'Comprehensive grand circuit of Rajputana castles, havelis, and desert sand dunes',
    category: 'Rajasthan',
    durationDays: 12,
    durationNights: 11,
    durationLabel: '12 Days / 11 Nights',
    startingPriceINR: 46000,
    startingPriceUSD: 575,
    rating: 4.98,
    reviewsCount: 165,
    primaryImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Mandawa (Shekhawati) ➔ Bikaner ➔ Jaisalmer ➔ Jodhpur ➔ Udaipur ➔ Jaipur ➔ Delhi',
    overview: 'The ultimate deep-dive across royal Rajasthan. Visit the open-air painted havelis of Shekhawati, the formidable Junagarh Fort in Bikaner, golden desert sand dunes in Jaisalmer, towering Mehrangarh in Jodhpur, shimmering lakes in Udaipur, and pink palaces of Jaipur.',
    highlights: [
      'Explore painted fresco havelis of Mandawa and Shekhawati',
      'Bikaner Junagarh Fort & National Camel Research Farm',
      'Desert camping in Jaisalmer with sunset camel safari',
      'Lake Pichola boat cruise in Udaipur',
      'Dedicated premium Innova Crysta or Tempo Traveller with veteran chauffeur'
    ],
    inclusions: ['Complete 12-day chauffeured transport', 'Desert camp package with dinner', 'All interstate permits, tolls, driver charges'],
    exclusions: ['Hotel accommodation', 'Monuments and safari entry fees'],
    itinerary: [
      { day: 1, title: 'Delhi to Mandawa (Shekhawati)', location: 'Mandawa', description: 'Drive to Mandawa, explore open-air fresco art havelis.', highlights: ['Fresco Havelis'] },
      { day: 2, title: 'Mandawa to Bikaner', location: 'Bikaner', description: 'Drive to Bikaner, visit Junagarh Fort and Karni Mata Temple.', highlights: ['Junagarh Fort'] },
      { day: 3, title: 'Bikaner to Jaisalmer', location: 'Jaisalmer', description: 'Scenic desert highway to Jaisalmer, the Golden City.', highlights: ['Desert Highway'] },
      { day: 4, title: 'Jaisalmer Fort & Sam Dunes', location: 'Jaisalmer', description: 'Sonar Qila living fort, Patwon Ki Haveli, and evening dune desert camp.', highlights: ['Sam Sand Dunes', 'Folk Music'] },
      { day: 5, title: 'Jaisalmer to Jodhpur', location: 'Jodhpur', description: 'Drive to Jodhpur, evening exploration around Ghanta Ghar.', highlights: ['Ghanta Ghar'] },
      { day: 6, title: 'Jodhpur Mehrangarh & Palaces', location: 'Jodhpur', description: 'Tour Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan.', highlights: ['Mehrangarh Fort'] },
      { day: 7, title: 'Jodhpur to Udaipur via Ranakpur', location: 'Udaipur', description: 'Stop at Ranakpur marble Jain temple, arrive in Udaipur.', highlights: ['Ranakpur Temple'] },
      { day: 8, title: 'Udaipur City of Lakes', location: 'Udaipur', description: 'City Palace, Saheliyon-ki-Bari, Lake Pichola sunset cruise.', highlights: ['Lake Pichola'] },
      { day: 9, title: 'Udaipur to Pushkar', location: 'Pushkar', description: 'Drive to sacred Pushkar, visit Brahma Temple and holy lake.', highlights: ['Pushkar Lake'] },
      { day: 10, title: 'Pushkar to Jaipur', location: 'Jaipur', description: 'Drive to Jaipur, evening visit to Birla Temple.', highlights: ['Birla Mandir'] },
      { day: 11, title: 'Jaipur Full Day Tour', location: 'Jaipur', description: 'Amber Fort, Hawa Mahal, City Palace, Jantar Mantar.', highlights: ['Amber Fort', 'Hawa Mahal'] },
      { day: 12, title: 'Jaipur to Delhi Departure', location: 'Delhi', description: 'Drive back to Delhi for scheduled departure flight/train.', highlights: ['Departure'] }
    ],
    featured: false,
    bestSeason: 'October to March'
  },
  {
    id: 'tour-10',
    slug: 'shimla-manali-tour',
    title: 'Shimla • Manali Tour',
    subtitle: 'Majestic Himalayan vistas, apple orchards, and snow-capped pine valleys',
    category: 'Himachal',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    startingPriceINR: 19500,
    startingPriceUSD: 245,
    rating: 4.92,
    reviewsCount: 420,
    primaryImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80', // Manali mountains
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi/Chandigarh ➔ Shimla ➔ Kufri ➔ Kullu Valley ➔ Manali ➔ Solang Valley ➔ Delhi',
    overview: 'Escape to the fresh crisp pine-scented air of Himachal Pradesh. Stroll colonial Mall Road in Shimla, witness Himalayan peaks in Kufri, and thrill in alpine adventures across Manali and the Solang Valley.',
    highlights: [
      'Stroll on Shimla’s iconic vehicle-free Mall Road & The Ridge',
      'Excursion to Kufri snow viewpoint and Himalayan Nature Park',
      'Solang Valley adventure sports: paragliding, zorbing, and quad biking',
      'Hadimba Devi Temple nestled in ancient deodar cedar forest',
      'White water river rafting in Kullu River Beas'
    ],
    inclusions: ['Dedicated mountain-expert hill driver with private AC vehicle (AC switched off on steep inclines)', 'All hill permits, parking fees, and driver stay', '24/7 mountain support'],
    exclusions: ['Adventure activities (paragliding/skiing)', 'Rohtang Pass special NGT green permit', 'Hotels'],
    itinerary: [
      { day: 1, title: 'Delhi/Chandigarh to Shimla', location: 'Shimla', description: 'Scenic drive ascending into Shivalik and Himalayan foothills. Check in to Shimla hotel.', highlights: ['Himalayan Foothills Drive'] },
      { day: 2, title: 'Shimla & Kufri Excursion', location: 'Shimla', description: 'Visit Kufri viewpoint, Jakhoo Temple, Christ Church, and evening walk on Mall Road.', highlights: ['Kufri', 'Mall Road', 'The Ridge'] },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', location: 'Manali', description: 'Drive alongside River Beas, visit Pandoh Dam, Hanogi Mata Temple, and Kullu Shawl weaving factory.', highlights: ['Pandoh Dam', 'Kullu Valley'] },
      { day: 4, title: 'Manali Local Sightseeing', location: 'Manali', description: 'Hadimba Devi Temple, Vashisht Hot Sulphur Springs, Tibetan Monastery, Old Manali cafe crawl.', highlights: ['Hadimba Temple', 'Vashisht Springs'] },
      { day: 5, title: 'Solang Valley & Atal Tunnel', location: 'Manali', description: 'Day trip to Solang Valley for paragliding and snow activities, drive through the engineering wonder Atal Tunnel.', highlights: ['Solang Valley', 'Atal Tunnel'] },
      { day: 6, title: 'Manali to Delhi/Chandigarh Departure', location: 'Return', description: 'Scenic return journey back to Chandigarh/Delhi airport.', highlights: ['Departure'] }
    ],
    featured: true,
    bestSeason: 'March to June (Summer) & Dec to Feb (Snow)'
  },
  {
    id: 'tour-11',
    slug: 'shimla-manali-kasol-tour',
    title: 'Shimla • Manali • Kasol Tour',
    subtitle: 'The Ultimate Himachal Trail: Colonial retreats, snow valleys, and Parvati hippie vibes',
    category: 'Himachal',
    durationDays: 7,
    durationNights: 6,
    durationLabel: '7 Days / 6 Nights',
    startingPriceINR: 23500,
    startingPriceUSD: 290,
    rating: 4.95,
    reviewsCount: 284,
    primaryImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=1200&q=80', // Kasol Parvati Valley
    galleryImages: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Shimla ➔ Manali ➔ Solang Valley ➔ Kasol (Parvati Valley) ➔ Delhi',
    overview: 'Combine the classic hill retreats of Shimla and Manali with the mystical bohemian charm of Kasol in the Parvati Valley. Savor Israeli cafes, crystal-clear glacial streams, and scenic mountain pine trails.',
    highlights: [
      'Kasol riverside cafes & walk along the Parvati River',
      'Atal Tunnel and Solang Valley snow activities',
      'Shimla Mall Road & Ridge colonial walking tour',
      'Manali Hadimba Temple and Old Manali vibe',
      'Experienced Himalayan chauffeur with clean mountain-certified cab'
    ],
    inclusions: ['Complete private cab transport', 'Tolls, parking, green tax, driver stay allowance', 'Emergency roadside support'],
    exclusions: ['Hotel bookings', 'Adventure gear and tickets'],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla', location: 'Shimla', description: 'Drive from Delhi to Shimla. Evening at leisure on Mall Road.', highlights: ['Mall Road'] },
      { day: 2, title: 'Kufri & Shimla Heritage', location: 'Shimla', description: 'Explore Kufri, Jakhoo Hill Hanuman statue, and Christ Church.', highlights: ['Kufri', 'Jakhoo'] },
      { day: 3, title: 'Shimla to Manali', location: 'Manali', description: 'Drive via Mandi and Kullu to Manali.', highlights: ['Kullu Valley'] },
      { day: 4, title: 'Manali Highlights & Solang', location: 'Manali', description: 'Hadimba Temple and Solang Valley adventure sports.', highlights: ['Solang Valley', 'Hadimba'] },
      { day: 5, title: 'Manali to Kasol (Parvati Valley)', location: 'Kasol', description: 'Scenic drive into the Parvati Valley. Visit Chalal village suspension bridge and riverside cafes.', highlights: ['Parvati River', 'Chalal Village'] },
      { day: 6, title: 'Kasol to Manikaran & Return Journey', location: 'Kasol/Manikaran', description: 'Visit sacred Manikaran Sahib Gurudwara hot springs, start return journey.', highlights: ['Manikaran Gurudwara'] },
      { day: 7, title: 'Arrival in Delhi', location: 'Delhi', description: 'Morning arrival in Delhi and transfer to hotel/airport.', highlights: ['Departure'] }
    ],
    featured: false,
    bestSeason: 'March to June & Sept to Nov'
  },
  {
    id: 'tour-12',
    slug: 'manali-kasol-manikaran-tour',
    title: 'Manali • Kasol • Manikaran Tour',
    subtitle: 'Nature, spirituality, hot springs, and serene alpine forests',
    category: 'Himachal',
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    startingPriceINR: 17500,
    startingPriceUSD: 215,
    rating: 4.9,
    reviewsCount: 310,
    primaryImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi/Chandigarh ➔ Manali ➔ Solang Valley ➔ Kasol ➔ Manikaran Sahib ➔ Delhi',
    overview: 'A focused, refreshing mountain getaway directly targeting the adrenaline of Manali and the soulful serenity of Kasol and Manikaran hot sulphur springs in the Parvati Valley.',
    highlights: [
      'Manikaran Sahib Gurudwara & natural healing hot sulphur springs',
      'Chalal pine forest trek along the turquoise Parvati River',
      'Solang Valley adventure sports and Atal Tunnel',
      'Old Manali apple orchards and bohemian cafes',
      'Comfortable private cab pickup directly from Delhi or Chandigarh'
    ],
    inclusions: ['Round-trip private cab', 'Driver expenses, hill permits, tolls, and fuel', 'Bottled mineral water'],
    exclusions: ['Hotels & food', 'Adventure fees'],
    itinerary: [
      { day: 1, title: 'Delhi/Chandigarh to Manali', location: 'Manali', description: 'Pickup and comfortable drive through the Himalayas to Manali.', highlights: ['Mountain Drive'] },
      { day: 2, title: 'Manali Local Sightseeing', location: 'Manali', description: 'Hadimba Temple, Vashisht hot springs, Club House, Mall Road.', highlights: ['Hadimba Temple', 'Mall Road'] },
      { day: 3, title: 'Solang Valley & Atal Tunnel Adventure', location: 'Solang Valley', description: 'Snow activities, paragliding in Solang, view through Atal Tunnel.', highlights: ['Solang Valley', 'Atal Tunnel'] },
      { day: 4, title: 'Manali to Kasol & Manikaran Sahib', location: 'Kasol / Manikaran', description: 'Drive to Kasol. Visit sacred Manikaran Sahib Gurudwara with natural boiling springs, explore Kasol market.', highlights: ['Manikaran Sahib', 'Kasol Cafes'] },
      { day: 5, title: 'Kasol to Delhi/Chandigarh Return', location: 'Return', description: 'Return drive back to Delhi or Chandigarh for onward travel.', highlights: ['Departure'] }
    ],
    featured: false,
    bestSeason: 'April to October & Winter Snow'
  },
  {
    id: 'tour-13',
    slug: 'rishikesh-haridwar-tour',
    title: 'Rishikesh • Haridwar Tour',
    subtitle: 'Sacred Ganga, divine evening Aarti, and the Yoga Capital of the World',
    category: 'Uttarakhand',
    durationDays: 3,
    durationNights: 2,
    durationLabel: '3 Days / 2 Nights',
    startingPriceINR: 9800,
    startingPriceUSD: 120,
    rating: 4.96,
    reviewsCount: 460,
    primaryImage: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=1200&q=80', // Rishikesh Ram Jhula
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Meerut Expressway ➔ Haridwar ➔ Rishikesh ➔ Delhi',
    overview: 'Cleanse your mind and spirit in Uttarakhand’s twin spiritual capitals. Witness the grand Ganga Aarti at Har Ki Pauri in Haridwar and explore meditation ashrams, suspension bridges, and optional river rafting in Rishikesh.',
    highlights: [
      'Mesmerizing evening Maha Ganga Aarti at Har Ki Pauri, Haridwar',
      'Walk across iconic Ram Jhula and Laxman Jhula suspension bridges in Rishikesh',
      'Parmarth Niketan Ashram and Beatles Ashram (Chaurasi Kutia)',
      'Optional Grade III white-water river rafting on the Ganges (12-16 km)',
      'Swift 4.5-hour private drive via the Delhi-Meerut Expressway'
    ],
    inclusions: ['Round-trip private AC sedan or SUV', 'All toll taxes, parking, and driver allowance', 'Complimentary bottled water'],
    exclusions: ['River rafting fees', 'Hotel accommodation', 'Temple special pooja tickets'],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Haridwar & Evening Ganga Aarti',
        location: 'Haridwar',
        description: 'Morning pickup from Delhi. Smooth highway drive to Haridwar. Visit Mansa Devi & Chandi Devi temples via ropeway. In the evening, witness the spiritual spectacle of thousands of floating brass lamps at Har Ki Pauri Aarti.',
        highlights: ['Har Ki Pauri', 'Mansa Devi Temple', 'Maha Aarti'],
        stayCity: 'Haridwar / Rishikesh'
      },
      {
        day: 2,
        title: 'Haridwar to Rishikesh: Ashrams & Adventure',
        location: 'Rishikesh',
        description: 'Short drive to Rishikesh. Walk across Ram Jhula and Janaki Jhula. Visit the Beatles Ashram, Triveni Ghat, and enjoy optional white-water rafting from Shivpuri. Evening Ganga Aarti at Parmarth Niketan.',
        highlights: ['Ram Jhula', 'Beatles Ashram', 'Parmarth Niketan Aarti', 'River Rafting'],
        stayCity: 'Rishikesh'
      },
      {
        day: 3,
        title: 'Sunrise Neer Garh Waterfall & Return to Delhi',
        location: 'Rishikesh to Delhi',
        description: 'Morning hike to Neer Garh turquoise waterfalls or yoga meditation session by the riverbank. Afternoon comfortable return drive back to Delhi.',
        highlights: ['Neer Garh Waterfall', 'Scenic Riverbank', 'Delhi Drop-off'],
        stayCity: 'Departure'
      }
    ],
    featured: true,
    bestSeason: 'September to May'
  },
  {
    id: 'tour-14',
    slug: 'rishikesh-haridwar-mussoorie-tour',
    title: 'Rishikesh • Haridwar • Mussoorie Tour',
    subtitle: 'Divinity meets the Queen of Hills: Sacred Ganga and misty Himalayan ridges',
    category: 'Uttarakhand',
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    startingPriceINR: 17200,
    startingPriceUSD: 215,
    rating: 4.93,
    reviewsCount: 375,
    primaryImage: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Haridwar ➔ Rishikesh ➔ Dehradun ➔ Mussoorie ➔ Delhi',
    overview: 'Experience the best of spiritual tranquility and refreshing colonial mountain charm. After experiencing the divine Ganga Aarti in Haridwar and Rishikesh, ascend to Mussoorie, the Queen of Hills, with misty views of the Doon Valley and snow peaks.',
    highlights: [
      'Har Ki Pauri evening Ganga Aarti in Haridwar',
      'Ram Jhula and yoga ashrams in Rishikesh',
      'Kempty Falls and Company Garden in Mussoorie',
      'Walk along Mussoorie’s scenic Mall Road & Gun Hill cable car',
      'Scenic mountain drive through Dehradun'
    ],
    inclusions: ['Complete 5-day private vehicle transport', 'Driver night stay, fuel, tolls, and parking', 'Concierge support'],
    exclusions: ['Hotel rooms', 'Entry & ropeway tickets'],
    itinerary: [
      { day: 1, title: 'Delhi to Haridwar', location: 'Haridwar', description: 'Drive from Delhi, check in, visit temples, and experience evening Har Ki Pauri Ganga Aarti.', highlights: ['Har Ki Pauri Aarti'] },
      { day: 2, title: 'Haridwar to Rishikesh', location: 'Rishikesh', description: 'Explore Laxman Jhula, Ram Jhula, Beatles Ashram, and Parmarth Niketan Aarti.', highlights: ['Ram Jhula', 'Beatles Ashram'] },
      { day: 3, title: 'Rishikesh to Mussoorie via Dehradun', location: 'Mussoorie', description: 'Ascend to the Queen of Hills. En route photo stop at Robber’s Cave. Evening walk on Mussoorie Mall Road.', highlights: ['Mall Road Mussoorie', 'Doon Valley View'] },
      { day: 4, title: 'Mussoorie Sightseeing & Kempty Falls', location: 'Mussoorie', description: 'Visit Kempty Falls, Cloud’s End, Company Garden, and Gun Hill sunset point.', highlights: ['Kempty Falls', 'Gun Hill'] },
      { day: 5, title: 'Mussoorie to Delhi Departure', location: 'Return', description: 'Morning leisure in the mountains, followed by return drive to Delhi.', highlights: ['Departure'] }
    ],
    featured: true,
    bestSeason: 'March to June & September to November'
  },
  {
    id: 'tour-15',
    slug: 'rishikesh-mussoorie-tour',
    title: 'Rishikesh • Mussoorie Tour',
    subtitle: 'The Perfect Weekend Escapade: Himalayan foothills, waterfalls, and yoga serenity',
    category: 'Uttarakhand',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    startingPriceINR: 13900,
    startingPriceUSD: 175,
    rating: 4.89,
    reviewsCount: 240,
    primaryImage: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi ➔ Rishikesh (Ganga & Ashrams) ➔ Mussoorie (Queen of Hills) ➔ Delhi',
    overview: 'A tailored 4-day mountain getaway pairing the peaceful riverbanks of Rishikesh with the pleasant cool heights of Mussoorie.',
    highlights: [
      'Rishikesh suspension bridges, cafes, and Ganga Aarti',
      'Scenic hill drive from Rishikesh to Mussoorie via Dehradun',
      'Kempty Falls and Camel’s Back Road nature walk',
      'Panoramic views of the snow-clad Great Himalayan Range',
      'Reliable private cab with experienced hill driver'
    ],
    inclusions: ['Private sanitized AC cab for 4 days', 'Tolls, parking, driver allowance'],
    exclusions: ['Hotel stays', 'Personal spending'],
    itinerary: [
      { day: 1, title: 'Delhi to Rishikesh', location: 'Rishikesh', description: 'Drive to Rishikesh, check in, visit Ram Jhula and attend evening Aarti at Triveni Ghat.', highlights: ['Triveni Ghat', 'Ram Jhula'] },
      { day: 2, title: 'Rishikesh to Mussoorie', location: 'Mussoorie', description: 'Morning visit to Neer Waterfall, drive to Mussoorie, evening on Mall Road.', highlights: ['Neer Waterfall', 'Mall Road'] },
      { day: 3, title: 'Mussoorie Hill Highlights', location: 'Mussoorie', description: 'Kempty Falls, Camel’s Back Road, Lal Tibba viewpoint.', highlights: ['Lal Tibba', 'Kempty Falls'] },
      { day: 4, title: 'Mussoorie to Delhi Return', location: 'Return', description: 'Scenic descent and drive back to Delhi for scheduled departure.', highlights: ['Departure'] }
    ],
    featured: false,
    bestSeason: 'Year Round'
  },
  {
    id: 'tour-16',
    slug: 'gwalior-orchha-khajuraho-tour',
    title: 'Gwalior • Orchha • Khajuraho Tour',
    subtitle: 'Central India’s UNESCO Temple Art, Fortresses, and Medieval Palaces',
    category: 'Rajasthan', // Central heritage
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    startingPriceINR: 21500,
    startingPriceUSD: 265,
    rating: 4.94,
    reviewsCount: 156,
    primaryImage: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=1200&q=80', // Medieval Khajuraho
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    ],
    route: 'Delhi/Agra ➔ Gwalior Fort ➔ Orchha Cenotaphs ➔ Khajuraho UNESCO Temples ➔ Jhansi/Delhi',
    overview: 'Discover the architectural masterpieces of Central India. Stand atop Gwalior Fort (“the pearl among fortresses”), explore the tranquil medieval palaces and Betwa river cenotaphs in Orchha, and marvel at the world-famous UNESCO erotic sculptures of Khajuraho temples.',
    highlights: [
      'UNESCO Western Group of Khajuraho Temples with intricate Nagara carvings',
      'Gwalior Fort, Jai Vilas Palace & Saas Bahu Temple',
      'Orchha medieval Jahangir Mahal & royal Chhatris along River Betwa',
      'Raneh Falls canyon and gharial sanctuary near Khajuraho',
      'Chauffeured inter-state cab service'
    ],
    inclusions: ['Dedicated private cab for full circuit', 'Inter-state road taxes, tolls, parking, driver allowances', 'Mineral water and luggage assistance'],
    exclusions: ['Temple entrance tickets and light & sound show tickets', 'Hotels and meals'],
    itinerary: [
      { day: 1, title: 'Delhi/Agra to Gwalior', location: 'Gwalior', description: 'Drive to historic Gwalior. Explore Gwalior Fort, Man Mandir Palace, and Jai Vilas Palace.', highlights: ['Gwalior Fort', 'Jai Vilas Palace'] },
      { day: 2, title: 'Gwalior to Orchha', location: 'Orchha', description: 'Drive to medieval Orchha on the banks of Betwa River. Visit Raja Mahal, Jahangir Mahal, and Ram Raja Temple.', highlights: ['Jahangir Mahal', 'Betwa Cenotaphs'] },
      { day: 3, title: 'Orchha to Khajuraho', location: 'Khajuraho', description: 'Drive to Khajuraho. Evening attend the cultural light and sound show at Western Group of Temples.', highlights: ['Khajuraho Light & Sound Show'] },
      { day: 4, title: 'Khajuraho World Heritage Temples', location: 'Khajuraho', description: 'Detailed guided tour of Western & Eastern Group of Temples (Kandariya Mahadeva, Lakshmana Temple), visit Raneh Falls.', highlights: ['Kandariya Mahadeva', 'Raneh Falls'] },
      { day: 5, title: 'Khajuraho Departure / Jhansi Transfer', location: 'Departure', description: 'Transfer to Jhansi Railway Station (for Gatimaan Express to Delhi) or Khajuraho Airport.', highlights: ['Departure Transfer'] }
    ],
    featured: false,
    bestSeason: 'October to March'
  }
];
