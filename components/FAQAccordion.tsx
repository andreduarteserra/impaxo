"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "border-electric/40 bg-electric/5"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-heading text-base font-semibold text-white pr-4">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                  isOpen
                    ? "border-electric bg-electric text-navy rotate-45"
                    : "border-white/30 text-white/60"
                }`}
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p className="text-[15px] leading-7 text-white/70">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
