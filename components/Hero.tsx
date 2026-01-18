"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
const MotionDiv = motion.div as React.FC<MotionDivProps>;

/* =======================
   CLIENT-ONLY MOUNT GUARD
======================= */
export function useClientOnly() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/* =======================
   DATA GLYPH PARTICLE FIELD
======================= */
function ParticleField() {
  const mounted = useClientOnly();
  if (!mounted) return null;

  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@$?&*!";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(32)].map((_, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        return (
          <MotionDiv
            key={i}
            className="absolute text-[15px] text-neonCyan/60 font-mono select-none"
            initial={{ x: Math.random() * 100 + "vw", y: -30, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.9, 0.9, 0] }}
            transition={{
              duration: 18 + Math.random() * 14,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            {char}
          </MotionDiv>
        );
      })}
    </div>
  );
}

/* =======================
   CLICK RIPPLE
======================= */
function createRipple(e: React.MouseEvent<HTMLAnchorElement>) {
  const button = e.currentTarget;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  ripple.className =
    "absolute rounded-full bg-white/40 animate-ripple pointer-events-none";

  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* =======================
   HERO
======================= */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#071129] via-[#071129] to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neonCyan/20 via-transparent to-transparent" />
      </div>

      <ParticleField />

      {/* Vertical beam */}
      <MotionDiv
        className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-neonCyan/60 to-transparent"
        animate={{ opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scan sweeps */}
      <MotionDiv
        className="absolute top-1/3 left-[-30%] w-[160%] h-[2px] bg-gradient-to-r from-transparent via-neonCyan to-transparent opacity-20"
        animate={{ x: ["-20%", "20%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <MotionDiv
        className="absolute top-2/3 left-[-30%] w-[160%] h-[2px] bg-gradient-to-r from-transparent via-[#F37009] to-transparent opacity-15"
        animate={{ x: ["20%", "-20%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <MotionDiv
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-32 mt-6 rounded-3xl bg-gradient-to-r from-neonCyan/70 to-white/90 shadow-[0_0_40px_rgba(0,245,255,0.3)] flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="CroTech logo — high-performance web, AI, and interactive systems"
                width={256}
                height={128}
                priority
                className="object-contain"
              />
            </div>

            {/* MAIN COPY */}
            <p className="mt-6 text-white antialiased max-w-xl">
              Our team delivers end-to-end technology solutions — building
              high-performance websites with strong SEO foundations, intelligent
              AI workflows, interactive game experiences, and practical hardware
              integrations designed for real-world use.
            </p>

            {/* CAPABILITY STRIP */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
              {[
                "WEBSITES WITH SEO",
                "AI WORKFLOWS",
                "GAME SYSTEMS",
                "SMART HARDWARE",
              ].map((label) => (
                <div
                  key={label}
                  className="text-xs text-neonCyan/90 tracking-widest border border-neonCyan/30 rounded-md px-3 py-2 text-center bg-deepSpace/40 hover:border-neonCyan hover:shadow-[0_0_12px_rgba(0,245,255,0.35)] transition-all"
                >
                  {label}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 text-white">
              <Link
                href="/contact"
                onClick={createRipple}
                className="glow-btn glow-btn-cyan relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-neonCyan/70 to-crotechCharcoal/90 shadow-[0_0_18px_rgba(0,245,255,0.35)] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                Get Started
              </Link>

              <Link
                href="/about"
                onClick={createRipple}
                className="glow-btn glow-btn-orange relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-[#F37009]/80 to-crotechCharcoal/90 shadow-[0_0_18px_rgba(243,112,9,0.35)] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                Docs
              </Link>
            </div>
          </MotionDiv>

          {/* RIGHT — SYSTEM CORE */}
          <MotionDiv
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 w-56 h-56 rounded-2xl bg-grid-lines border border-crotechCharcoal/70 shadow-[0_0_30px_#F37009,0_0_60px_rgba(0,245,255,0.2)] flex flex-col items-center justify-center overflow-hidden">
              <div className="text-neonCyan text-xs tracking-widest mb-2">
                SYSTEM ONLINE
              </div>

              <div className="absolute inset-4 rounded-full border border-neonCyan/30">
                <div className="absolute inset-0 rounded-full border border-dashed border-neonCyan/40 animate-spin-slow" />
              </div>

              <div className="relative w-full overflow-hidden">
                <div className="binary-wrapper">
                  <div className="binary-scroll font-mono text-[10px] tracking-widest">
                    010101010111000000100000010101010111000000100000010001000110111101110
                    &nbsp;&nbsp;
                    010101010111000000100000010101010111000000100000010001000110111101110
                  </div>
                  <div className="binary-corrupt font-mono text-[10px] tracking-widest">
                    010101010111000000100000010101010111000000100000010001000110111101110
                    &nbsp;&nbsp;
                    010101010111000000100000010101010111000000100000010001000110111101110
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deepSpace via-transparent to-deepSpace" />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
