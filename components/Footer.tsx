import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030504]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/guide-market-logo.svg"
              alt="Guide Market"
              width={260}
              height={150}
              className="h-20 w-auto drop-shadow-[0_14px_32px_rgba(18,168,244,0.14)]"
            />
          </div>
          <p className="max-w-md text-sm leading-6 text-white/62">
            Premium digital resources designed for clarity, structure, and action.
          </p>
          <p className="mt-5 text-sm font-semibold text-[#ffb21b]">Products coming soon.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/58 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
