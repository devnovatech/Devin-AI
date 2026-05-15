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
  proof: ReactNode;
}

const reasons: Reason[] = [
  {
    title: "Senior-only roster",
    description: "Every IC has 8+ years shipping commercial software. No juniors on prod.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    proof: (
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-deep-blue tabular-nums">10.4</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-blue/50">
          yr avg
        </span>
      </div>
    ),
  },
  {
    title: "Cross-functional pods",
    description: "Engineer, designer, PM, QA on the same standup. No handoff lag.",
    accent: "#0277BD",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    proof: (
      <div className="flex -space-x-1.5">
        {["#1E88E5", "#0288D1", "#039BE5", "#00ACC1"].map((c) => (
          <span
            key={c}
            className="w-5 h-5 rounded-full ring-2 ring-white"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Two-week cadence",
    description: "Live burndown, Friday demos, retros same day. Predictable from day 1.",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    proof: (
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-deep-blue tabular-nums">14</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-blue/50">
          day sprint
        </span>
      </div>
    ),
  },
  {
    title: "Research-led design",
    description: "Real user interviews and usability tests — not Dribbble shots as UX.",
    accent: "#039BE5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    proof: (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[10px] font-semibold text-emerald-700 tracking-wide uppercase">
          WCAG-AA
        </span>
      </span>
    ),
  },
  {
    title: "Built for 10× scale",
    description: "Multi-tenant, observable, audit-ready by default. Not bolted on at Series B.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    proof: (
      <div className="flex items-end gap-0.5 h-5">
        {[30, 50, 70, 90, 100].map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: "easeOut" }}
            className="w-1 rounded-sm bg-deep-blue"
            style={{ opacity: 0.3 + (i * 0.15) }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Transparent pricing",
    description: "Fixed-scope quotes, monthly burn caps, no change-order theatre.",
    accent: "#1565C0",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h4m-7 4h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2" />
      </svg>
    ),
    proof: (
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-deep-blue tabular-nums">$0</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-blue/50">
          surprises
        </span>
      </div>
    ),
  },
];

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const numLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5"
      style={{ "--accent": reason.accent } as React.CSSProperties}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${reason.accent}, ${reason.accent}55, transparent)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.10] group-hover:opacity-[0.28] transition-opacity duration-500"
        style={{ backgroundColor: reason.accent }}
      />

      <div className="relative flex flex-col h-full">
        {/* Top row: icon + number */}
        <div className="flex items-center justify-between">
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: reason.accent,
              color: "white",
              boxShadow: `0 10px 22px -8px ${reason.accent}80`,
            }}
          >
            {reason.icon}
          </span>
          <span
            className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-300"
            style={{ color: `${reason.accent}90` }}
          >
            {numLabel}
          </span>
        </div>

        {/* Title + description */}
        <h3 className="mt-4 text-base lg:text-[17px] font-bold text-deep-blue tracking-tight leading-snug transition-colors duration-300 group-hover:text-[color:var(--accent)]">
          {reason.title}
        </h3>
        <p className="mt-1.5 text-xs lg:text-[13px] text-deep-blue/55 leading-relaxed">
          {reason.description}
        </p>

        {/* Proof + arrow */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-2">
          {reason.proof}
          <span className="w-7 h-7 rounded-full border border-deep-blue/10 flex items-center justify-center text-deep-blue/40 group-hover:border-transparent group-hover:bg-[color:var(--accent)] group-hover:text-white group-hover:-rotate-45 transition-all duration-300 shrink-0">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-14 lg:py-16 bg-section-why relative overflow-hidden">
      {/* Animated blooms */}
      <motion.div
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-neon-blue/8 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 dotted-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header — compact split */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-7 lg:mb-9">
          <AnimatedSection className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Why teams pick us
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              Six reasons clients{" "}
              <span className="gradient-text-dark">stay for years.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              We measure success by how often teams come back for project two,
              three, and four.
            </p>
          </AnimatedSection>
        </div>

        {/* 3×2 grid of reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* Compact CTA strip */}
        <AnimatedSection className="mt-7 lg:mt-8" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-white/60 border border-deep-blue/[0.07] backdrop-blur-sm px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-sm text-deep-blue/70">
                <span className="font-semibold text-deep-blue">
                  Every engagement, every principle.
                </span>{" "}
                Reviewed quarterly.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-deep-blue text-white font-semibold text-xs hover:bg-neon-blue hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
            >
              Start a project
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
