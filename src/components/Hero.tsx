"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";

type ActivityKind = "deploy" | "augment" | "product";

const activityFeed: Array<{
  kind: ActivityKind;
  time: string;
  primary: string;
  secondary: string;
}> = [
  {
    kind: "deploy",
    time: "just now",
    primary: "Shipped FinFlow v2.4",
    secondary: "→ production · zero downtime",
  },
  {
    kind: "augment",
    time: "12m ago",
    primary: "6 engineers placed",
    secondary: "with HealthBridge · 18-month engagement",
  },
  {
    kind: "product",
    time: "1h ago",
    primary: "Released GovAI v1.2",
    secondary: "RAG pipeline · 3 new tenants",
  },
  {
    kind: "deploy",
    time: "3h ago",
    primary: "Merged 18 PRs",
    secondary: "across 4 client repos · all green",
  },
  {
    kind: "augment",
    time: "5h ago",
    primary: "2 new engagements signed",
    secondary: "FinTech + EdTech · Q1 kickoff",
  },
];

const activityMeta: Record<ActivityKind, { label: string; color: string; bg: string }> = {
  deploy: { label: "DEPLOY", color: "#4FC3F7", bg: "rgba(79,195,247,0.15)" },
  augment: { label: "AUGMENT", color: "#A78BFA", bg: "rgba(167,139,250,0.15)" },
  product: { label: "PRODUCT", color: "#34D399", bg: "rgba(52,211,153,0.15)" },
};

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

  // Activity feed — cycle the "live" highlight through entries
  const [pulseIdx, setPulseIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setPulseIdx((i) => (i + 1) % activityFeed.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

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
              Software house · Now booking Q1 2026
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
              The software house
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              for teams that{" "}
              <span className="gradient-text glow-text">ship.</span>
            </motion.span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Devinception is a full-service software house with three offerings
            under one roof — <span className="text-white font-semibold">custom development</span>,{" "}
            <span className="text-white font-semibold">resource augmentation</span>, and a portfolio of{" "}
            <span className="text-white font-semibold">in-house products</span>. One trusted partner,
            engineered for outcomes.
          </motion.p>

          {/* Three-pillar chip row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {[
              { label: "Custom Development", icon: "</>" },
              { label: "Resource Augmentation", icon: "{ }" },
              { label: "SaaS Products", icon: "▲" },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm text-[11px] font-semibold text-gray-300 tracking-wide"
              >
                <span className="text-neon-blue font-mono text-[10px]">{p.icon}</span>
                {p.label}
              </span>
            ))}
          </motion.div>

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
                Schedule a discovery call
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
              View our capabilities
            </Link>
          </motion.div>

          {/* Inline trust strip */}
          <motion.div
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
                <span className="text-white font-semibold">4.9 / 5</span>{" "}
                across 100+ engagements
              </span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span>
              <span className="text-white font-semibold">SOC 2 Type II</span>{" "}
              aligned · GDPR · WCAG-AA
            </span>
            <span className="hidden md:block w-px h-4 bg-white/10" />
            <span className="hidden md:inline">
              <span className="text-white font-semibold">15+ countries</span>{" "}
              served
            </span>
          </motion.div>
        </div>

        {/* RIGHT — animated live showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          style={{ rotate: panelTilt }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          {/* Behind-card glow */}
          <motion.div
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-neon-blue/25 via-neon-purple/15 to-transparent blur-3xl pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Outer card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.1] via-white/[0.04] to-white/[0.02] border border-white/15 backdrop-blur-md p-5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Inner accent pulse */}
            <motion.div
              className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-neon-blue/20 blur-[80px] pointer-events-none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Window chrome */}
            <div className="relative flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                <span className="text-[9px] font-mono text-gray-400">devinception.io</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-emerald-300/90">
                  Live
                </span>
              </div>
            </div>

            {/* Heading row */}
            <div className="relative flex items-end justify-between px-1 pb-3 border-b border-white/[0.06]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-neon-blue">
                  Engineering activity
                </p>
                <h3 className="mt-0.5 text-lg font-bold text-white tracking-tight">
                  Live across the team
                </h3>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                <span className="text-[10px] font-mono text-emerald-300/90 tabular-nums">
                  24h
                </span>
              </motion.div>
            </div>

            {/* Activity feed */}
            <div className="relative mt-3 space-y-1.5">
              {activityFeed.map((item, i) => {
                const meta = activityMeta[item.kind];
                const isPulse = i === pulseIdx;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.85 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    className="relative group"
                  >
                    {/* Active highlight bar that travels */}
                    {isPulse && (
                      <motion.span
                        layoutId="activity-pulse"
                        className="absolute inset-0 rounded-lg border"
                        style={{
                          backgroundColor: meta.bg,
                          borderColor: `${meta.color}50`,
                        }}
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}

                    <div className="relative flex items-center gap-2.5 px-2.5 py-2 rounded-lg">
                      {/* Pulsing dot */}
                      <span className="relative flex h-2 w-2 shrink-0">
                        {isPulse && (
                          <span
                            className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                            style={{ backgroundColor: meta.color }}
                          />
                        )}
                        <span
                          className="relative inline-flex rounded-full h-2 w-2"
                          style={{ backgroundColor: meta.color }}
                        />
                      </span>

                      {/* Tag */}
                      <span
                        className="font-mono text-[9px] font-bold tracking-[0.15em] px-1.5 py-0.5 rounded shrink-0"
                        style={{
                          color: meta.color,
                          backgroundColor: `${meta.color}15`,
                        }}
                      >
                        {meta.label}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-1.5">
                          <p className="text-[11px] font-semibold text-white truncate">
                            {item.primary}
                          </p>
                        </div>
                        <p className="text-[10px] text-gray-500 truncate leading-tight">
                          {item.secondary}
                        </p>
                      </div>

                      {/* Time */}
                      <span className="font-mono text-[9px] text-gray-500 shrink-0">
                        {item.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Status counters */}
            <div className="relative grid grid-cols-3 gap-1.5 mt-4">
              {[
                { label: "Deploys", value: "138", color: "#4FC3F7" },
                { label: "Placements", value: "12", color: "#A78BFA" },
                { label: "Releases", value: "4", color: "#34D399" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.08 }}
                  className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-2.5 py-1.5"
                >
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-base font-bold text-white tabular-nums leading-none">
                      {m.value}
                    </p>
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider"
                      style={{ color: m.color }}
                    >
                      ↑
                    </span>
                  </div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-500 leading-tight mt-0.5">
                    {m.label} · 24h
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack rail */}
            <div className="relative mt-4 pt-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-[9px] uppercase tracking-[0.18em] font-semibold text-gray-500">
                  Engineering stack
                </p>
                <span className="text-[9px] text-gray-600 font-mono">v2026.q1</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "Python", "Anthropic", "Stripe", "Postgres"].map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 + i * 0.06 }}
                    className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-300"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
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
