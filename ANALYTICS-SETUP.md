# PSD Workbench analytics

Configured and verified on 2026-10-11 for https://psdworkbench.com/.

## Independent resources

- GA4 property: PSD Workbench, ID 558450318 (existing Analytics account; other properties untouched).
- Web stream: PSD Workbench Web, ID 16105654472.
- Measurement ID: G-22G95ZX01G.
- Clarity project: PSD Workbench, ID yvzvg0qyvi.
- Collection only starts on psdworkbench.com after optional analytics consent. Preview deployments and localhost do not collect.

## Core events

| Event | Trigger |
| --- | --- |
| psd_choose_click | File chooser button clicked; cancellation is not file selection |
| psd_file_selected | One file selected/dropped; source picker/drop |
| psd_preview_success | Saved composite preview finishes loading |
| psd_conversion_success | Local PNG blob created; kind composite/layer |
| psd_download_initiated | Browser download initiated; kind composite/layer |
| psd_processing_error | Generic allowlisted failure category and step |
| psd_file_cleared | Clear button clicked |

psd_download_initiated is a GA4 key event, counted per event, with no invented monetary value. It does not assert that the user saved the file. Clarity receives only fixed event names. GA4 receives only allowlisted category parameters; no filename, layer name, file content, dimensions or raw exception text.

## Privacy

- No GA4/Clarity scripts load before consent or after a saved rejection.
- Choice expires after 180 days and can be changed from every page's footer.
- Revocation stops analytics and reloads to unload recording code. The panel warns users to export/finish their work first. Accessible analytics cookies for this domain are cleared.
- GA4 Enhanced Measurement and Google Signals/advertising personalization are disabled. Page views use origin + pathname; query/hash and referrer path/query are excluded.
- Clarity Strict masking was saved in the project. File picker, file information, preview, layer tree and status also have explicit data-clarity-mask attributes. Recording replay showed masked text and checkerboard file areas.
- Clarity project cookies are disabled by default; explicit analytics consent is sent through Consent V2, with advertising consent denied.
- Files continue to be parsed and converted locally in a Web Worker. No file upload API was added.
- Privacy policy updated on /privacy/.
- Analytics services still receive normal network/device information such as IP address when the user allows analytics, as disclosed in the policy.

## Production verification

Deployment dpl_J3JSvhWcMvKHDyqhHV9hAjc2tW2L reached READY and was aliased to psdworkbench.com.

The original CSP script-src 'self' blocked both trackers. The fix allows only their script hosts and analytics collection domains, preserving self-only workers plus object/base/frame protections. Chrome was hard refreshed to discard old cached CSP headers.

- Chrome GA4 page_view request returned HTTP 204 from www.google-analytics.com; Clarity collect returned HTTP 204 from o.clarity.ms.
- GA4 realtime showed two synthetic test users and all seven core events. Two PNG download initiations appeared in the key-event table.
- Clarity realtime showed both production test sessions and a masked replay. Aggregate dashboard/heatmaps are still processing; they were not represented as populated reports.
- Synthetic PSD fixtures exercised successful preview, composite PNG, layer PNG, clearing and invalid-file error. No personal PSD was used.
- Consent default/reject/revoke behavior, expiry, production host guard, event allowlist and sensitive parameter filtering passed the VM check: node tests/analytics-consent.cjs.
- Six-page production build and git diff --check passed. Consent UI at 390px had no horizontal overflow and 44px-tall buttons.

Evidence screenshots are local ignored files in .vercel/: ga4-realtime-verified.png, clarity-masked-replay.png, analytics-consent-mobile.png. They are not published with the website.
