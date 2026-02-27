"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function TwelveMoonsClub() {
  return (
      <section className="py-24 bg-[#f2f0eb]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            <div className="flex flex-col justify-start">
              <FadeIn delay={0}>
                <p className="text-[9px] tracking-[0.3em] uppercase text-[#8a7f72] mb-8">
                  Membership
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-[32px] md:text-[40px] font-semibold tracking-[-0.03em] text-[#1a1a18] leading-[1.1] mb-6">
                  Twelve<br />Moons Club
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-[13px] leading-[2] text-[#5a5448] mb-10 max-w-[380px]">
                  Twelve Moons Club delivers curated essentials throughout the year,
                  ensuring your rest stays optimised as the months unfold.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#8a7f72] hover:text-[#1a1a18] transition-colors duration-300 group self-start"
                >
                  Learn More
                  <span className="w-5 h-px bg-[#8a7f72]/40 transition-all duration-500 group-hover:w-10 group-hover:bg-[#1a1a18]/40" />
                </Link>
              </FadeIn>
            </div>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden w-full aspect-[3/4]">
              <img
                src="https://cdn.shopify.com/s/files/1/0691/8999/2682/files/twelve_moons_club_hero.png?v=1769062626"
                alt="Twelve Moons Club"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
