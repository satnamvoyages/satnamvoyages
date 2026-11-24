# Local SEO Findings - satnamvoyages.com (2026-11-24)
Score: 38/100. Free-tier only: no DataForSEO, no GBP/Justdial/Sulekha/TripAdvisor/IndiaMART lookups verified. Business type: hybrid-leaning SAB (Connaught Place address in schema/footer, India-wide service area). Vertical: travel agency + chauffeur taxi.
Dimensions: GBP 6/25 (no Maps embed, no GBP link, sameAs empty); Reviews 8/20 (4.92/1450 claimed, unverifiable, no review source link); On-page 11/20; NAP/citations 5/15; Schema 6/10; Links/authority 2/10.

## NAP sources
| Source | Name | Address | Phone | Email |
| lib/constants.ts:1-13 / Footer.tsx:86 | Satnam Voyages | Outer Circle, Connaught Place, New Delhi 110001 | +91 97184 50905 | satnamvoyages@gmail.com (constants.ts:6, Footer.tsx:96) |
| app/layout.tsx:74-103 JSON-LD | Satnam Voyages | same (constants) | +919718450905 | booking@satnamvoyages.com (layout.tsx:87) HARDCODED MISMATCH |
| InquiryModal.tsx:98, ItineraryBookingForm.tsx:133, send-inquiry/route.ts:203 | - | - | 919718450905 hardcoded (consistent but not using constant) | - |
Address is a generic "Outer Circle, Connaught Place" with no building/shop number; a Google-verifiable address needs a full unit-level one. Footer says "24/7 Booking Desk" but no openingHours in schema.

## Findings
- HIGH: Email mismatch (booking@ in schema vs gmail in footer). Fix: single CONTACT_EMAIL constant. Also a gmail address weakens trust.
- CRITICAL: sameAs is empty (layout.tsx:102); no Facebook/Instagram/GBP/TripAdvisor/Justdial links anywhere in code (grep found none). No Maps embed or GBP "Write a review" link on site. Entity not tied to any off-site profile.
- CRITICAL/HIGH: AggregateRating 4.92 / 1450 (layout.tsx:99-100) is hardcoded sitewide, with no visible verifiable review source; only 3-4 sample reviews in lib/data/faqsData.ts:48+, labelled Google Reviews/TripAdvisor. Self-serving/unverifiable rating on TravelAgency risks a Google manual action (rich-result ineligibility for LocalBusiness self-serving reviews) and misrepresentation. Only keep if it mirrors the real GBP count; link to the source. GalleryClient.tsx:72-73 repeats "1,450+ Verified Reviews".
- HIGH: Schema gaps: no geo (lat/long 5 decimals), no openingHoursSpecification, no hasMap, no sameAs, image is an Unsplash stock photo (layout.tsx:83), priceRange "$$" should be INR-appropriate (e.g. "INR 2800-17500"). TaxiService uses areaServed as plain strings and serviceArea Country India; use AdministrativeArea/City objects and add telephone/address via provider. /cabs JSON-LD provider is an inline TravelAgency stub, not an @id reference (cabs/page.tsx:25-30); duplicate-entity risk. Keep TravelAgency; consider adding LocalBusiness-compatible subtype only if a real staffed office exists.
- HIGH: Office legitimacy. If Connaught Place is not a staffed, signed office, a GBP must be created as a service-area business with address hidden; listing a non-staffed address violates Google guidelines (suspension risk). Confirm with owner.
- HIGH (opportunity): Route pages absent. Sitemap (app/sitemap.ts) has 4 static + 16 tours + 3 destination pages (~23 URLs). Cab routes exist only as a data table (lib/data/cabsData.ts:136-146, 10 routes with distance/fare) rendered inside /cabs. Dedicated service pages are the #1 local organic factor. Build /cabs/delhi-to-agra, delhi-to-jaipur, delhi-to-chandigarh, delhi-to-haridwar-rishikesh, delhi-to-shimla, delhi-to-manali, delhi-to-dehradun-mussoorie, jaipur-to-jodhpur, jaipur-to-udaipur, plus airport transfer: ~10 pages. Plus city hubs (Delhi, Agra, Jaipur) optional. Total new <= ~15, so site stays ~38 URLs: UNDER the 30-location-page warning threshold for location/route pages. Quality gate: do not scale beyond 30 route/location pages without unique content (fares, stops, toll/expressway, vehicle, FAQ, real trip reviews); hard stop at 50. Each page needs 60%+ unique content; pass the swap test (change city name -> still unique).
- MEDIUM: Existing same-day Delhi-Agra and Delhi-Jaipur tour pages (tours/same-day-*) could cannibalize route pages; cross-link and differentiate (tour vs point-to-point cab).
- MEDIUM: Title/description on /cabs are good (cabs/page.tsx:7-9) but no city-targeted H1/"taxi" keywords; no LocalBusiness phone click-to-call tracking evidence.
- MEDIUM: Domain canonical: schema uses https://satnamvoyages.com while audited URL is www; confirm www to apex redirect and consistency.
- MEDIUM: No NAP-bearing contact page; NAP appears only in footer and schema. Add /contact with address, map, hours, WhatsApp.
- LOW: Footer "24/7" claim should match hours in GBP/schema.

## Off-site citations (NOT verified - free-tier, no search access)
Facebook/Instagram guess URLs returned HTTP 200 to curl but login walls return 200 for any handle, so this proves nothing. Check manually: Google Business Profile (primary category "Travel agency" or "Taxi service"/"Tour operator"; secondary the others), Justdial, Sulekha, TripAdvisor (supplier/tour operator listing), IndiaMART, Yelp (low value in India), TripAdvisor, MakeMyTrip/Cleartrip vendor, Facebook, Instagram, LinkedIn, Clutch-like. Priorities for India: GBP > Justdial > TripAdvisor > Sulekha > IndiaMART > Facebook. Must match "Satnam Voyages | +91 97184 50905 | same address" exactly.

## Top actions
1. CRITICAL Create/claim and verify GBP (SAB if no staffed office); add link, review URL, Maps embed or hasMap.
2. CRITICAL Populate sameAs with real profiles; add them to footer.
3. CRITICAL/HIGH Reconcile or remove hardcoded aggregateRating; use real, sourced numbers.
4. HIGH Unify email (layout.tsx:87 vs constants.ts:6).
5. HIGH Build ~10 unique cab route pages from POPULAR_CAB_ROUTES with Service/TaxiService + FAQ schema; stay under 30.
6. HIGH Add geo, openingHoursSpecification, hasMap, real logo/office image to schema; areaServed as typed objects.
7. HIGH Citation build-out on Justdial, TripAdvisor, Sulekha, IndiaMART with identical NAP.
8. MEDIUM Add /contact page and reviews feed (GBP/TripAdvisor) with response handling.
9. MEDIUM Full unit-level address and consistent use of constants (replace hardcoded 919718450905 in InquiryModal.tsx:98, ItineraryBookingForm.tsx:133).
10. LOW Align "24/7" claim and priceRange.

Limitations: no proximity/local pack data, no GBP data, no review velocity or response rate, no citation verification, rendered HTML only from homepage-render.json; Playwright sandbox status not checked.
