# SXO (Search Experience) Findings - satnamvoyages.com (2026-11-24)

Method: 4 target pages rendered with `render_page.py --mode always` (Playwright, sandbox: true), cross-checked with `parse_html.py` and read-only source (`components/TourDetailClient.tsx`, `components/ItineraryBookingForm.tsx`). SERP backwards analysis via WebSearch for 5 queries (10 organic results each, India-English results). The **SXO Gap Score** is separate from the SEO Health Score.

## Executive summary - top findings by severity

| # | Severity | Finding | Page |
|---|----------|---------|------|
| 1 | CRITICAL | Page-type mismatch. All 10 results for "delhi to manali taxi fare" are route fare pages (9 operator/OTA route pages and 1 fare guide), and 6 of 10 put a rupee fare in the title. /cabs is a generic fleet catalogue. It never mentions Manali in visible text, shows no fares, distance or travel time, and every footer "Delhi to X Cab" link points back to /cabs. `/cabs/delhi-to-manali` returns 404. | /cabs |
| 2 | HIGH | Tour prices are hidden on desktop. The only visible price is a mobile-only sticky bar (`lg:hidden`, TourDetailClient.tsx:618). The desktop "Live Price Customizer" has no number, and the price summary in ItineraryBookingForm.tsx:398-408 is commented out. JSON-LD still declares `Offer.price` 18500 / 5200 INR, so the structured data shows a price that desktop visitors never see. Every SERP competitor shows "from $/INR" on the card or above the fold. | golden-triangle, same-day-agra |
| 3 | HIGH | Page-type mismatch for "rajasthan tour packages". The SERP is 9/9 package listing pages (MMT, Thrillophilia, WanderOn, Thomas Cook...), each with a count and/or "from INR X" in the title. /destinations/rajasthan is a destination guide titled "Rajasthan - The Land of Kings Tours & Outstation Cabs". The title has no "packages", and the 7 package cards have no prices and no filter. | /destinations/rajasthan |
| 4 | HIGH | /cabs shows no per-km rates, although the title promises "Fixed Fares". The "outstation cab delhi" SERP sets the standard at INR 8-11/km for a sedan (Suri, Triveni, GTC, Chiku). Rates of 11/17/38/24 exist only in the OfferCatalog JSON-LD, with no `unitText`, so Google reads "Sedan: INR 11". The H1 "Premier Outstation Cabs & Fleets" and the "in India" title have no Delhi qualifier. Booking is WhatsApp-only, with no form or fare estimator. | /cabs |
| 5 | HIGH | Only Day 1 of the 6-day itinerary is in the HTML. Days 2-6 are collapsed accordions whose body text is not rendered. That text exists only in JSON-LD, so users and Google see one day of detail. | golden-triangle |
| 6 | HIGH | Same-day Agra shows a per-person price against a per-car market. The page says "INR 5,200 / person", and the form multiplies by the number of adults, so a family of 4 is quoted about INR 20,800. SERP titles anchor at "@ INR 5000" and "@ INR 9500" per car. | same-day-agra |
| 7 | HIGH | The trust layer cannot be verified. The pages claim "4.9 (342 reviews)" and "4.96 (890 reviews)", with a sitewide AggregateRating of 4.92/1450, but no review text appears anywhere. The pages have no TripAdvisor or Google review link. 9 of 14 images are Unsplash stock, shown under the heading "Traveler Photos". The contact address is a gmail.com account, and no tourism registration is shown. Competitors in the SERP (perfectagratours, GYG, Viator) show verified reviews and badges. | all |
| 8 | MEDIUM | The page contradicts itself on inclusions. Same-day: the itinerary promises "Meet private tour guide... lunch at a 5-star restaurant", but "Lunch at Agra" is listed as Not Included and no guide appears under Included. Golden Triangle: the overview promises "private local guides" and the highlights promise "priority entry", but tickets are excluded and no guide is listed. Each day shows "Hotel: Deluxe Tier", yet hotel accommodation is listed as Not Included. | both tours |
| 9 | MEDIUM | The Friday Taj Mahal closure is in the page data (`bestSeason: "Year Round (Taj closed on Fridays)"`) but is never rendered. The SERP leader (perfectagratours) shows it in 3 places, and the SERP summary for both tour queries surfaces it. | same-day-agra, golden-triangle |
| 10 | MEDIUM | Duration variant does not match the SERP. 5 of 10 Golden Triangle results are 3-4 day tours (titles: "4-Day", "3D2N", "3-Day", "3N/4D"). The site's only GT page is 6D/5N. | golden-triangle |
| 11 | MEDIUM | No FAQ blocks on any of the 4 pages. The SERP leaders answer feasibility, Friday closure, tolls, cancellation and distance in their FAQs. | all |
| 12 | LOW | Canonicals and schema `@id`s use `https://satnamvoyages.com/...`, which 308-redirects to `www`, so they point at a redirecting URL. The tour title has double parentheses: "(Same Day Return (12-14 Hours))". | all |

