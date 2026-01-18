"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectShowcase from "../components/ProjectShowcase";
import SecretRunnerGame from "../components/SecretRunnerGame";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "CroTech delivered a fast, SEO-optimized platform that immediately improved performance and search visibility.",
    author: "Verified Client Deployment",
  },
  {
    quote:
      "Their attention to performance and scalability gave us confidence to grow without technical debt.",
    author: "Enterprise Platform Client",
  },
  {
    quote:
      "From concept to launch, CroTech translated complex requirements into a clean, modern system.",
    author: "Product Engineering Lead",
  },
  {
    quote:
      "The team combined design, SEO, and infrastructure seamlessly — execution was flawless.",
    author: "Digital Operations Manager",
  },
];

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

const SCRAMBLE_CHARS = "▓▒░<>/\\+=";

function partiallyScramble(text: string, intensity = 0.3) {
  return text
    .split("")
    .map((char) => {
      if (char === " ") return " ";

      if (Math.random() < intensity) {
        const scramble =
          SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        const color = Math.random() < 0.5 ? "text-neonCyan" : "text-[#F37009]";

        return `<span class="${color}">${scramble}</span>`;
      }

      return char;
    })
    .join("");
}

export function RotatingTestimonial() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(testimonials[0].quote);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    let glitchInterval: NodeJS.Timeout;
    let resolveTimeout: NodeJS.Timeout;

    const cycle = () => {
      const nextIndex = (index + 1) % testimonials.length;
      const nextQuote = testimonials[nextIndex].quote;

      setGlitch(true);

      glitchInterval = setInterval(() => {
        setDisplay(partiallyScramble(nextQuote, 0.28));
      }, 70);

      resolveTimeout = setTimeout(() => {
        clearInterval(glitchInterval);
        setDisplay(nextQuote);
        setIndex(nextIndex);
        setGlitch(false);
      }, 520);
    };

    const interval = setInterval(cycle, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
      clearTimeout(resolveTimeout);
    };
  }, [index]);

  const t = testimonials[index];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center overflow-hidden">
      {/* noise */}
      <div className="absolute inset-0 noise opacity-[0.12] pointer-events-none" />

      <div
        className={`relative z-10 flex flex-col items-center gap-4 ${
          glitch ? "glitch-soft" : ""
        }`}
      >
        <div className="font-bold text-sm md:text-base text-neonCyan">
          DEPLOYMENT FEEDBACK
        </div>

        <p
          className="max-w-3xl text-white/85 text-lg italic antialiased"
          dangerouslySetInnerHTML={{ __html: `“${display}”` }}
        />

        <p className="text-white/45 text-xs tracking-wide font-mono">
          — {t.author}
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [sequence, setSequence] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      setSequence((prev) => {
        const next = [...prev, e.key].slice(-KONAMI_CODE.length);

        if (next.join(",") === KONAMI_CODE.join(",") && !showEasterEgg) {
          setShowEasterEgg(true);
          setShowGame(true);
        }

        return next;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showEasterEgg]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      {/* ===============================
          WHY CROTECH — FULL BLEED ENERGY
      =============================== */}
      <section className="relative w-full overflow-hidden">
        {/* scanline interference */}
        <div className="absolute inset-0 scanlines pointer-events-none" />

        {/* volumetric fog */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="fog-layer" />
        </div>

        {/* Field Reports — HEIGHT LOCKED */}
        <div className="mt-14 flex justify-center text-center">
          <div className="relative w-full max-w-4xl min-h-[140px]">
            <RotatingTestimonial />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          {/* Header */}
          <div className="mb-12">
            <span className="relative text-neonCyan text-xs tracking-widest">
              SYSTEM OVERVIEW
              <span className="absolute inset-0 blur-md bg-neonCyan opacity-30 animate-pulse" />
            </span>

            <h2 className="text-2xl font-bold text-white antialiased mt-2">
              Why CroTech
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD */}
            <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

              <h3 className="font-semibold mb-2 text-white">
                Rapid Development & Deployment
              </h3>
              <p className="text-white/80 text-sm antialiased">
                We design, build, and deploy high-quality websites
                efficiently—without compromising performance, scalability, or
                reliability.
              </p>
            </div>

            {/* CARD */}
            <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(243,112,9,0.22),transparent_60%)]" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F37009] to-transparent" />

              <h3 className="font-semibold mb-2 text-white">
                SEO-Driven Architecture
              </h3>
              <p className="text-white/80 text-sm antialiased">
                Our sites are engineered with search visibility in mind,
                leveraging modern SEO best practices to maximize discoverability
                and long-term growth.
              </p>
            </div>

            {/* CARD */}
            <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

              <h3 className="font-semibold mb-2 text-white">
                Tailored Solutions
              </h3>
              <p className="text-white/80 text-sm antialiased">
                From concept to launch, we collaborate closely with you to
                deliver solutions precisely aligned with your goals and
                technical requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ===============================
               PROJECT SHOWCASE
          =============================== */}
      <section className="relative w-full overflow-hidden border-t border-white/5">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary grid */}
          <div className="absolute inset-0 bg-grid-lines opacity-[0.5]" />

          {/* Offset grid for depth */}
          <div
            className="absolute inset-0 bg-grid-lines opacity-[0.5]"
            style={{ backgroundPosition: "14px 14px" }}
          />

          {/* Glitch spikes */}
          <div className="absolute inset-0 glitch-spikes opacity-80" />
          <div
            className="absolute inset-0 glitch-spikes opacity-50"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>

        <div>
          {/* Rotating Project Grid */}
          <ProjectShowcase />
        </div>
      </section>
      {/* Mascot Dock */}
      <div
        data-reveal
        className="mt-16 flex flex-col items-center justify-center translate-y-6 opacity-0 transition-all duration-700 delay-300"
      >
        <div className="text-neonCyan text-xs tracking-widest mb-2">
          ASSISTANT ONLINE
        </div>

        <Image
          src="/TzumiTPBkg.png"
          alt="Tzumi — CroTech AI assistant mascot"
          width={144}
          height={96}
          className="object-contain opacity-90"
        />
      </div>
      {showEasterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEasterEgg(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-[90%] max-w-md rounded-2xl border border-neonCyan/40 bg-deepSpace/90 p-8 text-center shadow-xl">
            {/* Accent glow */}
            <div className="absolute inset-0 rounded-2xl bg-neonCyan/10 blur-xl opacity-40 pointer-events-none" />

            <img
              src="/TzumiTPBkg.png"
              alt="CroTech Mascot"
              className="mx-auto w-40 h-auto mb-6 object-contain"
            />

            <h2 className="text-2xl font-bold text-white mb-2">
              Congratulations
            </h2>

            <p className="text-white/70 text-sm antialiased">
              You’ve unlocked a hidden system.
            </p>

            <button
              onClick={() => setShowEasterEgg(false)}
              className="mt-6 px-5 py-2 rounded-full border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/10 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showGame && <SecretRunnerGame onClose={() => setShowGame(false)} />}

      <Footer />
    </main>
  );
}
