"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  href?: string;
  accent?: string;
  className?: string;
  /** Decorative number shown faintly in the top-right corner. */
  number?: string;
  tone?: "dark" | "light";
}

/**
 * Unified hover-card primitive. Lift + corner glow + hairline border.
 */
export default function HoverCard({
  children,
  href,
  accent = "#1E88E5",
  className = "",
  number,
  tone = "light",
}: HoverCardProps) {
  const surface =
    tone === "light"
      ? "bg-white border-deep-blue/[0.07] hover:shadow-[0_24px_48px_-16px_var(--card-glow),_0_8px_16px_-12px_var(--card-glow-soft)]"
      : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:shadow-[0_24px_48px_-16px_var(--card-glow)]";

  const inner = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className={`relative h-full rounded-[var(--radius-card)] border overflow-hidden flex flex-col transition-shadow duration-500 ${href ? "cursor-pointer" : ""} ${surface} ${className}`}
      style={
        {
          "--card-glow": `${accent}55`,
          "--card-glow-soft": `${accent}30`,
        } as React.CSSProperties
      }
    >
      {/* Soft colored corner glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
        style={{ backgroundColor: accent }}
      />

      {/* Hairline border that intensifies on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${accent}33` }}
      />

      {number && (
        <span
          className="absolute top-5 right-6 font-black tabular-nums leading-none tracking-tight"
          style={{ fontSize: "2rem", color: `${accent}1F` }}
        >
          {number}
        </span>
      )}

      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full group">
        {inner}
      </Link>
    );
  }

  return <div className="block h-full group">{inner}</div>;
}
