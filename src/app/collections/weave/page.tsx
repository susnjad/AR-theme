'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const lines = [
{
  name: "Lierre",
  material: "French Linen",
  description: "180GSM French flax, garment-washed for natural texture that softens with every wash.",
  tag: "French Linen",
  products: [
  {
    name: "Lierre — Duvet Cover",
    subtitle: "Duvet Cover",
    price: "AUD $250",
    href: "/products/lierre-duvet-cover",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_d5052fdf-c5b4-4f9f-b018-861ab55d2231.png?v=1763167315",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebuladuvetcover_afab5414-d28a-4612-ae4c-24e68d9ef80b.png?v=1763167315",
    meta: ["French Linen", "180 GSM", "OEKO-TEX®"]
  },
  {
    name: "Lierre — Fitted Sheet",
    subtitle: "Fitted Sheet",
    price: "AUD $160",
    href: "/products/lierre-fitted-sheet",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksheet_0175f3cd-dad1-4425-8643-bd811e7c7e14.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebula_sheet.png?v=1763167314",
    meta: ["French Linen", "180 GSM", "OEKO-TEX®"]
  },
  {
    name: "Lierre — Pillowcase Pair",
    subtitle: "Pillowcase Pair",
    price: "AUD $90",
    href: "/products/lierre-pillowcase-pair",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_89a9c01a-f3f3-428e-8e65-bdfeda828f8d.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebulap.case_954444bd-75f4-470e-848a-7b2218eeb4c2.png?v=1763167314",
    meta: ["French Linen", "180 GSM", "OEKO-TEX®"]
  }]

},
{
  name: "Sorelle",
  material: "Bamboo Viscose",
  description: "300TC bamboo viscose sateen — cooling on contact, naturally moisture-wicking.",
  tag: "Bamboo",
  products: [
  {
    name: "Sorelle — Duvet Cover",
    subtitle: "Duvet Cover",
    price: "AUD $140",
    href: "/products/sorelle-duvet-cover",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_178cebf8-4145-4b47-a957-82ce9cbd2b8e.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlduvetcover_63e32d81-7a2b-4e4b-8984-af634da722a2.png?v=1763167314",
    meta: ["Bamboo Viscose", "300 TC", "Sateen Weave"]
  },
  {
    name: "Sorelle — Fitted Sheet",
    subtitle: "Fitted Sheet",
    price: "AUD $90",
    href: "/products/sorelle-fitted-sheet",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusk_sheet.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlsheet_26df79d1-ba03-495e-9f77-cd2fd279d4a6.png?v=1763167314",
    meta: ["Bamboo Viscose", "300 TC", "Sateen Weave"]
  },
  {
    name: "Sorelle — Pillowcase Pair",
    subtitle: "Pillowcase Pair",
    price: "AUD $70",
    href: "/products/sorelle-pillowcase-pair",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_e788193e-bb11-478f-9d4e-ae27374cdaa1.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlp.case_3d069f89-59f9-42e1-ac98-2d7ef85e453b.png?v=1763167314",
    meta: ["Bamboo Viscose", "300 TC", "Sateen Weave"]
  }]

},
{
  name: "Vera",
  material: "TENCEL™ Lyocell",
  description: "300TC TENCEL™ from sustainable eucalyptus — crisp, cool, and climate-neutral.",
  tag: "TENCEL™",
  products: [
  {
    name: "Vera — Duvet Cover",
    subtitle: "Duvet Cover",
    price: "AUD $150",
    href: "/products/vera-duvet-cover",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover.png?v=1763659847",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/nebuladuvetcover.png?v=1763659847",
    meta: ["TENCEL™ Lyocell", "300 TC", "OEKO-TEX®"]
  },
  {
    name: "Vera — Fitted Sheet",
    subtitle: "Fitted Sheet",
    price: "AUD $120",
    href: "/products/vera-fitted-sheet",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksheet.png?v=1763167314",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlsheet.png?v=1763167314",
    meta: ["TENCEL™ Lyocell", "300 TC", "OEKO-TEX®"]
  },
  {
    name: "Vera — Pillowcase Pair",
    subtitle: "Pillowcase Pair",
    price: "AUD $60",
    href: "/products/vera-pillowcase-pair",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case.png?v=1763659820",
    hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/pearlp.case.png?v=1763659820",
    meta: ["TENCEL™ Lyocell", "300 TC", "OEKO-TEX®"]
  }]

}];


