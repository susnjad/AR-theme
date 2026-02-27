"use client";

import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="w-full py-28 md:py-40 bg-[#f7f4ed]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden bg-[#ede8d0] aspect-[4/5] lg:aspect-auto lg:min-h-[680px]">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Noira Hybrid Mattress"
              className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
            />
            {/* Subtle top label */}
            <div className="absolute top-8 left-8">
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#f7f4ed]/80">
                Signature Collection
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-0 lg:px-20 pt-16 lg:pt-0 bg-[#f7f4ed]">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-6">
              Featured
            </p>
            <h2 className="font-serif font-light text-[42px] md:text-[52px] leading-[1.1] text-[#414141] mb-8">
              The Noira
              <br />
              <em>Hybrid Mattress</em>
            </h2>
            <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] tracking-[0.02em] text-[#6b6b6b] max-w-sm mb-10">
              Twelve hundred individually wrapped coils beneath a surface of temperature-regulating IceSense fabric and slow-response memory foam. Engineered to hold you — not trap you.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-12">
              <span className="font-sans font-light text-[22px] tracking-[0.05em] text-[#414141]">
                £2,450
              </span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#a09285]">
                King size
              </span>
            </div>

            {/* CTA */}
            <Link
              href="/noira"
              className="group inline-flex items-center gap-4 font-sans text-[11px] tracking-[0.25em] uppercase text-[#414141]"
            >
              <span className="link-underline">Explore Noira</span>
              <span className="w-8 h-px bg-[#414141] transition-all duration-500 group-hover:w-14" />
            </Link>

            {/* Sleep trial note */}
            <p className="mt-12 font-sans text-[11px] tracking-[0.08em] text-[#a09285]">
              100-night sleep trial included. Free delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
