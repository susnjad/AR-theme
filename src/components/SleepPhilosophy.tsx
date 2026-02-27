"use client";

const pillars = [
  {
    number: "01",
    title: "No Compromise Materials",
    body: "Every fill, fabric, and foam is selected against a strict exclusion list — no off-gassing, no synthetic shortcuts, no filler blends.",
  },
  {
    number: "02",
    title: "Sleep Science First",
    body: "Each product is built around thermoregulation, pressure distribution, and spinal alignment research — not trend cycles.",
  },
  {
    number: "03",
    title: "Independently Certified",
    body: "OEKO-TEX®, CertiPUR-US®, and GOTS certifications are non-negotiable across the Aurum Rest range.",
  },
  {
    number: "04",
    title: "Designed to Last",
    body: "We over-engineer durability so you replace less. Every Aurum Rest product is backed by at least a 5-year warranty.",
  },
];

export default function SleepPhilosophy() {
  return (
    <section className="py-24 bg-[#f2f0eb]">
      <div className="section-container">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b9790] mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a1a] max-w-sm leading-snug">
              Sleep is not a luxury.<br />It is a standard.
            </h2>
          </div>
          <p className="text-sm text-[#6b6862] leading-relaxed max-w-xs md:text-right">
            Four principles that govern every decision we make — from sourcing to stitching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d0cdc7]">
          {pillars.map((p) => (
            <div key={p.number} className="bg-[#f2f0eb] p-8 flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b9790]">
                {p.number}
              </span>
              <div>
                <h3 className="text-base font-normal tracking-tight text-[#1a1a1a] mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[#6b6862] leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
