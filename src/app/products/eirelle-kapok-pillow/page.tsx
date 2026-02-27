'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const images = [
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_4c011666-b6f1-4406-b6cb-5bd0f712ab97.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/filling.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/closeup.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/packaging.png?v=1763167315",
];

const layers = [
  {
    number: "01",
    name: "Organic Cotton Shell",
    material: "Outer cover",
    description:
      "100% organic cotton, woven tight enough to contain fine kapok fibers while staying breathable. Soft on contact, durable over time. GOTS-certified and free from synthetic finishes.",
  },
  {
    number: "02",
    name: "Pure Kapok Fill",
    material: "Rainforest-sourced fiber",
    description:
      "Kapok is the lightest natural fill on earth — seven times lighter than cotton, naturally hollow, and moisture-resistant. Harvested from the ceiba tree canopy without harming the plant. No synthetics, no blending.",
  },
  {
    number: "03",
    name: "Natural Loft Layer",
    material: "Pressure-adaptive support",
    description:
      "Unlike memory foam, kapok responds without retaining heat. It cradles contours under load, then gently recovers — providing consistent support without the sinking feeling of synthetic fills.",
  },
  {
    number: "04",
    name: "Hypoallergenic Barrier",
    material: "Built-in protection",
    description:
      "Kapok is inherently resistant to dust mites, mould, and bacteria — no chemical treatments required. Suitable for those with sensitivities, asthma, and respiratory conditions.",
  },
];

const specs = [
  {
    label: "Craftsmanship",
    content:
      "Pure Kapok Fill — Seven times lighter than cotton, naturally hollow fibers provide pressure-adaptive support without heat retention.\n\nOrganic Cotton Shell — GOTS-certified 100% organic cotton. Woven to contain fine kapok fiber while maintaining breathability.\n\nNatural Hypoallergenic Properties — Inherently resistant to dust mites, mould, and bacteria without chemical treatments.\n\nMoisture-Wicking Construction — Kapok's hollow core naturally draws moisture away, maintaining a dry sleep surface throughout the night.\n\nSustainable Harvest — Kapok is hand-gathered from the ceiba canopy with zero harm to the tree. Fully biodegradable.",
  },
  {
    label: "Dimensions",
    content: "Standard: 48 × 73cm\nFill weight: 600g",
  },
  {
    label: "Certifications",
    content: "OEKO-TEX® Standard 100 certified\nGOTS-certified organic cotton shell\nVegan-friendly. Biodegradable materials.",
  },
  {
    label: "Care",
    content:
      "Hand wash or gentle machine wash (delicate cycle, cold water).\nDo not tumble dry — lay flat in indirect sunlight.\nDo not bleach or iron.\nFluff regularly to restore loft.",
  },
  {
    label: "Returns",
    content: "30-day return policy for unused items in original packaging.",
  },
];

const comparisons = [
  { label: "Price",                         eirelle: "AUD $160",      col2: "AUD $189",      col3: "AUD $179",      type: "text" },
  { label: "Natural Fill",                  eirelle: true,             col2: false,           col3: false,           type: "bool" },
  { label: "Kapok Fiber",                   eirelle: true,             col2: false,           col3: false,           type: "bool" },
  { label: "Organic Cotton Shell",          eirelle: true,             col2: false,           col3: true,            type: "bool" },
  { label: "OEKO-TEX® Certified",           eirelle: true,             col2: true,            col3: true,            type: "bool" },
  { label: "Inherently Hypoallergenic",     eirelle: true,             col2: false,           col3: false,           type: "bool" },
  { label: "Fully Biodegradable",           eirelle: true,             col2: false,           col3: false,           type: "bool" },
  { label: "Free Delivery",                 eirelle: true,             col2: true,            col3: true,            type: "bool" },
];

const whoItIsFor = [
  {
    heading: "Allergy and asthma sufferers",
    body: "Kapok is inherently resistant to dust mites, mould, and bacteria — no chemical treatments, no synthetic barriers. Clean sleep from the fiber up.",
  },
  {
    heading: "Hot sleepers",
    body: "The hollow core of each kapok fiber naturally circulates air. No synthetic gel layers, no chemical cooling — just a pillow that breathes the way nature intended.",
  },
  {
    heading: "Natural material advocates",
    body: "100% natural fill, GOTS-certified organic cotton shell, and a biodegradable construction. Every component has a clear, traceable origin.",
  },
  {
    heading: "Light sleepers and pressure-sensitive",
    body: "Seven times lighter than cotton, kapok holds its shape without the heaviness of traditional fills. Support that doesn't feel like resistance.",
  },
  {
    heading: "Eco-conscious buyers",
    body: "Kapok is wild-harvested from the ceiba canopy without cutting the tree. The entire pillow is biodegradable — from fill to cover to packaging.",
  },
  {
    heading: "Back and side sleepers",
    body: "Natural loft and adaptive recovery make Eirelle versatile across sleep positions. Resilient enough to support a side sleeper, soft enough not to strain a back sleeper.",
  },
];

