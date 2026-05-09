"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.045]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="font-semibold text-white">{question}</span>
        <ChevronDown
          className={`shrink-0 text-[#d8b45b] transition ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-6 text-white/68">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
