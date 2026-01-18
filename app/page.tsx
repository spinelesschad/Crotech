import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://crotech.io"),

  title: "CroTech — High-Performance Web, AI & Game Systems",

  description:
    "CroTech builds SEO-optimized websites, AI automation workflows, and interactive game systems engineered for speed, scalability, and modern deployment.",

  keywords: [
    "CroTech",
    "SEO optimized websites",
    "Next.js development",
    "AI automation",
    "ComfyUI workflows",
    "game systems",
    "mobile gaming",
    "high performance web",
  ],

  openGraph: {
    title: "CroTech — High-Performance Web, AI & Game Systems",
    description:
      "High-performance websites, AI automation workflows, and interactive systems built for speed, SEO, and scalability.",
    url: "https://crotech.io",
    siteName: "CroTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CroTech — High-Performance Web, AI & Game Systems",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CroTech — High-Performance Web, AI & Game Systems",
    description:
      "SEO-optimized websites, AI automation workflows, and interactive digital systems.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}
