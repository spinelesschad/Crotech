"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { productsFaq } from "../../data/productsFaq";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* ===============================
          PRODUCTS PLACEHOLDER
      =============================== */}
      <section className="relative flex-1 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid */}
          <div className="absolute inset-0 bg-grid-lines opacity-[0.06]" />

          {/* Vertical energy column */}
          <div className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-neonCyan/40 to-transparent" />

          {/* Horizon glow */}
          <div className="absolute bottom-[-20%] left-1/2 h-[60%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.25),transparent_65%)]" />

          {/* Secondary accent glow */}
          <div className="absolute top-[10%] right-[-20%] h-[50%] w-[50%] bg-[radial-gradient(circle_at_center,rgba(243,112,9,0.18),transparent_60%)]" />

          {/* Contrast mask */}
          <div className="absolute inset-0 bg-deepSpace/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          {/* Header */}
          <div className="mb-16 max-w-xl">
            <span className="text-neonCyan text-xs tracking-widest">
              SYSTEM CATALOG
            </span>
            <h1 className="text-4xl font-bold text-white mt-3">
              Products in Development
            </h1>
            <p className="text-white/70 mt-4 antialiased">
              We’re actively building internal tools, platforms, and modular
              systems across{" "}
              <Link href="/about" className="underline hover:text-neonCyan">
                web, games, and AI
              </Link>
              . This space will evolve as products move toward public release.
              If you’re exploring a new system,{" "}
              <Link href="/contact" className="underline hover:text-neonCyan">
                start a conversation with CroTech
              </Link>
              .
            </p>
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD — Web Platforms */}
            <div className="group relative rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 p-6 overflow-hidden">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.22),transparent_60%)]" />

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent opacity-70" />

              <h3 className="text-lg font-semibold text-white">
                Web Platforms
              </h3>

              <p className="mt-2 text-sm text-white/70 antialiased">
                Performance-focused websites, dashboards, and client-facing
                systems designed for scale and clarity.
              </p>

              <span className="inline-block mt-4 text-xs text-neonCyan tracking-widest">
                COMING SOON
              </span>
            </div>

            {/* CARD — Interactive & Game Systems */}
            <div className="group relative rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 p-6 overflow-hidden">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(243,112,9,0.22),transparent_60%)]" />

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F37009] to-transparent opacity-70" />

              <h3 className="text-lg font-semibold text-white">
                Interactive & Game Systems
              </h3>

              <p className="mt-2 text-sm text-white/70 antialiased">
                Gameplay systems, simulations, and interactive experiences built
                with modern engines and real-time technologies.
              </p>

              <span className="inline-block mt-4 text-xs text-[#F37009] tracking-widest">
                IN PROGRESS
              </span>
            </div>

            {/* CARD — AI & Automation Tools */}
            <div className="group relative rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 p-6 overflow-hidden">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.22),transparent_60%)]" />

              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neonCyan to-transparent opacity-70" />

              <h3 className="text-lg font-semibold text-white">
                AI & Automation Tools
              </h3>

              <p className="mt-2 text-sm text-white/70 antialiased">
                Intelligent workflows, data-driven systems, and automation tools
                designed to reduce friction and amplify capability.
              </p>

              <span className="inline-block mt-4 text-xs text-neonCyan tracking-widest">
                UNDER DEVELOPMENT
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-14 px-6 overflow-hidden">
        {/* Ambient section halo */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.35),transparent_65%)] animate-[pulse_8s_ease-in-out_infinite]" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">
            How CroTech Builds Products
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-neonCyan to-transparent" />

          <div className="space-y-6 text-white/70 antialiased">
            <p className="relative pl-10">
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-neonCyan/40 text-xs text-neonCyan">
                1
              </span>
              Every CroTech product is designed with performance, scalability,
              and long-term maintainability in mind. From web platforms to
              interactive systems, we focus on clean architecture, modern
              tooling, and production-grade infrastructure.
            </p>

            <p className="relative pl-10">
              <span className="absolute left-0 top-1 flex h-6 w-6  items-center justify-center rounded-full border border-neonCyan/40 text-xs text-neonCyan">
                2
              </span>
              Our development process emphasizes SEO, accessibility, and
              real-world usability — ensuring systems grow alongside their users
              and business needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm tracking-widest m-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-white transition hover:border-neonCyan hover:text-neonCyan hover:shadow-[0_0_20px_rgba(0,245,255,0.25)] hover:-translate-y-0.5"
            >
              OUR ENGINEERING APPROACH
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-neonCyan text-black font-semibold transition hover:bg-neonCyan/90 hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:-translate-y-0.5"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mt-32 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-10">
            Product Questions
          </h2>

          <div className="rounded-2xl border border-white/10 bg-deepSpace/60 backdrop-blur">
            <FaqAccordion items={productsFaq} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
