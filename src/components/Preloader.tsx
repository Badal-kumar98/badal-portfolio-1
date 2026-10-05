import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../lib/smooth";
import { PROFILE } from "../data/portfolio";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          if (doneRef.current) return;
          doneRef.current = true;
          gsap.to(root.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            delay: 0.15,
            onComplete: onDone,
          });
        },
      });
      tl.to(counter, {
        v: 100,
        duration: 1.0,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(counter.v)),
      })
        .to(".pre-bar-fill", { scaleX: 1, duration: 1.0, ease: "power2.inOut" }, 0)
        .to(".pre-word span", { yPercent: 0, stagger: 0.04, duration: 0.6, ease: "power4.out" }, 0.1)
        .to(".pre-fade", { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: "power3.out" }, 0.4);
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div ref={root} className="fixed inset-0 z-[300] flex flex-col justify-between bg-[#0a0a0b] px-6 py-6 md:px-12 md:py-8">
      <div className="pre-fade flex items-center justify-between opacity-0 translate-y-3">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#8b8b94]">Portfolio © 2026</p>
        <p className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#8b8b94]">React · TypeScript · Tailwind</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="overflow-hidden">
          <h1 className="pre-word font-display text-[13vw] font-extrabold leading-[0.95] tracking-tight md:text-[9vw]">
            {"BADAL".split("").map((c, i) => (
              <span key={i} className="inline-block translate-y-full">{c}</span>
            ))}
            <span className="inline-block translate-y-full text-[#d6ff3f]">&nbsp;©</span>
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="pre-word font-display text-[13vw] font-extrabold leading-[0.95] tracking-tight md:text-[9vw]">
            {"KUMAR".split("").map((c, i) => (
              <span key={i} className="inline-block translate-y-full text-stroke">{c}</span>
            ))}
          </h1>
        </div>
        <p className="pre-fade max-w-md translate-y-3 text-sm text-[#8b8b94] opacity-0 md:text-base">
          {PROFILE.tagline}
        </p>
      </div>

      <div className="pre-fade flex items-end justify-between opacity-0 translate-y-3">
        <div className="h-[2px] w-full max-w-xl overflow-hidden rounded bg-[#26262d]">
          <div className="pre-bar-fill h-full w-full origin-left scale-x-0 bg-[#d6ff3f]" />
        </div>
        <p className="font-display pl-6 text-6xl font-extrabold tabular-nums text-[#f2f1ea] md:text-7xl">
          {count}<span className="text-[#d6ff3f]">%</span>
        </p>
      </div>
    </div>
  );
}

export function useRevealReady(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    ScrollTrigger.refresh();
  }, [ready]);
}
