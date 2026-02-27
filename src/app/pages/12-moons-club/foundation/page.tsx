"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CDN = "https://cdn.shopify.com/s/files/1/0691/8999/2682/files";

const fabrics = [
  {
    key: "linen",
    name: "French Linen",
    label: "Lierre",
    desc: "Single-origin French flax. Breathable, textured, and gets softer with every wash.",
    specs: ["180GSM", "Plain weave", "Garment-washed", "OEKO-TEX certified"],
    colours: [
      { name: "Dusk", hex: "#7a6e6a", image: `${CDN}/duskduvetcover_d5052fdf-c5b4-4f9f-b018-861ab55d2231.png?v=1763167315` },
      { name: "Pearl", hex: "#e8e2d9", image: `${CDN}/pearlduvetcover_4f39ef2e-8941-4e57-909b-c64c14882d78.png?v=1763167315` },
      { name: "Nebula", hex: "#3d3550", image: `${CDN}/nebuladuvetcover_afab5414-d28a-4612-ae4c-24e68d9ef80b.png?v=1763167315` },
    ],
  },
  {
    key: "bamboo",
    name: "Bamboo Viscose",
    label: "Sorelle",
    desc: "Ultra-smooth 300TC bamboo viscose. Temperature-regulating and naturally hypoallergenic.",
    specs: ["300TC", "Sateen weave", "Enzyme-washed", "OEKO-TEX certified"],
    colours: [
      { name: "Dusk", hex: "#7a6e6a", image: `${CDN}/duskduvetcover_178cebf8-4145-4b47-a957-82ce9cbd2b8e.png?v=1763167314` },
      { name: "Pearl", hex: "#e8e2d9", image: `${CDN}/pearlduvetcover_63e32d81-7a2b-4e4b-8984-af634da722a2.png?v=1763167314` },
      { name: "Nebula", hex: "#3d3550", image: `${CDN}/nebuladuvetcover_efac4d22-48c1-4404-a06c-62659d1f5abd.png?v=1763167314` },
    ],
  },
  {
    key: "tencel",
    name: "TENCEL™ Lyocell",
    label: "Vera",
    desc: "400TC FSC-certified TENCEL™. Silky, moisture-wicking, and sustainably sourced.",
    specs: ["400TC", "Percale weave", "Enzyme-washed", "OEKO-TEX + FSC certified"],
    colours: [
      { name: "Dusk", hex: "#7a6e6a", image: `${CDN}/duskduvetcover_d5052fdf-c5b4-4f9f-b018-861ab55d2231.png?v=1763167315` },
      { name: "Pearl", hex: "#e8e2d9", image: `${CDN}/pearlduvetcover_4f39ef2e-8941-4e57-909b-c64c14882d78.png?v=1763167315` },
      { name: "Nebula", hex: "#3d3550", image: `${CDN}/nebuladuvetcover_afab5414-d28a-4612-ae4c-24e68d9ef80b.png?v=1763167315` },
    ],
  },
];

const sizes = ["Grand Single", "Queen", "King"];

const pricing: Record<string, Record<string, string>> = {
  monthly: {
    "Grand Single": "$250",
    Queen: "$280",
    King: "$310",
  },
  annual: {
    "Grand Single": "$450",
    Queen: "$504",
    King: "$558",
  },
};

const annualSavings: Record<string, string> = {
  "Grand Single": "Save $50",
  Queen: "Save $56",
  King: "Save $62",
};

