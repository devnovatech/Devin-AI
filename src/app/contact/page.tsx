"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
  multiline,
  rows = 4,
}: FloatingFieldProps) {
  const filled = value.length > 0;
  const baseInput =
    "peer w-full px-4 pt-6 pb-2 rounded-xl bg-deep-blue/[0.03] border outline-none transition-colors text-deep-blue placeholder-transparent";
  const errorClass = error
    ? "border-red-400/60"
    : "border-deep-blue/[0.12] focus:border-neon-blue/60";

  const SharedLabel = (
    <label
      htmlFor={id}
      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
        filled
          ? "top-1.5 text-[11px] text-neon-blue"
          : "top-4 text-sm text-deep-blue/40"
      } peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-neon-blue`}
    >
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );

  return (
    <div>
      <div className="relative">
        {multiline ? (
          <textarea
            id={id}
            placeholder=" "
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInput} ${errorClass} resize-none`}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder=" "
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInput} ${errorClass}`}
          />
        )}
        {SharedLabel}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const projectTypes = [
  {
    id: "web",
    label: "Web App",
    basePrice: 5000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm0 0h18M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18" />
      </svg>
    ),
  },
  {
    id: "mobile",
    label: "Mobile App",
    basePrice: 10000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <rect x="6" y="3" width="12" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    basePrice: 8000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI / ML",
    basePrice: 15000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "saas",
    label: "SaaS Platform",
    basePrice: 20000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "custom",
    label: "Custom Build",
    basePrice: 10000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const projectFeatures = [
  { id: "auth", label: "Authentication", price: 1500 },
  { id: "payments", label: "Payments", price: 2000 },
  { id: "admin", label: "Admin Dashboard", price: 3000 },
  { id: "realtime", label: "Real-time / Chat", price: 2500 },
  { id: "ai_int", label: "AI / Chatbot", price: 4000 },
  { id: "analytics", label: "Analytics", price: 2000 },
  { id: "api", label: "API Integrations", price: 1500 },
  { id: "i18n", label: "Multi-language", price: 1500 },
  { id: "design", label: "Custom Design", price: 3000 },
  { id: "cms", label: "CMS", price: 2000 },
];

const complexityLevels = [
  { id: "simple", label: "MVP", multiplier: 1.0, description: "Core features" },
  { id: "medium", label: "Standard", multiplier: 1.4, description: "Full-featured" },
  { id: "complex", label: "Enterprise", multiplier: 1.85, description: "Scale & polish" },
];

const timelineOptions = [
  { id: "standard", label: "Standard", multiplier: 1.0, description: "3–6 months" },
  { id: "fast", label: "Fast-track", multiplier: 1.3, description: "1–3 months" },
];

const nextSteps = [
  {
    number: "01",
    title: "We get back within 24h",
    description:
      "An engineer or strategist (not a salesperson) reads your note and replies with a few questions or a calendar link.",
    accent: "#1E88E5",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "30-min discovery call",
    description:
      "We talk through goals, constraints, and timelines. No pitch deck — just a working session to understand the problem.",
    accent: "#0288D1",
    duration: "Day 2–5",
  },
  {
    number: "03",
    title: "Tailored proposal",
    description:
      "Within a week, you get a written proposal with scope, timeline, fixed quote, and a recommended team. Take your time.",
    accent: "#00ACC1",
    duration: "Day 5–10",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Budget estimator state ──
  const [projectType, setProjectType] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<string>("medium");
  const [timeline, setTimeline] = useState<string>("standard");

  const toggleFeature = (id: string) =>
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const activeType = projectTypes.find((t) => t.id === projectType);
  const activeComplexity =
    complexityLevels.find((c) => c.id === complexity) ?? complexityLevels[1];
  const activeTimeline =
    timelineOptions.find((t) => t.id === timeline) ?? timelineOptions[0];

  const featuresTotal = selectedFeatures.reduce(
    (sum, id) =>
      sum + (projectFeatures.find((f) => f.id === id)?.price ?? 0),
    0
  );
  const subtotal = (activeType?.basePrice ?? 0) + featuresTotal;
  const total = subtotal * activeComplexity.multiplier * activeTimeline.multiplier;
  const minBudget = Math.round((total * 0.85) / 500) * 500;
  const maxBudget = Math.round((total * 1.15) / 500) * 500;

  const formatUSD = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;

  function applyEstimateToMessage() {
    const featureLabels = selectedFeatures
      .map((id) => projectFeatures.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const summary = [
      `Project type: ${activeType?.label ?? "—"}`,
      `Complexity: ${activeComplexity.label}`,
      `Timeline: ${activeTimeline.label} (${activeTimeline.description})`,
      featureLabels ? `Features: ${featureLabels}` : null,
      `Estimated budget: ${formatUSD(minBudget)} – ${formatUSD(maxBudget)}`,
      "",
      "Additional details:",
    ]
      .filter(Boolean)
      .join("\n");
    setFormState((prev) => ({
      ...prev,
      message: summary + (prev.message ? "\n" + prev.message : "\n"),
    }));
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      errs.email = "Invalid email address";
    if (!formState.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="pt-32 pb-16 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                Currently accepting new projects
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)" }}
            >
              Let&apos;s build{" "}
              <span className="gradient-text glow-text">together.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
              Tell us about your project — we&apos;ll come back with a tailored
              plan within 24 hours. No salespeople, no follow-up calls until
              you&apos;re ready.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Form + Contact info (split) ───────── */}
      <section className="py-16 lg:py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* LEFT — Budget estimator */}
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-xl shadow-deep-blue/5">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow text-neon-purple">Budget estimator</p>
                    <h2 className="mt-1.5 text-xl lg:text-2xl font-bold text-deep-blue tracking-tight leading-tight">
                      Get an instant{" "}
                      <span className="gradient-text-dark">ballpark.</span>
                    </h2>
                  </div>
                </div>
                <p className="mt-3 text-sm text-deep-blue/60">
                  Pick what you&apos;re building — we&apos;ll estimate the range. No signup, no spam.
                </p>

                {/* Step 1 — Project type */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    1. What are you building?
                  </p>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((t) => {
                      const active = projectType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setProjectType(t.id)}
                          className={`group flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border text-center transition-all duration-200 ${
                            active
                              ? "border-neon-blue bg-neon-blue/[0.06] shadow-sm shadow-neon-blue/10"
                              : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                          }`}
                        >
                          <span
                            className={`transition-colors ${
                              active ? "text-neon-blue" : "text-deep-blue/60 group-hover:text-deep-blue"
                            }`}
                          >
                            {t.icon}
                          </span>
                          <span
                            className={`text-[11px] font-semibold leading-tight ${
                              active ? "text-deep-blue" : "text-deep-blue/70"
                            }`}
                          >
                            {t.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 — Features */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                      2. Features
                    </p>
                    {selectedFeatures.length > 0 && (
                      <span className="text-[10px] font-semibold text-neon-blue">
                        {selectedFeatures.length} selected
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {projectFeatures.map((f) => {
                      const active = selectedFeatures.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => toggleFeature(f.id)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            active
                              ? "bg-neon-blue text-white border-neon-blue shadow-sm shadow-neon-blue/30"
                              : "bg-deep-blue/[0.03] text-deep-blue/75 border-deep-blue/[0.08] hover:bg-deep-blue/[0.06] hover:text-deep-blue"
                          }`}
                        >
                          {active && <span className="mr-1">✓</span>}
                          {f.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 — Complexity */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    3. Scope
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {complexityLevels.map((c) => {
                      const active = complexity === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setComplexity(c.id)}
                          className={`px-2 py-2.5 rounded-xl border text-left transition-all duration-200 ${
                            active
                              ? "border-neon-blue bg-neon-blue/[0.06]"
                              : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                          }`}
                        >
                          <span
                            className={`block text-xs font-bold ${
                              active ? "text-neon-blue" : "text-deep-blue"
                            }`}
                          >
                            {c.label}
                          </span>
                          <span className="block text-[10px] text-deep-blue/55 mt-0.5">
                            {c.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4 — Timeline */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    4. Timeline
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {timelineOptions.map((t) => {
                      const active = timeline === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimeline(t.id)}
                          className={`px-3 py-2.5 rounded-xl border text-left transition-all duration-200 ${
                            active
                              ? "border-neon-blue bg-neon-blue/[0.06]"
                              : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                          }`}
                        >
                          <span
                            className={`block text-xs font-bold ${
                              active ? "text-neon-blue" : "text-deep-blue"
                            }`}
                          >
                            {t.label}
                          </span>
                          <span className="block text-[10px] text-deep-blue/55 mt-0.5">
                            {t.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Result */}
                <motion.div
                  key={`${minBudget}-${maxBudget}`}
                  initial={{ scale: 0.98, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-7 relative p-5 rounded-2xl bg-gradient-to-br from-deep-blue to-[#0d1f3a] text-white overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-neon-blue/25 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-neon-purple/20 blur-3xl pointer-events-none" />
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60 font-semibold">
                      Estimated budget
                    </p>
                    <p className="mt-2 text-3xl lg:text-[2.1rem] font-bold tracking-tight leading-none">
                      {formatUSD(minBudget)}
                      <span className="text-white/40 mx-2 font-normal">–</span>
                      {formatUSD(maxBudget)}
                    </p>
                    <p className="mt-2 text-[11px] text-white/50 leading-relaxed">
                      Indicative range based on your selections. Final scope and
                      fixed quote are confirmed during the discovery call.
                    </p>
                    <button
                      type="button"
                      onClick={applyEstimateToMessage}
                      className="mt-4 group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all duration-200"
                    >
                      Use these details in form
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT — Form + Contact info */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="relative rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-9 shadow-xl shadow-deep-blue/5 overflow-hidden">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-blue flex items-center justify-center shadow-xl shadow-neon-blue/40"
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="h-section text-deep-blue">Got it!</h3>
                    <p className="mt-4 body-lead text-deep-blue/60 max-w-md mx-auto">
                      We&apos;ve received your message. Expect a reply from a
                      real engineer within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                        });
                      }}
                      className="mt-8 inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple text-sm font-semibold transition-colors"
                    >
                      ← Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-7">
                      <p className="eyebrow text-neon-blue">Tell us about it</p>
                      <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-deep-blue tracking-tight">
                        Start a project
                      </h2>
                      <p className="mt-2 text-sm text-deep-blue/60">
                        Rough idea or fully scoped — both work. We&apos;ll
                        figure out the rest together.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FloatingField
                          id="name"
                          label="Your name"
                          required
                          value={formState.name}
                          onChange={(v) =>
                            setFormState({ ...formState, name: v })
                          }
                          error={errors.name}
                        />
                        <FloatingField
                          id="email"
                          label="Work email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(v) =>
                            setFormState({ ...formState, email: v })
                          }
                          error={errors.email}
                        />
                      </div>

                      <FloatingField
                        id="company"
                        label="Company"
                        value={formState.company}
                        onChange={(v) =>
                          setFormState({ ...formState, company: v })
                        }
                      />

                      <FloatingField
                        id="message"
                        label="Tell us what you're building"
                        required
                        multiline
                        rows={5}
                        value={formState.message}
                        onChange={(v) =>
                          setFormState({ ...formState, message: v })
                        }
                        error={errors.message}
                      />

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-blue rounded-xl text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                      >
                        Send message
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
                      </motion.button>

                      <p className="text-xs text-center text-deep-blue/45">
                        By submitting, you agree to our reply within 24h. We
                        won&apos;t share your info or hassle you.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Quick channels + trust */}
              <div className="flex-1 rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-xl shadow-deep-blue/5 flex flex-col">
                <p className="eyebrow text-neon-purple">Prefer not to wait?</p>
                <h3 className="mt-2 text-xl lg:text-2xl font-bold text-deep-blue tracking-tight leading-tight">
                  Reach us{" "}
                  <span className="gradient-text-dark">directly.</span>
                </h3>

                <div className="mt-5 space-y-3">
                  <a
                    href="mailto:info@devinception.com"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-deep-blue/[0.07] bg-light-accent/40 hover:bg-white hover:border-deep-blue/[0.14] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#1E88E5]/10 text-[#1E88E5]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-deep-blue/45 font-semibold">
                        Email
                      </p>
                      <p className="mt-0.5 text-deep-blue text-sm font-semibold truncate">
                        info@devinception.com
                      </p>
                    </div>
                    <svg className="w-4 h-4 text-deep-blue/30 group-hover:text-deep-blue/70 group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="group flex items-center gap-4 p-4 rounded-xl border border-deep-blue/[0.07] bg-light-accent/40 hover:bg-white hover:border-deep-blue/[0.14] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#0288D1]/10 text-[#0288D1]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-deep-blue/45 font-semibold">
                        Schedule a call
                      </p>
                      <p className="mt-0.5 text-deep-blue text-sm font-semibold">
                        Pick a 30-min slot
                      </p>
                    </div>
                    <svg className="w-4 h-4 text-deep-blue/30 group-hover:text-deep-blue/70 group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Trust strip */}
                <div className="mt-auto pt-6 border-t border-deep-blue/[0.07]">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-deep-blue/50 font-semibold">
                        4.9 rating
                      </p>
                    </div>
                    <div className="text-center border-x border-deep-blue/[0.07]">
                      <p className="text-base font-bold text-deep-blue">24h</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-deep-blue/50 font-semibold">
                        Response
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold text-deep-blue">NDA</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-deep-blue/50 font-semibold">
                        Friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ───────── What happens next ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-neon-blue">What happens next</p>
            <h2 className="mt-3 h-section text-white">
              From message to{" "}
              <span className="gradient-text">first sprint.</span>
            </h2>
            <p className="mt-5 body-base text-gray-400">
              No black box. Here&apos;s exactly what to expect after you hit
              send.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="hidden lg:block absolute top-7 left-[16.5%] right-[16.5%] h-px border-t border-dashed border-white/15" />

            {nextSteps.map((step, i) => (
              <div key={step.number}>
                <div
                  className="group relative h-full p-6 lg:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                  style={
                    {
                      "--card-glow": `${step.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.16] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div className="relative flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 z-10"
                      style={{
                        backgroundColor: step.accent,
                        boxShadow: `0 12px 28px -10px ${step.accent}80`,
                      }}
                    >
                      {step.number}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                      style={{
                        color: step.accent,
                        backgroundColor: `${step.accent}15`,
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="relative h-card text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="relative text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom hint */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Prefer to skip the form?{" "}
              <a
                href="mailto:info@devinception.com"
                className="text-neon-blue hover:underline font-semibold"
              >
                info@devinception.com
              </a>{" "}
              — same response time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
