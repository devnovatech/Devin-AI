"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

const industries = [
  {
    name: "Healthcare & HealthTech",
    slug: "healthcare",
    tagline:
      "104+ healthcare organizations served.",
    accent: "#0288D1",
    stat: { value: "14", label: "hospitals onboarded" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "FinTech",
    slug: "fintech",
    tagline:
      "100+ financial technology initiatives delivered.",
    accent: "#1565C0",
    stat: { value: "PCI-DSS", label: "compliant builds" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "E-commerce & Retail",
    slug: "ecommerce-retail",
    tagline:
      "150+ commerce platforms supported.",
    accent: "#0277BD",
    stat: { value: "+24%", label: "avg conversion lift" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    name: "Logistics & Transportation",
    slug: "logistics",
    tagline:
      "50+ logistics transformation projects.",
    accent: "#00ACC1",
    stat: { value: "Real-time", label: "tracking systems" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    name: "Education & EdTech",
    slug: "education",
    tagline:
      "275+ digital learning solutions delivered.",
    accent: "#1E88E5",
    stat: { value: "WCAG", label: "accessibility-first" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Travel & Hospitality",
    slug: "travel-hospitality",
    tagline:
      "50+ hospitality experiences enhanced.",
    accent: "#039BE5",
    stat: { value: "8 markets", label: "shipped to" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "SaaS & Tech Startups",
    slug: "saas-startups",
    tagline:
      " 200+ products and platforms scaled.",
    accent: "#0277BD",
    stat: { value: "8–14 wks", label: "MVP to launch" },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const expertisePillars = [
  {
    title: "Compliance by design",
    description:
      "HIPAA, PCI-DSS, GDPR, WCAG — embedded into architecture from day one.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Built with real users",
    description:
      "Validated through clinicians, operators, customers, and end-users.",
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Proven system patterns",
    description:
      "250+ builds distilled into reusable, battle-tested foundations.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Stack chosen by constraint",
    description:
      "Technology decisions driven by scale, security, and regulation — not trends.",
    accent: "#1565C0",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

function IndustryCard({
  industry,
  index,
  featured = false,
}: {
  industry: (typeof industries)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`h-full ${featured ? "sm:col-span-2 lg:col-span-3" : ""}`}
    >
      <Link
        href={`/industries/${industry.slug}`}
        className="group relative block h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow)]"
        style={
          {
            "--card-glow": `${industry.accent}55`,
          } as React.CSSProperties
        }
      >
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.35] transition-opacity duration-500"
          style={{ backgroundColor: industry.accent }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: `${industry.accent}33` }}
        />

        <div
          className={`relative p-6 lg:p-7 flex h-full ${
            featured ? "flex-col lg:flex-row lg:items-center gap-6" : "flex-col"
          }`}
        >
          {/* Icon + stat row */}
    <div
  className={`flex items-start justify-between ${
    featured
      ? "lg:flex-col lg:items-start lg:gap-4 lg:shrink-0"
      : "mb-4"
  }`}
>
  <div
    className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white transition-all duration-300 group-hover:scale-105"
    style={{
      background: `linear-gradient(135deg, ${industry.accent}, ${industry.accent}CC)`,
      boxShadow: `0 10px 24px -8px ${industry.accent}70`,
    }}
  >
    {industry.icon}
  </div>

  <div
    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent"
    style={{
      boxShadow: `0 4px 12px ${industry.accent}15`,
    }}
  >
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke={industry.accent}
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m0 0-5-5m5 5-5 5"
      />
    </svg>
  </div>
</div>

          {/* Title + tagline */}
          <div className="flex-1 min-w-0">
            <h3 className={`font-bold text-deep-blue tracking-tight leading-snug ${featured ? "text-2xl lg:text-3xl" : "text-lg"}`}>
              {industry.name}
            </h3>
            <p className={`mt-2 text-deep-blue/65 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
              {industry.tagline}
            </p>
          </div>

          {/* Stat callout + arrow */}
          {/* <div
            className={`${
              featured
                ? "lg:shrink-0"
                : "mt-6 pt-5 border-t border-deep-blue/[0.06]"
            } flex items-center justify-between gap-3`}
          >
            <div className="flex items-baseline gap-2">
              <span
                className={`font-bold tracking-tight tabular-nums ${
                  featured ? "text-3xl lg:text-4xl" : "text-xl"
                }`}
                style={{ color: industry.accent }}
              >
                {industry.stat.value}
              </span>
              <span className="text-deep-blue/50 text-xs">
                {industry.stat.label}
              </span>
            </div>
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0"
              style={{ backgroundColor: `${industry.accent}14` }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke={industry.accent}
                strokeWidth={2.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div> */}
        </div>
      </Link>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                7 industries · 250+ projects shipped
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 5rem)" }}
            >
              Built Around Your Constraints
              <br />
              <span className="gradient-text glow-text"> Not Just Your Requirements.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
             Most industries are constrained not by technology itself, but by fragmented systems, disconnected data, and operational complexity. We help organizations align technology with how they operate, creating digital ecosystems built for efficiency, scalability, and growth
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                >
                  Talk to a sector expert
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.span>
              <a
                href="#industries-grid"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Browse industries ↓
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Industries grid ───────── */}
      <section
        id="industries-grid"
        className="py-20 lg:py-24 bg-light-accent relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 lg:mb-10">
            <div className="lg:col-span-7">
              <p className="eyebrow text-neon-purple">Sectors we serve</p>
              <h2 className="mt-3 h-section text-deep-blue">
              Delivering Across {""}
                <span className="gradient-text-dark">Industries</span>
                {" "}Since 2010
              </h2>
            </div>
             <div className="lg:col-span-5">
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Over 15+ years, we have helped organizations across industries align technology with business objectives, operational realities, and long-term growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                index={i}
                featured={i === industries.length - 2}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ───────── Why industry expertise ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.06] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow text-neon-blue">Why it matters</p>
              <h2 className="mt-3 h-section text-white">
                Built Around How Your Industry {" "}
                <span className="gradient-text">Actually Operates</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Built on Industry Reality, Not Assumptions —- Industry expertise isn’t a claim. It’s how systems avoid failure in the real world.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertisePillars.map((p, i) => (
              <div key={p.title}>
                <div
                  className="group relative h-full p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                  style={
                    {
                      "--card-glow": `${p.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.15] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: p.accent }}
                  />
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{
                      backgroundColor: p.accent,
                      boxShadow: `0 12px 28px -10px ${p.accent}80`,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="relative mt-5 h-card text-white">{p.title}</h3>
                  <p className="relative mt-2.5 text-sm text-gray-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTABanner
        eyebrow="Sector-specific solutions"
        heading={
          <>
            Systems That Work as One,{" "}
            <span className="gradient-text"> Not in Pieces</span>
          </>
        }
        description="Most organizations don’t need more tools — they need their systems to finally align. We help companies move beyond fragmented setups by building integrated digital infrastructure that reflects how they actually operate, scale, and compete."
        primaryLabel="Talk to a sector expert"
        primaryHref="/contact"
        secondaryLabel="See services"
        secondaryHref="/services"
      />
    </>
  );
}
