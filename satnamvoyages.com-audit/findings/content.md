# Content Quality / E-E-A-T Findings: www.satnamvoyages.com

Audit date: 2026-11-24. Sources: the live raw HTML (render_page.py, `--mode never`; pages are SSR and `is_spa: false`), homepage-render.json, and the site source in `lib/data/*.ts`, `components/*.tsx` and `app/**` (read only). Method: E-E-A-T scored against `extracted_text`. Word counts, 5-gram Jaccard duplication and Flesch readability were computed over the source data. `metadata_template.py` was run on 23 title/description pairs.

## Scores

| Metric | Score |
|---|---|
| **Content Quality (overall)** | **38 / 100** |
| E-E-A-T composite (weighted) | 27 / 100 |
| - Experience (20%) | 35 |
| - Expertise (25%) | 40 |
| - Authoritativeness (25%) | 15 |
| - Trustworthiness (30%) | 20 |
| AI citation readiness | 35 / 100 |
| Templated metadata `site_risk` | low (templated_ratio 0.0, shared_cta_phrases none) |

## Findings

### C1. Testimonials show the signs of fabricated reviews. Severity: CRITICAL
- Evidence: `lib/data/faqsData.ts` REVIEWS_LIST has 4 reviews. Each avatar is an Unsplash stock portrait (`images.unsplash.com/photo-1534528741775...`, `photo-1507003211169...`, and so on). Two of the reviews are from couples but show a single stock face. Each one carries `verified: true` and a "Google Reviews"/"TripAdvisor" badge, with no link to any source. The review of the "Rajasthan Heritage Circuit" says "10 days", but that tour is 12 days.
- Impact: the September 2025 QRG treats fake or unverifiable reviews as deceptive, and the rating is Lowest. For a YMYL-adjacent service where customers prepay deposits, this is the main trust failure. It may also breach consumer-protection rules on fake reviews (India CCPA 2022 guidelines; FTC 16 CFR 465 for US/UK visitors).
- Fix: replace these with real reviews that carry first names, the month travelled, and a link to the actual Google Business Profile or TripAdvisor listing. If you can't get permission to use reviewers' photos, show initials. Remove `verified: true` unless something actually verifies the review.

### C2. Rating and review numbers contradict each other. Severity: CRITICAL
- Evidence:
  - Sitewide JSON-LD `aggregateRating` 4.92 / 1450 reviews (`app/layout.tsx`).
  - Gallery: "4.92 / 5 (1,450+ Verified Reviews)".
  - Homepage: "Trusted by 10,000+ Happy Explorers".
  - The per-tour `reviewsCount` values in `toursData.ts` add up to **5,271** (Same Day Agra shows 890, Delhi Sightseeing 512, and so on). Every tour rates 4.82-4.98, and each page displays the count as "4.9 (342 reviews)". None of the reviews behind these counts are shown on the tour pages.
  - `sameAs: []`, so nothing ties the ratings to a third-party profile.
- Impact: Google's review-snippet policy treats self-serving aggregateRating on a LocalBusiness/Organization as ineligible and possibly spam. The numbers also contradict each other, so neither a rater nor an LLM can trust them.
- Fix: remove the `aggregateRating` from the Organization schema and the per-tour rating and count. Instead, show the real Google/TripAdvisor rating with a link to the profile and the date it was checked. Use one number everywhere, from one source.

### C3. Claims of government approval, licensing and experience have no proof. Severity: HIGH
- Evidence:
  - TrustBadges: "Government Approved / Ministry of Tourism Compliant / Fully licensed Indian travel agency".
  - FAQ: "government-approved Indian travel agency ... over 15 years of excellence".
  - Footer, layout, homepage meta: "India's premier travel agency".
  - Cabs H1 "Premier Outstation Cabs"; "100% Police Verified"; "drivers with 10+ years".
  - The site gives no MoT recognition number, GSTIN, company or LLP/CIN registration, IATA/TAAI/IATO membership, founding year or owner name.
- Impact: the QRG tells raters to check reputation and claims. A superlative or certification that can't be verified lowers trust; a false one makes the page deceptive.
- Fix: either publish the evidence (MoT approval certificate number, GSTIN, a Delhi Tourism/transport permit, the legal entity name, the year founded) or drop the claim. Replace "India's premier" with something factual, such as "Delhi-based private tour and cab operator since YYYY".

