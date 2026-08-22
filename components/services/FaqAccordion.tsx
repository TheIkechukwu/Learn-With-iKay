"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { ServiceFaq } from "@/types";

export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-2.5">
      {faqs.map((q, i) => {
        const open = openIndex === i;
        return (
          <div
            key={q.q}
            onClick={() => setOpenIndex(open ? null : i)}
            className="cursor-pointer rounded-lg border border-outline-variant/50 bg-surface-container-lowest px-6.5 py-5.5"
          >
            <div className="flex items-center justify-between gap-5">
              <div className="font-display text-[16.5px] font-semibold text-primary">
                {q.q}
              </div>
              <FiChevronDown
                className={`flex-shrink-0 text-primary-container transition-transform ${open ? "rotate-180" : ""}`}
                size={18}
              />
            </div>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="max-w-[720px] border-t border-surface-variant pt-3.5 mt-3.5 text-[15px] leading-relaxed text-on-surface-variant">
                    {q.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
