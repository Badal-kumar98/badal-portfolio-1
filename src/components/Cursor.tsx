import { useEffect, useRef } from "react";
import { gsap } from "../lib/smooth";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("cursor-none-fine");
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    let scale = 1;
    let labelText = "";
    const render = () => {
      gsap.to(ring, {
        scale,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto",
      });
      label.style.opacity = labelText ? "1" : "0";
      if (labelText) label.textContent = labelText;
      gsap.to(ring, {
        backgroundColor: labelText ? "#d6ff3f" : "rgba(214,255,63,0)",
        duration: 0.3,
        overwrite: "auto",
      });
      ring.style.borderColor = labelText ? "#d6ff3f" : "rgba(242,241,234,.35)";
    };

    const onMove = (e: MouseEvent) => {
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
      const t = (e.target as HTMLElement)?.closest?.(
        "[data-cursor], a, button"
      ) as HTMLElement | null;
      const mode = t?.getAttribute?.("data-cursor");
      if (mode === "view") {
        scale = 3.2;
        labelText = "VIEW";
      } else if (t && (t.tagName === "A" || t.tagName === "BUTTON" || t.hasAttribute("data-magnetic"))) {
        scale = 1.9;
        labelText = "";
      } else {
        scale = 1;
        labelText = "";
      }
      render();
    };
    const onDown = () => gsap.to([dot, ring], { scale: 0.8, duration: 0.2 });
    const onUp = () => gsap.to([dot, ring], { scale: 1, duration: 0.3 });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      document.documentElement.classList.remove("cursor-none-fine");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden [@media(pointer:fine)]:block">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border will-change-transform"
      >
        <span
          ref={labelRef}
          className="font-mono2 text-[9px] font-bold tracking-widest text-black opacity-0"
        />
      </div>
      <div ref={dotRef} className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-[#d6ff3f] will-change-transform" />
    </div>
  );
}
