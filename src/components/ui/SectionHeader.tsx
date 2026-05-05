"use client";

import { ReactNode } from "react";
import AnimatedSection from "../AnimatedSection";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Consistent eyebrow → title → description block used at the top of every
 * homepage section. Locks typography rhythm across the site.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "dark" ? "text-deep-blue" : "text-white";
  const descColor = tone === "dark" ? "text-deep-blue/60" : "text-gray-400";
  const eyebrowColor =
    tone === "dark" ? "text-neon-purple" : "text-neon-blue";

  return (
    <AnimatedSection
      className={`max-w-3xl ${alignClasses} ${className}`}
    >
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`mt-3 h-section ${titleColor}`}>{title}</h2>
      {description && (
        <p className={`mt-5 body-lead ${descColor}`}>{description}</p>
      )}
    </AnimatedSection>
  );
}
