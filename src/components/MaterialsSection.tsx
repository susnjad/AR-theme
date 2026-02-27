"use client";

export default function MaterialsSection() {
  const materials = [
  {
    name: "French Flax Linen",
    origin: "Normandy, France",
    description:
    "Stone-washed for a lived-in softness from night one. Breathable, durable, and only gets better with age.",
    properties: ["Temperature regulating", "Gets softer with every wash", "Naturally textured"],
    product: "Lierre Collection",
    slug: "/products/lierre-duvet-cover"
  },
  {
    name: "TENCEL™ Lyocell",
    origin: "FSC-certified forests",
    description:
    "Ultra-smooth at 400TC with a silky drape. Sustainably produced in a closed-loop process that recycles water and solvents.",
    properties: ["300 thread count", "Moisture-wicking", "Closed-loop production"],
    product: "Vera Collection",
    slug: "/products/vera-duvet-cover"
  },
  {
    name: "Bamboo Viscose",
    origin: "Sustainably farmed bamboo",
    description:
    "Cool-to-touch with a natural sheen. 300TC sateen weave that regulates body temperature through the night.",
    properties: ["300 thread count", "Cool-to-touch", "Natural sheen"],
    product: "Sorelle Collection",
    slug: "/products/sorelle-duvet-cover"
  }];


  return (
    <section className="bg-[#f9f9f7] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8a7d6b] mb-3">What we're made of</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] leading-snug">
            Every fabric, chosen with intention
          </h2>
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {materials.map((m) =>
          <a
            key={m.name}
            href={m.slug}
            className="group block border border-[#e5e0d8] bg-white p-8 hover:border-[#1a1a1a] transition-colors duration-300">

              <p className="text-xs tracking-[0.18em] uppercase text-[#8a7d6b] mb-4">{m.origin}</p>
              <h3 className="text-xl font-light text-[#1a1a1a] mb-3">{m.name}</h3>
              <p className="text-sm text-[#5a5a5a] leading-relaxed mb-6">{m.description}</p>
              <ul className="space-y-1.5 mb-8">
                {m.properties.map((p) =>
              <li key={p} className="flex items-center gap-2 text-xs text-[#3a3a3a] !whitespace-pre-line">
                    <span className="w-1 h-1 rounded-full bg-[#8a7d6b] flex-shrink-0" />
                    {p}
                  </li>
              )}
              </ul>
              <span className="text-xs tracking-[0.15em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-0.5 group-hover:text-[#8a7d6b] group-hover:border-[#8a7d6b] transition-colors">
                {m.product}
              </span>
            </a>
          )}
        </div>

        {/* OEKO-TEX badge strip */}
        <div className="border-t border-[#e5e0d8] pt-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1a1a1a]">OEKO-TEX® Standard 100</p>
              <p className="text-xs text-[#5a5a5a] mt-0.5">Every fabric tested for harmful substances</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-[#e5e0d8] mx-4" />
          <p className="text-xs text-[#5a5a5a] leading-relaxed max-w-md">
            All Aurum Rest fabrics are OEKO-TEX® certified — independently tested and verified free from over 100 harmful chemicals. Safe for skin, safe for the planet.
          </p>
        </div>
      </div>
    </section>);

}