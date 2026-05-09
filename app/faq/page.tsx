import type { Metadata } from "next";
import { FAQItem } from "@/components/FAQItem";
import { SectionWrapper } from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Guidora FAQ",
};

const faqs = [
  {
    question: "What is Guidora?",
    answer:
      "Guidora is a premium digital brand focused on practical digital resources, clear design, and useful systems.",
  },
  {
    question: "Are products available now?",
    answer: "Not yet. The store base is being built first, and products will be added soon.",
  },
  {
    question: "What kind of resources will Guidora offer?",
    answer:
      "Guidora will focus on digital resources such as ebooks, guides, templates, planners, and toolkits.",
  },
  {
    question: "Will the products be digital?",
    answer: "Yes. Guidora is designed as a digital-first store.",
  },
  {
    question: "How can I stay updated?",
    answer: "You can join the waitlist on the home page or shop page.",
  },
  {
    question: "How can I contact Guidora?",
    answer: "You can use the contact page.",
  },
];

export default function FAQPage() {
  return (
    <SectionWrapper className="min-h-screen pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
          FAQ
        </p>
        <h1 className="font-display text-5xl text-white sm:text-6xl">Guidora FAQ</h1>
        <div className="mt-10 grid gap-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
