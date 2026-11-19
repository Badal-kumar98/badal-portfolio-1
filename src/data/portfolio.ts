export const PROFILE = {
  name: "Badal Kumar",
  role: "Full Stack Developer (MERN)",
  tagline: "I build scalable web applications, multi-tenant enterprise CRMs, and high-performance e-commerce platforms.",
  location: "Delhi NCR, India",
  email: "badalkumar4574@gmail.com",
  phone: "+91 98389 95780",
  availability: "Open for Full-time Roles",
  years: "1.5+",
  projects: "14+",
  lighthouse: "95+",
  github: "https://github.com/Badal-kumar98",
  linkedin: "https://linkedin.com/in/badal-kumar-200b45324",
  resumeUrl: "/badal_kumar_resume.html",
  resumePdfUrl: "/Badal_Kumar_Resume.pdf",
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
    image: "./images/munafa-dashboard.png",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "PayU"],
    year: "2025 – 2026",
    role: "Full Stack Architecture — UI & Multi-Tenancy",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "PayU"],
    description:
      "Architected a complete multi-tenant SaaS business suite with 10+ operational modules: Leads, Customers, Suppliers, Employees, Inventory, GST Invoice PDFs, Quotations, and Purchase Orders. Implemented tenant-aware dynamic routing (/:type/*) and role-based access control (RBAC), enabling a unified codebase to serve isolated tenants with subscription plan limits, automated PayU billing, and SheetJS Excel exports.",
    outcome: [
      { value: "10+", label: "enterprise modules" },
      { value: "500+", label: "monthly GST invoices" },
      { value: "100%", label: "TypeScript coverage" },
    ],
    accent: "#38bdf8",
    liveUrl: "https://koncept-invoice.pages.dev",
  },
  {
    id: "sugarbliss",
    index: "02",
    title: "Sugarbliss",
    subtitle: "Bespoke luxury keepsakes & gift hampers e-commerce",
    image: "./images/project-sugarbliss.png",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite"],
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
    index: "03",
    title: "Drivora",
    subtitle: "Professional on-demand & monthly driver booking platform",
    image: "./images/project-drivora.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Google Maps"],
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
    index: "04",
    title: "Legal Papers India",
    subtitle: "Automated legal document drafting & e-stamp fulfillment",
    image: "./images/project-legalpapers.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "jsPDF"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Workflows & Document Engine",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "jsPDF", "REST APIs"],
    description:
      "Developed legal-tech customer portal for automated legal document drafting, affidavits, and online stamp paper fulfillment. Built step-by-step document questionnaires, live preview rendering, dynamic pricing calculator, and order status tracking.",
    outcome: [
      { value: "100%", label: "automated drafting" },
      { value: "Instant", label: "preview generation" },
      { value: "95+", label: "Lighthouse score" },
    ],
    accent: "#fbbf24",
    liveUrl: "https://www.legalpapersindia.in",
  },
  {
    id: "sanscriti",
    index: "05",
    title: "Sanscriti Electric & CRM",
    subtitle: "Commercial EV mobility portal & dealership management CRM",
    image: "./images/project-sanscriti.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "RBAC"],
    year: "2025 – 2026",
    role: "Full Stack Engineer — Corporate Portal & Dealer CRM",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RBAC"],
    description:
      "Delivered end-to-end web presence and operations for commercial EV mobility: high-speed corporate showcase with vehicle specifications and TCO calculator, paired with a dedicated dealership CRM (sanscriti.pages.dev) for spare parts inventory, warranty verification by serial numbers, and dealer order tracking.",
    outcome: [
      { value: "Dual", label: "portal & CRM suite" },
      { value: "Role-based", label: "dealer security" },
      { value: "95+", label: "mobile performance" },
    ],
    accent: "#22c55e",
    liveUrl: "https://sanscritielectric.com",
  },
  {
    id: "algotipp",
    index: "06",
    title: "AlgoTipp",
    subtitle: "Real-time consultation platform with live video & audio",
    image: "./images/project-algotipp.png",
    tags: ["React", "Agora RTC SDK", "WebSockets", "Redux Toolkit", "PayU"],
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
    desc: "Architecting and shipping full-stack web applications, custom enterprise CRMs, and e-commerce platforms across 14+ client systems. Gathering requirements, modeling MongoDB schemas, building Node.js/Express REST APIs with JWT & RBAC, and delivering 95+ Lighthouse React/TypeScript user interfaces.",
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
