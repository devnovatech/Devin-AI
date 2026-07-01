"use client";

import { motion } from "framer-motion";
import {
  ReactLogo,
  NextLogo,
  NodeLogo,
  TypescriptLogo,
  TailwindLogo,
  PythonLogo,
  OpenAILogo,
  AnthropicLogo,
  AWSLogo,
  VercelLogo,
  DockerLogo,
  KubernetesLogo,
  PostgresLogo,
  MongoLogo,
  FigmaLogo,
  GraphQLLogo,
} from "./techLogos";

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

export function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* Background dot grid (very faint) */}
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


      {/* OUTER ring with co-ordinate marks (closest to edge) */}
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

      {/* MID ring (counter-rotating) — sits between outer and sphere */}
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

      {/* INNER pulsing ring (just outside sphere) */}
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

      {/* CENTRAL SPHERE — dominant focal point, locked to center */}
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

          {/* Main sphere body — Devinception brand blue gradient */}
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
            {/* Single traveling glow that orbits the sphere with color shifts */}
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

      {/* Radial connection lines — tech logos to centre */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 -z-[1]"
        aria-hidden
      >
        {/* Inner orbit spokes */}
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

      {/* INNER orbit — 6 tech orbs sit on inner (mid) boundary */}
      <OrbitRing
        logos={INNER_LOGOS}
        radius={140}
        duration={80}
        direction={1}
        size={18}
      />

      {/* OUTER orbit — 6 tech orbs sit on outer boundary */}
      <OrbitRing
        logos={OUTER_LOGOS}
        radius={192}
        duration={130}
        direction={-1}
        size={19}
        startOffset={30}
      />

      {/* Geometric primitives — sit between the two boundaries */}
      <Primitive type="cube" angle={20} radius={166} duration={95} size={18} />
      <Primitive type="ring" angle={210} radius={166} duration={95} size={20} />
      <Primitive type="cube" angle={140} radius={166} duration={140} size={14} reverse />
      <Primitive type="ring" angle={320} radius={166} duration={60} size={14} reverse />
    </div>
  );
}

/**
 * Travelling color glow inside the sphere — single soft blob that orbits
 * around the centre with continuous color shifts. Replaces the static
 * specular highlight + 3 colored blobs.
 */
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
  radius: number; // in viewBox units (0–200 = half-container)
  duration: number;
  direction: 1 | -1;
  size: number;
  startOffset?: number;
}) {
  // radius is in 400-unit viewBox; convert to % of container
  const radiusPct = (radius / 400) * 100; // half of viewBox = container half
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

