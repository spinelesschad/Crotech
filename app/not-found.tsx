import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | CroTech",
  description:
    "The page you’re looking for doesn’t exist or has been moved. Return to the CroTech homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-deepSpace text-white px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-white/70 mb-8 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="rounded-lg border border-white/20 px-6 py-3 text-sm hover:border-neonCyan hover:text-neonCyan transition"
      >
        Go back home
      </Link>
    </main>
  );
}
