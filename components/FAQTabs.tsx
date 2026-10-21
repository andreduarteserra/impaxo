"use client";

import { useState } from "react";
import FAQAccordion from "@/components/FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export default function FAQTabs({ sections }: { sections: FAQSection[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Pill tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {sections.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === i
                ? "bg-electric text-navy"
                : "border border-ink/15 text-ink/55 hover:border-ink/30 hover:text-ink"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Active section */}
      <FAQAccordion items={sections[active].items} />
    </div>
  );
}
