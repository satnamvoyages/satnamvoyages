import type { DestinationRegion, TourPackage } from '../types';
import { ALL_TOURS, DRIVE_LEGS, tourVisitsAgra } from './toursData';

/** Tour category that belongs to each destination hub. */
const REGION_CATEGORY: Record<string, TourPackage['category']> = {
  rajasthan: 'Rajasthan',
  himachal: 'Himachal',
  uttarakhand: 'Uttarakhand',
};

export function isRegionTour(destination: DestinationRegion, tour: TourPackage): boolean {
  return tour.category === REGION_CATEGORY[destination.slug] && getRegionTours(destination).includes(tour);
}

/**
 * Every tour for a region: the region's own tours (shortest first), then the
 * hand-picked extras such as Golden Triangle combinations. New tours in a
 * category appear on its hub automatically.
 */
export function getRegionTours(destination: DestinationRegion): TourPackage[] {
  const category = REGION_CATEGORY[destination.slug];
  // The Rajasthan category also holds Central India tours (e.g. Khajuraho); keep only routes that visit Rajasthan.
  const inRegion = (t: TourPackage) =>
    destination.slug !== 'rajasthan' || /jaipur|jodhpur|udaipur|jaisalmer|pushkar|bikaner|ranthambore|mandawa|ranakpur/i.test(t.route);
  const own = ALL_TOURS.filter((t) => t.category === category && inRegion(t)).sort((a, b) => a.durationDays - b.durationDays);
  const extras = ALL_TOURS.filter((t) => !own.includes(t) && destination.associatedPackageSlugs.includes(t.slug));
  return [...own, ...extras];
}

/** Unique drive legs that appear in the region's itineraries. */
export function getRegionDriveLegs(tours: TourPackage[]): { name: string; km: number; time: string }[] {
  const seen = new Map<string, { name: string; km: number; time: string }>();
  for (const t of tours) {
    for (const d of t.itinerary) {
      const leg = DRIVE_LEGS[d.location];
      if (leg && !seen.has(d.location)) seen.set(d.location, { name: d.location, ...leg });
    }
  }
  return [...seen.values()];
}

/** FAQs for a region hub, written only from its tours' own data. */
export function buildRegionFaqs(regionName: string, ownTours: TourPackage[], allTours: TourPackage[]): { q: string; a: string }[] {
  const pool = ownTours.length ? ownTours : allTours;
  const tours = allTours;
  const faqs: { q: string; a: string }[] = [];

  const lengths = pool.map((t) => `${t.durationLabel.split('/')[0].trim()} (${t.title.split('—')[0].trim()})`);
  faqs.push({
    q: `How many days do you need for a ${regionName} tour?`,
    a: `Our ${regionName} tours run at these lengths: ${lengths.join('; ')}. Every one can be shortened or extended to fit your dates.`,
  });

  const seasons = new Map<string, number>();
  for (const t of pool) {
    if (!t.bestSeason) continue;
    const key = t.bestSeason.split('(')[0].trim();
    seasons.set(key, (seasons.get(key) ?? 0) + 1);
  }
  const topSeason = [...seasons.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  if (topSeason) {
    faqs.push({
      q: `What is the best time to visit ${regionName}?`,
      a: `${topSeason} is the best season for most of our ${regionName} routes. Each tour page shows the best season for that route.`,
    });
  }

  const withTaj = tours.filter((t) => tourVisitsAgra(t));
  if (withTaj.length > 0) {
    faqs.push({
      q: `Can I combine ${regionName} with the Taj Mahal?`,
      a: `Yes. ${withTaj
        .slice(0, 3)
        .map((t) => `${t.title.split('—')[0].trim()} (${t.durationLabel.split('/')[0].trim()})`)
        .join(', ')} include Agra and the Taj Mahal. The Taj Mahal is closed on Fridays, so we plan the Agra day around it.`,
    });
  }

  faqs.push({
    q: `How do you get around ${regionName} on these tours?`,
    a: 'By private air-conditioned car with your own chauffeur, who stays with you for the whole trip. Fuel and tolls are included; each tour page lists exactly what else is and is not included.',
  });

  faqs.push({
    q: 'Why are there no prices on these tours?',
    a: 'Every trip is quoted individually, because the cost depends on the car, the number of travellers, the hotel category if we book hotels, your dates and any add-ons such as guides or safaris. Send your dates and we reply with a day-by-day plan and a written quote.',
  });

  return faqs;
}
