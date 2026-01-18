import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — CroTech",
  description:
    "Learn how CroTech collects, uses, and protects your information when you visit our website or contact us.",
  alternates: {
    canonical: "https://crotech.io/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-32 text-white/80">
      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>

      <p className="mb-6">
        At <strong>CroTech</strong>, we respect your privacy and are committed
        to protecting it. This policy explains what information we collect and
        how it is used.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Information We Collect
      </h2>
      <p className="mb-4">
        We may collect basic information that you voluntarily provide, such as
        your name, email address, and message when you contact us.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        How We Use Information
      </h2>
      <p className="mb-4">
        Information you provide is used solely to respond to inquiries,
        communicate with you, and improve our services. We do not sell or rent
        personal information.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Analytics & Cookies
      </h2>
      <p className="mb-4">
        We may use privacy-focused analytics tools to understand website usage.
        These tools do not collect personally identifiable information.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Third-Party Services
      </h2>
      <p className="mb-4">
        Our website may link to third-party sites. We are not responsible for
        their privacy practices.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">Contact</h2>
      <p>
        If you have questions about this policy, contact us at{" "}
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
