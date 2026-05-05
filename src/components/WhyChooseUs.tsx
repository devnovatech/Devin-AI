"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import AnimatedSection from "./AnimatedSection";

interface Reason {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
  stat?: { value: string; label: string };
}

const reasons: Reason[] = [
  {
    title: "Technical expertise meets strategic vision",
    description:
      "We don't just write code — we align every line with your business objectives, market position, and long-term roadmap. Engineering as strategy, not output.",
    accent: "#1E88E5",
    stat: { value: "10+ yrs", label: "Avg engineer experience" },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cross-functional teams",
    description: "Developers, designers, PMs & analysts in one standup.",
    accent: "#0277BD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Fast, transparent delivery",
    description: "Clear roadmaps, weekly check-ins & no surprises.",
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "People-centered design",
    description: "Real user research, usable from day one.",
    accent: "#039BE5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Built to scale",
    description: "Architecture ready for your next 10× — not just launch day.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Honest, transparent pricing",
    description: "Clear scope. Fair quotes. No surprise invoices.",
    accent: "#1565C0",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h6m-5 4h4m-7 4h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2" />
      </svg>
    ),
  },
];

/* ───────── Featured (large 2×2) tile ───────── */
function FeaturedTile({ reason }: { reason: Reason }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="group relative sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden bg-white border border-deep-blue/[0.07] transition-shadow duration-500 p-7 lg:p-10 flex flex-col min-h-[320px]"
      style={
        {
          "--card-glow": `${reason.accent}55`,
        } as React.CSSProperties
      }
    >
      {/* Big corner glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
        style={{ backgroundColor: reason.accent }}
      />
      {/* Hairline accent border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${reason.accent}33` }}
      />
      {/* Soft shadow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_30px_60px_-20px_var(--card-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className="eyebrow"
            style={{ color: reason.accent }}
          >
            Reason 01 — featured
          </span>
          <span
            className="font-black tabular-nums leading-none tracking-tight"
            style={{ fontSize: "2.5rem", color: `${reason.accent}1F` }}
          >
            01
          </span>
        </div>

        <div
          className="mt-6 w-16 h-16 rounded-2xl flex items-center justify-center text-white"
          style={{
            backgroundColor: reason.accent,
            boxShadow: `0 12px 28px -10px ${reason.accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
          }}
        >
          {reason.icon}
        </div>

        <h3 className="mt-7 text-2xl lg:text-[1.875rem] font-bold text-deep-blue tracking-tight leading-[1.15]">
          {reason.title}
        </h3>
        <p className="mt-4 text-deep-blue/60 leading-relaxed text-[15px] max-w-md">
          {reason.description}
        </p>

        {/* Stat callout */}
        {reason.stat && (
          <div className="mt-auto pt-8 border-t border-deep-blue/[0.07] flex items-baseline gap-3">
            <span
              className="text-4xl lg:text-5xl font-bold tracking-tight tabular-nums"
              style={{ color: reason.accent }}
            >
              {reason.stat.value}
            </span>
            <span className="text-deep-blue/55 text-sm">
              {reason.stat.label}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ───────── Standard (1×1) tile ───────── */
function StandardTile({
  reason,
  index,
  spanFull,
}: {
  reason: Reason;
  index: number;
  spanFull?: boolean;
}) {
  const numberLabel = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl overflow-hidden bg-white border border-deep-blue/[0.07] transition-shadow duration-500 p-6 flex flex-col ${spanFull ? "sm:col-span-2 lg:col-span-1" : ""}`}
      style={
        {
          "--card-glow": `${reason.accent}55`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.16] group-hover:opacity-[0.32] transition-opacity duration-500"
        style={{ backgroundColor: reason.accent }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${reason.accent}33` }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_20px_40px_-16px_var(--card-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
            style={{
              backgroundColor: reason.accent,
              boxShadow: `0 12px 28px -10px ${reason.accent}80`,
            }}
          >
            {reason.icon}
          </div>
          <span
            className="font-black tabular-nums leading-none tracking-tight"
            style={{ fontSize: "1.5rem", color: `${reason.accent}1F` }}
          >
            {numberLabel}
          </span>
        </div>

        <h3 className="mt-5 text-base sm:text-lg font-bold text-deep-blue tracking-tight leading-snug">
          {reason.title}
        </h3>
        <p className="mt-2 text-sm text-deep-blue/60 leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const [featured, ...rest] = reasons;

  return (
    <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
      {/* Decorative blooms */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — split editorial */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-14">
          <AnimatedSection className="lg:col-span-7">
            <p className="eyebrow text-neon-purple">Why Us</p>
            <h2 className="mt-3 h-section text-deep-blue">
              Why teams keep choosing{" "}
              <span className="gradient-text-dark">Dev Inception.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Six reasons our clients stick around — and why their next project
              usually finds its way back to us.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:auto-rows-[260px]">
          <FeaturedTile reason={featured} />
          {rest.map((reason, i) => (
            <StandardTile
              key={reason.title}
              reason={reason}
              index={i + 1}
              spanFull={i === rest.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-14 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-deep-blue/20 rounded-full text-deep-blue font-semibold text-sm hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all duration-300"
          >
            Learn more about Dev Inception
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
