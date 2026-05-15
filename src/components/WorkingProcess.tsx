"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Stage {
  number: string;
  name: string;
  accent: string;
  bgMuted: string;
  description: string;
  activities: string[];
  /** Grid column placement (12-col grid). */
  colStart: number;
  colEnd: number;
  icon: ReactNode;
}

const stages: Stage[] = [
  {
    number: "01",
    name: "Plan",
    accent: "#4FC3F7",
    bgMuted: "rgba(79, 195, 247, 0.10)",
    description:
      "Discovery, audit, success metrics, scope and roadmap. We align on what success looks like before we touch a Figma file.",
    activities: ["Stakeholder interviews", "Tech & brand audit", "Success metrics", "Roadmap"],
    colStart: 1,
    colEnd: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Design",
    accent: "#A78BFA",
    bgMuted: "rgba(167, 139, 250, 0.10)",
    description:
      "Research-led design with high-fidelity prototypes. Tokens, components, motion, accessibility — productionised, not just pretty.",
    activities: ["UX research", "Design system", "Prototypes", "Motion & a11y"],
    colStart: 3,
    colEnd: 7,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l3.5 14.5L13 18l5-5-1.5-7.5L2 2z" />
        <circle cx="11" cy="11" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7 3 3-7 7-3-3z" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Develop",
    accent: "#2DD4BF",
    bgMuted: "rgba(45, 212, 191, 0.10)",
    description:
      "Two-week sprints, weekly demos, demoable from day 14. Clean, tested code shipped in production-ready increments.",
    activities: ["Bi-weekly demos", "Staging envs", "CI/CD pipeline", "Pair programming"],
    colStart: 5,
    colEnd: 10,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Test",
    accent: "#10B981",
    bgMuted: "rgba(16, 185, 129, 0.10)",
    description:
      "E2E, performance, security, and accessibility — locked behind CI gates. We ship with confidence, not surprises.",
    activities: ["E2E + visual regression", "Performance budgets", "OWASP review", "WCAG-AA audit"],
    colStart: 7,
    colEnd: 11,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Deploy",
    accent: "#EF4444",
    bgMuted: "rgba(239, 68, 68, 0.10)",
    description:
      "Zero-downtime production rollout with full rollback safety nets, observability, and a documented runbook handed off to your team.",
    activities: ["Zero-downtime deploy", "Rollback runbook", "Observability stack", "On-call setup"],
    colStart: 9,
    colEnd: 12,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Support",
    accent: "#F59E0B",
    bgMuted: "rgba(245, 158, 11, 0.10)",
    description:
      "On-call coverage, iterative improvements, A/B tests, growth experiments and quarterly business reviews.",
    activities: ["On-call", "A/B program", "Growth", "Quarterly review"],
    colStart: 10,
    colEnd: 13,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l1.5 1.5L17 4M19 6l1 1" />
      </svg>
    ),
  },
];

export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = stages[activeIdx];

  return (
    <section
      id="process"
      className="min-h-screen flex flex-col justify-center py-14 lg:py-16 bg-section-process relative overflow-hidden"
    >
      {/* Animated background blooms */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 dotted-grid-light opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-start mb-8 lg:mb-10">
          <AnimatedSection className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neon-blue">
                How we deliver
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.1]">
              Six stages.{" "}
              <span className="text-white/45">
                Designed to run in parallel, not waterfall.
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="body-base text-gray-400 max-w-md lg:ml-auto">
              Hover any stage on the timeline below — we don&apos;t pretend
              design ends before development starts, or that QA only happens
              at the end.
            </p>
          </AnimatedSection>
        </div>

        {/* Gantt-style timeline */}
        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl bg-white/[0.025] border border-white/10 p-5 lg:p-7 backdrop-blur-sm">
            {/* Vertical gridlines */}
            <div className="absolute inset-x-5 lg:inset-x-7 inset-y-0 grid grid-cols-12 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="border-l border-white/[0.04] h-full"
                />
              ))}
            </div>

            {/* Stage bars */}
            <div className="relative grid grid-cols-12 gap-y-2.5">
              {stages.map((stage, i) => {
                const isActive = activeIdx === i;
                return (
                  <motion.button
                    key={stage.number}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      gridColumnStart: stage.colStart,
                      gridColumnEnd: stage.colEnd,
                      backgroundColor: isActive ? stage.accent : stage.bgMuted,
                      borderColor: isActive
                        ? stage.accent
                        : `${stage.accent}40`,
                      boxShadow: isActive
                        ? `0 14px 32px -12px ${stage.accent}90, inset 0 1px 0 rgba(255,255,255,0.2)`
                        : "none",
                    }}
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="group relative flex items-center gap-2.5 h-10 px-3 rounded-md border text-left transition-colors duration-300"
                  >
                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider ${
                        isActive ? "text-white/80" : "text-white/40"
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={`text-sm font-bold tracking-tight truncate ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {stage.name}
                    </span>

                    {/* Active glow on right edge */}
                    {isActive && (
                      <motion.span
                        layoutId="stage-active-edge"
                        className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: stage.accent, boxShadow: `0 0 12px ${stage.accent}` }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Detail panel — updates on hover */}
        <div className="mt-7 lg:mt-9 grid lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          {/* LEFT — stage description */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{
                      backgroundColor: active.accent,
                      boxShadow: `0 14px 32px -10px ${active.accent}90, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}
                  >
                    {active.icon}
                  </motion.div>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                      style={{ color: `${active.accent}` }}
                    >
                      Stage {active.number}
                    </p>
                    <h3 className="mt-0.5 text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {active.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-gray-400 leading-relaxed max-w-xl">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — "what happens here" card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.number}-activities`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="relative rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-5 lg:p-6 overflow-hidden"
                style={{ "--accent": active.accent } as React.CSSProperties}
              >
                {/* Soft accent glow */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-25"
                  style={{ backgroundColor: active.accent }}
                />

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-gray-500">
                    What happens here
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                    {active.activities.map((a, i) => (
                      <motion.li
                        key={a}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: active.accent }}
                        />
                        <span className="truncate">{a}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
