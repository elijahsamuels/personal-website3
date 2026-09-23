# Implementation Plan: Dedicated Projects Page with Apple HIG Cards

Implement a standalone **Projects** page accessible from the navbar, showcasing web applications and tools (including the Cloudflare Pages sites and existing project portfolio) styled as Apple Human Interface Guidelines (HIG) compliant cards without gradients.

## Proposed Changes

### Data Layer
- **`src/components/Code/Projects/ProjectsObject.js`**:
  - Consolidate all projects:
    - Movie to GIF (`https://video-to-gif-747.pages.dev/`)
    - QR Code Printer (`https://qr-code-printer-dcy.pages.dev/`)
    - STL Repair (`https://stl-repair-d7o.pages.dev/`)
    - AetherCut Background Remover (`https://image-background-remover-dz8.pages.dev/`)
    - PDF OCR Converter (`https://ocr-pdf-6w4.pages.dev/`)
    - Atlas (Public site & Admin app)
    - Path Carver
    - Rosie
    - Band Venues
  - Add descriptive titles, concise summaries, skill badges, live URLs, and repo/diagram links.

### Navigation & Routing
- **`src/components/NavBar/index.jsx`**:
  - Enable `<NavLink to="/projects" className="nav-link-item">Projects</NavLink>`.
- **`src/App.jsx`**:
  - Add route `<Route path="/projects" element={<Projects />} />`.

### UI Components & Styling (Apple HIG, No Gradients)
- **`src/components/Code/Projects/index.jsx`**:
  - Render an Apple HIG card grid.
  - Solid card backgrounds (e.g. `#1f242d`), subtle borders (`1px solid rgba(255, 255, 255, 0.1)`), 16px corner radius.
  - Apple-style pill action buttons (`#0071e3`) with direct launch links.
  - Secondary icon actions for Git links and architecture diagrams.
  - Category filter segmented control (All, Web Tools, Full Stack).
- **`src/components/Code/Projects/Projects.css`**:
  - Implement HIG styling with flat surfaces, subtle micro-elevation on hover, and zero gradients.

## Verification Plan
- Run `npm run build` to verify clean compilation.
- Verify navbar navigation, card responsiveness, and external links.
