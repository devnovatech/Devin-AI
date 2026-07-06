/**
 * Small "satellite-style" tech orbs for the hero artwork.
 * Same visual DNA as the orbiting indigo/orange dots: tiny gradient sphere
 * with a glowing colour-matched shadow.
 *
 * Each carries a recognisable brand glyph rendered as a single-colour silhouette
 * (white) on the brand-tinted orb. No backgrounds on the glyph itself — just the mark.
 */

import React from "react";

type OrbProps = {
  size?: number;
  color: string;
  glyph?: React.ReactNode;
};

function Orb({ size = 26, color, glyph }: OrbProps) {
  const glyphSize = Math.round(size * 0.78);
  return (
    <div
      className="grid place-items-center rounded-full"
      style={{
        width: size,
        height: size,
        background: color,
        boxShadow: `0 0 ${size * 1.3}px ${size * 0.25}px ${color}66`,
        willChange: "transform",
      }}
    >
      {glyph && (
        <div
          style={{
            width: glyphSize,
            height: glyphSize,
            color: "rgba(255,255,255,0.98)",
            display: "grid",
            placeItems: "center",
          }}
        >
          {glyph}
        </div>
      )}
    </div>
  );
}

function darken(hex: string) {
  if (!hex.startsWith("#") || hex.length !== 7) return hex;
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 70);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 70);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 70);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

/* ====== Real brand-mark glyphs (white silhouette, no bg) ====== */

// React — atom symbol
const ReactGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="currentColor" strokeWidth="1.2" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="3.6" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
  </svg>
);

// Next.js — half-disc with an N stroke
const NextGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path
      d="M8 7 V17 M8 7 L16 17 M16 7 V14"
      stroke="#1f1f2e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Node.js — hexagon outline
const NodeGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <path
      d="M12 1.5 L21.5 7 V17 L12 22.5 L2.5 17 V7 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M14 17 V11 M14 11 L10 14 M10 14 V11"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// TypeScript — TS wordmark
const TsGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <text
      x="12"
      y="17.5"
      textAnchor="middle"
      fontFamily="ui-sans-serif, system-ui"
      fontWeight="900"
      fontSize="13"
    >
      TS
    </text>
  </svg>
);

// Python — two interlocking serpents
const PythonGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <path
      d="M9 3 H14 Q16 3 16 5 V9 Q16 11 14 11 H10 Q8 11 8 13 V17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M15 21 H10 Q8 21 8 19 V15 Q8 13 10 13 H14 Q16 13 16 11 V7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="10.5" cy="6" r="0.8" fill="currentColor" />
    <circle cx="13.5" cy="18" r="0.8" fill="currentColor" />
  </svg>
);

// OpenAI — knot (six-fold rotation)
const OpenAIGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.5 L17.5 7.5 V12.5" />
      <path d="M17.5 12.5 L12 15.5 L6.5 12.5" />
      <path d="M6.5 12.5 V7.5 L12 4.5" />
      <path d="M12 19.5 L17.5 16.5 V11.5" />
      <path d="M6.5 11.5 V16.5 L12 19.5" />
    </g>
  </svg>
);

// Anthropic — three-stroke asterisk mark
const AnthropicGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 3 L9 13 H11 L12 9.5 L13 13 H15 Z" />
    <path d="M5 21 L9.5 9 H11 L7 21 Z" />
    <path d="M19 21 L14.5 9 H13 L17 21 Z" />
  </svg>
);

// Postgres — elephant silhouette
const PostgresGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 4 C 8 4 6 6 6 9 L 6 14 C 6 17 8 19 11 19 L 13 19 C 16 19 18 17 18 14 L 18 11 C 18 13 19 14 20 14 L 21 14 L 20 12 L 18 12 L 18 9 C 18 6 16 4 12 4 Z M 9 9 A 0.8 0.8 0 0 1 9 9.001 Z M 14 9 A 0.8 0.8 0 0 1 14 9.001 Z M 12 12 L 12 17" />
    <circle cx="9.5" cy="9" r="0.9" fill="#336791" />
    <circle cx="14.5" cy="9" r="0.9" fill="#336791" />
  </svg>
);

// MongoDB — leaf
const MongoGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 2 C 9 6 6 11 8 16 C 9 19 11 21 12 22 L 12 2 Z" opacity="0.6" />
    <path d="M12 2 C 15 6 18 11 16 16 C 15 19 13 21 12 22 L 12 2 Z" />
    <path d="M12 22 L 12 19" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// AWS — wordmark + smile
const AwsGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <text
      x="12"
      y="13"
      textAnchor="middle"
      fontFamily="ui-sans-serif, system-ui"
      fontWeight="800"
      fontSize="6.5"
    >
      aws
    </text>
    <path
      d="M5 17 Q12 20 19 17"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
    <path d="M16 16 L19 17 L18 19" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Vercel — triangle
const VercelGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M12 4 L22 20 H2 Z" />
  </svg>
);

