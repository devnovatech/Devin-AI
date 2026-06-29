"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Link from "next/link";

// ─── Capabilities ──────────────────────────────────────────────────────

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

// ─── Tech Logo Components ───────────────────────────────────────────────

const ReactLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="10" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" />
    <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(-60 50 50)" />
  </svg>
);

const NextLogo = ({ size = 19 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="45" fill="none" stroke="#000" strokeWidth="8" />
    <path d="M30 30 L30 70 L60 50 L30 30" fill="none" stroke="#000" strokeWidth="8" />
    <line x1="70" y1="30" x2="70" y2="70" stroke="#000" strokeWidth="8" />
  </svg>
);

const NodeLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <ellipse cx="50" cy="50" rx="45" ry="40" fill="none" stroke="#339933" strokeWidth="6" />
    <circle cx="50" cy="50" r="10" fill="#339933" />
  </svg>
);

const TypescriptLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <rect x="15" y="15" width="70" height="70" rx="8" fill="none" stroke="#3178C6" strokeWidth="6" />
    <text x="50" y="68" fontSize="48" fontWeight="bold" fill="#3178C6" textAnchor="middle">TS</text>
  </svg>
);

const PythonLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <ellipse cx="50" cy="50" rx="45" ry="40" fill="none" stroke="#3776AB" strokeWidth="6" />
    <text x="50" y="68" fontSize="40" fontWeight="bold" fill="#3776AB" textAnchor="middle">Py</text>
  </svg>
);

const OpenAILogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#10A37F" strokeWidth="6" />
    <text x="50" y="68" fontSize="36" fontWeight="bold" fill="#10A37F" textAnchor="middle">AI</text>
  </svg>
);

const AnthropicLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#D4A574" strokeWidth="6" />
    <text x="50" y="68" fontSize="32" fontWeight="bold" fill="#D4A574" textAnchor="middle">An</text>
  </svg>
);

const AWSLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="#FF9900" strokeWidth="5" />
    <text x="50" y="68" fontSize="36" fontWeight="bold" fill="#FF9900" textAnchor="middle">AWS</text>
  </svg>
);

const PostgresLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#336791" strokeWidth="6" />
    <text x="50" y="68" fontSize="36" fontWeight="bold" fill="#336791" textAnchor="middle">Pg</text>
  </svg>
);

const MongoLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <ellipse cx="50" cy="50" rx="45" ry="40" fill="none" stroke="#4EA94B" strokeWidth="6" />
    <text x="50" y="68" fontSize="32" fontWeight="bold" fill="#4EA94B" textAnchor="middle">MDB</text>
  </svg>
);

const DockerLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <rect x="15" y="25" width="70" height="50" rx="10" fill="none" stroke="#2496ED" strokeWidth="5" />
    <text x="50" y="68" fontSize="40" fontWeight="bold" fill="#2496ED" textAnchor="middle">D</text>
  </svg>
);

const GraphQLLogo = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 100 100" width={size} height={size}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="#E10098" strokeWidth="5" />
    <text x="50" y="68" fontSize="28" fontWeight="bold" fill="#E10098" textAnchor="middle">GQL</text>
  </svg>
);

// ─── HeroArt Component ──────────────────────────────────────────────────

