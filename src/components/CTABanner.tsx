"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Calculator as CalcIcon } from "lucide-react";

export default function CTABanner({
  eyebrow = "Build With Confidence",
  heading = (
    <>
      Technology That Moves{" "}
      <span className="gradient-text-fixed">Your Business Forward.</span>
    </>
  ),
  description = "We deliver custom software, mobile applications, AI solutions, cloud infrastructure, and digital capabilities designed to improve operations, accelerate growth, and evolve with changing business needs.",
  primaryLabel = "Start your project",
  primaryHref = "/contact",
  // secondaryLabel = "Book intro call",
  // secondaryHref = "/contact",
  withPadding = true,
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  withPadding?: boolean;
}) {
  return (
    <section
      className={`${withPadding ? "py-12 sm:py-16 lg:py-20" : ""
        } bg-section-cta overflow-hidden relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl text-white shadow-2xl"
          style={{
            backgroundColor: "#0a1628", // Permanent deep blue
          }}
        >          {/* Background effects */}
        
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="noise-overlay" />

          <div className="relative grid gap-10 p-8 md:grid-cols-12 md:p-12 lg:p-16">
            {/* Left column */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">
                  {eyebrow}
                </span>
              </div>

              <h2 className="mt-5 text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {heading}
              </h2>

              <p className="mt-5 max-w-xl text-base text-gray-400 md:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex"
                >
                  <Link
                    href={primaryHref}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-neon-blue rounded-xl text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                  >
                    <CalcIcon size={16} /> {primaryLabel} <ArrowRight size={14} />
                  </Link>
                </motion.span>
              </div>
            </div>

            {/* Right column - Stats cards */}
            <div className="md:col-span-5">
              <div className="grid gap-3">
                <Card
                  icon={<MessageSquare size={18} />}
                  label="Avg. response"
                  value="3h 22m"
                  sub="First reply, last 90 days"
                />
                <Card
                  icon={<Calendar size={18} />}
                  label="Typical kick-off"
                  value="10–14 days"
                  sub="From signed SOW"
                />
                <Card
                  icon={<CalcIcon size={18} />}
                  label="Talent shortlist"
                  value="72 hours"
                  sub="For staff augmentation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <span className="text-neon-blue">{icon}</span>
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-gray-500">{sub}</p>
    </div>
  );
}