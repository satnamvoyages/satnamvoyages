import { FAQItem, ReviewItem } from '../types';

export const GLOBAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Why choose Satnam Voyages for private tours and cabs in India?',
    answer: 'Satnam Voyages is a government-approved Indian travel agency and premier fleet operator with over 15 years of excellence. We offer 100% verified, English-speaking chauffeurs, modern GPS-tracked air-conditioned vehicles (Dzire, Innova Crysta, Tempo Travellers), transparent all-inclusive fares with zero hidden charges, and dedicated 24/7 round-the-clock concierge trip support.'
  },
  {
    id: 'faq-2',
    category: 'Cabs',
    question: 'How are outstation cab fares calculated at Satnam Voyages?',
    answer: 'Outstation cab fares are based on transparent per-kilometer rates (e.g., ₹11/km for Dzire/Etios, ₹17/km for Innova Crysta) with a standard daily minimum of 250 km. Fares include fuel, driver allowances, and standard taxes. Toll taxes and state border entry taxes are either bundled into our fixed quote or billed at actual official fastag receipts.'
  },
  {
    id: 'faq-3',
    category: 'Tours',
    question: 'Can tour packages like the Golden Triangle be customized?',
    answer: 'Yes, absolutely! Every itinerary at Satnam Voyages is 100% customizable. You can adjust the trip duration, add destinations (such as Ranthambore Tiger Reserve or Udaipur), select preferred accommodation categories (Standard 3-star, Deluxe 4-star, or Heritage 5-star Palaces), and select your desired vehicle category.'
  },
  {
    id: 'faq-4',
    category: 'Cabs',
    question: 'Are drivers verified and fluent in English?',
    answer: 'Yes. All our chauffeurs undergo rigorous background checks, police verification, and defensive highway driving certification. They are well-mannered, non-smoking, conversant in English and Hindi, and knowledgeable about local monument shortcuts, safe clean roadside eateries, and rest stops.'
  },
  {
    id: 'faq-5',
    category: 'Payment',
    question: 'What is the booking and payment process for international tourists?',
    answer: 'You can book your cab or tour package online via our website or instant WhatsApp concierge. We accept major international credit cards, bank wire transfers, UPI, and cash on arrival. A modest 20-25% deposit confirms your reservation, with the balance payable upon your arrival in India.'
  },
  {
    id: 'faq-6',
    category: 'Tours',
    question: 'What is the best time of year to take the Golden Triangle or Rajasthan tour?',
    answer: 'The ideal time to visit Delhi, Agra, and Rajasthan is between October and late March, when temperatures range between 12°C and 26°C with bright sunny days. For hill stations like Shimla and Manali, summer (April to June) offers cool escapes, while December to February is paradise for snow lovers.'
  },
  {
    id: 'faq-7',
    category: 'Cabs',
    question: 'Does Satnam Voyages provide airport pickup and drop at Delhi IGI Airport?',
    answer: 'Yes, we provide 24/7 airport transfers from Terminal 1, Terminal 2, and Terminal 3 of Indira Gandhi International (IGI) Airport in New Delhi. Your chauffeur greets you with a personalized name-board at the arrivals exit gate and assists with all your luggage.'
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'David & Sarah Jenkins',
    location: 'London',
    country: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'February 2026',
    tourName: 'Golden Triangle Tour 6D/5N',
    comment: 'Satnam Voyages provided an unforgettable experience through Delhi, Agra, and Jaipur! Our driver, Mr. Harpreet, was punctual, courteous, and drove with great care on Indian highways. The Innova Crysta was spotless every single morning with cold water bottles ready. Truly 5-star service!',
    source: 'Google Reviews',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Michael & Elena Rossi',
    location: 'Milan',
    country: 'Italy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'January 2026',
    tourName: 'Rajasthan Heritage Circuit',
    comment: 'We spent 10 days traversing Jaipur, Jodhpur, and Udaipur. Booking directly on WhatsApp with Satnam Voyages was smooth and immediate. The driver was knowledgeable about the best photo spots and authentic Rajasthani thali restaurants. Worth every penny!',
    source: 'TripAdvisor',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Pooja & Vikram Sharma',
    location: 'Bangalore',
    country: 'India',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'December 2025',
    tourName: 'Shimla Manali 6D/5N',
    comment: 'Hired an Innova Crysta for our family trip to Manali and Solang. Driving in snow and mountain hairpins requires expertise, and our driver was an absolute mountain maestro. Zero motion sickness and complete safety throughout.',
    source: 'Google Reviews',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Dr. Katherine Wood',
    location: 'Sydney',
    country: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'November 2025',
    tourName: 'Same Day Delhi to Agra Tour',
    comment: 'As a solo female traveler visiting India for the first time, safety was my utmost priority. Satnam Voyages coordinated everything seamlessly from my early 6 AM hotel pickup to Taj Mahal skip-the-line entrance. Highly recommended for international travelers!',
    source: 'Google Reviews',
    verified: true
  }
];
