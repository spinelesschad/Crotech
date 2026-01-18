import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — CroTech",
  description:
    "The terms and conditions governing use of the CroTech website and services.",
  alternates: {
    canonical: "https://crotech.io/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32 text-white/80">
      <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>

      <p className="mb-6">
        By accessing or using the CroTech website, you agree to the following
        terms. If you do not agree, please discontinue use of the site.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Use of the Website
      </h2>
      <p className="mb-4">
        This website is provided for informational purposes only. You agree not
        to misuse the site, attempt unauthorized access, or disrupt services.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content, branding, and materials on this site are the property of
        CroTech unless otherwise stated. Unauthorized use is prohibited.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        No Guarantees
      </h2>
      <p className="mb-4">
        Content on this site is provided “as is” without warranties of any kind.
        We do not guarantee accuracy, availability, or suitability for any
        purpose.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        CroTech shall not be liable for any damages resulting from use or
        inability to use this website.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">Changes</h2>
      <p className="mb-4">
        These terms may be updated at any time. Continued use of the site
        constitutes acceptance of the updated terms.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:info@crotech.io" className="text-neonCyan underline">
          info@crotech.io
        </a>
        .
      </p>

      <p className="mt-10 text-sm text-white/50">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
