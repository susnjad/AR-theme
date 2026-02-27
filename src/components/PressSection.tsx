"use client";

import FadeIn from "./FadeIn";

const outlets = [
  {
    name: "Vogue Living",
    quote: "A disruptive force in the Australian sleep industry, combining innovation with luxury.",
  },
  {
    name: "Sunday Life",
    quote: "A masterclass in minimalist design and premium craftsmanship.",
  },
  {
    name: "Broadsheet",
    quote: "Revolutionising sleep wellness with science-backed innovation.",
  },
];

const items = [...outlets, ...outlets, ...outlets];

export default function PressSection() {
  return (
    <section className="py-20 bg-[#f9f9f7] overflow-hidden">
      <FadeIn>
        <p className="text-[9px] uppercase tracking-[0.25em] text-[#9b9790] text-center mb-10">
          As Seen In
        </p>
      </FadeIn>
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f9f9f7, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f9f9f7, transparent)" }}
        />
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: "32s" }}>
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex flex-col items-start justify-center"
                style={{ minWidth: "260px", maxWidth: "280px" }}
              >
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b9790] mb-3">{item.name}</p>
                <p className="text-[13px] italic text-[#6b6862] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
