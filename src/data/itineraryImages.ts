// High quality curated destination & day-by-day photos for all tour itineraries

export const ITINERARY_DAY_PHOTOS: Record<string, string> = {
  // Delhi
  'delhi-arrival': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80', // India gate
  'qutub-minar': 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', // Qutub Minar
  'old-delhi': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', // Jama Masjid / Red Fort
  'chandni-chowk': 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80',

  // Agra
  'taj-mahal': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80', // Taj Mahal
  'agra-fort': 'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=800&q=80', // Agra Fort
  'fatehpur-sikri': 'https://images.unsplash.com/photo-1609946850853-ecabf595b138?auto=format&fit=crop&w=800&q=80', // Buland Darwaza

  // Jaipur
  'amber-fort': 'https://images.unsplash.com/photo-1603288967756-3c72b2207b92?auto=format&fit=crop&w=800&q=80', // Amber Fort
  'hawa-mahal': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', // Hawa Mahal
  'jal-mahal': 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80', // Jal Mahal
  'city-palace-jaipur': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',

  // Jodhpur
  'mehrangarh-fort': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', // Mehrangarh
  'jaswant-thada': 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
  'blue-city': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',

  // Jaisalmer
  'jaisalmer-fort': 'https://images.unsplash.com/photo-1578321272176-b7bbc067950a?auto=format&fit=crop&w=800&q=80',
  'sam-sand-dunes': 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80', // Dunes camel

  // Udaipur
  'lake-pichola': 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80', // Pichola
  'city-palace-udaipur': 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',

  // Ranthambore
  'ranthambore-tiger': 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80', // Tiger
  'ranthambore-fort': 'https://images.unsplash.com/photo-1579893922384-3c662886f457?auto=format&fit=crop&w=800&q=80',

  // Himachal
  'shimla-ridge': 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80', // Shimla Church
  'kufri-snow': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', // Kufri
  'manali-solang': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', // Solang Valley
  'rohtang-pass': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'kasol-parvati': 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=800&q=80', // Parvati River
  'manikaran-springs': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',

  // Uttarakhand
  'rishikesh-aarti': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80', // Ganga Aarti
  'haridwar-ghats': 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80', // Har Ki Pauri
  'mussoorie-hills': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Hills

  // Bundelkhand Heritage
  'gwalior-fort': 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80', // Gwalior
  'orchha-palace': 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', // Orchha
  'khajuraho-temples': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80', // Khajuraho

  // General fallback
  'default-heritage': 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
};

export function getPhotoForItineraryDay(location: string, title: string, dayNumber: number): string {
  const text = `${location} ${title}`.toLowerCase();

  if (text.includes('taj mahal') || text.includes('agra')) return ITINERARY_DAY_PHOTOS['taj-mahal'];
  if (text.includes('qutub') || text.includes('delhi arrival')) return ITINERARY_DAY_PHOTOS['qutub-minar'];
  if (text.includes('old delhi') || text.includes('chandni chowk') || text.includes('jama masjid')) return ITINERARY_DAY_PHOTOS['chandni-chowk'];
  if (text.includes('fatehpur sikri')) return ITINERARY_DAY_PHOTOS['fatehpur-sikri'];
  if (text.includes('amber fort')) return ITINERARY_DAY_PHOTOS['amber-fort'];
  if (text.includes('hawa mahal') || text.includes('city palace') && text.includes('jaipur')) return ITINERARY_DAY_PHOTOS['hawa-mahal'];
  if (text.includes('jal mahal') || text.includes('nahargarh')) return ITINERARY_DAY_PHOTOS['jal-mahal'];
  if (text.includes('mehrangarh') || text.includes('jodhpur')) return ITINERARY_DAY_PHOTOS['mehrangarh-fort'];
  if (text.includes('jaisalmer') || text.includes('sand dunes') || text.includes('sam')) return ITINERARY_DAY_PHOTOS['sam-sand-dunes'];
  if (text.includes('pichola') || text.includes('udaipur')) return ITINERARY_DAY_PHOTOS['lake-pichola'];
  if (text.includes('ranthambore') || text.includes('safari') || text.includes('tiger')) return ITINERARY_DAY_PHOTOS['ranthambore-tiger'];
  if (text.includes('shimla') || text.includes('kufri')) return ITINERARY_DAY_PHOTOS['shimla-ridge'];
  if (text.includes('manali') || text.includes('solang') || text.includes('rohtang')) return ITINERARY_DAY_PHOTOS['manali-solang'];
  if (text.includes('kasol') || text.includes('manikaran') || text.includes('parvati')) return ITINERARY_DAY_PHOTOS['kasol-parvati'];
  if (text.includes('rishikesh') || text.includes('ganga') || text.includes('aarti')) return ITINERARY_DAY_PHOTOS['rishikesh-aarti'];
  if (text.includes('haridwar') || text.includes('har ki pauri')) return ITINERARY_DAY_PHOTOS['haridwar-ghats'];
  if (text.includes('mussoorie') || text.includes('kempty')) return ITINERARY_DAY_PHOTOS['mussoorie-hills'];
  if (text.includes('gwalior')) return ITINERARY_DAY_PHOTOS['gwalior-fort'];
  if (text.includes('orchha')) return ITINERARY_DAY_PHOTOS['orchha-palace'];
  if (text.includes('khajuraho')) return ITINERARY_DAY_PHOTOS['khajuraho-temples'];

  // Fallback by day rotation
  const fallbacks = [
    ITINERARY_DAY_PHOTOS['taj-mahal'],
    ITINERARY_DAY_PHOTOS['amber-fort'],
    ITINERARY_DAY_PHOTOS['lake-pichola'],
    ITINERARY_DAY_PHOTOS['shimla-ridge'],
    ITINERARY_DAY_PHOTOS['rishikesh-aarti'],
    ITINERARY_DAY_PHOTOS['hawa-mahal']
  ];
  return fallbacks[(dayNumber - 1) % fallbacks.length];
}

export function getBentoGalleryPhotos(primaryImage: string, galleryImages: string[]): string[] {
  const set = new Set<string>();
  if (primaryImage) set.add(primaryImage);
  galleryImages.forEach(img => set.add(img));

  // Add high quality contextual extras if less than 5
  const backups = [
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1603288967756-3c72b2207b92?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80'
  ];

  for (const b of backups) {
    if (set.size >= 5) break;
    set.add(b);
  }

  return Array.from(set);
}
