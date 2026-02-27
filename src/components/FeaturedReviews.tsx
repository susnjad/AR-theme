"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Sydney",
    rating: 5,
    product: "Noira Mattress",
    text: "The Noira mattress has completely transformed my sleep. I wake up feeling genuinely rested for the first time in years.",
  },
  {
    name: "James T.",
    location: "Melbourne",
    rating: 5,
    product: "Lierre Duvet Cover",
    text: "The Weave linen is incredible — light, cool, and gets softer every wash. Worth every cent.",
  },
  {
    name: "Emma L.",
    location: "Brisbane",
    rating: 5,
    product: "Eirelle Kapok Pillow",
    text: "Finally a brand that doesn't over-promise. The quality speaks for itself. My pillow is perfect.",
  },
  {
    name: "Sophie K.",
    location: "Adelaide",
    rating: 5,
    product: "Sorelle Duvet Cover",
    text: "I've tried every linen brand out there. Aurum Rest is on another level — temperature regulation is real.",
  },
  {
    name: "Michael R.",
    location: "Perth",
    rating: 5,
    product: "Veyre Weighted Blanket",
    text: "The attention to detail is extraordinary. From the packaging to the product itself, everything feels considered.",
  },
  {
    name: "David W.",
    location: "Canberra",
    rating: 5,
    product: "Vera Fitted Sheet",
    text: "Bought the Vera set on a whim. Now I can't imagine sleeping on anything else.",
  },
];

export default function FeaturedReviews() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    setPrev(active);
    setActive(next);
    setTimeout(() => setPrev(null), 600);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % reviews.length;
        setPrev(a);
        setTimeout(() => setPrev(null), 600);
        return next;
      });
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="bg-[#f9f9f7] py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#6b6760] mb-4">Reviews</p>
            <h2 className="text-[36px] md:text-[48px] font-light tracking-[-0.03em] text-[#1a1a1a] leading-[1.0]">
              Trusted by sleepers<br />across Australia
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#c9a96e] text-[14px]">★</span>
              ))}
            </div>
            <span className="text-[12px] text-[#6b6760] tracking-[0.08em]">4.9 / 5 average</span>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e5df]">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#f9f9f7] p-8 md:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(r.rating)].map((_, i) => (
                    <span key={i} className="text-[#c9a96e] text-[11px]">★</span>
                  ))}
                </div>
                <p className="text-[14px] leading-[1.9] text-[#5a5751] font-light">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[12px] font-medium text-[#1a1a1a]">{r.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#6b6760] mt-0.5">{r.location}</p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#6b6760] border border-[#e8e5df] px-2.5 py-1">
                  {r.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile fade carousel */}
        <div className="md:hidden">
          <div style={{ position: "relative", overflow: "hidden", minHeight: 220 }}>
            {reviews.map((r, i) => {
              const isActive = i === active;
              const isPrev = i === prev;
              return (
                <div
                  key={r.name}
                  style={{
                    position: isActive || isPrev ? "absolute" : "absolute",
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : isPrev ? "translateY(-8px)" : "translateY(12px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    pointerEvents: isActive ? "auto" : "none",
                    background: "#f9f9f7",
                    border: "1px solid #e8e5df",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                      {[...Array(r.rating)].map((_, j) => (
                        <span key={j} style={{ color: "#c9a96e", fontSize: 11 }}>★</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 13, lineHeight: 1.9, color: "#5a5751", fontWeight: 300 }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 500, color: "#1a1a1a" }}>{r.name}</p>
                      <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.18em", color: "#6b6760", marginTop: 2 }}>{r.location}</p>
                    </div>
                    <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: "#6b6760", border: "1px solid #e8e5df", padding: "4px 10px" }}>
                      {r.product}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); startTimer(); }}
                style={{
                  width: active === i ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: active === i ? "#c9a96e" : "#d4cfc8",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
