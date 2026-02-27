"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LierreBundleSection from "@/components/LierreBundleSection";
import { useCart } from "@/context/CartContext";

const colours = [
  { name: "Dusk",   swatch: "#414141", variantId: 45095133577450, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_89a9c01a-f3f3-428e-8e65-bdfeda828f8d.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_40f06aef-4ccd-44af-b257-1ef5d005716c.jpg?v=1765781604"] },
  { name: "Nebula", swatch: "#272757", variantId: 45095133642986, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebulap.case_954444bd-75f4-470e-848a-7b2218eeb4c2.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_40f06aef-4ccd-44af-b257-1ef5d005716c.jpg?v=1765781604"] },
  { name: "Pearl",  swatch: "#e8e2d8", variantId: 45095133610218, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlp.case_22e07cb3-12da-4f40-b8a4-4ac833d0213b.png?v=1763167315", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_40f06aef-4ccd-44af-b257-1ef5d005716c.jpg?v=1765781604"] },
];

const sizes = ["Standard", "Euro"];
const prices: Record<string, number> = { Standard: 90, Euro: 100 };

const specs = [
  { label: "Material", value: "100% French Flax Linen" },
  { label: "Weight", value: "180GSM" },
  { label: "Sold as", value: "Pair (2 pillowcases)" },
  { label: "Closure", value: "Envelope closure" },
  { label: "Finish", value: "Garment-washed" },
  { label: "Care", value: "Machine wash cold, tumble dry low" },
  { label: "Certifications", value: "OEKO-TEX Standard 100" },
];

const construction = [
  { layer: "01", title: "French Flax", desc: "180GSM single-origin French flax. Temperature-regulating and naturally breathable against the face." },
  { layer: "02", title: "Envelope Closure", desc: "Clean envelope finish with no buttons or zips — nothing to press against your face or hair during the night." },
  { layer: "03", title: "Garment-Washed", desc: "Pre-softened for immediate comfort. Texture deepens over multiple washes." },
  { layer: "04", title: "Reinforced Edges", desc: "Double-stitched hem on all edges. Resists fraying and holds shape after repeated washing." },
];

export default function LierrePillowcasePairPage() {
  const [activeColour, setActiveColour] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState("Standard");
  const [specsOpen, setSpecsOpen] = useState(false);
  const colour = colours[activeColour];
  const { addItem } = useCart();

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />
      <div className="section-container pt-28 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {colour.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImage(i)} className={`relative w-16 h-16 overflow-hidden bg-[#e8e5de] border transition-colors duration-200 ${activeImage === i ? "border-[#1a1a1a]" : "border-transparent"}`}>
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 overflow-hidden bg-[#e8e5de]" style={{ aspectRatio: "3/4" }}>
              <Image src={colour.images[activeImage]} alt={`Lierre Pillowcase — ${colour.name}`} fill className="object-cover transition-opacity duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-3">French Linen · Lierre</p>
            <h1 className="text-[38px] md:text-[44px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-2">Pillowcase Pair</h1>
            <p className="text-[22px] font-light text-[#1a1a1a] mb-8">AUD ${prices[activeSize]}</p>

            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Colour — <span className="text-[#1a1a1a]">{colour.name}</span></p>
              <div className="flex gap-3">
                {colours.map((c, i) => (
                  <button key={c.name} title={c.name} onClick={() => { setActiveColour(i); setActiveImage(0); }} className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${activeColour === i ? "border-[#1a1a1a] scale-110" : "border-transparent"}`} style={{ backgroundColor: c.swatch }} />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button key={s} onClick={() => setActiveSize(s)} className={`px-4 py-2 text-[11px] uppercase tracking-[0.1em] border transition-colors duration-200 ${activeSize === s ? "bg-[#1a1a1a] text-[#f2f0eb] border-[#1a1a1a]" : "bg-transparent text-[#1a1a1a] border-[#ccc9c2] hover:border-[#1a1a1a]"}`}>{s}</button>
                ))}
              </div>
            </div>

              <button
                  onClick={() => addItem({
                    id: `lierre-pillowcase-${colour.name}-${activeSize}`,
                    productHandle: "lierre-pillowcase-pair",
                    name: "Lierre — Pillowcase Pair",
                    variant: `${colour.name} / ${activeSize}`,
                    price: prices[activeSize],
                    image: colour.images[0],
                    shopifyUrl: "https://aurumrest.com/products/lierre-100-french-linen-pillowcase",
                    variantId: colour.variantId,
                  })}
                className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#2d2d2b] transition-colors duration-200 text-center mb-4"
              >
                Add to Bag — AUD ${prices[activeSize]}
              </button>
            <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-8">Free express shipping</p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e0ddd6] mb-8">
              {[{ label: "Sold as", value: "Pair" }, { label: "Closure", value: "Envelope" }, { label: "Certified", value: "OEKO-TEX" }].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-[15px] font-light text-[#1a1a1a] mb-1">{s.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#9b9790]">{s.label}</p>
                </div>
              ))}
            </div>

            <button onClick={() => setSpecsOpen(!specsOpen)} className="flex items-center justify-between w-full text-left py-4 border-b border-[#e0ddd6]">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]">Full Specifications</span>
              <span className="text-[#9b9790] text-lg leading-none">{specsOpen ? "−" : "+"}</span>
            </button>
            {specsOpen && (
              <div className="py-4 border-b border-[#e0ddd6]">
                {specs.map((s) => (
                  <div key={s.label} className="flex justify-between py-2 border-b border-[#f0ede6] last:border-0">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#9b9790]">{s.label}</span>
                    <span className="text-[12px] text-[#1a1a1a] font-light">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-24 pt-16 border-t border-[#e0ddd6]">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Construction</p>
            <h2 className="text-[32px] font-light tracking-[-0.02em] text-[#1a1a1a]">The surface that matters most.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {construction.map((c) => (
              <div key={c.layer} className="border-t border-[#e0ddd6] pt-6">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#9b9790] mb-3">{c.layer}</p>
                <h3 className="text-[16px] font-light text-[#1a1a1a] mb-3">{c.title}</h3>
                <p className="text-[12px] leading-[1.8] text-[#7a7670]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <LierreBundleSection currentKey="pillowcase" />
      </div>
      <Footer />
    </div>
  );
}
