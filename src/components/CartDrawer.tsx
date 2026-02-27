"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Build Shopify cart permalink: /cart/variantId:qty,variantId2:qty2
  const handleCheckout = () => {
    if (items.length === 0) return;
    const lineItems = items
      .map((item) => `${item.variantId}:${item.quantity}`)
      .join(",");
      window.open(`/cart/${lineItems}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-[420px] bg-[#f9f9f7] flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e6e1]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#1a1a1a]">
            Your Bag {items.length > 0 && <span className="text-[#9b9790]">({items.reduce((s, i) => s + i.quantity, 0)})</span>}
          </p>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-[#9b9790] hover:text-[#1a1a1a] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="text-[13px] text-[#9b9790] font-light">Your bag is empty.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0 bg-[#e8e5de] overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[12px] font-light text-[#1a1a1a] leading-snug">{item.name}</p>
                      <p className="text-[10px] text-[#9b9790] mt-0.5 tracking-[0.06em]">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#e0ddd6]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6b6862] hover:text-[#1a1a1a] transition-colors"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-[12px] text-[#1a1a1a]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#6b6862] hover:text-[#1a1a1a] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[13px] font-light text-[#1a1a1a]">
                        AUD ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-left text-[10px] uppercase tracking-[0.14em] text-[#9b9790] hover:text-[#1a1a1a] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-[#e8e6e1]">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#6b6862]">Subtotal</p>
              <p className="text-[15px] font-light text-[#1a1a1a]">AUD ${subtotal.toLocaleString()}</p>
            </div>
            <p className="text-[10px] text-[#9b9790] mb-5">Shipping calculated at checkout.</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#1a1a1a] text-[#f2f0eb] py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-[#2d2d2b] transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
