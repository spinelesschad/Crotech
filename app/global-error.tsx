"use client";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "500 — Server Error | CroTech",
  description:
    "Something went wrong on our end. Please try again or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-deepSpace text-white antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">500</h1>

          <p className="text-white/70 max-w-md mb-8">
            Something went wrong on our end. This isn’t your fault.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="rounded-lg border border-white/20 px-6 py-3 text-sm hover:border-neonCyan hover:text-neonCyan transition"
            >
              Try again
            </button>

            <Link
              href="/"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm hover:border-neonCyan hover:text-neonCyan transition"
            >
              Go home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
