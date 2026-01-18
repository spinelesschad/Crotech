import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — CroTech Project`,
    description: project.description,
    alternates: {
      canonical: `https://crotech.io/projects/${project.slug}`,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://crotech.io/projects/${project.slug}#software`,
    name: project.title,
    description: project.longDescription,
    url: `https://crotech.io/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    keywords: project.tags.join(", "),
    creator: {
      "@type": "Organization",
      name: "CroTech",
      url: "https://crotech.io",
    },
    publisher: {
      "@type": "Organization",
      name: "CroTech",
      url: "https://crotech.io",
    },
    ...(project.image && {
      image: `https://crotech.io${project.image}`,
    }),
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-32">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-4xl font-bold text-white">{project.title}</h1>

      <p className="mt-4 text-white/70">{project.longDescription}</p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white mb-2">Technologies</h2>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {project.links?.length ? (
        <div className="mt-8 flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-neonCyan underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </main>
  );
}
