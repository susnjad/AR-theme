import Link from "next/link";


const CDN = "https://cdn.shopify.com/s/files/1/0691/8999/2682/files";

export default function TwelveMoonsClub() {
  return (
    <main className="bg-[#faf9f7] text-[#3d3a35]">

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 text-center px-6">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-5">
          Membership
        </p>
        <h1 className="font-serif font-light text-[42px] md:text-[58px] leading-[1.15] text-[#3d3a35] mb-6">
          Twelve Moons Club
        </h1>
        <p className="font-sans font-light text-[15px] md:text-[16px] leading-[1.9] text-[#6b6862] max-w-[520px] mx-auto">
          Premium bedding and sleep essentials, delivered to your door on a schedule that suits you. Two tiers. One commitment to better rest.
        </p>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-[#f4f0eb]">
        <div className="max-w-[960px] mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] text-center mb-12">
            How It Works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                num: "1",
                title: "Select Tier",
                body: "Choose Foundation for complete bedding refreshes, or Curator for seasonal sleep accessories.",
              },
              {
                num: "2",
                title: "Customise",
                body: "Foundation members choose their preferred fabric. Curator members receive our seasonal selections.",
              },
              {
                num: "3",
                title: "Receive",
                body: "Premium bedding arrives, delivered free across Australia, right when you need it.",
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <span className="font-serif font-light text-[40px] text-[#c9b99a] leading-none mb-4">
                  {step.num}
                </span>
                <h3 className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#3d3a35] mb-3">
                  {step.title}
                </h3>
                <p className="font-sans font-light text-[14px] leading-[1.8] text-[#6b6862] max-w-[260px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIER COMPARISON ── */}
      <section className="py-24 px-6">
        <div className="max-w-[860px] mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] text-center mb-14">
            Choose Your Tier
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Foundation */}
              <div className="border border-[#3d3a35] p-10 flex flex-col relative">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9b99a] px-4 py-1 font-sans text-[10px] tracking-[0.25em] uppercase text-white">
                  Popular
                </span>
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-3">
                  Foundation
                </p>
              <h2 className="font-serif font-light text-[30px] leading-[1.2] text-[#3d3a35] mb-2">
                Essentials
              </h2>
              <p className="font-sans font-light text-[13px] leading-[1.8] text-[#6b6862] mb-8">
                A complete reset for your sleep environment, delivered twice a year.
              </p>

              <div className="space-y-4 mb-10 flex-1">
                {[
                  ["Frequency", "Every 6 months"],
                  ["What's included", "Fitted sheet, duvet cover, pillowcase pair"],
                  ["Fabric choice", "French Linen, Bamboo Viscose, TENCEL™"],
                  ["Delivery", "Free across Australia"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-[13px] border-b border-[#eee9e1] pb-3">
                    <span className="font-sans text-[#a09285] uppercase tracking-[0.15em] text-[11px]">{label}</span>
                    <span className="font-sans font-light text-[#3d3a35] text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>

                <div className="space-y-2 mb-8">
                  <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#a09285] mb-3">Pricing</p>
                  {[
                    ["Grand Single", "$250 / delivery"],
                    ["Queen", "$280 / delivery"],
                    ["King", "$310 / delivery"],
                    ["Annual prepaid", "Save 10%"],
                  ].map(([size, price]) => (
                    <div key={size} className="flex justify-between text-[13px]">
                      <span className="font-sans font-light text-[#6b6862]">{size}</span>
                      <span className="font-sans text-[#3d3a35]">{price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/pages/12-moons-club/foundation"
                  className="block text-center font-sans text-[11px] tracking-[0.25em] uppercase py-4 bg-[#c9b99a] text-white hover:bg-[#b8a58a] transition-colors"
                  >
                    Join Foundation
                </Link>
            </div>

            {/* Curator */}
            <div className="border border-[#e5e0d8] p-10 flex flex-col relative">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-3">
                Curator
              </p>
              <h2 className="font-serif font-light text-[30px] leading-[1.2] text-[#3d3a35] mb-2">
                Seasonal
              </h2>
              <p className="font-sans font-light text-[13px] leading-[1.8] text-[#6b6862] mb-8">
                Two curated sleep essentials, selected for the season ahead, delivered every three months.
              </p>

              <div className="space-y-4 mb-10 flex-1">
                {[
                  ["Frequency", "Every 3 months"],
                  ["What's included", "2 seasonal sleep essentials"],
                  ["Curation", "Selected by us for the season"],
                  ["Delivery", "Free across Australia"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-[13px] border-b border-[#eee9e1] pb-3">
                    <span className="font-sans text-[#a09285] uppercase tracking-[0.15em] text-[11px]">{label}</span>
                    <span className="font-sans font-light text-[#3d3a35] text-right max-w-[55%]">{value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-8">
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#a09285] mb-3">Pricing</p>
                {[
                  ["All sizes", "$150 / delivery"],
                  ["Annual prepaid", "$560 / year"],
                ].map(([size, price]) => (
                  <div key={size} className="flex justify-between text-[13px]">
                    <span className="font-sans font-light text-[#6b6862]">{size}</span>
                    <span className="font-sans text-[#3d3a35]">{price}</span>
                  </div>
                ))}
              </div>

                <Link
                  href="/pages/12-moons-club/curator"
                  className="block text-center font-sans text-[11px] tracking-[0.25em] uppercase py-4 bg-[#3d3a35] text-[#faf9f7] hover:bg-[#2a2825] transition-colors"
                  >
                    Join Curator
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHICH TIER SUITS YOU ── */}
      <section className="py-20 px-6 bg-[#faf9f7]">
        <div className="max-w-[860px] mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] text-center mb-4">
            Not sure?
          </p>
          <h2 className="font-serif font-light text-[28px] md:text-[36px] text-center text-[#3d3a35] mb-14">
            Which tier suits you?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e5e0d8]">
            {/* Header */}
            <div className="bg-[#f4f0eb] px-8 py-5 border-b border-[#e5e0d8]">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#3d3a35]">Foundation</p>
            </div>
            <div className="bg-[#f4f0eb] px-8 py-5 border-b border-l border-[#e5e0d8]">
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#3d3a35]">Curator</p>
            </div>
            {/* Rows */}
            {[
              ["You want a full bedding refresh twice a year", "You want a surprise each season"],
              ["You prefer to choose your own fabric and colour", "You love being surprised by curated picks"],
              ["You're building or refreshing a complete sleep setup", "You already have bedding and want to add to it"],
              ["You sleep in a specific bed size", "Bed size doesn't matter — accessories fit all"],
              ["You value consistency and matching sets", "You love discovering new sleep products"],
            ].map(([left, right], i) => (
              <>
                <div key={`l-${i}`} className={`px-8 py-5 flex items-start gap-3 border-b border-[#e5e0d8] ${i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}`}>
                  <span className="mt-[3px] w-[6px] h-[6px] rounded-full bg-[#c9b99a] shrink-0" />
                  <p className="font-sans font-light text-[13px] leading-[1.7] text-[#3d3a35]">{left}</p>
                </div>
                <div key={`r-${i}`} className={`px-8 py-5 flex items-start gap-3 border-b border-l border-[#e5e0d8] ${i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}`}>
                  <span className="mt-[3px] w-[6px] h-[6px] rounded-full bg-[#3d3a35] shrink-0" />
                  <p className="font-sans font-light text-[13px] leading-[1.7] text-[#3d3a35]">{right}</p>
                </div>
              </>
            ))}
            {/* CTA row */}
            <div className="px-8 py-6 bg-[#f4f0eb]">
              <Link href="/pages/12-moons-club/foundation" className="inline-block font-sans text-[10px] tracking-[0.25em] uppercase py-3 px-6 bg-[#c9b99a] text-white hover:bg-[#b8a58a] transition-colors">
                Join Foundation
              </Link>
            </div>
            <div className="px-8 py-6 bg-[#f4f0eb] border-l border-[#e5e0d8]">
              <Link href="/pages/12-moons-club/curator" className="inline-block font-sans text-[10px] tracking-[0.25em] uppercase py-3 px-6 bg-[#3d3a35] text-[#faf9f7] hover:bg-[#2a2825] transition-colors">
                Join Curator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEASONS – Curator ── */}
      <section className="py-20 bg-[#f4f0eb] px-6">
        <div className="max-w-[860px] mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] text-center mb-4">
            Curator Tier
          </p>
          <h2 className="font-serif font-light text-[28px] md:text-[36px] text-center text-[#3d3a35] mb-14">
            Curated for every season
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { season: "Spring", desc: "Lightweight comfort essentials." },
              { season: "Summer", desc: "Cooling & breathable accessories." },
              { season: "Autumn", desc: "Transition & grounding pieces." },
              { season: "Winter", desc: "Warm & restorative items." },
            ].map((s) => (
              <div key={s.season} className="py-8 px-4 bg-[#faf9f7]">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a09285] mb-3">
                  {s.season}
                </p>
                <p className="font-sans font-light text-[13px] leading-[1.7] text-[#6b6862]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="py-24 bg-[#3d3a35] text-center px-6">
        <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a09285] mb-5">
          Join the club
        </p>
        <h2 className="font-serif font-light text-[32px] md:text-[44px] leading-[1.2] text-[#faf9f7] mb-6">
          Twelve months of better rest.
        </h2>
        <p className="font-sans font-light text-[14px] leading-[1.9] text-[#b8b0a6] max-w-[440px] mx-auto mb-10">
          Free delivery. No lock-ins. Cancel any time.
        </p>
        <a
          href="https://aurumrest.com/pages/12-moons-club"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-[11px] tracking-[0.3em] uppercase py-4 px-10 bg-[#faf9f7] text-[#3d3a35] hover:bg-[#e8e2d9] transition-colors"
        >
          Get Started
        </a>
      </section>

    </main>
  );
}
