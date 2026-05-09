"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SharedButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps =
  | (SharedButtonProps & {
      href: string;
      onClick?: () => void;
    })
  | (SharedButtonProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
      });

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#d8b45b]/70 focus:ring-offset-2 focus:ring-offset-[#050806]";
  const variants = {
    primary:
      "bg-[#d8b45b] text-[#07100c] shadow-[0_18px_50px_rgba(216,180,91,0.28)] hover:bg-[#f3d787]",
    secondary:
      "border border-white/15 bg-white/8 text-white shadow-[0_18px_50px_rgba(15,159,110,0.12)] hover:border-[#d8b45b]/55 hover:bg-white/12",
    ghost: "text-white/78 hover:text-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <motion.span whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.span>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <motion.span className="inline-flex" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <button className={classes} {...buttonProps}>
        {children}
      </button>
    </motion.span>
  );
}
