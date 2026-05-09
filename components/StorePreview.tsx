"use client";

import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";

export function StorePreview() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-lg p-5 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,180,91,0.16),transparent_34rem)]" />
      <div className="relative rounded-lg border border-white/10 bg-[#050806]/72 p-4">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="h-3 w-28 rounded-full bg-white/18" />
            <div className="mt-3 h-2 w-44 rounded-full bg-white/8" />
          </div>
          <div className="rounded-full border border-[#d8b45b]/35 bg-[#d8b45b]/10 px-3 py-1 text-xs font-semibold text-[#f3d787]">
            Coming Soon
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              // Placeholder cells only; product rendering is intentionally inactive.
              key={index}
              className="h-28 rounded-lg border border-white/10 bg-white/[0.055] blur-[0.2px]"
              animate={{ opacity: [0.45, 0.74, 0.45] }}
              transition={{ duration: 3.5, delay: index * 0.16, repeat: Infinity }}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-[#050806]/42 backdrop-blur-[2px]">
          <div className="flex items-center gap-3 rounded-full border border-[#d8b45b]/35 bg-[#050806]/86 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_60px_rgba(216,180,91,0.22)]">
            <LockKeyhole size={18} className="text-[#f3d787]" />
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
