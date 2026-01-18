"use client";

import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

const VISIBLE_COUNT = 3;
const ROTATE_INTERVAL = 6000;

export default function ProjectShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 🆕

  useEffect(() => {
    if (isPaused) return; // 🛑 pause rotation

    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setStartIndex((prev) => (prev + VISIBLE_COUNT) % projects.length);
        setFade(false);
      }, 350);
    }, ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused]); // 👈 re-run only when pause state changes

  /* 🔒 DERIVED — ALWAYS EXACTLY 3 */
  const visibleProjects = Array.from({ length: VISIBLE_COUNT }).map(
    (_, i) => projects[(startIndex + i) % projects.length]
  );

  return (
    <section className="relative w-full overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-lines opacity-[0.5]" />
        <div
          className="absolute inset-0 bg-grid-lines opacity-[0.5]"
          style={{ backgroundPosition: "14px 14px" }}
        />
        <div className="absolute inset-0 glitch-spikes opacity-80" />
        <div
          className="absolute inset-0 glitch-spikes opacity-50"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <span className="text-neonCyan text-xs tracking-widest">
            DEPLOYED SYSTEMS
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Proven Deployments
          </h2>
          <p className="text-white/70 text-sm mt-3 antialiased">
            Examples of modern web platforms we’ve delivered, optimized for
            search engines, performance metrics, and long-term growth.
          </p>
        </div>

        {/* Grid (HOVER PAUSE HERE) */}
        <div
          className="relative min-h-[340px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={`${project.id}-${startIndex}-${i}`}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
