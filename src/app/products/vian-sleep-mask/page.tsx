"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const colours = [
  { name: "Dusk",   swatch: "#414141", variantId: 45009459445994, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksleepmas_bffb0b7d-9ab4-473e-ab09-1e0ca1aeb0d3.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
  { name: "Pearl",  swatch: "#e8e2d8", variantId: 45009459577066, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlsleepmas_7ef36bc1-eff3-4779-b8f2-7df0d40fc0e8.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
  { name: "Nebula", swatch: "#272757", variantId: 45009459478762, images: ["https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebulasleepmas_13c54d29-da97-4f72-9a06-4ce5f1c0b9b2.png?v=1763167314", "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging_a32b616a-5970-491b-a2ee-6cb51402e2ba.jpg?v=1763167314"] },
];

const specs = [
  { label: "Outer Shell", value: "100% Mulberry Silk" },
  { label: "Inner Lining", value: "Bamboo Viscose" },
  { label: "Padding", value: "Contoured memory foam" },
  { label: "Strap", value: "Adjustable elastic, no-slip grip" },
  { label: "Blackout", value: "100% light blocking" },
  { label: "Care", value: "Hand wash cold, air dry" },
  { label: "Certifications", value: "OEKO-TEX Standard 100" },
];

const construction = [
  { layer: "01", title: "Mulberry Silk Shell", desc: "Grade 6A mulberry silk outer. Naturally hypoallergenic, temperature-neutral, and gentle on skin and lashes." },
  { layer: "02", title: "Contoured Foam", desc: "Anatomically shaped memory foam cups. Sits clear of eyelashes — no pressure, full blackout." },
  { layer: "03", title: "Bamboo Lining", desc: "Soft bamboo viscose inner lining wicks moisture and stays cool against the skin all night." },
  { layer: "04", title: "Adjustable Strap", desc: "Wide no-slip elastic strap with micro-adjustment. Fits all head shapes without leaving marks." },
];

const relatedProducts = [
  { name: "Vera — Pillowcase Pair", href: "/products/vera-pillowcase-pair", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_89a9c01a-f3f3-428e-8e65-bdfeda828f8d.png?v=1763167314", price: "AUD $75" },
  { name: "Sorelle — Pillowcase Pair", href: "/products/sorelle-pillowcase-pair", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_e788193e-bb11-478f-9d4e-ae27374cdaa1.png?v=1763167314", price: "AUD $70" },
  { name: "Eirelle — Kapok Pillow", href: "/products/eirelle-kapok-pillow", image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/kapok_hero.png?v=1763167315", price: "AUD $160" },
];

export default function VianSleepMaskPage() {
  const [activeColour, setActiveColour] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
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
              <Image src={colour.images[activeImage]} alt={`Vian Sleep Mask — ${colour.name}`} fill className="object-cover transition-opacity duration-500" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-3">Mulberry Silk · Vian</p>
            <h1 className="text-[38px] md:text-[44px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-2">Sleep Mask</h1>
            <p className="text-[22px] font-light text-[#1a1a1a] mb-8">AUD $65</p>

            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Colour — <span className="text-[#1a1a1a]">{colour.name}</span></p>
              <div className="flex gap-3">
                {colours.map((c, i) => (
                  <button key={c.name} title={c.name} onClick={() => { setActiveColour(i); setActiveImage(0); }} className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${activeColour === i ? "border-[#1a1a1a] scale-110" : "border-transparent"}`} style={{ backgroundColor: c.swatch }} />
                ))}
              </div>
            </div>

              <button
                onClick={() => addItem({
                    id: `vian-sleep-mask-${colour.name}`,
                    productHandle: "vian-sleep-mask",
                    name: "Vian — Sleep Mask",
                    variant: colour.name,
                    price: 65,
                    image: colour.images[0],
                    shopifyUrl: "https://aurumrest.com/products/silk-sleep-mask",
                    variantId: colour.variantId,
                  })}
                className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#2d2d2b] transition-colors duration-200 text-center mb-4"
              >
                Add to Bag — AUD $65
              </button>
            <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-8">Free express shipping · 30-day returns</p>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e0ddd6] mb-8">
              {[{ label: "Shell", value: "Mulberry Silk" }, { label: "Blackout", value: "100%" }, { label: "Certified", value: "OEKO-TEX" }].map((s) => (
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
            <h2 className="text-[32px] font-light tracking-[-0.02em] text-[#1a1a1a]">Total darkness. Zero pressure.</h2>
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

        <div className="mt-24 pt-16 border-t border-[#e0ddd6]">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-10">Complete the Set</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.href} href={p.href} className="group block">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e5de] mb-4">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-light text-[#1a1a1a]">{p.name}</p>
                  <p className="text-[12px] text-[#9b9790]">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
