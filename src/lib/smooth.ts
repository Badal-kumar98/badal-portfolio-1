import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

let lenisInstance: Lenis | null = null;

export function initSmooth() {
  if (lenisInstance) return lenisInstance;
  const lenis = new Lenis({
    duration: 1.25,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  lenisInstance = lenis;
  return lenis;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { duration: 1.6 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function stopSmooth() {
  lenisInstance?.stop();
}
export function startSmooth() {
  lenisInstance?.start();
}
