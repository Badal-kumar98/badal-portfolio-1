export const PROFILE = {
  name: "Badal Kumar",
  role: "React.js Frontend Developer",
  tagline: "I build responsive enterprise CRMs, real-time consultation platforms, and high-performance React web applications.",
  location: "Delhi NCR, India",
  email: "badalkumar4574@gmail.com",
  phone: "+91 98389 95780",
  availability: "Open for Full-time Roles",
  years: "1.6+",
  projects: "12+",
  lighthouse: "95+",
  github: "https://github.com/Badal-kumar98",
  linkedin: "https://linkedin.com/in/badal-kumar-200b45324",
  resumeUrl: "/badal_kumar_resume.html",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  stack: string[];
  description: string;
  outcome: { value: string; label: string }[];
  accent: string;
  liveUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "munafa",
    index: "01",
    title: "Munafa CRM",
    subtitle: "Multi-tenant SaaS CRM & GST billing platform",
    image: "/images/project-lumen.jpg",
    tags: ["React", "TypeScript", "Redux Toolkit", "SheetJS", "SaaS"],
    year: "2025 – 2026",
    role: "Frontend Engineer — Full UI Architecture",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "SheetJS", "Cloudflare Pages"],
    description:
      "Engineered the complete frontend application single-handedly in TypeScript. Features 10+ operational enterprise modules: Leads, Customers, Suppliers, Employees, Products, Tasks, Documents, Invoices, Quotations, and Purchase Orders. Implemented tenant-aware routing (/:type/*) and role-based UI access control (RBAC), enabling a single unified codebase to serve completely isolated business tenants with plan limit gating.",
    outcome: [
      { value: "10+", label: "enterprise modules" },
      { value: "100%", label: "TypeScript coverage" },
      { value: "0", label: "prop drilling" },
    ],
    accent: "#38bdf8",
    liveUrl: "https://koncept-invoice.pages.dev",
  },
  {
    id: "algotipp",
    index: "02",
    title: "AlgoTipp",
    subtitle: "Real-time consultation platform with live video & audio",
    image: "/images/project-pulse.jpg",
    tags: ["React", "Agora RTC SDK", "WebSockets", "Redux Toolkit", "PayU"],
    year: "2025",
    role: "Frontend Developer — Real-Time Media",
    stack: ["React.js", "Agora RTC SDK", "WebSockets", "Redux Toolkit", "PayU", "Vite"],
    description:
      "Implemented 1-on-1 real-time video and audio consultation sessions for an international client using the Agora RTC SDK, handling microphone/camera track initialization, device permissions, and network disconnect recovery states. Built real-time WebSocket chat rooms with consultation session timers, plus authenticated User, Analyst, and SuperAdmin dashboards with PayU wallet top-ups.",
    outcome: [
      { value: "<1s", label: "stream latency" },
      { value: "<190KB", label: "initial bundle" },
      { value: "3", label: "dashboard roles" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://algotipp.com",
  },
  {
    id: "neerajbooks",
    index: "03",
    title: "NeerajBooks",
    subtitle: "High-volume academic e-commerce & PDF reader",
    image: "/images/project-atelier.jpg",
    tags: ["React", "Redux Toolkit", "PayU", "Tailwind", "Vite"],
    year: "2025",
    role: "Frontend Developer — Storefront & Cart",
    stack: ["React.js", "Redux Toolkit", "React Router v6", "PayU", "Tailwind CSS"],
    description:
      "High-performance storefront serving catalogs of 10,000+ university publications, solved assignments, and academic guides for a 75-year-old publishing house. Architected persistent shopping cart and multi-step checkout in Redux Toolkit, synchronizing cart items across page reloads, address validation, and PayU payment steps, paired with an in-browser PDF reader engine.",
    outcome: [
      { value: "10K+", label: "publications" },
      { value: "95+", label: "mobile Lighthouse" },
      { value: "Sub-sec", label: "cart updates" },
    ],
    accent: "#f59e0b",
    liveUrl: "https://www.neerajbooks.com",
  },
  {
    id: "udcd",
    index: "04",
    title: "UDCD Legal Diary",
    subtitle: "Case hearing & cause list monitoring portal",
    image: "/images/project-orbit.jpg",
    tags: ["React", "Cloudflare Pages", "REST APIs", "Tailwind"],
    year: "2025",
    role: "Frontend Developer — Workflows & Integration",
    stack: ["React.js", "Cloudflare Pages", "RESTful APIs", "SheetJS", "Tailwind CSS"],
    description:
      "Developed digital court diary interfaces for lawyers, indexing cases by date (/diary/:date) and delivering automated daily hearing reminders. Built administrative monitoring dashboards displaying court scraper telemetry (/admin/scrape-summary) and automated High Court / District Court virtual court (VC) video conference links.",
    outcome: [
      { value: "100%", label: "automated cause lists" },
      { value: "12+", label: "live client apps" },
      { value: "Zero", label: "layout shift (CLS)" },
    ],
    accent: "#a78bfa",
    liveUrl: "https://udcd-android-app.pages.dev",
  },
];

export const SERVICES = [
  {
    id: "01",
    title: "Frontend Architecture",
    desc: "Production React web applications and multi-tenant SaaS dashboards built with clean state patterns.",
    points: ["React.js v18+ & TypeScript", "Redux Toolkit & TanStack Query", "Tenant-aware routing & RBAC", "Clean component systems"],
    tools: ["React", "TypeScript", "Redux Toolkit", "Vite"],
  },
  {
    id: "02",
    title: "Real-Time Media & Chat",
    desc: "Interactive video, audio, and live messaging experiences engineered for low latency.",
    points: ["Agora RTC audio/video streaming", "Device track lifecycle handling", "WebSocket chat room queues", "Network reconnection fallback"],
    tools: ["Agora RTC", "WebSockets", "Socket.io", "React"],
  },
  {
    id: "03",
    title: "FinTech & E-Commerce",
    desc: "Conversion-optimized checkouts, payment gateway reconciliation, and billing automation.",
    points: ["PayU & Razorpay checkouts", "GST invoice PDF generation", "SheetJS Excel bulk ingestion", "Multi-step cart persistence"],
    tools: ["PayU", "Razorpay", "SheetJS", "PDF Engines"],
  },
  {
    id: "04",
    title: "Performance & Optimization",
    desc: "Speed as a core metric. Auditing, code splitting, and sub-second load times.",
    points: ["Vite manualChunks vendor splitting", "Route-based lazy loading", "Core Web Vitals & CLS tuning", "95+ mobile Lighthouse scores"],
    tools: ["Vite", "Lighthouse", "DevTools", "Tailwind"],
  },
];

export const EXPERIENCE = [
  {
    period: "Feb 2025 — Present",
    role: "Frontend Developer",
    org: "Koncept Software Solutions · New Delhi",
    desc: "Architecting and shipping responsive frontends and SaaS dashboards across 12+ live client systems in FinTech, LegalTech, E-Commerce, EdTech, and Industrial Operations. Owning UI component libraries, Redux state, Agora RTC, and PayU/Razorpay checkouts.",
  },
  {
    period: "2024 — 2025",
    role: "Frontend Projects & Development",
    org: "Full-Time Engineering Practice",
    desc: "Built modern React applications, custom hooks, and state management workflows. Focused on TypeScript type safety, Figma-to-code implementations, and performance profiling.",
  },
];

export const STACK = [
  { name: "React.js (v18+)", level: 96 },
  { name: "TypeScript", level: 92 },
  { name: "Redux Toolkit", level: 94 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Agora RTC SDK", level: 88 },
  { name: "WebSockets", level: 86 },
  { name: "Vite & Performance", level: 92 },
  { name: "REST APIs & Axios", level: 90 },
];

export const TESTIMONIALS = [
  {
    quote:
      "They delivered a solution that automates our document process for our firm. The system is efficient, reliable, and has streamlined our entire document process.",
    name: "Mr. Kamal Bahl",
    role: "Koncept Law Associates",
  },
  {
    quote:
      "Working with this team has been a fantastic experience. They developed a custom software solution that streamlined our operations and significantly reduced manual tasks.",
    name: "Mr. Pradeep Gupta",
    role: "LegalPapers India",
  },
  {
    quote:
      "We needed a CRM that could handle our complex customer management needs, and Koncept delivered exactly that. Round-the-clock developer support makes them a reliable partner.",
    name: "Mr. Mohan",
    role: "MGR Sales and Solutions",
  },
];
