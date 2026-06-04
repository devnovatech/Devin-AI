"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface CTABannerProps {
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** When false, removes the outer section padding so it can be embedded inline. */
  withPadding?: boolean;
}

export default function CTABanner({
  eyebrow = "Available for new projects",
  heading = (
    <>
      Ready to build the next{" "}
      <span className="gradient-text">version of your product?</span>
    </>
  ),
  description = "Tell us what you have in mind — your goals, timeline, and must-haves. We'll get back to you quickly with a clear proposal and a plan to get started.",
  primaryLabel = "Start your project",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
  withPadding = true,
}: CTABannerProps) {
  return (
    <section className={`${withPadding ? "py-20" : ""} bg-section-cta overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-deep-blue/20 bg-deep-blue">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[140px]" />
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20 text-center">
              {eyebrow && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-neon-blue">
                    {eyebrow}
                  </span>
                </motion.div>
              )}

              <h2 className="mt-6 h-section text-white max-w-3xl mx-auto">
                {heading}
              </h2>
              {description && (
                <p className="mt-5 body-lead text-gray-400 max-w-2xl mx-auto">
                  {description}
                </p>
              )}

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex"
                >
                  <Link
                    href={primaryHref}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-blue rounded-full text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                  >
                    {primaryLabel}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.span>
                {secondaryLabel && secondaryHref && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
