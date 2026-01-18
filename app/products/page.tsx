import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { productsFaq } from "../../data/productsFaq";

export const metadata: Metadata = {
  metadataBase: new URL("https://crotech.io"),

  title: "Products — CroTech Systems in Development",
  description:
    "Explore CroTech’s products including web platforms, AI automation workflows, and interactive game systems.",

  keywords: [
    "CroTech products",
    "web platforms",
    "AI automation",
    "ComfyUI workflows",
    "game systems",
    "software development",
  ],

  alternates: {
    canonical: "https://crotech.io/products",
  },

  openGraph: {
    title: "CroTech Products — Systems in Development",
    description:
      "Web platforms, AI automation workflows, and interactive systems being built at CroTech.",
    url: "https://crotech.io/products",
    siteName: "CroTech",
    images: [
      {
        url: "/og-products.png",
        width: 1200,
        height: 630,
        alt: "CroTech Products in Development",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CroTech Products",
    description:
      "Explore web platforms, AI automation workflows, and interactive systems built at CroTech.",
    images: ["/og-products.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CroTech Products",
    description:
      "A collection of software systems, automation workflows, and interactive products developed by CroTech.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Web Platforms",
          description:
            "SEO-optimized, high-performance websites and scalable web platforms built with modern frameworks.",
          provider: {
            "@type": "Organization",
            name: "CroTech",
            url: "https://crotech.io",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "AI Automation & Workflows",
          description:
            "AI-driven automation systems and ComfyUI workflows designed to accelerate production and reduce manual effort.",
          provider: {
            "@type": "Organization",
            name: "CroTech",
            url: "https://crotech.io",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Interactive & Game Systems",
          description:
            "Interactive applications and game systems built with modern engines and real-time technologies.",
          provider: {
            "@type": "Organization",
            name: "CroTech",
            url: "https://crotech.io",
          },
        },
      },
    ],
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
        name: "Products",
        item: "https://crotech.io/products",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://crotech.io/products#faq",
    mainEntity: productsFaq.map((item) => ({
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
      {/* Products Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

      <ProductsClient />
    </>
  );
}
