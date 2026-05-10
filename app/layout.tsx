import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageGate } from "@/components/LanguageGate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guidemarket.com"),
  title: {
    default: "Guide Market | Premium Digital Resources",
    template: "%s | Guide Market",
  },
  description:
    "Guide Market is a premium digital brand creating practical digital resources designed for clarity, structure, and action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <LanguageGate />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
