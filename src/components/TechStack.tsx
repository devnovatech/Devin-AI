"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Tech = { name: string; abbr: string };
type Category = { id: string; label: string; tools: Tech[] };

const STACK: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    tools: [
      { name: "Next.js", abbr: "N" },
      { name: "React", abbr: "R" },
      { name: "TypeScript", abbr: "TS" },
      { name: "Tailwind CSS", abbr: "Tw" },
      { name: "Vue", abbr: "V" },
      { name: "Svelte", abbr: "Sv" },
      { name: "Astro", abbr: "As" },
      { name: "Remix", abbr: "Rx" },
      { name: "Vite", abbr: "Vt" },
      { name: "Storybook", abbr: "Sb" },
      { name: "Tanstack Query", abbr: "Tq" },
      { name: "tRPC", abbr: "tR" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tools: [
      { name: "Node.js", abbr: "N" },
      { name: "Python", abbr: "Py" },
      { name: "Go", abbr: "Go" },
      { name: "Rust", abbr: "Ru" },
      { name: "Java", abbr: "Ja" },
      { name: "Kotlin", abbr: "Kt" },
      { name: "Ruby on Rails", abbr: "Rb" },
      { name: ".NET", abbr: ".N" },
      { name: "Elixir", abbr: "Ex" },
      { name: "GraphQL", abbr: "Gq" },
      { name: "REST APIs", abbr: "API" },
      { name: "FastAPI", abbr: "Fa" },
      { name: "Express", abbr: "Ex" },
      { name: "NestJS", abbr: "Nj" },
      { name: "Django", abbr: "Dj" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    tools: [
      { name: "PostgreSQL", abbr: "Pg" },
      { name: "MySQL", abbr: "My" },
      { name: "MongoDB", abbr: "Mg" },
      { name: "Redis", abbr: "Rd" },
      { name: "DynamoDB", abbr: "Dy" },
      { name: "Cassandra", abbr: "Cs" },
      { name: "Elasticsearch", abbr: "ES" },
      { name: "ClickHouse", abbr: "Ch" },
      { name: "Snowflake", abbr: "Sn" },
      { name: "BigQuery", abbr: "BQ" },
      { name: "Supabase", abbr: "Sp" },
      { name: "Firebase", abbr: "Fb" },
      { name: "Neo4j", abbr: "Ne" },
      { name: "DuckDB", abbr: "Dk" },
      { name: "SQLite", abbr: "Sl" },
      { name: "Cosmos DB", abbr: "Co" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    tools: [
      { name: "AWS", abbr: "aws" },
      { name: "GCP", abbr: "GCP" },
      { name: "Azure", abbr: "Az" },
      { name: "Vercel", abbr: "▲" },
      { name: "Cloudflare", abbr: "Cf" },
      { name: "Kubernetes", abbr: "K8s" },
      { name: "Docker", abbr: "Dk" },
      { name: "Terraform", abbr: "TF" },
      { name: "Pulumi", abbr: "Pu" },
      { name: "GitHub Actions", abbr: "GH" },
      { name: "GitLab CI", abbr: "GL" },
      { name: "Argo CD", abbr: "Ar" },
      { name: "Nginx", abbr: "Nx" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    tools: [
      { name: "Anthropic", abbr: "An" },
      { name: "OpenAI", abbr: "Ai" },
      { name: "Llama", abbr: "Ll" },
      { name: "LangGraph", abbr: "LG" },
      { name: "LangChain", abbr: "LC" },
      { name: "LlamaIndex", abbr: "Li" },
      { name: "Pinecone", abbr: "Pi" },
      { name: "Weaviate", abbr: "We" },
      { name: "Chroma", abbr: "Cr" },
      { name: "PyTorch", abbr: "Pt" },
      { name: "TensorFlow", abbr: "TF" },
      { name: "Hugging Face", abbr: "🤗" },
      { name: "Modal", abbr: "Mo" },
      { name: "Replicate", abbr: "Rp" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    tools: [
      { name: "Swift", abbr: "Sw" },
      { name: "Kotlin", abbr: "Kt" },
      { name: "React Native", abbr: "RN" },
      { name: "Expo", abbr: "Ex" },
      { name: "Flutter", abbr: "Fl" },
      { name: "Ionic", abbr: "Io" },
      { name: "Capacitor", abbr: "Cp" },
    ],
  },
  {
    id: "design",
    label: "Design",
    tools: [
      { name: "Figma", abbr: "F" },
      { name: "Framer", abbr: "Fr" },
      { name: "Rive", abbr: "Rv" },
      { name: "After Effects", abbr: "Ae" },
      { name: "Lottie", abbr: "Lo" },
      { name: "Principle", abbr: "Pr" },
      { name: "Spline", abbr: "Sp" },
    ],
  },
  {
    id: "observability",
    label: "Observability",
    tools: [
      { name: "Datadog", abbr: "DD" },
      { name: "Sentry", abbr: "Se" },
      { name: "Grafana", abbr: "Gf" },
      { name: "OpenTelemetry", abbr: "OT" },
      { name: "Prometheus", abbr: "Pm" },
      { name: "New Relic", abbr: "NR" },
      { name: "PostHog", abbr: "Ph" },
      { name: "Mixpanel", abbr: "Mx" },
      { name: "Amplitude", abbr: "Am" },
    ],
  },
];

const TOTAL = STACK.reduce((acc, c) => acc + c.tools.length, 0);

export function TechStack() {
  const [active, setActive] = useState("frontend");
  const cat = STACK.find((c) => c.id === active) ?? STACK[0];

  return (
    <section id="tech-stack" className="flex items-center py-10 lg:py-20 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dotted-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Tech Stack</span>
            </div>
            <h2 className="h-section text-deep-blue">
              Stack agnostic. <span className="gradient-text-dark">Whatever fits the problem.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Across our {STACK.length} categories we work with {TOTAL}+ tools and
              adopt new ones constantly. Below: the ones we reach for most. Don't
              see yours? We've probably shipped with it too.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {STACK.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-deep-blue/90 bg-deep-blue/90 text-white"
                    : "border-deep-blue/20 bg-white text-deep-blue hover:border-deep-blue/40"
                }`}
              >
                {c.label}
                <span
                  className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                    isActive ? "bg-white/15 text-white/80" : "bg-deep-blue/10 text-deep-blue/50"
                  }`}
                >
                  {c.tools.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tool chip cloud — fixed height container */}
        <div className="mt-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {cat.tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-deep-blue/20 bg-white px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_8px_20px_-12px_rgba(36,134,197,0.5)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-deep-blue/90 text-[10px] font-bold text-white transition-colors group-hover:bg-brand-500">
                    {t.abbr}
                  </span>
                  <span className="text-sm font-medium tracking-tight text-deep-blue/90">
                    {t.name}
                  </span>
                </motion.div>
              ))}

              {/* "+ more" trailing chip */}
              <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-deep-blue/30 bg-transparent px-3 py-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-deep-blue/50">
                  + open to more
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Helper line */}
        <p className="mt-6 text-xs text-deep-blue/50">
          We're not married to any single tool — we pick what fits the problem,
          adopt yours when needed, and avoid hype-driven choices that cost you
          three years from now.
        </p>
      </div>
    </section>
  );
}