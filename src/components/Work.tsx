import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Lock, ShieldCheck, Terminal, Layers } from "lucide-react";
import { gsap } from "../lib/smooth";
import { PROJECTS, ENTERPRISE_CRMS, type Project, type EnterpriseCRM } from "../data/portfolio";

export function SectionHead({
  num,
  title,
  hint,
}: {
  num: string;
  title: React.ReactNode;
  hint?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sh-line span",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".sh-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mx-auto mb-10 max-w-[1500px] px-5 md:mb-14 md:px-10">
      <div className="sh-fade mb-4 flex items-center gap-3">
        <span className="whitespace-nowrap rounded-full border border-[#d6ff3f]/40 bg-[#d6ff3f]/10 px-3 py-1 font-mono2 text-[10px] sm:text-[11px] tracking-[0.2em] text-[#d6ff3f]">
          {num}
        </span>
        {hint && (
          <span className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">{hint}</span>
        )}
        <span className="h-px flex-1 bg-[#26262d]" />
      </div>
      <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
        <span className="sh-line mask-line"><span>{typeof title === "string" ? title : title}</span></span>
      </h2>
    </div>
  );
}

function ProjectCard({
  p,
  onOpen,
  flip,
}: {
  p: Project;
  onOpen: (p: Project) => void;
  flip: boolean;
}) {
  const card = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = card.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-img",
        { clipPath: "inset(12% 8% 12% 8% round 24px)", scale: 0.96 },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 35%", scrub: 1 },
        }
      );
      gsap.fromTo(
        ".reveal-img img",
        { scale: 1.35 },
        {
          scale: 1.05,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 35%", scrub: 1 },
        }
      );
      gsap.fromTo(
        ".wc-title",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 78%" },
        }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  // 3D tilt on hover
  useEffect(() => {
    const el = card.current;
    const img = el?.querySelector(".reveal-img");
    if (!el || !img || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(img, { rotateY: px * 7, rotateX: -py * 7, transformPerspective: 1000, duration: 0.5, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(img, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <article
      ref={card}
      className={`group grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <button
        onClick={() => onOpen(p)}
        data-cursor="view"
        className="reveal-img card-sheen relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#26262d] text-left transition-colors duration-500 hover:border-[#d6ff3f]/50"
      >
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />
        
        {/* Top Badges */}
        <div className="absolute left-3 top-3 sm:left-5 sm:top-5 flex flex-wrap gap-1.5 sm:gap-2 max-w-[90%]">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-black/70 border border-white/10 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono2 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-[#f2f1ea] backdrop-blur-md whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#d6ff3f] text-black opacity-0 transition-all duration-500 group-hover:opacity-100 scale-75 group-hover:scale-100 shadow-[0_0_24px_rgba(214,255,63,0.4)]">
          <ArrowUpRight size={20} />
        </div>
        <span className="absolute bottom-3 left-4 sm:bottom-5 sm:left-5 font-display text-4xl sm:text-6xl font-extrabold text-white/20">{p.index}</span>
      </button>

      <div className="wc-title">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <p className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#d6ff3f]">
            {p.index} — {p.year} · {p.role}
          </p>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          {p.title}
          <span className="text-[#d6ff3f]">.</span>
        </h3>
        <p className="mt-1.5 sm:mt-2 text-sm sm:text-base md:text-lg text-[#8b8b94]">{p.subtitle}</p>
        <p className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-[#b9b9c2]">{p.description.slice(0, 160)}…</p>
        
        {/* Outcome metrics pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.outcome.map((o) => (
            <span key={o.label} className="rounded-full border border-[#26262d] bg-[#131316] px-3 py-1 font-mono2 text-[10px] text-[#8b8b94]">
              <strong className="text-[#d6ff3f] font-semibold">{o.value}</strong> {o.label}
            </span>
          ))}
        </div>

        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => onOpen(p)}
            className="group/btn flex items-center gap-2 rounded-full bg-[#f2f1ea] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#d6ff3f]"
          >
            Case study
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#2e2e36] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f]"
          >
            Live Site ↗
          </a>
          <span className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">{p.year}</span>
        </div>
      </div>
    </article>
  );
}

function CRMCard({ crm }: { crm: EnterpriseCRM }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-[#26262d] bg-[#131316] p-6 sm:p-8 transition-all duration-500 hover:border-[#d6ff3f]/60 hover:bg-[#18181d]">
      <div>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d6ff3f]/30 bg-[#d6ff3f]/10 px-3 py-1 font-mono2 text-[10px] uppercase tracking-wider text-[#d6ff3f]">
            <Lock size={11} /> {crm.badge}
          </span>
          <span className="rounded-full bg-black/60 px-2.5 py-1 font-mono2 text-[9px] uppercase tracking-wider text-[#8b8b94] border border-[#26262d]">
            {crm.status}
          </span>
        </div>

        {/* Title & Category */}
        <h4 className="font-display text-xl sm:text-2xl font-bold text-[#f2f1ea] group-hover:text-[#d6ff3f] transition-colors">
          {crm.name}
        </h4>
        <p className="mt-1 font-mono2 text-xs text-[#8b8b94] leading-relaxed">
          {crm.category}
        </p>

        {/* Description */}
        <p className="mt-3 text-sm text-[#b9b9c2] leading-relaxed">
          {crm.description}
        </p>

        {/* Tech stack badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {crm.stack.map((st) => (
            <span key={st} className="rounded-md border border-[#26262d] bg-black/40 px-2 py-0.5 font-mono2 text-[9px] text-[#8b8b94]">
              {st}
            </span>
          ))}
        </div>
      </div>

      {/* Footer row */}
      <div className="mt-6 pt-5 border-t border-[#26262d] flex items-center justify-between gap-3">
        <span className="font-mono2 text-[10px] text-[#8b8b94] truncate">
          {crm.metrics}
        </span>
        <a
          href={crm.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono2 text-xs font-semibold text-[#d6ff3f] transition-transform hover:translate-x-1"
        >
          Portal Login ↗
        </a>
      </div>
    </div>
  );
}

export default function Work({ onOpen }: { onOpen: (p: Project) => void }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "E-Commerce", "TypeScript", "React", "Mobility"];
  
  const list = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    return p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <section id="work" className="relative py-20 sm:py-24 md:py-32">
      {/* ==================== 1. COMMERCIAL CLIENT PROJECTS (WITH REAL SCREENSHOTS) ==================== */}
      <SectionHead
        num="( 01 )"
        hint="Live Production Work"
        title={<>Work that ships<span className="text-[#d6ff3f]">,</span> code that <span className="text-stroke-lime">performs.</span></>}
      />

      {/* Filter tabs */}
      <div className="mx-auto mb-10 sm:mb-14 flex max-w-[1500px] flex-wrap items-center gap-2 px-5 md:px-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 sm:px-5 sm:py-2 font-mono2 text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] transition-all ${
              filter === f
                ? "bg-[#d6ff3f] text-black font-semibold shadow-[0_0_20px_rgba(214,255,63,0.3)]"
                : "border border-[#2e2e36] text-[#8b8b94] hover:border-[#d6ff3f] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Main Project Cards Grid */}
      <div className="mx-auto flex max-w-[1500px] flex-col gap-20 px-5 md:gap-28 md:px-10">
        {list.map((p, i) => (
          <ProjectCard key={p.id} p={p} onOpen={onOpen} flip={i % 2 === 1} />
        ))}
      </div>

      {/* ==================== 2. DEDICATED ENTERPRISE CRMs SECTION (NAMES & HIGHLIGHTS) ==================== */}
      <div className="mt-28 sm:mt-36 md:mt-44 pt-16 border-t border-[#26262d]">
        <div className="mx-auto mb-10 max-w-[1500px] px-5 md:mb-14 md:px-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="whitespace-nowrap rounded-full border border-[#d6ff3f]/40 bg-[#d6ff3f]/10 px-3 py-1 font-mono2 text-[10px] sm:text-[11px] tracking-[0.2em] text-[#d6ff3f]">
              ( 02 )
            </span>
            <span className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">
              Confidential Business Suites & Internal Platforms
            </span>
            <span className="h-px flex-1 bg-[#26262d]" />
          </div>
          <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">
            Enterprise CRMs <span className="text-[#d6ff3f]">&</span> Operations Portals<span className="text-[#d6ff3f]">.</span>
          </h3>
        </div>

        {/* Consistent Neon Lime Green Interviewer Notice Box */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-[1500px] px-5 md:px-10">
          <div className="rounded-3xl border border-[#d6ff3f]/30 bg-[#d6ff3f]/5 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-[#d6ff3f] font-bold text-base sm:text-lg mb-2">
              <ShieldCheck size={20} className="shrink-0" />
              <span>Confidential B2B Notice for Technical Interviewers & Recruiters</span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base text-[#b9b9c2]">
              These enterprise CRM platforms are internal company operations systems engineered with multi-tenant architecture and Role-Based Access Control (RBAC). In accordance with enterprise confidentiality, public self-signup is disabled. Architecture diagrams, normalized database schemas, and live sandbox walkthroughs are demonstrated during technical interviews.
            </p>
          </div>
        </div>

        {/* 7 Enterprise CRMs Grid */}
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
          {ENTERPRISE_CRMS.map((crm) => (
            <CRMCard key={crm.id} crm={crm} />
          ))}
        </div>
      </div>
    </section>
  );
}
