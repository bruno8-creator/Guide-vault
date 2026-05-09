import type { Metadata } from "next";
import { EmptyShopState } from "@/components/EmptyShopState";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ShopEmptySections } from "@/components/ShopEmptySections";

export const metadata: Metadata = {
  title: "Guidora Store | Coming Soon",
  description:
    "The Guidora store is being prepared. Join the waitlist to be notified when the first digital releases go live.",
};

export default function ShopPage() {
  return (
    <>
      <SectionWrapper className="pt-32">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
            Digital resources coming soon.
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/64">
            The store is being prepared. New digital releases will be added soon.
          </p>
        </div>
        <EmptyShopState />
      </SectionWrapper>

      <ShopEmptySections />
    </>
  );
}
