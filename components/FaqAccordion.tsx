"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-white/10">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={index}
            className="group relative bg-deepSpace/60 transition-colors
                       hover:bg-white/[0.03]"
          >
            {/* Subtle hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0
                         group-hover:opacity-100 transition-opacity duration-300
                         bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.12),transparent_60%)]"
            />

            <button
              onClick={() => setOpenIndex(open ? null : index)}
              className="relative flex w-full items-center justify-between
                         px-6 py-5 text-left"
            >
              <span className="text-white font-medium">{item.question}</span>

              <span
                className={`ml-4 flex h-6 w-6 items-center justify-center
                            rounded-full border border-neonCyan/40
                            text-neonCyan transition-transform duration-200
                            ${open ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity]
                          duration-300 ease-out
                          ${
                            open
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-sm text-white/70 antialiased">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
