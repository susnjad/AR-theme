import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductAccordion from "@/components/ProductAccordion";
import { MattressLayerDiagram } from "@/components/ProductDiagrams";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noira Hybrid Mattress — Aurum Rest",
  description:
    "Twelve hundred pocketed coils, slow-response memory foam, and IceSense temperature regulation. Engineered for total suspension.",
};

const accordionItems = [
  {
    label: "Materials",
    content: (
      <div className="space-y-3">
        <p>
          <strong className="font-medium text-[#414141]">IceSense Fabric Cover</strong> — Phase-change temperature regulation woven into a brushed surface for a consistently cool touch.
        </p>
        <p>
          <strong className="font-medium text-[#414141]">Memory Foam Layer (4cm)</strong> — Slow-response, CertiPUR-US certified, zero off-gassing.
        </p>
        <p>
          <strong className="font-medium text-[#414141]">Transition Foam (2cm)</strong> — Medium-density bridging layer for pressure gradient distribution.
        </p>
        <p>
          <strong className="font-medium text-[#414141]">Pocketed Spring Core (24cm)</strong> — 1,200 individually wrapped coils in UK King size. Each coil moves independently.
        </p>
        <p>
          <strong className="font-medium text-[#414141]">Edge Support System</strong> — High-density perimeter foam for full-surface usable sleep area.
        </p>
      </div>
    ),
  },
  {
    label: "Construction",
    content: (
      <div className="space-y-3">
        <p>Total depth 30cm. Double-sided with a firmer base and a softer sleep surface. The quilted cover is removable and machine washable at 40°C.</p>
        <p>Pocket spring unit manufactured in the UK. Each coil is hand-placed and individually tempered. No glued foam composites.</p>
        <p>Available in UK sizes: Single, Double, King, Super King.</p>
      </div>
    ),
  },
  {
    label: "Care",
    content: (
      <div className="space-y-3">
        <p>Rotate 180° every three months during the first year, twice annually thereafter.</p>
        <p>Cover: remove and machine wash at 40°C, cool tumble dry. Do not iron the IceSense surface.</p>
        <p>Spot clean the mattress body with a damp cloth and mild detergent. Allow to air dry completely before replacing cover.</p>
      </div>
    ),
  },
  {
    label: "Shipping & Returns",
    content: (
      <div className="space-y-3">
        <p>Free white-glove delivery to mainland UK within 7–10 working days. Two-person delivery team handles placement and packaging removal.</p>
        <p>Your Noira mattress includes a 100-night sleep trial. If it does not suit you, contact us within the trial period for a full collection and refund. No questions.</p>
        <p>Klarna available at checkout. Spread the cost over 3, 6, or 12 months.</p>
      </div>
    ),
  },
];

export default function NoiraPage() {
  return (
    <div className="bg-[#f7f4ed] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-16 md:pt-20 relative overflow-hidden">
        <div className="relative h-[60vh] md:h-[75vh] min-h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2000&auto=format&fit=crop"
            alt="Noira Hybrid Mattress"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ed]/80 via-transparent to-transparent" />
        </div>
      </section>

      {/* Product Detail */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-5">
              Signature Collection
            </p>
            <h1 className="font-serif font-light text-[44px] md:text-[58px] leading-[1.1] text-[#414141] mb-8">
              Noira
              <br />
              <em>Hybrid Mattress</em>
            </h1>
            <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6b6b] mb-10">
              Twelve hundred individually wrapped coils beneath a temperature-regulating IceSense surface and slow-response memory foam. Engineered to hold you in suspension — not sink you into it.
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#a09285] mb-4">
                Select Size
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Single", price: "£1,650" },
                  { label: "Double", price: "£1,950" },
                  { label: "King", price: "£2,450" },
                  { label: "Super King", price: "£2,850" },
                ].map((size) => (
                  <button
                    key={size.label}
                    className="group px-5 py-3 border border-[#d8d2c0] hover:border-[#414141] transition-colors duration-300 text-left"
                  >
                    <span className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#414141]">
                      {size.label}
                    </span>
                    <span className="block font-sans text-[11px] text-[#a09285] mt-0.5">
                      {size.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-sans font-light text-[28px] tracking-[0.03em] text-[#414141]">
                £2,450
              </span>
              <span className="font-sans text-[11px] tracking-[0.1em] text-[#a09285]">King size</span>
            </div>

            {/* Add to cart */}
            <button className="w-full md:w-auto font-sans text-[11px] tracking-[0.25em] uppercase bg-[#414141] text-[#f7f4ed] px-14 py-5 hover:bg-[#5a5a5a] transition-colors duration-400 mb-4">
              Add to Cart
            </button>

            <div className="flex flex-col gap-2 mt-4">
              <p className="font-sans text-[11px] tracking-[0.08em] text-[#a09285]">
                100-night sleep trial · Free white-glove delivery
              </p>
              <p className="font-sans text-[11px] tracking-[0.08em] text-[#a09285]">
                Pay over 12 months with Klarna
              </p>
            </div>

            {/* Accordion */}
            <div className="mt-14 border-t border-[#d8d2c0]">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>

          {/* Right — diagram */}
          <div className="lg:pt-12">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-8 text-center">
              Construction
            </p>
            <MattressLayerDiagram />
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#c8c1ae] text-center mt-6">
              Cross-section · Noira UK King
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
