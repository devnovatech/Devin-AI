"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import React from "react";
import { ServiceArt } from "@/components/ui/ServiceArt";
import {
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react";
import ReusableFeatureCard from "@/components/ui/cardLayout";
import { servicesData, serviceMeta } from "@/data/servicesData";
import { ReactNode } from "react";interface ServiceOffering {
  category: string;
  items: string[];
  description: string;

}



export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface ServiceMeta {
  category: string;
  timeline: string;
  teamSize: string;
  deliverables: string[];
  accent: string;
  icon: ReactNode;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  offerings: ServiceOffering[];
  offeringsDescription: string;
  offeringsTitle: string;
  whyChoose: WhyChooseItem[];
  whyTitle: string;
  whyTagline: string;
  processHeading: string,
  processSteps: {
    number: string;
    title: string;
    duration: string;
    description: string;
  }[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
}
/* ───────── Component ───────── */

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const meta = serviceMeta[slug];

  const [activeOffering, setActiveOffering] = useState(0);

  // const { firstHalf, secondHalf } = splitTitle(service.title);
  function splitTitle(title: string): { firstHalf: string; secondHalf: string } {
    const mid = Math.floor(title.length / 2);
    // find nearest space to the midpoint so we don't cut a word in half
    let splitIndex = title.indexOf(' ', mid);
    if (splitIndex === -1) splitIndex = title.lastIndexOf(' ', mid);
    if (splitIndex === -1) splitIndex = mid; // fallback: no spaces at all

    const firstHalf = title.slice(0, splitIndex).trim();
    const secondHalf = title.slice(splitIndex).trim();

    return { firstHalf, secondHalf };
  }
  if (!service) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] bg-section-dark flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <div className="text-7xl font-bold gradient-text">404</div>
          <h1 className="mt-4 h-section text-white">Service Not Found</h1>
          <p className="mt-4 body-lead text-gray-400">
            The service you&apos;re looking for doesn&apos;t exist — but tell us
            what you need and we&apos;ll figure it out.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neon-blue rounded-full text-white font-semibold text-sm hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
            >
              Back to Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const accent = meta?.accent ?? "#1E88E5";
  const category = meta?.category ?? "Service";

  return (
    <>
      {/* ───────── Hero (split layout with spec card) ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                {/* Category + icon row */}
                <div className="flex items-center gap-3">
                  {meta && (
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border flex items-center gap-2"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        backgroundColor: `${accent}0A`,
                      }}
                    >
                      {meta.icon}
                      {category} · Service
                    </span>
                  )}
                </div>

                <h1 className="mt-6 h-display text-white">{service.title}</h1>
                <p className="mt-6 body-lead text-gray-400">
                  {service.description.split("\n").map((part, index, arr) => (
                    <span key={index}>
                      {part}
                      {index < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold tracking-wide text-sm transition-all duration-300"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80`,
                      }}
                    >
                      Book a discovery call
                    </Link>
                  </motion.span>
                </div>

                {/* Meta row */}
                <div className="mt-10">
                  <div className="flex items-start gap-4 pb-5 border-b border-white/[0.08]">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={accent}
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                        Timeline
                      </p>
                      <p className="mt-1 text-white/90 text-base font-semibold">
                        {meta.timeline}
                      </p>
                    </div>
                    {/* Team */}
                    <div className="flex items-start gap-4 border-white/[0.08]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accent}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Team Size
                        </p>
                        <p className="mt-1 text-white/90 text-sm font-semibold ">
                          {meta.teamSize}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            <AnimatedSection direction="right" className="lg:col-span-5 mt-6">
              <div
                className="relative w-full overflow-hidden rounded-2xl h-[450px] min-h-[300px]"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
                }}
              >
                <ServiceArt slug={slug} />
              </div>
            </AnimatedSection>
          </div>

          {/* Deliverables — FULL WIDTH */}
          <div className="mt-14 w-full pb-5 border-b border-white/[0.08]">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {meta.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: accent }}
                  >
                    <svg
                      className="h-3 w-3 text-[#ffffff]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-gray-300 force-gray-text">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ───────── Serivce banner ───────── */}
      <section className="border-y bg-service-banner">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-6 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">

            {/* Card 1 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Award className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  Top 1%
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Senior Engineers
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Target className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  9 / 10
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Zap className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  48h
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Discovery → SOW
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Users className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  96%
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Client Retention
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ───────── What's included (interactive offerings) ───────── */}
      <section className="relative py-16 lg:py-20 bg-light-accent overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 dotted-grid opacity-[0.04] pointer-events-none" />

        <motion.div
          className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ backgroundColor: accent }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/[0.05] rounded-full blur-[120px] pointer-events-none"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-6">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 ">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    What's Include
                  </span>
                </div>
              </div>

              <h2 className="mt-2 h-section max-w-2xl">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.offeringsTitle);
                  return (
                    <>
                      <span className="text-deep-blue">{firstHalf}</span>{" "}
                      <span className="gradient-text-dark">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:pl-8 border-deep-blue/[0.08]">
                <p className="body-base text-deep-blue/60 max-w-md">
                  {service.offeringsDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-5">
              {/* Mobile / tablet — horizontal pill row */}
              <div className="lg:hidden flex flex-wrap gap-2 mb-4">
                {service.offerings.map((offering, i) => {
                  return (
                    <button
                      key={offering.category}
                      onMouseEnter={() => setActiveOffering(i)}
                      className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm"
                      style={{
                        backgroundColor: activeOffering ? accent : "rgba(255,255,255,0.05)",
                        color: activeOffering ? "white" : "rgba(15,23,42,0.75)",
                        borderColor: activeOffering ? "transparent" : "rgba(15,23,42,0.12)",
                        boxShadow: activeOffering
                          ? `0 8px 22px -8px ${accent}90`
                          : "none",
                      }}
                    >
                      {offering.category}
                    </button>
                  );
                })}
              </div>

              {/* Desktop — vertical tab list */}
              <div className="hidden lg:flex flex-col gap-2">
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;

                  return (
                    <motion.button
                      key={offering.category}
                      onMouseEnter={() => setActiveOffering(i)}
                      className={`group relative w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300 border
    ${isActive
                          ? 'bg-[#0a1628] border-[#0a1628] shadow-lg dark:shadow-2xl dark:shadow-black/40'
                          : 'bg-white/65 border-gray-200 hover:bg-[#0a1628] hover:border-[#0a1628] hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/40'
                        }`}
                      style={{
                        backdropFilter: "blur(8px)",
                      }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Left Accent Bar */}
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-500"
                        style={{
                          height: isActive ? "60%" : "0%",
                          backgroundColor: accent,
                        }}
                      />

                      {/* Number */}
                      <div
                        className={`relative w-11 h-11 rounded-xl flex items-center justify-center text-[12px] font-bold tabular-nums shrink-0 transition-all duration-300 ${isActive
                          ? "text-white"
                          : "text-gray-700 group-hover:text-white"
                          }`}
                        style={{
                          backgroundColor: isActive ? accent : `${accent}15`,
                          boxShadow: isActive
                            ? `0 12px 28px -10px ${accent}90`
                            : "none",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}

                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            animate={{
                              opacity: [0.3, 0.7, 0.3],
                              scale: [1, 1.08, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            style={{
                              border: `1px solid ${accent}`,
                            }}
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="relative flex-1 min-w-0">
                        <p
                          className={`font-bold text-base tracking-tight transition-colors duration-300 ${isActive
                            ? "text-[#ffffff]"
                            : "text-gray-900 group-hover:text-[#ffffff]"
                            }`}
                        >
                          {offering.category}
                        </p>

                        <p
                          className={`text-xs mt-0.5 truncate transition-colors duration-300 ${isActive
                            ? "text-[#ffffff]/70"
                            : "text-gray-500 group-hover:text-[#ffffff]/70"
                            }`}
                        >
                          {offering.items.length} deliverables included
                        </p>
                      </div>

                      {/* Arrow */}
                      <svg
                        className={`relative w-4 h-4 shrink-0 transition-all duration-300 ${isActive
                          ? "opacity-100 translate-x-0 text-white"
                          : "opacity-0 -translate-x-2 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
                          }`}
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

                      {/* Hairline accent border */}
                      {isActive && (
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl border"
                          style={{ borderColor: `${accent}50` }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL - Dynamic Content */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <div
                  className="relative rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/40 overflow-hidden"
                  style={{
                    backgroundColor: '#0a1628',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {/* Hairline accent border */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl border"
                    style={{ borderColor: `${accent}50` }}
                  />

                  <div className="relative">
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                      style={{
                        color: accent,
                        backgroundColor: `${accent}15`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      Capabilities Overview
                    </div>

                    {/* Dynamic Content */}
                    <motion.div
                      key={activeOffering}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Heading */}
                      <h3
                        className="mt-5 text-2xl lg:text-[1.875rem] font-bold tracking-tight leading-[1.15]"
                        style={{ color: '#ffffff' }}
                      >
                        {service.offerings[activeOffering].category}
                      </h3>

                      {/* Description */}
                      <p
                        className="mt-3 leading-relaxed text-[15px]"
                        style={{ color: 'rgb(209 213 219)' }}
                      >
                        {service.offerings[activeOffering].description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-6 grid sm:grid-cols-2 gap-3">
                        {service.offerings[activeOffering].items.map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: idx * 0.04,
                            }}
                            className="group relative flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/5 hover:bg-white/10 hover:border-white/[0.15] transition-all duration-300 p-4"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{
                                backgroundColor: `${accent}20`,
                              }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={accent}
                                strokeWidth={2.4}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {item}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How we work (4-step) ───────── */}
      <section className="py-20 lg:py-24 bg-[#0a1628] permanent-dark relative overflow-hidden">

        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"
          style={{ backgroundColor: `${accent}0F` }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accent }} />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold gradient-text-fixed">
                  HOW WE WORK
                </p>
              </div>
              <h2 className="mt-3 h-section text-white">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.processHeading);
                  return (
                    <>
                      <span className="text-white">{firstHalf}</span>{' '}
                      <span className="gradient-text-fixed">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base mb-12 text-white/70 max-w-md lg:ml-auto">
                Transparent timelines, weekly demos, fixed quotes after
                discovery. No surprises, no scope creep.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Connecting Line */}
            <div
              aria-hidden
              className="absolute left-7 right-7 top-7 bg-white/10 hidden h-px md:block"

            />

            <div className={`grid gap-8 md:grid-cols-${service.processSteps.length}`}>
              {service.processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative group"
                >
                  {/* Node */}
                  <div className="relative mx-auto h-14 w-14">
                    {/* Rotating ring */}
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, transparent 0%, ${accent}80 50%, transparent 100%)`,
                        mask: "radial-gradient(circle, transparent 60%, black 62%)",
                        WebkitMask: "radial-gradient(circle, transparent 60%, black 62%)",
                      }}
                    />

                    {/* Center circle */}
                    <div
                      className="absolute inset-1 grid place-items-center rounded-full bg-white text-gray-900 transition-all duration-500 group-hover:scale-105"
                      style={{
                        boxShadow: `0 0 0 4px ${accent}20, 0 10px 30px ${accent}10`,
                      }}
                    >
                      <span className="text-base font-bold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-center">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Phase {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 max-w-xs mx-auto">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <div className="mt-4 inline-block">
                      <span
                        className="text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/10 text-white/70"
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Why us for THIS service ───────── */}
      <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    WHY US
                  </span>
                </div>
              </div>
              <h2 className="mt-3 h-section text-deep-blue">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.whyTitle);
                  return (
                    <>
                      <span style={{ color: '#0a1628' }}>{firstHalf}</span>{' '}
                      <span className="gradient-text-dark">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                {service.whyTagline}
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whyChoose.map((item, index) => (
              <ReusableFeatureCard
                key={index}
                
                title={item.title}
                description={item.description}
                icon=""
                accent="#3B82F6"
              />
            ))}
          </div>
        </div>
      </section>



      {/* ───────── Final CTA ───────── */}

      <CTABanner
        eyebrow="Let's get started"
        heading={
          <>
            {(() => {
              const { firstHalf, secondHalf } = splitTitle(service.ctaHeading);
              return (
                <>
                  <span className="white">{firstHalf}</span>{' '}
                  <span className="gradient-text-fixed" >{secondHalf}</span>
                </>
              );
            })()}
          </>
        }
        description={service.ctaDescription}
        primaryLabel={service.ctaButton}
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
