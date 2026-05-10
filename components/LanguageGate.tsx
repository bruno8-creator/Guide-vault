"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const storageKey = "guideMarketLanguage";

export function LanguageGate() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return !window.localStorage.getItem(storageKey);
  });

  useEffect(() => {
    const selected = window.localStorage.getItem(storageKey);
    if (selected) {
      document.documentElement.dataset.guideLanguage = selected;
    }
  }, []);

  function chooseLanguage(language: "en" | "es") {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.dataset.guideLanguage = language;
    window.dispatchEvent(new CustomEvent("guide-market-language-change", { detail: { language } }));
    setOpen(false);
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(18,168,244,0.28),transparent_28rem),radial-gradient(circle_at_78%_18%,rgba(101,207,59,0.2),transparent_26rem),radial-gradient(circle_at_50%_90%,rgba(255,153,0,0.18),transparent_25rem),rgba(1,4,6,0.9)] backdrop-blur-2xl" />
      <section className="glass-panel relative w-full max-w-xl rounded-lg p-6 text-center sm:p-10">
        <Image
          src="/images/guide-market-logo.svg"
          alt="Guide Market"
          width={360}
          height={208}
          className="mx-auto mb-5 h-auto w-full max-w-sm"
          priority
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffca63]">
          Choose your language
        </p>
        <h2 className="font-display text-4xl leading-none text-white sm:text-5xl">
          Select your shopping experience.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/68">
          Choose the website language. Product pages can use this preference to select the matching
          English or Spanish version.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={() => chooseLanguage("en")}>English</Button>
          <Button variant="secondary" onClick={() => chooseLanguage("es")}>
            Español
          </Button>
        </div>
      </section>
    </div>
  );
}