const accent = {
  name: "Vian",
  subtitle: "Mulberry Silk Sleep Mask",
  price: "AUD $55",
  href: "/products/vian-sleep-mask",
  tag: "Silk",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/collection.jpg?v=1763167314",
  hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/champagne.jpg?v=1763167315",
  description: "19 momme, 6A-grade mulberry silk. Blocks light. Soothes skin. Nothing extra."
};

function ProductCard({ product }: {product: typeof lines[0]["products"][0];}) {
  return (
    <Link href={product.href} className="group block">
      <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e5de] mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-all duration-700 group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" />

        {product.hoverImage &&
        <Image
          src={product.hoverImage}
          alt={product.name}
          fill
          className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" />
        }
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.26em] text-[#9b9790] mb-1.5">{product.subtitle}</p>
          <h3 className="text-[18px] font-light tracking-[-0.01em] text-[#1a1a1a] leading-tight mb-2">
            {product.name.split("—")[0].trim()}
          </h3>
          {product.meta && (
            <div className="flex flex-wrap gap-1 mt-1">
              {product.meta.map((tag) => (
                <span key={tag} className="text-[8px] uppercase tracking-[0.18em] text-[#7a7670] border border-[#ccc9c2] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-[11px] sm:text-[13px] font-light text-[#1a1a1a] whitespace-nowrap shrink-0 mt-1">{product.price}</p>
      </div>
    </Link>);
}

export default function WeavePage() {
  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-14 section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#e0ddd6] pb-10">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Collection</p>
            <h1 className="text-[52px] md:text-[68px] font-light tracking-[-0.03em] text-[#1a1a1a] leading-[1.0]">
              Weave
            </h1>
          </div>
          <p className="text-[13px] leading-[1.9] text-[#5a5651] font-light max-w-[360px] md:text-right mb-1 !whitespace-pre-line !whitespace-pre-line">Bedding as second skin. Lightweight, temperature-smart textiles.

          </p>
        </div>
      </section>

      {/* Lines */}
      {lines.map((line) =>
      <section key={line.name} className="section-container pb-20">
          {/* Line header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10 pb-6 border-b border-[#e0ddd6]">
            <div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mr-3">{line.tag}</span>
              <h2 className="text-[32px] font-light tracking-[-0.02em] text-[#1a1a1a] mt-2">{line.name}</h2>
            </div>

          </div>
          {/* Product grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-14">
            {line.products.map((product) =>
          <ProductCard key={product.href} product={product} />
          )}
          </div>
        </section>
      )}

      {/* Vian accent */}
      <section className="section-container pb-32">
        <div className="border-t border-[#e0ddd6] pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Link href={accent.href} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] bg-[#e8e5de]">
                <Image
                  src={accent.image}
                  alt={accent.name}
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:opacity-0"
                  sizes="(max-width: 768px) 100vw, 50vw" />

                <Image
                  src={accent.hoverImage}
                  alt={accent.name}
                  fill
                  className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw" />

                <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.24em] bg-[#1a1a1a] text-[#f2f0eb] px-3 py-1.5">
                  {accent.tag}
                </span>
              </div>
            </Link>
            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">The Accent</p>
              <h2 className="text-[40px] font-light tracking-[-0.02em] text-[#1a1a1a] mb-4">{accent.name}</h2>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9b9790] mb-6">{accent.subtitle}</p>
              <p className="text-[13px] leading-[1.9] text-[#5a5651] font-light max-w-[380px] mb-8">
                {accent.description}
              </p>
              <div className="flex items-center justify-between max-w-[380px]">
                <Link href={accent.href} className="link-underline text-[11px] uppercase tracking-[0.15em] text-[#1a1a1a]">
                  Shop Vian
                </Link>
                <span className="text-[13px] font-light text-[#1a1a1a]">{accent.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}