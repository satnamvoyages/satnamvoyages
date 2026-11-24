# Action Plan: www.satnamvoyages.com (2026-11-24)

Each item lists its dependencies, a check that would show it failed, and a leading indicator to watch.

## Phase 1: Critical fixes (week 1)

**1. Unify the canonical host on www (about 1 hour)**
- **Change:** set `SITE_URL = 'https://www.satnamvoyages.com'` in `lib/constants.ts:1`, remove `host` from `app/robots.ts:14`, and redeploy.
- **Redirect:** in Vercel Domains, send `satnamvoyages.com` straight to www so http apex takes one hop.
- **Afterwards:** add a www Domain property in Search Console and submit `https://www.satnamvoyages.com/sitemap.xml`.
- **Unblocks:** all measurement, and everything below.
- **Failure check:** `curl -s https://www.satnamvoyages.com/ | grep canonical` still shows the apex, or any sitemap `<loc>` returns non-200.
- **Watch:** Search Console → Pages: "Alternate page with proper canonical" and "Page with redirect" counts fall toward 0 within 2–4 weeks.

**2. Remove unverifiable trust claims (half a day)**
- **Remove:**
  - `aggregateRating` from `app/layout.tsx:97-101`
  - per-tour rating and review-count badges
  - the "1,450+" text in `GalleryClient.tsx:72-73`
  - the "10,000+" figure, unless you have records
- **Testimonials:** replace the 4 stock-avatar entries with real reviews linked to their source, or remove them.
- **Credentials:** publish the registration and licence numbers, or remove "Government Approved / Ministry of Tourism / Police Verified / 15 years".
- **Depends on:** nothing. Do this before building listings (Phase 2).
- **Failure check:** any `aggregateRating` remains in the live JSON-LD without matching visible reviews.
- **Watch:** no manual action in Search Console → Security & Manual Actions.

**3. Use one contact identity (1 hour)**
- **Email:** use one email everywhere. Prefer a domain address such as `booking@satnamvoyages.com`, routed to the inbox you actually check. Read it from `CONTACT_EMAIL` in constants, and update `app/layout.tsx:87`, `lib/constants.ts:6` and the footer.
- **Phone:** replace the hardcoded `919718450905` in `InquiryModal.tsx:98`, `ItineraryBookingForm.tsx:133` and `send-inquiry/route.ts:203` with the constant.
- **Failure check:** grep the repo for `@gmail.com` and for the raw phone string.

## Phase 2: High-impact improvements (weeks 2–3)

**4. Create About, Contact, Privacy, Terms and Cancellation/Refund pages**
- **Contact page:** full unit-level address, map, hours, WhatsApp and phone.
- **About page:** owner or founder name, founding year, registration numbers.
- **Then:** add these pages to `app/sitemap.ts`, fix llms.txt to point to /contact, and add Markdown `[title](url)` links.
- **Depends on:** #3.
- **Watch:** all pages indexed in Search Console within 2 weeks.

**5. Claim Google Business Profile and fill `sameAs`**
- **Office question:** if Connaught Place is not a staffed, signed office, register as a service-area business with the address hidden.
- **Categories:** primary "Travel agency"; secondary "Taxi service" and "Tour operator".
- **Then:** add the GBP, Instagram, Facebook and TripAdvisor URLs to `sameAs` (`app/layout.tsx:102`) and the footer.
- **Depends on:** #2 and #3 (listings must match the corrected name, phone, address and email exactly).
- **Watch:** GBP Insights → profile views and calls; brand query impressions in Search Console.

**6. Put every itinerary day and FAQ answer in the HTML**
- **Code:** render all days and answers on the server and use CSS or `<details>` for the collapse, instead of `{isOpen && …}` / `expandedDay === 1` in `TourDetailClient.tsx` and `HomeClient.tsx`.
- **Per tour, add:** km and drive hours per leg, the Taj Mahal Friday closure, and 4–6 question-headed FAQs.
- **Failure check:** `curl` a tour page and confirm the Day 3 text is present.
- **Watch:** impressions for long-tail queries such as "day 3 jaipur itinerary" and "how far is agra from delhi".

