"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";
import { HeroArt } from "./ui/HeroArt";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);




  // Spotlight cursor
  const spotX = useMotionValue(-1000);
  const spotY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(700px circle at ${spotX}px ${spotY}px, rgba(79,195,247,0.07), transparent 45%)`;

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
  }

  function handleMouseLeave() {
    spotX.set(-1000);
    spotY.set(-1000);
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col justify-center overflow-hidden bg-section-hero grid-bg pt-28 pb-14 lg:pb-16"
    >
      {/* Aurora background */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px]"

          animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <div className="noise-overlay" />
      </div> */}


      {/* <Particles /> */}

      {/* Main grid - CONTENT ON LEFT, HEROART ON RIGHT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12  items-center">
        {/* LEFT — text content */}
        <div className="lg:col-span-6">
          <h1
            className="mt-6 font-bold tracking-[-0.025em] leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              From Vision to Production —
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              {" "}
              <span className="gradient-text">Built Right the First Time.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 text-sm sm:text-lg text-ink-600 max-w-xl leading-tight"
          >
            We architect production-ready web, mobile, and AI systems that convert complex business initiatives into scalable digital platforms, engineered for reliability, extensibility, and long-term maintainability to drive sustained business growth.          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-4 rounded-xl bg-neon-blue text-white font-bold tracking-wide text-sm sm:text-base hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300 min-h-[52px] sm:min-h-[56px]"
              >
                Start your project
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </motion.span>
            {/* <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-4 rounded-xl border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-h-[52px] sm:min-h-[56px]"
            >
              Explore our services
            </Link> */}
          </motion.div>
        </div>

        {/* RIGHT — HeroArt */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="lg:col-span-6 relative hidden lg:block text-center"
        >
          <HeroArt />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
        </div>
      </motion.div> */}
    </section>
  );
}