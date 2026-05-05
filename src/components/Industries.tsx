"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface Industry {
  name: string;
  shortLabel: string;
  slug: string;
  description: string;
  accent: string;
  icon: ReactNode;
  challenges: string[];
  deliverables: string[];
}

const industries: Industry[] = [
  {
    name: "SaaS & Tech Startups",
    shortLabel: "SaaS",
    slug: "saas-startups",
    description:
      "MVPs to scale-ups — we ship fast without sacrificing the architecture decisions that bite later. Built for teams under VC pressure and runway constraints.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    challenges: [
      "Speed to market without technical debt",
      "Scalable architecture from day one",
      "Lean teams under investor pressure",
    ],
    deliverables: [
      "MVP shipped in 8–14 weeks",
      "Cloud-native infra that auto-scales",
      "Product analytics & A/B testing wired in",
    ],
  },
  {
    name: "E-commerce & Retail",
    shortLabel: "E-commerce",
    slug: "ecommerce-retail",
    description:
      "Conversion-tuned storefronts, secure checkout, and inventory that scales with you. Performance and trust drive revenue here — we obsess over both.",
    accent: "#0277BD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
    challenges: [
      "Cart abandonment & checkout friction",
      "PCI-DSS compliance & payment security",
      "Slow Core Web Vitals on mobile",
    ],
    deliverables: [
      "Conversion-tuned checkout flows",
      "Headless commerce on Shopify / custom",
      "Real-time inventory & ERP integrations",
    ],
  },
  {
    name: "Healthcare & Healthtech",
    shortLabel: "Healthcare",
    slug: "healthcare",
    description:
      "HIPAA-compliant platforms, telemedicine, and patient management systems. Engineered for the regulatory bar — without sacrificing the experience.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    challenges: [
      "HIPAA & data-privacy compliance",
      "Fragmented EHR / legacy systems",
      "Patient engagement & retention",
    ],
    deliverables: [
      "HIPAA-compliant platforms & audit trails",
      "Telemedicine + EHR API integrations",
      "AI-assisted triage & clinical workflows",
    ],
  },
  {
    name: "Education & EdTech",
    shortLabel: "Education",
    slug: "education",
    description:
      "Interactive learning platforms, content delivery systems, and student-engagement tools. Accessibility-first, scalable for cohorts of millions.",
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    challenges: [
      "Low engagement & completion rates",
      "Accessibility for diverse learners",
      "Scaling content for global cohorts",
    ],
    deliverables: [
      "Custom LMS with gamification & analytics",
      "WCAG-compliant accessible UX",
      "Cloud-native infra for million-user scale",
    ],
  },
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
      {/* Decorative blooms */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header — split editorial */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-14">
          <AnimatedSection className="lg:col-span-7">
            <p className="eyebrow text-neon-purple">Industries</p>
            <h2 className="mt-3 h-section text-deep-blue">
              Built for ambitious teams across{" "}
              <span className="gradient-text-dark">every sector.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Click an industry to see how we approach it — the recurring
              friction we hear about, and what we typically ship to solve it.
            </p>
          </AnimatedSection>
        </div>

        {/* Tabbed showcase */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Tabs */}
          <AnimatedSection className="lg:col-span-5">
            {/* Mobile / tablet — horizontal pill row (wraps) */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-2">
              {industries.map((ind, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={ind.slug}
                    onClick={() => setActiveIndex(i)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
                    style={{
                      backgroundColor: isActive ? ind.accent : "white",
                      color: isActive ? "white" : "#0a1628",
                      borderColor: isActive ? "transparent" : "rgba(10,22,40,0.08)",
                      boxShadow: isActive
                        ? `0 8px 22px -8px ${ind.accent}80`
                        : "none",
                    }}
                  >
                    {ind.shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Desktop — vertical tab list */}
            <div className="hidden lg:flex flex-col gap-2">
              {industries.map((ind, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={ind.slug}
                    onClick={() => setActiveIndex(i)}
                    className="group relative w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: isActive ? "white" : "transparent",
                      boxShadow: isActive
                        ? `0 18px 36px -16px ${ind.accent}55`
                        : "none",
                    }}
                  >
                    {/* Left accent bar */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-500"
                      style={{
                        height: isActive ? "60%" : "0%",
                        backgroundColor: ind.accent,
                      }}
                    />

                    {/* Soft accent tint */}
                    {isActive && (
                      <motion.span
                        layoutId="industries-tab-tint"
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, ${ind.accent}10 0%, transparent 70%)`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <div
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
                      style={{
                        backgroundColor: isActive ? ind.accent : `${ind.accent}15`,
                        color: isActive ? "white" : ind.accent,
                        boxShadow: isActive
                          ? `0 12px 28px -10px ${ind.accent}80`
                          : "none",
                      }}
                    >
                      {ind.icon}
                    </div>

                    <div className="relative flex-1 min-w-0">
                      <h3 className="font-bold text-deep-blue text-base tracking-tight">
                        {ind.name}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 truncate transition-opacity duration-300 ${
                          isActive ? "text-deep-blue/55" : "text-deep-blue/40"
                        }`}
                      >
                        {ind.shortLabel} · click to explore
                      </p>
                    </div>

                    <svg
                      className={`relative w-4 h-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={ind.accent}
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-9 shadow-xl shadow-deep-blue/5 overflow-hidden"
                style={
                  {
                    "--card-glow": `${active.accent}55`,
                  } as React.CSSProperties
                }
              >
                {/* Big corner glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-[0.18]"
                  style={{ backgroundColor: active.accent }}
                />
                {/* Hairline accent border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl border"
                  style={{ borderColor: `${active.accent}33` }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0"
                      style={{
                        backgroundColor: active.accent,
                        boxShadow: `0 12px 28px -10px ${active.accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
                      }}
                    >
                      {active.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="eyebrow"
                        style={{ color: active.accent }}
                      >
                        Industry · 0{activeIndex + 1} / 0{industries.length}
                      </p>
                      <h3 className="mt-1 text-2xl lg:text-[1.875rem] font-bold text-deep-blue tracking-tight leading-[1.15]">
                        {active.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-deep-blue/65 leading-relaxed text-[15px]">
                    {active.description}
                  </p>

                  {/* Two-column: challenges vs deliverables */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-7 sm:gap-8">
                    <div>
                      <p className="eyebrow text-rose-500/80">
                        Common Challenges
                      </p>
                      <ul className="mt-4 space-y-3">
                        {active.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2.5 text-sm text-deep-blue/75 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className="eyebrow"
                        style={{ color: active.accent }}
                      >
                        What We Deliver
                      </p>
                      <ul className="mt-4 space-y-3">
                        {active.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex gap-2.5 text-sm text-deep-blue/75 leading-relaxed"
                          >
                            <svg
                              className="w-4 h-4 mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke={active.accent}
                              strokeWidth={2.4}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-8 pt-6 border-t border-deep-blue/[0.07] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-sm text-deep-blue/50">
                      Working in this industry?
                    </span>
                    <Link
                      href={`/industries/${active.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold transition-all"
                      style={{ color: active.accent }}
                    >
                      Explore solutions for {active.shortLabel}
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
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* See all link */}
        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-deep-blue/20 rounded-full text-deep-blue font-semibold text-sm hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all duration-300"
          >
            See all industries we serve
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
