"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-crotechCharcoal/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          {/* Optional logo */}
          {/* <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="CroTech"
              fill
              style={{ objectFit: "contain" }}
            />
          </div> */}

          <span className="font-bold tracking-wide text-xl text-crotechOrange">
            Cro<span className="text-crotechCharcoal">Tech</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-white antialiased">
          <Link
            href="/products"
            className="hover:text-neonCyan transition-colors"
          >
            Products
          </Link>

          <Link href="/about" className="hover:text-neonCyan transition-colors">
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-neonCyan transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
