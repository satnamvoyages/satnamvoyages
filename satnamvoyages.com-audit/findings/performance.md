# Performance findings - satnamvoyages.com (2026-11-24)

## Measurement status
- PSI public endpoint: HTTP 429 (daily keyless quota exhausted) for all 3 URLs, mobile+desktop. No CrUX/field data, no Lighthouse lab score. Lighthouse CLI via npx was not run (blocked by permission).
- Only measured values: curl (lab, single run, from this machine): TTFB 0.11-0.13s on all 3 pages; HTML 174,939 B (/), 103,567 B (tour), 52,842 B (/gallery). Server Vercel, X-Vercel-Cache HIT, Cache-Control public,max-age=0,must-revalidate.
- CWV (LCP/INP/CLS) numeric values NOT measured. Scores below are static-analysis estimates.

## Scores (estimated, code-based)
- Performance: 58/100. Images: 52/100.

## Findings
1. HIGH - 19.97 MB hero video autoplays with preload="auto": components/HomeClient.tsx:95-108, public/assets/hero.mp4 (19,967,741 B). Competes with LCP/bandwidth on mobile, no Save-Data/mobile gating. Fix: <=2 MB compressed 720p, preload="none"/metadata, skip on mobile/slow connections.
2. HIGH - Most images are raw <img>, bypassing next/image (no AVIF/WebP, srcset, sizes, dimensions -> CLS risk): HomeClient.tsx:161,239,334,432; GallerySection.tsx:302,425; GalleryClient.tsx:47,127,137,285; TourDetailClient.tsx:154,167,176,337,393,481,598; ToursDirectoryClient.tsx:132; DestinationClient.tsx:35,100,161; CabsClient.tsx:88. next.config.ts:4-12 enables avif/webp but only helps next/image users (HomeClient.tsx:84, Navbar.tsx:71, Footer.tsx:38).
3. HIGH - /gallery: 31 local client JPEGs (public/client, 7.9 MB, up to 681 KB each, served unresized) at components/GalleryClient.tsx:121-130, plus 16 Unsplash 1200px images (GallerySection.tsx:28-193) rendered in 288px cards (h-72). All below fold are loading="lazy" (good), but the full-size originals are heavy once scrolled; the grid has no width/height (aspect-square on client cards mitigates CLS; Unsplash cards have fixed h-72, fine).
4. MEDIUM - Tour page hero/bento images lack loading hints and dimensions: TourDetailClient.tsx:154,167,176 (above-fold LCP candidates, no priority/fetchpriority, no srcset). Gallery header background img (GalleryClient.tsx:47-51, 1920px, opacity 25%) is eager, unsized, decorative with non-empty alt.
5. MEDIUM - Oversized logos via next/image: public/assets/header_logo.png 479 KB (displayed 200x64), logo_ft.png 385 KB (160x96). next/image will resize, but source files are heavy; IMG_8143.PNG 623 KB unused? verify.
6. MEDIUM - Fonts loaded via render path <link> to Google Fonts, 2 families, 15 weight/style variants: app/layout.tsx:126-133 (comment at :10-13 acknowledges). Extra DNS/TLS + render-blocking CSS; swap used, but fallback metric mismatch -> CLS. Fix: next/font/google (self-hosted, size-adjust).
7. MEDIUM - HERO_IMAGE is Unsplash w=1920 q=85 via next/image with priority and sizes=100vw (HomeClient.tsx:55,84-90): good (LCP preload), but remote host adds a third-party Unsplash->Vercel optimizer hop; hero LCP candidate may be the video poster/video instead. Cache-Control on HTML max-age=0 (normal for Next dynamic/ISR on Vercel).
8. LOW - Third-party scripts: none found (no GTM/gtag/pixel via grep of app/components). Positive for INP/LCP. Client components dominate (HomeClient, TourDetailClient, GalleryClient 'use client'), so hydration cost of 175 KB HTML page; INP risk from gallery modals/filters unmeasured.
9. LOW - Alt text: present on all images checked; weak/repetitive "Satnam Voyages client moment" for 31+ photos (GalleryClient.tsx:127, ClientPhotoScroller.tsx:83,127, TourDetailClient.tsx:481); hero video aria-hidden OK.

## Positives
TTFB ~0.12s, Vercel edge HIT; priority on hero and nav logo; lazy loading on below-fold images; avif/webp formats configured; no third-party JS.

## Recommendations by impact
1. Shrink/defer hero.mp4 (finding 1). 2. Convert <img> to next/image with width/height/sizes; priority on tour hero (2,4). 3. Compress/resize public/client JPEGs and use next/image (3). 4. next/font (6). 5. Run PSI with an API key to obtain real LCP/INP/CLS and CrUX.
