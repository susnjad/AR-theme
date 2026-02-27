"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  label: string;
  content: React.ReactNode;
}

interface ProductAccordionProps {
  items: AccordionItem[];
}

export default function ProductAccordion({ items }: ProductAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#d8d2c0]">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="w-full flex items-center justify-between text-left group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#414141] group-hover:text-[#a09285] transition-colors duration-300">
              {item.label}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#a09285] transition-transform duration-400 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              open === i ? "max-h-96 mt-5" : "max-h-0"
            }`}
          >
            <div className="font-sans font-light text-[13px] md:text-[14px] leading-[1.9] text-[#6b6b6b]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
