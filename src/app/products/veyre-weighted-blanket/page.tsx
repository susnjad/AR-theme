'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const images = [
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_dafe98f9-f34d-49bb-b8bc-34680879d15f.png?v=1770872229",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/lifestyle.png?v=1770872229",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/glassbeadfilling.jpg?v=1770872238",
  "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/logocloseup.jpg?v=1770872238",
];

const sizes = ["Grand Single", "Queen", "King"];
const weights = ["5 kg", "7 kg", "10 kg"];

const pricing: Record<string, Record<string, number>> = {
  "Grand Single": { "5 kg": 280, "7 kg": 280, "10 kg": 280 },
  "Queen":        { "5 kg": 340, "7 kg": 390, "10 kg": 390 },
  "King":         { "5 kg": 390, "7 kg": 430, "10 kg": 430 },
};

const variantIds: Record<string, Record<string, number>> = {
  "Grand Single": { "5 kg": 45007956508906, "7 kg": 45008401236202, "10 kg": 45008401268970 },
  "Queen":        { "5 kg": 45007956541674, "7 kg": 45008401301738, "10 kg": 45008401334506 },
  "King":         { "5 kg": 45007956574442, "7 kg": 45008401367274, "10 kg": 45008401400042 },
};

const dimensions: Record<string, string> = {
  "Grand Single": "150 × 220cm",
  "Queen":        "200 × 230cm",
  "King":         "230 × 240cm",
};

const weightGuidance: Record<string, string> = {
  "5 kg":  "Recommended for children and lighter sleepers (approx. 10% of body weight guideline). Gentle, calm pressure.",
  "7 kg":  "Most popular for adults. Balanced deep-pressure stimulation for anxiety relief and deeper sleep.",
  "10 kg": "Recommended for heavier sleepers or those seeking more pronounced pressure therapy benefits.",
};

const layers = [
  {
    number: "01",
    name: "Bamboo Viscose Shell",
    material: "400GSM weave",
    description:
      "Wicks moisture 50% faster than cotton and stays naturally breathable regardless of season. The fabric is soft against skin while remaining temperature-neutral — no overheating, no clammy sensation.",
  },
  {
    number: "02",
    name: "Precision Glass Beads",
    material: "Non-toxic, odourless fill",
    description:
      "Calibrated to ±2% accuracy across every micro-pocket, the glass beads distribute weight with surgical consistency. Non-toxic and odourless — no shifting, no pooling, no pressure hot spots.",
  },
  {
    number: "03",
    name: "Quilted Micro-Pockets",
    material: "Reinforced channel stitching",
    description:
      "Each pocket is individually sealed with reinforced stitching to prevent bead migration over time. The pocket grid ensures even distribution across the full blanket surface, not just the centre.",
  },
  {
    number: "04",
    name: "Antimicrobial Finish",
    material: "Naturally inherent to bamboo",
    description:
      "Bamboo viscose retains its natural antimicrobial properties through the manufacturing process. No chemical treatments. Resistant to dust mites and bacteria — critical for those with allergies or sensitive skin.",
  },
];

const specs = [
  {
    label: "Craftsmanship",
    content:
      "Bamboo Viscose Shell — 400GSM weave wicks moisture 50% faster than cotton, naturally breathable yet softly insulating.\n\nPrecision Glass Beads — Non-toxic, odourless fill calibrated to ±2% for consistent, gentle pressure distribution.\n\nCalibrated Weight Options — 5kg, 7kg, and 10kg to suit different body weights and sensitivity preferences.\n\nReinforced Micro-Pocket Quilting — Migration-resistant stitching keeps beads evenly distributed across every sleep position.",
  },
  {
    label: "Dimensions",
    content: "Grand Single: 150 × 220cm\nQueen: 200 × 230cm\nKing: 230 × 240cm",
  },
  {
    label: "Certifications",
    content: "OEKO-TEX® Standard 100 certified\nVegan-friendly materials",
  },
  {
    label: "Care",
    content:
      "Machine wash cover on cold, gentle cycle.\nSpot clean blanket with mild soap as needed.\nAir dry or tumble dry low — avoid high heat.\nDo not dry clean.",
  },
  {
    label: "Returns",
    content: "30-day return policy for unused items in original packaging.",
  },
];

const comparisons = [
  { label: "Price (Queen / 7kg)",   veyre: "AUD $390",   col2: "AUD $449",   col3: "AUD $419",   type: "text" },
  { label: "Bamboo Viscose Shell",  veyre: true,         col2: false,        col3: false,        type: "bool" },
  { label: "Precision Glass Beads", veyre: true,         col2: true,         col3: false,        type: "bool" },
  { label: "Bead Migration Guard",  veyre: true,         col2: false,        col3: false,        type: "bool" },
  { label: "OEKO-TEX® Certified",   veyre: true,         col2: true,         col3: true,         type: "bool" },
  { label: "Vegan Materials",       veyre: true,         col2: false,        col3: true,         type: "bool" },
  { label: "Multiple Weights",      veyre: "5 / 7 / 10kg", col2: "7 / 9kg", col3: "6.5 / 9kg",  type: "text" },
  { label: "Machine Washable",      veyre: true,         col2: true,         col3: true,         type: "bool" },
];

