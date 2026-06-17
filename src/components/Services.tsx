"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  slug: string;
  tagline: string;
  accent: string;
  category: string;
  description: string;
  outcomes: string[];
  stack: string[];
}

const services: Service[] = [
  {
    title: "AI & ML Engineering",
    slug: "machine-learning-ai",
    tagline: "Production-grade intelligence",
    accent: "#1E88E5",
    category: "Build",
    description:
      "From LLM-powered copilots to vision pipelines — we ship AI systems that hold up in production, not just in demos.",
    outcomes: [
      "Custom GenAI assistants & internal copilots",
      "Recommendation engines & predictive analytics",
      "Document AI, computer vision & OCR pipelines",
      "Evals, monitoring, and MLOps from day one",
    ],
    stack: ["OpenAI", "Anthropic", "LangChain", "Python", "TensorFlow"],
  },
  {
    title: "Mobile Engineering",
    slug: "mobile-application",
    tagline: "Native and cross-platform apps",
    accent: "#0097A7",
    category: "Build",
    description:
      "Creating intuitive, high-performance mobile apps for Android and iOS platforms.",
    outcomes: [
      "iOS & Android in native or Flutter / React Native",
      "Backend, push, real-time sync & deep linking",
      "App Store / Play Store launch & ASO",
      "Long-term maintenance and feature delivery",
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    title: "Web Platforms",
    slug: "web-development",
    tagline: "From marketing sites to full-stack products",
    accent: "#006064",
    category: "Build",
    description:
      "Building responsive, scalable websites that deliver performance and reliability.",
    outcomes: [
      "Marketing & content sites with sub-second loads",
      "Full-stack SaaS apps and internal tools",
      "Headless CMS, edge functions, and global CDN",
      "Real-time, multi-tenant, audit-ready by default",
    ],
    stack: ["Next.js", "Node", "TypeScript", "PostgreSQL"],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Research-led UI/UX that converts",
    accent: "#1565C0",
    category: "Design",
    description:
      "Designing user-focused interfaces that are simple, engaging, and effective.",
    outcomes: [
      "Discovery interviews & usability research",
      "Design systems with tokens, components, docs",
      "High-fidelity prototypes for real validation",
      "WCAG-AA accessibility from the first frame",
    ],
    stack: ["Figma", "Adobe XD", "Sketch", "FigJam"],
  },
  {
    title: "Software Quality Assurance",
    slug: "quality-assurance",
    tagline: "Ship with confidence, not surprises",
    accent: "#039BE5",
    category: "Design",
    description:
      "Ensuring software quality through thorough testing and defect prevention.",
    outcomes: [
      "E2E, integration & visual regression suites",
      "Performance budgets & Core Web Vitals enforcement",
      "Pen-tests and OWASP-aligned security review",
      "CI gates that block bad merges automatically",
    ],
    stack: ["Cypress", "Playwright", "Postman", "JMeter"],
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    tagline: "Senior engineers on demand",
    accent: "#0288D1",
    category: "Grow",
    description:
      "Providing skilled professionals to seamlessly extend and strengthen your team.",
    outcomes: [
      "Senior engineers and tech leads, carefully vetted",
      "Time-zone overlap with US, EU, and APAC teams",
      "Month-to-month flex — scale up or down with runway",
    ],
    stack: ["React", "Node.js", "Python", "AWS", "TypeScript"],
  },
  {
    title: "E-commerce Solutions",
    slug: "E-commerce",
    tagline: "Conversion-tuned storefronts",
    accent: "#0097A7",
    category: "Grow",
    description:
      "Developing secure and optimized online stores that enhance sales and user experience.",
    outcomes: [
      "Headless commerce on Shopify or custom stacks",
      "Checkout optimization & cart-recovery flows",
      "ERP, OMS & inventory sync with audit trails",
    ],
    stack: ["Shopify", "Stripe", "Next.js", "Node.js"],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "Measurable growth, not vanity",
    accent: "#0277BD",
    category: "Grow",
    description:
      "Driving growth through targeted, data-driven digital campaigns across key channels.",
    outcomes: [
      "SEO strategy & technical site audits",
      "Paid acquisition with attribution modelling",
      "Content engines for organic and inbound",
    ],
    stack: ["Google Analytics", "Google Ads", "Ahrefs", "SEMrush"],
  },
  {
    title: "Project Management",
    slug: "project-management",
    tagline: "Agile delivery, executive clarity",
    accent: "#01579B",
    category: "Grow",
    description:
      "Managing projects efficiently with structured planning and agile execution.",
    outcomes: [
      "Discovery sprints, scope shaping, RACI matrices",
      "Two-week cadence with demo and retro built in",
      "Live burndowns and stakeholder dashboards",
    ],
    stack: ["Jira", "Asana", "Notion", "Slack"],
  },
];

function TabButton({ service, index, isActive, onSelect, align }: { service: Service; index: number; isActive: boolean; onSelect: () => void; align: "left" | "right" }) {
  return (
    <button
      onClick={onSelect}
      className={`group relative w-full ${align === "right" ? "lg:text-right" : "lg:text-left"} flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl transition-all duration-300 touch-manipulation`}
    >
      {isActive && (
        <motion.span
          layoutId="service-active-bg"
          className="absolute inset-0 rounded-xl bg-white shadow-lg shadow-deep-blue/5 border border-deep-blue/[0.06]"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      {align === "right" && (
        <div className="relative flex-1 min-w-0 hidden lg:block">
          <h3 className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-deep-blue" : "text-deep-blue/75 group-hover:text-deep-blue"}`}>
            {service.title}
          </h3>
          <p className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-deep-blue/55" : "text-deep-blue/40"}`}>
            {service.tagline}
          </p>
        </div>
      )}
      <span
        className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
        style={{ backgroundColor: isActive ? service.accent : `${service.accent}15`, color: isActive ? "white" : service.accent, boxShadow: isActive ? `0 10px 22px -8px ${service.accent}80` : "none" }}
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" d="M12 5V2M12 22v-3M5 12H2M22 12h-3M7.5 7.5L5 5M19 19l-2.5-2.5" />
        </svg>
      </span>
      {align === "left" && (
        <div className="relative flex-1 min-w-0 hidden lg:block">
          <h3 className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-deep-blue" : "text-deep-blue/75 group-hover:text-deep-blue"}`}>
            {service.title}
          </h3>
          <p className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-deep-blue/55" : "text-deep-blue/40"}`}>
            {service.tagline}
          </p>
        </div>
      )}
      
      {/* Mobile: Show title next to icon */}
      <div className="relative flex-1 min-w-0 lg:hidden">
        <h3 className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-deep-blue" : "text-deep-blue/75"}`}>
          {service.title}
        </h3>
        <p className={`text-[10px] sm:text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-deep-blue/55" : "text-deep-blue/40"}`}>
          {service.tagline}
        </p>
      </div>
      
      <span className={`relative font-mono text-[9px] sm:text-[10px] font-semibold tracking-wider transition-colors duration-300 ${isActive ? "text-deep-blue/40" : "text-deep-blue/20"}`}>
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

// Service-specific mock preview components
// Service-specific mock preview components
function ServiceMock({ service, index }: { service: Service; index: number }) {
  const frame = "relative w-full max-w-[20rem] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] shadow-xl shadow-teal-950/40 backdrop-blur-md";

  // Different mock designs based on service category or index
  const getMockContent = () => {
    switch (service.slug) {
      case "machine-learning-ai":
        return (
          <div className={frame}>
            <div className="relative h-44 p-4">
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-blue-300/30 blur-2xl" />
              <div className="absolute bottom-2 left-6 size-20 rounded-full bg-cyan-300/20 blur-2xl" />
              <div className="relative rounded-xl border border-white/15 bg-white/10 p-3">
                <div className="text-xs text-white/80 font-semibold mb-1">Model: GPT-4o</div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-blue-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-white/60 mt-1">
                  <span>Confidence</span>
                  <span>94.2%</span>
                </div>
              </div>
              <div className="relative mt-3 grid grid-cols-2 gap-2">
                <div className="h-14 rounded-xl border border-white/15 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center text-white/70 text-[10px]">
                  <span className="font-bold text-sm">1.2k</span>
                  <span>req/s</span>
                </div>
                <div className="h-14 rounded-xl border border-white/15 bg-white/[0.07] backdrop-blur-md flex flex-col items-center justify-center text-white/70 text-[10px]">
                  <span className="font-bold text-sm">99.9%</span>
                  <span>uptime</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "mobile-application":
        return (
          <div className="relative flex h-44 w-full max-w-[20rem] items-center justify-center [perspective:900px]">
            <div className="absolute h-28 w-44 -translate-x-16 rounded-xl border border-white/10 bg-white/[0.04] [transform:rotateY(35deg)]" />
            <div className="absolute h-28 w-44 translate-x-16 rounded-xl border border-white/10 bg-white/[0.04] [transform:rotateY(-35deg)]" />
            <div className="relative z-10 w-48 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl shadow-teal-950/50">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-1.5">
                <span className="size-1.5 rounded-full bg-rose-400/80" />
                <span className="size-1.5 rounded-full bg-amber-300/80" />
                <span className="size-1.5 rounded-full bg-emerald-300/80" />
                <span className="text-[8px] text-white/40 ml-auto">iOS 17+</span>
              </div>
              <div className="space-y-1.5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/80 font-semibold">Dashboard</span>
                  <span className="text-[8px] text-white/40">● Live</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="h-8 rounded bg-white/10 flex items-center justify-center text-white/60 text-[8px]">📊 12k</div>
                  <div className="h-8 rounded bg-white/10 flex items-center justify-center text-white/60 text-[8px]">⚡ 60fps</div>
                </div>
                <div className="h-6 rounded bg-white/10 flex items-center justify-center text-white/40 text-[8px]">Real-time sync</div>
              </div>
            </div>
          </div>
        );

      case "web-development":
        return (
          <div className={frame}>
            <div className="relative h-44">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/40 via-emerald-300/30 to-cyan-400/40 blur-xl" />
              <div className="relative flex h-full flex-col items-center justify-center gap-2 p-5">
                <div className="flex items-center gap-2">
                  <span className="text-white/90 font-bold text-lg">⚡</span>
                  <span className="text-white/90 font-mono text-xs">0.8s LCP</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/20 text-white/80">Next.js</span>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/20 text-white/80">Edge</span>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-[10px]">
                  <span>99.9% uptime</span>
                  <span>∞ scale</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "ui-ux-design":
        return (
          <div className="relative h-44 w-full max-w-[20rem] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-xl shadow-black/60">
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/80">Design System v3</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/60">WCAG-AA</span>
              </div>
              <div className="flex gap-2">
                {["#1565C0", "#42A5F5", "#90CAF9", "#BBDEFB"].map((color) => (
                  <div key={color} className="h-8 w-8 rounded-lg" style={{ backgroundColor: color }} />
                ))}
              </div>
              <div className="flex gap-2 text-[10px] text-white/60">
                <span>✓ 100% components</span>
                <span>✓ Prototypes</span>
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded-lg border border-white/10 bg-white/[0.04]" />
                <div className="h-8 flex-1 rounded-lg border border-purple-300/30 bg-purple-300/10 flex items-center justify-center text-white/60 text-[10px]">Figma</div>
              </div>
            </div>
          </div>
        );

      case "quality-assurance":
        return (
          <div className={frame}>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/80">Test Suite</span>
                <span className="text-[10px] text-emerald-400">● 247 passed</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["96%", "E2E", "0 failed"].map((v) => (
                  <div key={v} className="rounded-lg border border-white/10 bg-white/[0.06] p-2 text-center">
                    <div className="text-[11px] font-bold text-white">{v}</div>
                  </div>
                ))}
              </div>
              <div className="flex h-12 items-end gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-2">
                {[85, 92, 78, 96, 88, 91, 84].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${i % 2 === 0 ? "bg-emerald-300" : "bg-cyan-300/60"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case "staff-augmentation":
        return (
          <div className={frame}>
            <div className="grid h-44 grid-cols-3 grid-rows-3 gap-2 p-3">
              <div className="col-span-2 row-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-teal-400/30 to-emerald-300/20 flex flex-col items-center justify-center text-white/70">
                <span className="text-lg font-bold">97%</span>
                <span className="text-[8px]">retention rate</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] flex flex-col items-center justify-center text-white/70">
                <span className="text-sm font-bold">48h</span>
                <span className="text-[8px]">match</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] flex flex-col items-center justify-center text-white/70">
                <span className="text-sm font-bold">🌍</span>
                <span className="text-[8px]">global</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-cyan-300/15 flex flex-col items-center justify-center text-white/70">
                <span className="text-sm font-bold">US</span>
                <span className="text-[8px]">timezone</span>
              </div>
              <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.06] flex items-center justify-center text-white/70 text-[10px]">
                Senior engineers
              </div>
            </div>
          </div>
        );

      case "E-commerce":
        return (
          <div className="relative flex h-44 w-full max-w-[20rem] items-center justify-center [perspective:1000px]">
            <div className="w-52 overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl shadow-teal-950/50 [transform:rotateX(12deg)_rotateY(-18deg)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-1.5">
                <span className="size-1.5 rounded-full bg-white/40" />
                <span className="size-1.5 rounded-full bg-white/30" />
                <span className="text-[8px] text-white/40 ml-auto">Storefront</span>
              </div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/80">Cart</span>
                  <span className="text-xs font-bold text-white">$184.50</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded-md bg-white/15 flex items-center justify-center text-white/60 text-[8px]">🛒 3</div>
                  <div className="h-8 rounded-md bg-white/10 flex items-center justify-center text-white/60 text-[8px]">+12%</div>
                  <div className="h-8 rounded-md bg-white/15 flex items-center justify-center text-white/60 text-[8px]">✓</div>
                </div>
                <div className="h-7 rounded bg-emerald-400/20 flex items-center justify-center text-emerald-300 text-[8px] font-semibold">
                  Express checkout →
                </div>
              </div>
            </div>
          </div>
        );

      case "digital-marketing":
        return (
          <div className="relative h-44 w-full max-w-[20rem] overflow-hidden rounded-2xl border border-white/20 shadow-xl shadow-teal-950/40">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/40 via-teal-300/20 to-emerald-300/40" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)]" />
            <div className="relative space-y-3 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/90">Campaign ROI</span>
                <span className="text-[10px] text-emerald-300">● Live</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-md p-2 text-center">
                  <div className="text-lg font-bold text-white">+47%</div>
                  <div className="text-[8px] text-white/60">organic traffic</div>
                </div>
                <div className="rounded-lg border border-white/30 bg-white/10 backdrop-blur-md p-2 text-center">
                  <div className="text-lg font-bold text-white">3.2x</div>
                  <div className="text-[8px] text-white/60">ROAS</div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-white/60">
                <span>📈 CTR: 5.8%</span>
                <span>🎯 Quality: 9/10</span>
              </div>
            </div>
          </div>
        );

      case "project-management":
        return (
          <div className="relative flex h-44 w-full max-w-[20rem] items-center justify-center">
            <div className="absolute h-28 w-44 -translate-y-4 translate-x-6 rounded-xl border border-white/10 bg-white/[0.04]" />
            <div className="absolute h-28 w-44 -translate-y-2 translate-x-3 rounded-xl border border-white/10 bg-white/[0.07]" />
            <div className="relative h-28 w-44 overflow-hidden rounded-xl border border-white/20 bg-white/12 shadow-2xl shadow-teal-950/50">
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-white/80">Sprint 24</span>
                  <span className="text-[8px] text-emerald-400">On track</span>
                </div>
                <div className="flex justify-between text-[10px] text-white/60">
                  <span>8/12 tasks</span>
                  <span>67%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[67%] bg-emerald-400 rounded-full" />
                </div>
                <div className="flex gap-2 text-[8px] text-white/50">
                  <span>✅ 8 done</span>
                  <span>🔄 4 active</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={frame}>
            <div className="flex h-44 items-center justify-center">
              <div className="text-center text-white/60">
                <div className="text-4xl mb-2">✦</div>
                <div className="text-xs">{service.title}</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return getMockContent();
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);
  const active = services[activeIdx];
  const count = services.length;

  const go = (dir: number) => setActiveIdx((prev) => (prev + dir + count) % count);

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-4 sm:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Capabilities</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 lg:items-stretch">
          {/* Mobile: Horizontal scrollable tabs */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-1 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveIdx(i)}
                className={`snap-start shrink-0 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap touch-manipulation ${
                  activeIdx === i 
                    ? "bg-white shadow-lg shadow-deep-blue/10 border border-deep-blue/[0.06]" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                style={{ 
                  borderColor: activeIdx === i ? s.accent : "transparent",
                  borderWidth: activeIdx === i ? "2px" : "1px"
                }}
              >
                <span className={`text-xs font-semibold transition-colors duration-300 ${
                  activeIdx === i ? "text-deep-blue" : "text-deep-blue/60"
                }`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 lg:order-1 hidden lg:flex flex-col gap-1.5">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-1 pl-3.5">Build · Design</p>
            {leftServices.map((s, i) => (
              <TabButton key={s.title} service={s} index={i} isActive={activeIdx === i} onSelect={() => setActiveIdx(i)} align="left" />
            ))}
          </div>

          {/* CENTER SLIDER AREA — Redesigned like FeatureCard */}
          <div className="lg:col-span-6 lg:order-2 order-first lg:px-2 lg:h-full min-h-[340px] sm:min-h-[380px] flex">
            <div className="relative w-full overflow-hidden rounded-[28px] shadow-2xl shadow-deep-blue/15">
              <div 
                className="relative overflow-hidden rounded-[27px]"
                style={{ 
                  background: `radial-gradient(circle at 30% 20%, ${active.accent} 0%, ${active.accent}e6 35%, ${active.accent}99 100%)` 
                }}
              >
                {/* background accents */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* subtle noise texture */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative flex min-h-[400px] flex-col p-6 sm:p-8">
                  {/* header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/70" />
                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                        {active.category}
                      </span>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tabular-nums text-white/80 backdrop-blur-sm">
                      {String(activeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                  </div>

                  {/* slider viewport */}
                  <div className="relative flex flex-1 items-center py-6">
                    {/* prev */}
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous service"
                      className="absolute left-0 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
                    >
                      <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>

                    {/* track */}
                    <div className="w-full overflow-hidden px-10">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${activeIdx * 100}%)` }}
                      >
                        {services.map((service, i) => (
                          <div key={service.title} className="flex w-full shrink-0 flex-col items-center gap-4">
                            <div
                              className={`flex w-full justify-center transition-all duration-500 ${
                                i === activeIdx ? "scale-100 opacity-100" : "scale-90 opacity-40"
                              }`}
                            >
                              <ServiceMock service={service} index={i} />
                            </div>
                            <p className="max-w-[18rem] text-balance text-center text-sm text-white/70">
                              {service.tagline}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* next */}
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next service"
                      className="absolute right-0 z-10 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition hover:bg-white/15 hover:text-white"
                    >
                      <ChevronRight className="size-5" aria-hidden="true" />
                    </button>
                  </div>

                  {/* footer */}
                  <div className="space-y-4">
                    <h2 className="text-pretty text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {active.title}
                    </h2>

                    {/* progress dots */}
                    <div className="flex items-center gap-2">
                      {services.map((service, i) => (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setActiveIdx(i)}
                          aria-label={`Go to ${service.title}`}
                          aria-current={i === activeIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeIdx ? "w-8 bg-white" : "w-1.5 bg-white/25 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 lg:order-3 hidden lg:flex flex-col gap-1.5">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-1 pr-3.5 text-right">Grow · Ops</p>
            {rightServices.map((s, i) => {
              const realIdx = i + leftServices.length;
              return <TabButton key={s.title} service={s} index={realIdx} isActive={activeIdx === realIdx} onSelect={() => setActiveIdx(realIdx)} align="right" />;
            })}
          </div>
        </div>

        {/* Bottom detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`detail-${active.title}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mt-3 lg:mt-4 relative rounded-3xl bg-white border border-deep-blue/[0.07] shadow-2xl shadow-deep-blue/10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${active.accent} 0%, ${active.accent}66 100%)` }} />
            <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-5 lg:p-6">
              <div>
                <span className="absolute -top-3 -left-1 font-serif text-5xl sm:text-6xl leading-none select-none pointer-events-none" style={{ color: `${active.accent}1f` }} aria-hidden>&ldquo;</span>
                <p className="relative pl-5 sm:pl-6 text-deep-blue/80 leading-relaxed text-[14px] sm:text-[15.5px]">{active.description}</p>
              </div>
              <div className="lg:border-l lg:border-deep-blue/[0.07] lg:pl-10">
                <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-2.5">Tech & tools</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {active.stack.map((s, i) => (
                    <motion.span key={s} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                      className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold rounded-full tracking-wide border transition-all duration-200 hover:scale-105"
                      style={{ color: active.accent, backgroundColor: `${active.accent}0d`, borderColor: `${active.accent}26` }}>
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: active.accent }} />{s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom scrollbar hide for mobile */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </section>
  );
}