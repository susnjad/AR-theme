'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const products = [
{
  id: "noira-hybrid-mattress",
  name: "Noira",
  subtitle: "Hybrid Mattress",
  price: "From AUD $1,350",
  tag: "Flagship",
  description: "1,072 titanium pocket coils, medical-grade memory foam, and adaptive cooling gel.",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_heroooo.jpg?v=1771051266",
  hoverImage: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_new.png?v=1771051267",
  href: "/products/noira-hybrid-mattress"
},
{
  id: "veyre-weighted-blanket",
  name: "Veyre",
  subtitle: "Weighted Blanket",
  price: "AUD $280",
  tag: null,
  description: "Breathable bamboo viscose with precision glass-bead micro-pockets.",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_dafe98f9-f34d-49bb-b8bc-34680879d15f.png?v=1770872229",
  hoverImage: null,
  href: "/products/veyre-weighted-blanket"
},
{
  id: "organic-kapok-pillow",
  name: "Eirelle",
  subtitle: "Kapok Pillow",
  price: "AUD $160",
  tag: null,
  description: "Pure kapok fiber, eight times lighter than cotton. Naturally hypoallergenic.",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_4c011666-b6f1-4406-b6cb-5bd0f712ab97.png?v=1763167315",
  hoverImage: null,
  href: `/products/eirelle-kapok-pillow`
},
{
  id: "duette-adjustable-dual-sided-pillow",
  name: "Duette",
  subtitle: "Dual Sided Pillow",
  price: "AUD $110",
  tag: null,
  description: "Ice Silk one side, bamboo rayon the other. Shredded memory foam fill.",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_47e80877-257b-40a6-8ab9-ebb9f14f6840.png?v=1763167315",
  hoverImage: null,
  href: "/products/duette-adjustable-dual-sided-pillow"
}];


function ProductCard({ product }: {product: typeof products[0];}) {
  const isInternal = product.href.startsWith("/");

  return (
    <Link
      href={product.href}
      target={isInternal ? undefined : "_blank"}
      className="group block">

      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#e8e5de] mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover object-center transition-all duration-700 ${
          product.hoverImage ? "group-hover:opacity-0" : "group-hover:scale-[1.04]"}`
          }
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

        {product.hoverImage &&
        <Image
          src={product.hoverImage}
          alt={product.name}
          fill
          className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

        }
        {product.tag &&
        <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.24em] bg-[#1a1a1a] text-[#f2f0eb] px-3 py-1.5">
            {product.tag}
          </span>
        }
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.26em] text-[#9b9790] mb-1.5">{product.subtitle}</p>
          <h3 className="text-[20px] font-light tracking-[-0.01em] text-[#1a1a1a] leading-tight mb-2">
            {product.name}
          </h3>

        </div>
          <p className="text-[11px] sm:text-[13px] font-light text-[#1a1a1a] whitespace-nowrap shrink-0 mt-1">
            {product.price}
          </p>
      </div>
    </Link>);

}

export default function OasisPage() {
  return (
    <div className="bg-[#f2f0eb] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-14 section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#e0ddd6] pb-10">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-4">Collection</p>
            <h1 className="text-[52px] md:text-[68px] font-light tracking-[-0.03em] text-[#1a1a1a] leading-[1.0]">
              Oasis
            </h1>
          </div>
          <p className="text-[13px] leading-[1.9] text-[#5a5651] font-light max-w-[360px] md:text-right mb-1 !whitespace-pre-line !whitespace-pre-line">Sleep essentials designed with exacting comfort and calibrated support.

          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="section-container pb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {products.map((product) =>
          <ProductCard key={product.id} product={product} />
          )}
        </div>
      </section>

      <Footer />
    </div>);

}