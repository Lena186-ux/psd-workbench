# PSD Workbench

Independent, browser-local PSD inspection and PNG extraction tool. Static English pages, Vite, ag-psd, a dedicated Web Worker. No file upload endpoint or analytics.

## Build

`pnpm install` then `pnpm build`. Deploy `dist` to static hosting. Production canonical domain: https://psdworkbench.com.

## Scope

8-bit RGB/grayscale PSD only; 80 MB input, 25 megapixels, 10,000 px dimensions, 300 layers/groups. Decode limit 160 MB. Saved composite PNG export and raw stored layer bitmap export. No PSD editing, PSB, CMYK/Lab, masks/effects rendering or colour management.

## Upstream review

PhotoCraft upstream https://github.com/storytold/photocraft exists and describes Rust native/WASM builds; README reports early alpha. Code MIT OR Apache-2.0, third-party assets separately attributed. This site does not bundle its engine or assets. The smaller ag-psd integration supports the focused first release without a Rust/WASM build pipeline.

SEO terms are page intent labels, not claims of verified volume, difficulty or ranking. Gefei `load_guide(keyword)` cost 2 credits, request req_47a1e20e678365ac.
