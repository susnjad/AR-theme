"use client";

import FadeIn from "./FadeIn";

const credentials = [
  { value: "Est. 2022", label: "Founded in Australia" },
  { value: "4,200+", label: "Customers" },
  { value: "100%", label: "French Linen" },
  { value: "OEKO-TEX", label: "Certified Materials" },
  { value: "Free", label: "Express Shipping" },
];

export default function CredentialsStrip() {
  return (
    <section className="border-t border-b border-[#e8e6e1] py-6 bg-[#f9f9f7]">
      <FadeIn>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-y-5 gap-x-6">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="text-center">
                  <p className="text-[13px] font-medium tracking-[-0.01em] text-[#1a1a1a]">{c.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#9b9790] mt-0.5">{c.label}</p>
                </div>
                {i < credentials.length - 1 && (
                  <span className="hidden md:block w-px h-6 bg-[#e8e6e1]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