## SERP consensus per keyword

| Keyword | Dominant SERP page type | Confidence | Key SERP signals | Target page type | Mismatch |
|---|---|---|---|---|---|
| golden triangle tour from delhi | Product (bookable itinerary with price + Book) | 70% (GYG x1, Klook, Viator x3, IRCTC, hohodelhi); 2 operator landing pages, 1 GYG category | OTA dominance; "Private"/"Luxury"; 3-4 day duration; "FREE Cancellation", "Verified Reviews", "BOOK NOW"; prices "from $223", "$440", "INR 17,000 pp" | Product/itinerary (TouristTrip + Offer), but no visible desktop price, inquiry-only | MEDIUM (type aligned; price, duration and booking contract broken) |
| same day agra tour from delhi | Product (day-tour page) | 90% (9/10; 1 blog) | Price in title (2/10: "@ INR 5000", "@ INR 9500"); transport-mode variants (car, Shatabdi train, AC bus); Friday closure; per-car pricing | Product/itinerary | ALIGNED type; MEDIUM execution gaps |
| delhi to manali taxi (fare) | Route fare page (Product/Tool hybrid: route + fare table + book) | 90% (9/10 route pages, 1 fare guide) | Fare in title 6/10 (INR 3,599-8,999); distance ~509-540 km; 10-14 h; toll/state tax disclosure; one-way vs round trip | Service/fleet catalogue (no route) | **CRITICAL** |
| outstation cab delhi | Service/Landing (city outstation page with per-km rates) | 80% city/home service pages | Rs/km in titles/snippets (INR 8-11/km sedan, 15/km SUV, 23/km TT); "@25% off"; permit/years-in-business trust | Service page (no Delhi framing, no rates) | HIGH |
| rajasthan tour packages | Product listing / category (package catalogue with filters and from-prices) | 100% (9/9) | Count + price in title ("102 ...", "30+", "from INR 3560", "@ Rs 11,181", "Upto 25% Off"); OTA dominance; official govt package page | Destination guide / Hybrid (TouristDestination) | HIGH |

Note: competing head-on for "rajasthan tour packages" against MMT, Thomas Cook and Thrillophilia is unrealistic. Retarget the page to "rajasthan tour packages from delhi by car / private chauffeur", where operator sites can win.

## User stories (each tied to a SERP signal)

1. **Awareness - foreign first-timer (GT).** As a first-time visitor to India comparing GYG and Viator, I want to see the total price in USD, the number of days and what is included before I fill in any form, so I can compare like-for-like. *Signal: 5 of 10 results are GYG, Klook and Viator, with "from $" prices and "FREE Cancellation" in titles.*
2. **Consideration - shorter-trip planner (GT).** As a traveller with only 3-4 days, I want a compressed Golden Triangle version, so I do not have to rebuild a 6-day itinerary myself. *Signal: "4-Day", "3D2N", "3-Day" and "3N/4D" in 5 of 10 titles.*
3. **Decision - Indian family (same-day Agra).** As a family of 4 hiring a car to Agra, I want a per-car price that covers tolls, parking and driver allowance, so I can compare it with the INR 5,000-9,500 per-car offers I see. *Signal: "@ INR 5000" and "@ INR 9500" per car in titles; snippets warn that entry fees, lunch and guide are often excluded.*
4. **Consideration - day-tripper (same-day Agra).** As someone fitting Agra into one day, I need to know whether it is doable, how long it takes, and that the Taj is closed on Fridays, so I do not book a dead day. *Signal: SERP summary cites "long and tiring day" and Friday closure; train and bus variants rank.*
5. **Decision - route fare seeker (Delhi to Manali).** As someone booking a Delhi to Manali cab, I want the one-way and round-trip fare per vehicle, the distance and drive time, and whether tolls and state tax are extra, on one page, so I can book without calling. *Signal: 9/10 route pages; fare in 6/10 titles; Triveni shows "tolls & state tax extra at actuals".*
6. **Decision - corporate or event coordinator (outstation cab Delhi).** As an admin booking cars for a team, I want per-km rates, GST invoice availability, permit and verification proof, and a form I can submit without WhatsApp, so I can get approval. *Signal: Rs/km rates in 4 snippets; "All India Tourist Permit" and "since 2002" trust claims.*
7. **Consideration - package shopper (Rajasthan).** As someone browsing Rajasthan packages, I want to filter by days and budget and see "from INR X" on each card, so I can shortlist in seconds. *Signal: 9/9 listing pages with counts and from-prices in titles.*

