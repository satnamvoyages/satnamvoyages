export interface ClientMoment {
  id: string;
  clientName: string;
  clientCountry: string;
  clientFlag: string;
  avatar: string;
  tourName: string;
  tourSlug: string;
  destination: string;
  travelDate: string;
  rating: number;
  image: string;
  caption: string;
  reviewQuote: string;
  chauffeurName: string;
  vehicleType: string;
  category: 'couples' | 'families' | 'solo' | 'chauffeurs' | 'culture';
}

export const CLIENT_MOMENTS: ClientMoment[] = [
  {
    id: 'cm-1',
    clientName: 'David & Sarah Miller',
    clientCountry: 'United Kingdom',
    clientFlag: '🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tourName: 'Golden Triangle Tour',
    tourSlug: 'golden-triangle-tour',
    destination: 'Agra, Uttar Pradesh',
    travelDate: 'February 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sunrise at the Taj Mahal — unforgettable morning with our driver Rajesh who ensured we arrived before the crowds!',
    reviewQuote: 'Rajesh from Satnam Voyages was phenomenal. Punctual, respectful, and kept the Innova Crysta impeccably clean every morning with chilled bottled water.',
    chauffeurName: 'Rajesh Kumar',
    vehicleType: 'Toyota Innova Crysta',
    category: 'couples'
  },
  {
    id: 'cm-2',
    clientName: 'Michael & Elena Vance',
    clientCountry: 'United States',
    clientFlag: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    tourName: 'Rajasthan Heritage Tour',
    tourSlug: 'rajasthan-heritage-tour',
    destination: 'Amber Fort, Jaipur',
    travelDate: 'January 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1603288967756-3c72b2207b92?auto=format&fit=crop&w=1200&q=80',
    caption: 'Reaching the heights of Amber Fort overlooking Maota Lake in Jaipur. Incredible architectural wonders.',
    reviewQuote: 'Booking our 8-day Rajasthan circuit through Satnam Voyages was the best decision of our trip. Transparent pricing, zero hidden charges, and royal treatment.',
    chauffeurName: 'Vikram Singh',
    vehicleType: 'Toyota Innova Crysta',
    category: 'couples'
  },
  {
    id: 'cm-3',
    clientName: 'The Harrison Family',
    clientCountry: 'Australia',
    clientFlag: '🇦🇺',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    tourName: 'Shimla • Manali Tour',
    tourSlug: 'shimla-manali-tour',
    destination: 'Solang Valley, Manali',
    travelDate: 'December 2025',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    caption: 'Our kids had their first snowfall experience in Solang Valley! Safe mountain driving across the hilly curves.',
    reviewQuote: 'Traveling with two young kids in Himachal roads can be daunting, but driver Harpreet drove with utmost safety and patience. Highly recommended for families!',
    chauffeurName: 'Harpreet Singh',
    vehicleType: '12-Seater Luxury Tempo Traveller',
    category: 'families'
  },
  {
    id: 'cm-4',
    clientName: 'Sophie & Camille Laurent',
    clientCountry: 'France',
    clientFlag: '🇫🇷',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    tourName: 'Rishikesh • Haridwar Tour',
    tourSlug: 'rishikesh-haridwar-tour',
    destination: 'Triveni Ghat, Rishikesh',
    travelDate: 'January 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    caption: 'Witnessing the soul-stirring Ganga Aarti ceremony at Parmarth Niketan. Truly spiritual atmosphere.',
    reviewQuote: 'The flexibility to stop for photos, roadside masala chai, and local temple visits made this trip authentically magical. Satnam Voyages took care of every detail.',
    chauffeurName: 'Rameshwar Dutt',
    vehicleType: 'Maruti Suzuki Dzire',
    category: 'culture'
  },
  {
    id: 'cm-5',
    clientName: 'Jonas & Greta Weber',
    clientCountry: 'Germany',
    clientFlag: '🇩🇪',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    tourName: 'Jaipur • Jodhpur • Udaipur Tour',
    tourSlug: 'jaipur-jodhpur-udaipur-tour',
    destination: 'Lake Pichola, Udaipur',
    travelDate: 'November 2025',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sunset boat cruise on Lake Pichola with the white marble Jag Mandir illuminated in the backdrop.',
    reviewQuote: 'As photographers, good lighting and timely transfers were essential for us. Satnam Voyages coordinated every pickup with German-level precision!',
    chauffeurName: 'Kuldeep Singh',
    vehicleType: 'Toyota Innova Crysta',
    category: 'couples'
  },
  {
    id: 'cm-6',
    clientName: 'Arthur Pendelton',
    clientCountry: 'Canada',
    clientFlag: '🇨🇦',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    tourName: 'Golden Triangle + Ranthambore',
    tourSlug: 'golden-triangle-ranthambore',
    destination: 'Ranthambore National Park',
    travelDate: 'January 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spotted a majestic royal Bengal tigress during our Zone 3 morning gypsy safari! Lifetime bucket list check.',
    reviewQuote: 'From airport pickup in Delhi to seamless hotel check-ins and the thrilling Ranthambore safaris, everything was top tier.',
    chauffeurName: 'Mohan Lal',
    vehicleType: 'Toyota Innova Crysta',
    category: 'solo'
  },
  {
    id: 'cm-7',
    clientName: 'The Mehta & Shah Family Group',
    clientCountry: 'Singapore',
    clientFlag: '🇸🇬',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    tourName: 'Delhi • Agra • Jaipur • Udaipur Tour',
    tourSlug: 'delhi-agra-jaipur-udaipur-tour',
    destination: 'Hawa Mahal, Jaipur',
    travelDate: 'December 2025',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    caption: 'Group photo in front of the iconic Palace of Winds before shopping for Jaipuri quilts and block prints.',
    reviewQuote: '10 of us traveled together in the luxury 12-seater Maharaja Tempo Traveller. Pushback seats, strong air conditioning, and a delightful chauffeur.',
    chauffeurName: 'Gurmukh Singh',
    vehicleType: '12-Seater Luxury Tempo Traveller',
    category: 'families'
  },
  {
    id: 'cm-8',
    clientName: 'Lucas Rossi',
    clientCountry: 'Italy',
    clientFlag: '🇮🇹',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    tourName: 'Jaipur • Jodhpur • Jaisalmer Tour',
    tourSlug: 'jaipur-jodhpur-jaisalmer-tour',
    destination: 'Sam Sand Dunes, Jaisalmer',
    travelDate: 'February 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=80',
    caption: 'Thar desert sunset and Rajasthani folk dance around the campfire in Jaisalmer. Pure magic.',
    reviewQuote: 'Traveling solo in India was so comfortable thanks to Satnam Voyages. My driver Om Prakash treated me like family and gave great local tips.',
    chauffeurName: 'Om Prakash',
    vehicleType: 'Maruti Suzuki Dzire',
    category: 'solo'
  },
  {
    id: 'cm-9',
    clientName: 'Our Chauffeur Rajesh with Guests',
    clientCountry: 'Satnam Voyages Fleet',
    clientFlag: '🇮🇳',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    tourName: 'Delhi Outstation Fleet',
    tourSlug: 'cabs',
    destination: 'Yamuna Expressway Rest Stop',
    travelDate: 'February 2026',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sanitized vehicles, uniformed chauffeurs, and smooth highway transit on every outstation journey.',
    reviewQuote: 'All Satnam Voyages drivers undergo police background verification, regular vehicle fitness audits, and etiquette training in English.',
    chauffeurName: 'Fleet Team',
    vehicleType: 'Innova Crysta & Dzire Sedans',
    category: 'chauffeurs'
  }
];
