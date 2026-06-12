"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";

// ============================================================================
// CountUp Component
// ============================================================================
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ============================================================================
// Data
// ============================================================================
const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 250, suffix: "+", label: "Success Stories" },
  { value: 50, suffix: "+", label: "Companies Trust Us" },
  { value: 98, suffix: "%", label: "Results Guaranteed" },
];

const values = [
  {
    title: "People-first Tech.",
    description:
      "We design solutions around real human needs — your users, your team, and your business goals. Tech is the means, not the end.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: "Agility meets Expertise.",
    description: "Iterative delivery backed by deep technical experience — we move fast without breaking things.",
    accent: "#0277BD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
  {
    title: "Partners, not just Providers.",
    description: "We succeed only when you do. Long-term relationships built on trust, transparency, and shared goals.",
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "On-time Delivery.",
    description: "We ship what we promise, when we promise it — every single time.",
    accent: "#039BE5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Exceptionally Talented Teams.",
    description: "Senior-only roster with 8+ years of experience. No juniors on production code.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
  },
  {
    title: "Resource-efficient.",
    description: "Optimized workflows and lean processes that maximize output without burning out teams.",
    accent: "#1565C0",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
];

const jobOpenings = {
  development: [] as string[],
  marketing: [] as string[],
  humanResources: [] as string[],
  designers: [] as string[],
};

// ============================================================================
// Hero Section
// ============================================================================
function HeroSection() {
  return (
    <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                Founded 2010 · 30+ employees worldwide
              </span>
            </div>

            <h1 className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white" style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 5rem)" }}>
              About <span className="gradient-text glow-text">Dev Inception</span>
            </h1>

            <p className="mt-7 body-lead text-gray-400 max-w-xl">
              We offer dynamic IT services to suit your specific requirements. Our flexible approach means we can adjust our offerings to accommodate your evolving needs, whether you require comprehensive IT infrastructure support, strategic consultancy or software development.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300">
                Work with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300">
                Our services
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-neon-blue/20 translate-x-3 translate-y-3" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/devinception-together-build.png"
                  alt="Dev Inception — together we build"
                  width={1379}
                  height={1141}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Stats Section
// ============================================================================
function StatsSection() {
  const stats = [
    { label: "Years of experience", value: 25, suffix: "+" },
    { label: "Success Stories", value: 150, suffix: "+" },
    { label: "Results Guaranteed", value: 100, suffix: "%" },
    { label: "employees in all over the world", value: 30, suffix: "+" },
  ];

  // Gradient colors copied from OpenPositionsSection roles
  const cardAccents = ["#1E88E5", "#00ACC1", "#0288D1", "#039BE5"];

  return (
    <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-blue/[0.05] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top content - copied from OpenPositionsSection */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-300">
                By the numbers
              </span>
            </div>
            <h2 className="h-section text-white">
              A track record we're{" "}
              <span className="gradient-text">proud of.</span>
            </h2>
          </div>

        </div>

        {/* Cards - with colors from OpenPositionsSection */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const numLabel = String(i + 1).padStart(2, "0");

            return (
              <div
                key={stat.label}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/20"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${cardAccents[i]}, ${cardAccents[i]}55, transparent)`,
                  }}
                />

                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.10] group-hover:opacity-[0.28] transition-opacity duration-500"
                  style={{ backgroundColor: cardAccents[i] }}
                />

                <div className="relative flex flex-col h-full">
                  {/* Top row: number label - similar to OpenPositionsSection */}
                  <div className="flex items-center justify-end">
                    <span
                      className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-300"
                      style={{ color: `${cardAccents[i]}90` }}
                    >
                      {numLabel}
                    </span>
                  </div>

                  {/* Stat number with gradient */}
                  <div
                    className="relative text-4xl sm:text-5xl font-bold tabular-nums transition-all duration-300 group-hover:scale-105 text-center my-4"
                    style={{
                      background: `linear-gradient(135deg, ${cardAccents[i]}, ${cardAccents[i]}80)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div
                    className="relative text-center text-sm font-medium transition-colors duration-300 text-gray-400 group-hover:text-[color:var(--accent)]"
                    style={{ "--accent": cardAccents[i] } as React.CSSProperties}
                  >
                    {stat.label}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-4 pt-2 flex justify-center">
                    <div
                      className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ background: `linear-gradient(90deg, ${cardAccents[i]}, ${cardAccents[i]}55)` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// History Section
// ============================================================================
function HistorySection() {
  return (
    <section className="py-20 bg-light-accent relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-section-dark border border-deep-blue/[0.07] p-7 lg:p-12 overflow-hidden relative">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow text-neon-purple">Our journey</p>
              <h2 className="mt-3 h-section text-white">
                Founded in <span className="gradient-text-dark">2010</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="body-lead text-white">
                Dev Inception helps organizations solve complex business challenges through technology that is purposeful, scalable, and built for long-term impact. We partner with startups, enterprises, and growing businesses to design and deliver digital systems that improve operations, accelerate growth, and create measurable value.
              </p>
              <p className="mt-5 body-base text-white/80">
                Over the years, we have evolved into a multidisciplinary team of strategists, designers, and engineers united by a shared commitment to excellence. From navigating periods of disruption to supporting ambitious transformation initiatives, our focus has remained consistent: building technology that aligns with business objectives, adapts to change, and enables sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Mission & Vision Section
// ============================================================================
function MissionVisionSection() {
  const missionPoints = [
    "Design digital solutions that solve real business challenges",
    "Align technology investments with measurable business outcomes",
    "Build secure, scalable, and future-ready systems",
    "Accelerate innovation without compromising operational stability",
    "Create lasting partnerships founded on trust, transparency, and results",
  ];

  return (
    <section className="bg-light-accent relative">
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Mission</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              At Dev Inception, we help organizations turn complexity into competitive advantage through technology that is purposeful, scalable, and built for long-term impact.
            </p>
            <div className="mt-5 space-y-2 text-sm text-deep-blue/60">
              {missionPoints.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 pt-4 border-t border-deep-blue/[0.06] text-deep-blue/60 text-sm">
              We combine strategic thinking with technical excellence to help organizations adapt, grow, and lead in an increasingly digital world.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Vision</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              Our vision is to become a global leader in digital innovation - setting the benchmark for smart, scalable, and sustainable technology solutions. We aim to redefine how modern businesses grow, connect, and thrive by merging deep technical expertise with creative thinking.
            </p>
            <p className="mt-4 text-deep-blue/70 leading-relaxed">
              In a world where change is constant, we envision a future where digital transformation is not a luxury, but a universal opportunity. We strive to build technologies that are not only powerful but accessible and adaptable to diverse industries and needs. Through continuous learning, cutting-edge tools, and a user-first mindset, we aspire to shape the future of digital ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Values Section (Our Edge)
// ============================================================================
function ValuesSection() {
  const values = [
    {
      title: "Senior Engineering",
      description: "Experienced engineers handle your project end to end — never juniors learning on your time.",
      accent: "#1E88E5",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Coordinated Teams",
      description: "Engineers, designers, and project leads work together — no slow handoffs between separate groups.",
      accent: "#00ACC1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      description: "Regular demos and honest updates, so you always know exactly where your project stands.",
      accent: "#0288D1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Design That Works",
      description: "We design based on real user research and testing — not guesswork or trends.",
      accent: "#039BE5",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Built to Scale",
      description: "Architected to grow with you — secure and reliable as your product and usage expand.",
      accent: "#00BCD4",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      description: "Clear quotes and honest scope — no hidden costs or surprise change orders.",
      accent: "#1565C0",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 4h4m-7 4h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2zm0 0v2a2 2 0 002 2h6a2 2 0 002-2v-2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Our edge
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              What makes <span className="gradient-text-dark">us different.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              The non-negotiables that show up in every project — the way we work, communicate, and ship.
            </p>
          </div>
        </div>

        {/* Cards grid - removed outer container padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => {
            const numLabel = String(i + 1).padStart(2, "0");

            return (
              <div
                key={value.title}
                className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-6 transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12] overflow-hidden min-h-[220px]"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${value.accent}, ${value.accent}55, transparent)` }}
                />

                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500"
                  style={{ backgroundColor: value.accent }}
                />

                {/* Background number */}
                <div className="absolute top-3 right-4 text-[68px] font-bold leading-none select-none pointer-events-none" style={{ color: `${value.accent}10` }}>
                  {numLabel}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      backgroundColor: `${value.accent}14`,
                      color: value.accent,
                      boxShadow: `inset 0 0 0 1px ${value.accent}26`
                    }}
                  >
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-deep-blue mb-2">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-deep-blue/60">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-2 pt-1">
                    <div
                      className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ background: `linear-gradient(90deg, ${value.accent}, ${value.accent}55)` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Careers Section (Culture & Benefits - Light Background)
// ============================================================================
function CareersSection() {
  const culturePoints = [
    {
      title: "Growth Environment",
      description: "A learning-driven workplace where individuals are encouraged to develop skills, take initiative, and grow professionally.",
      accent: "#1E88E5", // Updated to match OpenPositionsSection
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Inclusivity & Respect",
      description: "A culture that values diverse perspectives and fosters mutual respect, ensuring everyone feels heard, valued, and supported.",
      accent: "#00ACC1", // Updated to match OpenPositionsSection
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857" />
        </svg>
      ),
    },
    {
      title: "Engineered for Productivity",
      description: "A structured and collaborative environment designed to minimize friction, streamline workflows, and enable teams to perform at their best.",
      accent: "#0288D1", // Updated to match OpenPositionsSection
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
      {/* Background effects - matching OpenPositionsSection */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-blue/[0.05] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top content - matching OpenPositionsSection */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-300">
                Join the team
              </span>
            </div>
            <h2 className="h-section text-white">
              Build your future{" "}
              <span className="gradient-text">with us</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-gray-400 max-w-md lg:ml-auto">
              Whether you're an expert or just starting your career, Dev Inception offers an environment built for growth, learning, and leadership.
            </p>
          </div>
        </div>

        {/* Cards - matching OpenPositionsSection styling */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {culturePoints.map((item, i) => {
            const numLabel = String(i + 1).padStart(2, "0");

            return (
              <div key={item.title}>
                <div
                  className="group relative h-full p-5 lg:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                  style={
                    {
                      "--card-glow": `${item.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, ${item.accent}55, transparent)`,
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.10] group-hover:opacity-[0.28] transition-opacity duration-500"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="relative flex flex-col h-full">
                    {/* Top row: icon + number */}
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: item.accent,
                          boxShadow: `0 10px 22px -8px ${item.accent}80`,
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-300"
                        style={{ color: `${item.accent}90` }}
                      >
                        {numLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mt-4 text-base lg:text-[17px] font-bold text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                      style={{
                        ["--accent" as string]: item.accent,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-sm text-gray-400 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-4 pt-2">
                      <div
                        className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                        style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}55)` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
          >
            View All Opportunities →
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Open Positions Section (Dark Background - Like Values Section Style)
// ============================================================================
type JobOpenings = {
  development: string[];
  marketing: string[];
  humanResources: string[];
  designers: string[];
};

type Role = {
  title: string;
  key: keyof JobOpenings;
  icon: React.ReactNode;
  accent: string;
};

const roles: Role[] = [
  {
    title: "Development",
    key: "development",
    accent: "#1E88E5",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  },
  {
    title: "Marketing",
    key: "marketing",
    accent: "#00ACC1",
    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M20.488 9H15V3.512A9.001 9.001 0 0120.488 9z" /></>
  },
  {
    title: "Human Resources",
    key: "humanResources",
    accent: "#0288D1",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  },
  {
    title: "Designers",
    key: "designers",
    accent: "#039BE5",
    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>
  },
];

function OpenPositionsSection({ jobOpenings: propsJobOpenings }: { jobOpenings?: JobOpenings }) {
  const defaultOpenings: JobOpenings = {
    development: [],
    marketing: [],
    humanResources: [],
    designers: [],
  };

  const data = propsJobOpenings ?? defaultOpenings;

  return (
    <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-blue/[0.05] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top content - split layout from WhyChooseUs */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Current Openings
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              Join our <span className="gradient-text-dark">team</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              We're always looking for talented people to join our mission.
              If you're passionate about building great products, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roles.map((role, idx) => {
            const numLabel = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={role.key}
                className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12]"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${role.accent}, ${role.accent}55, transparent)`,
                  }}
                />

                {/* Corner glow */}
                <div
                  className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500"
                  style={{ backgroundColor: role.accent }}
                />

                <div className="relative flex flex-col h-full">
                  {/* Top row: icon + number */}
                  <div className="flex items-center justify-between">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: role.accent,
                        color: "white",
                        boxShadow: `0 10px 22px -8px ${role.accent}80`,
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        {role.icon}
                      </svg>
                    </span>
                    <span
                      className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-300"
                      style={{ color: `${role.accent}80` }}
                    >
                      {numLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-4 text-base lg:text-[17px] font-bold text-deep-blue tracking-tight leading-snug transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                    style={{
                      ["--accent" as string]: role.accent,
                    }}
                  >
                    {role.title}
                  </h3>

                  {/* Job openings or message */}
                  <div className="mt-3 flex-1">
                    {data[role.key].length > 0 ? (
                      <ul className="space-y-2">
                        {data[role.key].map((job, jobIdx) => (
                          <li key={jobIdx} className="flex items-start gap-2 text-sm text-deep-blue/60">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300 group-hover:scale-125"
                              style={{ backgroundColor: role.accent }}
                            />
                            <span className="leading-relaxed">{job}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-deep-blue/60 leading-relaxed">
                        No openings currently.
                        <br />
                        <a
                          href="mailto:careers@devinception.com"
                          className="inline-block mt-2 text-sm transition-all duration-300 hover:underline"
                          style={{ color: role.accent }}
                        >
                          careers@devinception.com →
                        </a>
                      </p>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-4 pt-2">
                    <div
                      className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ background: `linear-gradient(90deg, ${role.accent}, ${role.accent}55)` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Main Page Component
// ============================================================================
export default function AboutPage() {
  return (
    <>
      <HeroSection />

      <HistorySection />
      <MissionVisionSection />
      <StatsSection />
      <ValuesSection />
      <CareersSection />
      <OpenPositionsSection />

      <CTABanner
        eyebrow="Let's build together"
        heading={<>Have an idea? Let&apos;s create something <span className="gradient-text">extraordinary.</span></>}
        description="Need help with your next big idea? Our team is ready to build with you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}