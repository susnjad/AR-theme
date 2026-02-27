"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const navLinkClass =
  "text-[11px] tracking-[0.14em] uppercase transition-colors duration-200";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const discoverRef = useRef<HTMLLIElement>(null);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close discover dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (discoverRef.current && !discoverRef.current.contains(e.target as Node)) {
        setDiscoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const textColor = scrolled
    ? "text-[#1a1a1a] hover:text-[#6b6862]"
    : "text-white hover:text-white/70";

  const iconColor = scrolled ? "#1a1a1a" : "#ffffff";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f9f9f7]/96 backdrop-blur-sm border-b border-[#e8e6e1]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 md:h-16 flex items-center justify-between">

          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`${navLinkClass} ${textColor}`}>
              Home
            </Link>
            <Link href="/pages/aurum-rest-origins" className={`${navLinkClass} ${textColor}`}>
              Origins
            </Link>

            {/* Discover dropdown */}
            <li
              ref={discoverRef}
              className="relative list-none"
              onMouseEnter={() => setDiscoverOpen(true)}
              onMouseLeave={() => setDiscoverOpen(false)}
            >
              <button
                className={`${navLinkClass} ${textColor} flex items-center gap-1`}
                onClick={() => setDiscoverOpen(!discoverOpen)}
              >
                Discover
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                  className={`transition-transform duration-200 ${discoverOpen ? "rotate-90" : ""}`}
                >
                  <path d="M3 1.5L6.5 5 3 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 pt-3 transition-all duration-200 ${
                  discoverOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"
                }`}
              >
                <ul className="bg-[#f9f9f7] border border-[#e8e6e1] shadow-sm min-w-[120px] py-2">
                  <li>
                    <Link
                      href="/collections/oasis"
                      className="block px-4 py-2 text-[11px] tracking-[0.12em] uppercase text-[#3d3d3d] hover:text-[#1a1a1a] hover:bg-[#f2f0eb] transition-colors duration-150"
                      onClick={() => setDiscoverOpen(false)}
                    >
                      Oasis
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/collections/weave"
                      className="block px-4 py-2 text-[11px] tracking-[0.12em] uppercase text-[#3d3d3d] hover:text-[#1a1a1a] hover:bg-[#f2f0eb] transition-colors duration-150"
                      onClick={() => setDiscoverOpen(false)}
                    >
                      Weave
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </nav>

            {/* Logo — centered (desktop only; mobile logo is inline in mobile row) */}
            <Link href="/" className="hidden md:block absolute left-1/2 -translate-x-1/2">
            {scrolled ? (
              <Image
                src="https://aurumrest.com/cdn/shop/files/1.png?v=1763374696&width=280"
                alt="Aurum Rest"
                width={120}
                height={24}
                className="h-6 w-auto object-contain"
                priority
              />
            ) : (
              <Image
                src="https://aurumrest.com/cdn/shop/files/2.png?v=1763374696&width=280"
                alt="Aurum Rest"
                width={120}
                height={24}
                className="h-6 w-auto object-contain"
                priority
              />
            )}
          </Link>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/pages/12-moons-club" className={`${navLinkClass} ${textColor}`}>
              Twelve Moons Club
            </Link>
              {/* Account icon */}
            <Link href="/account" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-200">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

              {/* Cart icon */}
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
          </div>

          {/* Mobile: hamburger (left) + logo (center) + cart (right) */}
          <div className="md:hidden flex items-center w-full justify-between">
            <button
              className="flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""} ${scrolled ? "bg-[#1a1a1a]" : "bg-white"}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""} ${scrolled ? "bg-[#1a1a1a]" : "bg-white"}`} />
              <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""} ${scrolled ? "bg-[#1a1a1a]" : "bg-white"}`} />
            </button>
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src={scrolled
                  ? "https://aurumrest.com/cdn/shop/files/1.png?v=1763374696&width=280"
                  : "https://aurumrest.com/cdn/shop/files/2.png?v=1763374696&width=280"}
                alt="Aurum Rest"
                width={100}
                height={20}
                className="h-5 w-auto object-contain"
                priority
              />
            </Link>
              <button onClick={openCart} aria-label="Cart" className="relative">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f9f9f7] flex flex-col justify-end pb-16 px-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-0 w-full">
          {[
            { label: "Home", href: "/" },
            { label: "Origins", href: "/pages/aurum-rest-origins" },
            { label: "Oasis", href: "/collections/oasis" },
              { label: "Weave", href: "/collections/weave" },
              { label: "Twelve Moons Club", href: "/pages/12-moons-club" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[28px] font-medium tracking-tight text-[#1a1a1a] hover:text-[#9b9790] transition-colors duration-200 border-b border-[#e8e6e1] py-5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
