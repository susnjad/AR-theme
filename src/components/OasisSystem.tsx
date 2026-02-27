"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
{
  name: "Noira",
  subtitle: "Hybrid Mattress",
  tag: "The Foundation",
  description: "",
  price: "From $1,290",
  href: "/products/noira-hybrid-mattress",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/noira_heroooo.jpg?v=1771051266"
},
{
  name: "Veyre",
  subtitle: "Weighted Blanket",
  tag: "The Calm",
  description: "Glass micro-beads, bamboo rayon shell, antimicrobial finish. Deep-pressure comfort, cool all night.",
  price: "From $189",
  href: "/products/veyre-weighted-blanket",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_dafe98f9-f34d-49bb-b8bc-34680879d15f.png?v=1770872229"
},
{
  name: "Duette",
  subtitle: "Dual Sided Pillow",
  tag: "The Adaptive",
  description: "Ice Silk on one side, Bamboo Rayon on the other. Adjustable loft for every sleep position.",
  price: "$110",
  href: "/products/duette-adjustable-dual-sided-pillow",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_47e80877-257b-40a6-8ab9-ebb9f14f6840.png?v=1763167315"
},
{
  name: "Eirelle",
  subtitle: "Kapok Pillow",
  tag: "The Natural",
  description: "Pure organic kapok fill. Seven times lighter than cotton. GOTS certified from forest to finish.",
  price: "$160",
  href: "/products/eirelle-kapok-pillow",
  image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero_4c011666-b6f1-4406-b6cb-5bd0f712ab97.png?v=1763167315"
}];


export default function OasisSystem() {
  return (
    <section className="py-24 bg-[#eeeae3]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#6b6862] mb-4">
              The Oasis Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1a1a18] leading-snug">
              Four products.<br />One complete sleep system.
            </h2>
          </div>
          <Link
            href="/collections/oasis"
            className="link-underline text-[11px] uppercase tracking-[0.15em] text-[#6b6862] self-start md:self-auto">

            Explore the collection
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) =>
          <Link
            key={product.name}
            href={product.href}
            className="group block">

              {/* Image */}
                <div className="relative w-full overflow-hidden bg-[#ddd8d0]" style={{ aspectRatio: "3/4" }}>
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] opacity-90 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }} />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#6b6862] bg-[#eeeae3]/90 px-2.5 py-1">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="mt-5">
                <h3 className="text-lg font-light tracking-tight text-[#1a1a18] mb-2">
                  {product.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b6862] mb-3">
                  {product.subtitle}
                </p>
                <span className="link-underline mt-4 inline-block text-[11px] uppercase tracking-[0.15em] text-[#1a1a18]">
                  Shop {product.name}
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}