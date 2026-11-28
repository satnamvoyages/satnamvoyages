/**
 * Real photos of Satnam Voyages guests (public/client). Alt text describes only
 * what is visible: places are named only where they are recognisable in the
 * photo (Amber Fort, Ranakpur). Tags let pages show photos that match their route.
 */
export type PhotoTag =
  | 'airport' // pickups and drops at the airport
  | 'welcome' // garland welcomes
  | 'van' // groups with the Tempo Traveller
  | 'guests' // general group and selfie shots
  | 'jaipur'
  | 'ranakpur'
  | 'desert'
  | 'gurdwara'
  | 'yoga';

export interface ClientMoment {
  id: string;
  image: string;
  alt: string;
  tags: PhotoTag[];
}

const RAW: [number, string, PhotoTag[]][] = [
  [1, 'Guests taking a selfie with their Satnam Voyages driver on a hillside walk', ['guests']],
  [2, 'A group of guests with their driver beside the Satnam Voyages Tempo Traveller at a hotel entrance', ['van']],
  [3, 'Guests lined up with their driver in front of their Tempo Traveller before setting off', ['van']],
  // 4 is the same shot as 2, so it is left out of the rotation.
  [5, 'Guests with their turbaned Satnam Voyages driver beside the tour minibus', ['van', 'guests']],
  [6, 'Guests with their driver at the start of a day of sightseeing', ['guests']],
  [7, 'Guests wearing head coverings with their driver at the entrance of a Sikh gurdwara', ['gurdwara', 'guests']],
  [8, 'Guests welcomed with marigold garlands at their hotel', ['welcome']],
  [9, 'Two guests with their driver next to the Tempo Traveller outside their hotel', ['van']],
  [10, 'Guests sharing a selfie with their Satnam Voyages driver', ['guests']],
  [11, 'Guests with their driver at Maota Lake below Amber Fort, Jaipur', ['jaipur', 'guests']],
  [12, 'A guest with his Satnam Voyages driver in a hotel garden', ['guests']],
  [13, 'Guests with luggage being met by their driver on arrival', ['airport', 'guests']],
  [14, 'A group of guests with their driver in front of the Tempo Traveller', ['van']],
  [15, 'A guest couple with their driver outside the airport terminal', ['airport']],
  [16, 'A group of guests with their driver beside the Tempo Traveller on a sunny morning', ['van']],
  [17, 'Guests met by their Satnam Voyages driver at the airport', ['airport']],
  [18, 'Guests welcomed with marigold garlands on arrival at the airport', ['welcome', 'airport']],
  [19, 'A group of guests with their luggage met by their driver at the airport', ['airport']],
  [20, 'A cheering group of guests with their drivers beside the Tempo Traveller', ['van', 'guests']],
  [21, 'A guest with her driver beside the car at the start of her trip', ['airport', 'guests']],
  [22, 'Guests with their driver at the Ranakpur Jain temple in Rajasthan', ['ranakpur', 'guests']],
  [23, 'Guests taking a selfie with their driver during a walk', ['guests']],
  [24, 'Guests sitting on the steps of a white-marble Sikh gurdwara', ['gurdwara']],
  [25, 'Guests and their driver at a restaurant stop during the tour', ['guests']],
  [26, 'A guest at a yoga session arranged during her India tour', ['yoga']],
  [27, 'A guest smiling for a selfie with her driver at the airport', ['airport']],
  [28, 'A guest met by his Satnam Voyages driver at the airport in the evening', ['airport']],
  [29, 'A guest taking a selfie with her driver beside the car', ['guests', 'airport']],
  [30, 'A group of guests sharing a selfie with their driver', ['guests']],
  [31, 'A roadside tea stop with a local villager in the Rajasthan desert', ['desert']],
];

export const CLIENT_MOMENTS: ClientMoment[] = RAW.map(([n, alt, tags]) => ({
  id: `cm-${n}`,
  image: `/client/client(${n}).jpeg`,
  alt,
  tags,
}));

/** Small stable hash so each page gets its own fill photos, the same on every build. */
function seedOf(key: string): number {
  let h = 0;
  for (const ch of key) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/**
 * Photos for one page: ones matching the page's tags first, then a rotation
 * through the rest that depends on `key`, so pages don't all show the same three.
 */
const PLACE_TAGS: PhotoTag[] = ['jaipur', 'ranakpur', 'desert', 'gurdwara', 'yoga'];

export function pickClientPhotos(tags: PhotoTag[], key: string, count = 3, maxThemeMatches = 1): ClientMoment[] {
  const seed = seedOf(key);
  const rotate = <T,>(arr: T[]) => {
    const s = arr.length ? seed % arr.length : 0;
    return [...arr.slice(s), ...arr.slice(0, s)];
  };
  const hits = (m: ClientMoment, pool: PhotoTag[]) => m.tags.some((t) => tags.includes(t) && pool.includes(t));
  // 1) photos of the page's actual places, 2) a few matching its theme (airport, van...), 3) a rotation of the rest.
  const place = rotate(CLIENT_MOMENTS.filter((m) => hits(m, PLACE_TAGS)));
  const theme = rotate(
    CLIENT_MOMENTS.filter((m) => !place.includes(m) && hits(m, tags.filter((t) => !PLACE_TAGS.includes(t))))
  ).slice(0, maxThemeMatches);
  // Place-specific photos (e.g. Amber Fort) only appear on pages about that place.
  const rest = rotate(
    CLIENT_MOMENTS.filter((m) => !place.includes(m) && !theme.includes(m) && !m.tags.some((t) => PLACE_TAGS.includes(t)))
  );
  return [...place, ...theme, ...rest].slice(0, count);
}

/** Tags that fit a page, read from its own text (route, title, itinerary). */
export function tagsFromText(text: string): PhotoTag[] {
  const t = text.toLowerCase();
  const tags: PhotoTag[] = [];
  if (/jaipur|amber/.test(t)) tags.push('jaipur');
  // Ranakpur is the usual stop on the Jodhpur–Udaipur drive.
  if (/ranakpur|udaipur/.test(t)) tags.push('ranakpur');
  if (/jaisalmer|thar|desert/.test(t)) tags.push('desert');
  if (/amritsar|gurdwara|golden temple/.test(t)) tags.push('gurdwara');
  if (/rishikesh|yoga/.test(t)) tags.push('yoga');
  if (/airport/.test(t)) tags.push('airport');
  if (/tempo traveller|group/.test(t)) tags.push('van');
  return tags;
}

/** Path of guest photo n (public/client/client(n).jpeg). */
export const guestPhoto = (n: number) => `/client/client(${n}).jpeg`;

/** Real guest photo at Maota Lake below Amber Fort; the hero for Jaipur-named tours. */
export const JAIPUR_GUEST_HERO = guestPhoto(11);

/** Descriptive alt for an image if it is one of our guest photos, otherwise the fallback. */
export function clientPhotoAlt(src: string, fallback: string): string {
  return CLIENT_MOMENTS.find((m) => m.image === src)?.alt ?? fallback;
}
