"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import AnimatedSection from "./AnimatedSection";

interface Service {
  title: string;
  slug: string;
  tagline: string;
  accent: string;
  category: string;
  description: string;
  outcomes: string[];
  stack: string[];
  icon: ReactNode;
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
    stack: ["OpenAI", "Anthropic", "LangChain", "Python"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3.5" />
        <path strokeLinecap="round" d="M12 5V2M12 22v-3M5 12H2M22 12h-3M7.5 7.5L5 5M19 19l-2.5-2.5M7.5 16.5L5 19M19 5l-2.5 2.5" />
      </svg>
    ),
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
    stack: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Firebase",
      "REST APIs",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Web Platforms",
    slug: "web-development",
    tagline: "From marketing sites to full-stack products",
    accent: "#006064",
    category: "Build",
    description:
      "Building responsive, scalable websites that deliver performance and reliability..",
    outcomes: [
      "Marketing & content sites with sub-second loads",
      "Full-stack SaaS apps and internal tools",
      "Headless CMS, edge functions, and global CDN",
      "Real-time, multi-tenant, audit-ready by default",
    ],
    stack: ["Next.js", "Node", "TypeScript", "PostgreSQL"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
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
    stack: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "FigJam",
      "Adobe Illustrator",
      "InVision",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l3.5 14.5L13 18l5-5-1.5-7.5L2 2z" />
        <circle cx="11" cy="11" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7 3 3-7 7-3-3z" />
      </svg>
    ),
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
    stack: [
      "Selenium",
      "Cypress",
      "Playwright",
      "Postman",
      "JMeter",
      "TestNG",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
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
      "Engineering, design, PM, data & DevOps roles",
      "Month-to-month flex — scale up or down with runway",
    ],
    stack: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      ".NET",
      "React",
      "Node.js",
      "AWS",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
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
      "PCI-DSS scope reduction and security review",
    ],
    stack: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "Next.js",
      "Node.js",
    ], icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
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
      "Dashboards & A/B testing baked into the stack",
    ],
    stack: [
      "Google Analytics",
      "Google Ads",
      "Meta Ads Manager",
      "Ahrefs",
      "SEMrush",
      "HubSpot",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 01-8 0V7a4 4 0 018 0v10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 4l6 4-6 4V4z" />
        <line x1="11" y1="14" x2="15" y2="14" strokeLinecap="round" />
      </svg>
    ),
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
      "Risk register reviewed every Friday — no drift",
    ],
    stack: [
      "Jira",
      "Trello",
      "Asana",
      "ClickUp",
      "Notion",
      "Microsoft Project",
      "Slack",
    ], icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
];

