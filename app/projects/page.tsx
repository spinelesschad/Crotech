import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — CroTech",
  description:
    "Explore live and in-progress projects from CroTech, including high-performance websites, AI automation workflows, and interactive systems.",
  alternates: {
    canonical: "https://crotech.io/projects",
  },
  openGraph: {
    title: "CroTech Projects",
    description:
      "A selection of live and in-development websites, AI automation systems, and interactive projects built by CroTech.",
    url: "https://crotech.io/projects",
    siteName: "CroTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CroTech Projects",
    description:
      "Live and in-progress websites, AI workflows, and interactive systems built by CroTech.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-32">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-white/70 max-w-2xl">
          A selection of live deployments and active builds spanning web
          platforms, AI automation workflows, and interactive systems.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-2xl border border-white/10 p-6 bg-deepSpace/60
                       hover:border-neonCyan transition-colors"
          >
            <h2 className="text-xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mt-2 text-white/70 text-sm">{project.description}</p>

            <span className="inline-block mt-4 text-neonCyan text-xs tracking-widest">
              VIEW PROJECT →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
