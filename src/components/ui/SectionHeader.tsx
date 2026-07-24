"use client";

import { ReactNode } from "react";
import AnimatedSection from "../AnimatedSection";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  highlightTitle?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlightTitle,
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

      <h2 className={`mt-3 h-section ${titleColor}`}>
        {title}{" "}
        {highlightTitle && (
          <span className="gradient-text">
            {highlightTitle}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-5 body-lead ${descColor}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}