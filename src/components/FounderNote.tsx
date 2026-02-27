"use client";

import FadeIn from "./FadeIn";

export default function FounderNote() {
  return (
    <section className="py-24 bg-[#f2f0eb]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          <FadeIn>
            <div className="w-full overflow-hidden">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6db92413-7072-4335-862a-2d1c71c650e1/download-2026-02-23T124634.623-resized-1771811208503.webp?width=1600"
                alt="Founder"
                className="w-full h-auto object-cover"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col justify-start pt-0 md:pt-4">
            <FadeIn delay={0.1}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#9b9790] mb-8">
                A Note From Dave
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="text-[20px] md:text-[22px] font-normal italic tracking-[-0.02em] text-[#1a1a1a] leading-[1.5] mb-6 max-w-[460px]">
                &ldquo;Aurum Rest started out of a simple frustration: nothing in sleep felt thoughtful.&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-[13px] leading-[2] text-[#6b6862] mb-10 max-w-[400px]">
                Everything was louder than it needed to be — too many claims, too many features.
                I wanted the opposite. Things that feel good to live with and don&rsquo;t try to convince you of anything.
                If something doesn&rsquo;t make sleep meaningfully better, it&rsquo;s not in the mix.
                That&rsquo;s the guiding principle.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="border-t border-[#d8d5cf] pt-5 max-w-[400px]">
                <p className="text-[12px] font-medium tracking-[-0.01em] text-[#1a1a1a]">Dave</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#9b9790] mt-1">
                  Founder, Aurum Rest
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
