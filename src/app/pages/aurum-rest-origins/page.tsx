"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const materials = [
{
  name: "TENCEL™",
  body: "Tencel's unique fiber structure provides superior moisture absorption — up to 50% more than cotton — keeping you dry and comfortable throughout the night. Naturally breathable and temperature-regulating, making it ideal for all seasons and sensitive skin."
},
{
  name: "French Linen",
  body: "Breathable and naturally temperature-regulating, keeping you cool in summer and warm in winter."
},
{
  name: "Mulberry Silk",
  body: "Silk's natural proteins and amino acids are gentle on skin, helping to reduce friction that can cause sleep lines, wrinkles, and irritation."
},
{
  name: "Bamboo Viscose",
  body: "The natural properties provide excellent moisture-wicking and temperature regulation to keep you cool and comfortable all night. Our 400 thread count means a tighter weave that's more durable and resistant to pilling, while maintaining the fabric's breathability."
},
{
  name: "Bamboo Rayon",
  body: "Highly absorbent and wicks moisture away from your body up to 3–4 times more effectively than cotton, keeping you dry and comfortable throughout the night."
},
{
  name: "Organic Kapok",
  body: "Completely hypoallergenic and naturally resistant to dust mites, mold, and mildew without any chemical treatments, making it ideal for allergy sufferers and those with sensitive skin."
}];


function MaterialAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-[#e2ded7]">
      {materials.map((m, i) =>
      <div key={m.name}>
          <button
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full flex items-center justify-between py-5 text-left group">

            <span className="font-sans text-[13px] tracking-[0.15em] uppercase text-[#3d3a35]">
              {m.name}
            </span>
            <span
            className="text-[#a09285] transition-transform duration-300"
            style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
          </button>
          <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: open === i ? "200px" : "0px" }}>

            <p className="font-sans font-light text-[14px] leading-[1.9] text-[#6b6862] pb-6 pr-8">
              {m.body}
            </p>
          </div>
        </div>
      )}
    </div>);

}

export default function OriginsPage() {
  return (
    <div className="bg-[#f9f9f7] min-h-screen">
      <Navigation />



      {/* ── FOUNDING STORY ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-[680px] mx-auto px-6 md:px-12 text-center">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-6">
            How it began
          </p>
          <p className="font-serif font-light text-[28px] md:text-[36px] leading-[1.25] text-[#3d3a35] mb-8">
            Aurum Rest began with years of disrupted sleep and uninspired bedding.
          </p>
          <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862] mb-5">
            We couldn't find pieces that felt both refined and restorative. So we created them.
          </p>
          <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862]">
            Aurum — Latin for gold — reflects our pursuit of rest in its purest form.
          </p>
        </div>
      </section>

      {/* ── MATERIALS ── */}
      <section className="py-24 md:py-32 bg-[#f2f0eb]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left: heading + intro */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-6">
                Materials
              </p>
              <h2 className="font-serif font-light text-[36px] md:text-[48px] leading-[1.15] text-[#3d3a35] mb-8">
                Performance-driven,
                <br />
                <em>chosen for the skin.</em>
              </h2>
              <p className="font-sans font-light text-[14px] leading-[1.9] text-[#6b6862]">
                We work exclusively with performance-driven materials. Each is chosen not for trends, but for how it performs against the skin, through the night, over time.
              </p>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-7">
              <MaterialAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
              src="https://cdn.shopify.com/s/files/1/0691/8999/2682/files/download_75.jpg?v=1765855110"
              alt="Aurum Rest craftsmanship"
              className="absolute inset-0 w-full h-full object-cover" />

          </div>
          {/* Text */}
          <div className="flex items-center bg-[#f9f9f7] px-8 md:px-16 lg:px-20 py-20 lg:py-28">
            <div className="max-w-[430px]">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-6">
                Craftsmanship
              </p>
              <h2 className="font-serif font-light text-[32px] md:text-[42px] leading-[1.2] text-[#3d3a35] mb-8">
                Made with quiet
                <br />
                <em>deliberateness.</em>
              </h2>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862] mb-4">
                We collaborate with master weavers and sleep specialists.
              </p>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862]">
                From tailored duvets to silk eye masks, every piece reflects quiet craftsmanship and purposeful design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Text */}
          <div className="flex items-center bg-[#ede8d0] px-8 md:px-16 lg:px-20 py-20 lg:py-28 order-2 lg:order-1">
            <div className="max-w-[430px]">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-6">
                Sustainability
              </p>
              <h2 className="font-serif font-light text-[32px] md:text-[42px] leading-[1.2] text-[#3d3a35] mb-8">
                Sustainability
                <br />
                <em>embedded in every layer.</em>
              </h2>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862] mb-4">
                Renewable fibres, responsible mills, low-impact processes.
              </p>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6862]">
                Luxury, to us, means caring for you and the earth in equal measure.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden order-1 lg:order-2">
              <img
              src="https://cdn.shopify.com/s/files/1/0691/8999/2682/files/download_76.png?v=1765855317"
              alt="Sustainability at Aurum Rest"
              className="absolute inset-0 w-full h-full object-cover" />

          </div>
        </div>
      </section>

        {/* ── COLLECTIONS CTA ── */}
        <section className="py-24 md:py-36 bg-[#f9f9f7]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#a09285] mb-6 text-center">
              Collections
            </p>
            <h2 className="font-serif font-light text-[36px] md:text-[52px] leading-[1.15] text-[#3d3a35] mb-16 max-w-[600px] mx-auto text-center">
              Rest in the
              <br />
              <em>collections.</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
            {
              img: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_heroooo.jpg?v=1771051266",
              label: "Sleep Essentials",
              name: "Oasis",
              description: "Sleep essentials designed with exacting comfort and calibrated support.",
              href: "/collections/oasis"
            },
            {
              img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6db92413-7072-4335-862a-2d1c71c650e1/AurumRest-21AUG25-7337-1772089723770.jpg?width=8000&height=8000&resize=contain",
              label: "Bedding",
              name: "Weave",
              description: "Bedding as second skin. Lightweight, temperature-smart textiles.",
              href: "/collections/weave"
            }].
            map((c) =>
            <a key={c.name} href={c.href} className="group block">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  </div>
                  <div className="pt-5">
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#a09285] mb-1">
                      {c.label}
                    </p>
                    <p className="font-serif font-light text-[28px] md:text-[34px] text-[#3d3a35] leading-none mb-2">
                      {c.name}
                    </p>

                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#3d3a35] border-b border-[#3d3a35] pb-0.5 transition-opacity duration-300 group-hover:opacity-50">
                      Explore
                    </span>
                  </div>
                </a>
            )}
            </div>
          </div>
        </section>

      <Footer />
    </div>);

}