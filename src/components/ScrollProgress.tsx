import { useEffect, useRef } from "react";
import { gsap } from "../lib/smooth";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
      }
    );
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[120] h-[3px] bg-transparent">
      <div ref={bar} className="h-full w-full origin-left bg-gradient-to-r from-[#8b7bff] via-[#4ade80] to-[#d6ff3f]" />
    </div>
  );
}