## SXO Gap Score per page (out of 100)

| Dimension (max) | Golden Triangle | Same-day Agra | /cabs vs "delhi to manali taxi" | /cabs vs "outstation cab delhi" | /destinations/rajasthan |
|---|---|---|---|---|---|
| Page Type (15) | 10 | 11 | 2 | 8 | 6 |
| Content Depth (15) | 8 | 6 | 3 | 5 | 8 |
| UX Signals (15) | 9 | 8 | 6 | 6 | 7 |
| Schema (15) | 10 | 10 | 6 | 6 | 7 |
| Media (15) | 8 | 7 | 6 | 6 | 8 |
| Authority (15) | 4 | 4 | 4 | 4 | 4 |
| Freshness (10) | 5 | 5 | 4 | 4 | 4 |
| **SXO Gap Score** | **54** | **51** | **31** | **39** | **44** |

Evidence:
- **GT.** Rendered text is 927 visible words; trafilatura extracted only 257, so the main content is thin. Day-by-day detail is visible for Day 1 only. The page has a 3-vehicle table, include/exclude lists, and an inquiry form with "15m Response" and "No Advance Payment Needed". There is no FAQ, map or video. The schema has TouristTrip, Offer, ItemList (6 days) and BreadcrumbList, but the Offer price is not visible on desktop and the `@id`s use the non-www host. 9 of 14 images are Unsplash stock.
- **Same-day Agra.** 775 visible words. The itinerary is one paragraph with no hourly timeline. It has the lunch and guide contradictions, the Friday note is not rendered, and the price is per person.
- **/cabs.** 624 visible words. It compares 5 vehicles but shows no fares, no route list, no distance or time content, and no form; there are 5 "Book Cab on WhatsApp" CTAs. The only mention of "Manali" is in the meta description. The "Get Instant Fare Estimate" CTA leads to no estimator on the page.
- **Rajasthan.** 934 visible words. It has good destination depth (5 cities with attractions, best season, drive time from Delhi) and 7 package cards with duration and rating, but no price, no filter and no form. The title is missing "packages".
- **Authority, all pages.** Star ratings are claimed but no review text is shown. There is no TripAdvisor, Google or GYG profile link, no Ministry of Tourism, IATO or GST registration, and the email is a gmail.com address.

## Personas (from SERP signal clusters)

- **Foreign First-Timer.** Source: OTA results (GYG, Viator, Klook), USD prices, "Free Cancellation" and "Verified Reviews". Stage: consideration to decision. Questions: total in USD? Is it safe and legit? What exactly is included?
- **Indian Family.** Source: MMT, Thrillophilia and per-car INR prices; Innova and Tempo Traveller. Stage: decision. Questions: per-car or per-head price? Is the hotel included? Tolls?
- **Corporate Traveller / Coordinator.** Source: Rs/km rate snippets, permit and years-in-business trust claims, Fortuner/coach demand. Stage: decision. Questions: per-km rate, GST invoice, verified chauffeur, account billing.
- **Fare Comparer.** Source: fare in 6/10 Manali titles, "@ INR 5000" style titles, "Save up to INR 300" and "25% off". Stage: decision. Questions: cheapest one-way fare? What is extra?

### Persona scores (Relevance / Clarity / Trust / Action, each out of 25)

