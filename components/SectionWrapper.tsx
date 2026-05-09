"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
