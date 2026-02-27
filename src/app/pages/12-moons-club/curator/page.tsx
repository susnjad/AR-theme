"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CDN = "https://cdn.shopify.com/s/files/1/0691/8999/2682/files";

const seasons = [
  {
    name: "Spring",
    months: "Sep — Nov",
    items: ["Vera TENCEL™ Duvet Cover"],
    note: "Crisp, lightweight percale to ease into warmer nights.",
  },
  {
    name: "Summer",
    months: "Dec — Feb",
    items: ["Sorelle Bamboo Viscose Fitted Sheet", "Vian Sleep Mask"],
    note: "Cool-to-touch sateen paired with a light sleep mask.",
  },
  {
    name: "Autumn",
    months: "Mar — May",
    items: ["Lierre French Linen Pillowcase Pair", "Eirelle Kapok Pillow"],
    note: "Textured linen and a naturally buoyant kapok pillow.",
  },
  {
    name: "Winter",
    months: "Jun — Aug",
    items: ["Veyre Weighted Blanket"],
    note: "A single statement piece — grounding, cocooning warmth.",
  },
];

const billing = [
  { key: "per", label: "Per delivery", price: "$150", sub: "/ delivery · 4× per year" },
  { key: "annual", label: "Annual — Save 7%", price: "$560", sub: "/ year · billed once" },
];

export default function CuratorPDP() {
  const [activeBilling, setActiveBilling] = useState(0);

  const plan = billing[activeBilling];

  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-24">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10 text-[10px] uppercase tracking-[0.25em] text-[#9b9790]">
          <Link href="/pages/12-moons-club" className="hover:text-[#3d3a35] transition-colors">Twelve Moons Club</Link>
          <span>/</span>
          <span className="text-[#3d3a35]">Curator</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Image */}
          <div className="relative overflow-hidden bg-[#e8e5de]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6db92413-7072-4335-862a-2d1c71c650e1/AurumRest-21AUG25-7337-1772092714745.jpg?width=8000&height=8000&resize=contain"
                alt="Curator"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-6 left-6">
              <span className="bg-[#f2f0eb] text-[#1a1a1a] text-[10px] uppercase tracking-[0.25em] px-3 py-1.5">
                Curator
              </span>
            </div>
          </div>

          {/* Configuration panel */}
          <div className="flex flex-col justify-center">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-2">Twelve Moons Club</p>
            <h1 className="text-[38px] md:text-[46px] font-light tracking-[-0.02em] text-[#1a1a1a] leading-[1.1] mb-3">
              Curator
            </h1>
            <p className="text-[14px] font-light text-[#6b6862] leading-[1.8] mb-10 max-w-[400px]">
              Two sleep essentials, hand-selected for the season ahead, delivered four times a year. We curate — you rest.
            </p>

            {/* Billing */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">Billing</p>
              <div className="flex gap-0 border border-[#ccc9c2] w-fit">
                {billing.map((b, i) => (
                  <button
                    key={b.key}
                    onClick={() => setActiveBilling(i)}
                    className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                      activeBilling === i
                        ? "bg-[#1a1a1a] text-[#f2f0eb]"
                        : "bg-transparent text-[#1a1a1a] hover:bg-[#f2f0eb]"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

             {/* Delivery schedule */}
               <div className="mb-10">
                 <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-3">What you receive</p>
                 <div className="flex flex-col gap-2">
                   {seasons.map((s) => (
                     <div key={s.name} className="border border-[#ccc9c2] px-4 py-3">
                       <div className="flex items-baseline justify-between mb-1.5">
                         <p className="text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]">{s.name}</p>
                         <p className="text-[10px] text-[#9b9790]">{s.months}</p>
                       </div>
                       <ul className="mb-1">
                         {s.items.map((item) => (
                           <li key={item} className="text-[12px] text-[#3d3a35] leading-[1.7]">— {item}</li>
                         ))}
                       </ul>
                       <p className="text-[11px] text-[#9b9790] italic">{s.note}</p>
                     </div>
                   ))}
                 </div>
               </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <p className="text-[26px] font-light text-[#1a1a1a]">
                AUD {plan.price}
                <span className="text-[13px] text-[#9b9790] ml-2">{plan.sub}</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://aurumrest.com/pages/12-moons-club"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-[#2d2d2b] transition-colors duration-200 text-center mb-3"
            >
              Join Curator — AUD {plan.price}
            </a>
            <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-8">
              Free delivery · Cancel any time
            </p>

            {/* What's included */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e0ddd6] mb-8">
              {[
                { value: "4×", label: "Per year" },
                { value: "2", label: "Items per delivery" },
                { value: "Free", label: "Delivery" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-[15px] font-light text-[#1a1a1a] mb-1">{s.value}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#9b9790]">{s.label}</p>
                </div>
              ))}
            </div>
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
              { num: "01", title: "We select, you receive", desc: "Each quarter we choose two sleep essentials matched to the season — you don't need to do a thing." },
              { num: "02", title: "Seasonal timing", desc: "Deliveries are timed to coincide with seasonal shifts in Australia — Spring, Summer, Autumn, Winter." },
              { num: "03", title: "No lock-in", desc: "Pause or cancel before your next scheduled delivery. No cancellation fees, no questions asked." },
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
