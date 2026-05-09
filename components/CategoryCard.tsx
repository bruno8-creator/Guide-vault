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
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#ffb21b]/30 bg-[#ffb21b]/10 text-[#ffca63]">
        <Icon size={22} />
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="rounded-full border border-[#12a8f4]/35 bg-[#12a8f4]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9f381]">
          Coming Soon
        </span>
      </div>
      <p className="text-sm leading-6 text-white/68">{description}</p>
    </GlowCard>
  );
}
