"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";

interface Capability {
  tag: string;
  short: string;
  title: string;
  description: string;
  accent: string;
  points: string[];
  icon: React.ReactNode;
}

const capabilities: Capability[] = [
  {
    tag: "Custom Development",
    short: "Custom Dev",
    title: "Software built for you",
    description:
      "Web, mobile, and AI products — designed, built, and shipped end to end.",
    accent: "#4FC3F7",
    points: ["Web & mobile apps", "AI & automation", "APIs & platforms"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    tag: "Team Augmentation",
    short: "Augment",
    title: "Engineers for your team",
    description:
      "Senior engineers who embed with your team and contribute from day one.",
    accent: "#A78BFA",
    points: ["Senior engineers", "Embedded in your team", "Scale up or down"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    tag: "Our Products",
    short: "Products",
    title: "Products we build & run",
    description:
      "Software we design, build, and operate ourselves — refined over time.",
    accent: "#34D399",
    points: ["Built in-house", "Production-ready", "Always improving"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

/* ───────── Network particles ───────── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxRaw = canvasEl.getContext("2d");
    if (!ctxRaw) return;
    const canvas = canvasEl;
    const ctx = ctxRaw;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;

    type Dot = { x: number; y: number; vx: number; vy: number; r: number };
    let dots: Dot[] = [];

    const LINK_DISTANCE = 140;
    const DOT_COLOR = "rgba(187, 225, 250, 0.7)";
    const LINE_COLOR = "50, 130, 184";

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const count = Math.max(35, Math.min(70, Math.floor(area / 22000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.3 + 0.6,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > width) d.vx *= -1;
        if (d.y < 0 || d.y > height) d.vy *= -1;
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.22;
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = DOT_COLOR;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ───────── Hero ───────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Capability spotlight — auto-cycle through the three offerings
  const [capIdx, setCapIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCapIdx((i) => (i + 1) % capabilities.length);
    }, 3600);
    return () => clearInterval(t);
  }, []);
  const activeCap = capabilities[capIdx];

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const orbY = useTransform(mouseY, [-500, 500], [-10, 10]);
  const orbXInverse = useTransform(mouseX, [-500, 500], [10, -10]);
  const orbYInverse = useTransform(mouseY, [-500, 500], [10, -10]);
  const panelTilt = useTransform(mouseX, [-500, 500], [-4, 4]);

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
    mouseX.set(e.clientX - cx);
    mouseY.set(e.clientY - cy);
  }

  function handleMouseLeave() {
    spotX.set(-1000);
    spotY.set(-1000);
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-section-hero grid-bg pt-28 pb-14 lg:pb-16"
    >
      {/* Aurora background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px]"
          style={{ x: orbX, y: orbY }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]"
          style={{ x: orbXInverse, y: orbYInverse }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <div className="noise-overlay" />
      </div>

      {/* Mouse-follow spotlight */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none mix-blend-screen z-[1]"
        style={{ background: spotlight }}
      />

      <Particles />

      {/* Main grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* LEFT — text */}
        <div className="lg:col-span-7">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
              Software development partner · Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="mt-6 font-bold tracking-[-0.025em] leading-[0.96] text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw + 0.25rem, 5.5rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
             Built for 
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
               {" "}
              <span className="gradient-text glow-text"> Operational Scale</span>
            </motion.span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
           Digital infrastructure, intelligent automation, and product systems engineered to reduce friction across modern businesses.
<br></br>
From cloud-native platforms to AI-powered workflows, every system is designed around speed, scalability, and long-term execution.
          </motion.p>

          {/* Three-pillar chip row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {[
              { label: "Custom Development", icon: "</>" },
              { label: "Team Augmentation", icon: "{ }" },
              { label: "Our Products", icon: "▲" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm text-[11px] font-semibold text-gray-300 tracking-wide"
              >
                <span className="text-neon-blue font-mono text-[10px]">{p.icon}</span>
                {p.label}
              </span>
            ))}
          </motion.div> */}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
              >
                Start your project
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Explore our services
            </Link>
          </motion.div>

          {/* Inline trust strip */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500"
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5">
                <span className="text-white font-semibold">Trusted</span>{" "}
                by the teams we work with
              </span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span>
              <span className="text-white font-semibold">Security & accessibility</span>{" "}
              built in
            </span>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <span className="hidden md:inline">
              <span className="text-white font-semibold">Clients</span>{" "}
              around the world
            </span>
          </motion.div> */}
        </div>

        {/* RIGHT — animated orbital system */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          style={{ rotate: panelTilt }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          {/* Ambient glow behind the orbit */}
          <motion.div
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-neon-blue/25 via-neon-purple/15 to-transparent blur-3xl pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ───────── Orbital system ───────── */}
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            {/* Decorative rotating rings */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="44" className="stroke-[rgba(10,22,40,0.14)] dark:stroke-[rgba(255,255,255,0.10)]" strokeWidth="0.25" strokeDasharray="1 2.5" />
              <circle cx="50" cy="50" r="31" className="stroke-[rgba(10,22,40,0.10)] dark:stroke-[rgba(255,255,255,0.08)]" strokeWidth="0.25" />
              <circle cx="50" cy="50" r="18" className="stroke-[rgba(10,22,40,0.08)] dark:stroke-[rgba(255,255,255,0.06)]" strokeWidth="0.25" strokeDasharray="0.5 2" />
            </motion.svg>

            {/* OUTER RING — tech stack (counter-rotating) */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            >
              {["React", "Next.js", "TypeScript", "Python", "AI", "Cloud"].map((t, i) => {
                const angle = (Math.PI * 2 * i) / 6 + Math.PI / 6;
                const x = 50 + Math.sin(angle) * 42;
                const y = 50 - Math.cos(angle) * 42;
                return (
                  <div
                    key={t}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                      className="block px-2.5 py-1 rounded-full border backdrop-blur-md text-[10px] font-semibold tracking-wide whitespace-nowrap shadow-lg bg-white border-deep-blue/10 text-deep-blue/70 shadow-deep-blue/10 dark:bg-white/[0.06] dark:border-white/15 dark:text-gray-200 dark:shadow-black/30"
                    >
                      {t}
                    </motion.span>
                  </div>
                );
              })}
            </motion.div>

            {/* INNER RING — offerings + energy lines */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            >
              {/* Energy lines from core to each node */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                preserveAspectRatio="none"
              >
                {capabilities.map((c, i) => {
                  const angle = (Math.PI * 2 * i) / capabilities.length;
                  const x = 50 + Math.sin(angle) * 31;
                  const y = 50 - Math.cos(angle) * 31;
                  const isActive = i === capIdx;
                  return (
                    <motion.line
                      key={c.tag}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={c.accent}
                      strokeWidth={isActive ? 0.7 : 0.35}
                      strokeDasharray="1.5 2.5"
                      animate={{
                        strokeDashoffset: [0, -8],
                        opacity: isActive ? [0.5, 0.95, 0.5] : 0.28,
                      }}
                      transition={{ duration: isActive ? 1 : 1.6, repeat: Infinity, ease: "linear" }}
                    />
                  );
                })}
              </svg>

              {capabilities.map((c, i) => {
                const angle = (Math.PI * 2 * i) / capabilities.length;
                const x = 50 + Math.sin(angle) * 31;
                const y = 50 - Math.cos(angle) * 31;
                const isActive = i === capIdx;
                return (
                  <div
                    key={c.tag}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <motion.button
                      onClick={() => setCapIdx(i)}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.15 }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <motion.span
                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border"
                        style={{
                          backgroundColor: `${c.accent}${isActive ? "33" : "1f"}`,
                          borderColor: `${c.accent}${isActive ? "aa" : "55"}`,
                          color: c.accent,
                          boxShadow: isActive
                            ? `0 0 34px -4px ${c.accent}`
                            : `0 0 16px -8px ${c.accent}`,
                        }}
                        animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {c.icon}
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-2xl border"
                            style={{ borderColor: c.accent }}
                            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                      </motion.span>
                      <span
                        className={`text-[10px] font-semibold tracking-tight whitespace-nowrap transition-colors ${
                          isActive
                            ? "text-deep-blue dark:text-white"
                            : "text-deep-blue/50 dark:text-white/55"
                        }`}
                      >
                        {c.short}
                      </span>
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>

            {/* CENTER CORE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-28 h-28 lg:w-32 lg:h-32">
                {/* Rotating gradient ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #4FC3F7, #A78BFA, #34D399, #4FC3F7)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                />
                {/* Pulsing halo */}
                <motion.div
                  className="absolute -inset-3 rounded-full border border-white/20"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Inner disc — pinned dark in both themes */}
                <div
                  className="absolute inset-[3px] rounded-full flex flex-col items-center justify-center gap-1 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]"
                  style={{ backgroundColor: "#0a1628" }}
                >
                  <motion.svg
                    className="w-8 h-8"
                    style={{ color: "#ffffff" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </motion.svg>
                  <span
                    className="text-[8px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Devinception
                  </span>
                </div>
              </div>
            </div>

            {/* Floating sparks */}
            {[
              { top: "8%", left: "22%", d: 0 },
              { top: "16%", left: "80%", d: 0.6 },
              { top: "80%", left: "14%", d: 1.1 },
              { top: "86%", left: "78%", d: 1.6 },
              { top: "48%", left: "95%", d: 0.3 },
              { top: "50%", left: "4%", d: 0.9 },
            ].map((s, i) => (
              <motion.span
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
                style={{ top: s.top, left: s.left }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: s.d }}
              />
            ))}
          </div>

          {/* Floating top-right — Avg MVP */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 rounded-2xl bg-neon-blue text-white px-4 py-2.5 shadow-xl shadow-neon-blue/50 ring-4 ring-deep-blue"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold opacity-90 leading-tight">
                    Avg. MVP
                  </p>
                  <p className="text-sm font-bold tabular-nums leading-tight">10 weeks</p>
                </div>
              </div>
            </motion.div>
          </motion.div> */}

          {/* Floating top-left — Team avatars */}
          {/* <motion.div
            initial={{ opacity: 0, x: -10, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute top-12 -left-7 z-10"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="rounded-2xl bg-deep-blue/95 backdrop-blur-md px-3 py-2.5 shadow-xl shadow-black/40 border border-white/10"
            >
              <p className="text-[8px] uppercase tracking-[0.18em] font-semibold text-gray-400 mb-1.5">
                Pod assigned
              </p>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  {["#1E88E5", "#0288D1", "#0097A7", "#039BE5"].map((c) => (
                    <span
                      key={c}
                      className="w-5 h-5 rounded-full ring-2 ring-deep-blue"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-white">+ 2</span>
              </div>
            </motion.div>
          </motion.div> */}

          {/* Floating bottom-left — retention */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-4 py-2.5 shadow-xl shadow-emerald-500/40 ring-4 ring-deep-blue"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] font-semibold opacity-90 leading-tight">
                    Retention
                  </p>
                  <p className="text-sm font-bold tabular-nums leading-tight">98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div> */}

          {/* Floating bottom-right — code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute -bottom-6 right-8 z-10"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="rounded-xl bg-deep-blue/95 backdrop-blur-md px-3 py-2 shadow-xl shadow-black/40 border border-white/10 font-mono text-[10px]"
            >
              <span className="text-emerald-400">$</span>{" "}
              <span style={{ color: "#d1d5db" }}>devinception </span>
              <span className="text-neon-blue">ship</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ color: "#ffffff" }}
              >
                _
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
