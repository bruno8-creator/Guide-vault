"use client";

import { motion } from "framer-motion";
import { LockKeyhole, Sparkles } from "lucide-react";
import { Button } from "./Button";

export function EmptyShopState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="glass-panel relative mx-auto max-w-4xl overflow-hidden rounded-lg p-8 text-center sm:p-12"
    >
      <motion.div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0f9f6e]/24 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.78, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-lg border border-[#d8b45b]/35 bg-[#d8b45b]/10 shadow-[0_0_80px_rgba(216,180,91,0.18)]">
        <LockKeyhole className="text-[#f3d787]" size={42} />
      </div>
      <div className="relative">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0f9f6e]/35 bg-[#0f9f6e]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#93f5cc]">
          <Sparkles size={14} />
          Digital releases in progress
        </p>
        <h1 className="font-display text-4xl text-white sm:text-6xl">Guide Market Store</h1>
        <p className="mt-4 text-xl font-semibold text-white">Products coming soon.</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
          Guide Market is preparing its first digital releases. Join the waitlist to be notified
          when the store opens.
        </p>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-3 opacity-80">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-24 rounded-lg border border-white/10 bg-white/[0.055]" />
          ))}
        </div>
        <Button href="/#waitlist" className="mt-9">
          Join the Waitlist
        </Button>
      </div>
    </motion.div>
  );
}