### C4. No About, Contact, Privacy, Terms, Cancellation or Refund pages, and no named people. Severity: HIGH
- Evidence: `/about` and `/contact` return 404. There is no privacy, terms or cancellation route in `app/`. Contact details appear only in the footer, and the email there is `satnamvoyages@gmail.com`, while the schema lists `booking@satnamvoyages.com`, so the two don't match. No owner, founder, manager or driver profile appears anywhere; the "senior tour manager" is never named. The site takes a 20-25% deposit (FAQ-5), yet no cancellation or refund policy is published.
- Fix:
  - Add an About page covering the founder's name and photo, the year founded, the office photo and address, the legal entity, the registrations, and the fleet with real photos.
  - Add a Contact page with an embedded map, the office hours and a link to the Google Business Profile.
  - Add Privacy, Terms, and Cancellation & Refund pages, and link them from the footer.
  - Use one domain email address everywhere.

### C5. Tour and destination pages are thin, and the server HTML only includes the Day 1 itinerary description. Severity: HIGH
- Evidence (body words from source data; words in the rendered main content): Same Day Jaipur 139/344, Delhi Sightseeing 160, Rishikesh-Mussoorie 159/319, Same Day Agra 178, Manali-Kasol 194. The largest is Golden Triangle at 458 words, against roughly 800 for service-type pages. The destination pages have 175-227 words of data and 256-315 rendered. In `TourDetailClient.tsx`, `expandedDay` defaults to 1, so only the Day 1 description is in the HTML (the "Johari Bazaar" and "Nahargarh" text from Day 5 is missing from the HTML body). Best season is never displayed. The `/tours` index extracts to 41 words.
- Fix:
  - Render every day's description open in the HTML, or use `<details>` with the content present.
  - Add the following to every tour: best season, distances and drive times per leg, the hotel tier options with sample properties, a pricing breakdown, a cancellation summary, practical tips (for example, the Taj is closed on Fridays), and 3-5 tour-specific FAQs.
  - Expand the destination pages to 600+ words with original advice (routes, seasons and weather, permits such as the Rohtang/Atal Tunnel permit, and Ranthambore zone booking).

### C6. FAQ schema has 7 answers, but only 1 answer is in the HTML. Severity: MEDIUM
- Evidence: in `HomeClient.tsx` the FAQ uses `{isOpen && <div>answer</div>}`. Only the first answer is server-rendered; the `FAQPage` JSON-LD carries all seven.
- Fix: render all answers in the DOM and hide them with CSS or `<details>`. FAQ rich results are limited to government and health sites, but the visible answers still matter for AI extraction.

### C7. Contradictions inside the content and doubtful specifics. Severity: MEDIUM
- Same Day Agra: the overview says "in just 3 hours", but the itinerary says "3.5 hour drive". The itinerary includes "lunch at a 5-star restaurant", but the exclusions list "Lunch at Agra".
- Golden Triangle highlights promise "priority entry" to the Taj, and a review mentions "skip-the-line". The ASI offers no priority entry for operators. Also, sunrise on Day 3 conflicts with the Day 2 drive.
- The FAQ says fares "include ... driver allowances", but `cabsData.ts` lists a separate `driverAllowancePerDayINR` of 350-800. The trust badge says "No Hidden Tolls", but FAQ-2 says tolls are "billed at actual".
- The tours page shows "Prices shown per person (Double Occupancy)", but hotels are excluded from the base package.
- The gallery CTA says "50+ Real Guest Photos" (GallerySection), but there are 31 photos.
- The layout keyword list targets "Char Dham Yatra package", but no such page exists.
- "Elephant ride to Amber Fort" appears in two tours. It is ethically contested and something many international buyers avoid; offer the jeep option first.
- Fix: settle on one version of each fact and state which tours include hotels.

### C8. Review incentive offered without a disclosure. Severity: MEDIUM
- Evidence: Gallery: "featured travelers receive an exclusive 10% loyalty discount voucher" / "Receive instant travel credit voucher".
- Fix: disclose the incentive next to any featured review, and never offer it in exchange for Google or TripAdvisor reviews (both platforms prohibit incentivised reviews).

