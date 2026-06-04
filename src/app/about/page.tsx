"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

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

const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "+", label: "Engineers & experts" },
  { value: 15, suffix: "+", label: "Countries served" },
  { value: 4.9, suffix: "★", label: "Avg client rating", isFloat: true },
];

const values = [
  {
    title: "People-first, always",
    description:
      "We design solutions around real human needs — your users, your team, and your business goals. Tech is the means, not the end.",
    accent: "#1E88E5",
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: "Strategic partners, not vendors",
    description:
      "We integrate with your vision, collaborate openly, and prioritize your growth.",
    accent: "#0277BD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "On time. Every time.",
    description:
      "We follow through with proactive PM and dependable delivery.",
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Built by exceptional talent",
    description:
      "Engineers, designers, and strategists from across the globe.",
    accent: "#039BE5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
  },
  {
    title: "Smart with every resource",
    description:
      "We optimize time, talent, and budget — no waste.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
  {
    title: "Agility backed by expertise",
    description:
      "Rapid pivots, long-term scaling — we adapt with depth.",
    accent: "#1565C0",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
];

const teamHighlights = [
  {
    label: "Engineering",
    count: "32",
    description:
      "Senior engineers across mobile, web, AI, and cloud — many from FAANG, all vetted on real builds.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    label: "Design",
    count: "8",
    description:
      "Product designers and researchers who shipped at venture-backed startups and Fortune 500 enterprises.",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    label: "Strategy & PM",
    count: "10",
    description:
      "Project managers, strategists, and ops experts who keep things on rails — and stakeholders informed.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── Hero (split with image) ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <AnimatedSection direction="left" className="lg:col-span-7">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                  Founded 2019 · 50+ engineers · 15+ countries
                </span>
              </div>

              <h1
                className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 5rem)" }}
              >
                We build software with{" "}
                <span className="gradient-text glow-text">people in mind.</span>
              </h1>

              <p className="mt-7 body-lead text-gray-400 max-w-xl">
                Dev Inception is a global engineering studio. From fast-growing
                startups to Fortune 500 teams, we partner with brands that dare
                to innovate — building things that work, scale, and matter.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                  >
                    Work with us
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.span>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  Our services
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl bg-neon-blue/20 translate-x-3 translate-y-3"
                  aria-hidden="true"
                />
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

      {/* ───────── Stats ───────── */}
      <section className="py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-neon-purple">By the numbers</p>
            <h2 className="mt-3 h-section text-deep-blue">
              A track record we&apos;re{" "}
              <span className="gradient-text-dark">proud of.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.07 * i}>
                <div className="group relative text-center p-7 lg:p-8 rounded-2xl border border-deep-blue/[0.07] bg-white hover:shadow-[0_20px_40px_-16px_rgba(30,136,229,0.3)] transition-all duration-500 overflow-hidden">
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-blue/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-4xl sm:text-5xl font-bold gradient-text-dark tabular-nums">
                    {stat.isFloat ? (
                      <>
                        {stat.value.toFixed(1)}
                        {stat.suffix}
                      </>
                    ) : (
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="relative mt-3 text-sm text-deep-blue/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ───────── Our Story ───────── */}
      <section className="pb-20 bg-light-accent relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="rounded-2xl bg-section-dark border border-deep-blue/[0.07] p-7 lg:p-12 overflow-hidden relative">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <p className="eyebrow text-neon-purple">Our story</p>
                  <h2 className="mt-3 h-section text-white">
                    Why <span className="gradient-text-dark">Dev Inception</span>?
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="body-lead text-white">
                    Dev Inception was founded with a clear mission: to help
                    businesses access world-class digital solutions without the
                    complexity, overhead, or guesswork. We believe great
                    technology should serve people — not the other way around.
                  </p>
                  <p className="mt-5 body-base text-white">
                    Our team brings together engineers, designers, strategists,
                    and project managers from across the globe, all united by a
                    passion for building things that matter. Whether you&apos;re
                    a startup launching your first product or an enterprise
                    scaling operations, we bring the same level of dedication,
                    expertise, and care to every engagement.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Team makeup ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-neon-blue/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-neon-blue">Our team</p>
              <h2 className="mt-3 h-section text-white">
                50+ specialists, all{" "}
                <span className="gradient-text">in one studio.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Engineering, design, and strategy under one roof. Time-zone
                aligned with your team, async-first by default, and senior
                across the board.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamHighlights.map((team, i) => (
              <AnimatedSection key={team.label} delay={i * 0.08}>
                <div
                  className="group relative h-full p-6 lg:p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                  style={
                    {
                      "--card-glow": `${team.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.16] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: team.accent }}
                  />

                  <div className="relative flex items-baseline gap-3 mb-4">
                    <span
                      className="text-5xl lg:text-6xl font-bold tracking-tight tabular-nums"
                      style={{ color: team.accent }}
                    >
                      {team.count}
                    </span>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${team.accent}15`,
                        color: team.accent,
                      }}
                    >
                      {team.icon}
                    </div>
                  </div>

                  <h3
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
                    style={{ color: team.accent }}
                  >
                    {team.label}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {team.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Values (bento) ───────── */}
     {/* ───────── Values ───────── */}
<section className="py-16 lg:py-20 bg-light-accent relative overflow-hidden">
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-16 lg:mb-20">
      <AnimatedSection className="lg:col-span-7">
        <p className="eyebrow text-neon-purple">Our values</p>
        <h2 className="mt-3 h-section text-deep-blue">
          What we <span className="gradient-text-dark">stand for.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection className="lg:col-span-5" delay={0.1}>
        <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
          The non-negotiables that show up in every project — the way we work,
          communicate, and ship.
        </p>
      </AnimatedSection>
    </div>

    {/* Values Container */}
    <div className="relative rounded-[32px] border border-deep-blue/[0.08] bg-white overflow-hidden p-8 lg:p-16">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-neon-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 lg:gap-y-14">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="
              group
              relative
              p-6
              lg:p-7
              rounded-2xl
              border
              border-deep-blue/[0.06]
              bg-white/70
              backdrop-blur-sm
              transition-all
              duration-500
              min-h-[250px]
              overflow-hidden
              hover:shadow-[0_28px_56px_-24px_rgba(10,22,40,0.22)]
            "
          >
            {/* Accent-tinted corner glow (reveals on hover) */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.16] transition-opacity duration-500"
              style={{ backgroundColor: value.accent }}
            />

            {/* Top accent strip (wipes in on hover) */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              style={{
                background: `linear-gradient(90deg, ${value.accent}, ${value.accent}00)`,
              }}
            />

            {/* Large ghost number */}
            <div
              className="absolute top-3 right-4 text-[68px] lg:text-[88px] font-bold leading-none select-none pointer-events-none"
              style={{ color: `${value.accent}14` }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                style={{
                  backgroundColor: `${value.accent}14`,
                  color: value.accent,
                  boxShadow: `inset 0 0 0 1px ${value.accent}26`,
                }}
              >
                {value.icon}
              </div>

              <h3 className="text-[1.35rem] lg:text-[1.5rem] font-bold leading-[1.15] tracking-tight text-deep-blue mb-3">
                {value.title}
              </h3>

              <p className="text-[15px] leading-relaxed text-deep-blue/60">
                {value.description}
              </p>

              {/* Accent underline */}
              <div
                className="mt-6 h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-20"
                style={{
                  background: `linear-gradient(90deg, ${value.accent}, ${value.accent}55)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ───────── Final CTA ───────── */}
      <CTABanner
        eyebrow="Let's build together"
        heading={
          <>
            Have an idea? Let&apos;s create something{" "}
            <span className="gradient-text">extraordinary.</span>
          </>
        }
        description="Need help with your next big idea? Our team is ready to build with you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
