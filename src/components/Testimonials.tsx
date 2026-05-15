"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Dev Inception transformed our outdated platform into a modern, scalable solution. Their team felt like an extension of ours — same Slack, same standups, same goals from week one.",
    name: "Sarah Chen",
    role: "CTO",
    company: "FinFlow Technologies",
    accent: "#1E88E5",
    metric: "+240% MoM growth",
  },
  {
    quote:
      "From concept to deployment, they delivered our mobile app ahead of schedule. The quality exceeded our expectations — 4.8★ on launch day.",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "HealthBridge",
    accent: "#0288D1",
    metric: "14 hospitals onboarded",
  },
  {
    quote:
      "Their AI/ML team built a recommendation engine that boosted our conversion rate by 40%. Absolutely brilliant work.",
    name: "Emily Larsson",
    role: "VP of Product",
    company: "ShopSphere",
    accent: "#0097A7",
    metric: "+40% conversion lift",
  },
  {
    quote:
      "The staff augmentation model was exactly what we needed. Skilled engineers who integrated seamlessly with our team from day one.",
    name: "David Park",
    role: "Engineering Manager",
    company: "CloudNine SaaS",
    accent: "#039BE5",
    metric: "6 engineers · 18 months",
  },
];

const ratingStats = [
  { value: "4.9", suffix: "/5", label: "Avg rating" },
  { value: "100+", label: "Reviews" },
  { value: "98%", label: "Retention" },
  { value: "NPS 72", label: "Promoter score" },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  return (
    <section className="min-h-screen flex flex-col justify-center py-14 lg:py-16 relative overflow-hidden bg-section-testimonials">
      {/* Animated blooms */}
      <motion.div
        className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-blue/8 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="absolute inset-0 dotted-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Compact header */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-7 lg:mb-9">
          <AnimatedSection className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Client stories
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              Trusted by teams that{" "}
              <span className="gradient-text-dark">ship every quarter.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-5" delay={0.1}>
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              From Series-B startups to public-market platforms — here&apos;s
              what they say after working with us.
            </p>
          </AnimatedSection>
        </div>

        {/* Main: featured + sidebar */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* LEFT — featured testimonial (large) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] p-6 lg:p-8 shadow-xl shadow-deep-blue/5 overflow-hidden"
                style={{ "--accent": active.accent } as React.CSSProperties}
              >
                {/* Accent glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-[0.18]"
                  style={{ backgroundColor: active.accent }}
                />

                {/* Top row: featured tag + stars */}
                <div className="relative flex items-center justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em]"
                    style={{
                      color: active.accent,
                      backgroundColor: `${active.accent}12`,
                      border: `1px solid ${active.accent}30`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: active.accent }}
                    />
                    Featured story
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-3.5 h-3.5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="relative text-base lg:text-lg text-deep-blue/85 leading-relaxed font-medium">
                  &ldquo;{active.quote}&rdquo;
                </p>

                {/* Metric callout */}
                <div
                  className="relative mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{
                    backgroundColor: `${active.accent}10`,
                    border: `1px solid ${active.accent}25`,
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={active.accent}
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span
                    className="text-xs font-bold tracking-wide"
                    style={{ color: active.accent }}
                  >
                    {active.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="relative mt-6 pt-5 border-t border-deep-blue/[0.07] flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{
                      backgroundColor: active.accent,
                      boxShadow: `0 10px 22px -8px ${active.accent}80`,
                    }}
                  >
                    {active.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <p className="text-deep-blue font-bold text-sm">
                      {active.name}
                    </p>
                    <p className="text-deep-blue/55 text-xs">
                      {active.role} · {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — sidebar: other testimonials + rating stats */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Mini testimonial list */}
            {testimonials.map((t, i) => {
              if (i === activeIdx) return null;
              return (
                <motion.button
                  key={t.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ x: -3 }}
                  onClick={() => setActiveIdx(i)}
                  className="group text-left flex-1 rounded-2xl bg-white/70 border border-deep-blue/[0.07] hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 hover:border-deep-blue/15 transition-all duration-300 p-4 lg:p-5 backdrop-blur-sm"
                  style={{ "--accent": t.accent } as React.CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                      style={{ backgroundColor: t.accent }}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-deep-blue font-bold text-xs truncate">
                        {t.name}
                        <span className="text-deep-blue/45 font-normal">
                          {" "}
                          · {t.company}
                        </span>
                      </p>
                      <p className="text-[10px] text-deep-blue/55 truncate">
                        {t.role}
                      </p>
                    </div>
                    <span
                      className="text-[10px] font-bold tracking-wide shrink-0 px-2 py-0.5 rounded-full"
                      style={{
                        color: t.accent,
                        backgroundColor: `${t.accent}10`,
                      }}
                    >
                      {t.metric}
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs text-deep-blue/65 leading-relaxed line-clamp-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Bottom: aggregate rating bar */}
        <AnimatedSection className="mt-6 lg:mt-7" delay={0.3}>
          <div className="relative rounded-2xl bg-deep-blue text-white overflow-hidden shadow-xl shadow-deep-blue/20">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
              {ratingStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="px-5 py-4 text-center"
                >
                  <p className="text-xl lg:text-2xl font-bold gradient-text tabular-nums tracking-tight">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-sm text-gray-400 font-medium">
                        {stat.suffix}
                      </span>
                    )}
                  </p>
                  <p className="mt-0.5 text-[11px] text-gray-400 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
