"use client";

import { useState } from "react";
import Image from "next/image";

type BundleItem = {
  key: string;
  name: string;
  shortName: string;
  href: string;
  image: string;
  prices: Record<string, number>;
  sizes: string[];
  defaultSize: string;
};

const BUNDLE_ITEMS: BundleItem[] = [
  {
    key: "duvet",
    name: "Lierre — Duvet Cover",
    shortName: "Duvet Cover",
    href: "/products/lierre-duvet-cover",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskduvetcover_d5052fdf-c5b4-4f9f-b018-861ab55d2231.png?v=1763167315",
    prices: { "Grand Single": 250, Queen: 310, King: 340 },
    sizes: ["Grand Single", "Queen", "King"],
    defaultSize: "Queen",
  },
  {
    key: "sheet",
    name: "Lierre — Fitted Sheet",
    shortName: "Fitted Sheet",
    href: "/products/lierre-fitted-sheet",
    image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/dusksheet_0175f3cd-dad1-4425-8643-bd811e7c7e14.png?v=1763167314",
    prices: { "Grand Single": 160, Queen: 200, King: 220 },
    sizes: ["Grand Single", "Queen", "King"],
    defaultSize: "Queen",
  },
    {
      key: "pillowcase",
      name: "Lierre — Pillowcase Pair",
      shortName: "Pillowcase Pair",
      href: "/products/lierre-pillowcase-pair",
      image: "https://cdn.shopify.com/s/files/1/0691/8999/2682/files/duskp.case_89a9c01a-f3f3-428e-8e65-bdfeda828f8d.png?v=1763167314",
      prices: { One: 90 },
      sizes: [],
      defaultSize: "One",
    },
];

const DISCOUNT = 0.15;

export default function LierreBundleSection({ currentKey }: { currentKey: string }) {
  // Pre-check the other two items (not the current product)
  const initial = BUNDLE_ITEMS.filter((i) => i.key !== currentKey).map((i) => i.key);
  const [checked, setChecked] = useState<Set<string>>(new Set(initial));
  const [sizes, setSizes] = useState<Record<string, string>>(
    Object.fromEntries(BUNDLE_ITEMS.map((i) => [i.key, i.defaultSize]))
  );

  const toggle = (key: string) => {
    if (key === currentKey) return; // current item always in bundle
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const setSize = (key: string, size: string) => {
    setSizes((prev) => ({ ...prev, [key]: size }));
  };

  const allKeys = new Set([currentKey, ...checked]);
  const subtotal = BUNDLE_ITEMS.filter((i) => allKeys.has(i.key)).reduce(
    (sum, i) => sum + i.prices[sizes[i.key]],
    0
  );
  const isFullSet = allKeys.size === 3;
  const discountAmount = isFullSet ? Math.round(subtotal * DISCOUNT) : 0;
  const total = subtotal - discountAmount;

  return (
    <div className="mt-24 pt-16 border-t border-[#e0ddd6]">
      <div className="flex items-end justify-between mb-3">
        <div>
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#9b9790] mb-2">Complete the Set</p>
          <h2 className="text-[26px] font-light tracking-[-0.02em] text-[#1a1a1a]">The Lierre Linen Set</h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b9790] mb-1">Bundle &amp; save</p>
          <p className="text-[18px] font-light text-[#1a1a1a]">15% off all three</p>
        </div>
      </div>
      <p className="text-[12px] text-[#7a7670] leading-[1.7] mb-10 max-w-lg">
        Add the matching pieces to complete your set. All three together saves 15% — applied automatically.
      </p>

      <div className="space-y-3 mb-8">
        {BUNDLE_ITEMS.map((item) => {
          const isCurrent = item.key === currentKey;
          const isChecked = isCurrent || checked.has(item.key);
          const itemPrice = item.prices[sizes[item.key]];

          return (
            <div
              key={item.key}
              onClick={() => !isCurrent && toggle(item.key)}
              className={`flex items-center gap-5 p-4 border transition-all duration-200 cursor-pointer select-none ${
                isChecked ? "border-[#1a1a1a] bg-[#f2f0eb]" : "border-[#e0ddd6] bg-[#f8f7f4] opacity-60"
              } ${isCurrent ? "cursor-default" : "hover:border-[#1a1a1a]"}`}
            >
              {/* Checkbox */}
              <div
                className={`w-5 h-5 flex-shrink-0 border transition-colors duration-200 flex items-center justify-center ${
                  isChecked ? "bg-[#1a1a1a] border-[#1a1a1a]" : "bg-transparent border-[#ccc9c2]"
                }`}
              >
                {isChecked && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#f2f0eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              {/* Thumbnail */}
              <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden bg-[#e8e5de]">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
              </div>

              {/* Name + size selector */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[12px] font-light text-[#1a1a1a] tracking-[0.02em]">{item.shortName}</p>
                  {isCurrent && (
                    <span className="text-[9px] uppercase tracking-[0.16em] text-[#9b9790] border border-[#e0ddd6] px-2 py-0.5">
                      This item
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                  {item.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(item.key, s)}
                      className={`px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] border transition-colors duration-150 ${
                        sizes[item.key] === s
                          ? "bg-[#1a1a1a] text-[#f2f0eb] border-[#1a1a1a]"
                          : "bg-transparent text-[#6b6862] border-[#d4d0c9] hover:border-[#1a1a1a]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p className="text-[13px] font-light text-[#1a1a1a]">AUD ${itemPrice}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Price summary */}
      <div className="border border-[#e0ddd6] p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b9790]">Subtotal</span>
          <span className="text-[13px] font-light text-[#1a1a1a]">AUD ${subtotal}</span>
        </div>
        {isFullSet && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#7a9a7a]">Bundle Discount (15%)</span>
            <span className="text-[13px] font-light text-[#7a9a7a]">−AUD ${discountAmount}</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-3 border-t border-[#e0ddd6] mt-1">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#1a1a1a]">Total</span>
          <div className="text-right">
            <span className="text-[18px] font-light text-[#1a1a1a]">AUD ${total}</span>
            {isFullSet && (
              <p className="text-[9px] uppercase tracking-[0.16em] text-[#7a9a7a] mt-0.5">15% saved</p>
            )}
          </div>
        </div>
      </div>

      {!isFullSet && (
        <p className="text-[11px] text-[#9b9790] text-center tracking-[0.05em] mb-4">
          Add all three pieces to unlock the 15% bundle discount
        </p>
      )}

      <a
        href="https://aurumrest.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-4 text-[11px] uppercase tracking-[0.2em] text-center transition-colors duration-200 ${
          isFullSet
            ? "bg-[#1a1a1a] text-[#f2f0eb] hover:bg-[#2d2d2b]"
            : "bg-[#e8e5de] text-[#1a1a1a] hover:bg-[#dedad2]"
        }`}
      >
        {isFullSet ? `Add Set to Cart — AUD $${total}` : `Add to Cart — AUD $${total}`}
      </a>
    </div>
  );
}
