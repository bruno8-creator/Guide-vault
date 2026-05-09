"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050806]/72 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/guide-market-logo.svg"
            alt="Guide Market"
            width={220}
            height={127}
            className="h-12 w-auto drop-shadow-[0_12px_28px_rgba(18,168,244,0.16)]"
            priority
          />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#waitlist" className="min-h-10 px-5">
            Join Waitlist
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/8 bg-[#050806]/96 px-4 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/78 hover:bg-white/8 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/#waitlist" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Join Waitlist
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
