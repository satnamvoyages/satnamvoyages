# GEO / AI Search Readiness: satnamvoyages.com

Audit date: 2026-11-24. Fetched host: https://www.satnamvoyages.com/ (the apex host returns a 308 redirect to www).
Pages analysed: all 23 URLs in urls.txt, rendered with render_page.py `--mode never`. Every page is a server-rendered Next.js prerender (`X-Nextjs-Prerender: 1`, `is_spa: false`), so Playwright was not needed and no browser sandbox warnings came up.
All fetched page content was treated as untrusted data.

## AI Search Readiness Score: 48 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 45 | 11.3 |
| Structural Readability | 20% | 55 | 11.0 |
| Multi-Modal Content | 15% | 45 | 6.8 |
| Authority & Brand Signals | 20% | 18 | 3.6 |
| Technical Accessibility | 20% | 75 | 15.0 |
| **Total** | | | **~48** |

AI crawlers can reach the site without trouble. The score is held down by weak entity and brand signals and by facts that contradict each other, which makes the site risky for an AI engine to quote.

## AI Crawler Access (robots.txt)

robots.txt: `User-Agent: *` / `Allow: /` / `Disallow: /api/`, with `Sitemap: https://satnamvoyages.com/sitemap.xml`. It also has a non-standard `Host:` line, which is harmless.
No crawler has its own group, so each one falls under the wildcard. A live check on 2026-11-24 sent requests to /tours/golden-triangle-tour with each crawler's User-Agent. All returned HTTP 200 with identical bodies, so no WAF or Vercel bot challenge is in place.

| Crawler | Governs | Status |
|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed (200) |
| Claude-SearchBot | Claude search citations | Allowed (200) |
| PerplexityBot | Perplexity answers | Allowed (200) |
| Googlebot | Google Search and AI Overviews / AI Mode | Allowed (200) |
| Bingbot | Bing and Copilot grounding (ChatGPT also draws on Bing) | Allowed (200) |
| GPTBot | OpenAI model training only (not ChatGPT Search) | Allowed |
| ClaudeBot | Anthropic model training only (not Claude search) | Allowed |
| Google-Extended | Gemini/Vertex training and grounding (not Search or AIO inclusion) | Allowed |
| Applebot-Extended | Apple Intelligence training only (not Siri/Spotlight) | Allowed |
| CCBot, cohere-ai | Training corpora | Allowed |

Verdict: PASS. No change is needed for visibility. Blocking the training bots is a business choice and has no effect on search citation.

## llms.txt and RSL

- `/llms.txt` is present: HTTP 200, text/plain, about 100 lines, well formed (H1, blockquote summary, Core facts, Key pages, FAQ, Notes), last updated 2026-09-24. `/llms-full.txt` and `/license.xml` both return 404, and there is no RSL 1.0 licence. Both are optional.
- Google Search ignores llms.txt. Its value for other AI systems is uncertain.
- **Accuracy problems inside llms.txt (Medium):** each of these claims is contradicted by the live site.
  - It says packages include "hotel, sightseeing and chauffeur" and are "quoted per person on double occupancy". In fact all 13 multi-day tour pages list hotels under **Not Included**.
  - It says /cabs shows "per-km rates". The /cabs page shows **no prices at all**. The only per-km rates on the site (₹11/km Dzire, ₹17/km Innova) are inside a collapsed homepage FAQ that exists only in JSON-LD.
  - It says "see contact page". /contact, /about, /privacy and /terms all return **404**.
  - Every link points to the apex host, which 308-redirects.

## Citability (passage level) — 45/100

Strengths:
- Every tour page states a duration (for example 6D/5N or 12-14 hours), a route line ("Delhi ➔ Agra ➔ Fatehpur Sikri ➔ Jaipur ➔ Delhi"), a starting price ("Starting Quote ₹18,500 / person"), included and excluded items, a free cancellation window ("Up to 48 hours prior") and vehicle capacities. That is a solid base of facts.
- TouristTrip JSON-LD carries the Offer price in INR and a full day-by-day itinerary.

