import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact Guide Market",
};

export default function ContactPage() {
  return (
    <SectionWrapper className="min-h-screen pt-32">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb21b]">
            Contact
          </p>
          <h1 className="font-display text-5xl text-white sm:text-6xl">Contact Guide Market</h1>
          <p className="mt-5 text-base leading-8 text-white/68">
            Questions, support requests, and partnership notes can be sent through this frontend
            form. Form handling can be connected later.
          </p>
          <p className="mt-6 text-sm text-white/58">
            Support email placeholder:{" "}
            <span className="font-semibold text-[#ffca63]">support@guidemarket.com</span>
          </p>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
