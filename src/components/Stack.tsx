import { useEffect, useRef } from "react";
import { Atom, Code2, Database, Figma, Gauge, GitBranch, Layers, Palette, Rocket, Server, Smartphone, Wind } from "lucide-react";
import { gsap } from "../lib/smooth";
import { STACK } from "../data/portfolio";
import { SectionHead } from "./Work";

const ICONS = [Atom, Code2, Layers, Wind, Rocket, Server, Palette, Figma];
const ALT = [
  { icon: Smartphone, label: "Responsive UI" },
  { icon: Database, label: "Redux State" },
  { icon: GitBranch, label: "Git & GitHub" },
  { icon: Gauge, label: "Lighthouse 95+" },
];

export default function Stack() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".orb",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          stagger: { each: 0.07, grid: "auto", from: "center" },
          scrollTrigger: { trigger: ".orb-grid", start: "top 82%" },
        }
      );
      // orbit rotation
      gsap.to(".orbit-ring", { rotate: 360, duration: 40, ease: "none", repeat: -1 });
      gsap.to(".orbit-ring-rev", { rotate: -360, duration: 55, ease: "none", repeat: -1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={root} className="relative overflow-hidden bg-[#131316] py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b7bff]/10 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute right-10 top-20 h-[300px] w-[300px] rounded-full bg-[#d6ff3f]/10 blur-[120px]" />

      <SectionHead num="( 04 )" hint="Tools of the trade" title={<>A stack tuned for <span className="text-stroke-lime">speed.</span></>} />

      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
        {/* Orbit visual */}
        <div className="orb-grid relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px]">
          <div className="orbit-ring absolute inset-0 rounded-full border border-dashed border-[#33333c]">
            <span className="absolute -top-2 left-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-x-1/2 rounded-full bg-[#d6ff3f] shadow-[0_0_20px_#d6ff3f]" />
          </div>
          <div className="orbit-ring-rev absolute inset-[12%] rounded-full border border-[#2a2a32]">
            <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 sm:h-3 sm:w-3 -translate-x-1/2 rounded-full bg-[#8b7bff] shadow-[0_0_16px_#8b7bff]" />
          </div>
          <div className="absolute inset-[26%] rounded-full border border-[#26262d] bg-[#0a0a0b]/60 backdrop-blur" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="font-display text-3xl sm:text-5xl font-extrabold md:text-6xl">1.6<span className="text-[#d6ff3f]">+</span></p>
              <p className="mt-1 font-mono2 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8b8b94]">Years in React</p>
            </div>
          </div>
          {STACK.slice(0, 8).map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + 40 * Math.cos(angle);
            const y = 50 + 40 * Math.sin(angle);
            return (
              <div
                key={s.name}
                className="orb absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="grid h-10 w-10 sm:h-14 sm:w-14 place-items-center rounded-xl sm:rounded-2xl border border-[#2e2e36] bg-[#0a0a0b] text-[#d6ff3f] shadow-xl transition-transform hover:scale-110 md:h-16 md:w-16">
                  <Icon size={18} className="sm:hidden" />
                  <Icon size={22} className="hidden sm:block" />
                </span>
                <span className="hidden sm:inline-block whitespace-nowrap rounded-full bg-black/80 px-2 py-0.5 font-mono2 text-[8px] sm:text-[9px] uppercase tracking-wider text-white backdrop-blur">
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bars + extras */}
        <div>
          <div className="flex flex-col gap-3.5 sm:gap-4">
            {STACK.map((s) => (
              <div key={s.name} className="group flex items-center gap-2.5 sm:gap-4">
                <span className="w-28 sm:w-36 md:w-44 shrink-0 truncate font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-[#b9b9c2]">
                  {s.name}
                </span>
                <div className="h-1.5 sm:h-2 flex-1 overflow-hidden rounded-full bg-[#26262d]">
                  <div
                    className="skill-fill h-full origin-left rounded-full bg-gradient-to-r from-[#8b7bff] via-[#4ade80] to-[#d6ff3f]"
                    data-level={s.level}
                    style={{ transform: "scaleX(0)" }}
                  />
                </div>
                <span className="w-8 sm:w-10 text-right font-mono2 text-[11px] sm:text-xs text-[#8b8b94]">{s.level}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ALT.map((a) => (
              <div key={a.label} className="flex items-center gap-2.5 rounded-2xl border border-[#26262d] bg-[#0a0a0b] px-4 py-3.5 transition-colors hover:border-[#d6ff3f]/50">
                <a.icon size={17} className="shrink-0 text-[#d6ff3f]" />
                <span className="text-[13px] font-medium text-[#e6e5de]">{a.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-[#2e2e36] p-5 font-mono2 text-xs leading-relaxed text-[#8b8b94]">
            <span className="text-[#4ade80]">$</span> git checkout production — Vite + TypeScript + Redux Toolkit + Agora RTC + Tailwind. <span className="text-white">Sub-second performance & zero lag.</span>
          </p>
        </div>
      </div>

      {/* infinite tech marquee */}
      <div className="mt-16 space-y-3">
        <div className="overflow-hidden border-y border-[#26262d] py-4">
          <div className="flex w-max animate-[marquee_55s_linear_infinite] gap-3 whitespace-nowrap">
            {[0, 1].map((n) => (
              <div key={n} className="flex shrink-0 gap-3" aria-hidden={n === 1}>
                {["React.js (v18+)", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Agora RTC SDK", "WebSockets", "Vite", "PayU", "Razorpay", "SheetJS"].map((t) => (
                  <span key={t} className="rounded-full border border-[#2e2e36] px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-[#b9b9c2]">
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