| Page | Persona | R | C | T | A | Total | Rating |
|---|---|---|---|---|---|---|---|
| Golden Triangle | Foreign First-Timer | 20 | 13 | 9 | 15 | 57 | Needs Work |
| | Indian Family | 18 | 11 | 11 | 17 | 57 | Needs Work |
| | Corporate | 8 | 12 | 10 | 12 | 42 | Needs Work |
| | Fare Comparer | 14 | 8 | 10 | 12 | 44 | Needs Work |
| Same-day Agra | Foreign First-Timer | 21 | 14 | 9 | 15 | 59 | Needs Work |
| | Indian Family | 17 | 9 | 11 | 17 | 54 | Needs Work |
| | Corporate | 12 | 12 | 10 | 13 | 47 | Needs Work |
| | Fare Comparer | 15 | 8 | 10 | 12 | 45 | Needs Work |
| /cabs (Manali / outstation) | Fare Comparer | 4 | 3 | 10 | 10 | 27 | Critical Mismatch |
| | Foreign First-Timer | 6 | 5 | 10 | 12 | 33 | Critical Mismatch |
| | Indian Family | 8 | 5 | 11 | 15 | 39 | Critical Mismatch |
| | Corporate | 12 | 8 | 11 | 12 | 43 | Needs Work |
| Rajasthan | Corporate | 5 | 10 | 10 | 8 | 33 | Critical Mismatch (low-weight persona) |
| | Fare Comparer | 10 | 4 | 10 | 10 | 34 | Critical Mismatch |
| | Indian Family | 15 | 9 | 10 | 12 | 46 | Needs Work |
| | Foreign First-Timer | 16 | 12 | 9 | 12 | 49 | Needs Work |

**Weakest persona: Fare Comparer on /cabs (27/100).** Top issue: no route and no fare. Fix: build `/cabs/delhi-to-manali` (and Agra, Jaipur, Shimla, Haridwar-Rishikesh, Chandigarh). Each page needs an H1 like "Delhi to Manali Taxi - 530 km, 12-13 hrs, from INR X (Sedan)" and a fare table with Sedan / Ertiga / Innova Crysta / Tempo Traveller rows and one-way and round-trip columns. Add an "Included: fuel, driver allowance, night charge | Extra: tolls approx INR X, HP state entry tax" line and a route-halts list (Karnal, Chandigarh, Bilaspur, Mandi, Kullu). Include a short form with pickup, drop, date and vehicle, plus "Get fare on WhatsApp", 6-8 FAQs, and TaxiService + Offer schema with `unitText`. Point the footer "Delhi to X Cab" links at these pages instead of /cabs.

**Systemic issues (all personas):**
- **Clarity.** The price is invisible on desktop or missing entirely.
- **Trust.** Ratings cannot be verified, stock photos are presented as "Traveler Photos", and there is no registration and only a gmail address.
- **Action.** Inquiry or WhatsApp is the only path. There is no instant book or deposit option, which matters most to foreign OTA-comparers.

### Priority actions
1. **(CRITICAL, /cabs)** Create route fare pages as described above. Turn /cabs into an "Outstation Cabs from Delhi" hub. It should have a visible per-km rate card (Sedan INR 11/km, Innova Crysta INR 17/km, Tempo Traveller INR 24/km, Fortuner INR 38/km), a minimum of 250-300 km/day, driver allowance, and toll/permit notes. It should also have a "Popular Routes from Delhi" grid with fares, plus a non-WhatsApp booking form. Add "Delhi" to the H1 and title. Add `unitText: "KMT"` / `UnitPriceSpecification` to the OfferCatalog.
2. **(HIGH, tours)** Render the price on all viewports, in the hero next to the duration badge: "From INR 18,500 per person (2 adults, Deluxe, Innova) | approx $220". Restore the commented "Est. Total" block in the form. For same-day Agra, add a per-car table (Sedan / Innova / Tempo Traveller) so it matches the market's per-car framing. Make "Starting" the true lowest combination (Standard + Sedan), or label the configuration it applies to.
3. **(HIGH, GT)** Server-render all 6 itinerary days. Keep the accordion as a visual style but put every day's text in the DOM, and set "Expand All" as the default when JS is off.
4. **(HIGH, trust, all)** Replace "Traveler Photos" stock images with real client photos, or rename the section. Show 3-5 real reviews with name, country and date, and link the Google Business Profile and TripAdvisor. Add tourism registration numbers and GST, and a domain email. Remove the sitewide self-serving AggregateRating unless it is backed by visible reviews.
5. **(HIGH, Rajasthan)** Retitle to "Rajasthan Tour Packages from Delhi - 7 Private Chauffeur Itineraries from INR X". Put a "from INR X / person" price and the inclusion icons on each card. Add duration filter chips (Same day / 6-8 days / 9-12 days), a comparison table (Days, Cities, Price, Best for), and an inquiry form. Keep the city guide below the packages.
6. **(MEDIUM)** Fix the inclusion contradictions (guide, lunch, hotel tier, priority entry). Render the Friday-closure note in the hero and itinerary. Add FAQ sections to all 4 pages. Add a 3-4 day Golden Triangle variant (or a "Short on time? 4-day version" toggle). Add Shatabdi train and Fatehpur Sikri variants for the Agra page.

