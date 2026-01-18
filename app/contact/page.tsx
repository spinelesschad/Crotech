import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { contactFaq } from "../../data/contactFaq";

export const metadata: Metadata = {
  title: "Contact CroTech — Let’s Build Something Exceptional",
  description:
    "Get in touch with CroTech to discuss high-performance websites, AI automation workflows, and interactive systems built for scale.",
  alternates: {
    canonical: "https://crotech.io/contact",
  },
  openGraph: {
    title: "Contact CroTech",
    description:
      "Start a conversation with CroTech about web platforms, AI automation workflows, and interactive development.",
    url: "https://crotech.io/contact",
    siteName: "CroTech",
    type: "website",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact CroTech",
    description:
      "Contact CroTech to discuss websites, AI automation workflows, and interactive digital systems.",
    url: "https://crotech.io/contact",
    mainEntity: {
      "@type": "Organization",
      name: "CroTech",
      url: "https://crotech.io",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales & General Inquiries",
        email: "info@crotech.io",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        url: "https://crotech.io/contact",
      },
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
        name: "Contact",
        item: "https://crotech.io/contact",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://crotech.io/contact#faq",
    mainEntity: contactFaq.map((item) => ({
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
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd),
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

      <ContactClient />
    </>
  );
}
