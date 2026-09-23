# Walkthrough: Dedicated Projects Page with Apple HIG Cards & Live Previews

Added a dedicated **Projects** page accessible from the top navbar, showcasing client-side tools, desktop applications, web applications, and backend systems using Apple Human Interface Guidelines (HIG) compliant cards without gradients, complete with live iframe desktop previews and full-height dark layout.

## Summary of Changes

### 1. Navigation & Routing
- [Navbar/index.jsx](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/components/NavBar/index.jsx): Enabled the `Projects` link (`/projects`) in the navbar.
- [App.jsx](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/App.jsx): Added route `<Route path="/projects" element={<Projects />} />`.

### 2. Consolidated Project Data
- [ProjectsObject.js](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/components/Code/Projects/ProjectsObject.js):
  - **Musician Toolkit**: Standalone desktop app built using Rust for high-performance audio processing, music transcription, real-time chord detection, pitch/speed modification, 64-band precision EQ, and AI stem separation (`https://musiciantoolkit.app/`)
  - **Movie to GIF**: Client-side video-to-GIF converter (`https://video-to-gif-747.pages.dev/`)
  - **QR Code Printer**: QR code generator optimized for 3D printing (`https://qr-code-printer-dcy.pages.dev/`)
  - **STL Repair**: Interactive 3D STL mesh analyzer and geometry repair utility (`https://stl-repair-d7o.pages.dev/`)
  - **AetherCut Background Remover**: On-device AI image background remover (`https://image-background-remover-dz8.pages.dev/`)
  - **PDF OCR Converter**: Searchable PDF text extractor (`https://ocr-pdf-6w4.pages.dev/`)
  - **Atlas (Public site & Admin app)**: Next.js/React distributed system with architecture diagram
  - **Path Carver**: E-commerce microservice platform on AWS
  - **Rosie**: Dog website utilizing GitLab GraphQL API
  - **Band Venues**: Colorado wedding venue finder with serverless MongoDB

### 3. Apple HIG Card UI with Iframe Previews (No Gradients)
- [Projects/index.jsx](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/components/Code/Projects/index.jsx):
  - Segmented category control (`All`, `Desktop Apps`, `Web Tools`, `Full Stack`, `Web Apps`).
  - Solid card surfaces with 16px rounded corners and subtle solid borders.
  - Interactive scaled iframe previews (`1200x680` rendered at 0.1 scale) acting as direct links with subtle launch icons.
  - Removed redundant bottom buttons since iframe cards link directly to apps.
  - Category pill badges and skill tags pinned to the card base.
- [Projects.css](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/components/Code/Projects/Projects.css):
  - Pure flat/solid styling adhering strictly to Apple HIG without gradients.
  - Mobile vertical alignment fixed by setting `align-items: flex-start` on the preview container and equalizing label heights with `min-height: 2.6em`.
  - Added `flex: 1; display: flex; flex-direction: column;` to `.hig-projects-page`.

### 4. Full-Height Dark Sticky Footer Layout
- [index.css](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/index.css):
  - Set default `background-color: #282c34` on `html`, `body`, and `#root`.
  - Removed light-mode background override (`#ffffff`) on `:root` that was revealing white backing.
- [App.jsx](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/App.jsx) & [App.css](file:///Users/elijahsamuels/Code/personal-website4/personal-website/src/App.css):
  - Added `.App-root` full-height column container.
  - Set `.App-body` to `flex: 1; min-height: calc(100vh - 65px);` so the dark container always fills the viewport and pins the footer to the bottom even with few filtered cards.

## Verification Results
- Ran `npm run build`: verified clean compilation with zero errors.
