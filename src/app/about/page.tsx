"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import React from "react";
import { Award, Target, Zap, Users } from "lucide-react";

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

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <AnimatedSection direction="left" className="lg:col-span-7">
            <h1 className="mt-7 h-display text-white">
              About  <span className="gradient-text">Us</span>
            </h1>

            <p className="mt-7 body-lead text-gray-400 max-w-xl">
              At Dev Inception, we pride ourselves on offering dynamic IT services to suit your specific requirements. Our flexible approach means we can adjust our offerings to accommodate your evolving needs, whether you require comprehensive IT infrastructure support, strategic consultancy or software development.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300">
                Work with us
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-neon-blue/20 translate-x-3 translate-y-3" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/AboutUs4.png"
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
    {
      label: "Years of experience",
      value: 25,
      suffix: "+",
      icon: Award,
    },
    {
      label: "Success Stories",
      value: 150,
      suffix: "+",
      icon: Target,
    },
    {
      label: "Results Guaranteed",
      value: 100,
      suffix: "%",
      icon: Zap,
    },
    {
      label: "employees in all over the world",
      value: 30,
      suffix: "+",
      icon: Users,
    },
  ];

  // Gradient colors for icons
  const iconColors = [
    "from-blue-500 to-cyan-400",
    "from-emerald-500 to-teal-400",
    "from-purple-500 to-pink-400",
    "from-orange-500 to-amber-400",
  ];

  return (
    <section className="bg-service-banner">
      <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-6 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <div
                  className={`icon-container flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[index]} bg-opacity-10`}
                >
                  <Icon className="h-6 w-6 gradient-text-fixed" />
                </div>

                <div className="flex flex-col">
                  <span className="banner-title text-3xl font-bold leading-none">
                    {stat.value}
                    {stat.suffix}
                  </span>

                  <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                    {stat.label}
                  </span>
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
// Our Mission Section
// ============================================================================
function OurMissionSection() {
  const missionPoints = [
    "Design digital solutions that solve real business challenges",
    "Align technology investments with measurable business outcomes",
    "Build secure, scalable, and future-ready systems",
    "Accelerate innovation without compromising operational stability",
    "Create lasting partnerships founded on trust, transparency, and results",
  ];

  return (
    <section className="py-20 bg-light-accent relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-[#0a1628] border border-white/[0.07] p-7 lg:p-12 overflow-hidden relative">
          {/* Inner card glow effects */}
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/[0.05] rounded-full blur-[100px]" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            {/* Left Side */}
            <div className="lg:col-span-4">
              <p className="eyebrow gradient-text-fixed">Our Mission</p>

              <h2 className="mt-3 h-section text-white">
                What <br />{" "}
                <span className="gradient-text-fixed">Drives Us</span>
              </h2>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-8">
              <p className="body-lead text-white">
                At Dev Inception, we help organizations turn complexity into competitive advantage through technology that is purposeful, scalable, and built for long-term impact.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {missionPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon-blue flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 body-lead text-white">
                We combine strategic thinking with technical excellence to help organizations adapt, grow, and lead in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




// ============================================================================
// History & Vision Section
// ============================================================================
function HistoryVisionSection() {
  return (
    <section className="bg-light-accent relative">
      <div className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Journey/History Card */}
          <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 gradient-text-fixed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Journey</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              Founded in 2010, Dev Inception helps organizations solve complex business challenges through technology that is purposeful, scalable, and built for long-term impact. We partner with startups, enterprises, and growing businesses to design and deliver digital systems that improve operations, accelerate growth, and create measurable value.
            </p>
            <p className="mt-4 text-deep-blue/70 leading-relaxed">
              Over the years, we have evolved into a multidisciplinary team of strategists, designers, and engineers united by a shared commitment to excellence. From navigating periods of disruption to supporting ambitious transformation initiatives, our focus has remained consistent: building technology that aligns with business objectives, adapts to change, and enables sustainable growth.            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-5">
              <svg className="w-6 h-6 gradient-text-fixed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Vision</h3>
            <p className="text-deep-blue/70 leading-relaxed">
              Our vision is to become a global leader in digital innovation - setting the benchmark for smart, scalable, and sustainable technology solutions. We aim to redefine how modern businesses grow, connect, and thrive by merging deep technical expertise with creative thinking.
            </p>
            <p className="mt-4 text-deep-blue/70 leading-relaxed">
              In a world where change is constant, we envision a future where digital transformation is not a luxury, but a universal opportunity. We strive to build technologies that are not only powerful but accessible and adaptable to diverse industries and needs.Through continuous learning, cutting-edge tools, and a user-first mindset, we aspire to shape the future of digital ecosystems.             </p>
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
      title: "People-first Tech",
      description: "We build technology around people—ensuring usability, collaboration, and long-term value come first.",
      accent: "#1E88E5",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Agility meets Expertise",
      description: "We combine fast, adaptive delivery with deep technical knowledge to solve complex challenges efficiently.",
      accent: "#00ACC1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Partners, not just Providers",
      description: "We work as an extension of your team, invested in your goals, outcomes, and long-term success.",
      accent: "#0288D1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: "Time coordination",
      description: "We stay in sync with your schedule to ensure real-time collaboration and faster decision-making.",
      accent: "#039BE5",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "Exceptionally Talented Teams",
      description: "Our teams bring together highly skilled engineers, designers, and strategists focused on delivering excellence.",
      accent: "#00BCD4",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Resource-efficient",
      description: "We optimize effort and technology use to deliver maximum value without unnecessary overhead.",
      accent: "#1565C0",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                Our edge
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              What makes <span className="gradient-text-dark">us different.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              What sets us apart is a blend of deep expertise, modern engineering, and execution speed that drives real impact.
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
                className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-6 transition-all duration-500 shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12] overflow-hidden min-h-[220px]"
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
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
      description:
        "A learning-driven workplace where individuals are encouraged to develop skills, take initiative, and grow professionally.",
      accent: "#1E88E5",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Inclusivity & Respect",
      description:
        "A culture that values diverse perspectives and fosters mutual respect, ensuring everyone feels heard, valued, and supported.",
      accent: "#00ACC1",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Engineered for Productivity",
      description:
        "A structured and collaborative environment designed to minimize friction, streamline workflows, and enable teams to perform at their best.",
      accent: "#0288D1",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background Effects - Enhanced */}

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header - Enhanced */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm mb-4 group hover:border-white/[0.2] transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-fixed">
                Careers
              </span>
            </div>

            <h2 className="h-section text-white leading-[1.1]">
              Ready to start your{" "}
              <span className="gradient-text-fixed relative">
                career with us?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="body-base text-white max-w-md lg:ml-auto">
              Whether you're an expert or just starting your career, Dev
              Inception offers an environment built for growth, learning, and
              leadership.
            </p>
          </div>
        </div>

        {/* Cards - Enhanced */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {culturePoints.map((item, index) => (
            <div
              key={item.title}
              className="group relative h-full transform transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-7 lg:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1E88E5]/5 to-transparent" />
                </div>

                {/* Top Accent Line - Enhanced */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${item.accent}, ${item.accent}88, transparent)`,
                  }}
                />

                {/* Decorative Watermark Icon - Enhanced */}
                <div
                  className="absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{ color: item.accent }}
                >
                  {React.cloneElement(
                    item.icon as React.ReactElement,
                    {
                      className: "w-32 h-32",
                    }
                  )}
                </div>

                <div className="relative z-10">
                  {/* Small Top Icon - Enhanced */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      color: item.accent,
                      boxShadow: `0 0 30px ${item.accent}10`,
                    }}
                  >
                    <div className="transition-transform duration-300 group-hover:rotate-6">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title - Enhanced */}
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text">
                    {item.title}
                  </h3>

                  {/* Description - Enhanced */}
                  <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-blue/[0.05] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top content - split layout from WhyChooseUs */}
        <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
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
                    {/* <span
                      className="font-mono text-[10px] font-bold tracking-wider transition-colors duration-300"
                      style={{ color: `${role.accent}80` }}
                    >
                      {numLabel}
                    </span> */}
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
                          href="mailto:HR@devinception.com"
                          className="inline-block mt-2 text-sm transition-all duration-300 hover:underline"
                          style={{ color: role.accent }}
                        >
                          HR@devinception.com →
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
      <StatsSection />
      <OurMissionSection />
      <HistoryVisionSection />
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