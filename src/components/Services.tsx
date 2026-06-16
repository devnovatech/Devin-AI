"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  title: string;
  slug: string;
  tagline: string;
  accent: string;
  category: string;
  description: string;
  outcomes: string[];
  stack: string[];
  demoPreview: ReactNode; // Each service gets its own dynamic demo content
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
    demoPreview: (
      <div className="w-full space-y-5">
        <div className="flex items-center justify-between border-b border-white/20 pb-2">
          <span className="text-xs font-mono text-white/70">REAL-TIME INFERENCE</span>
          <span className="text-xs font-bold text-white/90">v2.4.1</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs">
                <span className="text-white/60">Model confidence</span>
                <span className="text-white font-mono">94.2%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full mt-1 overflow-hidden">
                <motion.div 
                  className="h-full rounded-full" 
                  style={{ backgroundColor: "#1E88E5" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "94.2%" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
              </div>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm">
            <div className="flex justify-between text-[11px] mb-2">
              <span className="text-white/50">Processing</span>
              <span className="text-white/80 font-mono">LLM / GPT-4o</span>
            </div>
            <div className="h-6 w-full flex gap-1">
              {[85, 92, 78, 96, 88, 91, 84].map((val, i) => (
                <motion.div 
                  key={i}
                  className="flex-1 bg-white/20 rounded-sm"
                  initial={{ height: "0%" }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  style={{ alignSelf: "flex-end" }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-[11px] text-white/60 justify-between">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Online</span>
          <span className="font-mono">1,284 req/s</span>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
          </div>
          <span className="text-[10px] font-mono text-white/50">App Preview</span>
        </div>
        <div className="bg-black/30 rounded-2xl p-3 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5m12 0v-5a2 2 0 00-2-2h-2m-4 0H6m12 0h2M4 18h16" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Mobile Dashboard</div>
              <div className="text-[10px] text-white/50">Real-time sync</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="w-3/4 h-full bg-cyan-400/70 rounded-full"></div></div>
            <div className="h-1.5 w-full bg-white/10 rounded-full"><div className="w-1/2 h-full bg-cyan-400/70 rounded-full"></div></div>
            <div className="flex justify-between text-[10px] text-white/50 mt-2">
              <span>📱 iOS 17+</span>
              <span>🤖 Android 14</span>
              <span>⚡ 60 FPS</span>
            </div>
          </div>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-4">
        <div className="flex gap-2 text-[10px] font-mono text-white/60 border-b border-white/10 pb-2">
          <span className="text-emerald-400">● LIVE</span>
          <span>LCP: 0.8s</span>
          <span>CLS: 0.02</span>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-white">Edge deployment</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">CDN</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="bg-white/5 rounded p-1.5"><span className="block font-bold text-white">98</span><span className="text-white/40">ms</span></div>
            <div className="bg-white/5 rounded p-1.5"><span className="block font-bold text-white">99.9%</span><span className="text-white/40">uptime</span></div>
            <div className="bg-white/5 rounded p-1.5"><span className="block font-bold text-white">∞</span><span className="text-white/40">scale</span></div>
          </div>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-4">
        <div className="flex items-center gap-2 text-white/70 text-xs">
          <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">🎨</div>
          <span>Design System v3.0</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["#1565C0", "#42A5F5", "#90CAF9", "#BBDEFB"].map((color, i) => (
            <div key={i} className="h-12 rounded-lg" style={{ backgroundColor: color }}></div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-2 flex gap-2 text-[11px]">
          <span className="px-2 py-1 rounded bg-white/10">WCAG-AA ✓</span>
          <span className="px-2 py-1 rounded bg-white/10">100% components</span>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-4">
        <div className="flex justify-between text-[10px] font-mono">
          <span className="text-emerald-400">● 247 passed</span>
          <span className="text-red-400">○ 0 failed</span>
          <span className="text-yellow-400">◇ 3 skipped</span>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white/70">E2E Coverage</span>
            <span className="text-white font-bold">96%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-400" initial={{ width: "0%" }} animate={{ width: "96%" }} transition={{ duration: 0.6 }} />
          </div>
        </div>
        <div className="text-[10px] text-white/50 flex justify-between">
          <span>⏱️ 12.4s avg</span>
          <span>🔒 OWASP Top 10 ✓</span>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-4">
        <div className="flex gap-2 flex-wrap">
          {["Senior Frontend", "DevOps Lead", "ML Engineer", "QA Architect"].map((role, i) => (
            <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/80">{role}</span>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
            <div className="text-xs">Matched in &lt; 48h</div>
          </div>
          <div className="text-[10px] text-white/50">97% retention rate • Global coverage</div>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-3">
        <div className="flex justify-between text-[11px]">
          <span className="text-white/60">Cart value</span>
          <span className="text-white font-bold">$184.50</span>
        </div>
        <div className="h-10 bg-white/5 rounded-lg flex items-center justify-between px-3">
          <span className="text-xs">🛒 3 items</span>
          <span className="text-emerald-400 text-xs">+12% conv.</span>
        </div>
        <motion.button 
          className="w-full py-2 rounded-lg text-xs font-semibold text-white"
          style={{ backgroundColor: "#0097A7" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Express checkout →
        </motion.button>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-4">
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-white/5 rounded-xl p-2">
            <div className="text-lg font-bold text-white">+47%</div>
            <div className="text-[9px] text-white/50">Organic traffic</div>
          </div>
          <div className="bg-white/5 rounded-xl p-2">
            <div className="text-lg font-bold text-white">3.2x</div>
            <div className="text-[9px] text-white/50">ROAS</div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-white/60">
          <span>📈 CTR: 5.8%</span>
          <span>🎯 Quality score: 9/10</span>
        </div>
      </div>
    )
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
    demoPreview: (
      <div className="w-full space-y-3">
        <div className="flex justify-between text-[10px]">
          <span>Sprint 24 • 8/12 tasks</span>
          <span className="text-emerald-400">On track</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-emerald-400" initial={{ width: "0%" }} animate={{ width: "67%" }} transition={{ duration: 0.5 }} />
        </div>
        <div className="flex gap-2 text-[10px] text-white/50">
          <span>✅ 8 completed</span>
          <span>🔄 4 in progress</span>
        </div>
      </div>
    )
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

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);
  const active = services[activeIdx];

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-end mb-6 lg:mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Capabilities</span>
            </div>
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

          {/* CENTER SLIDER AREA — Dynamic demo content per service */}
          <div className="lg:col-span-6 lg:order-2 order-first lg:px-2 lg:h-full min-h-[340px] sm:min-h-[380px] flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-deep-blue/15"
                style={{ background: `radial-gradient(circle at 30% 20%, ${active.accent} 0%, ${active.accent}e6 35%, ${active.accent}99 100%)` }}
              >
                <div className="absolute inset-0 bg-mesh-dark opacity-45" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="noise-overlay" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 55%, transparent 30%, rgba(0,0,0,0.25) 100%)" }} />

                <div className="absolute top-4 sm:top-6 left-4 sm:left-7 right-4 sm:right-7 flex items-center justify-between text-white/90 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                      <span className="relative rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-semibold">{active.category}</span>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-wider px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    {String(activeIdx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Demo content area — changes per service */}
                <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8 pt-16 sm:pt-20 pb-20 sm:pb-24">
                  <div className="w-full max-w-sm">
                    {active.demoPreview}
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-7 right-4 sm:right-7 text-white z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-px w-4 sm:w-6 bg-white/60" />
                    <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] text-white/80 font-semibold">{active.tagline}</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight drop-shadow-md">{active.title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>
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