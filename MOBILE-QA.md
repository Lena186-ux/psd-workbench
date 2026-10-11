# Mobile layout and operation review — 2026-10-11

Checked the site using the in-app browser with 320 × 740 and 390 × 844 portrait viewports, 844 × 390 landscape and 1280 × 900 desktop. These are browser viewport checks, not physical iPhone/Android or Safari certification.

## Issues fixed

- Header links were only 26 px high, toolbar buttons 34.5 px, and raster-layer export buttons 33 px. Mobile navigation, toolbar, layer actions, FAQ and footer links now provide at least 44 px touch height.
- A raster layer inside 15 groups had 256 px left indentation, leaving almost no usable content width on a narrow screen. Indentation is capped at 64 px on small screens and 112 px on desktop; the full nesting level remains available in the row title.
- Wrapped toolbar actions, layer metadata and navigation can now fit narrow widths. Localized table scrolling remains inside its container.
- File processing previously disabled Clear, preventing cancellation. Clear now remains available during processing; reset terminates the Worker, cancels its timeout and prevents a pending file read from sending data to a replaced Worker.
- File selection is disabled while the initial read is active and restored after completion/error. Unsupported Worker/OffscreenCanvas environments and Worker startup failures show a readable error.
- Download anchors are attached to the document and blob URL cleanup is delayed to give downloads time to start.

## Verification

- Homepage, converter and PhotoCraft guide had document scroll widths equal to each of the four viewport widths; no whole-page horizontal overflow.
- Chose an original synthetic 120 × 180 RGB PSD with one raster layer nested in 15 groups through the actual file-selection button. Preview and all 16 layer/group rows loaded successfully.
- Downloaded both the composite PNG and raw layer PNG. Both files decoded as 120 × 180 PNGs; their first pixel matched the fixture's RGB values (40, 125, 85).
- Clear removed the loaded document and displayed its cleared status. FAQ expanded and displayed its answer.
- An invalid PSD displayed `This is not a PSD file.`, allowed another file selection and kept composite export disabled.
- Production build and diff whitespace check passed before deployment.

The fixture files remain in ignored `.vercel/`; they contain no user data. Browser downloads are local test outputs. Large-file memory behavior and operating-system-specific download dialogs were not established by these checks.