### C9. AI-typical brochure phrasing and stock imagery. Severity: MEDIUM
- Evidence: generic superlatives repeat across the data: "quintessential", "majestic" x3, "breathtaking", "kaleidoscope", "evocative", "Recharge your soul", "crown jewels", "marvel" x3, "witness" x5, "luxury" x6, "sanitized" x2, "Bespoke", "Handcrafted", "100%". Every tour, destination and gallery-section image is an Unsplash stock photo, and the homepage "Real Travelers" gallery has stock captions ("Mediterranean-like golden glow"). Body copy is unique across tours (highest 5-gram Jaccard 0.009), so there is no duplication problem. The issue is generic copy with no first-hand experience.
- Fix: add first-hand detail. For example: the exact sunrise entry gate you use at the Taj, where your drivers stop for breakfast on the Yamuna Expressway, what traffic is like at Solang in December, and the Atal Tunnel permit process. Add real fleet and driver photos, and attribute itineraries to a named tour planner.

### C10. Meta descriptions are cut off mid-word. Severity: LOW
- Evidence: `overview.slice(0,160)` and `description.slice(0,160)` in `app/tours/[slug]` and `app/destinations/[region]`. 18 of 19 dynamic descriptions end mid-word, for example "...hilltop fortresses of Jaipur" ending at "...Jaipur to the p", and "...single act". The homepage description is 180 characters, and the description on /tours and /gallery repeats the brand name. `metadata_template.py`: site_risk low, templated_ratio 0.0, no shared CTA.
- Fix: write a description field for each tour (140-155 characters, ending on a full word) that includes the duration and the starting price.

### C11. No freshness signals. Severity: LOW
- Evidence: there is no visible "updated" date. publication_date is 2026-01-01 on every page, and the Offer `validFrom` is 2026-01-01. Prices have no season or year label.
- Fix: label prices "valid for Oct 2026-Mar 2027", show "Last updated" on tours, and add `dateModified`.

## Readability
Flesch Reading Ease is 35-63 (median about 47) and Flesch-Kincaid grade 7-10 for tours, destinations and FAQs. That is acceptable for an adult travel audience. The copy is mostly sentence fragments and adjective-heavy lists. The FAQs are the hardest to read (grade 11.6, 17 words per sentence). Shorter, more specific sentences would help.

## Strengths
- Unique body copy for each tour; no near-duplicate pages.
- Concrete, quotable facts: per-km rates (Rs 11/17/24/38/42), a 250 km/day minimum, driver allowances, starting prices in INR and USD, durations, and drive times from Delhi.
- 31 real client photos (`/client/client(N).jpeg`). This is the only genuine experience signal.
- NAP is consistent (Connaught Place address and phone in the footer and schema). WhatsApp contact.
- Clean SSR HTML, a single H1 per page, and TouristTrip, Breadcrumb and TaxiService schema.

## AI citation readiness: 35/100
Positives: price and rate facts, a clear structure for routes and durations, and FAQ questions written as questions. Negatives:
- Days 2+ of each itinerary and 6 of the 7 FAQ answers are missing from the HTML.
- No author or entity verification (`sameAs` is empty).
- The numbers contradict each other.
- Superlatives that can't be cited.
- No dates.

## Structured findings (audit-data.json, Content Quality)
```json
{"category":"Content Quality","score":38,"eeat":{"experience":35,"expertise":40,"authoritativeness":15,"trustworthiness":20,"composite":27},"ai_citation_readiness":35,
"metadata_template":{"site_risk":"low","templated_ratio":0.0,"shared_cta_phrases":{}},
"findings":[
{"id":"C1","severity":"critical","title":"Testimonials use stock avatars, unlinked 'verified' Google/TripAdvisor badges"},
{"id":"C2","severity":"critical","title":"Contradictory review counts (1,450 vs 10,000+ vs 5,271) + self-serving aggregateRating"},
{"id":"C3","severity":"high","title":"Unsubstantiated 'Government Approved/MoT', '15 years', 'India's premier' claims"},
{"id":"C4","severity":"high","title":"No About/Contact/Privacy/Terms/Cancellation pages; no named owner; email mismatch"},
{"id":"C5","severity":"high","title":"Thin tour/destination pages; only Day 1 itinerary in HTML"},
{"id":"C6","severity":"medium","title":"FAQ: 1 of 7 answers in DOM vs 7 in FAQPage schema"},
{"id":"C7","severity":"medium","title":"Internal factual contradictions (drive time, lunch, tolls, driver allowance, 'priority entry')"},
{"id":"C8","severity":"medium","title":"Undisclosed review incentive (10% voucher)"},
{"id":"C9","severity":"medium","title":"Generic AI-style superlatives; all tour imagery is stock"},
{"id":"C10","severity":"low","title":"Meta descriptions hard-truncated mid-word at 160 chars"},
{"id":"C11","severity":"low","title":"No freshness/updated dates; prices lack validity window"}]}
```