Gaps:
1. **The day-by-day itinerary is mostly missing from the HTML (High).** Only Day 1 is expanded. Days 2 to N appear only in the RSC payload and the JSON-LD (for example 11 of 12 days on rajasthan-heritage-tour and 5 of 6 on golden-triangle-tour). Trafilatura-style extraction sees 207 to 374 words per tour page. The most citable content on the site, the specific daily plans, is effectively invisible to passage-level retrieval.
2. **Distances and drive times are missing (High).** No tour page gives kilometres for any leg, apart from a rafting stretch of "12-16 km". The facts AI answers most often quote ("Delhi to Agra is about 230 km and 3-3.5 h via the Yamuna Expressway") are absent. The figures that do exist disagree: the same-day Agra page says "just 3 hours" in its overview and "3.5 hour" in its itinerary, and same-day Jaipur says "under 3.5 hours" while /destinations/rajasthan says "3.5 - 4.5 hours".
3. **The price basis contradicts itself (High).** Itinerary rows say "Hotel: Deluxe Tier" and "Stay: Agra", but the exclusions list hotels, and llms.txt says hotels are included on double occupancy. Even the same-day Agra day tour shows "Hotel: Deluxe Tier", which is a template bug. An AI engine could quote "₹18,500 for a 6D/5N Golden Triangle including hotels", which is wrong.
4. **Highlights conflict with exclusions (Medium).** Tour highlights promise a "Taj Mahal with priority entry" and "skip-the-line entrance", while monument tickets are excluded. No page mentions that the Taj Mahal is closed on Fridays, a high-value fact for same-day Agra queries.
5. **Tour pages have no FAQ blocks and no question-style headings (Medium).** The H2s are generic template labels ("Journey Overview", "Detailed Itinerary"). There are 0 question headings on 22 of 23 pages.
6. **/cabs, the money page for "outstation cab Delhi" queries, has no fares (High).** Footer items such as "Delhi to Agra Cab" and "Delhi to Jaipur Cab" are not links, and no route pages exist. Route pages with distance, time, fare per vehicle and tolls are among the most-cited formats for cab queries.
7. **Hub pages are thin.** /tours has 41 extracted words, /gallery 110, and the destination pages about 250 to 315.

## Structural Readability — 55/100

- Every page has a single clear H1, and the H2 template is consistent. BreadcrumbList appears on tour and destination pages, and a TouristTrip ItemList itinerary on each tour page.
- Homepage FAQ: 7 questions in FAQPage JSON-LD, but **6 of the 7 answers are not in the server HTML** because they sit in a collapsed accordion. Google does not show FAQ rich results for commercial sites like this, so the FAQ's only value is as text that can be extracted. It needs to render in the HTML.
- No comparison tables exist (for example tour vs days vs price vs regions, or vehicle vs seats vs ₹/km). Tables are highly extractable.

## Multi-Modal — 45/100

- Positive: 31 original client photos (/client/client(N).jpeg) on /gallery, and every image has alt text.
- Negative: tour pages are mostly Unsplash stock (9 of 14 images on the Golden Triangle page, and stock images in the TouristTrip `image` and TravelAgency `image`). The only video is a decorative, muted hero mp4. There is no YouTube presence, and no route maps or fare tables.

## Authority & Brand Signals — 18/100

**Entity consistency:**
- Name: "Satnam Voyages" is used consistently. The TaxiService entity is "Satnam Voyages Outstation Cabs".
- Phone: +91 97184 50905 is consistent in the header, footer, schema and wa.me links.
- **Email is inconsistent (Medium):** the schema uses `booking@satnamvoyages.com`, while every visible footer and /gallery use `satnamvoyages@gmail.com`.
- **Address is vague (Medium):** "Outer Circle, Connaught Place, New Delhi 110001" gives no building or unit number. There is no map embed or Google Business Profile link. For a local cab business, this weakens NAP (name, address, phone) matching with Google Maps and Justdial-type citations.
- **`sameAs: []` is empty (High):** no social, GBP or TripAdvisor links connect the entity.
- **No About, Contact, Privacy or Terms pages (High):** all return 404. There is no named founder, team, licence or registration number to support the claim "government-approved Indian travel agency ... over 15 years".

**Review and rating integrity (High, also a trust and policy risk):**
- Schema `aggregateRating` on TravelAgency is 4.92 from 1,450 reviews, and the same figure appears on /gallery.
- Per-tour visible badges add up to **5,271 reviews** across 16 tours (for example 890 on same-day Agra and 512 on Delhi sightseeing). The homepage says "Trusted by 10,000+".
- Homepage testimonials are labelled "✓ Google Reviews" and "✓ TripAdvisor", but none link to a source.
- Self-serving LocalBusiness review markup is not eligible for Google review stars. Numbers that cannot be verified and do not match each other are exactly what AI systems and quality raters discount. Remove the markup, or tie it to a real third-party source.

