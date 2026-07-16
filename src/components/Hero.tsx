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
      
      {/* Main grid - CONTENT ON LEFT, HEROART ON RIGHT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12  items-center">
        {/* LEFT — text content */}
        <div className="lg:col-span-6">
          <h1
            className="mt-6 font-bold tracking-[-0.025em] leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            <span
              className="block"
            >
              From Vision to Production —
            </span>
            <span
              className="block"
            >
              {" "}
              <span className="gradient-text">Engineered to Scale.</span>
            </span>
          </h1>

          <p
            className="mt-5 text-sm sm:text-lg max-w-xl leading-tight"
          >
            We build production-ready web, mobile, and AI systems that transform ambitious business initiatives into reliable, extensible digital platforms designed for long-term performance, maintainability, and growth.
          </p>

          {/* CTAs */}
          <div
            className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <span
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
            </span>
          </div>
        </div>

        {/* RIGHT — HeroArt */}
        <div
          className="lg:col-span-6 relative hidden lg:block text-center"
        >
          <HeroArt />
        </div>
      </div>
    </section>
  );
}