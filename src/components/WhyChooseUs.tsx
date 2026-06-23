"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
// import AnimatedSection from "./AnimatedSection";

interface Reason {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
  proof: ReactNode;
}

const reasons: Reason[] = [
  {
    title: "Business Outcomes",
    description: "Alignment with business outcomes, not just technical delivery",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    proof: (
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-bold text-deep-blue">Senior</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-blue/50">
          team only
        </span>
      </div>
    ),
  },
  {
    title: "Embedded Collaboration",
    description: "Embedded collaboration that extends internal capability, not external dependency",
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
    title: "Long-Term Value",
    description: "Long-term value creation over short-term execution cycles",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    proof: (
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-bold text-deep-blue">Always</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-deep-blue/50">
          in the loop
        </span>
      </div>
    ),
  },
  {
    title: "Scalable Systems",
    description: "Scalable, future-ready systems designed for organizational growth",
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
    title: "Real-Time Delivery",
    description: " Delivery aligned with client time zones for real-time collaboration and reduced delays",
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
    description: "Clear quotes and honest scope — no hidden costs or surprise change orders.",
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
    <div className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-6 transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12] overflow-hidden min-h-[220px]">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${reason.accent}, ${reason.accent}55, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500"
        style={{ backgroundColor: reason.accent }}
      />

      {/* Background number */}
      <div className="absolute top-3 right-4 text-[68px] font-bold leading-none select-none pointer-events-none" style={{ color: `${reason.accent}10` }}>
        {numLabel}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
          style={{
            backgroundColor: `${reason.accent}14`,
            color: reason.accent,
            boxShadow: `inset 0 0 0 1px ${reason.accent}26`
          }}
        >
          {reason.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-tight tracking-tight text-deep-blue mb-2">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-deep-blue/60">
          {reason.description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-auto pt-4">
          <div
            className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
            style={{ background: `linear-gradient(90deg, ${reason.accent}, ${reason.accent}55)` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-14 lg:py-16 bg-section-why relative overflow-hidden">
      {/* Animated blooms */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-neon-blue/8 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute inset-0 dotted-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header — compact split */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-7 lg:mb-9">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Why teams choose us
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              Built on  More Than{" "}
              <span className="gradient-text-dark">Just Partnerships</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              We focus on doing great work and building relationships that
              last — the kind of team you come back to.
            </p>
          </div>
        </div>

        {/* 3×2 grid of reason cards - now with cleaner ValuesSection style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}