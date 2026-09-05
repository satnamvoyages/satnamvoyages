import { DestinationRegion } from '../types';

export const DESTINATIONS: Record<string, DestinationRegion> = {
  rajasthan: {
    id: 'dest-rajasthan',
    slug: 'rajasthan',
    name: 'Rajasthan — The Land of Kings',
    tagline: 'Imperial Fortresses, Shimmering Lakes, Golden Sand Dunes & Royal Hospitality',
    description: 'Immerse yourself in India’s proudest royal state. From the pink sandstone facades of Jaipur and the indigo maze of Jodhpur to the fairy-tale water palaces of Udaipur and the endless rippling sand dunes of the Thar Desert in Jaisalmer, Rajasthan is an evocative kaleidoscope of color, Rajput valor, and timeless heritage.',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80', // Amber Fort
    bestSeason: 'October to March (Pleasant sunny days, cool atmospheric nights)',
    cabTravelTimeFromDelhi: '3.5 - 4.5 hours via Delhi-Mumbai Expressway to Jaipur',
    keyCities: [
      {
        name: 'Jaipur',
        tagline: 'The Pink City & UNESCO World Heritage Capital',
        image: 'https://images.unsplash.com/photo-1603288940384-824b423c72b2?auto=format&fit=crop&w=800&q=80',
        attractions: ['Amber Fort & Palace', 'Hawa Mahal (Palace of Winds)', 'City Palace & Museum', 'Jantar Mantar Royal Observatory', 'Jal Mahal (Water Palace)', 'Nahargarh Fort Sunset View']
      },
      {
        name: 'Jodhpur',
        tagline: 'The Sun City & The Legendary Blue Haven',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        attractions: ['Mehrangarh Fort perched on cliff', 'Jaswant Thada white marble memorial', 'Umaid Bhawan Palace', 'Old Blue City walking tour', 'Ghanta Ghar Clock Tower & Sadar Bazaar']
      },
      {
        name: 'Jaisalmer',
        tagline: 'The Golden City in the Heart of the Thar Desert',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        attractions: ['Sonar Qila (Living Golden Fort)', 'Patwon Ki Haveli carved balconies', 'Sam Sand Dunes camel & jeep safari', 'Kuldhara Haunted Heritage Village', 'Gadisar Lake boating']
      },
      {
        name: 'Udaipur',
        tagline: 'The City of Lakes & Venice of the East',
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        attractions: ['Grand City Palace on Lake Pichola', 'Lake Pichola sunset boat cruise to Jag Mandir', 'Jagdish Temple', 'Saheliyon-ki-Bari (Courtyard of Maidens)', 'Sajjangarh Monsoon Palace']
      },
      {
        name: 'Ranthambore',
        tagline: 'Wild Realm of the Royal Bengal Tiger',
        image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
        attractions: ['Open-top Gypsy Jungle Safaris across 10 zones', '10th-century UNESCO Ranthambore Fort', 'Padam Talao Lake & Jogi Mahal', 'Trinetra Ganesha Temple']
      }
    ],
    associatedPackageSlugs: [
      'golden-triangle-tour',
      'golden-triangle-ranthambore',
      'same-day-delhi-jaipur-tour',
      'delhi-agra-jaipur-udaipur-tour',
      'jaipur-jodhpur-jaisalmer-tour',
      'jaipur-jodhpur-udaipur-tour',
      'rajasthan-heritage-tour'
    ]
  },
  himachal: {
    id: 'dest-himachal',
    slug: 'himachal',
    name: 'Himachal Pradesh — Abode of Snow',
    tagline: 'Pine-Clad Slopes, Alpine Meadows, Roaring Rivers & Colonial Hill Stations',
    description: 'Breathe in the pure pine and deodar forest breezes of the Himalayas. Himachal Pradesh invites you to wander British colonial promenades in Shimla, conquer the snow valleys and thrilling passes of Manali, and unwind in the bohemian riverside tranquility of Kasol and Manikaran hot springs.',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80', // Manali mountains
    bestSeason: 'March to June (Pleasant weather) & December to February (Heavy snow & skiing)',
    cabTravelTimeFromDelhi: '7.5 hours to Shimla, 11-12 hours to Manali',
    keyCities: [
      {
        name: 'Shimla',
        tagline: 'The Queen of Hills & British Summer Capital',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        attractions: ['The Ridge & Historic Neo-Gothic Christ Church', 'Vehicle-free Mall Road strolling & Lakkar Bazaar', 'Kufri snow viewpoints & apple orchards', 'Jakhoo Hill & 108-ft Lord Hanuman Statue', 'Viceregal Lodge (Indian Institute of Advanced Study)']
      },
      {
        name: 'Manali',
        tagline: 'Adventure Hub in the Beas River Valley',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        attractions: ['Solang Valley paragliding, skiing & quad biking', 'Atal Tunnel engineering marvel to Lahaul Valley', 'Ancient Hadimba Devi wooden pagoda temple', 'Vashisht hot natural sulphur baths', 'Old Manali cafes and wooden houses']
      },
      {
        name: 'Kasol & Manikaran',
        tagline: 'Mystical Parvati Valley & Sacred Boiling Springs',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=800&q=80',
        attractions: ['Riverside chill-out spots along emerald Parvati River', 'Chalal Village suspension bridge pine hike', 'Manikaran Sahib sacred Sikh Gurudwara', 'Natural geothermally boiling langar springs', 'Tosh & Malana village gateway']
      }
    ],
    associatedPackageSlugs: [
      'shimla-manali-tour',
      'shimla-manali-kasol-tour',
      'manali-kasol-manikaran-tour'
    ]
  },
  uttarakhand: {
    id: 'dest-uttarakhand',
    slug: 'uttarakhand',
    name: 'Uttarakhand — Devbhoomi (Land of the Gods)',
    tagline: 'Holy Ganga Waters, Sacred Temple Ghats, Yoga Sanctuaries & Misty Hill Retreats',
    description: 'Recharge your soul where the sacred river Ganges descends onto the plains. Uttarakhand blends the unmatched spiritual vibration of Haridwar’s evening Aarti and Rishikesh’s yoga ashrams with the breezy ridge-top vistas of Mussoorie, Queen of Hills.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=1600&q=80', // Rishikesh Ram Jhula
    bestSeason: 'September to November & March to June (Pleasant weather, ideal for rafting & sightseeing)',
    cabTravelTimeFromDelhi: '4 - 4.5 hours via Delhi-Meerut Expressway to Haridwar',
    keyCities: [
      {
        name: 'Rishikesh',
        tagline: 'Yoga Capital of the World & Gateway to Himalayas',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4293f9c?auto=format&fit=crop&w=800&q=80',
        attractions: ['Ram Jhula & Janaki Jhula pedestrian suspension bridges', 'Maha Ganga Aarti at Parmarth Niketan & Triveni Ghat', 'The Beatles Ashram (Chaurasi Kutia)', 'Grade III-IV White Water River Rafting (Shivpuri to Marine Drive)', 'Neer Garh Waterfall nature hike']
      },
      {
        name: 'Haridwar',
        tagline: 'Gateway to the Divine & Sacred Kumbh City',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        attractions: ['Har Ki Pauri world-famous evening Ganga Aarti', 'Mansa Devi & Chandi Devi hilltop temples via ropeway (Udan Khatola)', 'Maya Devi Temple & Daksh Mahadev Temple', 'Bara Bazaar holy souvenir & spice market']
      },
      {
        name: 'Mussoorie',
        tagline: 'The Queen of Hills with Panoramic Valley Vistas',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        attractions: ['Kempty Falls cascading waters', 'Mussoorie Mall Road & Kulri Bazaar stroll', 'Gun Hill cable car for Great Himalayan peaks view', 'Camel’s Back Road walking trail', 'Company Garden flower conservatory']
      }
    ],
    associatedPackageSlugs: [
      'rishikesh-haridwar-tour',
      'rishikesh-haridwar-mussoorie-tour',
      'rishikesh-mussoorie-tour'
    ]
  }
};
