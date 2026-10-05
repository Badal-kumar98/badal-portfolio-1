import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Copy, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { gsap } from "../lib/smooth";
import { PROFILE } from "../data/portfolio";
import { SectionHead } from "./Work";

const inputCls =
  "w-full rounded-2xl border border-[#2e2e36] bg-[#0a0a0b] px-5 py-4 text-[15px] text-white placeholder-[#55555e] outline-none transition-all duration-300 focus:border-[#d6ff3f] focus:shadow-[0_0_0_3px_rgba(214,255,63,.12)]";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".contact-grid", start: "top 82%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const tl = gsap.timeline();
    tl.to(".form-inner", { opacity: 0, y: -14, duration: 0.4, ease: "power2.in" }).add(() => {
      setTimeout(() => setSent(true), 0);
    });
    setTimeout(() => setSent(true), 450);
  };

  return (
    <section id="contact" ref={root} className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="dot-grid pointer-events-none absolute left-0 top-24 h-[400px] w-[380px] opacity-30 [mask-image:radial-gradient(closest-side,black,transparent)]" />
      <SectionHead num="( 05 )" hint="Direct Contact" title={<>Let's build something <span className="text-[#d6ff3f]">impactful.</span></>} />

      <div className="contact-grid mx-auto grid max-w-[1500px] gap-5 px-5 md:px-10 lg:grid-cols-[1fr_1.15fr]">
        {/* left info */}
        <div className="flex flex-col gap-5">
          <div className="contact-card rounded-3xl border border-[#26262d] bg-[#131316] p-5 sm:p-7 md:p-8">
            <p className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">Direct email</p>
            <button onClick={copyEmail} className="group mt-3 flex w-full items-center justify-between gap-2.5 text-left">
              <span className="font-display text-base sm:text-xl md:text-2xl font-bold text-white transition-colors group-hover:text-[#d6ff3f] truncate">
                {PROFILE.email}
              </span>
              <span className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-full border border-[#2e2e36] text-[#8b8b94] transition-all group-hover:border-[#d6ff3f] group-hover:text-[#d6ff3f]">
                {copied ? <CheckCircle2 size={17} className="text-[#4ade80]" /> : <Copy size={16} />}
              </span>
            </button>
            <p className={`mt-1.5 font-mono2 text-[11px] sm:text-xs transition-opacity ${copied ? "text-[#4ade80] opacity-100" : "opacity-0"}`}>
              Copied to clipboard ✓
            </p>

            <div className="mt-4 border-t border-[#26262d] pt-4">
              <p className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">Phone & Location</p>
              <p className="mt-1 font-display text-base sm:text-lg font-bold text-white">{PROFILE.phone}</p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#8b8b94]">{PROFILE.location}</p>
            </div>

            <div className="mt-5 flex gap-2 sm:gap-2.5">
              {[
                { icon: Github, label: "GitHub", href: PROFILE.github },
                { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}` },
                { icon: Phone, label: "Phone", href: `tel:${PROFILE.phone}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-2xl border border-[#2e2e36] text-[#b9b9c2] transition-all duration-300 hover:-translate-y-1 hover:border-[#d6ff3f] hover:bg-[#d6ff3f] hover:text-black"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-card rounded-3xl border border-[#26262d] bg-[#131316] p-5 sm:p-7 md:p-8">
            <p className="font-mono2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#d6ff3f]">Availability</p>
            <h4 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">Full-Time Engineering Roles</h4>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#b9b9c2]">
              Looking for frontend developer roles in Delhi NCR (Noida, Gurugram, Delhi) or remote. Ready to build high-performance React applications and enterprise UI systems.
            </p>
            <div className="mt-4 sm:mt-5 flex items-center gap-2.5 font-mono2 text-[11px] sm:text-xs text-[#8b8b94]">
              <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" /> Notice Period: Available Soon / Flexible
            </div>
          </div>
        </div>

        {/* right form */}
        <div className="contact-card relative overflow-hidden rounded-3xl border border-[#26262d] bg-[#131316] p-7 md:p-10">
          {sent ? (
            <div className="grid h-full min-h-[400px] place-items-center text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#d6ff3f]/10 text-[#d6ff3f]">
                  <CheckCircle2 size={32} />
                </span>
                <h3 className="mt-5 font-display text-3xl font-extrabold text-white">Message received.</h3>
                <p className="mt-2 text-[#8b8b94]">Thanks for reaching out! I'll get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="form-inner flex flex-col gap-5">
              <div>
                <label className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">Your name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">Email address</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#8b8b94]">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about the role, team, or project..."
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className={inputCls}
                />
              </div>

              <button
                type="submit"
                className="group mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[#d6ff3f] py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
              >
                Send message <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
