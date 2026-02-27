'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const images = [
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_47e80877-257b-40a6-8ab9-ebb9f14f6840.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/bamboo.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/icesilk.png?v=1763167315",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/filling_f6fb1355-a17a-4756-a695-17ef521572ac.png?v=1763167315",
];

const layers = [
  {
    number: "01",
    name: "Ice Silk Surface",
    material: "Cool-touch top side",
    description:
      "The Ice Silk face activates on contact — drawing heat away from skin within seconds. Ideal for warm sleepers or anyone who runs hot through the night. Smooth, silky, and consistently cool.",
  },
  {
    number: "02",
    name: "Bamboo Rayon Surface",
    material: "Breathable bottom side",
    description:
      "Flip to bamboo for a softer, more insulating feel during cooler nights. Bamboo rayon regulates moisture and stays naturally breathable — no synthetic treatments, no overheating.",
  },
  {
    number: "03",
    name: "Adaptive Shredded Memory Foam",
    material: "Adjustable fill",
    description:
      "Unlike solid foam, shredded clusters contour precisely to your head and neck, eliminating pressure points. Add or remove fill to dial in your preferred loft — anywhere from 4\" to 7\".",
  },
  {
    number: "04",
    name: "Zip-Off Hypoallergenic Cover",
    material: "Easy-care shell",
    description:
      "The removable cover is hypoallergenic and pilling-resistant by design. Machine wash on cold and it returns to original softness — no degradation, no stiffness over time.",
  },
];

const specs = [
  {
    label: "Craftsmanship",
    content:
      "Dual-Surface Design — Cool-touch Ice Silk on one side, breathable bamboo rayon on the other. Flip for instant temperature adjustment.\n\nAdaptive Shredded Memory Foam — Remove or add up to 20% of fill for personalised support and loft.\n\nPressure-Relief Technology — Clinically tested to reduce neck tension by 31% within two weeks of use.\n\nRemovable Cover System — Hypoallergenic, zip-off design resists pilling for lasting comfort and easy maintenance.\n\nSustainable Construction — Responsibly sourced bamboo and recyclable foam components.",
  },
  {
    label: "Dimensions",
    content: "Standard: 48 × 73cm\nHeight range: 4\" – 7\" (adjustable)",
  },
  {
    label: "Certifications",
    content: "OEKO-TEX® Standard 100 certified\nVegan-friendly materials",
  },
  {
    label: "Care",
    content:
      "Machine wash cover on cold, gentle cycle.\nAir dry or tumble dry low to preserve fibre integrity.\nDo not bleach or iron.",
  },
  {
    label: "Returns",
    content: "30-day return policy for unused items in original packaging.",
  },
];

const comparisons = [
  { label: "Price",                    duette: "AUD $110",    col2: "AUD $189",    col3: "AUD $149",    type: "text" },
  { label: "Dual-Surface Design",      duette: true,          col2: false,         col3: false,         type: "bool" },
  { label: "Adjustable Loft",          duette: true,          col2: true,          col3: false,         type: "bool" },
  { label: "Ice Silk Cooling Layer",   duette: true,          col2: false,         col3: false,         type: "bool" },
  { label: "OEKO-TEX® Certified",      duette: true,          col2: true,          col3: true,          type: "bool" },
  { label: "Zip-Off Washable Cover",   duette: true,          col2: true,          col3: true,          type: "bool" },
  { label: "Neck Tension Reduction",   duette: "31% tested",  col2: "—",           col3: "—",           type: "text" },
  { label: "Vegan Materials",          duette: true,          col2: false,         col3: true,          type: "bool" },
];

