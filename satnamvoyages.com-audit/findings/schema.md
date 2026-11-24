# Schema / Structured Data Audit - satnamvoyages.com
Score: 58/100. Checked: homepage render JSON, live /tours and /tours/golden-triangle-tour, source code. JSON-LD is server-rendered (present in raw HTML).

## Detection
| Page | Types | Source |
|---|---|---|
| All pages (layout) | @graph: TravelAgency, TaxiService, WebSite, PostalAddress, AggregateRating, Country | app/layout.tsx:73-120, injected :135-139 |
| / | + FAQPage/Question/Answer | app/page.tsx:18-35 |
| /tours | ItemList of TouristTrip+Offer; BreadcrumbList | app/tours/page.tsx:19-58 |
| /tours/[slug] | TouristTrip+Offer+itinerary ItemList; BreadcrumbList | app/tours/[slug]/page.tsx:40-90 |
| /cabs | TaxiService, OfferCatalog, Offer, Service | app/cabs/page.tsx:19-50 |
| /destinations/[region] | TouristDestination, TouristAttraction, BreadcrumbList | app/destinations/[region]/page.tsx:40-71 |
| /gallery | ImageGallery | app/gallery/page.tsx:18-30 |

Syntax valid, https://schema.org context, no deprecated types. The layout block repeats on every page (tour page has 4 ld+json blocks).

## Findings
### HIGH
1. **Self-serving, unverifiable AggregateRating** (app/layout.tsx:97-101). Hardcoded 4.92 / 1450 on the TravelAgency (LocalBusiness subtype) about itself, on every page. Homepage shows only 4 testimonials (lib/data/faqsData.ts:55-95); 1,450 reviews are not visible on-page. Violates Google review snippet policy (self-serving LocalBusiness reviews; markup must match visible content). Risk: manual action / eligibility loss. Fix: remove aggregateRating from the agency node. Re-add only with a real visible review listing, and attach to a specific Product/TouristTrip, not the org site-wide.
2. **Apex/www inconsistency.** Apex 308-redirects to https://www.satnamvoyages.com/ (verified), but SITE_URL = https://satnamvoyages.com (lib/constants.ts:1) drives every @id, url, logo, breadcrumb item, canonical and og:url (canonical on / is `https://satnamvoyages.com` without slash; on tours `https://satnamvoyages.com/tours/...`). Canonical points at a URL that redirects to the page itself. Fix: set SITE_URL to https://www.satnamvoyages.com (single change fixes schema, canonical, og:url).

