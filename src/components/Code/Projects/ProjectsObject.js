const Projects = [
  {
    name: "Musician Toolkit",
    category: "Desktop Apps",
    description: "A standalone desktop app built using Rust for high-performance audio processing, music transcription, real-time chord detection, independent pitch & speed modification, 64-band precision EQ, and AI stem separation.",
    skills_used: ["Rust", "Tauri", "Audio DSP", "CoreML", "TypeScript", "React"],
    prod_links: [
      { name: "musiciantoolkit.app", url: "https://musiciantoolkit.app/" }
    ],
  },
  {
    name: "Movie to GIF",
    category: "Web Tools",
    description: "Fast, private, client-side video-to-GIF converter built with modern web technologies adhering to Apple HIG.",
    skills_used: ["React", "WebAssembly", "FFmpeg", "Canvas", "Vite"],
    prod_links: [
      { name: "Live Site", url: "https://video-to-gif-747.pages.dev/" }
    ],
  },
  {
    name: "QR Code Printer",
    category: "Web Tools",
    description: "Tool to generate, preview, and export high-contrast QR codes optimized for 3D printing and physical fabrication.",
    skills_used: ["JavaScript", "React", "Canvas", "3D Printing", "SVG"],
    prod_links: [
      { name: "Live Site", url: "https://qr-code-printer-dcy.pages.dev/" }
    ],
  },
  {
    name: "STL Repair",
    category: "Web Tools",
    description: "Client-side 3D model STL mesh inspector, geometry analyzer, and interactive file repair utility.",
    skills_used: ["Three.js", "WebGL", "3D Geometry", "React", "Vite"],
    prod_links: [
      { name: "Live Site", url: "https://stl-repair-d7o.pages.dev/" }
    ],
  },
  {
    name: "AetherCut Background Remover",
    category: "Web Tools",
    description: "High-precision, on-device image background removal powered by client-side machine learning.",
    skills_used: ["Machine Learning", "WebAssembly", "React", "Canvas", "Vite"],
    prod_links: [
      { name: "Live Site", url: "https://image-background-remover-dz8.pages.dev/" }
    ],
  },
  {
    name: "PDF OCR Converter",
    category: "Web Tools",
    description: "Convert scanned PDFs and documents into searchable, selectable text directly in the browser.",
    skills_used: ["Tesseract.js", "PDF.js", "OCR", "React", "Vite"],
    prod_links: [
      { name: "Live Site", url: "https://ocr-pdf-6w4.pages.dev/" }
    ],
  },
  {
    name: "Atlas (Public site)",
    category: "Full Stack",
    description:
      "A distributed ecosystem featuring a Next.js public site, a React administrative site, and a Node.js server/API. The system utilizes a dedicated Redis/BullMQ service for asynchronous task processing and a PostgreSQL backend. Orchestrated via Nginx and exposed through Cloudflare Tunnels.",
    skills_used: [
      "Node.js",
      "React",
      "Next.js",
      "MUI",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Nginx",
      "Cloudflare",
      "GitLab CI/CD",
      "Express",
      "REST API",
    ],
    diagram_img: "/diagrams/atlas-arch.png",
    prod_links: [
      {
        name: "Peak Perspective Photography",
        url: "https://peakperspectivephotography.globalentertainmentandtalent.com",
      },
      {
        name: "Summit Harvest Catering",
        url: "https://summitharvestcatering.globalentertainmentandtalent.com",
      },
      {
        name: "Blue Spruce Florist",
        url: "https://bluespruceflorist.globalentertainmentandtalent.com",
      },
    ],
  },
  {
    name: "Atlas (Admin app)",
    category: "Full Stack",
    description:
      "Administrative dashboard for the Atlas platform with real-time operations, management workflows, and role-based permissions.",
    skills_used: [
      "Node.js",
      "React",
      "Next.js",
      "MUI",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Nginx",
      "Cloudflare",
      "GitLab CI/CD",
      "Express",
      "REST API",
    ],
    diagram_img: "/diagrams/atlas-arch.png",
    prod_links: [
      { name: "Atlas Admin App", url: "https://atlas-app.globalentertainmentandtalent.com" }
    ],
  },
  {
    name: "Path Carver",
    category: "Full Stack",
    description:
      "A shopping website built for a friend based on a microservice architecture deployed to AWS. The infrastructure, including the PostgreSQL database, is managed via Terraform and fully automated through GitLab CI/CD.",
    skills_used: [
      "JavaScript",
      "React",
      "Node",
      "CSS",
      "HTML",
      "REST API",
      "AWS",
      "GitLab CI/CD",
      "Terraform",
    ],
    prod_links: [
      { name: "Path Carver", url: "http://storefront-frontend-path-carver.s3-website-us-west-1.amazonaws.com" },
    ],
  },
  {
    name: "Rosie",
    category: "Web Apps",
    description: "A website for my dog Rosie to practice GitLab GraphQL API integrations.",
    skills_used: ["JavaScript", "React", "CSS", "HTML", "GraphQL", "Netlify", "GitLab"],
    prod_links: [
      { name: "Rosie", url: "https://rosiethebatdog.netlify.app" }
    ],
  },
  {
    name: "Band Venues",
    category: "Full Stack",
    description:
      "A search site to find various wedding venues in the Colorado, US region. Utilizes a serverless function to fetch data from MongoDB.",
    skills_used: ["JavaScript", "React", "CSS", "HTML", "MongoDB", "AWS Lambda", "Netlify", "GitLab"],
    prod_links: [
      { name: "Band Venues", url: "https://band-venues.netlify.app" }
    ],
  },
];

export default Projects;
