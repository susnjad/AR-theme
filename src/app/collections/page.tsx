import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductAccordion from "@/components/ProductAccordion";
import { WeightedBlanketDiagram, KapokFiberDiagram } from "@/components/ProductDiagrams";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Essentials — Aurum Rest",
  description: "The complete Aurum Rest collection. Hybrid mattress, weighted blanket, linen bedding, kapok pillow, bamboo pillowcases.",
};

const products = [
  {
    id: "weighted-blanket",
    name: "Weighted Blanket",
    subtitle: "Precision weight for deeper calm",
    price: "£380",
    description:
      "6.8 kilograms of borosilicate glass micro-beads, distributed uniformly across 96 hand-stitched pockets. Breathable 300-thread cotton shell. Designed to apply gentle, consistent pressure — not warmth.",
    image: "https://images.unsplash.com/photo-1629679580636-8d4a1e2b7c3d?q=80&w=1000&auto=format&fit=crop",
    diagram: <WeightedBlanketDiagram />,
    accordionItems: [
      { label: "Materials", content: "Outer: 300TC long-staple cotton. Fill: borosilicate glass micro-beads, 6.8kg. Inner loop system to prevent fill migration." },
      { label: "Construction", content: "96 evenly distributed pockets. Double-stitched perimeter seaming. Duvet-cover compatible with 8 corner ties." },
      { label: "Care", content: "Machine wash at 30°C, gentle cycle. Do not spin at high speed. Lay flat to dry or tumble dry low." },
      { label: "Shipping & Returns", content: "Free delivery within 5–7 working days. 30-day return window if unused and in original packaging. Klarna available." },
    ],
  },
  {
    id: "linen-bedding",
    name: "Linen Bedding Set",
    subtitle: "Stone-washed Belgian flax",
    price: "From £195",
    description:
      "Woven from single-origin Belgian flax. Stone-washed for immediate softness without the stiffness of new linen. Breathes through the night. Improves with every wash.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
    diagram: null,
    accordionItems: [
      { label: "Materials", content: "100% European flax linen. OEKO-TEX Standard 100 certified. Stone-washed and enzyme-finished. No chemical softeners." },
      { label: "Construction", content: "170gsm woven weight. Buttonhole and tie fastening on duvet cover. Envelope closure on pillowcases. Available in Dune, Slate, and Chalk." },
      { label: "Care", content: "Machine wash at 40°C. Tumble dry low or line dry. Iron lightly if desired — or embrace the natural texture." },
      { label: "Shipping & Returns", content: "Free delivery within 5–7 working days. 30-day return window if unwashed. Klarna available." },
    ],
  },
  {
    id: "kapok-pillow",
    name: "Kapok Pillow",
    subtitle: "Silk-weight natural fiber",
    price: "£185",
    description:
      "Harvested from the seed pods of the Ceiba tree. Kapok fiber is naturally hollow, making it eight times lighter than cotton at equivalent volume. Adjustable fill. Hypoallergenic.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1000&auto=format&fit=crop",
    diagram: <KapokFiberDiagram />,
    accordionItems: [
      { label: "Materials", content: "Fill: 100% sustainably harvested kapok fiber. Cover: 300TC long-staple cotton. No synthetic materials. Naturally hypoallergenic and dust-mite resistant." },
      { label: "Construction", content: "Adjustable fill volume via discreet zipper. Two densities available: Standard and High Loft. Inner case prevents fill escape." },
      { label: "Care", content: "Hand wash or gentle machine wash at 30°C. Air dry only. Do not tumble dry. Re-fluff while damp." },
      { label: "Shipping & Returns", content: "Free delivery within 5–7 working days. 30-day return window if unused. Klarna available." },
    ],
  },
  {
    id: "bamboo-pillowcases",
    name: "Bamboo Pillowcases",
    subtitle: "Breathable. Cool. Refined.",
    price: "£95",
    description:
      "Woven from 100% OEKO-TEX certified bamboo viscose. Significantly cooler than cotton against skin. Naturally antimicrobial. A pair in a cloth envelope.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
    diagram: null,
    accordionItems: [
      { label: "Materials", content: "100% bamboo viscose, 400TC weave. OEKO-TEX Standard 100 certified. Naturally antimicrobial and thermoregulating." },
      { label: "Construction", content: "Envelope closure. Available in Standard (50×75cm) and King (50×90cm). Sold as a pair. Three colorways: Ivory, Fog, Sand." },
      { label: "Care", content: "Machine wash at 30°C, gentle cycle. Tumble dry low or line dry. Do not bleach or iron at high heat." },
      { label: "Shipping & Returns", content: "Free delivery within 5–7 working days. 30-day return window if unused and in original packaging." },
    ],
  },
];

export default function CollectionsPage() {
  return (
    <div className="bg-[#f7f4ed] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 text-center">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-5">
          The Collection
        </p>
        <h1 className="font-serif font-light text-[44px] md:text-[64px] leading-[1.1] text-[#414141]">
          Sleep Essentials
        </h1>
        <p className="mt-6 font-sans font-light text-[14px] tracking-[0.03em] text-[#6b6b6b] max-w-sm mx-auto leading-relaxed">
          Each piece designed for a single purpose — deeper, better rest.
        </p>
      </section>

      {/* Products */}
      {products.map((product, i) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-[#f7f4ed]" : "bg-[#ede8d0]"}`}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] hover:scale-[1.04]"
                />
              </div>

              {/* Info */}
              <div>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-5">
                  {product.subtitle}
                </p>
                <h2 className="font-serif font-light text-[36px] md:text-[46px] leading-[1.1] text-[#414141] mb-7">
                  {product.name}
                </h2>
                <p className="font-sans font-light text-[14px] leading-[1.9] text-[#6b6b6b] mb-8">
                  {product.description}
                </p>
                <p className="font-sans font-light text-[22px] tracking-[0.03em] text-[#414141] mb-10">
                  {product.price}
                </p>

                {product.diagram && (
                  <div className="mb-10 p-8 bg-[#f7f4ed]/60 border border-[#d8d2c0]">
                    <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#a09285] mb-6 text-center">
                      Construction Detail
                    </p>
                    {product.diagram}
                  </div>
                )}

                <div className="border-t border-[#d8d2c0]">
                  <ProductAccordion
                    items={product.accordionItems.map((item) => ({
                      label: item.label,
                      content: <p>{item.content}</p>,
                    }))}
                  />
                </div>

                <button className="mt-8 w-full md:w-auto font-sans text-[11px] tracking-[0.25em] uppercase bg-[#414141] text-[#f7f4ed] px-12 py-4 hover:bg-[#5a5a5a] transition-colors duration-400">
                  Add to Cart
                </button>
                <p className="mt-3 font-sans text-[11px] tracking-[0.08em] text-[#a09285]">
                  Free delivery · Klarna available
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
