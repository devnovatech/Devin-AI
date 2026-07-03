"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, X, Check } from "lucide-react";

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

const COMPARISONS = [
  {
    category: "Team seniority",
    them: "Junior labour pyramids — account manager shields the seniors after the pitch.",
    us: "8+ years average. The names on the proposal are the names on the work.",
  },
  {
    category: "Delivery cadence",
    them: "Quarterly status decks, weekly emails, surprises at handoff.",
    us: "Working software demoed every Friday — transparent burndowns, preview envs.",
  },
  {
    category: "Scope changes",
    them: '"Sure, we can add it" → invoice surprises and slipped timelines.',
    us: "Change-control protocol with impact analysis and client sign-off, every time.",
  },
  {
    category: "Architecture",
    them: "Built for handoff. Scales for the launch, not for the roadmap.",
    us: "Architecture and code ready to support 10× — performance budgets enforced.",
  },
  {
    category: "User focus",
    them: "Stakeholder-driven specs. Build it, ship it, hope it works.",
    us: "Real user research from day one. Usability-tested before launch.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-deep-blue/10 bg-section-why">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Why Us</span>
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-deep-blue">
              Why Businesses Choose <span className="gradient-text-dark">Dev Inception.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              What you typically get from an agency engagement vs. what you actually get from us. Built into every contract, baked into how we hire.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-deep-blue/10">
          {/* Header row */}
          <div className="grid grid-cols-12 items-center bg-deep-blue/5">
            <div className="col-span-12 hidden border-r border-deep-blue/10 px-5 py-4 md:col-span-3 md:block">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-deep-blue/50">
                Category
              </p>
            </div>
            <div className="col-span-6 border-r border-deep-blue/10 px-5 py-4 md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-deep-blue/10 text-deep-blue/60">
                  <X size={14} strokeWidth={2.5} />
                </span>
                <p className="text-[0.95rem] font-bold text-deep-blue/70">Typical agency</p>
              </div>
            </div>
            <div className="col-span-6 px-5 py-4 md:col-span-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-[#0A1628] text-white">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <p className="text-[0.95rem] font-bold text-deep-blue">Dev Inception</p>
              </div>
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, i) => (
            <div
              key={row.category}
              className="grid grid-cols-12 items-stretch border-t border-deep-blue/10"
            >
              {/* Category */}
              <div className="col-span-12 border-b border-deep-blue/10 bg-deep-blue/5 px-5 py-3 md:col-span-3 md:border-b-0 md:border-r">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-deep-blue/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[0.95rem] font-bold tracking-tight text-deep-blue">
                  {row.category}
                </p>
              </div>

              {/* Them */}
              <div className="col-span-6 border-r border-deep-blue/10 px-5 py-5 md:col-span-4">
                <p className="text-[0.95rem] leading-relaxed text-deep-blue/40 line-through decoration-deep-blue/20">
                  {row.them}
                </p>
              </div>

              {/* Us */}
              <div className="group relative col-span-6 px-5 py-5 transition-colors hover:bg-deep-blue/5 md:col-span-5">
                <p className="text-[0.95rem] font-medium leading-relaxed text-deep-blue/90">
                  {row.us}
                </p>
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-[#0A1628] transition-transform group-hover:scale-y-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}