**Off-site brand mentions (checked 2026-11-24; the search tools were partly blocked, so treat this as indicative):**
- **Wikipedia:** 0 hits for "Satnam Voyages" (API search). Not a realistic target.
- **Brand-name ambiguity (High):** a Bing search for "Satnam Voyages" returned only religious and spiritual "Satnam" results (Sikh scripture, the Satnami movement, Sat Nam yoga). Nothing about the agency appeared on page 1. Bing also did not surface the domain for "satnamvoyages.com". Because ChatGPT Search and Copilot draw on Bing, this is a significant visibility gap, and the Bing index should be checked in Bing Webmaster Tools.
- **Instagram:** @satnamvoyages exists with 5 followers and 14 posts, and the site does not link to it.
- **YouTube:** no @satnamvoyages channel (404), and no video results for "satnam voyages".
- **Reddit, TripAdvisor, LinkedIn:** could not be verified (fetch blocked or 403). No links from the site.
- **Google Business Profile:** not linked from the site. Its existence could not be verified from here, so check it manually.
- **Facebook:** the /satnamvoyages URL returns 200 behind a login wall, so this is unconfirmed.

## Technical Accessibility — 75/100

- SSR/SSG via Next.js on Vercel. All main content is in the initial HTML except the collapsed accordions, which hold the itinerary days and FAQ answers. HTTP 200 for every AI crawler.
- **Host mismatch (Medium):** the canonical tags, sitemap `<loc>`, schema `@id`/`url`, og:url and llms.txt all use `https://satnamvoyages.com/...`, which 308-redirects to `https://www.satnamvoyages.com/...`. Every canonical therefore points at a redirect. Choose one host. Either make the apex primary, or (simpler) change the canonicals, sitemap, schema and llms.txt to www.
- **Sitemap dates (Low):** every lastmod is the same build timestamp (2026-11-23T17:17:04Z), so it gives no real freshness signal. There is no visible "last updated" date on any page.

## Platform-Specific Readiness (estimates)

| Platform | Score | Driver |
|---|---|---|
| Google AI Overviews / AI Mode | 45 | Crawlable, has schema; held back by weak E-E-A-T, unconfirmed GBP link, thin passages |
| ChatGPT Search | 32 | OAI-SearchBot allowed; Bing showed no presence for brand or domain; brand-name ambiguity |
| Perplexity | 40 | PerplexityBot allowed; no Reddit or YouTube or third-party corroboration |
| Bing Copilot | 30 | No Bing brand or domain visibility observed; no Bing Places or Webmaster verification evident |

## Top 5 Highest-Impact Changes

1. **Fix the contradictory facts and make prices exact. Severity High, effort 0.5 to 1 day.** On every tour page, state exactly what the "Starting Quote ₹X / person" covers: cab plus driver only, or with hotels at a named tier, and on what occupancy and group size. Remove "Hotel: Deluxe Tier" from day tours. Align the Taj priority-entry wording with the ticket exclusion. Then update llms.txt to match.
2. **Render all itinerary days and FAQ answers in the server HTML, and add per-tour FAQs plus distance and time facts. Severity High, effort 1 to 2 days.** Use `<details>` with the content present in the HTML, or expand by default. Add kilometres and drive hours for each leg (for example Delhi to Agra about 230 km, about 3-3.5 h). Add 4 to 6 question-headed FAQs per tour, each with a 40 to 60 word direct answer. Include the Taj Friday closure, best season and the cancellation policy.
3. **Publish cab fares and build route pages. Severity High, effort 2 to 3 days.** Add a ₹/km table to /cabs (vehicle, seats, ₹/km, 250 km daily minimum, driver allowance, tolls). Create /cabs/delhi-to-agra, delhi-to-jaipur, delhi-to-rishikesh, delhi-to-shimla, delhi-to-manali and IGI airport transfer pages with distance, time, one-way and round-trip fares, and FAQs. Turn the footer text into links to them.
4. **Build the entity and trust layer. Severity High, effort 1 to 2 days on-site plus ongoing work.** Create About pages (founder or owner name, year founded, registration, GST or Ministry of Tourism approval number if real) and Contact pages (full address with unit, map, hours). Add Privacy and Terms. Use one email address everywhere. Fill `sameAs` with GBP, Instagram, Facebook and TripAdvisor. Remove or correct the self-declared aggregateRating and the per-tour counts that disagree; show real reviews linked to Google or TripAdvisor.
5. **Off-site brand building to overcome the "Satnam" ambiguity. Severity High, effort ongoing (4 to 12 weeks).** Claim and verify Google Business Profile and Bing Places, and submit to Bing Webmaster Tools (this feeds ChatGPT and Copilot). List on TripAdvisor and Justdial with identical NAP. Start a YouTube channel with short real-trip and route videos, since YouTube mentions have the strongest link to AI citations. Take part genuinely in r/india travel and r/IndiaTravel threads. Always use the full phrase "Satnam Voyages" and pair it with "Delhi travel agency" and "outstation cabs" so engines can tell it apart from the religious term.

