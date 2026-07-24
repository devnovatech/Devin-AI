"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { industries } from "@/data/homePageData";


export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className="min-h-screen flex flex-col justify-center py-16 lg:py-20 bg-section-industries relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header — split editorial */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-4 lg:mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text">
                Industries we serve
              </span>
            </div>
            <h2 className="h-section text-white">
              Powering Modern{" "}
              <span className="gradient-text">Digital Ecosystems</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-gray-400 max-w-md lg:ml-auto">
              Our experience spans diverse industries, each with distinct operational challenges and growth opportunities. Explore how we address industry-specific needs through scalable, purpose-built digital solutions.
            </p>
          </div>
        </div>

        {/* Tabbed showcase */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Tabs */}
          <div className="lg:col-span-5">
            {/* Mobile / tablet — horizontal pill row (wraps) */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-2">
              {industries.map((ind, i) => {
                const isActive = activeIndex === i;

                return (
                  <button
                    key={ind.slug}
                    onClick={() => setActiveIndex(i)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${isActive ? "text-[#ffffff]" : "text-white"
                      }`}
                    style={{
                      backgroundColor: isActive
                        ? ind.accent
                        : "rgba(255,255,255,0.05)",
                      borderColor: isActive
                        ? "transparent"
                        : "rgba(255,255,255,0.12)",
                      boxShadow: isActive
                        ? `0 8px 22px -8px ${ind.accent}90`
                        : "none",
                    }}
                  >
                    {ind.shortLabel}
                  </button>
                );
              })}
            </div>

            {/* Desktop — vertical tab list */}
            <div className="hidden lg:flex flex-col gap-3">
              {industries.map((ind, i) => {
                const isActive = activeIndex === i;
                const onSelect = () => {
                  setActiveIndex(i);
                };

                return (
                  <button
                    key={ind.slug}
                    onClick={onSelect}
                    onMouseEnter={onSelect}
                    className={`group relative w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300 border ${isActive
                      ? "bg-[#0a1628] dark:bg-[#0a1628] border-white/20 shadow-2xl shadow-black/40"
                      : "bg-white dark:bg-[#0a1628]/60 border-gray-200 dark:border-white/10 hover:!bg-[#0a1628] dark:hover:!bg-[#0a1628] hover:border-[#0a1628] dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/40"
                      }`}
                    style={{
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {/* Left Accent Bar */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-500"
                      style={{
                        height: isActive ? "60%" : "0%",
                        backgroundColor: ind.accent,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className={`relative w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                        ? "text-[#ffffff]"
                        : "text-gray-700 dark:text-white/70 group-hover:text-white"
                        }`}
                      style={{
                        backgroundColor: isActive ? ind.accent : `${ind.accent}15`,
                        boxShadow: isActive
                          ? `0 12px 28px -10px ${ind.accent}90`
                          : "none",
                      }}
                    >
                      {ind.icon}
                    </div>

                    {/* Content */}
                    <div className="relative flex-1 min-w-0">
                      <h3
                        className={`font-bold text-base tracking-tight transition-colors duration-300 ${isActive
                          ? "text-[#ffffff]"
                          : "text-gray-9000 group-hover:text-[#ffffff]"
                          }`}
                      >
                        {ind.name}
                      </h3>

                      <p
                        className={`text-xs mt-0.5 truncate transition-colors duration-300 ${isActive
                          ? "text-[#ffffff]/70"
                          : "text-gray-500 group-hover:text-[#ffffff]/70"
                          }`}
                      >
                        {ind.shortLabel} · click to explore
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`relative w-4 h-4 shrink-0 transition-all duration-300 ${isActive
                        ? "opacity-100 translate-x-0 text-[#ffffff]"
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

                    {/* Hairline accent border - matching detail panel */}
                    {isActive && (
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl border"
                        style={{ borderColor: `${ind.accent}50` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <div
                className="relative rounded-2xl p-6 shadow-2xl shadow-black/40 overflow-hidden"
                style={{
                  backgroundColor: '#0a1628',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {/* Hairline accent border - KEPT */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl border"
                  style={{ borderColor: `${active.accent}50` }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: active.accent,
                        boxShadow: `0 12px 28px -10px ${active.accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
                        color: '#ffffff',
                      }}
                    >
                      {active.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="eyebrow"
                        style={{ color: active.accent }}
                      >
                        Industry
                      </p>
                      <h3
                        className="mt-1 text-2xl lg:text-[1.875rem] font-bold tracking-tight leading-[1.15]"
                        style={{ color: '#ffffff' }}
                      >
                        {active.name}
                      </h3>
                    </div>
                  </div>

                  <p
                    className="mt-5 leading-relaxed text-[15px]"
                    style={{ color: 'rgb(209 213 219)' }} // gray-300
                  >
                    {active.description}
                  </p>

                  {/* Two-column: challenges vs deliverables */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="eyebrow text-rose-400">
                        Common Challenges
                      </p>
                      <ul className="mt-4 space-y-3">
                        {active.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex gap-2.5 text-sm leading-relaxed"
                            style={{ color: 'rgb(156 163 175)' }} // gray-400
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                            <span className="line-clamp-2">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p
                        className="eyebrow"
                        style={{ color: active.accent }}
                      >
                        What We Deliver
                      </p>
                      <ul className="mt-4 space-y-3">
                        {active.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex gap-2.5 text-sm leading-relaxed"
                            style={{ color: 'rgb(156 163 175)' }} // gray-400
                          >
                            <svg
                              className="w-4 h-4 mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke={active.accent}
                              strokeWidth={2.4}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="line-clamp-2">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative mt-4 pt-2 border-t border-deep-blue/[0.07] flex items-center justify-end gap-3">
                    <Link
                      href={`/industries/${active.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
                      style={{
                        color: active.accent,
                      }}
                    >
                      <span>Learn more about {active.shortLabel}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* See all link */}
        <div className="mt-6 flex justify-center rounded-xl" >
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 px-7 py-3.5  rounded-xl bg-deep-blue  text-xs font-semibold gradient-text-fixed transition-all duration-200 hover:bg-deep-blue/80 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See all industry we serve</span>
          </Link>
        </div>
      </div>
    </section>
  );
}