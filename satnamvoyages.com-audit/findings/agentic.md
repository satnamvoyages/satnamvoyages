# Agent readiness: satnamvoyages.com (checked 2026-11-24; vendor-matrix facts dated 2026-09-23)

## Lighthouse Agentic Browsing
Not measurable: PSI returned HTTP 429 (daily quota, no API key) for both mobile and desktop. Reported as unmeasured, no X/N. Fix: configure a Google API key (/seo google setup) and rerun.

## Agent-UX heuristic (separate from Lighthouse): 100/100, complete (homepage only)
1597 a11y nodes, 117 interactive, 0 unnamed interactive, 13 landmarks, 61 real buttons and 61 anchors, no div-onclick widgets.
The score covers the homepage with the modal closed. The form is not in the initial DOM (static scan: 0 forms).

## Findings
- P1 Inquiry form labels not bound to inputs. components/InquiryModal.tsx (lines ~176-351): every <label> has no htmlFor and does not wrap its <input>/<select>/<textarea>, and the inputs have no id, name or aria-label. Agents using the accessibility tree see unnamed fields and fall back on placeholders. The heuristic missed this because the modal is closed on load. Fix: add id and htmlFor, name and autocomplete attributes (name, tel, email), and aria-required.
- P1 Modal has no role="dialog", aria-modal or aria-labelledby (grep found none). Add them, with focus management and an Escape handler.
- P1 llms.txt (200, 4937 bytes) fails the Lighthouse rule "contains no Markdown links". The content is useful, but the Key pages section is plain text. Convert it to [title](url): description lists. llms-full.txt is 404 (optional).
- P2 Submit button has a stable id (submit-inquiry-btn), which is good. Error states from /api/send-inquiry are JSON (400 and 500), but confirm they surface in an aria-live region.
- P2 robots.txt is permissive: a single * group with Allow: / and Disallow: /api/. Sitemap and Host use the apex domain while the site serves www, so confirm the canonical host.
- P3 No Content-Signal line (draft/proposal, checked 2026-09-23). Optional.
- P3 No WebMCP (W3C CG draft, checked 2026-09-23), no Markdown delivery (no Accept negotiation, no index.md, no alternate link), no ai-catalog.json, no API catalog, OAuth, A2A or UCP files. These are opportunities, not defects. A WebMCP tool such as submit_inquiry would be a candidate once the form is in the DOM.
- Passing: server-rendered content (1685 words without JS), robots.txt reachable, real 404s (no soft-404), semantic landmarks.

## Access policy (robots.txt)
- Training (GPTBot and similar): allowed via * group (no named groups, no Content-Signal)
- Search (OAI-SearchBot and similar): allowed
- User-triggered (ChatGPT-User, Claude-User, Perplexity-User): allowed, and /api/ is disallowed. Vendors differ in whether they honour robots.txt for these agents.
Note: Disallow: /api/ does not stop an agent that fills the form in a browser.

## Browser sandbox
No sandbox warning reported.