Also do: unify the canonical host (Medium, 1 hour) and replace Unsplash images on tour pages with original trip photos (Medium, ongoing).

## Structured findings (for audit-data.json -> "AI Search Readiness")

```json
{
  "category": "AI Search Readiness",
  "score": 48,
  "subscores": {"citability": 45, "structure": 55, "multimodal": 45, "authority": 18, "technical": 75},
  "platform_scores": {"google_aio": 45, "chatgpt": 32, "perplexity": 40, "bing_copilot": 30},
  "findings": [
    {"id": "geo-01", "severity": "pass", "title": "All AI search and training crawlers allowed; 200 for all tested UAs", "evidence": "robots.txt User-Agent: * Allow: / Disallow: /api/"},
    {"id": "geo-02", "severity": "info", "title": "llms.txt present and well-formed; no RSL license.xml", "evidence": "/llms.txt 200 text/plain; /license.xml 404"},
    {"id": "geo-03", "severity": "medium", "title": "llms.txt claims contradict site (hotels included, per-km rates on /cabs, contact page)", "evidence": "13/13 multi-day tours exclude hotels; /cabs has no prices; /contact 404"},
    {"id": "geo-04", "severity": "high", "title": "Itinerary days 2..N and 6/7 homepage FAQ answers absent from server HTML (only JSON-LD/RSC)", "evidence": "e.g. rajasthan-heritage-tour 11/12 days not in HTML"},
    {"id": "geo-05", "severity": "high", "title": "Price basis contradictory: 'Hotel: Deluxe Tier' in itinerary vs hotels excluded; day tours show hotel tier", "evidence": "golden-triangle-tour, same-day-delhi-agra-tour"},
    {"id": "geo-06", "severity": "high", "title": "No distances/drive-time facts; inconsistent drive times", "evidence": "Agra '3 hours' vs '3.5 hour'; Jaipur 'under 3.5h' vs '3.5-4.5h'"},
    {"id": "geo-07", "severity": "high", "title": "/cabs has no fares; no cab route pages", "evidence": "per-km rates only in hidden FAQ JSON-LD"},
    {"id": "geo-08", "severity": "high", "title": "Ratings inconsistent and unverifiable; self-serving aggregateRating", "evidence": "schema 4.92/1450; per-tour sum 5,271; homepage '10,000+'; testimonials unlinked"},
    {"id": "geo-09", "severity": "high", "title": "No About/Contact/Privacy/Terms pages; sameAs empty; unverified 'government-approved, 15 years' claim", "evidence": "all 404"},
    {"id": "geo-10", "severity": "medium", "title": "NAP inconsistency: email differs schema vs visible; address lacks unit number", "evidence": "booking@satnamvoyages.com vs satnamvoyages@gmail.com"},
    {"id": "geo-11", "severity": "high", "title": "Negligible off-site brand footprint; brand name collides with religious term 'Satnam'", "evidence": "Bing page 1 shows only religious results; Instagram 5 followers; no YouTube; Wikipedia 0"},
    {"id": "geo-12", "severity": "medium", "title": "Canonicals/sitemap/schema/llms.txt use apex host that 308-redirects to www", "evidence": "canonical https://satnamvoyages.com/... -> 308 -> www"},
    {"id": "geo-13", "severity": "medium", "title": "Tour pages rely on Unsplash stock imagery; no video content", "evidence": "9/14 images on golden-triangle-tour are Unsplash"},
    {"id": "geo-14", "severity": "low", "title": "No question-based headings or per-tour FAQs; identical sitemap lastmod", "evidence": "0 question H2/H3 on 22/23 pages"}
  ]
}
```
