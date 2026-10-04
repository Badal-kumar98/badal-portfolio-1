import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "../lib/smooth";
import { PROJECTS, type Project } from "../data/portfolio";

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
        <span className="rounded-full border border-[#d6ff3f]/40 bg-[#d6ff3f]/10 px-3 py-1 font-mono2 text-[11px] tracking-[0.25em] text-[#d6ff3f]">
          {num}
        </span>
        {hint && (
          <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">{hint}</span>
        )}
        <span className="h-px flex-1 bg-[#26262d]" />
      </div>
      <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
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
        className="reveal-img card-sheen relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#26262d] text-left"
      >
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
        <div className="absolute left-5 top-5 flex gap-2">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-black/55 px-3 py-1.5 font-mono2 text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
              {t}
            </span>
          ))}
        </div>
        <div className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#d6ff3f] text-black opacity-0 transition-all duration-500 group-hover:opacity-100 scale-75 group-hover:scale-100">
          <ArrowUpRight size={22} />
        </div>
        <span className="absolute bottom-5 left-5 font-display text-6xl font-extrabold text-white/25">{p.index}</span>
      </button>

      <div className="wc-title">
        <p className="mb-2 font-mono2 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.accent }}>
          {p.index} — {p.year} · {p.role}
        </p>
        <h3 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
          {p.title}
          <span className="text-[#d6ff3f]">.</span>
        </h3>
        <p className="mt-2 text-base text-[#8b8b94] md:text-lg">{p.subtitle}</p>
        <p className="mt-4 max-w-lg leading-relaxed text-[#b9b9c2]">{p.description.slice(0, 160)}…</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onOpen(p)}
            className="group/btn flex items-center gap-2 rounded-full bg-[#f2f1ea] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#d6ff3f]"
          >
            Case study
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#2e2e36] px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f]"
          >
            Live Demo ↗
          </a>
          <span className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">{p.year}</span>
        </div>
      </div>
    </article>
  );
}

export default function Work({ onOpen }: { onOpen: (p: Project) => void }) {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "React", "TypeScript", "Redux", "SaaS"];
  const list = PROJECTS.filter((p) =>
    filter === "All" ? true : p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section id="work" className="relative py-24 md:py-32">
      <SectionHead num="( 01 )" hint="Flagship Production Systems" title={<>Work that ships<span className="text-[#d6ff3f]">,</span> code that <span className="text-stroke">performs.</span></>} />

      {/* Filter tabs */}
      <div className="mx-auto mb-14 flex max-w-[1500px] flex-wrap items-center gap-2 px-5 md:px-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 font-mono2 text-xs uppercase tracking-[0.18em] transition-all ${
              filter === f
                ? "bg-[#d6ff3f] text-black font-semibold"
                : "border border-[#2e2e36] text-[#8b8b94] hover:border-[#d6ff3f] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col gap-20 px-5 md:gap-28 md:px-10">
        {list.map((p, i) => (
          <ProjectCard key={p.id} p={p} onOpen={onOpen} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
