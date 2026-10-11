# PSD Workbench SEO audit — 2026-10-11

## Result and page ownership

Production: https://psdworkbench.com. The SEO release is Ready on Vercel, deployment `dpl_Ad2EKzWmryQENP6T6hJsEaJbFmCt`, with apex, www and fallback aliases. Production build passed. This work covers keyword research, intent, all existing page content and URL/crawl structure. It does not establish rankings or complete a functional PSD file test.

| Canonical URL | Search task | Primary term | Action |
| --- | --- | --- | --- |
| `/` | View a compatible PSD and inspect layers | online psd viewer | Focused homepage with the working viewer, instructions, use cases, limits, troubleshooting and viewer FAQ |
| `/psd-to-png/` | Extract a saved image as PNG | psd to png | Dedicated converter and output-selection, conversion, layer export and troubleshooting content |
| `/photocraft-guide/` | Understand an independent PSD workflow | PhotoCraft PSD workflow | Informational guide with official-source links, task comparison and honest compatibility boundaries |
| `/privacy/`, `/terms/`, `/licenses/` | Understand privacy, scope and source attribution | Policy/source navigation | Retained and reviewed; common metadata updated |

The old `/psd-viewer/` duplicated the homepage's tool and explanatory sections. It now permanently redirects to `/` (308) and is absent from the sitemap and internal links. No pages were added for word-order variants, downloads, APKs, unsupported editing, or other functionality the utility does not provide. The homepage's root URL is retained to consolidate internal links; a domain change to include the exact keyword is unnecessary.

## Keyword evidence and intent

| Keyword | US monthly average | Gefei KD, US | Use |
| --- | ---: | ---: | --- |
| online psd viewer | 140 | 35.3 | Homepage's specific initial target |
| psd viewer | 1,000 | 54.2 | Broader secondary target on the same homepage |
| psd to png | 2,900 | 50.4 | Dedicated conversion page; medium competition |
| convert psd to png | 390 | Not individually assessed | Same conversion task; no separate URL |
| extract psd layers | 10 | Not available in prefilter | Supporting explanation within conversion page |
| photocraft | 90 | 33.1, brand-derived-content model | Guide context; does not imply competing as the official brand |
| photocraft psd | Not available | Not individually assessed | Narrow informational subject, not a proven-volume opportunity |

Viewer volumes are the US fields returned by keyword ideas; conversion and PhotoCraft volumes are US Google Ads planner results. The latest monthly series covers September 2025–August 2026. Close variants can share planner groups and must not be summed as independent demand. The KD result for `psd viewer` also contained a different 3,850 estimate derived from ranking sites' main keywords; it is not substituted for the planner-based figure.

Bulk difficulty was only a prefilter: its 0–19 scores were not used as Gefei KD. Four individual KD evaluations supplied the final competition assessment. `online psd viewer` is a more realistic initial target than the broader viewer term, while conversion remains a relevant capability despite stronger competition. KD and link-budget estimates do not guarantee a ranking or prescribe buying links.

Search-intent snapshots label `psd viewer` and `psd layer viewer` transactional, and conversion/online-viewer/PhotoCraft terms informational. Most returned no confidence value. Actual SERP competitors for viewing and conversion supply tools, so the implementation combines immediate in-page functionality with instructions. PhotoCraft's individual SERP assessment identifies a brand/navigation-heavy landscape; the guide therefore explains a derivative workflow and directs download seekers to official sources. The classifier alone is not treated as a definitive statement of user intent.

## Content and technical changes

- Replaced generic slogans with descriptive Title, H1, descriptions and headings that explain each page's task.
- Wrote distinct viewing and conversion content instead of repeating the same steps, limitations and FAQ on multiple keyword pages.
- Kept claims within the implemented scope: stored composites and raw raster bitmaps, local processing, no recompositing or editing, and explicit unsupported formats, limits and colour-management caveats.
- Updated the outdated PhotoCraft early-alpha description against the current official repository; the site remains independent and does not run that editor engine.
- Added WebSite/WebPage, truthful free SoftwareApplication data on tool pages, Article data on the guide, and BreadcrumbList data on inner pages. No fabricated reviews or ratings.
- Added an original 1200 × 630 PNG share image and OG/X metadata. Declared preview image dimensions and update them to actual document dimensions when a file opens.
- Kept static HTML, self-referencing canonicals, crawlable links, robots and sitemap; the sitemap now contains six canonical pages with modification dates.
- Standardized trailing-slash canonical URLs and permanently redirect old viewer and index.html URLs. Kept privacy/terms/license pages reachable from every page.

## MCP page audit results

| Page | Before: term / score | After: term / score | After focus | After words |
| --- | --- | --- | ---: | ---: |
| Homepage | psd viewer / 65 | online psd viewer / 97 | 100% | 1,219 |
| Old viewer | online psd viewer / 65 | Merged and permanently redirected | — | — |
| Converter | psd to png / 75 | psd to png / 100 | 100% | 1,284 |
| Guide | photocraft / 55 | photocraft psd / 97 | 84% | 813 |

Homepage and guide targets changed, so their scores are not controlled before/after comparisons. Scores are the tool's heuristic content checks, not Google scores or ranking predictions. Remaining warnings concern keyword coverage in the root/guide URL, some keyword-density ranking, and the guide's length below the tool's preferred 1,200 words. The guide was not padded merely to meet a word-count rule. The converter's same-keyword audit has no remaining warnings.

## Methodology sources

Used Gefei's keyword guide from the earlier session (reused, not billed again) and loaded the knowledge guide for this audit. Knowledge retrieval supplied community sources including 程序员卡诺's translated SEO checklist (2025-02-04) and 袁锐钦's tool-site SEO workflow (2026-04-05), at https://new.web.cafe/topic/fa2x26898r and https://new.web.cafe/topic/tg049fy6iw. These are community materials, not quotations or instructions personally authored by Gefei. This report records our application and conclusions, without redistributing source passages.

Upstream factual checks: https://github.com/storytold/photocraft and https://github.com/Agamnentzar/ag-psd. The implementation's own source is authoritative for its narrower capabilities.

## Billing and request references

This audit used **55 credits** in total, within the announced 45–65-credit estimate. The account's rolling 20-minute total and remaining balance can include other requests; they are not this audit's cost.

| Tool | Credits | Request IDs |
| --- | ---: | --- |
| load_guide (knowledge) | 2 | req_b1622d7396653594 |
| knowledge_ask | 8 | req_1145a5c85592e874 |
| keyword_ideas | 8 | req_59e37b3a72ad0f8d |
| bulk_keyword_difficulty | 5 | req_b9917e8fc0600fee |
| search_intent | 5 | req_2d15fc5fc9fc2287 |
| keyword_difficulty, four terms | 8 | req_b451b688fa7a3b7a; req_76f97dd26d205c5f; req_a70aa9748f845e10; req_c641e6b82a5da080 |
| keyword_volume (US, cached) | 5 | req_bc82b81cbb1037b2 |
| onpage_audit, four existing pages | 8 | req_b198acbc4268d575; req_58e427210616d347; req_b5c31865ab591861; req_03f994355b14c95b |
| onpage_audit, three deployed pages | 6 | req_2407e9ce89236070; req_90b71242f9d8a08f; req_89aced5929424131 |

No forced refresh, paid external link purchase, DNS change, additional account or analytics integration was performed. Production verification evidence is kept in ignored `.vercel/seo-production-http.json` and `.vercel/seo-production.png`.
