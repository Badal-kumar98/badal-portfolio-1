import { useCallback, useEffect, useState } from "react";
import { gsap, ScrollTrigger, initSmooth } from "./lib/smooth";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./components/CaseStudy";
import type { Project } from "./data/portfolio";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    initSmooth();
    // safety: never trap user in preloader
    const t = setTimeout(() => {
      setLoading(false);
      setReady(true);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  const handleDone = useCallback(() => {
    setLoading(false);
    setTimeout(() => {
      setReady(true);
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  useEffect(() => {
    if (!ready) return;
    // Global section fade helper
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("section").forEach((sec) => {
        if (sec.id === "top") return;
      });
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      ctx.revert();
      clearTimeout(t);
    };
  }, [ready]);

  return (
    <div className="grain relative min-h-screen bg-[#0a0a0b] text-[#f2f1ea]">
      {loading && <Preloader onDone={handleDone} />}
      <Cursor />
      <ScrollProgress />
      <Nav ready={ready} />

      <main>
        <Hero ready={ready} />
        <Work onOpen={setActiveProject} />
        <About />
        <Services />
        <Stack />
        <Contact />
      </main>

      <Footer />
      <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
