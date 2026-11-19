export const PROFILE = {
  name: "Badal Kumar",
  role: "Full Stack Developer (MERN)",
  tagline: "I build scalable web applications, multi-tenant enterprise CRMs, and high-performance e-commerce platforms.",
  location: "Delhi NCR, India",
  email: "badalkumar4574@gmail.com",
  phone: "+91 98389 95780",
  availability: "Open for Full-time Roles",
  years: "1.5+",
  projects: "20+",
  crmsCount: "7",
  lighthouse: "95+",
  github: "https://github.com/Badal-kumar98",
  linkedin: "https://linkedin.com/in/badal-kumar-200b45324",
  resumeUrl: "./badal_kumar_resume.html",
  resumePdfUrl: "./Badal_Kumar_Resume.pdf",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: "client";
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

export interface EnterpriseCRM {
  id: string;
  name: string;
  category: string;
  badge: string;
  stack: string[];
  description: string;
  portalUrl: string;
  metrics: string;
  status: string;
}

// ==================== COMMERCIAL CLIENT PLATFORMS (WITH REAL SCREENSHOTS) ====================
export const PROJECTS: Project[] = [
  {
    id: "sugarbliss",
    index: "01",
    title: "Sugarbliss",
    subtitle: "Bespoke luxury keepsakes & artisanal gift hampers e-commerce platform",
    category: "client",
    image: "./images/project-sugarbliss.png",
    tags: ["E-Commerce", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    year: "2025 – 2026",
    role: "Frontend Engineer — Customizer & E-Commerce",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Engineered luxury gifting e-commerce platform featuring an interactive polaroid surprise box and custom keepsake hamper builder. Implemented stateful cart and checkout with Redux Toolkit, Pan-India delivery slot serviceability checks, and fluid micro-interactions delivering a premium, conversion-optimized shopping experience.",
    outcome: [
      { value: "95+", label: "mobile Lighthouse" },
      { value: "Sub-sec", label: "cart state updates" },
      { value: "Pan-India", label: "delivery check" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://sugarbliss.com.co",
  },
  {
    id: "drivora",
    index: "02",
    title: "Drivora",
    subtitle: "Professional on-demand & monthly driver booking platform",
    category: "client",
    image: "./images/project-drivora.png",
    tags: ["Mobility Platform", "React", "TypeScript", "Google Maps", "REST APIs"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Booking Engine & Funnels",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "RESTful APIs", "Google Maps API"],
    description:
      "Built customer booking portal for on-demand and monthly verified drivers with service tier selection (City/Outstation/Daily), real-time distance and fare estimation, driver onboarding funnel, and automated WhatsApp/email booking confirmation workflows.",
    outcome: [
      { value: "3", label: "service tiers" },
      { value: "Real-time", label: "fare calculation" },
      { value: "<200ms", label: "API response" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://drivora.co.in",
  },
  {
    id: "legalpapers",
    index: "03",
    title: "Legal Papers India",
    subtitle: "Automated legal document drafting & online e-stamp fulfillment portal",
    category: "client",
    image: "./images/project-legalpapers.png",
    tags: ["LegalTech", "React", "TypeScript", "jsPDF", "Tailwind CSS"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Document Generation Engine",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "jsPDF", "REST APIs"],
    description:
      "Developed legal-tech customer portal for automated legal document drafting, affidavits, and online stamp paper fulfillment. Built step-by-step document questionnaires with dynamic input validation, client-side PDF preview using jsPDF, and an order fulfillment pipeline.",
    outcome: [
      { value: "100+", label: "document templates" },
      { value: "Automated", label: "PDF generation" },
      { value: "Instant", label: "stamp paper tracking" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://www.legalpapersindia.in",
  },
  {
    id: "sanscriti",
    index: "04",
    title: "Sanscriti Electric",
    subtitle: "Commercial EV mobility corporate portal & interactive product showcase",
    category: "client",
    image: "./images/project-sanscriti.png",
    tags: ["Clean Energy", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    year: "2025 – 2026",
    role: "Full Stack Developer — Showcase & Inquiries",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudflare Pages"],
    description:
      "Corporate web platform for commercial electric vehicles, showcasing EV lineup specifications, battery telemetry stats, total cost of ownership (TCO) calculator, dealership inquiry workflows, and enterprise fleet partnership funnels.",
    outcome: [
      { value: "3", label: "vehicle segments" },
      { value: "Enterprise", label: "fleet security" },
      { value: "95+", label: "mobile performance" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://sanscritielectric.com",
  },
  {
    id: "algotipp",
    index: "05",
    title: "AlgoTipp",
    subtitle: "Real-time consultation platform with live video, audio & WebSockets",
    category: "client",
    image: "./images/project-algotipp.png",
    tags: ["Real-Time", "React", "Agora RTC SDK", "WebSockets", "PayU"],
    year: "2025",
    role: "Frontend Developer — Media SDKs & WebSockets",
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
    index: "06",
    title: "Neeraj Books",
    subtitle: "High-volume academic e-commerce bookstore serving 10,000+ publications",
    category: "client",
    image: "./images/project-neeraj.png",
    tags: ["E-Commerce", "React", "Redux Toolkit", "PayU", "Tailwind CSS"],
    year: "2025",
    role: "Frontend Engineer — E-Commerce & Canvas PDF Reader",
    stack: ["React.js", "Redux Toolkit", "React Router v6", "PayU", "Tailwind CSS", "Vite"],
    description:
      "Built a high-performance e-commerce storefront for a 75-year-old publishing house serving catalogs of 10,000+ university publications, solved assignments, and guides. Implemented persistent cart state, PayU payment checkout, real-time order tracking, and in-browser canvas PDF reading.",
    outcome: [
      { value: "10,000+", label: "catalog titles" },
      { value: "PayU", label: "payment checkout" },
      { value: "In-browser", label: "PDF viewer" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://www.neerajbooks.com/",
  },
  {
    id: "kitabstreet",
    index: "07",
    title: "Kitab Street",
    subtitle: "Digital ebook storefront & academic multi-publisher marketplace",
    category: "client",
    image: "./images/project-kitabstreet.png",
    tags: ["Marketplace", "React", "Redux Toolkit", "Razorpay", "Tailwind CSS"],
    year: "2025",
    role: "Frontend Engineer — Marketplace & Digital Reader",
    stack: ["React.js", "Redux Toolkit", "React Router v6", "Razorpay", "Tailwind CSS"],
    description:
      "Developed multi-publisher digital bookstore with nested category routing, instant ebook search, Razorpay checkout, digital library reader, and seller listing management.",
    outcome: [
      { value: "Instant", label: "ebook delivery" },
      { value: "Razorpay", label: "checkout pipeline" },
      { value: "Multi-vendor", label: "book listing" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://kitabstreet.com/",
  },
  {
    id: "tricity",
    index: "08",
    title: "Tricity Engineers",
    subtitle: "Sustainable engineering, industrial blueprinting & EPC corporate portal",
    category: "client",
    image: "./images/project-tricity.png",
    tags: ["Industrial EPC", "React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Engineer — UI Architecture & Inquiries",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Architected clean, modern corporate portal for sustainable engineering solutions. Includes project portfolio showcase, client testimonial carousels, custom RFP assessment requests, and mobile-first responsive performance.",
    outcome: [
      { value: "98", label: "performance score" },
      { value: "Interactive", label: "RFP inquiry" },
      { value: "Responsive", label: "grid architecture" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://www.tricityengineers.in/",
  },
  {
    id: "unitedhoreca",
    index: "09",
    title: "United Horeca",
    subtitle: "Commercial kitchen engineering & hospitality solutions portal",
    category: "client",
    image: "./images/project-unitedhoreca.png",
    tags: ["Hospitality Tech", "React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Developer — Catalog & Lead Capture",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Engineered commercial equipment showcase for restaurants, hotels, and industrial kitchens. Built modular equipment catalog, inquiry basket, technical specification download sheets, and direct quote requests.",
    outcome: [
      { value: "50+", label: "equipment specs" },
      { value: "Instant", label: "quote request" },
      { value: "Sub-second", label: "page transitions" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://unitedhoreca.com/",
  },
  {
    id: "unitedinfra",
    index: "10",
    title: "United Infra & Power",
    subtitle: "Infrastructure & power EPC solutions corporate showcase",
    category: "client",
    image: "./images/project-unitedinfra.png",
    tags: ["Infrastructure", "React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Developer — Engineering Showcase",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Developed high-impact industrial web presence for nationwide infrastructure and power EPC execution. Includes capability portfolios, project milestone timelines, client credibility showcases, and office routing.",
    outcome: [
      { value: "PAN-India", label: "project map" },
      { value: "Industrial", label: "safety specs" },
      { value: "Fast", label: "Vite build" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://unitedinfrapower.in/",
  },
];

// ==================== ENTERPRISE CRMs (NAMES, HIGHLIGHTS & RBAC ACCESS) ====================
export const ENTERPRISE_CRMS: EnterpriseCRM[] = [
  {
    id: "munafa",
    name: "Munafa CRM",
    category: "Multi-Tenant Enterprise SaaS & GST Billing Platform",
    badge: "Flagship B2B SaaS",
    stack: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Redux Toolkit", "PayU", "SheetJS"],
    description: "Architected 10+ operational modules: Leads, Customers, Suppliers, Employees, Products, Invoices, Quotations, and Purchase Orders with tenant-aware routing (/:type/*), role-based access control (RBAC), PayU subscription billing, and automated GST invoice PDF export.",
    portalUrl: "https://koncept-invoice.pages.dev",
    metrics: "10+ Enterprise Modules · 500+ Monthly Invoices",
    status: "Protected Staff Login",
  },
  {
    id: "sanscriti-crm",
    name: "Sanscriti Electric CRM",
    category: "EV Dealership Operations & Inventory Management",
    badge: "Dealership Operations",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Engineered dealership management portal for electric commercial vehicles: field-technician job cards, battery/motor warranty verification by serial number, spare parts reconciliation, and dealer order tracking.",
    portalUrl: "https://sanscriti.pages.dev/login",
    metrics: "100% Serial Tracking · Multi-Tier Dealer Network",
    status: "Dealership Login",
  },
  {
    id: "crystalion-crm",
    name: "Crystalion Engineers CRM",
    category: "Industrial Quotations & AMC Service Ticketing",
    badge: "Quotation & AMC Engine",
    stack: ["React.js", "TypeScript", "Node.js", "MongoDB", "REST APIs"],
    description: "Industrial B2B software automating itemized engineering quotations with GST breakdowns, RFP submission workflows, supplier price comparisons, and Annual Maintenance Contract (AMC) renewal alerts.",
    portalUrl: "https://crystalionengineers.pages.dev/login",
    metrics: "BOM Calculation Engine · AMC Alerts",
    status: "Employee Login",
  },
  {
    id: "neeravi-crm",
    name: "Neeravi Solutions CRM",
    category: "Lead Ingestion & Deal Progression Pipeline",
    badge: "Pipeline Management",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    description: "Centralized client management system featuring automated inquiry ingestion, 4-stage deal progression matrix, task delegation matrix, and automated Proforma Invoice (PI) generation.",
    portalUrl: "https://neeravi-crm.pages.dev/login",
    metrics: "4-Stage Pipeline · Automated PI Engine",
    status: "Internal CRM",
  },
  {
    id: "casestack",
    name: "CaseStack",
    category: "Smart Case Diary & Hearing Reminder System",
    badge: "Legal Practice Portal",
    stack: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    description: "Legal case management CRM for advocates and law firms: client record indexing, court calendar scheduling, automated hearing notifications, and encrypted document vault.",
    portalUrl: "https://casestack.in",
    metrics: "Cause List Indexing · Encrypted Vault",
    status: "Advocate Portal",
  },
  {
    id: "udcd",
    name: "UDCD Legal Court Diary",
    category: "Court Hearing Reminders & VC Link Router",
    badge: "Court Telemetry Suite",
    stack: ["React.js", "Cloudflare Pages", "REST APIs", "Tailwind CSS"],
    description: "Digital court diary for advocates indexing cases by date (/diary/:date), court scraper telemetry, and automated High Court / District Court virtual court (VC) video conference link routing.",
    portalUrl: "https://udcd-android-app.pages.dev",
    metrics: "Scraper Telemetry · Automated VC Routing",
    status: "Advocate Portal",
  },
  {
    id: "vrd-crm",
    name: "VRD CRM",
    category: "Enterprise Operations & Bulk Ingestion Pipeline",
    badge: "Workforce Operations",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "SheetJS"],
    description: "Enterprise operations suite with bulk employee Excel/CSV ingestion via SheetJS and automated lead-to-tax-invoice creation workflows.",
    portalUrl: "https://vrd-crm.pages.dev",
    metrics: "SheetJS Bulk Ingestion · Tax Invoice Flow",
    status: "Company Only",
  },
];

export const SERVICES = [
  {
    id: "01",
    title: "Full Stack & Backend APIs",
    desc: "Robust RESTful APIs, Mongoose schema modeling, JWT authentication, and role-based access control.",
    points: ["Node.js & Express.js REST APIs", "MongoDB schemas & aggregation pipelines", "JWT auth & secure cookie/session tokens", "Role-based access control (RBAC)"],
    tools: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
  },
  {
    id: "02",
    title: "Enterprise CRMs & Multi-Tenancy",
    desc: "Production business suites, quotation builders, and inventory management tailored for scale.",
    points: ["Multi-tenant routing & plan isolation", "Automated GST invoice PDF generation", "SheetJS Excel reporting & analytics", "Operational quotation & inventory engines"],
    tools: ["React", "TypeScript", "Redux Toolkit", "SheetJS", "jsPDF"],
  },
  {
    id: "03",
    title: "Real-Time Media & WebSockets",
    desc: "Interactive video, audio, and live messaging experiences engineered for ultra-low latency.",
    points: ["Agora RTC audio/video streaming", "Device track lifecycle handling", "WebSocket / Socket.io chat queues", "Network reconnection fallback"],
    tools: ["Agora RTC", "WebSockets", "Socket.io", "React"],
  },
  {
    id: "04",
    title: "FinTech & E-Commerce",
    desc: "Conversion-optimized checkouts, payment gateway reconciliation, and billing automation.",
    points: ["PayU & Razorpay checkouts", "HMAC SHA256 signature verification", "Payment webhooks & retry handling", "Multi-step cart persistence"],
    tools: ["PayU", "Razorpay", "Redux Toolkit", "Tailwind CSS"],
  },
];

export const EXPERIENCE = [
  {
    period: "Feb 2025 — Present",
    role: "Full Stack Developer",
    org: "Koncept Software Solutions · New Delhi",
    desc: "Architecting and shipping full-stack web applications, custom enterprise CRMs, and e-commerce platforms across 20+ client systems. Gathering requirements, modeling MongoDB schemas, building Node.js/Express REST APIs with JWT & RBAC, and delivering 95+ Lighthouse React/TypeScript user interfaces.",
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Engineering Practice",
    org: "Production Software Development",
    desc: "Built modern MERN stack applications, custom hooks, and state management workflows. Focused on TypeScript type safety, database design, REST API architecture, and performance optimization.",
  },
];

export const STACK = [
  { name: "React.js & Next.js", level: 96 },
  { name: "Node.js & Express.js", level: 92 },
  { name: "MongoDB & Mongoose", level: 90 },
  { name: "TypeScript", level: 94 },
  { name: "Redux Toolkit", level: 95 },
  { name: "Tailwind CSS", level: 96 },
  { name: "REST APIs & JWT/RBAC", level: 92 },
  { name: "WebSockets & Agora RTC", level: 88 },
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
