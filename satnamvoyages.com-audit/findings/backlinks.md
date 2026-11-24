# Backlink Profile: satnamvoyages.com (and www)

Date: 2026-11-24 | Tier 0 (Common Crawl + verification crawler only)

## Result: INSUFFICIENT DATA (no numeric Backlink Health Score)

| Metric | Value | Source |
|---|---|---|
| In Common Crawl host/domain graph | No | CC (domain-level, confidence 0.50), release cc-main-2026-aug-sep-oct |
| PageRank / rank | null | CC |
| Harmonic centrality / rank | null | CC |
| Hosts in graph | null | CC |

The www variant normalizes to the same registered domain, so it returned the identical result (cache hit).

Interpretation: the tool states the domain "may be too new, too small, or not yet crawled". Absence from the graph indicates little or no link visibility to Common Crawl. It does not prove zero backlinks.

## Not measurable (no credentials / no data)
- Referring domain count and quality distribution (needs Moz or DataForSEO)
- Anchor text distribution, toxic/spam ratio, link velocity, follow/nofollow ratio, geographic relevance
- DA/PA/Spam Score (no Moz), Bing inbound links (no Bing)
- Verification crawler: not run, because no known backlink list was supplied

Scoring factors with data: 0 of 7, so the score is withheld.

## Findings
| Severity | Finding |
|---|---|
| High | Domain absent from the Common Crawl web graph. Authority and link equity are likely minimal or unindexed. |
| Medium | Backlink profile cannot be assessed. Recommend free Moz API key, Bing Webmaster verification of the site, and Google Search Console Links report for first-party data. |
| Low | Once links are known, run verify_backlinks.py on them. |

## Recommendations
1. Check Google Search Console > Links (free, authoritative for the owner).
2. Add Moz API key (free, 2,500 rows/month) and/or register in Bing Webmaster Tools.
3. Build initial links: travel directories, tourism boards, partner and supplier sites, local citations, travel press and guest content.
4. Related audits: /seo technical and /seo content for crawlability and E-E-A-T.
