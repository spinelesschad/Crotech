"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { contactFaq } from "@/data/contactFaq";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Message sent successfully. We’ll be in touch.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* ===============================
          CONTACT SECTION
      =============================== */}
      <section className="relative flex-1 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid-lines opacity-[0.025]" />

          <div className="absolute top-[20%] left-[10%] h-[420px] w-[420px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.28),transparent_65%)]" />
          </div>

          <div className="absolute bottom-[10%] right-[8%] h-[360px] w-[360px]">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(243,112,9,0.26),transparent_65%)]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center">
          <div className="mb-12 max-w-xl text-center">
            <span className="text-neonCyan text-xs tracking-widest">
              INITIATE CONTACT
            </span>
            <h1 className="text-4xl font-bold text-white mt-3">
              Let’s Build Something Exceptional
            </h1>
            <p className="text-white/70 mt-4 antialiased">
              Tell us about your project — whether it’s a website, game, AI
              system, or something entirely new. Explore our{" "}
              <Link href="/products" className="underline hover:text-neonCyan">
                products
              </Link>{" "}
              and we’ll help you design, build, and deploy it with clarity,
              performance, and scale in mind.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative rounded-2xl border border-crotechCharcoal/70 bg-deepSpace/60 p-8 max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <div className="hidden">
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-neonCyan"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Website, AI automation, consulting…"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-neonCyan"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-neonCyan"
                />
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell us about your goals, timeline, and needs..."
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white focus:outline-none focus:border-neonCyan resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-neonCyan text-black font-semibold hover:bg-neonCyan/90 disabled:opacity-50 transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <p className="mt-4 text-sm text-white/60 text-center">
            Prefer email?{" "}
            <a
              href="mailto:info@crotech.io"
              className="text-neonCyan hover:underline"
            >
              info@crotech.io
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative mt-32 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white text-center mb-10">
            Contact & Project Questions
          </h2>

          <div className="rounded-2xl border border-white/10 bg-deepSpace/60 backdrop-blur">
            <FaqAccordion items={contactFaq} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