// Docker — containers + whale curve
const DockerGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <rect x="4" y="11" width="3" height="3" rx="0.4" />
    <rect x="8" y="11" width="3" height="3" rx="0.4" />
    <rect x="12" y="11" width="3" height="3" rx="0.4" />
    <rect x="8" y="7" width="3" height="3" rx="0.4" />
    <rect x="12" y="7" width="3" height="3" rx="0.4" />
    <path
      d="M16 13 Q19 12 21 14 L21 16 Q21 18 19 18 H6 Q3 18 3 15"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Kubernetes — heptagon helm
const KubernetesGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <path
      d="M12 2 L20 6 V14 L12 22 L4 14 V6 Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M12 7 L17 11 L15 17 H9 L7 11 Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <circle cx="12" cy="11" r="1.2" fill="currentColor" />
  </svg>
);

// Figma — five circles
const FigmaGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <circle cx="9" cy="5" r="3" />
    <circle cx="15" cy="5" r="3" opacity="0.78" />
    <circle cx="9" cy="11" r="3" opacity="0.6" />
    <circle cx="15" cy="11" r="3" opacity="0.78" />
    <circle cx="9" cy="17" r="3" opacity="0.6" />
  </svg>
);

// GraphQL — hexagon with internal cross
const GraphQLGlyph = (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <g stroke="currentColor" strokeWidth="1.2" fill="none">
      <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="7.5" x2="20" y2="16.5" />
      <line x1="20" y1="7.5" x2="4" y2="16.5" />
    </g>
    <g fill="currentColor">
      <circle cx="12" cy="3" r="1.6" />
      <circle cx="20" cy="7.5" r="1.6" />
      <circle cx="20" cy="16.5" r="1.6" />
      <circle cx="12" cy="21" r="1.6" />
      <circle cx="4" cy="16.5" r="1.6" />
      <circle cx="4" cy="7.5" r="1.6" />
    </g>
  </svg>
);

// Tailwind — wave shape
const TailwindGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <path d="M8 8 Q12 4 16 8 Q19 11 22 9 Q19 15 16 13 Q12 9 8 13 Q5 16 2 14 Q5 8 8 8 Z" />
    <path d="M8 16 Q12 12 16 16 Q19 19 22 17 Q19 23 16 21 Q12 17 8 21 Q5 24 2 22 Q5 16 8 16 Z" opacity="0.7" />
  </svg>
);

// Redis — cube stack
const RedisGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
    <ellipse cx="12" cy="6" rx="8" ry="2.5" />
    <path d="M4 6 V10 Q4 12.5 12 12.5 Q20 12.5 20 10 V6" opacity="0.7" />
    <path d="M4 11 V15 Q4 17.5 12 17.5 Q20 17.5 20 15 V11" opacity="0.5" />
  </svg>
);

// Exports
export const ReactLogo = (p: { size?: number }) => <Orb {...p} color="#61DAFB" glyph={ReactGlyph} />;
export const NextLogo = (p: { size?: number }) => <Orb {...p} color="#1f1f2e" glyph={NextGlyph} />;
export const NodeLogo = (p: { size?: number }) => <Orb {...p} color="#5FA04E" glyph={NodeGlyph} />;
export const TypescriptLogo = (p: { size?: number }) => <Orb {...p} color="#3178C6" glyph={TsGlyph} />;
export const TailwindLogo = (p: { size?: number }) => <Orb {...p} color="#06B6D4" glyph={TailwindGlyph} />;
export const PythonLogo = (p: { size?: number }) => <Orb {...p} color="#3776AB" glyph={PythonGlyph} />;
export const OpenAILogo = (p: { size?: number }) => <Orb {...p} color="#10A37F" glyph={OpenAIGlyph} />;
export const AnthropicLogo = (p: { size?: number }) => <Orb {...p} color="#D97757" glyph={AnthropicGlyph} />;
export const PostgresLogo = (p: { size?: number }) => <Orb {...p} color="#336791" glyph={PostgresGlyph} />;
export const MongoLogo = (p: { size?: number }) => <Orb {...p} color="#00ED64" glyph={MongoGlyph} />;
export const RedisLogo = (p: { size?: number }) => <Orb {...p} color="#DC382D" glyph={RedisGlyph} />;
export const AWSLogo = (p: { size?: number }) => <Orb {...p} color="#FF9900" glyph={AwsGlyph} />;
export const VercelLogo = (p: { size?: number }) => <Orb {...p} color="#1f1f2e" glyph={VercelGlyph} />;
export const DockerLogo = (p: { size?: number }) => <Orb {...p} color="#0DB7ED" glyph={DockerGlyph} />;
export const KubernetesLogo = (p: { size?: number }) => <Orb {...p} color="#326CE5" glyph={KubernetesGlyph} />;
export const FigmaLogo = (p: { size?: number }) => <Orb {...p} color="#A259FF" glyph={FigmaGlyph} />;
export const GraphQLLogo = (p: { size?: number }) => <Orb {...p} color="#E10098" glyph={GraphQLGlyph} />;
