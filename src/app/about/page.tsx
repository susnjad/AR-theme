import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aurum Rest",
  description: "The story behind Aurum Rest.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f7f4ed] min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Text */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-6">
                Our Purpose
              </p>
              <h1 className="font-serif font-light text-[44px] md:text-[60px] leading-[1.1] text-[#414141] mb-10">
                Built on the
                <br />
                <em>logic of rest.</em>
              </h1>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6b6b] mb-6">
                Aurum Rest was founded on a simple premise: that the objects we sleep on deserve the same rigour and restraint as the best things we own. Not the loudest. Not the cheapest. The most considered.
              </p>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6b6b] mb-6">
                Each product is developed over years, not months. Materials are sourced for performance first. Everything is made to improve with time — in the way good things do.
              </p>
              <p className="font-sans font-light text-[14px] md:text-[15px] leading-[1.9] text-[#6b6b6b]">
                Based in London. Made in Europe. Designed for rest.
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop"
                alt="Aurum Rest studio"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#ede8d0]" id="materials">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                title: "Materials",
                body: "Every fibre, foam, and fabric is chosen for what it does — not what it sounds like. Belgian flax. Borosilicate glass. Phase-change IceSense. No marketing names without substance.",
              },
              {
                title: "Construction",
                body: "We use traditional methods where they produce better results, and modern engineering where precision matters. The Noira spring unit is hand-assembled in the UK. Each coil individually tensioned.",
              },
              {
                title: "Sustainability",
                body: "Sourced from certified suppliers. No unnecessary packaging. Products designed to last a decade, not a season. The Twelve Moons pillow refresh programme extends the life of every piece.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#a09285] mb-4">
                  {item.title}
                </p>
                <p className="font-sans font-light text-[14px] leading-[1.9] text-[#6b6b6b]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
