"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden premium-grid">
      <motion.div
        className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#12a8f4]/28 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 24, 0], opacity: [0.55, 0.88, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#ffb21b]/18 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, 30, 0], opacity: [0.42, 0.78, 0.42] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0a62c7]/55 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.32, 0.62, 0.32] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
