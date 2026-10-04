import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Calendar, User, X } from "lucide-react";
import { gsap, stopSmooth, startSmooth } from "../lib/smooth";
import type { Project } from "../data/portfolio";

export default function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (project) {
      setVisible(true);
      stopSmooth();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      startSmooth();
    }
  }, [project]);

  useEffect(() => {
    if (!project || !visible) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".cs-panel", { yPercent: 6, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, ease: "power4.out" });
      gsap.fromTo(".cs-hero-img", { clipPath: "inset(8% 4% 8% 4% round 24px)" }, { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.1, ease: "power4.out", delay: 0.15 });
      gsap.fromTo(".cs-stagger", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.3 });
    }, root);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => {
      ctx.revert();
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, visible]);

  const handleClose = () => {
    if (!root.current) {
      setVisible(false);
      onClose();
      return;
    }
    gsap.to(".cs-panel", {
      yPercent: 8,
      opacity: 0,
      duration: 0.45,
      ease: "power3.in",
      onComplete: () => {
        setVisible(false);
        onClose();
      },
    });
  };

  if (!project || !visible) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[150] flex flex-col bg-black/70 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={handleClose} />
      <div className="cs-panel relative mx-auto flex max-h-[92vh] w-[min(1060px,94vw)] flex-col overflow-hidden rounded-3xl border border-[#2e2e36] bg-[#131316] mt-[4vh]">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-[#26262d] px-5 py-4 md:px-8">
          <button onClick={handleClose} className="flex items-center gap-2 rounded-full border border-[#2e2e36] px-4 py-2 text-sm text-[#b9b9c2] transition-colors hover:border-[#d6ff3f] hover:text-[#d6ff3f]">
            <ArrowLeft size={15} /> All work
          </button>
          <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">
            Case study — <span style={{ color: project.accent }}>{project.index}</span>
          </p>
          <button onClick={handleClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f1ea] text-black transition-transform hover:rotate-90">
            <X size={18} />
          </button>
        </div>

        {/* scrollable */}
        <div className="overflow-y-auto">
          <div className="px-5 pt-7 md:px-8">
            <p className="cs-stagger font-mono2 text-[11px] uppercase tracking-[0.25em]" style={{ color: project.accent }}>
              {project.year} · {project.role}
            </p>
            <h2 className="cs-stagger mt-2 font-display text-4xl font-extrabold leading-none md:text-6xl">
              {project.title}<span style={{ color: project.accent }}>.</span>
            </h2>
            <p className="cs-stagger mt-2 text-lg text-[#8b8b94]">{project.subtitle}</p>

            <div className="cs-hero-img relative mt-6 aspect-[16/8] overflow-hidden rounded-3xl border border-[#26262d]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="cs-stagger mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border border-[#2e2e36] px-4 py-2 font-mono2 text-[11px] uppercase tracking-widest text-[#b9b9c2]">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="cs-stagger">
                <h3 className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">The Architecture</h3>
                <p className="mt-3 leading-relaxed text-[#e6e5de]">{project.description}</p>
                <p className="mt-3 leading-relaxed text-[#b9b9c2]">
                  Engineering approach: Componentized React design patterns with TypeScript type safety, memoized Redux Toolkit selectors to eliminate unneeded re-renders, and custom Vite chunk splitting for fast initial load times.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-[#f2f1ea] px-5 py-2.5 text-[13px] font-bold text-black">
                    <Calendar size={14} /> {project.year}
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-[#2e2e36] px-5 py-2.5 text-[13px] text-[#b9b9c2]">
                    <User size={14} /> {project.role}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[#d6ff3f] bg-[#d6ff3f]/10 px-5 py-2.5 text-[13px] font-bold text-[#d6ff3f] transition-all hover:bg-[#d6ff3f] hover:text-black"
                  >
                    Open Live Deployment ↗
                  </a>
                </div>
              </div>
              <div className="cs-stagger flex flex-col gap-3">
                <h3 className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">Verified Metrics</h3>
                {project.outcome.map((o) => (
                  <div key={o.label} className="flex items-center justify-between rounded-2xl border border-[#26262d] bg-[#0a0a0b] px-5 py-4">
                    <span className="font-display text-2xl font-extrabold" style={{ color: project.accent }}>{o.value}</span>
                    <span className="font-mono2 text-[11px] uppercase tracking-[0.18em] text-[#8b8b94]">{o.label}</span>
                  </div>
                ))}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl py-4 font-bold uppercase tracking-wider text-black"
                  style={{ background: project.accent }}
                >
                  Visit Live Project <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
            <div className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
