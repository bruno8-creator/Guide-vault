"use client";

import type { LucideIcon } from "lucide-react";
import { GlowCard } from "./GlowCard";

export function CategoryCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <GlowCard className="h-full">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#d8b45b]/30 bg-[#d8b45b]/10 text-[#f3d787]">
        <Icon size={22} />
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="rounded-full border border-[#0f9f6e]/35 bg-[#0f9f6e]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#93f5cc]">
          Coming Soon
        </span>
      </div>
      <p className="text-sm leading-6 text-white/68">{description}</p>
    </GlowCard>
  );
}
