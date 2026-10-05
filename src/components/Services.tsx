import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Layers } from "lucide-react";
import { gsap } from "../lib/smooth";
import { SERVICES } from "../data/portfolio";
import { SectionHead } from "./Work";
import { scrollToSection } from "../lib/smooth";

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Call, goals, moodboards. I ask annoying-good questions." },
    { n: "02", t: "Design", d: "Figma prototypes with motion baked in from frame one." },
    { n: "03", t: "Build", d: "React + GSAP sprints with staging links every Friday." },
    { n: "04", t: "Launch", d: "QA, analytics, handover videos. Then we celebrate." },
  ];
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proc-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".proc-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "power3.inOut",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={root} className="mx-auto mt-16 max-w-[1500px] px-5 md:px-10">
      <div className="mb-8 flex items-center gap-4">
        <h3 className="font-display text-2xl font-extrabold md:text-3xl">How we'll work</h3>
        <span className="proc-line hidden h-px flex-1 origin-left bg-[#2e2e36] md:block" />
        <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">2–6 weeks typical</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="proc-card group rounded-3xl border border-[#26262d] bg-[#131316] p-6 transition-colors duration-300 hover:border-[#d6ff3f]/60">
            <p className="font-display text-5xl font-extrabold text-stroke-faint transition-all group-hover:text-[#d6ff3f]">{s.n}</p>
            <h4 className="mt-3 font-display text-xl font-bold">{s.t}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#8b8b94]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".svc-row").forEach((row) => {
        gsap.fromTo(
          row,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 90%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative py-24 md:py-32">
      <SectionHead num="( 03 )" hint="What I can do for you" title={<>Services with <span className="text-[#d6ff3f]">teeth.</span></>} />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="overflow-hidden rounded-3xl border border-[#26262d]">
          {SERVICES.map((s, i) => {
            const open = active === i;
            return (
              <div key={s.id} className={`svc-row border-b border-[#26262d] last:border-0 ${open ? "bg-[#131316]" : "bg-[#0a0a0b]"}`}>
                <button
                  onClick={() => setActive(open ? -1 : i)}
                  className="flex w-full items-center gap-3 px-4 py-5 text-left sm:gap-4 md:gap-8 md:px-10 md:py-8"
                >
                  <span className={`font-mono2 text-xs md:text-sm ${open ? "text-[#d6ff3f]" : "text-[#8b8b94]"}`}>{s.id}</span>
                  <span className={`flex-1 font-display text-lg sm:text-2xl font-extrabold tracking-tight transition-colors md:text-4xl ${open ? "text-white" : "text-[#6d6d77]"}`}>
                    {s.title}
                  </span>
                  <span className="hidden gap-2 md:flex">
                    {s.tools.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border border-[#2e2e36] px-3 py-1 font-mono2 text-[10px] uppercase tracking-widest text-[#8b8b94]">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className={`grid h-9 w-9 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ${open ? "rotate-45 border-[#d6ff3f] bg-[#d6ff3f] text-black" : "border-[#2e2e36] text-white"}`}>
                    <ArrowUpRight size={16} className={open ? "rotate-90" : ""} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 px-6 pb-8 md:grid-cols-[1fr_1fr] md:px-10">
                      <div>
                        <p className="max-w-md text-[#b9b9c2]">{s.desc}</p>
                        <button
                          onClick={() => scrollToSection("contact")}
                          className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d6ff3f]"
                        >
                          <Layers size={15} /> Start a project <ArrowUpRight size={15} />
                        </button>
                      </div>
                      <ul className="flex flex-col gap-2.5">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-3 rounded-2xl border border-[#26262d] bg-[#0a0a0b] px-4 py-3 text-sm text-[#e6e5de]">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#d6ff3f]/15 text-[#d6ff3f]">
                              <Check size={13} />
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Process />
    </section>
  );
}
