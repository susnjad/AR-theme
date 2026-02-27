"use client";

import { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VeraBundleSection from "@/components/VeraBundleSection";
import { useCart } from "@/context/CartContext";

const colours = [
  { name: "Dusk", swatch: "#414141", images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksheet_0175f3cd-dad1-4425-8643-bd811e7c7e14.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
  { name: "Pearl", swatch: "#e8e2d8", images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlsheet_26df79d1-ba03-495e-9f77-cd2fd279d4a6.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
  { name: "Nebula", swatch: "#272757", images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebulasheet_b10d456c-4acd-41f7-842c-c4825efc3480.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
];

const sizes = ["Grand Single", "Queen", "King"];
const prices: Record<string, number> = { "Grand Single": 100, Queen: 130, King: 145 };

const variantIds: Record<string, Record<string, number>> = {
  Dusk:   { "Grand Single": 45095159628010, Queen: 45095159726314, King: 45095159824618 },
  Pearl:  { "Grand Single": 45095159660778, Queen: 45095159759082, King: 45095159857386 },
  Nebula: { "Grand Single": 45095159693546, Queen: 45095159791850, King: 45095159890154 },
};

const specs = [
  { label: "Material", value: "100% TENCEL™ Lyocell" },
  { label: "Thread Count", value: "400TC" },
  { label: "Weave", value: "Percale" },
  { label: "Pocket Depth", value: "38cm" },
  { label: "Construction", value: "Deep-pocket, full elastic" },
  { label: "Care", value: "Machine wash 30°C, tumble dry low" },
  { label: "Certifications", value: "OEKO-TEX, FSC-certified lyocell" },
];

const construction = [
  { layer: "01", title: "TENCEL™ Lyocell", desc: "FSC-certified lyocell from sustainably managed wood pulp. Breathable, moisture-wicking, and biodegradable." },
  { layer: "02", title: "400TC Percale", desc: "Crisp, matte percale finish. Tightly woven for durability without trapping warmth." },
  { layer: "03", title: "38cm Deep Pocket", desc: "Full surround elastic with 38cm pocket depth — stays tight on any mattress profile." },
  { layer: "04", title: "Precision Seaming", desc: "Flat-lock seams and mitered corners hold shape and lie flush through repeated washing." },
];

const relatedProducts = [
  { name: "Vera — Duvet Cover", href: "/products/vera-duvet-cover", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_2c073f31-20a4-4649-b8c3-53614ba4e94b.png?v=1763167314", price: "AUD $165" },
  { name: "Vera — Pillowcase Pair", href: "/products/vera-pillowcase-pair", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_89a9c01a-f3f3-428e-8e65-bdfeda828f8d.png?v=1763167314", price: "AUD $75" },
  { name: "Sorelle — Fitted Sheet", href: "/products/sorelle-fitted-sheet", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksheet_0175f3cd-dad1-4425-8643-bd811e7c7e14.png?v=1763167314", price: "AUD $90" },
];

export default function VeraFittedSheetPage() {
  const [activeColour, setActiveColour] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState("Queen");
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
              <Image src={colour.images[activeImage]} alt={`Vera Fitted Sheet — ${colour.name}`} fill className="object-cover transition-opacity duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-3">TENCEL™ Lyocell · Vera</p>
            <h1 className="text-[38px] md:text-[44px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-2">Fitted Sheet</h1>
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
                    id: `vera-sheet-${colour.name}-${activeSize}`,
                    productHandle: "vera-fitted-sheet",
                    name: "Vera — Fitted Sheet",
                    variant: `${colour.name} / ${activeSize}`,
                    price: prices[activeSize],
                    image: colour.images[0],
                    shopifyUrl: "https://aurumrest.com/products/tencel-sheet",
                    variantId: variantIds[colour.name][activeSize],
                  })}
                className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#2d2d2b] transition-colors duration-200 text-center mb-4"
              >
                Add to Bag — AUD ${prices[activeSize]}
              </button>
            <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-8">Free express shipping</p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e0ddd6] mb-8">
              {[{ label: "Material", value: "TENCEL™" }, { label: "Pocket", value: "38cm Deep" }, { label: "Certified", value: "OEKO-TEX" }].map((s) => (
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
            <h2 className="text-[32px] font-light tracking-[-0.02em] text-[#1a1a1a]">Crisp nights. No compromise.</h2>
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

        <VeraBundleSection currentKey="sheet" />
      </div>
      <Footer />
    </div>
  );
}
