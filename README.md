# PSD Workbench

Independent, browser-local PSD inspection and PNG extraction tool. Static English pages, Vite, ag-psd, a dedicated Web Worker. No file upload endpoint or analytics.

## Build

`pnpm install` then `pnpm build`. After editing page content, run `node generate.mjs` before building. Deploy `dist` to static hosting. Production canonical domain: https://psdworkbench.com.

## Scope

8-bit RGB/grayscale PSD only; 80 MB input, 25 megapixels, 10,000 px dimensions, 300 layers/groups. Decode limit 160 MB. Saved composite PNG export and raw stored layer bitmap export. No PSD editing, PSB, CMYK/Lab, masks/effects rendering or colour management.

## Upstream review

PhotoCraft upstream https://github.com/storytold/photocraft describes a separate Rust image editor with layered PSD editing capabilities (checked October 11, 2026). Consult upstream documentation for current capabilities. This site does not bundle its engine or assets. The smaller ag-psd integration supports the focused browser utility.

SEO audit and keyword evidence: [SEO-AUDIT.md](SEO-AUDIT.md). The homepage owns online PSD viewing; `/psd-viewer/` permanently redirects to it. Conversion and PhotoCraft workflow content have distinct canonical pages. Tool metrics are estimates and snapshots, not a ranking guarantee.