/* ───────── Tab button (used on both sides) ───────── */
function TabButton({
  service,
  index,
  isActive,
  onSelect,
  align,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  align: "left" | "right";
}) {
  return (
    <button
      onClick={onSelect}
      className={`group relative w-full ${align === "right" ? "text-right" : "text-left"
        } flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-300`}
    >
      {/* Active glassy layer */}
      {isActive && (
        <motion.span
          layoutId="service-active-bg"
          className="absolute inset-0 rounded-xl bg-white shadow-lg shadow-deep-blue/5 border border-deep-blue/[0.06]"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}

      {/* On the right side, render in reverse so icon sits on the right */}
      {align === "right" && (
        <div className="relative flex-1 min-w-0">
          <h3
            className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive
              ? "text-deep-blue"
              : "text-deep-blue/75 group-hover:text-deep-blue"
              }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-deep-blue/55" : "text-deep-blue/40"
              }`}
          >
            {service.tagline}
          </p>
        </div>
      )}

      <span
        className="relative w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
        style={{
          backgroundColor: isActive ? service.accent : `${service.accent}15`,
          color: isActive ? "white" : service.accent,
          boxShadow: isActive
            ? `0 10px 22px -8px ${service.accent}80`
            : "none",
        }}
      >
        {service.icon}
      </span>

      {align === "left" && (
        <div className="relative flex-1 min-w-0">
          <h3
            className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive
              ? "text-deep-blue"
              : "text-deep-blue/75 group-hover:text-deep-blue"
              }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-deep-blue/55" : "text-deep-blue/40"
              }`}
          >
            {service.tagline}
          </p>
        </div>
      )}

      {/* Index marker — sits on the outer edge */}
      <span
        className={`relative font-mono text-[10px] font-semibold tracking-wider transition-colors duration-300 ${isActive ? "text-deep-blue/40" : "text-deep-blue/20"
          }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Split services into two columns (4 left, 5 right) for the side rails
  const leftServices = services.slice(0, 4);
  const rightServices = services.slice(4);
  const active = services[activeIdx];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center py-16 lg:py-20 relative bg-section-services overflow-hidden"
    >
      {/* Subtle decor */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-neon-blue/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-neon-purple/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Header — editorial split */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 lg:mb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Capabilities
              </span>
            </div>
            <div className="w-full">
              <h2 className="h-section text-deep-blue">
                Systems designed for {" "}
                <span className="gradient-text-dark">modern growth.</span>
              </h2>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              From design and development to growth and support — choose a
              single service or combine several into one project. One team,
              start to finish.
            </p>
          </div>
        </div>

        {/* 3-column layout: tabs · center detail · tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:items-stretch">
          {/* LEFT TABS */}
          <div className="lg:col-span-3 lg:order-1 flex flex-col gap-1.5">
            <p className="hidden lg:block text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-1 pl-3.5">
              Build · Design
            </p>
            {leftServices.map((s, i) => (
              <TabButton
                key={s.title}
                service={s}
                index={i}
                isActive={activeIdx === i}
                onSelect={() => setActiveIdx(i)}
                align="left"
              />
            ))}
          </div>

          {/* CENTER VISUAL SHOWCASE */}
          <div className="lg:col-span-6 lg:order-2 order-first lg:px-2 lg:h-full min-h-[360px] flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-deep-blue/15"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${active.accent} 0%, ${active.accent}e6 35%, ${active.accent}99 100%)`,
                }}
              >
                {/* Decor layers */}
                <div className="absolute inset-0 bg-mesh-dark opacity-45" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="noise-overlay" />

                {/* Inner vignette for depth */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 55%, transparent 30%, rgba(0,0,0,0.25) 100%)",
                  }}
                />

                {/* Floating glow orbs */}
                <motion.div
                  className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-white/25 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-white/15 blur-3xl"
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Static constellation dots */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { top: "12%", left: "18%", size: 1.5, op: 0.5 },
                    { top: "22%", left: "82%", size: 2, op: 0.7 },
                    { top: "38%", left: "8%", size: 1, op: 0.4 },
                    { top: "55%", left: "92%", size: 1.5, op: 0.55 },
                    { top: "72%", left: "14%", size: 2, op: 0.6 },
                    { top: "82%", left: "78%", size: 1, op: 0.4 },
                    { top: "30%", left: "52%", size: 1, op: 0.35 },
                    { top: "62%", left: "44%", size: 1, op: 0.3 },
                  ].map((d, i) => (
                    <motion.span
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        top: d.top,
                        left: d.left,
                        width: d.size * 2,
                        height: d.size * 2,
                        opacity: d.op,
                      }}
                      animate={{ opacity: [d.op * 0.4, d.op, d.op * 0.4] }}
                      transition={{
                        duration: 2 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Orbiting rings + scanning arc SVG */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="scan-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="100%" stopColor="white" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>

                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 200px" }}
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="160"
                      stroke="white"
                      strokeOpacity="0.2"
                      strokeWidth="1"
                      strokeDasharray="3 7"
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 200px" }}
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="115"
                      stroke="white"
                      strokeOpacity="0.25"
                      strokeWidth="1"
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 200px" }}
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="195"
                      stroke="white"
                      strokeOpacity="0.12"
                      strokeWidth="1"
                      strokeDasharray="1 5"
                    />
                  </motion.g>

                  {/* Scanning radar arc */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 200px" }}
                  >
                    <path
                      d="M 200 200 L 360 200 A 160 160 0 0 0 285 60 Z"
                      fill="url(#scan-grad)"
                      opacity="0.35"
                    />
                  </motion.g>
                </svg>

                {/* Corner brackets */}
                <span className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/40 rounded-tl" />
                <span className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/40 rounded-tr" />
                <span className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/40 rounded-bl" />
                <span className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/40 rounded-br" />

                {/* Top labels */}
                <div className="absolute top-6 left-7 right-7 flex items-center justify-between text-white/90 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                      <span className="relative rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                      {active.category}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    {String(activeIdx + 1).padStart(2, "0")} /{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Centerpiece: floating icon with orbiting dots */}
                <div className="absolute inset-0 flex items-center justify-center pt-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    {/* Orbital dots */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <span
                        className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        style={{ transform: "translateY(-82px)" }}
                      />
                      <span
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        style={{ transform: "translate(72px, 40px)" }}
                      />
                      <span
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        style={{ transform: "translate(-72px, 40px)" }}
                      />
                    </motion.div>

                    {/* Outer pulse ring */}
                    <motion.div
                      className="absolute -inset-8 rounded-[2rem] border border-white/15"
                      animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Inner glow ring */}
                    <motion.div
                      className="absolute -inset-4 rounded-3xl border border-white/30"
                      animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Icon tile */}
                    <div
                      className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl"
                      style={{
                        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.4)`,
                      }}
                    >
                      <div className="scale-[2.8] lg:scale-[3.2] drop-shadow-lg">
                        {active.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom scrim for legibility */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 100%)",
                  }}
                />

                {/* Bottom title */}
                <div className="absolute bottom-7 left-7 right-7 text-white z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-px w-6 bg-white/60" />
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-semibold">
                      {active.tagline}
                    </p>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight drop-shadow-md">
                    {active.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT TABS */}
          <div className="lg:col-span-3 lg:order-3 flex flex-col gap-1.5">
            <p className="hidden lg:block text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-1 pr-3.5 text-right">
              Grow · Ops
            </p>
            {rightServices.map((s, i) => {
              const realIdx = i + leftServices.length;
              return (
                <TabButton
                  key={s.title}
                  service={s}
                  index={realIdx}
                  isActive={activeIdx === realIdx}
                  onSelect={() => setActiveIdx(realIdx)}
                  align="right"
                />
              );
            })}
          </div>
        </div>

        {/* BOTTOM DETAIL PANEL — description, outcomes, stack, CTA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`detail-${active.title}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="mt-3 lg:mt-4 relative rounded-3xl bg-white border border-deep-blue/[0.07] shadow-2xl shadow-deep-blue/10 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 bottom-0 w-1"
              style={{
                background: `linear-gradient(180deg, ${active.accent} 0%, ${active.accent}66 100%)`,
              }}
            />

            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(${active.accent} 1px, transparent 1px)`,
                backgroundSize: "22px 22px",
              }}
            />

            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none opacity-[0.07] blur-3xl"
              style={{ background: active.accent }}
            />

            <div className="relative grid lg:grid-cols-2 gap-10 p-4 lg:p-6">
              <div>
                <div className="relative mt-3">
                  <span
                    className="absolute -top-3 -left-1 font-serif text-6xl leading-none select-none pointer-events-none"
                    style={{ color: `${active.accent}1f` }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  
                  <p className="relative pl-6 text-deep-blue/80 leading-relaxed text-[15.5px]">
                    {active.description}
                  </p>
                </div>
              </div>

              <div className="lg:border-l lg:border-deep-blue/[0.07] lg:pl-10 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-deep-blue/40 mb-2.5">
                    Tech &amp; tools
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {active.stack.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-full tracking-wide border transition-all duration-200 hover:scale-105"
                        style={{
                          color: active.accent,
                          backgroundColor: `${active.accent}0d`,
                          borderColor: `${active.accent}26`,
                        }}
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: active.accent }}
                        />
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
