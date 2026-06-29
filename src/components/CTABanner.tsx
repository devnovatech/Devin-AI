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
  eyebrow = "Build With Confidence",
  heading = (
    <>
     Technology That Moves {" "}
      <span className="gradient-text">Your Business Forward.</span>
    </>
  ),
  description = "From custom software and mobile apps to AI systems, cloud infrastructure, and digital growth, we help ambitious businesses build technology that's designed to perform today and evolve tomorrow.",
  primaryLabel = "Start your project",
  primaryHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
  withPadding = true,
}: CTABannerProps) {
  return (
    <section className={`${withPadding ? "py-12 sm:py-16 lg:py-20" : ""} bg-section-cta overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-deep-blue/20 bg-deep-blue">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[140px]" />
            <div className="noise-overlay" />

            {/* Content */}
            <div className="relative z-10 px-5 sm:px-8 lg:px-16 py-10 sm:py-16 lg:py-20 text-center">
              {/* Eyebrow - hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">
                  {eyebrow}
                </span>
              </div>

              {/* Mobile: Simplified eyebrow */}
              <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-white/80">
                  Let's build
                </span>
              </div>

              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                {heading}
              </h2>
              
              {description && (
                <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                  {description}
                </p>
              )}

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full sm:w-auto"
                >
                  <Link
                    href={primaryHref}
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-neon-blue rounded-full text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300 w-full sm:w-auto touch-manipulation"
                  >
                    {primaryLabel}
                    {/* <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg> */}
                  </Link>
                </motion.span>
                {secondaryLabel && secondaryHref && (
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300 w-full sm:w-auto touch-manipulation"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </section>
  );
}