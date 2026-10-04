import { useEffect, useRef } from "react";
import { Download, GraduationCap, Quote } from "lucide-react";
import { gsap } from "../lib/smooth";
import { EXPERIENCE, PROFILE, STACK, TESTIMONIALS } from "../data/portfolio";
import { SectionHead } from "./Work";
import { useMagnetic } from "./Nav";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // skill bars
      gsap.utils.toArray<HTMLElement>(".skill-fill").forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: Number(bar.dataset.level) / 100,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: { trigger: bar, start: "top 88%" },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".skill-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { x: i % 2 ? 40 : -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 90%" },
          }
        );
      });
      // timeline items
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 88%" },
          }
        );
      });
      // big statement scrub
      gsap.fromTo(
        ".about-statement",
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ".about-statement", start: "top 85%", end: "top 35%", scrub: 1 },
        }
      );
      // counter
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        ScrollTriggerSafe(el, obj, target);
      });
      function ScrollTriggerSafe(el: HTMLElement, obj: { v: number }, target: number) {
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  const dlRef = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section id="about" ref={root} className="relative bg-[#131316] py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-8 select-none overflow-hidden">
        <p className="whitespace-nowrap text-center font-display text-[16vw] font-extrabold leading-none text-stroke-faint opacity-40">ABOUT — ABOUT —</p>
      </div>

      <SectionHead num="( 02 )" hint="Behind the code" title={<>Engineering mindset<span className="text-[#d6ff3f]">,</span> production impact<span className="text-[#d6ff3f]">.</span></>} />

      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="about-statement font-display text-2xl font-bold leading-snug md:text-[2rem]">
            I build frontend applications that solve real business problems — blending{" "}
            <span className="text-[#d6ff3f]">React architecture</span> with{" "}
            <span className="text-stroke">TypeScript type safety</span> to create fast, resilient user workflows.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-[#b9b9c2]">
            Based in Delhi NCR, I work as a Frontend Developer at Koncept Software Solutions. Over the past 1.6+ years, I have architected and shipped frontends across 12+ production client web apps and SaaS platforms in FinTech, LegalTech, E-Commerce, and Industrial Operations — taking Figma designs into pixel-perfect, accessible component systems.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { v: 12, l: "Projects shipped", s: "+" },
              { v: 10, l: "Client portals", s: "+" },
              { v: 95, l: "Mobile Lighthouse", s: "+" },
            ].map((c) => (
              <div key={c.l} className="rounded-2xl border border-[#2e2e36] bg-[#0a0a0b] p-5 text-center">
                <p className="font-display text-3xl font-extrabold text-[#d6ff3f] md:text-4xl">
                  <span data-count={c.v}>0</span>{c.s}
                </p>
                <p className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#8b8b94]">{c.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              ref={dlRef}
              data-magnetic
              href="/badal_kumar_resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#d6ff3f] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
            >
              <Download size={15} /> View / Download Résumé
            </a>
            <span className="flex items-center gap-2 rounded-full border border-[#2e2e36] px-6 py-3 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">
              <GraduationCap size={15} /> BCA · IGNOU (Pursuing)
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="studio-img card-sheen relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#26262d]">
            <img src="/images/portrait.jpg" alt="Badal Kumar" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
              Delhi NCR, India
            </div>
          </div>

          <div className="rounded-3xl border border-[#26262d] bg-[#0a0a0b] p-6 md:p-7">
            <p className="mb-5 font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#d6ff3f]">{"// Core Stack & Mastery"}</p>
            <div className="flex flex-col gap-4">
              {STACK.slice(0, 6).map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-white">{s.name}</span>
                    <span className="font-mono2 text-xs text-[#8b8b94]">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#26262d]">
                    <div data-level={s.level} className="skill-fill h-full w-full origin-left rounded-full bg-gradient-to-r from-[#8b7bff] to-[#d6ff3f]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* experience timeline */}
      <div className="mx-auto mt-16 grid max-w-[1500px] gap-10 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h3 className="font-display text-3xl font-extrabold md:text-4xl">Experience & Background</h3>
          <p className="mt-3 max-w-sm text-[#8b8b94]">Track record of shipping production-tested interfaces across diverse industry sectors.</p>
        </div>
        <div className="relative border-l border-[#2e2e36] pl-8">
          {EXPERIENCE.map((e, i) => (
            <div key={e.role} className="tl-item relative pb-10 last:pb-0">
              <span
                className="absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full border font-mono2 text-[9px]"
                style={{
                  borderColor: i === 0 ? "#d6ff3f" : "#2e2e36",
                  background: i === 0 ? "#d6ff3f" : "#0a0a0b",
                  color: i === 0 ? "#000" : "#8b8b94",
                }}
              >
                {i + 1}
              </span>
              <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#d6ff3f]">{e.period}</p>
              <h4 className="mt-1 font-display text-xl font-bold md:text-2xl">{e.role}</h4>
              <p className="font-mono2 text-xs uppercase tracking-[0.15em] text-[#8b8b94]">{e.org}</p>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[#b9b9c2]">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* testimonials */}
      <div className="mx-auto mt-16 max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`tl-item rounded-3xl border p-7 ${
                i === 0 ? "border-[#d6ff3f]/40 bg-[#d6ff3f]/5" : "border-[#26262d] bg-[#0a0a0b]"
              }`}
            >
              <Quote size={22} className={i === 0 ? "text-[#d6ff3f]" : "text-[#8b8b94]"} />
              <blockquote className="mt-4 leading-relaxed text-[#e6e5de]">“{t.quote}”</blockquote>
              <figcaption className="mt-5 border-t border-[#26262d] pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#8b8b94]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
