"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { LockKeyhole } from "lucide-react";

export function EmptyContentSection({
  eyebrow,
  title,
  description,
  icon: Icon,
  tiles = 3,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tiles?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="glass-panel relative overflow-hidden rounded-lg p-6 sm:p-8"
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ffb21b]/12 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ffb21b]/30 bg-[#ffb21b]/10 text-[#ffca63]">
            <Icon size={22} />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb21b]">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-white/66">{description}</p>
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-md">
          {Array.from({ length: tiles }).map((_, index) => (
            <motion.div
              key={index}
              className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055]"
              animate={{ opacity: [0.48, 0.74, 0.48] }}
              transition={{ duration: 3.4, delay: index * 0.14, repeat: Infinity }}
            >
              <div className="absolute inset-x-3 top-3 h-16 rounded-md bg-white/[0.055]" />
              <div className="absolute inset-x-3 bottom-4 h-2 rounded-full bg-white/10" />
              <div className="absolute bottom-2 left-3 h-1.5 w-1/2 rounded-full bg-white/[0.07]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-[#12a8f4]/35 bg-[#12a8f4]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a9f381]">
        <LockKeyhole size={14} />
        Coming Soon
      </div>
    </motion.div>
  );
}
