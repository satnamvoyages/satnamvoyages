# Satnam Voyages — Next.js Rebuild (SEO + AEO + GEO)

This is your site rebuilt from the original client-only Vite/React SPA into
a **Next.js 15 (App Router)** project. Every page is now server-rendered /
statically pre-rendered, so search engines (and AI answer engines) receive
full HTML content instead of an empty shell.

## What was fixed / added

1. **Crawlability (the #1 problem)** — the old site rendered everything with
   client-side JavaScript, so a crawler fetching the page got almost no
   content. Every route here is now pre-rendered at build time
   (`generateStaticParams`), so the real title, headings, text, and links
   are present in the raw HTML response.
2. **Per-page metadata** — every tour, destination, and core page has its
   own unique `<title>`, meta description, canonical URL, and Open Graph
   tags via Next's `generateMetadata`, instead of one shared tag set.
3. **Structured data (Schema.org JSON-LD)**, rendered server-side (not via
   `useEffect`, so it's actually visible to crawlers):
   - Site-wide `TravelAgency` + `TaxiService` + `WebSite` (layout)
   - `FAQPage` (home page)
   - `ItemList` of all tours (tours directory)
   - `TouristTrip` + `BreadcrumbList` (each tour page)
   - `TouristDestination` + `BreadcrumbList` (each region page)
   - `TaxiService` with an `OfferCatalog` of fleet rates (cabs page)
   - `ImageGallery` (gallery page)
4. **`sitemap.xml`** (`app/sitemap.ts`) and **`robots.txt`** (`app/robots.ts`)
   generated automatically from your live tour/destination data — no more
   manual sitemap page.
5. **`public/llms.txt`** — a plain-language summary of the business, key
   pages, and FAQs for AI answer engines (ChatGPT, Perplexity, Google AI
   Overviews, Claude, etc.) to read directly. This is the emerging **GEO**
   (Generative Engine Optimization) equivalent of `robots.txt`.
6. **Real `<a>`/`<Link>` navigation** everywhere (tours grid, footer,
   navbar, destination cards) instead of `onClick` + JS routing, so every
   internal link is crawlable and passes link equity.
7. **Favicon optimized** from 1.4 MB → ~58 KB (was hurting load speed,
   which is a ranking factor).
8. Booking form email API (`/api/send-inquiry`) ported as-is to a Next.js
   Route Handler using the same Gmail/Nodemailer logic you already had.

## Project structure

```
app/
  layout.tsx              Root layout: fonts, Navbar/Footer, site-wide JSON-LD
  page.tsx                Home
  tours/page.tsx           Tours directory
  tours/[slug]/page.tsx     Dynamic tour detail (16 tours, statically generated)
  destinations/[region]/   Dynamic region page (Rajasthan/Himachal/Uttarakhand)
  cabs/page.tsx
  gallery/page.tsx
  sitemap.ts / robots.ts
  api/send-inquiry/route.ts
components/                All UI, ported to Next (Link/useRouter, "use client" where interactive)
lib/data/                  Your original data files, unchanged
lib/types.ts
public/assets, public/client, public/llms.txt
```

## Running locally

```bash
npm install
cp .env.example .env.local   # fill in your Gmail app password
npm run dev                  # http://localhost:3000
```

## Building & deploying

```bash
npm run build
npm start
```

Because you already had `vercel.json` / `@vercel/node` in the old project,
**Vercel** is the easiest deploy target — it runs Next.js natively with zero
config (static pages + the `/api/send-inquiry` route both work out of the
box). Push this folder to a GitHub repo and import it in Vercel, or run
`npx vercel` from this directory. Any other Node host (Render, Railway, a
VPS with `next start`) also works.

Set these environment variables on your host (same as before):
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `CONTACT_RECEIVER_EMAIL` (optional)

## Still needed from you

- **Re-add client photos** into `public/client/` as `client(1).jpeg` …
  `client(31).jpeg` (matching `lib/data/clientPhotosData.ts`) — you removed
  these before sending the zip. The gallery/scroller gracefully hide
  themselves when this folder is empty, so nothing breaks in the meantime.
- After deploying, submit `https://satnamvoyages.com/sitemap.xml` in
  Google Search Console and request indexing / re-crawling — this is what
  gets the "not indexed" problem fixed going forward.
- Fonts currently load via a Google Fonts `<link>` tag (same as your old
  `index.html`) rather than `next/font/google`, only because this sandbox
  couldn't reach `fonts.googleapis.com` at build time to verify it. On your
  real machine/host (which has normal internet access) you can switch to
  `next/font/google` for slightly faster, self-hosted, zero-layout-shift
  fonts — happy to make that change if you'd like.
