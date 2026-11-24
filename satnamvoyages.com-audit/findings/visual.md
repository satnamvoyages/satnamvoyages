# Visual Audit - satnamvoyages.com (2026-11-24)
Pages: / , /cabs , /tours/golden-triangle-tour. Viewports: desktop 1920x1080, laptop, tablet, mobile 375x812 (2x).
Browser sandbox: enabled (sandbox: true). Screenshots: screenshots/{home,cabs,tour}/www_satnamvoyages_com_{desktop,laptop,tablet,mobile}.png
Method: visual review of screenshots only; no programmatic overflow or tap-target measurement.

## Findings
1. HIGH - Floating call and chat buttons overlap content on mobile. (cabs, tour)
   - Cabs: the round phone and chat buttons cover the trust-badge card text ("GPS Live Tracking...", "Zero Surge Pricing / Transparent FASTag Bills" are cut off).
   - Tour: the chat bubble covers the green WhatsApp button in the sticky quote bar (label reads "WHAT..."). The WhatsApp CTA is partly unreadable and its tap area is blocked.
   - The bubbles also stack on top of the bottom nav "Chat / Call" item. This is three redundant contact controls in the bottom-right corner.
2. HIGH - Tour page: the sticky bar and bottom nav stack. About 170px of the 812px viewport is permanently covered on mobile (sticky quote bar plus 4-tab bottom nav, with floating buttons over both). The "STARTING QUOTE Rs 18,500 / person" text wraps awkwardly ("/" and "person" on separate lines).
3. MEDIUM - Tour page, desktop gallery: the 5th tile is a broken image (alt icon visible at about x=1275, y=762, beside "VIEW ALL PHOTOS (11)").
4. MEDIUM - Cabs page: the fleet card photos do not match the vehicles. The "Executive Sedan" shows a blue Fiat 500 in a European street. The "Luxury SUV - Innova Crysta" shows a white Ford Expedition in a desert. The "VIP Premium SUV" shows a Porsche Panamera. This undermines trust and conflicts with the copy (Dzire/Etios, Innova, Fortuner).
5. MEDIUM - Tour page, desktop: "FILL BOOKING FORM" is a small button in a card at top right and wraps onto two lines. The booking path is only clear after scrolling. No phone or WhatsApp CTA in the hero, apart from the top bar and floating buttons.
6. MEDIUM - Cabs page, desktop: the hero has a large empty area and a trust box whose text is only about 12-13px. No fare form or price is visible above the fold. "Get instant fare estimate" is a ghost button with low emphasis.
7. LOW - Home, desktop: the top bar phone number and WhatsApp pill are small (about 11-12px text, pill about 24px tall). The WhatsApp pill is under 48px and 32px, so it is a weak tap target on tablet. On mobile they render larger (about 24px and 48px tall pill).
8. LOW - Home hero: the headline text sits on a busy video background. Contrast is acceptable because of the dark overlay, but the subtitle over bright areas is borderline. Mobile hero video appears to be a different clip from desktop (fine).
9. LOW - Mobile route line on the tour page is truncated with an ellipsis ("Jaipur -> D..."). The header and top bar take about 130px before the content (two-row top bar).
10. LOW - Notification badge "1" on the chat bubble with no visible chat content. This reads as a fake notification, a mild trust and intrusiveness issue.

## Above-the-fold assessment
- Home: value proposition is clear ("Discover India in Comfort & Luxury; bespoke private journeys & chauffeured outstation fleets"). The phone and WhatsApp are visible in the top bar. Primary CTA "BOOK YOUR JOURNEY" is visible on desktop (header also has "BOOK CAB / TOUR") and on mobile. PASS.
- Cabs: H1 and a clear "BOOK ON WHATSAPP" CTA are visible on both desktop and mobile. The phone is in the top bar. The inquiry path is "Get instant fare estimate". PASS, with the overlap in finding 1.
- Tour: H1, duration, rating (4.9, 342 reviews) and a booking button are visible. On desktop the price is not visible above the fold. On mobile the price and the book/WhatsApp bar are visible but partly covered (finding 1). PARTIAL.

## Mobile rendering
- No horizontal overflow visible. The hamburger menu is present and the bottom nav (Home / Tours / Book Cab / Chat/Call) is good for conversion.
- Body text appears 16px or larger on mobile, which is good. Desktop small text (11-13px) is on trust badges, top bar and the feature strip.
- Tap targets: the main CTAs are about 48-100px tall, which is fine. The top bar WhatsApp pill is borderline. The floating buttons overlap other targets.
- Popups: no intrusive modal or interstitial or cookie banner was observed on first load. The only overlays are the persistent floating call and chat widgets and the sticky bars.

## Recommendations (priority order)
1. Remove the duplicate floating widgets on mobile, since the bottom nav already has Chat/Call. At least raise or reposition them so they do not cover the sticky tour bar or the content.
2. Fix the broken gallery image and replace the mismatched cab photos with real fleet photos.
3. Show a price and a larger CTA (and phone or WhatsApp) in the tour hero on desktop.
4. Reduce the top bar to one row on mobile and enlarge the small text and pills.
