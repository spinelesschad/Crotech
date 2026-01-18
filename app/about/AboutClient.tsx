"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { aboutFaq } from "@/data/aboutFaq";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* ===============================
          ABOUT — CROTECH
      =============================== */}
      <section className="relative w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid — reduced presence */}
          <div className="absolute inset-0 bg-grid-lines opacity-[0.9]" />

          {/* Diagonal energy sweep */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg, transparent 15%, rgba(0,245,255,0.12) 35%, transparent 55%)]" />

          {/* Offset ambient fields */}
          <div className="absolute top-[-20%] left-[-15%] h-[60%] w-[60%] bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.22),transparent_65%)]" />
          <div className="absolute bottom-[-25%] right-[-20%] h-[70%] w-[70%] bg-[radial-gradient(circle_at_center,rgba(243,112,9,0.18),transparent_65%)]" />

          {/* Edge vignette for focus */}
          <div className="absolute inset-0 bg-deepSpace/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <span className="text-neonCyan text-xs tracking-widest">
              ABOUT CROTECH
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Engineering Modern Digital Systems
            </h1>
            <p className="text-white/75 text-sm mt-4 antialiased">
              CroTech designs and builds high-performance digital products —
              from scalable websites and interactive games to{" "}
              <Link href="/products" className="underline hover:text-neonCyan">
                AI-driven systems and emerging technologies
              </Link>
              . If you’re exploring what we’re currently building, our{" "}
              <Link href="/products" className="underline hover:text-neonCyan">
                products page
              </Link>{" "}
              highlights systems in active development.
            </p>
          </div>

          {/* HOW WE BUILD */}
          <div className="mb-24">
            <h2 className="text-xl font-semibold text-white mb-6">
              How We Build
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

                <div className="text-neonCyan text-xs tracking-widest mb-2">
                  DISCOVER
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Strategy & Planning
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  We start by understanding your goals, users, and constraints —
                  defining a clear technical and design roadmap before writing a
                  single line of code.
                </p>
              </div>

              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(243,112,9,0.22),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F37009] to-transparent" />

                <div className="text-neonCyan text-xs tracking-widest mb-2">
                  BUILD
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Engineering & Design
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  Using modern frameworks and best practices, we build fast,
                  secure, and scalable systems with a strong focus on UX and
                  performance.
                </p>
              </div>

              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

                <div className="text-neonCyan text-xs tracking-widest mb-2">
                  DEPLOY
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Launch & Optimize
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  We deploy with production-grade infrastructure, monitor
                  performance, and continuously optimize for reliability, SEO,
                  and long-term growth.
                </p>
              </div>
            </div>
          </div>

          {/* WHAT WE BUILD */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6">
              What We Build
            </h2>

            <p className="text-white/70 text-sm mb-6 max-w-xl antialiased">
              These categories represent both client work and internal systems.
              You can explore active initiatives on our{" "}
              <Link href="/products" className="underline hover:text-neonCyan">
                products page
              </Link>
              .
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

                <h3 className="text-white font-semibold mb-2">
                  Websites & Web Platforms
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  High-performance websites and applications built with modern
                  frameworks, optimized for SEO, accessibility, security, and
                  scalability from day one.
                </p>
              </div>

              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(243,112,9,0.22),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F37009] to-transparent" />

                <h3 className="text-white font-semibold mb-2">
                  Games & Interactive Experiences
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  Interactive systems and games built with performance,
                  networking, and real-time interaction in mind.
                </p>
              </div>

              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent" />

                <h3 className="text-white font-semibold mb-2">
                  AI & Intelligent Systems
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  Practical AI solutions including automation, intelligent
                  workflows, data processing, and custom AI-powered tools.
                </p>
              </div>

              {/* CARD */}
              <div className="group relative p-6 rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(243,112,9,0.22),transparent_60%)]" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F37009] to-transparent" />

                <h3 className="text-white font-semibold mb-2">
                  Emerging Technologies
                </h3>
                <p className="text-white/70 text-sm antialiased">
                  Experimental and forward-looking systems — including hardware
                  integrations and infrastructure tools — built responsibly and
                  with long-term stability in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — CONTACT */}
      <section className="relative mt-14 px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-deepSpace/60 backdrop-blur p-10 text-center overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.18),transparent_65%)]" />

          <h2 className="relative text-2xl font-semibold text-white mb-4">
            Let’s Build Something Solid
          </h2>

          <p className="relative text-white/70 antialiased max-w-xl mx-auto mb-6">
            Have a project in mind or questions about how CroTech works? We’re
            always open to discussing new systems, ideas, and collaborations.
          </p>

          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center rounded-full border border-neonCyan/60 px-6 py-3 text-sm font-medium text-neonCyan transition-colors hover:bg-neonCyan hover:text-deepSpace"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      <section className="relative mt-32 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-10">
            About CroTech
          </h2>

          <div className="rounded-2xl border border-white/10 bg-deepSpace/60 backdrop-blur">
            <FaqAccordion items={aboutFaq} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
