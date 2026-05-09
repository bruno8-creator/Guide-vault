"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardList, FileText, Gem, Layers3, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/Button";
import { CategoryCard } from "@/components/CategoryCard";
import { GlowCard } from "@/components/GlowCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { StorePreview } from "@/components/StorePreview";
import { WaitlistForm } from "@/components/WaitlistForm";

const floatingCards = ["Guides", "Templates", "Planners", "Toolkits"];

const values = [
  {
    title: "Clear",
    text: "Simple layouts, direct information, and a clean user experience.",
    icon: Sparkles,
  },
  {
    title: "Practical",
    text: "Resources designed to be used, not just read.",
    icon: ClipboardList,
  },
  {
    title: "Premium",
    text: "A polished digital experience built with attention to detail.",
    icon: Gem,
  },
];

const categories = [
  {
    title: "Ebooks",
    description: "Structured digital reading experiences for focused learning.",
    icon: BookOpen,
  },
  {
    title: "Digital Guides",
    description: "Step-by-step resources designed to make complex ideas easier to use.",
    icon: FileText,
  },
  {
    title: "Printable Templates",
    description: "Clean layouts for planning, organizing, and making progress.",
    icon: Layers3,
  },
  {
    title: "Practical Toolkits",
    description: "Digital systems and resources built for action.",
    icon: Wand2,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[94vh] items-center overflow-hidden pt-24">
        <AnimatedBackground />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex rounded-full border border-[#d8b45b]/35 bg-[#d8b45b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d787]">
              Premium digital store base
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Guidora
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-white/72 sm:text-xl">
              Premium digital resources designed for clarity, structure, and action.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#waitlist">Join the Waitlist</Button>
              <Button href="/shop" variant="secondary">
                Explore the Store
              </Button>
            </div>
          </motion.div>

          <div className="relative min-h-[430px]">
            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8b45b]/30 bg-[#d8b45b]/10 shadow-[0_0_120px_rgba(216,180,91,0.22)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-center backdrop-blur-2xl">
              <ShieldCheck className="text-[#f3d787]" size={54} />
            </div>
            {floatingCards.map((label, index) => {
              const positions = [
                "left-0 top-8",
                "right-4 top-20",
                "bottom-16 left-8",
                "bottom-4 right-10",
              ];
              return (
                <motion.div
                  key={label}
                  className={`glass-panel absolute ${positions[index]} rounded-lg px-5 py-4 text-sm font-semibold text-white`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: [0, -12, 0] }}
                  transition={{
                    opacity: { duration: 0.7, delay: 0.2 + index * 0.1 },
                    y: { duration: 4 + index * 0.45, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {label}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
              Brand Value
            </p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              Built for clarity. Designed for action.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Guidora is being built as a premium home for practical digital resources. The
              focus is simple: clean design, useful structure, and tools that help people take
              action.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <GlowCard key={value.title}>
                <value.icon className="mb-5 text-[#f3d787]" size={28} />
                <h3 className="mb-3 text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-sm leading-6 text-white/64">{value.text}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
            Future Categories
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            What Guidora will offer
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
              Store Preview
            </p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">
              A better way to access practical digital resources.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Guidora is being designed as a clean, premium digital store where future
              resources will be easy to find, understand, and use.
            </p>
          </div>
          <StorePreview />
        </div>
      </SectionWrapper>

      <SectionWrapper id="waitlist" className="pb-24">
        <div className="glass-panel mx-auto max-w-4xl rounded-lg px-6 py-12 text-center sm:px-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#d8b45b]">
            Updates
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Be first to access Guidora.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
            Join the waitlist to receive updates when the first digital releases go live.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
