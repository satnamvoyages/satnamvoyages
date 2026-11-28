import type { TourPackage } from '../types';
import { DRIVE_LEGS, tourVisitsAgra } from './toursData';

export interface Faq {
  q: string;
  a: string;
}

/**
 * FAQs for one tour, written only from that tour's own data (route, drive legs,
 * season, inclusions). Each tour gets different answers, which also gives
 * otherwise templated pages unique, useful text.
 */
export function buildTourFaqs(tour: TourPackage): Faq[] {
  const faqs: Faq[] = [];
  const stops = tour.route.split('➔').map((s) => s.trim()).filter(Boolean);
  const start = stops[0];
  const end = stops[stops.length - 1];

  if (start) {
    faqs.push({
      q: 'Where does this tour start and end?',
      a:
        start === end
          ? `It starts and ends in ${start}. Your chauffeur picks you up from your hotel, the airport or the railway station, and drops you back at the end.`
          : `It starts in ${start} and ends in ${end}. Your chauffeur picks you up from your hotel, the airport or the railway station, and drops you wherever you need at the end.`,
    });
  }

  const legs = tour.itinerary
    .map((d) => ({ name: d.location, leg: DRIVE_LEGS[d.location] }))
    .filter((x): x is { name: string; leg: { km: number; time: string } } => Boolean(x.leg));
  if (legs.length > 0) {
    const list = legs.map((x) => `${x.name}: about ${x.leg.km} km, ${x.leg.time}`).join('; ');
    faqs.push({
      q: 'How long are the drives on this tour?',
      a: `${list}. These are estimates; traffic and sightseeing stops change them, and your chauffeur stops for breaks whenever you ask.`,
    });
  }

  if (tourVisitsAgra(tour)) {
    faqs.push({
      q: 'Is the Taj Mahal open on Fridays?',
      a: 'No. The Taj Mahal is closed to visitors every Friday, so we schedule the Agra part of this tour on another day. Tell us your travel dates and we plan around it.',
    });
  }

  if (tour.bestSeason) {
    faqs.push({
      q: 'When is the best time to do this tour?',
      a: /year round/i.test(tour.bestSeason)
        ? `This tour runs all year round${tourVisitsAgra(tour) ? ' except Fridays' : ''}. Tell us your dates and we will tell you what the weather will be like.`
        : `The best season for this route is ${tour.bestSeason}. Tell us your dates and we will tell you what to expect if you travel outside it.`,
    });
  }

  const guideText = [...tour.inclusions, ...tour.exclusions, ...tour.highlights, tour.overview].join(' ');
  const guideIncluded = tour.inclusions.find((i) => /guide/i.test(i) && !/optional|add-on|on request/i.test(i));
  if (guideIncluded) {
    faqs.push({ q: 'Is a guide included?', a: `Yes: ${guideIncluded.replace(/\.$/, '')}.` });
  } else if (/guide/i.test(guideText)) {
    faqs.push({
      q: 'Is a guide included?',
      a: 'A guide is not included as standard. Your chauffeur speaks English and knows the route, and licensed local guides can be added at any monument on request.',
    });
  }

  faqs.push({
    q: 'What is included, and what is not?',
    a: `Included: ${tour.inclusions.map((i) => i.replace(/\.$/, '')).join('; ')}. Not included: ${tour.exclusions
      .map((e) => e.replace(/\.$/, ''))
      .join('; ')}.`,
  });

  faqs.push({
    q: 'Why is there no price on this page?',
    a: 'Every trip is quoted individually, because the cost depends on the car you choose, how many are travelling, the hotel category if you want us to book hotels, your dates, and add-ons such as guides or monument tickets. Send your dates on WhatsApp or through the form and we reply with a day-by-day plan and a written quote.',
  });

  faqs.push({
    q: 'Can I change the itinerary?',
    a:
      tour.durationDays <= 1
        ? 'Yes. This is a private tour, so you can add or skip stops and spend longer where you like. We adjust the plan and the quote to suit you.'
        : `Yes. This is a private tour, so you can add or remove days, skip or add stops, and choose your hotels. ${tour.durationDays} days is the suggested pace; we adjust the plan and the quote to whatever you prefer.`,
  });

  return faqs;
}

/** The four lengths of the core Golden Triangle loop, for the "how many days" chooser. */
export const GOLDEN_TRIANGLE_LENGTHS: { slug: string; days: string; pace: string; adds: string }[] = [
  {
    slug: 'golden-triangle-tour-3-days',
    days: '3 days',
    pace: 'Fast',
    adds: 'New Delhi highlights, sunrise Taj Mahal and Agra Fort, a morning at Amber Fort. Long days; best for stopovers and tight schedules.',
  },
  {
    slug: 'golden-triangle-tour-4-days',
    days: '4 days',
    pace: 'Comfortable',
    adds: 'Adds a full day for Old and New Delhi, a Mehtab Bagh sunset, Fatehpur Sikri and a whole day in Jaipur.',
  },
  {
    slug: 'golden-triangle-tour-5-days',
    days: '5 days',
    pace: 'Unhurried',
    adds: 'Splits Delhi across your arrival day and the next morning, and gives Jaipur a full day with the drive back to Delhi Airport on a day of its own.',
  },
  {
    slug: 'golden-triangle-tour',
    days: '6 days',
    pace: 'Relaxed',
    adds: 'Adds the Abhaneri stepwell and a second full day in Jaipur: Jal Mahal, Nahargarh Fort at sunset and Johari Bazaar.',
  },
];
