# SEO Audit: www.satnamvoyages.com

**Date:** 2026-11-24 · **Business type:** Local service, hybrid (Delhi travel agency + outstation chauffeur/taxi, service area North India) · **Pages:** 23 (4 static, 16 tours, 3 destinations) · **Stack:** Next.js App Router on Vercel, source in this repo

## SEO Health Score: 57 / 100

| Category | Weight | Score | Basis |
|---|---|---|---|
| Technical SEO | 22% | 68 | Measured (curl, all 23 URLs) |
| Content Quality | 23% | 38 | Measured (live HTML + `lib/data`) |
| On-Page SEO | 20% | 70 | Measured |
| Schema / Structured Data | 10% | 58 | Measured (home, /tours, one tour page live; the rest from source) |
| Performance (CWV) | 10% | ~58 | **Estimated from code** (PageSpeed API rate-limited, no field data) |
| AI Search Readiness | 10% | 48 | Measured |
| Images | 5% | ~52 | Estimated from code |

Supplementary (not in the weighted score): Local SEO 38/100 (free tier only), SXO page-fit 31–54/100, Agent UX 100/100 (homepage only), Backlinks: insufficient data (domain absent from Common Crawl).

**What is not covered:** no Google Search Console, GA4 or CrUX data (no credentials), so there are no real rankings, traffic, indexation or Core Web Vitals field numbers. There are no Moz or DataForSEO backlink metrics, and Google Business Profile, TripAdvisor and Justdial listings were not verified. The browser sandbox was on for all rendering.

## Synthesis

**What the evidence says.** Crawling and rendering are healthy. All 23 pages return 200 on www, are server-rendered with one H1 each, and every image has alt text. The ranking ceiling is set by three other problems:

1. **One configuration value splits the site's identity across two hosts.** `SITE_URL = 'https://satnamvoyages.com'` (`lib/constants.ts:1`) feeds every canonical, og:url, sitemap `<loc>`, JSON-LD `@id` and the robots.txt Sitemap line. The apex host 308-redirects to www. Every page tells Google that its preferred URL is one that redirects back to it.
2. **Trust claims are unverifiable or contradict each other.** The site-wide `aggregateRating` of 4.92 from 1,450 reviews is hardcoded (`app/layout.tsx:97-101`). Elsewhere the site shows "10,000+ explorers" and per-tour counts summing to 5,271. The four testimonials use stock-photo faces with unlinked "verified Google/TripAdvisor" badges. "Government approved / 15 years" has no registration number. There are no About, Contact, Privacy or Terms pages, and the email differs between the schema and the footer. Four independent specialists (content, schema, local, GEO) flagged this. It is both a Google review-policy risk and the main reason AI engines would not cite the brand.
3. **Pages are the wrong shape for the searches they target.**
   - Searchers for "Delhi to Manali taxi" get route-specific fare pages. The site has one generic /cabs fleet page with no visible fares.
   - Tour prices are hidden on desktop. The price summary in `ItineraryBookingForm.tsx:398-408` is commented out.
   - Only Day 1 of each itinerary and 1 of 7 FAQ answers are in the HTML.
   - Same-day tours are priced per person in a per-car market.

**How they connect.** Fixing #1 is a prerequisite for measuring anything else, because Search Console data stays split until the canonicals agree. #2 has to come before off-site work: building Google Business Profile and directory citations amplifies whatever numbers the site claims, so those numbers must be true first. #3 is the growth lever, but new route pages inherit the trust deficit if #2 is skipped.

**Falsifiability.** If, 4–6 weeks after #1 ships, Search Console still reports "Duplicate, Google chose different canonical" or the apex as the indexed URL, the redirect or the hosting configuration is still wrong. If route pages are indexed but get zero impressions after 8 weeks, the gap is authority (links and citations), not page type.

## Critical findings

| # | Finding | Evidence | Fix |
|---|---|---|---|
| C1 | Canonical, sitemap, robots, og:url and JSON-LD all point at the redirecting apex host | 23/23 canonicals and 23/23 sitemap locs use `https://satnamvoyages.com`, which returns 308 to www. Root: `lib/constants.ts:1` | Set `SITE_URL = 'https://www.satnamvoyages.com'`, redeploy, resubmit the sitemap |
| C2 | Self-serving, unverifiable AggregateRating on every page | `app/layout.tsx:97-101` (4.92/1450). Only 4 sample reviews exist (`lib/data/faqsData.ts`). Per-tour counts sum to 5,271; the homepage says "10,000+" | Remove `aggregateRating` and the per-tour rating badges until they mirror a real, linked source (GBP/TripAdvisor) |
| C3 | Testimonials look fabricated | Unsplash stock avatars, `verified: true`, "Google Reviews/TripAdvisor" labels with no links (`lib/data/faqsData.ts:48-95`) | Replace with real linked reviews, use initials instead of stock faces, drop "verified" |
| C4 | Cab searches land on the wrong page type | For "delhi to manali taxi", 9/10 results are route fare pages. /cabs never mentions Manali and shows no fares. `/cabs/delhi-to-manali` returns 404 | Build about 10 route pages (see the action plan). Stay under 30 route/location pages |

## High findings

