"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { stages } from "@/data/homePageData"; 


export default function WorkingProcess() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const active = stages[activeIdx];

  // Check if screen is large (1024px and above)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Mobile: Handle swipe/touch for stage selection
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIdx < stages.length - 1) {
          setActiveIdx(activeIdx + 1);
        } else if (diff < 0 && activeIdx > 0) {
          setActiveIdx(activeIdx - 1);
        }
      }
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <section
      id="process"
      className="min-h-screen flex flex-col justify-center py-9 sm:py-10 lg:py-14 bg-[#0a1628] relative overflow-hidden"
    >
      {/* Animated background blooms */}
      <div
        className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute inset-0 dotted-grid-light opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-10 items-start mb-4">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-1 sm:mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-neon-blue">
                How we work
              </span>
            </div>
            <h2 className="h-section text-white">
              Six stages. <span className="gradient-text-fixed">One Connected Delivery Process.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base mt-8 text-gray-300">
              From strategy and design to development, launch, and ongoing support, every stage is carefully managed to ensure continuity, quality, and dependable delivery.
            </p>
          </div>
        </div>

        {/* Mobile: Horizontal scrollable stage selector */}
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-3 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {stages.map((stage, i) => {
            const isActive = activeIdx === i;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveIdx(i)}
                className={`snap-start shrink-0 px-4 py-3 rounded-xl transition-all duration-300 touch-manipulation ${isActive
                  ? "bg-white/10 border-2"
                  : "bg-white/5 border border-white/5 hover:bg-white/10"
                  }`}
                style={{
                  borderColor: isActive ? stage.accent : "transparent",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{
                      backgroundColor: isActive ? stage.accent : `${stage.accent}40`,
                    }}
                  >
                    {stage.icon}
                  </span>
                  <div className="text-left">
                    <span
                      className={`text-[9px] font-mono font-bold tracking-wider block ${isActive ? "text-white/80" : "text-white/40"
                        }`}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={`text-sm font-bold tracking-tight block ${isActive ? "text-white" : "text-white/60"
                        }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop: Gantt-style timeline */}
        <div className="hidden lg:block">
          <div className="relative rounded-xl bg-white/[0.02] border border-white/10 p-4 lg:p-5 backdrop-blur-sm">
            {/* Vertical gridlines */}
            <div className="absolute inset-x-4 lg:inset-x-5 inset-y-0 grid grid-cols-12 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="border-l border-white/[0.03] h-full"
                />
              ))}
            </div>

            {/* Stage bars */}
            <div className="relative grid grid-cols-12 gap-y-2">
              {stages.map((stage, i) => {
                const isActive = activeIdx === i;
                return (
                  <motion.button
                    key={stage.number}
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      gridColumnStart: stage.colStart,
                      gridColumnEnd: stage.colEnd,
                      backgroundColor: isActive ? stage.accent : stage.bgMuted,
                      borderColor: isActive
                        ? stage.accent
                        : `${stage.accent}40`,
                      boxShadow: isActive
                        ? `0 12px 28px -12px ${stage.accent}80, inset 0 1px 0 rgba(255,255,255,0.15)`
                        : "none",
                    }}
                    animate={{ scale: isActive ? 1.015 : 1 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="group relative flex items-center gap-2 h-9 px-2.5 rounded-md border text-left transition-colors duration-300 touch-manipulation"
                  >
                    <span
                      className={`font-mono text-[9px] font-bold tracking-wider ${isActive ? "text-white/80" : "text-white/30"
                        }`}
                    >
                      {stage.number}
                    </span>
                    <span
                      className={`text-[13px] font-bold tracking-tight truncate ${isActive ? "text-white" : "text-white/80"
                        }`}
                    >
                      {stage.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail panel — updates on hover/click */}
        <motion.div
          layout="position"
          className="mt-4 sm:mt-5 lg:mt-8 grid lg:grid-cols-12 gap-4 sm:gap-4 lg:gap-6 items-start"
          onTouchStart={handleTouchStart}
          transition={{
            layout: {
              type: "spring",
              stiffness: 140,
              damping: 22,
              mass: 0.9,
            },
          }}
        >
          {/* LEFT — stage description */}
          <div className="lg:col-span-7 min-h-[220px] sm:min-h-[240px] lg:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.number}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{
                      backgroundColor: active.accent,
                      boxShadow: `0 14px 32px -10px ${active.accent}80, inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                  >
                    {active.icon}
                  </div>

                  <div>
                    <p
                      className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold"
                      style={{ color: active.accent }}
                    >
                      Stage {active.number}
                    </p>

                    <h3 className="mt-0.5 text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {active.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — what happens here */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`activities-${active.number}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm p-4 sm:p-5 overflow-hidden"
              >
                {/* Accent glow */}
                <motion.div
                  layout
                  className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{ backgroundColor: active.accent }}
                />

                <div className="relative">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-semibold text-gray-500">
                    What happens here
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                    {active.activities.map((a) => (
                      <motion.div
                        key={a}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: active.accent }}
                        />
                        <span className="truncate">{a}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}