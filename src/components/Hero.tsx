"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";

const trustedLogos = ["Nokia", "Strava", "Ericsson", "SolarWinds", "Syntronic"];

const caseCards = [
  {
    industry: "FinTech",
    accent: "#1565C0",
    metric: "+240%",
    metricLabel: "MoM growth",
    client: "FinFlow Technologies",
    summary:
      "Real-time analytics platform powering financial decisions for 50k+ users.",
    pos: { top: "0%", left: "8%", rotate: -7, z: 30 },
  },
  {
    industry: "Healthcare",
    accent: "#0288D1",
    metric: "14",
    metricLabel: "hospitals onboarded",
    client: "HealthBridge",
    summary:
      "HIPAA-compliant telemedicine platform with EHR integration across 14 facilities.",
    pos: { top: "26%", left: "38%", rotate: 5, z: 20 },
  },
  {
    industry: "E-commerce",
    accent: "#0277BD",
    metric: "4.8★",
    metricLabel: "App Store rating",
    client: "ShopSphere",
    summary:
      "Cross-platform mobile app with personalized recommendations.",
    pos: { top: "54%", left: "0%", rotate: -3, z: 10 },
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
    const DOT_COLOR = "rgba(187, 225, 250, 0.8)";
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
            const alpha = (1 - dist / LINK_DISTANCE) * 0.25;
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

/* ───────── Stacked case card ───────── */
interface CaseCardProps {
  card: (typeof caseCards)[number];
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function StackedCaseCard({ card, index, mouseX, mouseY }: CaseCardProps) {
  const factor = (index + 1) * 0.4;
  const xOffset = useTransform(mouseX, [-500, 500], [-12 * factor, 12 * factor]);
  const yOffset = useTransform(mouseY, [-500, 500], [-8 * factor, 8 * factor]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.6 + index * 0.18,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        x: xOffset,
        y: yOffset,
        top: card.pos.top,
        left: card.pos.left,
        rotate: card.pos.rotate,
        zIndex: card.pos.z,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      }}
      className="absolute w-[270px] cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
        className="relative rounded-2xl border border-white/10 bg-deep-blue/85 backdrop-blur-md p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] overflow-hidden group"
      >
        {/* Accent corner glow */}
        <div
          className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
          style={{ backgroundColor: card.accent }}
        />

        {/* Subtle accent border on hover */}
        <div
          className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ borderColor: `${card.accent}55` }}
        />

        <div className="relative">
          {/* Industry pill */}
          <div className="flex items-center justify-between">
            <span
              className="inline-flex text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border"
              style={{
                color: card.accent,
                borderColor: `${card.accent}40`,
                backgroundColor: `${card.accent}10`,
              }}
            >
              {card.industry}
            </span>
            <span className="text-[10px] font-mono text-gray-500 tracking-wider">
              0{index + 1}
            </span>
          </div>

          {/* Big metric */}
          <div className="mt-5">
            <p
              className="text-[2.5rem] font-bold tracking-tight tabular-nums leading-none"
              style={{ color: card.accent }}
            >
              {card.metric}
            </p>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.15em] font-semibold mt-1.5">
              {card.metricLabel}
            </p>
          </div>

          {/* Client + summary */}
          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <h3 className="text-sm font-bold text-white tracking-tight">
              {card.client}
            </h3>
            <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
              {card.summary}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────── Hero ───────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useTransform(mouseX, [-500, 500], [-12, 12]);
  const orbY = useTransform(mouseY, [-500, 500], [-12, 12]);
  const orbXInverse = useTransform(mouseX, [-500, 500], [12, -12]);
  const orbYInverse = useTransform(mouseY, [-500, 500], [12, -12]);

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-32 pb-20 lg:pb-28"
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
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 bg-neon-blue/[0.06] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Asymmetric magazine layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
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
              Available for Q4 2026 projects
            </span>
          </motion.div>

          {/* Headline — bold editorial */}
          <h1
            className="mt-8 font-bold tracking-[-0.025em] leading-[0.95] text-white"
            style={{ fontSize: "clamp(2.75rem, 6.5vw + 0.25rem, 6.5rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              We engineer
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              software that{" "}
              <span className="gradient-text glow-text">ships.</span>
            </motion.span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 text-base sm:text-lg lg:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            A global engineering studio for funded teams. Mobile, web, AI, and
            growth — designed, built, and shipped under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
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
                Book a discovery call
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
              Explore services
            </Link>
          </motion.div>

          {/* Inline trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-500"
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
                <span className="text-white font-semibold">4.9</span>
                {" "}from 100+ engagements
              </span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span>
              <span className="text-white font-semibold">250+</span> projects
              shipped
            </span>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <span className="hidden md:inline">
              <span className="text-white font-semibold">15+</span> countries
            </span>
          </motion.div>
        </div>

        {/* RIGHT — stacked case cards */}
        <div className="lg:col-span-5 relative h-[480px] hidden lg:block">
          {/* Subtle radial backdrop behind cards */}
          <div className="absolute inset-0 -m-8 bg-gradient-radial from-neon-blue/[0.04] via-transparent to-transparent pointer-events-none" />
          {caseCards.map((card, i) => (
            <StackedCaseCard
              key={card.client}
              card={card}
              index={i}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
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
