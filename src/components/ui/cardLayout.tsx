"use client";

import { motion } from "framer-motion";
import React from "react";

interface ReusableFeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accent?: string;
}

export default function ReusableFeatureCard({
  title,
  description,
  icon,
  accent = "#2563eb",
}: ReusableFeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-deep-blue/10 bg-white p-7 shadow-sm hover:shadow-xl"
    >
      {/* Decorative Glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500"
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {icon && (
          <div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${accent}14`,
              color: accent,
              boxShadow: `inset 0 0 0 1px ${accent}26`,
            }}
          >
            {icon}
          </div>
        )}

        <h3 className="mb-3 text-xl font-bold text-deep-blue">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-deep-blue/60">
          {description}
        </p>
      </div>
    </motion.div>
  );
}