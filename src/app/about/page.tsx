"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

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
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Engineers & Experts" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Results Guaranteed" },
];

const values = [
  {
    title: "People-First, Always",
    description: "We design solutions around real human needs - your users, your team, and your business goals.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
  {
    title: "Agility Backed by Expertise",
    description: "From rapid pivots to long-term scaling, our combination of flexibility and deep technical knowledge ensures we adapt effectively.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Strategic Partners, Not Just Vendors",
    description: "We integrate closely with your vision, collaborate openly, and prioritize your growth at every step.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "On Time. Every Time.",
    description: "We follow through on our commitments with proactive project management and dependable delivery.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Built by Exceptional Talent",
    description: "Our global team of engineers, designers, and strategists brings world-class skill and a problem-solving mindset.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    title: "Smart with Every Resource",
    description: "We optimize time, talent, and budget to deliver maximum value without unnecessary complexity or waste.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
                About Us
              </p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Together, We Build{" "}
                <span className="gradient-text">Dev Inception</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                From fast-growing startups to established Fortune 500 companies,
                we&apos;ve partnered with brands that dare to innovate. Our
                collaborations are built on trust, strategy & results &mdash;
                delivering digital solutions that don&apos;t just look good, but
                move the needle.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                With each project, we don&apos;t just build visuals &mdash; we
                build impact, together.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
                >
                  Work with Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-dark-card to-dark-surface border border-white/5 p-8 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 grid-bg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 to-transparent" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                      <motion.div
                        className="text-7xl font-bold gradient-text"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        DI
                      </motion.div>
                      <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">
                        Dev Inception
                      </p>
                      <p className="mt-2 text-xs text-gray-500">
                        From Strategy to Systems
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 blur-xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.1 * i}>
                <div className="text-center p-8 rounded-2xl border border-deep-blue/5 bg-white/60 backdrop-blur-sm">
                  <div className="text-4xl sm:text-5xl font-bold gradient-text-dark">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-deep-blue/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
              Our Story
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Why <span className="gradient-text">Dev Inception</span>?
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Dev Inception was founded with a clear mission: to help businesses of
              all sizes access world-class digital solutions without the complexity,
              overhead, or guesswork. We believe that great technology should serve
              people &mdash; not the other way around.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Our team brings together engineers, designers, strategists, and project
              managers from across the globe, all united by a passion for building
              things that matter. Whether you&apos;re a startup looking to launch your
              first product or an enterprise scaling operations, we bring the same
              level of dedication, expertise, and care to every engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
              Our Values
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
              What We <span className="gradient-text-dark">Stand For</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full p-8 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue to-neon-purple flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-deep-blue">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-deep-blue/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue to-neon-purple/30" />
              <div className="absolute inset-0 grid-bg opacity-50" />

              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  Let&apos;s Build{" "}
                  <span className="gradient-text">Together</span>
                </h2>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                  Need help with your next big idea? Our team is ready to
                  build with you. Let&apos;s create something extraordinary.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
                  >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