export default function FoundationPDP() {
  const [activeFabric, setActiveFabric] = useState(0);
  const [activeColour, setActiveColour] = useState(0);
  const [activeSize, setActiveSize] = useState("Queen");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [specsOpen, setSpecsOpen] = useState(false);

  const fabric = fabrics[activeFabric];
  const colour = fabric.colours[activeColour];

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10 text-[10px] uppercase tracking-[0.25em] text-[#9b9790]">
          <Link href="/pages/12-moons-club" className="hover:text-[#3d3a35] transition-colors">Twelve Moons Club</Link>
          <span>/</span>
          <span className="text-[#3d3a35]">Foundation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Image */}
          <div className="relative overflow-hidden bg-[#e8e5de]" style={{ aspectRatio: "3/4" }}>
            <Image
              src={colour.image}
              alt={`${fabric.name} — ${colour.name}`}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Configuration panel */}
          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-2">Twelve Moons Club</p>
            <h1 className="text-[38px] md:text-[46px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-3">
              Foundation
            </h1>
            <p className="text-[14px] font-light text-[#6b6862] leading-[1.8] mb-10 max-w-[400px]">
              A complete bedding refresh — duvet cover, fitted sheet, and pillowcase pair — delivered every six months.
            </p>

            {/* Billing toggle */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Billing</p>
              <div className="flex gap-0 border border-[#ccc9c2] w-fit">
                {(["monthly", "annual"] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBilling(b)}
                    className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                      billing === b
                        ? "bg-[#1a1a1a] text-[#f2f0eb]"
                        : "bg-transparent text-[#1a1a1a] hover:bg-[#f2f0eb]"
                    }`}
                  >
                    {b === "monthly" ? "Per delivery" : "Annual — Save 10%"}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Bed Size</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`px-4 py-2 text-[11px] uppercase tracking-[0.1em] border transition-colors duration-200 ${
                      activeSize === s
                        ? "bg-[#1a1a1a] text-[#f2f0eb] border-[#1a1a1a]"
                        : "bg-transparent text-[#1a1a1a] border-[#ccc9c2] hover:border-[#1a1a1a]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

              {/* Fabric */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Fabric</p>
                <div className="flex flex-wrap gap-2">
                  {fabrics.map((f, i) => (
                    <button
                      key={f.key}
                      onClick={() => { setActiveFabric(i); setActiveColour(0); }}
                      className={`px-4 py-2 text-[11px] uppercase tracking-[0.1em] border transition-colors duration-200 ${
                        activeFabric === i
                          ? "bg-[#1a1a1a] text-[#f2f0eb] border-[#1a1a1a]"
                          : "bg-transparent text-[#1a1a1a] border-[#ccc9c2] hover:border-[#1a1a1a]"
                      }`}
                    >
                      {f.name}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#9b9790] mt-3 leading-[1.7]">{fabric.desc}</p>
              </div>

              {/* Colour */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-1">
                  Colour — <span className="text-[#1a1a1a]">{colour.name}</span>
                </p>
                <div className="flex gap-3 mt-3">
                  {fabric.colours.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setActiveColour(i)}
                      title={c.name}
                      className={`w-7 h-7 rounded-full transition-all duration-200 ${
                        activeColour === i
                          ? "ring-2 ring-offset-2 ring-[#1a1a1a] ring-offset-[#f2f0eb]"
                          : "hover:ring-1 hover:ring-offset-2 hover:ring-[#9b9790] hover:ring-offset-[#f2f0eb]"
                      }`}
                      style={{ backgroundColor: c.hex, border: c.hex === "#e8e2d9" ? "1px solid #ccc9c2" : "none" }}
                    />
                  ))}
                </div>
              </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <p className="text-[26px] font-light text-[#1a1a1a]">
                AUD {pricing[billing][activeSize]}
                <span className="text-[13px] text-[#9b9790] ml-2">
                  {billing === "monthly" ? "/ delivery" : "/ year"}
                </span>
              </p>
              {billing === "annual" && (
                <span className="text-[11px] text-[#c9b99a] uppercase tracking-[0.15em]">
                  {annualSavings[activeSize]}
                </span>
              )}
            </div>

            {/* CTA */}
            <a
              href="https://aurumrest.com/pages/12-moons-club"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#2d2d2b] transition-colors duration-200 text-center mb-3"
            >
              Join Foundation — AUD {pricing[billing][activeSize]}
            </a>
            <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-8">
              Free delivery · Cancel any time
            </p>

            {/* What's included */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e0ddd6] mb-8">
              {["Duvet Cover", "Fitted Sheet", "Pillowcase Pair"].map((item) => (
                <div key={item} className="text-center">
                  <p className="text-[13px] font-light text-[#1a1a1a] mb-1">{item}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#9b9790]">Included</p>
                </div>
              ))}
            </div>

            {/* Specs accordion */}
            <button
              onClick={() => setSpecsOpen(!specsOpen)}
              className="flex items-center justify-between w-full text-left py-4 border-b border-[#e0ddd6]"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]">Fabric Specifications</span>
              <span className="text-[#9b9790] text-lg leading-none">{specsOpen ? "−" : "+"}</span>
            </button>
            {specsOpen && (
              <div className="py-4 border-b border-[#e0ddd6]">
                {fabric.specs.map((s) => (
                  <div key={s} className="py-2 border-b border-[#f0ede6] last:border-0">
                    <span className="text-[12px] text-[#1a1a1a] font-light">{s}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-24 pt-16 border-t border-[#e0ddd6]">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Membership</p>
          <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a] mb-12">
            What to expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Delivered twice a year", desc: "Your complete bedding set arrives every six months — timed perfectly for seasonal transitions." },
              { num: "02", title: "Choose your fabric", desc: "Pick French Linen, Bamboo Viscose, or TENCEL™ Lyocell. Change your preference before each delivery." },
              { num: "03", title: "No lock-in", desc: "Pause or cancel any time before your next scheduled delivery with no fees." },
            ].map((s) => (
              <div key={s.num} className="border-t border-[#e0ddd6] pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#9b9790] mb-3">{s.num}</p>
                <h3 className="text-[15px] font-light text-[#1a1a1a] mb-3">{s.title}</h3>
                <p className="text-[12px] leading-[1.8] text-[#7a7670]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
