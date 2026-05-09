"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: "rgba(255,153,0,0.42)" }}
      transition={{ duration: 0.25 }}
      className={`glass-panel relative overflow-hidden rounded-lg p-6 ${className}`}
    >
      <div className="absolute inset-x-8 -top-20 h-32 rounded-full bg-[#12a8f4]/18 blur-3xl" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
