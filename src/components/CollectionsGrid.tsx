"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const collections = [
  {
    label: "Collection",
    name: "Oasis",
    description: "Sleep essentials designed with exacting comfort and calibrated support.",
    cta: "Explore Oasis",
    href: "/collections/oasis",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6db92413-7072-4335-862a-2d1c71c650e1/noira-heroooo-resized-1772082093747.jpeg?width=8000&height=8000&resize=contain",
  },
  {
    label: "Collection",
    name: "Weave",
    description: "Bedding as second skin. Lightweight, temperature-smart textiles.",
    cta: "Explore Weave",
    href: "/collections/weave",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6db92413-7072-4335-862a-2d1c71c650e1/AurumRest-21AUG25-7337-1772082099472.jpg?width=8000&height=8000&resize=contain",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="py-24 bg-[#f9f9f7]">
      <div className="section-container">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b9790] mb-12">Collections</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((col, i) => (
            <FadeIn key={col.name} delay={i * 0.12}>
              <a href={col.href} className="group block">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b9790] mb-1">{col.label}</p>
                  <h3 className="text-2xl font-light tracking-tight text-[#1a1a1a] mb-2">{col.name}</h3>
                  <p className="text-sm text-[#6b6862] leading-relaxed mb-4 max-w-sm">{col.description}</p>
                  <span className="link-underline text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]">
                    {col.cta}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
