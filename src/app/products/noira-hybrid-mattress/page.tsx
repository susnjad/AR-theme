'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const images = [
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_heroooo.jpg?v=1771051266",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_new.png?v=1771051267",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_new_3.png?v=1771051266",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/closeup.jpg?v=1770964326",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_new_4.png?v=1771051266",
];

const variants = [
  { label: "Grand Single", size: "105 × 203 × 28cm", price: "AUD $1,350", variantId: 45007932293354 },
  { label: "Queen",        size: "153 × 203 × 28cm", price: "AUD $2,150", variantId: 45007932326122 },
  { label: "King",         size: "183 × 203 × 28cm", price: "AUD $2,450", variantId: 45007932358890 },
];

const layers = [
  {
    number: "01",
    name: "IceSense™ Cover",
    material: "400GSM ceramic-thread knit",
    description:
      "Japanese ceramic threads woven into a 400GSM knit deliver a crisp, temperature-neutral surface. Unlike fabrics that trap warmth, IceSense maintains a consistently cool surface temperature through the night.",
  },
  {
    number: "02",
    name: "Cooling Gel Layer",
    material: "Phase-change memory foam",
    description:
      "Phase-change technology activates at 27°C, drawing heat away as your body temperature rises. The gel layer works in tandem with the coil system to allow passive airflow from below.",
  },
  {
    number: "03",
    name: "Medical-Grade Memory Foam",
    material: "CertiPUR-US® certified",
    description:
      "Targeted pressure relief that maintains structural integrity over time. Conforms to shoulder, hip, and lumbar independently — supporting each zone without forcing posture corrections.",
  },
  {
    number: "04",
    name: "Titanium Pocket Coils",
    material: "1,072 precision springs",
    description:
      "Each coil measures 5cm in diameter with 2mm titanium-tempered steel wire. 1,072 is the exact maximum that fits within the mattress while maintaining structural integrity — more would compromise durability, fewer would create pressure points.",
  },
];

const specs = [
  {
    label: "Craftsmanship",
    content:
      "Responsive Titanium Coils — 1,072 precision springs isolate motion for uninterrupted rest, even during restless nights.\n\nMedical-Grade Memory Foam — Targeted pressure relief that maintains structural integrity over time.\n\nGel Layer — Phase-change technology activates at 27°C, drawing heat away as your body temperature rises.\n\nIceSense™ Cover — 400GSM knit with Japanese ceramic threads delivers a crisp, temperature-neutral surface.",
  },
  {
    label: "Dimensions",
    content: "Grand Single: 105 × 203 × 28cm\nQueen: 153 × 203 × 28cm\nKing: 183 × 203 × 28cm",
  },
  {
    label: "Certifications",
    content: "OEKO-TEX® Standard 100 certified\nCertiPUR-US® certified foams",
  },
  {
    label: "Care",
    content:
      "Rotate head-to-foot every 3–6 months for optimal longevity. Do not flip. Spot clean with mild detergent and cold water. Do not saturate.",
  },
  {
    label: "Shipping & Trial",
    content:
      "Free express delivery. Delivered compressed and rolled. 100-night trial — return for a full refund if not perfectly suited to your sleep.",
  },
];

const relatedProducts = [
  {
    name: "Veyre",
    subtitle: "Weighted Blanket",
    price: "AUD $280",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_dafe98f9-f34d-49bb-b8bc-34680879d15f.png?v=1770872229",
    href: "/products/veyre-weighted-blanket",
    internal: true,
  },
  {
    name: "Eirelle",
    subtitle: "Kapok Pillow",
    price: "AUD $160",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_4c011666-b6f1-4406-b6cb-5bd0f712ab97.png?v=1763167315",
    href: "/products/eirelle-kapok-pillow",
    internal: true,
  },
  {
    name: "Duette",
    subtitle: "Dual Sided Pillow",
    price: "AUD $110",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_47e80877-257b-40a6-8ab9-ebb9f14f6840.png?v=1763167315",
      href: "/products/duette-adjustable-dual-sided-pillow",
      internal: true,
  },
];

function SpecsAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="border-t border-[#e0ddd6]">
      {specs.map((s) => (
        <div key={s.label} className="border-b border-[#e0ddd6]">
          <button
            onClick={() => setOpen(open === s.label ? null : s.label)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#1a1a1a]">{s.label}</span>
            <span
              className="text-[#9b9790] text-lg leading-none transition-transform duration-200"
              style={{ transform: open === s.label ? "rotate(45deg)" : "none" }}
            >
              +
            </span>
          </button>
          {open === s.label && (
            <p className="text-[13px] leading-[1.85] text-[#5a5651] font-light pb-5 pr-6 whitespace-pre-line">
              {s.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function NoiraPDP() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const { addItem } = useCart();

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="section-container pt-28 pb-0">
        <nav className="flex gap-2 items-center text-[10px] uppercase tracking-[0.22em] text-[#9b9790]">
          <Link href="/collections/oasis" className="hover:text-[#1a1a1a] transition-colors">Oasis</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">Noira</span>
        </nav>
      </div>

      {/* Main product section */}
      <section className="section-container pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-start">

          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative shrink-0 w-16 h-20 md:w-[72px] md:h-[90px] overflow-hidden transition-all duration-200 ${
                    activeImage === i ? "ring-1 ring-[#1a1a1a]" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-[#e8e5de]">
              <Image
                src={images[activeImage]}
                alt="Noira Hybrid Mattress"
                fill
                className="object-cover object-center transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* Purchase panel */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-3">Oasis Collection</p>
            <h1 className="text-[36px] md:text-[42px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-2">
              Noira
            </h1>
            <p className="text-[15px] font-light text-[#5a5651] mb-6">Hybrid Mattress</p>

            {/* Price */}
            <p className="text-[22px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-8">
              {variants[selectedVariant].price}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9790] mb-3">Size</p>
              <div className="flex flex-col gap-2">
                {variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex justify-between items-center px-4 py-3.5 border text-left transition-all duration-200 ${
                      selectedVariant === i
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#f2f0eb]"
                        : "border-[#e0ddd6] text-[#1a1a1a] hover:border-[#1a1a1a]"
                    }`}
                  >
                    <span className="text-[12px] tracking-[0.04em]">{v.label}</span>
                    <span className={`text-[11px] ${selectedVariant === i ? "text-[#a0a0a0]" : "text-[#9b9790]"}`}>
                      {v.size}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
              <button
              onClick={() => addItem({
                    id: `noira-${variants[selectedVariant].label}`,
                    productHandle: "noira-hybrid-mattress",
                    name: "Noira — Hybrid Mattress",
                    variant: variants[selectedVariant].label,
                    price: parseInt(variants[selectedVariant].price.replace(/[^0-9]/g, "")),
                    image: images[0],
                    shopifyUrl: "https://aurumrest.com/products/noira-hybrid-mattress",
                    variantId: variants[selectedVariant].variantId,
                  })}
                className="block w-full text-center text-[10px] uppercase tracking-[0.28em] bg-[#1a1a1a] text-[#f2f0eb] py-4 hover:bg-[#2e2e2e] transition-colors duration-300 mb-4"
              >
                Add to Bag
              </button>

              {/* Trust signals */}
              <div className="flex flex-col gap-2.5 mt-6 pt-6 border-t border-[#e0ddd6]">
                {[
                  "100-night trial. Full refund if not satisfied.",
                  "Free express delivery.",
                  "OEKO-TEX® & CertiPUR-US® certified.",
                  "10-year warranty included.",
                ].map((t) => (
                  <p key={t} className="text-[11px] leading-[1.6] text-[#7a7670] tracking-[0.02em]">
                    — {t}
                  </p>
                ))}
              </div>

              {/* Firmness indicator */}
              <div className="mt-7 pt-7 border-t border-[#e0ddd6]">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9790]">Firmness</p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#1a1a1a]">Medium-Firm — 6.5 / 10</p>
                </div>
                <div className="relative h-1.5 bg-[#e0ddd6] rounded-full overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-[#c4a882] rounded-full" style={{ width: "65%" }} />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-[9px] text-[#9b9790] tracking-[0.12em] uppercase">Soft</p>
                  <p className="text-[9px] text-[#9b9790] tracking-[0.12em] uppercase">Firm</p>
                </div>
                <p className="mt-3 text-[11px] leading-[1.7] text-[#7a7670] font-light">
                  Suitable for side, back, and combination sleepers. Provides contouring comfort with enough support to keep the spine aligned.
                </p>
              </div>

            {/* Specs accordion */}
            <div className="mt-8">
              <SpecsAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-b border-[#e0ddd6] py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#e0ddd6]">
            {[
              { stat: "1,072", label: "Titanium pocket coils" },
              { stat: "28cm", label: "Mattress depth" },
              { stat: "27°C", label: "Gel activation point" },
              { stat: "100", label: "Night trial" },
            ].map((s) => (
              <div key={s.stat} className="md:px-10 first:pl-0 last:pr-0">
                <p className="text-[36px] md:text-[44px] font-light tracking-[-0.03em] text-[#1a1a1a] leading-none mb-2">
                  {s.stat}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9790]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Customer review pull quote */}
       <section className="py-20 border-b border-[#e0ddd6]">
         <div className="section-container max-w-3xl">
           <svg className="w-7 h-5 text-[#c4a882] mb-6 fill-current" viewBox="0 0 32 22" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 22V13.4C0 9.667 1.033 6.567 3.1 4.1 5.167 1.633 8.1.133 11.9 0v3.8C10.033 4 8.567 4.733 7.5 6c-.967 1.2-1.5 2.767-1.5 4.6H12V22H0Zm20 0V13.4c0-3.733 1.033-6.833 3.1-9.3C25.167 1.633 28.1.133 31.9 0v3.8c-1.867.2-3.333.933-4.4 2.2-.967 1.2-1.5 2.767-1.5 4.6H32V22H20Z"/>
           </svg>
           <blockquote className="text-[22px] md:text-[26px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.45] mb-8">
             I've tried four mattresses in the past decade. Nothing else has come close to the Noira for cooling. Three months in and I genuinely look forward to getting into bed.
           </blockquote>
           <div className="flex items-center gap-4">
             <div className="w-px h-8 bg-[#c4a882]" />
             <div>
               <p className="text-[11px] uppercase tracking-[0.22em] text-[#1a1a1a]">Samantha R.</p>
               <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b9790] mt-0.5">Queen — Verified purchase</p>
             </div>
             <div className="ml-auto flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-3 h-3 fill-[#c4a882]" viewBox="0 0 20 20"><path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"/></svg>
               ))}
             </div>
           </div>
         </div>
       </section>

       {/* Layer breakdown */}
       <section className="py-24 section-container">
        <div className="mb-14">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Construction</p>
          <h2 className="text-[32px] md:text-[38px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.15]">
            Four layers. One system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e0ddd6]">
          {layers.map((layer) => (
            <div key={layer.number} className="bg-[#f2f0eb] p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#9b9790] mb-6">{layer.number}</p>
              <h3 className="text-[16px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-1 leading-snug">
                {layer.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b9790] mb-5">{layer.material}</p>
              <p className="text-[12px] leading-[1.85] text-[#5a5651] font-light">{layer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who Noira is for */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Designed with intent</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">Who Noira is for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0ddd6]">
            {[
              {
                icon: "◎",
                heading: "The warm sleeper",
                body: "If you regularly wake overheated, Noira's IceSense™ cover and phase-change gel layer regulate surface temperature through the night.",
              },
              {
                icon: "◎",
                heading: "Couples with different schedules",
                body: "1,072 individually wrapped pocket coils absorb motion at the source — a restless partner won't register on your side of the bed.",
              },
              {
                icon: "◎",
                heading: "Side and combination sleepers",
                body: "The zoned coil layout offers firmer lumbar support while allowing shoulders and hips to sink into the memory foam comfort layer.",
              },
              {
                icon: "◎",
                heading: "The health-conscious buyer",
                body: "OEKO-TEX® and CertiPUR-US® certifications mean every material has been tested for harmful substances. No off-gassing, no compromises.",
              },
              {
                icon: "◎",
                heading: "First-time mattress investors",
                body: "100 nights to decide, free delivery both ways, and a 10-year warranty means there's no risk in choosing well the first time.",
              },
              {
                icon: "◎",
                heading: "Those who keep things longer",
                body: "Built with high-resilience titanium coils and premium foams that maintain their form — not a mattress you'll be replacing in three years.",
              },
            ].map((card) => (
              <div key={card.heading} className="bg-[#f2f0eb] p-8 flex flex-col gap-4">
                <span className="text-[#c4a882] text-lg leading-none">{card.icon}</span>
                <h3 className="text-[13px] uppercase tracking-[0.2em] text-[#1a1a1a]">{card.heading}</h3>
                <p className="text-[12px] leading-[1.85] text-[#5a5651] font-light">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Beyond Compare</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">How Noira stacks up</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 w-[38%]" />
                  {/* Noira — highlighted */}
                  <th className="pb-6 w-[20%]">
                    <div className="bg-[#1a1a1a] text-[#f2f0eb] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-center">
                      Noira
                    </div>
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Koala
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Emma
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Price (Queen)",
                    noira: "AUD $2,150",
                    col2: "AUD $2,299",
                    col3: "AUD $2,399",
                    type: "text",
                  },
                  {
                    label: "Pocket Coil System",
                    noira: true,
                    col2: true,
                    col3: false,
                    type: "bool",
                  },
                  {
                    label: "Cooling Gel Layer",
                    noira: true,
                    col2: false,
                    col3: true,
                    type: "bool",
                  },
                  {
                    label: "IceSense™ Cover",
                    noira: true,
                    col2: false,
                    col3: false,
                    type: "bool",
                  },
                  {
                    label: "OEKO-TEX® Certified",
                    noira: true,
                    col2: true,
                    col3: false,
                    type: "bool",
                  },
                  {
                    label: "CertiPUR-US® Foams",
                    noira: true,
                    col2: false,
                    col3: false,
                    type: "bool",
                  },
                  {
                    label: "Trial Period",
                    noira: "100 nights",
                    col2: "120 nights",
                    col3: "100 nights",
                    type: "text",
                  },
                  {
                    label: "Free Delivery",
                    noira: true,
                    col2: true,
                    col3: true,
                    type: "bool",
                  },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-[#f2f0eb]" : "bg-[#eeebe4]"}>
                    <td className="py-4 pl-2 pr-4 text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]">
                      {row.label}
                    </td>
                    {/* Noira cell — accented */}
                    <td className="py-4 text-center bg-[#1a1a1a]/[0.04] border-x border-[#1a1a1a]/10">
                      {row.type === "bool" ? (
                        row.noira ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c4a882]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#1a1a1a]">{row.noira as string}</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.type === "bool" ? (
                        (row.col2 as boolean) ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c8c4bc]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#5a5651]">{row.col2 as string}</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.type === "bool" ? (
                        (row.col3 as boolean) ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c8c4bc]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#5a5651]">{row.col3 as string}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[10px] text-[#9b9790] tracking-[0.04em]">
            Competitor data based on publicly available information. Accurate as of Feb 2026.
          </p>
        </div>
      </section>

       {/* What's in the box */}
       <section className="py-24 border-t border-[#e0ddd6]">
         <div className="section-container">
           <div className="mb-12">
             <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Delivery</p>
             <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">What arrives at your door</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e0ddd6]">
             {[
               {
                 step: "01",
                 heading: "Rolled & compressed",
                 body: "Your Noira is vacuum-sealed and rolled into a compact cylinder — typically 50cm × 110cm. It ships via free express courier and fits through any standard doorway.",
               },
               {
                 step: "02",
                 heading: "Unbox & expand",
                 body: "Remove the outer carton, lay the roll flat on your bed frame, then cut the plastic wrap. The mattress fully expands within 4–6 hours. We recommend 24 hours before first sleep.",
               },
               {
                 step: "03",
                 heading: "In the box",
                 body: "1× Noira Hybrid Mattress. No tools required.",
               },
             ].map((item) => (
               <div key={item.step} className="bg-[#f2f0eb] p-8 flex flex-col gap-4">
                 <p className="text-[11px] uppercase tracking-[0.22em] text-[#9b9790]">{item.step}</p>
                 <h3 className="text-[13px] uppercase tracking-[0.2em] text-[#1a1a1a]">{item.heading}</h3>
                 <p className="text-[12px] leading-[1.85] text-[#5a5651] font-light">{item.body}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Complete the set */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Complete the set</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">Also in Oasis</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
            {relatedProducts.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  target={p.internal ? undefined : "_blank"}
                  className="group block"
                >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e5de] mb-5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <p className="text-[9px] uppercase tracking-[0.26em] text-[#9b9790] mb-1.5">{p.subtitle}</p>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[18px] font-light text-[#1a1a1a]">{p.name}</h3>
                  <span className="text-[12px] font-light text-[#1a1a1a]">{p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
