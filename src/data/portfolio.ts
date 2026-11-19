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
  crmsCount: "6",
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
  category: "crm" | "client";
  image: string;
  tags: string[];
  year: string;
  role: string;
  stack: string[];
  description: string;
  outcome: { value: string; label: string }[];
  accent: string;
  liveUrl: string;
  isProtected?: boolean;
};

export const PROJECTS: Project[] = [
  // ==================== ENTERPRISE CRMs (PROTECTED B2B) ====================
  {
    id: "munafa",
    index: "01",
    title: "Munafa CRM",
    subtitle: "Multi-tenant enterprise SaaS CRM & automated GST billing suite",
    category: "crm",
    image: "./images/munafa-dashboard.png",
    tags: ["Enterprise CRM", "React", "TypeScript", "Node.js", "Express", "MongoDB", "PayU"],
    year: "2025 – 2026",
    role: "Full Stack Architecture — UI & Multi-Tenancy",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "PayU", "SheetJS"],
    description:
      "Architected a complete multi-tenant SaaS business suite with 10+ operational modules: Leads, Customers, Suppliers, Employees, Products, Invoices, Quotations, and Purchase Orders. Implemented tenant-aware dynamic routing (/:type/*) and role-based access control (RBAC), enabling a unified codebase to serve isolated tenants with subscription plan limits, automated PayU billing, dynamic GST invoice PDF generation, and SheetJS Excel exports.",
    outcome: [
      { value: "10+", label: "enterprise modules" },
      { value: "500+", label: "monthly GST invoices" },
      { value: "100%", label: "TypeScript coverage" },
    ],
    accent: "#38bdf8",
    liveUrl: "https://koncept-invoice.pages.dev",
    isProtected: true,
  },
  {
    id: "sanscriti-crm",
    index: "02",
    title: "Sanscriti Electric CRM",
    subtitle: "Commercial EV dealership operations & spare parts inventory CRM",
    category: "crm",
    image: "./images/project-sanscriti.png",
    tags: ["Enterprise CRM", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    year: "2025 – 2026",
    role: "Full Stack Developer — Dealership Workflows & RBAC",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
    description:
      "Engineered full-stack dealership management portal for electric commercial vehicles. Built field-technician job card flows, warranty verification by battery/motor serial number, spare parts inventory reconciliation, and multi-tier dealer hierarchy tracking with role-based access control.",
    outcome: [
      { value: "100%", label: "serial tracking" },
      { value: "Role-based", label: "dealer gating" },
      { value: "Real-time", label: "job cards" },
    ],
    accent: "#22c55e",
    liveUrl: "https://sanscriti.pages.dev/login",
    isProtected: true,
  },
  {
    id: "crystalion-crm",
    index: "03",
    title: "Crystalion Engineers CRM",
    subtitle: "Industrial quotation calculation engine & AMC renewal CRM",
    category: "crm",
    image: "./images/project-casestack.png",
    tags: ["Enterprise CRM", "React", "TypeScript", "MongoDB", "REST APIs"],
    year: "2025 – 2026",
    role: "Frontend & Full Stack Integration",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
    description:
      "Designed and implemented industrial B2B operations software automating complex engineering quotations with GST breakdowns, RFP submission workflows, supplier price comparisons, and Annual Maintenance Contract (AMC) renewal alerts.",
    outcome: [
      { value: "Automated", label: "GST quotation calc" },
      { value: "AMC", label: "renewal tracking" },
      { value: "<250ms", label: "table rendering" },
    ],
    accent: "#eab308",
    liveUrl: "https://crystalionengineers.pages.dev/login",
    isProtected: true,
  },
  {
    id: "neeravi-crm",
    index: "04",
    title: "Neeravi Solutions CRM",
    subtitle: "Lead ingestion pipeline & client operations workflow CRM",
    category: "crm",
    image: "./images/munafa-dashboard.png",
    tags: ["Enterprise CRM", "React", "Node.js", "Express", "MongoDB"],
    year: "2025",
    role: "Full Stack Engineer — Lead Lifecycle & Pipelines",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "REST APIs"],
    description:
      "Built centralized client management system featuring automated inquiry ingestion, stage-wise deal progression pipeline, task delegation matrix, Proforma Invoice (PI) generation, and communication logs for sales representatives.",
    outcome: [
      { value: "4-Stage", label: "deal pipeline" },
      { value: "Automated", label: "PI generation" },
      { value: "RBAC", label: "sales hierarchy" },
    ],
    accent: "#a855f7",
    liveUrl: "https://neeravi-crm.pages.dev/",
    isProtected: true,
  },
  {
    id: "casestack",
    index: "05",
    title: "CaseStack",
    subtitle: "Legal case diary & court hearing reminder CRM for law firms",
    category: "crm",
    image: "./images/project-casestack.png",
    tags: ["Enterprise CRM", "LegalTech", "React", "TypeScript", "Node.js", "MongoDB"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Case Lifecycle & Document Vault",
    stack: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Engineered comprehensive case management CRM for advocates and corporate legal teams. Features client record indexing, court calendar scheduling, automated hearing notifications, and a secure case document repository.",
    outcome: [
      { value: "Daily", label: "cause list alerts" },
      { value: "Zero-latency", label: "case search" },
      { value: "Encrypted", label: "document vault" },
    ],
    accent: "#ec4899",
    liveUrl: "https://casestack.in/",
    isProtected: true,
  },

  // ==================== COMMERCIAL & CLIENT PLATFORMS ====================
  {
    id: "sugarbliss",
    index: "06",
    title: "Sugarbliss",
    subtitle: "Bespoke luxury keepsakes & gift hampers e-commerce platform",
    category: "client",
    image: "./images/project-sugarbliss.png",
    tags: ["E-Commerce", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Engineer — E-Commerce & Customizer",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Engineered luxury gifting e-commerce platform featuring an interactive polaroid surprise box and custom keepsake hamper builder. Implemented stateful cart and checkout with Redux Toolkit, Pan-India delivery slot serviceability checks, and fluid micro-interactions delivering a premium, conversion-optimized shopping experience.",
    outcome: [
      { value: "95+", label: "mobile Lighthouse" },
      { value: "Sub-sec", label: "cart state updates" },
      { value: "Pan-India", label: "delivery check" },
    ],
    accent: "#f472b6",
    liveUrl: "https://sugarbliss.com.co",
  },
  {
    id: "drivora",
    index: "07",
    title: "Drivora",
    subtitle: "Professional on-demand & monthly driver booking platform",
    category: "client",
    image: "./images/project-drivora.png",
    tags: ["Booking Platform", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Google Maps"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Booking & Onboarding",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "RESTful APIs", "Google Maps API"],
    description:
      "Built customer booking portal for on-demand and monthly verified drivers with service tier selection (City/Outstation/Daily), real-time distance and fare estimation, driver onboarding funnel, and automated WhatsApp/email booking confirmation workflows.",
    outcome: [
      { value: "3", label: "service tiers" },
      { value: "Real-time", label: "fare calculation" },
      { value: "<200ms", label: "API response" },
    ],
    accent: "#34d399",
    liveUrl: "https://drivora.co.in",
  },
  {
    id: "legalpapers",
    index: "08",
    title: "Legal Papers India",
    subtitle: "Automated legal document drafting & e-stamp fulfillment portal",
    category: "client",
    image: "./images/project-legalpapers.png",
    tags: ["LegalTech", "React", "TypeScript", "Tailwind CSS", "REST APIs", "jsPDF"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Workflows & Document Engine",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "jsPDF", "REST APIs"],
    description:
      "Developed legal-tech customer portal for automated legal document drafting, affidavits, and online stamp paper fulfillment. Built step-by-step document questionnaires with dynamic input validation, client-side PDF preview using jsPDF, and an order fulfillment pipeline.",
    outcome: [
      { value: "100+", label: "document templates" },
      { value: "Automated", label: "PDF generation" },
      { value: "Instant", label: "stamp paper tracking" },
    ],
    accent: "#f59e0b",
    liveUrl: "https://www.legalpapersindia.in",
  },
  {
    id: "sanscriti",
    index: "09",
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
    accent: "#10b981",
    liveUrl: "https://sanscritielectric.com",
  },
  {
    id: "algotipp",
    index: "10",
    title: "AlgoTipp",
    subtitle: "Real-time consultation platform with live video, audio & WebSockets",
    category: "client",
    image: "./images/project-algotipp.png",
    tags: ["Real-Time", "React", "Agora RTC SDK", "WebSockets", "Redux Toolkit", "PayU"],
    year: "2025",
    role: "Frontend Developer — Real-Time Media & SDKs",
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
    index: "11",
    title: "Neeraj Books",
    subtitle: "High-volume academic e-commerce bookstore serving 10,000+ publications",
    category: "client",
    image: "./images/project-neeraj.png",
    tags: ["E-Commerce", "React", "Redux Toolkit", "PayU", "Tailwind CSS", "Vite"],
    year: "2025",
    role: "Frontend Engineer — Catalog & E-Commerce",
    stack: ["React.js", "Redux Toolkit", "React Router v6", "PayU", "Tailwind CSS", "Vite"],
    description:
      "Built a high-performance e-commerce storefront for a 75-year-old publishing house serving catalogs of 10,000+ university publications, solved assignments, and guides. Implemented persistent cart state, PayU payment checkout, real-time order tracking, and in-browser canvas PDF reading.",
    outcome: [
      { value: "10,000+", label: "catalog titles" },
      { value: "PayU", label: "payment checkout" },
      { value: "In-browser", label: "PDF viewer" },
    ],
    accent: "#6366f1",
    liveUrl: "https://www.neerajbooks.com/",
  },
  {
    id: "kitabstreet",
    index: "12",
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
    accent: "#ef4444",
    liveUrl: "https://kitabstreet.com/",
  },
  {
    id: "tricity",
    index: "13",
    title: "Tricity Engineers",
    subtitle: "Sustainable engineering, industrial blueprinting & EPC corporate portal",
    category: "client",
    image: "./images/project-tricity.png",
    tags: ["Engineering", "React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Engineer — UI & Inquiries",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Architected clean, modern corporate portal for sustainable engineering solutions. Includes project portfolio showcase, client testimonial carousels, custom RFP assessment requests, and mobile-first responsive performance.",
    outcome: [
      { value: "98", label: "performance score" },
      { value: "Interactive", label: "RFP inquiry" },
      { value: "Responsive", label: "grid architecture" },
    ],
    accent: "#84cc16",
    liveUrl: "https://www.tricityengineers.in/",
  },
  {
    id: "unitedhoreca",
    index: "14",
    title: "United Horeca",
    subtitle: "Commercial kitchen engineering & hospitality solutions portal",
    category: "client",
    image: "./images/project-unitedhoreca.png",
    tags: ["Commercial Tech", "React", "TypeScript", "Tailwind CSS", "Vite"],
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
    accent: "#f97316",
    liveUrl: "https://unitedhoreca.com/",
  },
  {
    id: "unitedinfra",
    index: "15",
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
    accent: "#06b6d4",
    liveUrl: "https://unitedinfrapower.in/",
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