### MEDIUM
3. Empty `sameAs: []` (layout.tsx:102): populate with real profiles (Google Business Profile, Facebook, Instagram, TripAdvisor, YouTube) or remove.
4. LocalBusiness gaps: no geo, openingHoursSpecification, hasMap, contactPoint. telephone present. image is an Unsplash stock photo, use a brand/office photo. Email mismatch: schema booking@satnamvoyages.com vs CONTACT_EMAIL satnamvoyages@gmail.com (lib/constants.ts:6).
5. Tour pages: TouristTrip+Offer is not a Google rich result type; add Product (multi-type) with brand/offers. Offer lacks url, priceValidUntil, seller; validFrom hardcoded 2026-01-01. `provider` is a duplicate unlinked TravelAgency (tours/[slug]:71-75, cabs:25-30): reference `{"@id": ".../#agency"}`. Itinerary days typed TouristAttraction named "Day N" is semantically wrong. /tours list items lack @id.
6. Destinations BreadcrumbList (destinations/[region]/page.tsx:60-64): positions 2 and 3 point to the same URL and "Destinations" has no real page. No BreadcrumbList on /cabs and /gallery.
7. Cabs Offer price is a per-km rate without unit (use UnitPriceSpecification unitCode KMT). /cabs TaxiService @id (/cabs#taxi) differs from layout's /#taxi: two entities for one service.
8. TaxiService has both serviceArea (Country) and areaServed; keep areaServed.

### LOW
9. WebSite lacks inLanguage; no WebPage/CollectionPage nodes (optional). ImageGallery description mentions reviews without Review markup (fine); add ImageObject items optionally.

### INFO
10. Homepage FAQPage (app/page.tsx:18-35): structurally valid; FAQ rich results retired for all sites May 7 2026, no Google SERP benefit; AI/GEO benefit unconfirmed. No action.

## Ready-to-use JSON-LD (after SITE_URL -> www; fill TODO values; coordinates approximate for Connaught Place, verify)

### Agency node (replaces layout agency node; aggregateRating removed)
```json
{
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": "https://www.satnamvoyages.com/#agency",
  "name": "Satnam Voyages",
  "url": "https://www.satnamvoyages.com/",
  "logo": { "@type": "ImageObject", "url": "https://www.satnamvoyages.com/assets/logo.png" },
  "image": "https://www.satnamvoyages.com/assets/TODO-brand-photo.jpg",
  "telephone": "+919718450905",
  "email": "TODO-confirm-one-email",
  "priceRange": "$$",
  "address": { "@type": "PostalAddress", "streetAddress": "Outer Circle, Connaught Place", "addressLocality": "New Delhi", "addressRegion": "Delhi", "postalCode": "110001", "addressCountry": "IN" },
  "geo": { "@type": "GeoCoordinates", "latitude": 28.6315, "longitude": 77.2167 },
  "hasMap": "TODO-google-maps-url",
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "19:00" }],
  "contactPoint": [{ "@type": "ContactPoint", "telephone": "+919718450905", "contactType": "reservations", "availableLanguage": ["English","Hindi"] }],
  "areaServed": ["Delhi NCR","Agra","Jaipur","Rajasthan","Himachal Pradesh","Uttarakhand"],
  "sameAs": ["TODO-facebook","TODO-instagram","TODO-google-business-profile","TODO-tripadvisor"]
}
```

### Tour detail (per tour)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Product", "TouristTrip"],
      "@id": "https://www.satnamvoyages.com/tours/golden-triangle-tour#trip",
      "name": "Golden Triangle Tour",
      "description": "tour.overview",
      "url": "https://www.satnamvoyages.com/tours/golden-triangle-tour",
      "image": ["tour.primaryImage (absolute URL)"],
      "brand": { "@id": "https://www.satnamvoyages.com/#agency" },
      "touristType": ["Cultural Tourism", "Heritage Tourism"],
      "provider": { "@id": "https://www.satnamvoyages.com/#agency" },
      "offers": {
        "@type": "Offer",
        "url": "https://www.satnamvoyages.com/tours/golden-triangle-tour",
        "price": 18500,
        "priceCurrency": "INR",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "seller": { "@id": "https://www.satnamvoyages.com/#agency" }
      },
      "itinerary": { "@type": "ItemList", "numberOfItems": 6,
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Day 1: title", "description": "day.description" }] }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.satnamvoyages.com/" },
        { "@type": "ListItem", "position": 2, "name": "Tour Packages", "item": "https://www.satnamvoyages.com/tours" },
        { "@type": "ListItem", "position": 3, "name": "Golden Triangle Tour", "item": "https://www.satnamvoyages.com/tours/golden-triangle-tour" }
      ]
    }
  ]
}
```
Do not add aggregateRating/review to the Product unless real reviews are visibly displayed on that tour page (toursData `rating` fields are not enough).

### Destination breadcrumb fix
```json
{ "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.satnamvoyages.com/" },
  { "@type": "ListItem", "position": 2, "name": "Rajasthan", "item": "https://www.satnamvoyages.com/destinations/rajasthan" } ] }
```

### Cabs breadcrumb
```json
{ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.satnamvoyages.com/" },
  { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.satnamvoyages.com/cabs" } ] }
```
Cab Offer: add `"priceSpecification": {"@type":"UnitPriceSpecification","price":<perKmRateINR>,"priceCurrency":"INR","unitCode":"KMT"}`; set /cabs TaxiService @id to `https://www.satnamvoyages.com/#taxi`, provider `{"@id":"https://www.satnamvoyages.com/#agency"}`.

## Score breakdown (58/100)
Good coverage, valid syntax, server-rendered; deductions: self-serving AggregateRating (-15), host/canonical mismatch (-10), missing geo/hours/sameAs/Product (-10), breadcrumb/modeling errors (-7).