- **Trust pages missing:** `/about`, `/contact`, `/privacy`, `/terms` and a cancellation/refund policy all return 404. The inquiry API collects personal data and the site asks for a 20–25% deposit.
- **Unverified credentials:** "Government Approved / Ministry of Tourism Compliant / 15 years / 100% Police Verified" appear with no licence, GSTIN, company registration or IATA/TAAI membership.
- **Email mismatch:** the schema has `booking@satnamvoyages.com` (`app/layout.tsx:87`); the footer and constants have `satnamvoyages@gmail.com` (`lib/constants.ts:6`).
- **Empty `sameAs`** (`app/layout.tsx:102`). There are no social or listing profile links anywhere, the off-site brand footprint is minimal, and Bing doesn't disambiguate the brand from the religious term "Satnam".
- **Itinerary and FAQ content not in the HTML:** `TourDetailClient` renders only `expandedDay === 1`, and `HomeClient` renders FAQ answers only when opened. For example, 11 of 12 days are missing on rajasthan-heritage-tour.
- **Prices hidden on desktop:** the only visible price is the mobile sticky bar (`TourDetailClient.tsx:618`). /cabs shows no ₹/km table despite "Fixed Fares" in its title.
- **Content contradictions that AI engines will repeat as facts:**
  - "Hotel: Deluxe Tier" appears in itineraries, but hotels are listed as excluded, while llms.txt says they're included.
  - Same-day Agra promises a 5-star lunch but excludes lunch.
  - The driver allowance is described as both included and extra.
  - Delhi–Agra is given as both 3 h and 3.5 h.
  - "Priority/skip-the-line" Taj entry is promised (verify it can be guaranteed).
- **Two-hop redirect:** http://satnamvoyages.com → https apex → https www. Fix in Vercel Domains.
- **20 MB autoplaying hero video** with `preload="auto"` (`components/HomeClient.tsx:95-108`, `public/assets/hero.mp4`).
- **Raw `<img>` tags bypass next/image** across HomeClient, TourDetailClient, GalleryClient, DestinationClient and CabsClient. /gallery loads 7.9 MB of unresized JPEGs.
- **Mobile UX:** floating chat/call bubbles cover the WhatsApp CTA in the tour sticky bar and the trust badges on /cabs. The stacked bars use about 170 px.
- **Rajasthan page is a guide, but the SERP wants package listings.** Retarget it to "rajasthan tour packages from delhi by car" and show "from ₹" on the cards.
- **Same-day tours are priced per person** (₹5,200/pp) where competitors quote ₹5,000–9,500 per car.
- **Off-site:** no confirmed Google Business Profile. If Connaught Place is not a staffed, signed office, register as a service-area business with the address hidden.

## Medium findings

- Missing security headers: CSP, frame-ancestors/X-Frame-Options, Referrer-Policy, Permissions-Policy. HSTS lacks includeSubDomains. HTML is served with `Access-Control-Allow-Origin: *` (`next.config.ts:22`).
- Internal linking: 6 tours are reachable only from /tours. Add related-tour links per region.
- Sitemap `lastModified = new Date()` stamps every URL with the build time (`app/sitemap.ts:7`).
- `Host:` directive in `app/robots.ts:14`. It is ignored by Google; remove it.
- Schema gaps:
  - Tours should be `Product`+`TouristTrip` with a complete `Offer` (url, priceValidUntil, seller).
  - `provider` should reference the agency `@id`.
  - Destination breadcrumbs repeat the same URL at positions 2 and 3 (`app/destinations/[region]/page.tsx:60-64`).
  - The cabs per-km price needs `UnitPriceSpecification`.
  - Two TaxiService entities with different `@id`s.
  - No `geo`, `openingHoursSpecification`, `hasMap` or `contactPoint`.
- Inquiry form accessibility: labels are not associated with inputs, and the modal lacks `role="dialog"`/`aria-modal` (`components/InquiryModal.tsx`).
- Fonts load from Google Fonts via a render-blocking `<link>` with about 15 variants (`app/layout.tsx:126-133`). Use `next/font`.
- Cab fleet photos show the wrong vehicles (Fiat 500, Ford Expedition, Porsche Panamera). One broken tile in the tour gallery.
- Review incentive ("10% voucher if featured") with no disclosure.
- Generic brochure wording with no first-hand detail. Tour images are mostly Unsplash stock.
- The Taj Mahal Friday closure is in the data but not shown. The keywords target "Char Dham Yatra" with no such page.
- llms.txt lacks Markdown links and points to a /contact page that doesn't exist.

## Low findings

- Titles are 82–106 characters with a repeated "Tour … Tour" pattern. 18 of 19 meta descriptions are cut mid-word (first 160 characters of the overview). The homepage description is 180–185 characters.
- Thin H2 structure on /tours, /cabs and /gallery.
- All pages use the same publication date (2026-01-01). No "updated" dates or price validity.
- Heavy logo PNGs (479 KB and 385 KB). Possibly unused `public/assets/IMG_8143.PNG` (623 KB).
- Fake "1" unread badge on the chat bubble.
- IndexNow not implemented (optional, useful for Bing).
- FAQPage on the homepage (Info): valid, but Google retired FAQ rich results on 2026-05-07. No action needed.

## What works

- Fast edge-cached TTFB of about 0.12 s, server-rendered HTML and real 404s.
- All 23 pages: 200, self-referential canonical path, one H1, alt text present, mobile viewport.
- Rich schema coverage: TouristTrip+Offer, BreadcrumbList, TaxiService, TouristDestination, ImageGallery.
- Unique copy on each tour page (maximum overlap 0.009), and concrete quotable facts (₹/km rates, drive times, INR/USD prices).
- 31 real client photos, consistent name and phone, and every AI crawler allowed.
- Clear above-the-fold value proposition with phone, WhatsApp and booking CTA on all devices.
- No third-party JavaScript.

## Specialist findings

The detailed findings, with file:line evidence and ready-to-use JSON-LD and code, are in `findings/`: `technical.md`, `content.md`, `schema.md`, `sitemap.md`, `performance.md`, `visual.md`, `geo.md`, `agentic.md`, `local.md`, `backlinks.md`, `sxo.md`. Screenshots are in `screenshots/{home,cabs,tour}/`.
