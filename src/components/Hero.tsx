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
      tl.fromTo(".hero-line", { yPercent: 115 }, { yPercent: 0, duration: 1.0, stagger: 0.1 }, 0.05)
        .fromTo(".hero-fade", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.06 }, 0.3)
        .fromTo(
          ".hero-img-wrap",
          { clipPath: "inset(100% 0 0 0)", scale: 1.15 },
          { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.0, ease: "power4.inOut" },
          0.15
        )
        .fromTo(".hero-img-wrap img", { scale: 1.25 }, { scale: 1, duration: 1.4, ease: "power3.out" }, 0.2)
        .fromTo(".hero-meta-item", { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, 0.5);

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

    // Subtle scroll parallax without text fading
    const st = gsap.to(".hero-title-block", {
      yPercent: 10,
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

      <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 md:px-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
        {/* LEFT */}
        <div className="hero-title-block">
          <div className="hero-fade mb-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="flex items-center gap-2 rounded-full border border-[#d6ff3f]/40 bg-[#d6ff3f]/10 px-3.5 py-1.5 font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#d6ff3f] whitespace-nowrap">
              <Star size={12} className="fill-[#d6ff3f]" /> {PROFILE.availability}
            </span>
            <span className="flex items-center gap-1.5 font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#8b8b94] whitespace-nowrap">
              <MapPin size={12} /> {PROFILE.location}
            </span>
          </div>

          <h1 className="font-display font-extrabold leading-[0.92] tracking-tight overflow-hidden">
            <SplitLines text="FRONTEND" className="text-[10vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[5.4vw] xl:text-[5vw] 2xl:text-[74px] whitespace-nowrap" delay={0} />
            <SplitLines text="DEVELOPER" className="text-stroke text-[10vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[5.4vw] xl:text-[5vw] 2xl:text-[74px] whitespace-nowrap" delay={0.1} />
            <SplitLines text="& REACT.JS" className="text-[#d6ff3f] text-[10vw] sm:text-[8.5vw] md:text-[7.5vw] lg:text-[5.4vw] xl:text-[5vw] 2xl:text-[74px] whitespace-nowrap" delay={0.2} />
          </h1>

          <p className="hero-fade mt-6 max-w-xl text-sm leading-relaxed text-[#b9b9c2] sm:text-base md:text-lg">
            Hey, I'm <span className="font-semibold text-white">{PROFILE.name}</span> — {PROFILE.tagline} Shipped 12+ live client frontends with TypeScript, Redux Toolkit, and Agora RTC with verified 95+ mobile Lighthouse performance scores.
          </p>

          <div className="hero-fade mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              ref={ctaRef}
              data-magnetic
              onClick={() => scrollToSection("work")}
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#d6ff3f] px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">View selected work</span>
              <ArrowDown size={16} className="relative transition-transform duration-300 group-hover:translate-y-1" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center justify-center gap-2 rounded-full border border-[#2e2e36] px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f]"
            >
              Contact me
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* stats */}
          <div className="hero-fade mt-10 sm:mt-12 grid max-w-xl grid-cols-3 divide-x divide-[#26262d] border-y border-[#26262d]">
            {[
              { v: `${PROFILE.years}`, l: "Years experience" },
              { v: `${PROFILE.projects}`, l: "Live projects shipped" },
              { v: `${PROFILE.lighthouse}`, l: "Mobile Lighthouse" },
            ].map((s) => (
              <div key={s.l} className="px-2.5 py-4 sm:px-4 md:px-6">
                <p className="font-display text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                  {s.v}
                </p>
                <p className="mt-1 font-mono2 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#8b8b94]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="relative mx-auto flex w-full max-w-sm sm:max-w-md flex-col gap-5 lg:mx-0 lg:max-w-none">
          <div className="hero-img-wrap card-sheen relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[#26262d] lg:mt-2" data-cursor="view">
            <img src="/images/portrait.jpg" alt="Badal Kumar portrait" className="h-full w-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
              <div>
                <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#d6ff3f]">Role</p>
                <p className="font-display text-lg font-bold text-white sm:text-xl">{PROFILE.role}</p>
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
