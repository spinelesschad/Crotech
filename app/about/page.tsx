import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { aboutFaq } from "@/data/aboutFaq";

export const metadata: Metadata = {
  title: "About CroTech — Engineering Modern Digital Systems",
  description:
    "Learn how CroTech designs and builds high-performance websites, AI automation workflows, and interactive systems engineered for scale and longevity.",
  alternates: {
    canonical: "https://crotech.io/about",
  },
  openGraph: {
    title: "About CroTech",
    description:
      "CroTech designs and builds scalable web platforms, AI automation workflows, and interactive digital systems using modern engineering practices.",
    url: "https://crotech.io/about",
    siteName: "CroTech",
    type: "website",
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About CroTech",
    description:
      "About CroTech — a technology studio specializing in high-performance websites, AI automation workflows, and interactive digital systems.",
    url: "https://crotech.io/about",
    mainEntity: {
      "@type": "Organization",
      name: "CroTech",
      url: "https://crotech.io",
      description:
        "CroTech builds high-performance websites, AI automation workflows, and interactive digital products engineered for scalability, SEO, and long-term reliability.",
      knowsAbout: [
        "High-Performance Web Development",
        "Next.js & Modern Web Frameworks",
        "Search Engine Optimization (SEO)",
        "AI Automation & Workflow Systems",
        "ComfyUI & AI Pipeline Engineering",
        "Interactive & Game Systems",
        "Mobile & Web-Based Game Development",
        "Scalable Cloud Infrastructure",
      ],
      sameAs: ["https://crotech.io"],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://crotech.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://crotech.io/about",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://crotech.io/about#faq",
    mainEntity: aboutFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <AboutClient />
    </>
  );
}