const whoItIsFor = [
  {
    heading: "The anxious sleeper",
    body: "Deep-pressure stimulation from Veyre's precision-calibrated glass beads activates the parasympathetic nervous system — reducing cortisol and quieting racing thoughts before sleep.",
  },
  {
    heading: "The warm sleeper",
    body: "Bamboo viscose wicks moisture 50% faster than cotton and stays breathable through the night. Veyre adds weight without adding heat.",
  },
  {
    heading: "Those with ADHD or restlessness",
    body: "The steady, full-body pressure of a weighted blanket is widely used to reduce hyperactivity and improve sleep onset time — without medication.",
  },
  {
    heading: "Allergy and sensitivity sufferers",
    body: "Naturally antimicrobial bamboo fibres resist dust mites and bacteria. No chemical treatments — just inherent material properties.",
  },
  {
    heading: "Couples with different weights",
    body: "Three size and three weight options allow each person to choose exactly what suits their body, preference, and sleep position.",
  },
  {
    heading: "The health-conscious buyer",
    body: "OEKO-TEX® certification means every fibre and bead has been tested for harmful substances. Vegan materials, no compromises.",
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

export default function VeyrePDP() {
  const [activeImage, setActiveImage]     = useState(0);
  const [selectedSize, setSelectedSize]   = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(1); // default 7kg
  const { addItem } = useCart();

  const price = pricing[sizes[selectedSize]][weights[selectedWeight]];

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <div className="section-container pt-28 pb-0">
        <nav className="flex gap-2 items-center text-[10px] uppercase tracking-[0.22em] text-[#9b9790]">
          <Link href="/collections/oasis" className="hover:text-[#1a1a1a] transition-colors">Oasis</Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">Veyre</span>
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
                alt="Veyre Weighted Blanket"
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
              Veyre
            </h1>
            <p className="text-[15px] font-light text-[#5a5651] mb-6">Weighted Blanket</p>

            {/* Price */}
            <p className="text-[22px] font-light tracking-[-0.01em] text-[#1a1a1a] mb-8">
              AUD ${price.toLocaleString()}.00
            </p>

            {/* Size selector */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9790] mb-3">Size</p>
              <div className="flex flex-col gap-2">
                {sizes.map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(i)}
                    className={`flex justify-between items-center px-4 py-3.5 border text-left transition-all duration-200 ${
                      selectedSize === i
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#f2f0eb]"
                        : "border-[#e0ddd6] text-[#1a1a1a] hover:border-[#1a1a1a]"
                    }`}
                  >
                    <span className="text-[12px] tracking-[0.04em]">{s}</span>
                    <span className={`text-[11px] ${selectedSize === i ? "text-[#a0a0a0]" : "text-[#9b9790]"}`}>
                      {dimensions[s]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Weight selector */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9790] mb-3">Weight</p>
              <div className="flex gap-2">
                {weights.map((w, i) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(i)}
                    className={`flex-1 py-3 border text-center text-[12px] tracking-[0.04em] transition-all duration-200 ${
                      selectedWeight === i
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#f2f0eb]"
                        : "border-[#e0ddd6] text-[#1a1a1a] hover:border-[#1a1a1a]"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-[11px] leading-[1.7] text-[#7a7670] font-light">
                {weightGuidance[weights[selectedWeight]]}
              </p>
            </div>

            {/* CTA */}
              <button
                onClick={() => addItem({
                    id: `veyre-${sizes[selectedSize]}-${weights[selectedWeight]}`,
                    productHandle: "veyre-weighted-blanket",
                    name: "Veyre — Weighted Blanket",
                    variant: `${sizes[selectedSize]} / ${weights[selectedWeight]}`,
                    price,
                    image: images[0],
                    shopifyUrl: "https://aurumrest.com/products/veyre-weighted-blanket",
                    variantId: variantIds[sizes[selectedSize]][weights[selectedWeight]],
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
              { stat: "±2%",   label: "Bead calibration accuracy" },
              { stat: "400",   label: "GSM bamboo viscose shell" },
              { stat: "50%",   label: "Faster moisture wicking vs cotton" },
              { stat: "3",     label: "Weight options: 5, 7, 10kg" },
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
            Built for pressure. Engineered for rest.
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

      {/* Who Veyre is for */}
      <section className="py-24 border-t border-[#e0ddd6]">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Designed with intent</p>
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">Who Veyre is for</h2>
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
            <h2 className="text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">How Veyre stacks up</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 w-[38%]" />
                  <th className="pb-6 w-[20%]">
                    <div className="bg-[#1a1a1a] text-[#f2f0eb] px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-center">
                      Veyre
                    </div>
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Ecosa
                  </th>
                  <th className="pb-6 w-[20%] text-[10px] uppercase tracking-[0.22em] text-[#9b9790] font-normal text-center px-4">
                    Oodie
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
                        row.veyre ? (
                          <span className="inline-block w-3.5 h-3.5 rounded-full bg-[#c4a882]" />
                        ) : (
                          <span className="text-[#9b9790] text-sm">×</span>
                        )
                      ) : (
                        <span className="text-[13px] font-light text-[#1a1a1a]">{row.veyre as string}</span>
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
