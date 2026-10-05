import { useEffect, useRef } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { gsap, scrollToSection } from "../lib/smooth";
import { PROFILE } from "../data/portfolio";

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".foot-big",
        { yPercent: 40, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 88%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} className="relative border-t border-[#26262d] bg-[#08080a]">
      <div className="mx-auto max-w-[1500px] px-5 pb-8 pt-14 md:px-10">
        <div className="foot-big overflow-hidden">
          <p className="whitespace-nowrap text-center font-display text-[8.5vw] sm:text-[9.5vw] md:text-[10vw] font-extrabold leading-none tracking-tight text-[#1d1d23] transition-colors duration-700 hover:text-[#d6ff3f]">
            BADAL KUMAR
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-[#26262d] pt-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d6ff3f] font-display text-sm font-extrabold text-black">BK</span>
              <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94]">© 2026 All rights</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8b8b94]">
              Frontend Developer building high-performance web apps, responsive dashboards & design systems from New Delhi, India.
            </p>
          </div>
          <div>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#55555e]">Sitemap</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {["work", "about", "services", "stack", "contact"].map((l) => (
                <button key={l} onClick={() => scrollToSection(l)} className="w-fit text-sm capitalize text-[#b9b9c2] transition-colors hover:text-[#d6ff3f]">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#55555e]">Socials</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-[#b9b9c2] transition-colors hover:text-[#d6ff3f]">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-[#b9b9c2] transition-colors hover:text-[#d6ff3f]">
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} className="w-fit text-sm text-[#b9b9c2] transition-colors hover:text-[#d6ff3f]">
                Email
              </a>
              <a href="/badal_kumar_resume.html" target="_blank" rel="noopener noreferrer" className="w-fit text-sm text-[#b9b9c2] transition-colors hover:text-[#d6ff3f]">
                Resume ↗
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:items-end">
            <button
              onClick={() => scrollToSection("top")}
              className="group flex items-center gap-3 rounded-full border border-[#2e2e36] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f]"
            >
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d6ff3f] text-black transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowUp size={15} />
              </span>
            </button>
            <p className="flex items-center gap-1.5 font-mono2 text-[11px] text-[#55555e]">
              Built with React + GSAP · Made with <Heart size={12} className="fill-[#d6ff3f] text-[#d6ff3f]" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
