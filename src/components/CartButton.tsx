"use client";

import { useCart } from "@/context/CartContext";

export default function CartButton({ iconColor }: { iconColor: string }) {
  const { totalItems, openCart } = useCart();
  return (
    <button onClick={openCart} aria-label="Cart" className="relative">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-200">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#1a1a1a] text-[#f2f0eb] text-[9px] flex items-center justify-center font-light">
          {totalItems}
        </span>
      )}
    </button>
  );
}
