import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap, scrollToSection } from "../lib/smooth";
import { PROFILE } from "../data/portfolio";

const LINKS = [
  { id: "work", label: "Work", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "services", label: "Services", num: "03" },
  { id: "stack", label: "Stack", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return ref;
}

export default function Nav({ ready }: { ready: boolean }) {
  const bar = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
      );
    });
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ready]);

  useEffect(() => {
    const panel = document.getElementById("mobile-menu");
    if (!panel) return;
    if (open) {
      gsap.fromTo(panel, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" });
      gsap.fromTo(".m-link", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: "power3.out", delay: 0.25 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => scrollToSection(id), open ? 350 : 0);
  };

  return (
    <>
      <header
        ref={bar}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? "border-b border-[#26262d]/70 bg-[#0a0a0b]/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
          <button onClick={() => go("top")} className="group flex items-center gap-2" data-magnetic>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d6ff3f] font-display text-sm font-extrabold text-black transition-transform duration-500 group-hover:rotate-[20deg]">
              BK
            </span>
            <span className="hidden font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#8b8b94] sm:block">
              {PROFILE.name}
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group relative flex items-center gap-2 font-mono2 text-xs uppercase tracking-[0.2em] text-[#b9b9c2] transition-colors hover:text-white"
              >
                <span className="text-[10px] text-[#d6ff3f] transition-opacity opacity-60 group-hover:opacity-100">{l.num}</span>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#d6ff3f] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/badal_kumar_resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-[#2e2e36] px-5 py-2.5 font-mono2 text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-[#d6ff3f] hover:text-[#d6ff3f] md:inline-flex"
            >
              Resume ↗
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#2e2e36] text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[90] flex flex-col justify-between bg-[#08080a] p-8 pt-28 lg:hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <div className="flex flex-col gap-6">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="m-link flex items-center justify-between text-left font-display text-4xl font-extrabold text-white"
            >
              <span>{l.label}</span>
              <span className="font-mono2 text-sm text-[#d6ff3f]">{l.num}</span>
            </button>
          ))}
          <a
            href="/badal_kumar_resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="m-link mt-4 flex items-center justify-between text-left font-display text-2xl font-bold text-[#d6ff3f]"
          >
            <span>View Resume PDF</span>
            <span>↗</span>
          </a>
        </div>
        <div className="border-t border-[#26262d] pt-6 text-xs text-[#8b8b94]">
          <p>{PROFILE.name} — {PROFILE.role}</p>
          <p className="mt-1">{PROFILE.email}</p>
        </div>
      </div>
    </>
  );
}
