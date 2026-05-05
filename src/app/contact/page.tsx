"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";

const DEEP = "#0a1628";
const LIGHT = "#e3f2fd";

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

const channels = [
  {
    label: "Email",
    value: "info@devinception.com",
    href: "mailto:info@devinception.com",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Schedule a call",
    value: "Pick a 30-min slot",
    href: "/contact",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "NDA-friendly",
    value: "Mutual NDA before discovery",
    accent: "#1565C0",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
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
      <section className="pt-32 pb-16 relative overflow-hidden">
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

      {/* dark → light */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      {/* ───────── Form + Contact info (split) ───────── */}
      <section className="py-16 lg:py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT — Contact info card */}
            <AnimatedSection direction="left" className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-xl shadow-deep-blue/5">
                <p className="eyebrow text-neon-purple">Reach us</p>
                <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-deep-blue tracking-tight leading-tight">
                  Pick the channel that{" "}
                  <span className="gradient-text-dark">works for you.</span>
                </h2>

                <div className="mt-7 space-y-3">
                  {channels.map((c) => {
                    const Wrapper = c.href ? "a" : "div";
                    const props = c.href
                      ? c.href.startsWith("/")
                        ? { href: c.href }
                        : { href: c.href }
                      : {};
                    return (
                      <Wrapper
                        key={c.label}
                        {...props}
                        className={`group relative flex items-center gap-4 p-4 rounded-xl border border-deep-blue/[0.07] bg-light-accent/40 ${
                          c.href
                            ? "hover:bg-white hover:border-deep-blue/[0.12] cursor-pointer"
                            : ""
                        } transition-all duration-300`}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${c.accent}15`,
                            color: c.accent,
                          }}
                        >
                          {c.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-deep-blue/45 font-semibold">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-deep-blue text-sm font-semibold">
                            {c.value}
                          </p>
                        </div>
                        {c.href && (
                          <svg
                            className="w-4 h-4 text-deep-blue/30 group-hover:text-deep-blue/70 group-hover:translate-x-1 transition-all duration-300 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.4}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        )}
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Trust strip */}
                <div className="mt-7 pt-6 border-t border-deep-blue/[0.07]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-deep-blue/60">
                      <span className="font-semibold text-deep-blue">4.9</span>
                      {" "}from 100+ engagements
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT — Form */}
            <AnimatedSection direction="right" className="lg:col-span-7">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* light → dark */}
      <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />

      {/* ───────── What happens next ───────── */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-neon-blue">What happens next</p>
            <h2 className="mt-3 h-section text-white">
              From message to{" "}
              <span className="gradient-text">first sprint.</span>
            </h2>
            <p className="mt-5 body-base text-gray-400">
              No black box. Here&apos;s exactly what to expect after you hit
              send.
            </p>
          </AnimatedSection>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="hidden lg:block absolute top-7 left-[16.5%] right-[16.5%] h-px border-t border-dashed border-white/15" />

            {nextSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
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
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom hint */}
          <AnimatedSection delay={0.4} className="mt-12 text-center">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