**7. Fix price visibility and contradictions**
- **Prices:**
  - Show "From ₹X" on desktop tour pages; re-enable or rebuild the summary at `ItineraryBookingForm.tsx:398-408`.
  - Add a ₹/km fare table to /cabs.
  - Show per-car pricing for the same-day tours.
- **Content fixes:**
  - Remove "Hotel: Deluxe Tier" from itineraries where hotels are excluded.
  - Fix the lunch, guide and driver-allowance inclusions.
  - Make the drive times consistent.
  - Verify the "priority entry" claim.
- **Then:** update llms.txt to match.
- **Watch:** CTR on tour pages in Search Console; inquiry form submissions.

**8. Build about 10 cab route pages**
- **Routes:**
  - Delhi → Agra, Jaipur, Chandigarh, Haridwar/Rishikesh, Shimla, Manali, Dehradun/Mussoorie
  - Jaipur → Jodhpur and Udaipur
  - Delhi Airport transfer
- **Build:** generate them from `lib/data/cabsData.ts` with unique fares, km, tolls, route stops, vehicles and FAQs. Point the footer "Delhi to X Cab" items at them, add `TaxiService`+`Offer` schema, and cross-link with the same-day tour pages.
- **Quality gate:** at least 60% unique content per page. Stay under 30 route/location pages (warning) and never exceed 50 (hard stop).
- **Depends on:** #1 and #2.
- **Failure check:** after 8 weeks, indexed but zero impressions means the gap is authority, not page type.
- **Watch:** impressions for "delhi to X taxi/cab" queries.

**9. Performance quick wins**
- **Hero video:** compress `hero.mp4` from 20 MB to 2 MB or less, set `preload="metadata"`, and skip it on mobile or Save-Data.
- **Images:** migrate the raw `<img>` tags to `next/image` with `sizes`; resize the /gallery JPEGs and logos.
- **Fonts:** switch Google Fonts to `next/font`.
- **Measure:** first add a free PageSpeed API key (`/seo google setup`) so real LCP, INP and CLS can be measured before and after.

**10. Mobile UX fixes**
- Hide the floating bubbles when the tour sticky bar is visible, and remove the fake "1" badge.
- Use correct vehicle photos on /cabs, and fix the broken gallery tile.

## Phase 3: Content and authority (month 2)

11. **Rajasthan page:** retarget `/destinations/rajasthan` as a package listing for "Rajasthan tour packages from Delhi by car", with prices on the cards.
12. **Directory listings:** list on Justdial, TripAdvisor, Sulekha and IndiaMART, plus Bing Places and Bing Webmaster Tools, with identical name, address and phone. Always write "Satnam Voyages, Delhi travel agency" together.
13. **Tour pages:** tighten titles to about 60 characters and write unique meta descriptions; stop cutting off the first 160 characters of the overview. Add related-tour links per region (6 tours are currently reachable only from /tours).
14. **Schema:** use `Product`+`TouristTrip` with a full `Offer`, link `provider` to the agency `@id`, and fix the breadcrumbs. Add BreadcrumbList to /cabs and /gallery, `UnitPriceSpecification` for cabs, and `geo`, `openingHoursSpecification` and `hasMap`. Ready-to-use JSON-LD is in `findings/schema.md`.
15. **Security headers:** add CSP, frame-ancestors, Referrer-Policy and Permissions-Policy, and remove `Access-Control-Allow-Origin: *` from HTML responses.
16. **Accessibility:** add form labels with `htmlFor` and `id`, plus `role="dialog"` and focus management in `InquiryModal.tsx`.
17. **Images:** replace stock tour images with your own trip photos where possible, and give the gallery photos descriptive alt text.
18. **Disclosure:** disclose the review incentive, or drop it.

## Phase 4: Monitoring (ongoing)

- **Sitemap:** use real per-page `lastModified` dates and remove priority and changefreq.
- **IndexNow:** optional, useful for Bing.
- **Drift baseline:** run `/seo drift baseline https://www.satnamvoyages.com/` after Phase 1, and `/seo drift compare` after each deploy.
- **Monthly checks:** in Search Console, track indexed pages, brand and route impressions and the manual-actions panel. Track GBP calls and review velocity.
- **Re-audit:** after Phase 2, connect a Search Console/PageSpeed key and a free Moz key for real field and backlink data.
