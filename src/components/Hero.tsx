import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Star } from "lucide-react";
import { gsap, scrollToSection } from "../lib/smooth";
import { PROFILE } from "../data/portfolio";
import { useMagnetic } from "./Nav";

function SplitLines({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`mask-line ${className}`}>
      <span className="hero-line" data-delay={delay}>
        {text}
      </span>
    </span>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const ctaRef = useMagnetic<HTMLButtonElement>(0.25);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-line", { yPercent: 115 }, { yPercent: 0, duration: 1.3, stagger: 0.12 }, 0.1)
        .fromTo(".hero-fade", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.09 }, 0.7)
        .fromTo(
          ".hero-img-wrap",
          { clipPath: "inset(100% 0 0 0)", scale: 1.25 },
          { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.5, ease: "power4.inOut" },
          0.35
        )
        .fromTo(".hero-img-wrap img", { scale: 1.4 }, { scale: 1.08, duration: 2.2, ease: "power3.out" }, 0.35)
        .fromTo(".hero-meta-item", { x: 24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 0.9);

      // Floating portrait parallax on mouse
      const wrap = root.current?.querySelector(".hero-img-wrap");
      const img = root.current?.querySelector(".hero-img-wrap img");
      const onMouse = (e: MouseEvent) => {
        const cx = (e.clientX / window.innerWidth - 0.5) * 14;
        const cy = (e.clientY / window.innerHeight - 0.5) * 10;
        if (wrap) gsap.to(wrap as gsap.TweenTarget, { x: cx, y: cy, duration: 0.8, ease: "power2.out", overwrite: "auto" });
        if (img) gsap.to(img as gsap.TweenTarget, { x: -cx * 0.5, duration: 0.8, ease: "power2.out", overwrite: "auto" });
      };
      window.addEventListener("mousemove", onMouse);
      return () => window.removeEventListener("mousemove", onMouse);
    }, root);

    // Scroll parallax
    const st = gsap.to(".hero-title-block", {
      yPercent: 18,
      opacity: 0.25,
      ease: "none",
      scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
    });
    return () => {
      ctx.revert();
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [ready]);

  return (
    <section id="top" ref={root} className="relative overflow-hidden pb-10 pt-28 md:pt-36">
      {/* backdrop typography */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 select-none overflow-hidden">
        <p className="hero-fade whitespace-nowrap text-center font-display text-[19vw] font-extrabold leading-none text-stroke-faint opacity-60">
          FRONTEND DEV —
        </p>
      </div>
      <div aria-hidden className="dot-grid pointer-events-none absolute right-0 top-0 h-[480px] w-[420px] opacity-40 [mask-image:radial-gradient(closest-side,black,transparent)]" />

      <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 md:px-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-6">
        {/* LEFT */}
        <div className="hero-title-block">
          <div className="hero-fade mb-6 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-[#d6ff3f]/40 bg-[#d6ff3f]/10 px-4 py-1.5 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#d6ff3f]">
              <Star size={12} className="fill-[#d6ff3f]" /> {PROFILE.availability}
            </span>
            <span className="flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">
              <MapPin size={12} /> {PROFILE.location}
            </span>
          </div>

          <h1 className="font-display font-extrabold leading-[0.92] tracking-tight">
            <SplitLines text="FRONTEND" className="text-[15.5vw] md:text-[10.5vw] lg:text-[8.2vw]" delay={0} />
            <SplitLines text="DEVELOPER" className="text-stroke text-[15.5vw] md:text-[10.5vw] lg:text-[8.2vw]" delay={0.1} />
            <span className="mask-line">
              <span className="hero-line flex items-center gap-4 text-[15.5vw] md:text-[10.5vw] lg:text-[8.2vw]">
                <span className="hidden h-[0.55em] w-[1.6em] overflow-hidden rounded-full md:block">
                  <img src="/images/portrait.jpg" alt="Badal Kumar" className="h-full w-full object-cover" />
                </span>
                <span className="text-[#d6ff3f]">&amp; REACT.JS</span>
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-7 max-w-xl text-base leading-relaxed text-[#b9b9c2] md:text-lg">
            Hey, I'm <span className="font-semibold text-white">{PROFILE.name}</span> — {PROFILE.tagline} Shipped 12+ live client frontends with TypeScript, Redux Toolkit, and Agora RTC with verified 95+ mobile Lighthouse performance scores.
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-4">
            <button
              ref={ctaRef}
              data-magnetic
              onClick={() => scrollToSection("work")}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#d6ff3f] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">View selected work</span>
              <ArrowDown size={16} className="relative transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 rounded-full border border-[#2e2e36] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f]"
            >
              Contact me
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* stats */}
          <div className="hero-fade mt-12 grid max-w-xl grid-cols-3 divide-x divide-[#26262d] border-y border-[#26262d]">
            {[
              { v: `${PROFILE.years}`, l: "Years experience" },
              { v: `${PROFILE.projects}`, l: "Live projects shipped" },
              { v: `${PROFILE.lighthouse}`, l: "Mobile Lighthouse" },
            ].map((s) => (
              <div key={s.l} className="px-4 py-5 md:px-6">
                <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                  {s.v}
                </p>
                <p className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#8b8b94]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="relative flex flex-col gap-5">
          <div className="hero-img-wrap card-sheen relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[#26262d] lg:mt-4" data-cursor="view">
            <img src="/images/portrait.jpg" alt="Badal Kumar portrait" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
              <div>
                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#d6ff3f]">Role</p>
                <p className="font-display text-xl font-bold text-white">{PROFILE.role}</p>
              </div>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-white/60">Delhi NCR</p>
            </div>
          </div>

          <div className="hidden flex-col gap-3 lg:flex">
            {["React.js — TypeScript", "Redux Toolkit — Vite", "Agora RTC — WebSockets"].map((t, i) => (
              <div key={t} className="hero-meta-item flex items-center justify-between rounded-2xl border border-[#26262d] bg-[#131316]/80 px-5 py-3.5 backdrop-blur">
                <span className="font-mono2 text-xs uppercase tracking-[0.18em] text-[#b9b9c2]">{t}</span>
                <span className="font-mono2 text-xs text-[#d6ff3f]">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="hero-fade relative mt-14 border-y border-[#26262d] bg-[#d6ff3f] py-3.5 text-black">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-0 whitespace-nowrap">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center" aria-hidden={n === 1}>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center font-display text-lg font-extrabold uppercase tracking-tight">
                  <span className="px-5">React.js</span><Star size={15} className="fill-black" />
                  <span className="px-5">TypeScript</span><Star size={15} className="fill-black" />
                  <span className="px-5">Redux Toolkit</span><Star size={15} className="fill-black" />
                  <span className="px-5">Agora RTC</span><Star size={15} className="fill-black" />
                  <span className="px-5">Tailwind CSS</span><Star size={15} className="fill-black" />
                  <span className="px-5">Vite</span><Star size={15} className="fill-black" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
