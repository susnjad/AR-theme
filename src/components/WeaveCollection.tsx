"use client";

import Image from "next/image";
import Link from "next/link";

const lines = [
  {
    name: "Lierre",
    tag: "French Linen",
    copy: "Single-origin flax from Normandy. 180GSM, garment-washed.",
    href: "/collections/weave",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_d5052fdf-c5b4-4f9f-b018-861ab55d2231.png?v=1763167315",
  },
  {
    name: "Sorelle",
    tag: "Bamboo Viscose",
    copy: "300TC bamboo sateen. Cool on contact, moisture-wicking.",
    href: "/collections/weave",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_178cebf8-4145-4b47-a957-82ce9cbd2b8e.png?v=1763167314",
  },
  {
    name: "Vera",
    tag: "TENCEL™ Lyocell",
    copy: "400TC percale from FSC-certified eucalyptus. Crisp and breathable.",
    href: "/collections/weave",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_2c073f31-20a4-4649-b8c3-53614ba4e94b.png?v=1763167314",
  },
  {
    name: "Vian",
    tag: "Mulberry Silk",
    copy: "6A-grade mulberry silk sleep mask. Total blackout, zero pressure.",
    href: "/products/vian-sleep-mask",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksleepmas_bffb0b7d-9ab4-473e-ab09-1e0ca1aeb0d3.png?v=1763167314",
  },
];

export default function WeaveCollection() {
  return (
    <section className="bg-[#f2f0eb] py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-10 border-b border-[#e0ddd6]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Collection</p>
            <h2 className="text-[44px] md:text-[56px] font-light tracking-[-0.03em] text-[#1a1a1a] leading-[1.0]">
              Weave
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-[13px] leading-[1.9] text-[#5a5651] font-light max-w-[340px] mb-4">
              Three materials. One language.<br />
              Bedding that moves with your body.
            </p>
            <Link
              href="/collections/weave"
              className="link-underline text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]"
            >
              Shop all Weave
            </Link>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {lines.map((line) => (
            <Link key={line.name} href={line.href} className="group block">
              <div className="relative overflow-hidden bg-[#e8e5de] mb-5" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={line.image}
                  alt={line.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
                <span className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.22em] bg-[#1a1a1a] text-[#f2f0eb] px-2.5 py-1">
                  {line.tag}
                </span>
              </div>
              <h3 className="text-[18px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-1.5">{line.name}</h3>
              <p className="text-[11px] leading-[1.7] text-[#7a7670]">{line.copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
