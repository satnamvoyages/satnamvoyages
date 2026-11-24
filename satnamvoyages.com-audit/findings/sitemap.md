# Sitemap findings - satnamvoyages.com (2026-11-24)

## Facts
- Single urlset, 23 URLs, 4235 bytes, valid XML, no dupes, all lastmod valid. Same content on both hosts (apex /sitemap.xml 308 -> www /sitemap.xml 200).
- robots.txt (both hosts identical; apex 308 -> www) declares `Sitemap: https://satnamvoyages.com/sitemap.xml` and `Host:` apex. app/robots.ts:13-14.
- All 23 <loc> are apex; every one returns 308 -> www (verified by curl). 0 URLs return 200 directly.
- Homepage canonical and og:url on www = `https://satnamvoyages.com` (apex), which redirects to www.

## Findings
1. CRITICAL - Canonical host contradiction. SITE_URL = apex (lib/constants.ts:1), but the server 308s apex -> www. Sitemap locs, robots Sitemap line and canonical tags all point at a URL that redirects. Pick one host. Recommended: keep www (what the live site serves) and set SITE_URL='https://www.satnamvoyages.com', OR remove the Vercel apex->www redirect and redirect www->apex. Do not mix.
2. HIGH - 23/23 sitemap URLs are redirects (308). Google treats them as non-canonical; sitemap should list final 200 URLs only.
3. HIGH - robots.txt Sitemap points to a redirecting URL (works, but fragile; fix via SITE_URL). `Host:` directive (app/robots.ts:14) is Yandex-only/deprecated; remove.
4. MEDIUM - lastmod is fake. app/sitemap.ts:7 `now = new Date()` used in lines 10-13, 18, 25: every URL = build time (2026-11-23T17:17:04.918Z, identical share 1.0). Google will learn to ignore it. Use real per-page dates (add `updatedAt` to tours/destinations data; static pages from a constant). Also full ISO timestamp with ms is valid but date-only is sufficient.
5. LOW/INFO - priority and changefreq emitted on all 23 URLs (sitemap.ts:10-13,19-20,26-27). Ignored by Google; remove.
6. Coverage (crawl of homepage, /tours, /cabs, /gallery, /destinations/rajasthan internal links; all /tours/* and /destinations/* linked pages): 16 tour pages + 3 destination pages + /, /tours, /cabs, /gallery = all 23 linked pages are in the sitemap. No crawled page is missing. Homepage links only 9 tours and 3 destinations, but /tours lists all 16; every tour is reachable. No sitemap URL is orphaned.
7. INFO - No about/contact/privacy/terms pages exist (about, contact, privacy, privacy-policy, terms, blog, faq, /destinations index all 404; no such routes in app/). Nothing to add to the sitemap, but absence of privacy policy/about/contact is a trust/E-E-A-T and compliance gap (inquiry form at app/api/send-inquiry collects personal data) - recommend creating them and then adding to the sitemap.
8. INFO - Breadcrumb JSON-LD in app/destinations/[region]/page.tsx:62 links "Destinations" to the region URL; /destinations itself is 404 (minor).
9. Quality gates: no location-page threshold issue (3 destinations, 16 tours).

## Corrected app/sitemap.ts approach
```ts
import type { MetadataRoute } from 'next';
import { ALL_TOURS } from '@/lib/data/toursData';
import { DESTINATIONS } from '@/lib/data/destinationsData';
import { SITE_URL } from '@/lib/constants'; // set to 'https://www.satnamvoyages.com' (matches live host)

// Real content-change dates; bump when page content actually changes.
const STATIC_LASTMOD = { home: '2026-11-23', tours: '2026-11-23', cabs: '2026-11-23', gallery: '2026-11-23' };

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: STATIC_LASTMOD.home },
    { url: `${SITE_URL}/tours`, lastModified: STATIC_LASTMOD.tours },
    { url: `${SITE_URL}/cabs`, lastModified: STATIC_LASTMOD.cabs },
    { url: `${SITE_URL}/gallery`, lastModified: STATIC_LASTMOD.gallery },
  ];
  const tourRoutes = ALL_TOURS.map((t) => ({
    url: `${SITE_URL}/tours/${t.slug}`,
    lastModified: t.updatedAt, // add field to data; omit lastModified if unknown rather than faking
  }));
  const destinationRoutes = Object.values(DESTINATIONS).map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: d.updatedAt,
  }));
  return [...staticRoutes, ...tourRoutes, ...destinationRoutes]; // no priority/changefreq
}
```
robots.ts: keep `sitemap: `${SITE_URL}/sitemap.xml``, drop `host`. Also make canonical/og:url/metadataBase use the same SITE_URL (and trailing-slash consistency), then verify with curl that locs return 200 with no redirect.
