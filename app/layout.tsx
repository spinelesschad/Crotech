import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "CroTech",
    template: "%s | CroTech",
  },
  description: "CroTech — High-performance web, AI, and interactive systems.",
  metadataBase: new URL("https://crotech.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://crotech.io/#organization",
        name: "CroTech",
        url: "https://crotech.io",
        logo: "https://crotech.io/og-image.png",
        description:
          "CroTech builds high-performance websites, AI-driven systems, and interactive digital products engineered for scalability, SEO, and modern deployment.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@crotech.io",
          contactType: "sales",
        },
        sameAs: ["https://crotech.io"],
      },
      {
        "@type": "WebSite",
        "@id": "https://crotech.io/#website",
        url: "https://crotech.io",
        name: "CroTech",
        inLanguage: "en",
        publisher: {
          "@id": "https://crotech.io/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://crotech.io/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-deepSpace text-white antialiased">
        {/* Global SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Global Toast Provider */}
        <Toaster richColors position="bottom-right" />

        {children}
      </body>
    </html>
  );
}
