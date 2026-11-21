export const PROFILE = {
  name: "Badal Kumar",
  role: "Full Stack Developer (MERN Stack)",
  tagline: "I architect and build scalable web applications, multi-tenant enterprise CRMs, and high-performance commercial platforms.",
  location: "Delhi NCR, India",
  email: "badalkumar4574@gmail.com",
  phone: "+91 98389 95780",
  availability: "Open for Full-time Roles",
  years: "2+",
  experience: "2 Years, 2 Months",
  projects: "20+",
  crmsCount: "6+",
  lighthouse: "95+",
  noticePeriod: "1 Month (30 Days)",
  github: "https://github.com/Badal-kumar98",
  linkedin: "https://linkedin.com/in/badal-kumar-200b45324",
  resumeUrl: "./badal_kumar_resume.html",
  resumePdfUrl: "./Badal_Kumar_FullStack_Developer_Resume.pdf",
  resumeOnePageUrl: "./Badal_Kumar_FullStack_1Page_Resume.pdf",
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
  whatWasBuilt: string[];
  howItWorks: string;
  metrics: string;
  status: string;
}

// ==================== COMMERCIAL CLIENT & PRODUCTION PLATFORMS (WITH WORKING LIVE LINKS) ====================
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
    role: "Full Stack Engineer — Customizer & E-Commerce",
    stack: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Engineered luxury gifting e-commerce platform featuring an interactive polaroid surprise box and custom keepsake hamper builder. Implemented stateful cart and checkout with Redux Toolkit, Pan-India courier delivery slot serviceability checks, and fluid micro-interactions delivering a conversion-optimized shopping experience.",
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
    id: "algotipp",
    index: "04",
    title: "AlgoTipp",
    subtitle: "Real-time consultation platform with live video, audio & WebSockets",
    category: "client",
    image: "./images/project-algotipp.png",
    tags: ["Real-Time", "React", "Agora RTC SDK", "WebSockets", "PayU"],
    year: "2025",
    role: "Full Stack Engineer — Media SDKs & WebSockets",
    stack: ["React.js", "Agora RTC SDK", "WebSockets", "Redux Toolkit", "PayU", "Vite"],
    description:
      "Implemented 1-on-1 real-time video and audio consultation sessions for an international client using the Agora RTC SDK, handling microphone/camera track initialization, device permissions, and network disconnect recovery states. Built real-time WebSocket chat rooms with consultation session timers, plus authenticated User, Analyst, and SuperAdmin dashboards with PayU wallet top-ups.",
    outcome: [
      { value: "<200ms", label: "stream latency" },
      { value: "<190KB", label: "initial bundle" },
      { value: "3", label: "dashboard roles" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://algotipp.com",
  },
  {
    id: "neerajbooks",
    index: "05",
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
    index: "06",
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
    index: "07",
    title: "Tricity Engineers",
    subtitle: "Sustainable engineering, industrial blueprinting & EPC corporate portal",
    category: "client",
    image: "./images/project-tricity.png",
    tags: ["Industrial EPC", "React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025 – 2026",
    role: "Frontend Engineer — UI Architecture & Inquiries",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare Pages"],
    description:
      "Architected clean corporate portal for sustainable engineering solutions. Includes project portfolio showcase, client testimonial carousels, custom RFP assessment requests, and mobile-first responsive performance.",
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
    index: "08",
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
    index: "09",
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
  {
    id: "procx",
    index: "10",
    title: "ProcX Procurement",
    subtitle: "Enterprise B2B procurement & supplier bidding portal",
    category: "client",
    image: "./images/project-procx.png",
    tags: ["Procurement", "React", "Tailwind CSS", "Cloudflare Pages"],
    year: "2025",
    role: "Full Stack Engineer — B2B Procurement",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Cloudflare Pages"],
    description:
      "Modern procurement and vendor RFQ submission portal streamlining requisition workflows, vendor bid comparisons, and purchase order tracking across multi-location enterprise operations.",
    outcome: [
      { value: "Real-time", label: "bid comparisons" },
      { value: "Multi-vendor", label: "quote tracking" },
      { value: "Automated", label: "PO creation" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://procx.pages.dev",
  },
  {
    id: "fresko",
    index: "11",
    title: "Fresko",
    subtitle: "Farm-to-table organic produce & grocery delivery storefront",
    category: "client",
    image: "./images/project-fresko.png",
    tags: ["E-Commerce", "React", "Tailwind CSS", "Redux Toolkit"],
    year: "2025",
    role: "Frontend Engineer — E-Commerce Storefront",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite"],
    description:
      "Organic farm produce and grocery shopping platform with seasonal inventory filters, instant cart updates, scheduled morning delivery slots, and streamlined mobile checkout.",
    outcome: [
      { value: "Fast", label: "search & filter" },
      { value: "Slot", label: "delivery booking" },
      { value: "96", label: "Lighthouse score" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://fresko.in",
  },
  {
    id: "ignouwala",
    index: "12",
    title: "IGNOUwala",
    subtitle: "University educational resources & solved assignment academic portal",
    category: "client",
    image: "./images/project-neeraj.png",
    tags: ["EdTech", "React", "Tailwind CSS", "Vite"],
    year: "2025",
    role: "Frontend Developer — Academic Portal",
    stack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Vite"],
    description:
      "High-traffic academic portal providing distance learning university students with structured course syllabi, past examination papers, solved assignment PDFs, and semester study guides.",
    outcome: [
      { value: "10,000+", label: "student visits" },
      { value: "Instant", label: "study material PDF" },
      { value: "Categorized", label: "course syllabus" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://ignouwala.com",
  },
  {
    id: "aranyaa",
    index: "13",
    title: "Aranyaa Heritage Sarees",
    subtitle: "Handwoven luxury artisanal heritage sarees e-commerce platform",
    category: "client",
    image: "./images/project-atelier.jpg",
    tags: ["E-Commerce", "React 19", "TypeScript", "Tailwind CSS v4"],
    year: "2025",
    role: "Full Stack Engineer — Luxury Commerce",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Redux Toolkit", "Framer Motion"],
    description:
      "High-end artisanal Indian luxury textile platform featuring interactive fabric draping previews, bespoke bridal collections, multi-currency pricing, and smooth micro-animations.",
    outcome: [
      { value: "React 19", label: "architecture" },
      { value: "Sub-sec", label: "page transitions" },
      { value: "Bespoke", label: "visual showcase" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://Badal-kumar98.github.io/aranyaa-heritage-sarees/",
  },
  {
    id: "aurea",
    index: "14",
    title: "Auréa Luxury Electronics",
    subtitle: "Flagship luxury smartphone & personal tech showcase store",
    category: "client",
    image: "./images/project-pulse.jpg",
    tags: ["Product Showcase", "React 19", "TypeScript", "Framer Motion"],
    year: "2025",
    role: "Frontend Engineer — Interactive Product Experience",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Vite"],
    description:
      "Minimalist, typography-driven luxury smartphone storefront with interactive 360-degree colorway selector, dynamic technical specifications breakdown, and smooth kinetic motion design.",
    outcome: [
      { value: "Interactive", label: "colorway preview" },
      { value: "Kinetic", label: "Framer Motion" },
      { value: "98", label: "performance score" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://Badal-kumar98.github.io/aurea-smartphones/",
  },
  {
    id: "maison-ore",
    index: "15",
    title: "Maison Oré Lifestyle",
    subtitle: "Curated Scandinavian & Mediterranean home decor boutique",
    category: "client",
    image: "./images/project-lumen.jpg",
    tags: ["Lifestyle Boutique", "React 19", "TypeScript", "Tailwind CSS v4"],
    year: "2025",
    role: "Frontend Engineer — E-Commerce Design",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    description:
      "Curated interior decor boutique platform featuring aesthetic room mockups, architectural lighting catalogs, lookbook inspiration carousels, and persistent shopping bag state.",
    outcome: [
      { value: "Lookbook", label: "inspiration gallery" },
      { value: "Minimal", label: "Nordic aesthetic" },
      { value: "Smooth", label: "responsive layout" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://Badal-kumar98.github.io/maison-ore-lifestyle/",
  },
  {
    id: "civil-engineer",
    index: "16",
    title: "Civil Engineer EPC Portal",
    subtitle: "Infrastructure construction & civil EPC engineering corporate portal",
    category: "client",
    image: "./images/project-orbit.jpg",
    tags: ["Industrial EPC", "React 19", "TypeScript", "Tailwind CSS v4"],
    year: "2025",
    role: "Frontend Engineer — Corporate Engineering",
    stack: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite"],
    description:
      "Heavy infrastructure construction and structural engineering corporate showcase detailing bridge, highway, and mega-project capabilities, compliance certifications, and tender RFP submissions.",
    outcome: [
      { value: "Mega-project", label: "milestone tracking" },
      { value: "Compliance", label: "audit showcase" },
      { value: "Vite", label: "optimized build" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://badal-kumar98.github.io/civil-engineer-epc/",
  },
  {
    id: "netflix-clone",
    index: "17",
    title: "Netflix Streaming Platform Clone",
    subtitle: "Interactive video streaming catalog with TMDB REST API & trailer modals",
    category: "client",
    image: "./images/project-orbit.jpg",
    tags: ["Streaming Web App", "React", "REST APIs", "JavaScript"],
    year: "2024",
    role: "Frontend Developer — API Integration",
    stack: ["React.js", "JavaScript (ES6+)", "TMDB API", "CSS3 Grid"],
    description:
      "Responsive video streaming catalog mirroring Netflix web experience. Fetches real-time dynamic movie categories, trending carousels, backdrop posters via TMDB API, and in-modal YouTube trailer video playback.",
    outcome: [
      { value: "Dynamic", label: "TMDB API categories" },
      { value: "Instant", label: "trailer playback" },
      { value: "Responsive", label: "poster carousel" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://badal-kumar98.github.io/Netflix-clone/",
  },
  {
    id: "weather-app",
    index: "18",
    title: "Real-Time Weather Forecast App",
    subtitle: "Location-based meteorological telemetry & multi-day forecasting",
    category: "client",
    image: "./images/project-pulse.jpg",
    tags: ["Meteorology App", "JavaScript", "REST APIs", "Responsive UI"],
    year: "2024",
    role: "Frontend Developer — API & Geolocation",
    stack: ["JavaScript (ES6+)", "OpenWeatherMap API", "HTML5 Geolocation", "CSS3"],
    description:
      "Real-time meteorological web app utilizing browser Geolocation and OpenWeatherMap REST API to render current temperature, humidity, wind velocity, atmospheric pressure, and 5-day weather forecasts.",
    outcome: [
      { value: "Live", label: "geolocation detection" },
      { value: "5-Day", label: "forecast telemetry" },
      { value: "Fast", label: "zero-lag search" },
    ],
    accent: "#d6ff3f",
    liveUrl: "https://badal-kumar98.github.io/Weather/",
  },
];

// ==================== ENTERPRISE CRMs (DETAILED WHAT WAS BUILT & HOW IT WORKS - STRICTLY NO LIVE PUBLIC LINKS) ====================
export const ENTERPRISE_CRMS: EnterpriseCRM[] = [
  {
    id: "munafa",
    name: "Munafa CRM: Multi-Tenant Enterprise CRM & GST Billing Platform",
    category: "Multi-Tenant Enterprise SaaS & GST Billing Platform",
    badge: "Flagship Multi-Tenant SaaS",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "PayU", "SheetJS", "jsPDF"],
    description: "Full-scale multi-tenant enterprise business suite designed for Indian commercial businesses to unify operational sales, client lifecycle management, accounting, and multi-slab GST compliance.",
    whatWasBuilt: [
      "Tenant-aware dynamic routing (/:type/*) with complete data isolation across independent business organizations.",
      "10+ operational business modules: Leads, Client Lifecycle, Suppliers, Employees, Products, Tasks, Documents, Invoices, Quotations, Purchase Orders, and Payment Receipts.",
      "Automated multi-slab GST calculation engine computing CGST, SGST, and IGST breakdowns based on state code rules.",
      "PayU subscription billing checkout integration with server-side HMAC SHA-256 signature verification and webhook retry listeners.",
      "Automated dynamic PDF invoice generation (jsPDF) with custom business branding and multi-parameter SheetJS Excel bulk ingestion/export.",
      "Granular Role-Based Access Control (RBAC) with distinct permission boundaries for SuperAdmin, Admin, Manager, and Staff accounts."
    ],
    howItWorks: "Companies register an organizational tenant which isolates their catalog, staff, and ledgers. Staff members create quotes and convert them with one click into active invoices, automatically updating inventory balances and triggering payment links. When customer payments arrive through PayU, server webhooks verify the cryptographic signature, reconcile accounts, and auto-dispatch digital GST tax receipts.",
    metrics: "10+ Enterprise Modules · Multi-Tenant Routing · Automated GST Engine",
    status: "Role-Protected Enterprise Portal",
  },
  {
    id: "casestack",
    name: "CaseStack: Smart Case Diary & Court Hearing Telemetry CRM",
    category: "Legal Practice Management & Litigation Telemetry",
    badge: "Legal Practice Platform",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    description: "Production legal CRM engineered specifically for law firms, senior advocates, and legal chambers to replace manual paper diaries with automated court causelist telemetry and hearing alerts.",
    whatWasBuilt: [
      "Active litigation tracking matrix managing case filings, case stages (Petitioner/Respondent), CNR numbers, and court benches.",
      "Automated court hearing reminder engine tracking causelists and dispatching notifications before scheduled appearances.",
      "Filterable interactive legal calendar indexing daily appearances across High Courts, District Courts, and Administrative Tribunals.",
      "Role-Based Access Control allowing senior partners to assign case files to associate advocates while keeping sensitive client logs confidential.",
      "Encrypted digital case document repository with document timeline versioning."
    ],
    howItWorks: "Advocates log incoming litigation with court jurisdiction, case number, and client details. The system organizes all court appearances into a unified calendar, tracks stage-by-stage proceedings, reminds lawyers of upcoming hearings, and logs case orders and judgments for instant retrieval during court arguments.",
    metrics: "Causelist Telemetry · Real-Time Alerts · Encrypted Vault",
    status: "Role-Protected Legal Portal",
  },
  {
    id: "crystalion",
    name: "Crystalion Engineers CRM: Industrial Quotation Engine & Tender Pipeline",
    category: "Industrial Equipment Sales & Tender Management",
    badge: "Quotation & AMC Engine",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "jsPDF", "REST APIs"],
    description: "Industrial B2B software automating itemized engineering quotations with multi-layer margin calculations, tender submission pipelines, and Annual Maintenance Contract (AMC) renewal lifecycles.",
    whatWasBuilt: [
      "Automated industrial equipment sales quotation engine with dynamic Bill of Materials (BOM) cost rollups and profit margin controls.",
      "Multi-stage corporate tender tracking pipeline monitoring RFPs, technical eligibility criteria, bid bonds, and submission deadlines.",
      "Automated server-side corporate PDF proposal compilation with multi-tier managerial approval sign-off workflows.",
      "Automated Annual Maintenance Contract (AMC) renewal reminder triggers tracking warranty expirations and scheduled technician visits.",
      "Centralized client communication archive and historical quotation revision comparison tool."
    ],
    howItWorks: "Sales engineers configure complex industrial machinery quotes by selecting base models, custom engineering add-ons, and transport logistics. The CRM calculates exact taxes, margins, and total price, generates an executive corporate proposal PDF, routes it to management for digital sign-off, and schedules service reminders after contract delivery.",
    metrics: "BOM Calculation Engine · Multi-Tier Approvals · AMC Alerts",
    status: "Role-Protected Industrial CRM",
  },
  {
    id: "neeravi",
    name: "Neeravi Solutions CRM: Sales Lead Ingestion & Proforma Invoice Generator",
    category: "Sales Pipeline Automation & Proforma Invoicing",
    badge: "Sales Pipeline Matrix",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit"],
    description: "Centralized client management system featuring automated inquiry ingestion, deal progression matrix, task delegation, and automated Proforma Invoice (PI) generation.",
    whatWasBuilt: [
      "Omnichannel sales lead ingestion capturing inquiries with automated lead qualification scoring and source attribution.",
      "4-stage deal progression pipeline (Lead -> Technical Review -> Proposal -> Closed Won/Lost) with drag-and-drop workflow updates.",
      "Instant Proforma Invoice (PI) generation engine producing formal corporate pre-invoices with payment terms and bank transfer details.",
      "Sales executive activity telemetry logging calls, follow-up meetings, and customer interaction histories.",
      "Role-based client contact obfuscation to prevent unauthorized export of company proprietary lead data."
    ],
    howItWorks: "Inbound client inquiries flow directly into the CRM intake queue. Representatives qualify leads, advance deals through progression stages, generate formal Proforma Invoices with pre-configured payment terms, and hand off confirmed accounts directly to fulfillment teams with complete audit trails.",
    metrics: "4-Stage Pipeline · Automated PI Engine · Activity Telemetry",
    status: "Role-Protected Sales CRM",
  },
  {
    id: "udcd",
    name: "UDCD Legal Diary CRM: Court Causelist Telemetry & Video Hearing Router",
    category: "Court Causelist Telemetry & Hearing Reminders",
    badge: "Court Telemetry Suite",
    stack: ["React.js", "Tailwind CSS", "REST APIs", "Service Workers", "Web Storage"],
    description: "Digital court diary suite for litigation advocates indexing matters by date (/diary/:date), court causelist scraping telemetry, and automated virtual court (VC) video hearing link routing.",
    whatWasBuilt: [
      "Date-based court diary navigation engine enabling instant access to historical and future hearing dates.",
      "Daily court causelist ingestion pipeline parsing hearing lists and matching case numbers with client files.",
      "Automated Virtual Court (VC) video conference link aggregator routing advocates directly to assigned High Court and District Court Cisco Webex/VC benches.",
      "Client SMS and WhatsApp appearance notification triggers notifying litigants of upcoming hearing schedules.",
      "Offline-first local caching powered by Service Workers allowing lawyers to check case files inside courtrooms with poor network connectivity."
    ],
    howItWorks: "Advocates open their daily diary to view cases listed for the day along with courtroom numbers, judge details, and live item progress. For virtual hearings, a single click connects counsel directly to the assigned courtroom video feed, while offline caching ensures notes remain accessible inside courtroom premises.",
    metrics: "Daily Causelist Ingestion · Automated VC Routing · Offline-First",
    status: "Role-Protected Court Suite",
  },
  {
    id: "vrd",
    name: "VRD CRM: Enterprise Operations Suite with Bulk Data Ingestion",
    category: "Enterprise Operations & High-Volume Data Ingestion",
    badge: "Operations Engine",
    stack: ["React.js", "TypeScript", "SheetJS", "Tailwind CSS", "MongoDB", "Node.js"],
    description: "Enterprise back-office workflow engine with bulk employee and client Excel/CSV data ingestion via SheetJS, multi-column validation filters, and operational audit trails.",
    whatWasBuilt: [
      "High-volume Excel/CSV spreadsheet ingestion pipeline powered by SheetJS, parsing thousands of employee and inventory records in seconds.",
      "Pre-ingestion client-side validation matrix detecting schema mismatches, duplicate entries, and data formatting errors before database writes.",
      "Automated operational workflow transforming bulk operational entries into validated tax invoice records and dispatch manifests.",
      "Immutable activity audit logging recording user actions, record modifications, and export operations for compliance.",
      "Custom role-based dashboard views for operations managers, accountants, and field coordinators."
    ],
    howItWorks: "Back-office coordinators upload bulk operational spreadsheets directly into the portal. The SheetJS parser validates columns and checks for duplicates. Once confirmed, records populate internal database collections, update employee records, and trigger automated invoice flows with zero manual re-entry.",
    metrics: "SheetJS Bulk Ingestion · Multi-Column Validation · Audit Trails",
    status: "Role-Protected Operations Suite",
  },
  {
    id: "ev-fleet",
    name: "EV Dealership Operations & Fleet Management CRM",
    category: "Commercial EV Mobility Operations & Telemetry",
    badge: "Dealership Operations",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
    description: "Dealership operations and technical service management portal for commercial electric vehicles, job card tracking, and battery telemetry inventory.",
    whatWasBuilt: [
      "Field-technician service job card tracking matrix for commercial electric vehicles, spare part consumption, and diagnostic logs.",
      "Serial-number based battery and motor warranty verification preventing fraudulent warranty claims.",
      "Dealership inventory reconciliation monitoring spare parts stock, replenishment orders, and warranty return items.",
      "Multi-tier dealership network access control allowing individual regional dealers to manage their local service bays while head-office oversees national fleet metrics.",
      "Preventative maintenance scheduling based on vehicle service intervals and commercial fleet operating hours."
    ],
    howItWorks: "Dealership service technicians log incoming vehicles by serial number to pull vehicle history and warranty validity. Technicians open digital job cards, requisition spare parts from inventory, log battery diagnostic benchmarks, and obtain customer sign-off before closing service tickets.",
    metrics: "Serial Tracking · Multi-Tier Dealer Network · Inventory Reconciliation",
    status: "Role-Protected Fleet CRM",
  },
];

export const SERVICES = [
  {
    id: "01",
    title: "Full Stack & Backend APIs",
    desc: "Robust RESTful APIs, Mongoose schema modeling, JWT authentication, and role-based access control.",
    points: [
      "Node.js & Express.js REST APIs (25+ production endpoints)",
      "MongoDB schemas, indexing & aggregation pipelines (35% query latency cut)",
      "JWT auth & secure cookie/session tokens with RBAC",
      "Cryptographic HMAC SHA-256 signature verification"
    ],
    tools: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "TypeScript"],
  },
  {
    id: "02",
    title: "Enterprise CRMs & Multi-Tenancy",
    desc: "Production business suites, quotation builders, and inventory management tailored for scale.",
    points: [
      "Multi-tenant routing (/:type/*) & plan-level data isolation",
      "Automated multi-slab GST calculation engine (CGST/SGST/IGST)",
      "SheetJS bulk Excel ingestion/export & dynamic jsPDF generation",
      "Operational quotation engines & inventory reconciliation"
    ],
    tools: ["React", "TypeScript", "Redux Toolkit", "SheetJS", "jsPDF", "MongoDB"],
  },
  {
    id: "03",
    title: "Real-Time Media & WebSockets",
    desc: "Interactive video, audio, and live messaging experiences engineered for ultra-low latency.",
    points: [
      "Agora RTC audio/video streaming with device lifecycle handling",
      "Sub-200ms stream latency & network reconnect recovery",
      "Bidirectional WebSocket / Socket.io chat queues & session timers",
      "Multi-role user/analyst/admin live consultation dashboards"
    ],
    tools: ["Agora RTC SDK", "WebSockets", "Socket.io", "React", "Redux"],
  },
  {
    id: "04",
    title: "FinTech & E-Commerce Systems",
    desc: "Conversion-optimized checkouts, payment gateway reconciliation, and billing automation.",
    points: [
      "PayU & Razorpay checkout integrations (99.8% transaction success rate)",
      "Server-side HMAC verification & automated webhook retry listeners",
      "Multi-step cart persistence, custom hamper builders & slot calendars",
      "95+ Google Lighthouse mobile performance scores"
    ],
    tools: ["PayU", "Razorpay", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
];

export const EXPERIENCE = [
  {
    period: "March 2025 — Present (1 Year, 8 Months)",
    role: "Full Stack Developer",
    org: "Koncept Software Solutions · New Delhi (Full-time, On-site)",
    desc: "Architecting and shipping full-stack web applications, custom enterprise CRMs, and e-commerce platforms across 20+ client systems in an agile engineering team. Modeling normalized MongoDB schemas, engineering 25+ Node.js/Express REST APIs with JWT & RBAC (reducing backend query latency by 35%), integrating PayU and Razorpay gateways with server-side HMAC signature verification (99.8% transaction success rate), deploying Agora RTC audio/video consultation with WebSockets, automating GST invoice PDF generation (jsPDF) and SheetJS bulk pipelines, and delivering 95+ Lighthouse React/TypeScript user interfaces.",
  },
  {
    period: "June 2024 — November 2024 (6 Months)",
    role: "Frontend Developer Intern",
    org: "Nickicon Pvt. Ltd. · India (Remote Internship)",
    desc: "Developed dynamic, component-driven user interfaces and reusable UI component libraries using React.js, modern JavaScript (ES6+), and Tailwind CSS. Managed asynchronous application state with Redux Toolkit, integrated third-party RESTful APIs, optimized client-side rendering speed, and collaborated closely with senior engineers in agile sprints using Git and GitHub.",
  },
];

export const STACK = [
  { name: "React.js & Next.js", level: 96 },
  { name: "Node.js & Express.js", level: 93 },
  { name: "MongoDB & Mongoose ODM", level: 91 },
  { name: "TypeScript & JavaScript (ES6+)", level: 95 },
  { name: "Redux Toolkit & React Query", level: 94 },
  { name: "Tailwind CSS & Material UI", level: 96 },
  { name: "REST APIs, JWT & RBAC", level: 93 },
  { name: "WebSockets & Agora RTC SDK", level: 89 },
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
