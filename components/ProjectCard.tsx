"use client";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  accent?: "cyan" | "orange";
};

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  accent = "cyan",
}: Project) {
  const accentMap = {
    cyan: {
      solid: "rgb(0,245,255)",
      glow: "rgba(0,245,255,0.22)",
    },
    orange: {
      solid: "#F37009",
      glow: "rgba(243,112,9,0.22)",
    },
  };

  const { solid, glow } = accentMap[accent];

  return (
    <a
      href={link ?? "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="group relative rounded-2xl overflow-hidden border border-crotechCharcoal/70 bg-deepSpace/70 transition-transform duration-300 hover:-translate-y-[2px]"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${glow}, transparent 60%)`,
        }}
      />

      {/* Image */}
      <div className="h-44 bg-black/40 flex items-center justify-center text-white/40 text-sm overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          "Project Preview"
        )}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-white/70 antialiased">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-white/5"
              style={{ color: solid }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] opacity-70"
        style={{
          background: `linear-gradient(to right, ${solid}, transparent)`,
        }}
      />
    </a>
  );
}
