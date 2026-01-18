// data/projects.ts

export type ProjectPlatform = "web" | "mobile" | "steam" | "internal";
export type ProjectStatus = "live" | "in-development";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  /** URL slug → /projects/[slug] */
  slug: string;

  title: string;

  /** Short card description */
  description: string;

  /** Long-form page content */
  longDescription: string;

  tags: string[];
  accent?: "cyan" | "orange";
  image?: string;

  platform: ProjectPlatform;
  status: ProjectStatus;

  featured?: boolean;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "qc-pumping-website",
    title: "Websites",
    description:
      "Professional service website built for performance, SEO, and real-world business growth.",
    longDescription:
      "QC Pumping required a modern, high-performance website that clearly communicated their services while remaining fast, accessible, and easy to maintain. The site was built with SEO best practices, clean UX, and mobile-first responsiveness to support customer acquisition and long-term growth.",
    tags: ["Next.js", "SEO", "Responsive Design", "Business Website"],
    accent: "cyan",
    platform: "web",
    status: "live",
    image: "/projects/qc-pumping.png",
    featured: true,
    links: [
      {
        label: "Live Website",
        href: "https://qcpumping.com",
        external: true,
      },
    ],
  },

  {
    slug: "client-platform-redesign",
    title: "Client Platform Redesign",
    description:
      "High-performance website optimized for SEO, accessibility, and modern Core Web Vitals.",
    longDescription:
      "This project involved a complete redesign of a client-facing platform with a focus on performance, SEO, accessibility, and long-term scalability. Built using Next.js and modern frontend tooling, the system delivers fast load times, clean UX, and production-grade reliability.",
    tags: ["Next.js", "SEO", "Cloudflare"],
    accent: "cyan",
    platform: "web",
    status: "live",
    image: "/projects/client-redesign.png",
    links: [
      {
        label: "in-development",
        href: "https://example.com",
        external: true,
      },
    ],
  },

  {
    slug: "ai-automation-systems",
    title: "AI Automation Systems",
    description:
      "Custom AI-powered automation systems designed to streamline workflows and eliminate repetitive tasks.",
    longDescription:
      "This project focuses on building AI-driven automation systems that integrate with existing tools and workflows. Using modern AI models, task orchestration, and scalable infrastructure, these systems reduce manual effort, improve consistency, and unlock new operational efficiencies for businesses.",
    tags: ["AI Automation", "Workflows", "Productivity"],
    accent: "orange",
    platform: "internal",
    status: "in-development",
    image: "/projects/ai-automation.png",
  },

  {
    slug: "mobile-gaming",
    title: "Mobile Gaming",
    description:
      "Experimental mobile game development focused on performance and engaging gameplay.",
    longDescription:
      "An ongoing exploration into mobile game development, focusing on lightweight architectures, performance optimization, and engaging gameplay loops. This project experiments with procedural systems, scalable game logic, and cross-platform deployment strategies.",
    tags: ["Mobile Games", "Game Development", "Performance", "R&D"],
    accent: "cyan",
    platform: "mobile",
    status: "in-development",
    image: "/projects/mobile-gaming.png",
  },
  {
    slug: "comfyui-workflows",
    title: "ComfyUI Workflows",
    description:
      "Custom ComfyUI workflows for AI-driven image and video generation.",
    longDescription:
      "This project focuses on designing and optimizing ComfyUI workflows for high-quality AI image and video generation. Emphasis is placed on modular node design, reproducibility, performance tuning, and scalable creative pipelines for experimentation and production use.",
    tags: ["ComfyUI", "AI Workflows", "Image Generation", "Video Generation"],
    accent: "orange",
    platform: "internal",
    status: "in-development",
    image: "/projects/comfyui-workflows.png",
  },
  // ================= ADD MORE ABOVE THIS LINE =================
  // ================= DO NOT ADD BELOW THIS LINE =================
];

// platform: "mobile",
// links: [{ label: "App Store", href: "…" }]
// platform: "steam",
// links: [{ label: "View on Steam", href: "…" }]
