"use client";

import { useInView } from "@/hooks/useInView";

export default function EditorialBreak() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden"
      style={{
        height: "45vw",
        minHeight: "280px",
        maxHeight: "580px",
      }}
    >
      <img
        src="https://cdn.shopify.com/s/files/1/0691/8999/2682/files/hero.png?v=1763167314"
        alt=""
        role="presentation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 40%",
          transform: inView ? "scale(1)" : "scale(1.04)",
          transition: "transform 1.4s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
    </div>
  );
}
