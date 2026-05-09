import type { Metadata } from "next";
import { GlowCard } from "@/components/GlowCard";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "About Guide Market",
};

export default function AboutPage() {
  return (
    <SectionWrapper className="min-h-screen pt-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb21b]">
          About
        </p>
        <h1 className="font-display text-5xl text-white sm:text-6xl">About Guide Market</h1>
        <GlowCard className="mt-10">
          <p className="text-lg leading-8 text-white/74">
            Guide Market is a premium digital brand built around clarity, structure, and practical
            action. The goal is to create digital resources that feel easy to understand,
            beautifully designed, and useful from the first page.
          </p>
          <p className="mt-6 text-base leading-8 text-white/64">
            The brand is currently being built, and new releases will be added soon.
          </p>
        </GlowCard>
      </div>
    </SectionWrapper>
  );
}