function TravellingGlow() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle, rgba(96,165,250,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(167,139,250,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(244,114,182,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(251,146,60,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(52,211,153,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(34,211,238,0.55) 0%, transparent 60%)",
            "radial-gradient(circle, rgba(96,165,250,0.55) 0%, transparent 60%)",
          ],
          scale: [1, 1.08, 1],
        }}
        transition={{
          background: { duration: 14, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute h-[55%] w-[55%] rounded-full blur-2xl"
        style={{ top: "12%", left: "22%" }}
      />
    </motion.div>
  );
}

function Primitive({
  type,
  angle,
  radius,
  duration,
  size,
  reverse = false,
}: {
  type: "cube" | "ring";
  angle: number;
  radius: number;
  duration: number;
  size: number;
  reverse?: boolean;
}) {
  const radiusPct = (radius / 400) * 100;
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute"
        style={{
          left: `${(50 + radiusPct * Math.cos((angle * Math.PI) / 180)).toFixed(4)}%`,
          top: `${(50 + radiusPct * Math.sin((angle * Math.PI) / 180)).toFixed(4)}%`,
        }}
      >
        <motion.div
          animate={{ rotate: reverse ? 360 : -360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ width: size, height: size }}
        >
          {type === "cube" ? (
            <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-[0_4px_8px_rgba(10,10,20,0.18)]">
              <polygon points="50,10 85,30 50,50 15,30" fill="#fff" stroke="rgba(10,10,20,0.2)" strokeWidth="1.2" />
              <polygon points="85,30 85,70 50,90 50,50" fill="#dde1ee" stroke="rgba(10,10,20,0.2)" strokeWidth="1.2" />
              <polygon points="15,30 15,70 50,90 50,50" fill="#b8c1ff" stroke="rgba(10,10,20,0.2)" strokeWidth="1.2" />
            </svg>
          ) : (
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <linearGradient id={`pr-${angle}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff6b3d" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="38" fill="none" stroke={`url(#pr-${angle})`} strokeWidth="6" strokeLinecap="round" />
            </svg>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function OrbitRing({
  logos,
  radius,
  duration,
  direction,
  size,
  startOffset = 0,
}: {
  logos: { Logo: React.ComponentType<{ size?: number }>; name: string }[];
  radius: number;
  duration: number;
  direction: 1 | -1;
  size: number;
  startOffset?: number;
}) {
  const radiusPct = (radius / 400) * 100;
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 * direction }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {logos.map((it, i) => {
        const angle = (i * 360) / logos.length + startOffset;
        const rad = (angle * Math.PI) / 180;
        const xPct = (50 + radiusPct * Math.cos(rad)).toFixed(4);
        const yPct = (50 + radiusPct * Math.sin(rad)).toFixed(4);
        return (
          <div
            key={it.name}
            className="absolute"
            style={{
              left: `${xPct}%`,
              top: `${yPct}%`,
              width: 0,
              height: 0,
            }}
          >
            <motion.div
              animate={{ rotate: -360 * direction }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ willChange: "transform" }}
              title={it.name}
            >
              <it.Logo size={size} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

function HeroArt() {
  // 6 inner-orbit logos (engineering + AI core)
  const INNER_LOGOS = [
    { Logo: ReactLogo, name: "React" },
    { Logo: NodeLogo, name: "Node.js" },
    { Logo: TypescriptLogo, name: "TypeScript" },
    { Logo: PythonLogo, name: "Python" },
    { Logo: OpenAILogo, name: "OpenAI" },
    { Logo: AnthropicLogo, name: "Anthropic" },
  ];

  // 6 outer-orbit logos (platforms + databases + delivery)
  const OUTER_LOGOS = [
    { Logo: NextLogo, name: "Next.js" },
    { Logo: PostgresLogo, name: "Postgres" },
    { Logo: MongoLogo, name: "MongoDB" },
    { Logo: AWSLogo, name: "AWS" },
    { Logo: DockerLogo, name: "Docker" },
    { Logo: GraphQLLogo, name: "GraphQL" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* Background dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(10,10,20,0.1) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* OUTER ring with co-ordinate marks */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="outer-ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2486c5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2486c5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="195"
          fill="none"
          stroke="url(#outer-ring-grad)"
          strokeWidth="1.6"
          strokeDasharray="4 6"
        />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const inner = 184;
          const outer = i % 6 === 0 ? 202 : 192;
          const cos = Math.cos((angle * Math.PI) / 180);
          const sin = Math.sin((angle * Math.PI) / 180);
          const x1 = (200 + inner * cos).toFixed(3);
          const y1 = (200 + inner * sin).toFixed(3);
          const x2 = (200 + outer * cos).toFixed(3);
          const y2 = (200 + outer * sin).toFixed(3);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(10,10,20,0.18)"
              strokeWidth={i % 6 === 0 ? "1.4" : "1"}
            />
          );
        })}
      </motion.svg>

      {/* MID ring (counter-rotating) */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="148"
          fill="none"
          stroke="rgba(10,10,20,0.18)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </motion.svg>

      {/* INNER pulsing ring */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="rgba(79,70,229,0.45)"
          strokeWidth="1"
          strokeDasharray="3 5"
          animate={{ strokeOpacity: [0.45, 0.15, 0.45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Orbiting satellite dots */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute h-3.5 w-3.5 rounded-full"
          style={{
            top: "calc(50% - 35% - 7px)",
            left: "calc(50% - 7px)",
            background: "radial-gradient(circle at 30% 30%, #ffffff, #2486c5)",
            boxShadow: "0 0 24px 6px rgba(79,70,229,0.6)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute h-3 w-3 rounded-full"
          style={{
            top: "calc(50% - 6px)",
            left: "calc(50% + 35%)",
            background: "radial-gradient(circle at 30% 30%, #ffffff, #ff6b3d)",
            boxShadow: "0 0 18px 4px rgba(255,107,61,0.55)",
          }}
        />
      </motion.div>

      {/* CENTRAL SPHERE */}
      <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.025, 1], rotate: [0, 360] }}
          transition={{
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 70, repeat: Infinity, ease: "linear" },
          }}
          className="relative h-full w-full"
        >
          {/* Drop shadow under sphere */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle at 50% 75%, rgba(10,10,20,0.45) 0%, transparent 60%)",
              transform: "translateY(10%) scale(0.92)",
            }}
          />

          {/* Main sphere body */}
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{
              background: `
                radial-gradient(circle at 35% 28%, #6ec1e8 0%, #46a4f6 18%, #2486c5 38%, #1d5784 65%, #1a3a5c 100%)
              `,
              boxShadow:
                "inset -25px -50px 90px rgba(0,0,0,0.5), inset 30px 40px 80px rgba(255,255,255,0.18), 0 30px 60px -20px rgba(10,10,20,0.4)",
            }}
          >
            <TravellingGlow />

            {/* Surface meridians */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full opacity-30"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="merg2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[18, 32, 50, 68, 82].map((cx) => (
                <ellipse
                  key={cx}
                  cx="50"
                  cy="50"
                  rx={Math.abs(50 - cx) || 1}
                  ry="48"
                  fill="none"
                  stroke="url(#merg2)"
                  strokeWidth="0.3"
                />
              ))}
              {[18, 32, 50, 68, 82].map((cy) => (
                <ellipse
                  key={`lat-${cy}`}
                  cx="50"
                  cy="50"
                  rx="48"
                  ry={Math.abs(50 - cy) || 1}
                  fill="none"
                  stroke="url(#merg2)"
                  strokeWidth="0.3"
                />
              ))}
            </svg>

            {/* Sweeping shimmer */}
            <motion.div
              animate={{ x: ["-100%", "120%"] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2.5,
              }}
              className="absolute inset-y-0 w-1/3"
              style={{
                background:
                  "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
          </div>

          {/* Outer rim highlight */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 0 1px rgba(10,10,20,0.06)",
            }}
          />
        </motion.div>
      </div>

      {/* Radial connection lines */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 -z-[1]"
        aria-hidden
      >
        {INNER_LOGOS.map((_, i) => {
          const angle = (i * 360) / INNER_LOGOS.length - 90;
          const x = (200 + 140 * Math.cos((angle * Math.PI) / 180)).toFixed(3);
          const y = (200 + 140 * Math.sin((angle * Math.PI) / 180)).toFixed(3);
          return (
            <line
              key={`s-${i}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="rgba(79,70,229,0.12)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          );
        })}
      </svg>

      {/* INNER orbit */}
      <OrbitRing
        logos={INNER_LOGOS}
        radius={140}
        duration={80}
        direction={1}
        size={18}
      />

      {/* OUTER orbit */}
      <OrbitRing
        logos={OUTER_LOGOS}
        radius={192}
        duration={130}
        direction={-1}
        size={19}
        startOffset={30}
      />

      {/* Geometric primitives */}
      <Primitive type="cube" angle={20} radius={166} duration={95} size={18} />
      <Primitive type="ring" angle={210} radius={166} duration={95} size={20} />
      <Primitive type="cube" angle={140} radius={166} duration={140} size={14} reverse />
      <Primitive type="ring" angle={320} radius={166} duration={60} size={14} reverse />
    </div>
  );
}

// ─── Particles Component ───────────────────────────────────────────────

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

// ─── Hero Component ────────────────────────────────────────────────────

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Capability spotlight
  const [capIdx, setCapIdx] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => {
      setCapIdx((i) => (i + 1) % capabilities.length);
    }, 3600);
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
          <h1
            className="mt-6 font-bold tracking-[-0.025em] leading-[1.15] text-white"
            style={{ fontSize: "clamp(2.5rem, 5.5vw + 0.25rem, 5.5rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              Your Vision.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.4, 0, 0.2, 1] }}
              className="block "
            >
              {" "}
              <span className="gradient-text glow-text">Engineered Into Deployable Software</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Whether you're building your first MVP or scaling to enterprise, our full-stack engineers deliver production-grade software, end to end.
          </motion.p>

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
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm sm:text-base hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300 min-h-[52px] sm:min-h-[56px]"
              >
                Start your project
              </Link>
            </motion.span>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-4 sm:py-4 rounded-full border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-h-[52px] sm:min-h-[56px]"
            >
              Explore our services
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — HeroArt with animation matching first version */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          style={{ rotate: panelTilt }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <HeroArt />
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