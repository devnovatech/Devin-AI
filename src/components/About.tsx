"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface Pillar {
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
}

const pillars: Pillar[] = [
  {
    title: "Experienced engineers",
    description: "Your work is handled by senior engineers who have built and shipped real products.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Part of your team",
    description: "Same chat, same standups, same goals. We work alongside you, not at arm's length.",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Clear communication",
    description: "Regular demos and honest updates, so you always know exactly where your project stands.",
    accent: "#039BE5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "Senior", label: "Experienced engineers" },
  { value: "End-to-end", label: "Design to delivery" },
  { value: "Global", label: "Clients & time zones" },
  { value: "Long-term", label: "Lasting partnerships" },
];

export default function About() {
  return (
   <section
  id="about"
  className="min-h-[80vh] flex items-center py-12 lg:py-16 relative overflow-hidden bg-section-about"
>
  {/* Decorative background */}
  <motion.div
    className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/8 rounded-full blur-[140px] pointer-events-none"
    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none"
    animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />
  <div className="absolute inset-0 dotted-grid opacity-30 pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
    {/* Top: Header */}
    <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-end mb-8 lg:mb-9">
      <AnimatedSection className="lg:col-span-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
            About us
          </span>
        </div>

        <h2 className="h-section text-deep-blue">
          A software team that works{" "}
          <span className="gradient-text-dark">like your own.</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection className="lg:col-span-5" delay={0.1}>
        <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
          We're a team of experienced engineers and designers who care about
          doing things well. We work closely with you — from the first idea
          to launch and beyond.
        </p>
      </AnimatedSection>
    </div>

    {/* Main two-column */}
    <div className="grid lg:grid-cols-12 gap-7 lg:gap-10 items-center">
      {/* LEFT */}
      <AnimatedSection className="lg:col-span-6" direction="left">
        <div className="relative">
          <motion.div
            className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-neon-blue/25 to-neon-purple/15"
            animate={{ rotate: [0, 0.8, 0, -0.8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="relative rounded-xl overflow-hidden ring-1 ring-deep-blue/10 shadow-xl shadow-deep-blue/20 bg-white">
            <Image
              src="/companies-porfolio.png"
              alt="Clients Devinception has shipped alongside"
              width={1338}
              height={1176}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto block"
            />

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-deep-blue/85 via-deep-blue/40 to-transparent p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/70">
                Selected work
              </p>
              <p className="mt-1 text-sm text-white font-semibold">
                Teams we&apos;ve worked with
              </p>
            </div>
          </div>

          {/* Founded badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="absolute -top-3 -left-3 lg:-left-5 z-10"
          >
            <div className="rounded-xl bg-white border border-deep-blue/10 shadow-lg shadow-deep-blue/10 px-3 py-2">
              <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-deep-blue/50">
                Built on
              </p>
              <p className="mt-0.5 text-base font-bold text-deep-blue">
                Quality
              </p>
            </div>
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="absolute -top-3 -right-3 lg:-right-5 z-10"
          >
            <div className="rounded-xl bg-deep-blue text-white shadow-lg shadow-deep-blue/30 px-3 py-2 border border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c..." />
                  </svg>
                ))}
              </div>

              <p className="mt-1 text-[10px] tracking-wide font-semibold">
                <span className="text-white">Loved</span>
                <span className="text-white/60"> by clients</span>
              </p>
            </div>
          </motion.div>

          {/* SOC badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="absolute -bottom-3 -left-3 lg:-left-5 z-10"
          >
            <div className="flex items-center gap-2 rounded-xl bg-white border border-deep-blue/10 shadow-lg shadow-deep-blue/10 px-3 py-2">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4..."
                  />
                </svg>
              </span>

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-deep-blue/50">
                  Security
                </p>
                <p className="text-xs font-bold text-deep-blue">
                  Built in
                </p>
              </div>
            </div>
          </motion.div>

          {/* Booking badge */}
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.85 }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            className="absolute -bottom-3 -right-3 lg:-right-5 z-10"
          >
            <div className="rounded-xl bg-neon-blue text-white shadow-lg shadow-neon-blue/40 px-3 py-2 ring-4 ring-white/30">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300" />
                </span>

                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold">
                  Available for projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* RIGHT */}
      <div className="lg:col-span-6">
        <AnimatedSection direction="right">
          <div className="relative rounded-2xl bg-white border border-deep-blue/[0.07] p-5 lg:p-6 shadow-xl shadow-deep-blue/5 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-neon-blue/8 blur-2xl" />

            <p className="relative text-sm lg:text-base text-deep-blue/85 leading-relaxed font-medium">
              &ldquo;We focus on one thing: delivering software that works,
              on the timeline we agreed.&rdquo;
            </p>

            <div className="relative mt-4 pt-3 border-t border-deep-blue/[0.07] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-sm shadow-md">
                DI
              </div>

              <div>
                <p className="text-sm font-bold text-deep-blue">
                  The Devinception Team
                </p>

                <p className="text-xs text-deep-blue/55">
                  Engineers &amp; designers
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Principles */}
        <div className="mt-5 space-y-2">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={0.15 + i * 0.08}>
              <motion.div
                whileHover={{ x: 4 }}
                className="group relative flex items-start gap-3 rounded-xl bg-white/60 border border-deep-blue/[0.06] hover:bg-white hover:border-deep-blue/10 hover:shadow-md transition-all duration-300 p-3"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    backgroundColor: `${p.accent}15`,
                    color: p.accent,
                  }}
                >
                  {p.icon}
                </span>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-deep-blue tracking-tight">
                    {p.title}
                  </h4>

                  <p className="mt-0.5 text-xs text-deep-blue/55 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>

    {/* Stats */}
    <AnimatedSection className="mt-9 lg:mt-10" delay={0.3}>
      <div className="relative rounded-2xl bg-deep-blue text-white overflow-hidden shadow-xl shadow-deep-blue/30">
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="px-5 py-4 lg:py-5 text-center group"
            >
              <p className="text-2xl lg:text-3xl font-bold gradient-text tracking-tight">
                {stat.value}
              </p>

              <p className="mt-1 text-xs lg:text-sm text-gray-400 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative border-t border-white/[0.08] px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 bg-deep-blue">
          <p className="text-sm text-gray-400">
            Want to build something with us?
          </p>

          <div className="flex gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Our story
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neon-blue text-white font-semibold text-xs hover:bg-neon-purple transition-all duration-300"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>
  );
}
