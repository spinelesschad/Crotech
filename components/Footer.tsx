"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-white/70 text-center text-sm">
      <address className="not-italic">
        <p>
          Contact{" "}
          <a
            href="mailto:info@crotech.io"
            className="hover:text-neonCyan underline transition-colors"
          >
            info@crotech.io
          </a>
        </p>
      </address>

      <p className="mt-2">
        © {new Date().getFullYear()} CroTech. All rights reserved.
      </p>

      <div className="mt-3 flex justify-center gap-4 text-xs text-white/50">
        <Link href="/privacy" className="hover:text-neonCyan transition-colors">
          Privacy Policy
        </Link>

        <span aria-hidden="true">•</span>

        <Link href="/terms" className="hover:text-neonCyan transition-colors">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
