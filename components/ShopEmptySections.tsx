"use client";

import { Bell, MessageSquareQuote, PackageSearch, Sparkles, TrendingUp } from "lucide-react";
import { EmptyContentSection } from "./EmptyContentSection";
import { SectionWrapper } from "./SectionWrapper";
import { WaitlistForm } from "./WaitlistForm";

export function ShopEmptySections() {
  return (
    <>
      <SectionWrapper className="pt-0">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb21b]">
            Store Layout
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            More store sections are ready, but intentionally empty.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/68">
            These blocks are placeholders for real future activity. They add structure without
            inventing products, prices, testimonials, or performance numbers.
          </p>
        </div>
        <div className="grid gap-4">
          <EmptyContentSection
            eyebrow="Top Sells"
            title="Top sells will appear after launch."
            description="Reserved for real store data once Guide Market has active digital releases and verified performance."
            icon={TrendingUp}
            tiles={6}
          />
          <EmptyContentSection
            eyebrow="New Arrivals"
            title="New digital releases will be listed here."
            description="This area is prepared for future launches and remains empty until real resources are added."
            icon={PackageSearch}
            tiles={6}
          />
          <EmptyContentSection
            eyebrow="Reviews"
            title="Verified reviews are coming later."
            description="Customer feedback will be shown only after real purchases or verified product experiences exist."
            icon={MessageSquareQuote}
            tiles={3}
          />
          <EmptyContentSection
            eyebrow="Launch Updates"
            title="Store updates will be posted here."
            description="Future announcements, release notes, and launch windows can be placed in this area."
            icon={Bell}
            tiles={3}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="glass-panel mx-auto max-w-4xl rounded-lg px-6 py-12 text-center sm:px-10">
          <Sparkles className="mx-auto mb-5 text-[#ffca63]" size={32} />
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Join before the store opens.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
            Get notified when Guide Market publishes its first official digital releases.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