const relatedProducts = [
  {
    name: "Noira",
    subtitle: "Hybrid Mattress",
    price: "AUD $1,350",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_heroooo.jpg?v=1771051266",
    href: "/products/noira-hybrid-mattress",
    internal: true,
  },
  {
    name: "Veyre",
    subtitle: "Weighted Blanket",
    price: "AUD $280",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_dafe98f9-f34d-49bb-b8bc-34680879d15f.png?v=1770872229",
    href: "/products/veyre-weighted-blanket",
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

export default function EirellePDP() {
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="section-container pt-28 pb-0">
        <nav className="flex gap-2 items-center text-[10px] uppercase tracking-[0.22em] text-[#9b9790]">
          <Link href="/collections/oasis" className="hover:text-[#1a1a1a] transition-colors">Oasis</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">Eirelle</span>
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
                alt="Eirelle Kapok Pillow"
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
              Eirelle
            </h1>
            <p className="text-[15px] font-light text-[#5a5651] mb-6">Kapok Pillow</p>

            {/* Price */}
            <p className="text-[22px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-8">
              AUD $160.00
            </p>

            {/* Material origin callout */}
            <div className="mb-6 px-5 py-5 border border-[#e0ddd6] bg-[#f7f5f0]">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#9b9790] mb-2">The Fiber</p>
              <p className="text-[13px] font-light text-[#1a1a1a] leading-snug mb-1">
                Pure Kapok — Rainforest Canopy
              </p>
              <p className="text-[11px] leading-[1.7] text-[#7a7670]">
                Wild-harvested from the ceiba tree without cutting. Seven times lighter than cotton. Naturally hollow, naturally hypoallergenic.
              </p>
            </div>

            {/* Key properties grid */}
            <div className="mb-8 grid grid-cols-3 gap-px bg-[#e0ddd6]">
              {[
                { label: "Fill", value: "Pure Kapok" },
                { label: "Shell", value: "Organic Cotton" },
                { label: "Loft", value: "Medium-High" },
              ].map((item) => (
                <div key={item.label} className="bg-[#f2f0eb] p-3.5 text-center">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b9790] mb-1">{item.label}</p>
                  <p className="text-[12px] font-light text-[#1a1a1a]">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
              <button
                  onClick={() => addItem({
                    id: "eirelle-kapok-pillow",
                    productHandle: "eirelle-kapok-pillow",
                    name: "Eirelle — Kapok Pillow",
                    variant: "Standard",
                    price: 160,
                    image: images[0],
                    shopifyUrl: "https://aurumrest.com/products/organic-kapok-pillow",
                    variantId: 45009268605162,
                  })}
                className="block w-full text-center text-[10px] uppercase tracking-[0.28em] bg-[#1a1a1a] text-[#f2f0eb] py-4 hover:bg-[#2e2e2e] transition-colors duration-300 mb-4"
              >
                Add to Bag
              </button>

            {/* Trust signals */}
            <div className="flex flex-col gap-2.5 mt-6 pt-6 border-t border-[#e0ddd6]">
              {[
                "Free express delivery.",
                "30-day return policy for unused items.",
                "OEKO-TEX® & GOTS certified. Fully biodegradable.",
              ].map((t) => (
                <p key={t} className="text-[11px] leading-[1.6] text-[#7a7670] tracking-[0.02em]">
                  — {t}
                </p>
              ))}
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
              { stat: "7×",    label: "Lighter than cotton" },
              { stat: "600g",  label: "Fill weight" },
              { stat: "100%",  label: "Natural. Zero synthetics." },
              { stat: "GOTS",  label: "Certified organic cotton shell" },
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

      {/* Construction breakdown */}
      <section className="py-24 section-container">
        <div className="mb-14">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Construction</p>
          <h2 className="text-[32px] md:text-[38px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.15]">
            Nature&apos;s lightest fill. Nothing added.
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

      {/* Who Eirelle is for */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Designed with intent</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">Who Eirelle is for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0ddd6]">
            {whoItIsFor.map((card) => (
              <div key={card.heading} className="bg-[#f2f0eb] p-8 flex flex-col gap-4">
                <span className="text-[#c4a882] text-lg leading-none">◎</span>
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
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">How Eirelle stacks up</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 w-[38%]" />
                  <th className="pb-6 w-[20%]">
                    <div className="bg-[#1a1a1a] text-[#f2f0eb] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-center">
                      Eirelle
                    </div>
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Ecosa
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Avocado
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-[#f2f0eb]" : "bg-[#eeebe4]"}>
                    <td className="py-4 pl-2 pr-4 text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]">
                      {row.label}
                    </td>
                    <td className="py-4 text-center bg-[#1a1a1a]/[0.04] border-x border-[#1a1a1a]/10">
                      {row.type === "bool" ? (
                        row.eirelle ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c4a882]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#1a1a1a]">{row.eirelle as string}</span>
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
