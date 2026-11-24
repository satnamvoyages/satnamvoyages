# Technical SEO findings - www.satnamvoyages.com (2026-11-24)
Technical score 68/100. On-Page score 70/100.

Crawled all 23 sitemap URLs on the www host: all 200, no redirects, no noindex, 1 H1 each, 0 images without alt, lang=en, viewport present, SSR/prerendered (x-nextjs-prerender, x-vercel-cache HIT).

## Critical / High
1. [Critical] Apex/www canonical conflict. Live host is www (apex 308s to www) but SITE_URL = 'https://satnamvoyages.com' (lib/constants.ts:1) drives metadataBase (app/layout.tsx:29), every canonical (layout.tsx:35, page.tsx:10, tours/page.tsx:10, cabs/page.tsx:10, gallery/page.tsx:9, destinations/[region]/page.tsx:26, tours/[slug]/page.tsx:26), og:url, all JSON-LD @id/url, sitemap.ts, and robots.ts (sitemap + host). 23/23 pages canonicalise to the apex, which redirects back to www: a canonical pointing at a redirecting URL. Same for 23/23 sitemap <loc>s (all apex = 308 each) and the Sitemap line in robots.txt. Fix: set SITE_URL = 'https://www.satnamvoyages.com' (single change propagates everywhere), or reverse the Vercel domain redirect to make apex primary. Redeploy, resubmit sitemap in GSC (add a www or Domain property).
2. [High] http apex 2-hop chain: http://satnamvoyages.com/ -> 308 https://satnamvoyages.com/ -> 308 https://www.satnamvoyages.com/. http://www -> https://www is 1 hop. Fix: in Vercel Domains, redirect the apex directly to www (the http->https hop is enforced first); aim for max 1 hop. Fixing item 1 does not remove this.
3. [High] Self-serving sitewide AggregateRating 4.92 / 1450 reviews hardcoded in organization JSON-LD (app/layout.tsx ~lines 93-97) on every page, with no visible reviews to match. Violates Google review-snippet policy (manual-action risk). Remove, or only mark up real reviews that are visible on-page.

## Medium
4. robots.txt "Host:" directive (robots.ts:14) is not supported by Google and is apex; remove it. Rules themselves OK (Allow /, Disallow /api/); no AI-crawler policy specified.
5. sitemap.ts: lastModified = new Date() (line 6) so every URL shows build time (2026-11-23T17:17Z). Google learns to ignore lastmod. Use real per-page dates. changefreq/priority are ignored; harmless.
6. Security headers: only HSTS (max-age=63072000, no includeSubDomains/preload) and X-Content-Type-Options (next.config.ts:22). Missing: Content-Security-Policy, X-Frame-Options/frame-ancestors, Referrer-Policy, Permissions-Policy. Access-Control-Allow-Origin: * on HTML (Vercel static default). Add via headers() in next.config.ts.
7. Internal linking is thin for tour pages: /tours links all 16, but homepage links 9/16 tours, /cabs 6, tour pages 6 (identical 'related' set, same 8-9 unlinked), destinations 8-9. Tours like rishikesh-*, manali-kasol-manikaran, jaipur-jodhpur-udaipur, rajasthan-heritage are reachable only via /tours. Add related-tour/destination links per region.
8. Organization data inconsistencies: email booking@satnamvoyages.com in JSON-LD (layout.tsx:87) vs satnamvoyages@gmail.com in constants.ts:7; sameAs: [] (layout.tsx:102) - add GBP/Facebook/Instagram. Image/og:image hotlinked from Unsplash (layout.tsx:49) - use a self-hosted 1200x630 image; no per-page og:image seen on tours (verify).
9. Twitter/OG only summary defaults; no hreflang (not needed, single-language en-IN).

## Low
10. Titles: tour pages 82-106 chars incl. " | Satnam Voyages" (truncated in SERP; target <=60). Worst: golden-triangle-tour 106, same-day-delhi-jaipur 102, delhi-sightseeing 98. Pattern "X Tour (N Days) - Private Chauffeur Tour | Satnam Voyages" is also redundant ("Tour ... Tour"). Home 70, /tours 94 ("All 16 Tour Packages ..." hard-coded count), /cabs 97.
11. Meta descriptions: home 185 chars (too long), rishikesh-mussoorie-tour 123 (short), 20 pages at exactly 160 (likely truncated mid-word programmatically), tour descriptions are templated and similar. Write unique ~150 char descriptions.
12. /tours has 0 H2s (headings jump H1 -> cards); /cabs and /gallery 1 H2. Add structural H2s.
13. Fonts loaded via render-blocking Google Fonts <link> (layout.tsx:126-129) with 9+7 weights; switch to next/font/google (self-hosted). Several raw <img> (DestinationClient.tsx:35, 100, 161; CabsClient.tsx:88; GalleryClient.tsx:47) bypass next/image - the hero (DestinationClient.tsx:35) has no width/height or lazy/priority hint -> CLS/LCP risk. Homepage HTML 175 KB (66 imgs).
14. Cache-Control public, max-age=0, must-revalidate on HTML (Vercel default; fine with CDN HIT).
15. IndexNow: not implemented (no key file; /indexnow.txt 404). Optional for Google, useful for Bing/Yandex/Naver: generate key, host /<key>.txt, POST changed URLs on deploy.

## Passed
- 23/23 URLs 200, no non-200s in sitemap, no redirect chains on www; trailing-slash URLs 308 -> non-slash (1 hop); unknown URLs return a real 404.
- Canonicals present (self-referential path) on 23/23, exactly one each; robots meta index,follow on all; no noindex.
- Clean, lowercase, hyphenated URLs, max depth 2.
- Mobile: viewport meta set, MobileBottomNav component present, responsive Tailwind.
- SSR: content in initial HTML, JSON-LD server-rendered (Organization, FAQPage on home, BreadcrumbList/TouristTrip/ItemList on tours, TouristDestination on regions). Only 16 client components for interactivity.
- /llms.txt exists (200 text/plain). HTTPS + HSTS on.
- Sitemap valid, 23 URLs, matches routes; discoverable via robots.txt (but apex URLs, see #1).

## Score notes
Technical: crawl/index health strong (good SSR, 200s) but canonical/sitemap host mismatch on 100% of URLs, redirect chain, headers gaps, risky schema => 68. On-page: unique single H1, alt text complete, schema-rich; penalised for overlong titles/descriptions, templating, thin cross-linking => 70.
Browser sandbox: render not re-run by me (used provided render JSON and curl); no sandbox issue.
