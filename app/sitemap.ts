import type { MetadataRoute } from 'next';
import { ALL_TOURS } from '@/lib/data/toursData';
import { DESTINATIONS } from '@/lib/data/destinationsData';
import { POPULAR_CAB_ROUTES } from '@/lib/data/cabsData';
import { SITE_URL } from '@/lib/constants';

// Real "last content change" date. Do NOT use `new Date()` here: that stamps
// every URL with the build time on each deploy, which tells search engines
// nothing. When you materially edit a page's content, bump this date (or give
// that page its own date below).
const CONTENT_UPDATED = new Date('2026-11-24');

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${path}`,
    lastModified: CONTENT_UPDATED,
  });

  const staticPaths = [
    '/',
    '/tours',
    '/cabs',
    '/gallery',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cancellation-policy',
  ];

  return [
    ...staticPaths.map(page),
    ...ALL_TOURS.map((tour) => page(`/tours/${tour.slug}`)),
    ...Object.values(DESTINATIONS).map((dest) => page(`/destinations/${dest.slug}`)),
    ...POPULAR_CAB_ROUTES.map((route) => page(`/cabs/${route.slug}`)),
  ];
}
