# Launch status

Date: 2026-10-11 (Asia/Shanghai)

Repository: https://github.com/Lena186-ux/psd-workbench — main, implementation commit 45d8cec.

Vercel: independent project `psd-workbench`, production deployment dpl_5XEQaoWbPxW2iSbubUyGf9wLQYFw returned READY. Public fallback URL https://psd-workbench.vercel.app.

DNS applied at NameSilo:
- @ A 216.198.79.1, TTL 3600
- @ A 64.29.17.1, TTL 3600
- www CNAME a021cd49f8093df3.vercel-dns-017.com, TTL 3600
- www redirects with HTTP 308 to https://psdworkbench.com in Vercel.
- Existing _domainconnect TXT preserved.
- Remaining old apex parking record renamed `previous-parking`; old www parking records renamed `previous-www`. Original configuration preserved in DNS-BEFORE.json for rollback.

Build: Vite production build passed; seven static HTML routes plus sitemap, robots, favicon and third-party license notices. No tests added or run as instructed. PSD feature behavior has not been exercised with a real file; support is constrained to the documented ag-psd APIs and explicit limits.

Automatic GitHub deployment connection failed; Vercel CLI deployments work with existing authentication. No account permissions expanded.

Gefei: load_guide(keyword), 2 credits, req_47a1e20e678365ac. No keyword metrics claimed.

Final domain evidence: Vercel domains verify returned configured-correctly for both apex and www. Authoritative DNS returned both apex A records and the www CNAME. HTTPS certificate validation succeeded at both authoritative targets: apex HTTP 200, www HTTP 308 with Location https://psdworkbench.com/. Seven pages plus robots.txt, sitemap.xml and third-party-notices.txt returned HTTP 200 at the production alias. This machine still had cached old DNS during ordinary custom-domain requests; no DNS/security settings were changed to bypass it.
