"use client";

import Link from "next/link";

const columns = [
  {
    heading: "Shop",
    links: [
      { label: "Noira Mattress", href: "/noira" },
      { label: "Weighted Blanket", href: "/collections#weighted-blanket" },
      { label: "Linen Bedding", href: "/collections#linen-bedding" },
      { label: "Kapok Pillow", href: "/collections#kapok-pillow" },
      { label: "Bamboo Pillowcases", href: "/collections#bamboo-pillowcases" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Twelve Moons Club", href: "/membership" },
      { label: "Materials", href: "/about#materials" },
      { label: "Sustainability", href: "/about#sustainability" },
    ],
  },
  {
    heading: "Journal",
    links: [
      { label: "On Sleep Science", href: "/journal/sleep-science" },
      { label: "The Case for Kapok", href: "/journal/kapok" },
      { label: "How We Make Noira", href: "/journal/noira-construction" },
      { label: "All Articles", href: "/journal" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/support/faq" },
      { label: "Delivery & Returns", href: "/support/delivery" },
      { label: "Sleep Trial", href: "/support/sleep-trial" },
      { label: "Contact", href: "/support/contact" },
    ],
  },
];

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f9f9f7] border-t border-[#e8e6e1]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-2 lg:mb-0">
            <Link
              href="/"
              className="text-[13px] font-semibold tracking-[0.2em] uppercase text-[#1a1a1a]"
            >
              Aurum Rest
            </Link>
            <p className="text-[12px] leading-[1.7] text-[#9b9790] mt-4 max-w-[180px]">
              Sleep essentials engineered for deeper rest. Made in Australia.
            </p>
            <div className="flex gap-5 mt-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.15em] uppercase text-[#9b9790] hover:text-[#1a1a1a] transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#1a1a1a] font-medium mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-[#6b6862] hover:text-[#1a1a1a] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e8e6e1]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#9b9790]">
            © 2025 Aurum Rest Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                className="text-[11px] text-[#9b9790] hover:text-[#6b6862] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
