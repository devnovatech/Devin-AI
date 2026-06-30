"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// import div from "./div";

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
      "From early MVPs to growing platforms — we build quickly without cutting the corners that cause problems later. Made for fast-moving teams.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    challenges: [
      "Speed to market without technical debt",
      "Scalable architecture from day one",
      // "Lean teams under investor pressure",
    ],
    deliverables: [
      "MVP built and launched quickly",
      "Cloud infrastructure that scales automatically",
      // "Product analytics and testing built in",
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
      "Interactive learning platforms, content delivery, and student-engagement tools. Accessible by design and built to scale for large audiences.",
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
      "Custom learning platform with analytics",
      "Accessible, WCAG-compliant design",
      "Cloud infrastructure built to scale",
    ],
  },
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 lg:py-20 bg-section-industries relative overflow-hidden">
      {/* Animated blooms */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/12 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute inset-0 dotted-grid-light opacity-40 pointer-events-none" />
      <div className="noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header — split editorial */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 lg:mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">
                Industries we serve
              </span>
            </div>
            <h2 className="h-section text-white">
              Powering Modern{" "}
              <span className="gradient-text">Digital Ecosystems</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-gray-400 max-w-md lg:ml-auto">
              We&apos;ve worked across these industries before. Pick one to see
              the challenges we often hear about — and how we help solve them.
            </p>
          </div>
        </div>

        {/* Tabbed showcase */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-5">
            {/* Mobile / tablet — horizontal pill row (wraps) */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-2">
              {industries.map((ind, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={ind.slug}
                    onClick={() => setActiveIndex(i)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm"
                    style={{
                      backgroundColor: isActive ? ind.accent : "rgba(255,255,255,0.05)",
                      color: isActive ? "white" : "rgba(255,255,255,0.75)",
                      borderColor: isActive ? "transparent" : "rgba(255,255,255,0.12)",
                      boxShadow: isActive
                        ? `0 8px 22px -8px ${ind.accent}90`
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
                    className="group relative w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 overflow-hidden border"
                    style={{
                      backgroundColor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                      borderColor: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                      boxShadow: isActive
                        ? `0 18px 36px -16px ${ind.accent}90`
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
                          background: `linear-gradient(90deg, ${ind.accent}25 0%, transparent 70%)`,
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
                        backgroundColor: isActive ? ind.accent : `${ind.accent}25`,
                        color: isActive ? "white" : ind.accent,
                        boxShadow: isActive
                          ? `0 12px 28px -10px ${ind.accent}90`
                          : "none",
                      }}
                    >
                      {ind.icon}
                    </div>

                    <div className="relative flex-1 min-w-0">
                      <h3 className="font-bold text-white text-base tracking-tight">
                        {ind.name}
                      </h3>
                      <p
                        className={`text-xs mt-0.5 truncate transition-opacity duration-300 ${isActive ? "text-gray-400" : "text-gray-500"
                          }`}
                      >
                        {ind.shortLabel} · click to explore
                      </p>
                    </div>

                    <svg
                      className={`relative w-4 h-4 shrink-0 transition-all duration-300 ${isActive
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
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <div
                className="relative rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 lg:p-8 shadow-2xl shadow-black/40 overflow-hidden" >
                {/* Big corner glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-[0.35]"
                  style={{ backgroundColor: active.accent }}
                />
                {/* Hairline accent border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl border"
                  style={{ borderColor: `${active.accent}50` }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: active.accent,
                        boxShadow: `0 12px 28px -10px ${active.accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
                        color: '#ffffff', // Explicitly set icon/text to white
                      }}
                    >
                      {active.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="eyebrow"
                        style={{ color: active.accent }}
                      >
                        Industry · {activeIndex + 1} / {industries.length}
                      </p>
                      <h3 className="mt-1 text-2xl lg:text-[1.875rem] font-bold text-white tracking-tight leading-[1.15]">
                        {active.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-gray-300 leading-relaxed text-[15px]">
                    {active.description}
                  </p>

                  {/* Two-column: challenges vs deliverables */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="eyebrow text-rose-400">
                        Common Challenges
                      </p>
                      <ul className="mt-4 space-y-3">
                        {active.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2.5 text-sm text-gray-400 leading-relaxed"
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
                            className="flex gap-2.5 text-sm text-gray-400 leading-relaxed"
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
                  {/* <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-sm text-gray-500">
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
                  </div> */}
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* See all link */}
        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white hover:text-deep-blue hover:border-white transition-all duration-300"
          >
            See all industries we serve

          </Link>
        </div>
      </div>
    </section>
  );
}
