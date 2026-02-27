"use client";

const reviews = [
  { name: "Sarah M.", location: "Sydney", rating: 5, text: "The Noira mattress has completely transformed my sleep. I wake up feeling genuinely rested for the first time in years." },
  { name: "James T.", location: "Melbourne", rating: 5, text: "The Weave linen is incredible — light, cool, and gets softer every wash. Worth every cent." },
  { name: "Emma L.", location: "Brisbane", rating: 5, text: "Finally a brand that doesn't over-promise. The quality speaks for itself. My Veyre pillow is perfect." },
  { name: "Michael R.", location: "Perth", rating: 5, text: "The attention to detail is extraordinary. From the packaging to the product itself, everything feels considered." },
  { name: "Sophie K.", location: "Adelaide", rating: 5, text: "I've tried every linen brand out there. Weave is on another level — temperature regulation is real." },
  { name: "David W.", location: "Canberra", rating: 5, text: "Bought the Eirelle topper on a whim. Now I can't imagine sleeping without it." },
];

const items = [...reviews, ...reviews];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#f2f0eb]" style={{ overflow: "hidden" }}>
      <div className="section-container mb-12">
        <p className="text-[9px] uppercase tracking-[0.25em] text-[#9b9790] mb-3">Customer Reviews</p>
        <h2 className="text-[26px] md:text-[30px] font-light tracking-[-0.02em] text-[#1a1a1a]">
          What our customers say
        </h2>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{ position: "absolute", inset: "0 auto 0 0", width: 64, background: "linear-gradient(to right, #f2f0eb, transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: "0 0 0 auto", width: 64, background: "linear-gradient(to left, #f2f0eb, transparent)", zIndex: 10, pointerEvents: "none" }} />

        {/* Marquee track */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "max-content",
            gap: "12px",
            paddingLeft: "24px",
            paddingRight: "24px",
            animation: "marquee 40s linear infinite",
          }}
        >
          {items.map((review, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "clamp(220px, 72vw, 290px)",
                background: "#eeece7",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <span key={s} style={{ fontSize: 10, color: "#1a1a1a" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "#3d3d3d", lineHeight: 1.8, marginBottom: 20 }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, color: "#1a1a1a" }}>{review.name}</p>
                <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9b9790", marginTop: 2 }}>{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
