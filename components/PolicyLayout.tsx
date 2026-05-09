import type { ReactNode } from "react";
import { SectionWrapper } from "./SectionWrapper";

export function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <SectionWrapper className="pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
          Guidora
        </p>
        <h1 className="font-display text-4xl text-white sm:text-6xl">{title}</h1>
        {updated ? <p className="mt-4 text-sm text-white/48">{updated}</p> : null}
        <div className="mt-10 space-y-7 rounded-lg border border-white/12 bg-white/[0.045] p-6 text-sm leading-7 text-white/70 sm:p-8">
          {children}
        </div>
      </div>
    </SectionWrapper>
  );
}