## Wireframe
Not requested. A SOLL wireframe for the route fare page and the tour hero can be generated on request.

## Limitations
- WebSearch returns organic links only. Ads, Local Pack, PAA, AI Overview, featured snippets and related searches could not be observed, so SERP features are inferred from result types and snippet summaries. Results are not geolocated to Delhi with certainty.
- No search-volume or ranking data (GSC or Semrush were not used), so persona weighting is qualitative.
- Competitor depth was spot-checked on 2 pages only (trivenicabs Delhi to Manali, perfectagratours same-day). Other competitor classifications are based on titles and snippets.
- The INR/USD currency toggle behaviour and the desktop above-the-fold appearance were inferred from source and DOM, not from screenshots; see visual.md for screenshot analysis. Rendering was done with the browser sandbox enabled.
- Review counts and ratings on the site could not be verified against any external profile.

Related skills: `/seo schema` (TaxiService rate units, TouristTrip offers), `/seo content` (E-E-A-T and trust gaps), `/seo local` (GBP reviews for the CP office), `/seo page` (thin same-day page). Generate a PDF report? Use `/seo google report`.

## Structured findings (Search Experience category, audit-data.json compatible)

```json
{
  "category": "Search Experience",
  "sxo_gap_scores": {
    "/tours/golden-triangle-tour": 54,
    "/tours/same-day-delhi-agra-tour": 51,
    "/cabs (delhi to manali taxi)": 31,
    "/cabs (outstation cab delhi)": 39,
    "/destinations/rajasthan": 44
  },
  "findings": [
    {"id": "sxo-01", "severity": "critical", "page": "/cabs", "title": "No route-specific fare pages; SERP for 'delhi to manali taxi' is 90% route fare pages", "fix": "Create /cabs/delhi-to-<city> pages with fare table, distance, time, inclusions, form, FAQ; repoint footer route links"},
    {"id": "sxo-02", "severity": "high", "page": "/tours/*", "title": "Tour price visible only in mobile sticky bar; desktop shows none while Offer schema declares price", "fix": "Render 'From INR X / person' in hero on all viewports; restore Est. Total in form"},
    {"id": "sxo-03", "severity": "high", "page": "/destinations/rajasthan", "title": "Destination guide vs package-listing SERP; no prices or 'packages' in title", "fix": "Retitle for packages from Delhi; add prices, filters, comparison table to cards"},
    {"id": "sxo-04", "severity": "high", "page": "/cabs", "title": "No visible per-km rates despite 'Fixed Fares' title; rates only in schema without unitText; no Delhi qualifier; WhatsApp-only booking", "fix": "Visible rate card, Delhi H1/title, booking form, UnitPriceSpecification"},
    {"id": "sxo-05", "severity": "high", "page": "/tours/golden-triangle-tour", "title": "Days 2-6 itinerary text not in DOM (collapsed accordion); exists only in JSON-LD", "fix": "Server-render all days' content"},
    {"id": "sxo-06", "severity": "high", "page": "/tours/same-day-delhi-agra-tour", "title": "Per-person pricing (INR 5,200) vs per-car market (INR 5,000-9,500/car)", "fix": "Add per-car vehicle price table"},
    {"id": "sxo-07", "severity": "high", "page": "all", "title": "Unverifiable ratings, stock photos labelled 'Traveler Photos', gmail contact, no registrations", "fix": "Real reviews and photos, GBP/TripAdvisor links, registration and GST numbers, domain email"},
    {"id": "sxo-08", "severity": "medium", "page": "/tours/*", "title": "Inclusion contradictions (guide, lunch, hotel tier, priority entry)", "fix": "Align itinerary copy with include/exclude lists"},
    {"id": "sxo-09", "severity": "medium", "page": "/tours/*", "title": "Friday Taj closure in data but not rendered", "fix": "Show notice in hero and itinerary"},
    {"id": "sxo-10", "severity": "medium", "page": "/tours/golden-triangle-tour", "title": "Only 6D/5N; SERP favours 3-4 day variants", "fix": "Add 4-day variant page"},
    {"id": "sxo-11", "severity": "medium", "page": "all", "title": "No FAQ sections", "fix": "Add 6-8 SERP-derived FAQs per page"},
    {"id": "sxo-12", "severity": "low", "page": "all", "title": "Canonical/@id use non-www host that 308-redirects; double parentheses in same-day title", "fix": "Use www host in canonical and schema; clean title"}
  ]
}
```