const whoItIsFor = [
  {
    heading: "The temperature-sensitive sleeper",
    body: "Two distinct surfaces mean you're never stuck. Flip to Ice Silk when you run hot, bamboo when you need warmth. One pillow, two climates.",
  },
  {
    heading: "Side sleepers with neck pain",
    body: "A 7\" loft aligns the cervical spine for side sleepers. Clinically tested to reduce neck tension by 31% within two weeks — without needing a physiotherapist.",
  },
  {
    heading: "Back and stomach sleepers",
    body: "Remove fill to bring loft down to 4\" — the sweet spot for back and stomach sleepers who need support without elevation. Adjusts in seconds.",
  },
  {
    heading: "Allergy and sensitivity sufferers",
    body: "OEKO-TEX® certified materials, hypoallergenic fill, and a zip-off cover that machine washes clean. Designed to coexist with sensitive skin and respiratory conditions.",
  },
  {
    heading: "Couples with different preferences",
    body: "Each Duette is independently adjustable. No compromises — one partner adjusts for firm support, the other for a softer feel.",
  },
  {
    heading: "The considered buyer",
    body: "Responsibly sourced bamboo, recyclable foam components, and vegan-friendly construction. No greenwashing — just material decisions with a paper trail.",
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
      name: "Eirelle",
      subtitle: "Kapok Pillow",
      price: "AUD $160",
      image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_4c011666-b6f1-4406-b6cb-5bd0f712ab97.png?v=1763167315",
      href: "/products/eirelle-kapok-pillow",
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

export default function DuettePDP() {
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
          <span className="text-[#1a1a1a]">Duette</span>
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
                alt="Duette Dual Sided Pillow"
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
              Duette
            </h1>
            <p className="text-[15px] font-light text-[#5a5651] mb-6">Dual Sided Pillow</p>

            {/* Price */}
            <p className="text-[22px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-8">
              AUD $110.00
            </p>

            {/* Surface callout */}
            <div className="mb-8 grid grid-cols-2 gap-px bg-[#e0ddd6]">
              <div className="bg-[#f2f0eb] p-4">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#9b9790] mb-1.5">Side A</p>
                <p className="text-[13px] font-light text-[#1a1a1a]">Ice Silk</p>
                <p className="text-[11px] text-[#7a7670] mt-1">Cool-touch surface</p>
              </div>
              <div className="bg-[#f2f0eb] p-4">
                <p className="text-[9px] uppercase tracking-[0.24em] text-[#9b9790] mb-1.5">Side B</p>
                <p className="text-[13px] font-light text-[#1a1a1a]">Bamboo Rayon</p>
                <p className="text-[11px] text-[#7a7670] mt-1">Breathable warmth</p>
              </div>
            </div>

            {/* Loft callout */}
            <div className="mb-8 px-4 py-4 border border-[#e0ddd6]">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#9b9790] mb-2">Adjustable Loft</p>
              <p className="text-[12px] leading-[1.7] text-[#5a5651] font-light">
                Add or remove shredded memory foam fill to dial in your preferred height — from 4&quot; (back / stomach sleepers) to 7&quot; (side sleepers). No tools. No zippers.
              </p>
            </div>

            {/* CTA */}
              <button
                  onClick={() => addItem({
                    id: "duette-adjustable-dual-sided-pillow",
                    productHandle: "duette-adjustable-dual-sided-pillow",
                    name: "Duette — Dual Sided Pillow",
                    variant: "Standard",
                    price: 110,
                    image: images[0],
                    shopifyUrl: "https://aurumrest.com/products/duette-adjustable-dual-sided-pillow",
                    variantId: 45009226399978,
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
                "OEKO-TEX® certified. Vegan-friendly materials.",
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
              { stat: "2",     label: "Surfaces. One pillow." },
              { stat: "31%",   label: "Reduction in neck tension (clinically tested)" },
              { stat: "4–7\"", label: "Adjustable loft range" },
              { stat: "2024",  label: "Sleep Award Winner" },
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
            Two surfaces. One adaptive core.
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

      {/* Who Duette is for */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Designed with intent</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">Who Duette is for</h2>
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
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">How Duette stacks up</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 w-[38%]" />
                  <th className="pb-6 w-[20%]">
                    <div className="bg-[#1a1a1a] text-[#f2f0eb] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-center">
                      Duette
                    </div>
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Ecosa
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Koala
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
                        row.duette ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c4a882]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#1a1a1a]">{row.duette as string}</span>
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
