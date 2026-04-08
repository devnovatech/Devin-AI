"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const taglines = [
  "We Build Smart Solutions",
  "We Engineer Products",
  "We Scale Your Team",
  "We Power Growth",
];

const techIcons = [
  { label: "Re", color: "#61DAFB", deg: 0, dist: 145 },
  { label: "Py", color: "#FFD43B", deg: 60, dist: 170 },
  { label: "AW", color: "#FF9900", deg: 120, dist: 145 },
  { label: "Nx", color: "#ffffff", deg: 180, dist: 170 },
  { label: "Do", color: "#2496ED", deg: 240, dist: 145 },
  { label: "TS", color: "#3178C6", deg: 300, dist: 170 },
];

const trustedLogos = ["Nokia", "Ericsson", "Strava", "SolarWinds", "Syntronic"];

// Floating particles
function Particles() {
  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-neon-blue"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-10, 10, -10],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const orbY = useTransform(mouseY, [-500, 500], [-15, 15]);
  const circleX = useTransform(mouseX, [-500, 500], [10, -10]);
  const circleY = useTransform(mouseY, [-500, 500], [10, -10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-neon-blue/8 rounded-full blur-[150px]"
          style={{ x: orbX, y: orbY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[150px]"
          style={{ x: circleX, y: circleY }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/5 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* Floating particles */}
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12 pt-24 lg:pt-24">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full border border-neon-blue/30 hover:border-neon-blue/60 transition-colors group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neon-blue">New: AI/ML Solutions Available</span>
              <svg className="w-3 h-3 text-neon-blue group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
          >
            From Strategy to Systems &mdash;{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={taglineIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="gradient-text"
              >
                {taglines[taglineIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            We build robust, scalable digital solutions tailored to your unique
            business goals. From mobile & web apps to machine learning systems
            &ndash; Bringing together engineering precision & business strategy.
          </motion.p>

          {/* Animated metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {[
              { value: "250+", label: "Projects" },
              { value: "50+", label: "Engineers" },
              { value: "15+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* Glowing CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold tracking-wider text-sm overflow-hidden"
            >
              {/* Animated glow border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue bg-[length:200%_100%] animate-gradient-shift" />
              <span className="absolute inset-[2px] rounded-full bg-deep-blue/90" />
              <span className="relative z-10 flex items-center gap-2">
                Unlock Expert Solutions Today
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-white/10 rounded-full text-gray-300 font-semibold text-sm hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>

          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 flex items-center gap-3 justify-center lg:justify-start"
          >
            <div className="flex -space-x-2">
              {["SC", "MR", "EL", "DP"].map((initials, i) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full border-2 border-deep-blue bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ zIndex: 4 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-gray-400 ml-1">4.9/5 from 100+ reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Enhanced tech circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex items-center justify-center lg:sticky lg:top-1/3"
          style={{ x: circleX, y: circleY }}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-spin-slow" />
            {/* Middle ring */}
            <div
              className="absolute inset-6 rounded-full border border-neon-purple/20 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            />
            {/* Inner ring */}
            <div className="absolute inset-12 rounded-full border border-neon-blue/30" />

            {/* Glow center */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-pulse-glow" />
            <div className="absolute inset-20 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">
                DI
              </span>
            </div>

            {/* Orbiting tech icons */}
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.label}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${tech.deg}deg) translateY(-${tech.dist}px) rotate(-${tech.deg}deg) translate(-50%, -50%)`,
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold backdrop-blur-sm border border-white/10 shadow-lg"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    color: tech.color,
                    boxShadow: `0 0 20px ${tech.color}15`,
                  }}
                >
                  {tech.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
