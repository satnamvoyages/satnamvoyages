import type { MetadataRoute } from 'next';
import { ALL_TOURS } from '@/lib/data/toursData';
import { DESTINATIONS } from '@/lib/data/destinationsData';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/tours`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/cabs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const tourRoutes: MetadataRoute.Sitemap = ALL_TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = Object.values(DESTINATIONS).map((dest) => ({
    url: `${SITE_URL}/destinations/${dest.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticRoutes, ...tourRoutes, ...destinationRoutes];
}
