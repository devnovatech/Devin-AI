"use client";

import { useState, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Smartphone,
  Globe,
  Palette,
  Shield,
  Users,
  ShoppingBag,
  Megaphone,
  ClipboardList,
  Code2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  slug: string;
  tagline: string;
  accent: string;
  category: string;
  description: string;
  stack: string[];
  icon: ReactNode;
  phases: {
    name: string;
    description: string;
  }[];
}
declare global {
  interface Window {
    autoRollTimeout?: NodeJS.Timeout;
  }
}

const services: Service[] = [
  {
    title: "AI & ML Engineering",
    slug: "machine-learning-ai",
    tagline: "Production-grade intelligence",
    accent: "#1E88E5",
    category: "Build",
    description:
      "End-to-end AI and ML development from data engineering and model building to deployment and optimization for production systems.",

    stack: ["OpenAI APIs", "TensorFlow", "PyTorch", "Python"],
    icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Discover", description: "AI strategy and data assessment" },
      { name: "Prototype", description: "Model selection and validation" },
      { name: "Train", description: "Model training and optimization" },
      { name: "Deploy", description: "Integration, monitoring, and improvement" },
    ]
  },
  {
    title: "Mobile Engineering",
    slug: "mobile-application",
    tagline: "Native and cross-platform apps",
    accent: "#0097A7",
    category: "Build",
    description:
      "Creating intuitive, high-performance mobile apps for Android and iOS platforms.",

    stack: [
      "Flutter", "React Native", "Swift", "Kotlin"
    ],
    icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Discover", description: "Product goals and platform strategy" },
      { name: "Design", description: "UX, UI, and prototyping" },
      { name: "Build", description: "Development, integration, and testing" },
      { name: "Launch", description: "Release, monitoring, and updates" },
    ]
  },
  {
    title: "Web Platforms",
    slug: "web-development",
    tagline: "From marketing sites to full-stack products",
    accent: "#006064",
    category: "Build",
    description:
      "Building responsive, scalable websites that deliver performance and reliability.",
    stack: ["React", "Next.js", "Node.js", "Express"],
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Discover", description: "Requirements, goals, and technical planning" },
      { name: "Design", description: "Architecture, UX, wireframes, and workflows" },
      { name: "Build", description: "Development, integrations, testing, and security" },
      { name: "Launch", description: "Deployment, optimization, and scaling" },
    ]
  },
  {
    title: "E-commerce Solutions",
    slug: "E-commerce",
    tagline: "Conversion-tuned storefronts",
    accent: "#0097A7",
    category: "Build",
    description:
      "Developing secure and optimized online stores that enhance sales and user experience.",

    stack: ["Shopify", "WooCommerce", "Magento", "Stripe"
    ],
    icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
  phases: [
  {name: "Catalog", description: "Define products and categories",},
  {name: "Cart", description: "Build cart and checkout flow",},
  {name: "Pay", description: "Integrate payments and processing",},
  {name: "Convert", description: "Launch, optimize, and scale",},
]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Research-led UI/UX that converts",
    accent: "#1565C0",
    category: "Design",
    description:
      "Designing user-focused interfaces that are simple, engaging, and effective.",
    stack: [
      "Figma", "Adobe XD", "Sketch", "FigJam"
    ],
    icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Research", description: "User insights, goals, and requirements" },
      { name: "Structure", description: "User flows, wireframes, and prototypes" },
      { name: "Design", description: "Interfaces, design systems, and testing" },
      { name: "Optimize", description: "Implementation support and improvements" },
    ]
  },
  {
    title: "Software Quality Assurance",
    slug: "quality-assurance",
    tagline: "Ship with confidence, not surprises",
    accent: "#039BE5",
    category: "OPS",
    description:
      "Ensuring software quality through thorough testing and defect prevention.",
    stack: [
      "Selenium", "Cypress", "Playwright", "Postman"
    ],
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Plan", description: "Testing strategy and setup" },
      { name: "Test", description: "Functional, performance, and security testing" },
      { name: "Validate", description: "Issue resolution and release checks" },
      { name: "Improve", description: "Monitoring and quality enhancements" },
    ]
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    tagline: "Senior engineers on demand",
    accent: "#0288D1",
    category: "OPS",
    description:
      "Providing skilled professionals to seamlessly extend and strengthen your team.",
    stack: [
      "Python", "Java", "React", "Node.js"
    ],
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Plan", description: "Requirements and team strategy" },
      { name: "Select", description: "Talent sourcing and onboarding" },
      { name: "Integrate", description: "Collaboration and project delivery" },
      { name: "Scale", description: "Support, reviews, and expansion" },
    ]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "Measurable growth, not vanity",
    accent: "#0277BD",
    category: "Grow",
    description:
      "Driving growth through targeted, data-driven digital campaigns across key channels.",

    stack: ["Google Ads", "Meta Ads Manager", "Ahrefs", "HubSpot"
    ], icon: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Audit", description: "Market research and growth opportunities" },
      { name: "Strategy", description: "Channels, messaging, and planning" },
      { name: "Execute", description: "Campaigns, testing, and optimization" },
      { name: "Scale", description: "Reporting, insights, and growth" },
    ]
  },
  {
    title: "Project Management",
    slug: "project-management",
    tagline: "Agile delivery, executive clarity",
    accent: "#01579B",
    category: "OPS",
    description:
      "Managing projects efficiently with structured planning and agile execution.",
    stack: [
      "Jira", "Trello", "Asana", "ClickUp"
    ],
    icon: <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />,
    phases: [
      { name: "Assess", description: "Process review and planning" },
      { name: "Structure", description: "Frameworks, governance, and workflows" },
      { name: "Execute", description: "Delivery, reporting, and optimization" },
      { name: "Improve", description: "Monitoring and continuous refinement" },
    ]
  },
];

function TabButton({
  service,
  index,
  isActive,
  onSelect,
  align
}: {
  service: Service;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  align: "left" | "right"
}) {
  return (
    <button
      onClick={onSelect}
      onMouseEnter={onSelect}
      className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border p-3 text-left transition-all ${isActive
        ? "border-[#0a1128] bg-[#0a1128] text-white"
        : "border-ink-200 bg-white hover:border-[#0a1128] hover:bg-[#0a1128] hover:text-white"
        }`}
    >
      {/* Gradient line */}
      <span
        className={`absolute top-0 left-0 bottom-0 w-1 rounded-r-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        style={{
          background: `linear-gradient(180deg, ${service.accent} 0%, ${service.accent}90 100%)`,
        }}
      />

      {/* Icon - Always on the left */}
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center bg-[#F2F2F2] rounded-lg transition-colors ${isActive
          ? "bg-white text-[#0a1128]"
          : "bg-gray-100 text-gray-700 group-hover:bg-white group-hover:text-[#0a1128]"
          }`}
      >
        {service.icon}
      </span>

      {/* Text content - Desktop */}
      <div className="relative flex-1 min-w-0 hidden lg:block">
        <h3 className={`text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 group-hover:text-white"
          }`}>
          {service.title}
        </h3>
        <p className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-white/60" : "text-gray-400 group-hover:text-white/60"
          }`}>
          {service.tagline}
        </p>
      </div>

      {/* Text content - Mobile */}
      <div className={`relative flex-1 min-w-0 lg:hidden ${align === "right" ? "text-right" : "text-left"
        }`}>
        <h3 className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-ink-700 group-hover:text-white"
          }`}>
          {service.title}
        </h3>
        <p className={`text-[10px] sm:text-[11px] mt-0.5 truncate transition-colors duration-300 ${isActive ? "text-white/60" : "text-ink-400 group-hover:text-white/60"
          }`}>
          {service.tagline}
        </p>
      </div>

      {/* Index number */}
      <span className={`shrink-0 font-mono text-[10px] transition-colors duration-300 ${isActive ? "text-white/60" : "text-gray-400 group-hover:text-white/60"
        }`}>
        {String(index + 1).padStart(2, "0")}
      </span>
    </button>
  );
}
// Phase step label component
function StepLabel({ steps, active }: { steps: string[]; active: number }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-1.5">
          <span
            className={`h-1.5 rounded-full transition-all duration-500 ${i === active
              ? "w-6 bg-white"
              : i < active
                ? "w-1.5 bg-white/60"
                : "w-1.5 bg-white/15"
              }`}
          />
          {i === active && (
            <motion.span
              key={label}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-mono text-[10px] uppercase tracking-widest text-white"
            >
              {label}
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

// Phase content renderer for each service
function PhaseContent({ service, phaseIndex }: { service: Service; phaseIndex: number }) {
  const phase = service.phases[phaseIndex];

  // Different visual representations based on service slug
  const renderPhaseVisual = () => {
    switch (service.slug) {
      case "web-development":
        return (
          <div className="w-full max-w-md rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-widest text-white/55">
                atlas.devinception.com
              </span>
            </div>
            <div className="relative mt-3 h-40 overflow-hidden rounded-xl border border-white/15 bg-white/5 p-2 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {phaseIndex === 0 && (
                  <motion.div
                    key="plan"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 p-2"
                  >
                    <p className="text-center font-mono text-[10px] uppercase tracking-widest text-white/60">
          // sitemap
                    </p>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08, duration: 0.3 }}
                          className="h-4 rounded border border-dashed border-white/30"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {phaseIndex === 1 && (
                  <motion.div
                    key="wire"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 p-2 grid grid-cols-12 gap-2"
                  >
                    <div className="col-span-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/30" />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
                    </div>

                    <div className="col-span-9">
                      <div className="h-12 rounded-md border border-dashed border-white/30" />
                      <div className="mt-1 grid grid-cols-3 gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-md border border-dashed border-white/30"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {phaseIndex === 2 && (
                  <motion.div
                    key="design"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 p-2 grid grid-cols-12 gap-2"
                  >
                    <div className="col-span-3 space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-3 w-3 rounded bg-white" />
                        <span className="h-1.5 w-10 rounded-full bg-white/60" />
                      </div>

                      <div className="rounded bg-white px-1 py-0.5 text-[8px] text-black">
                        Atlas
                      </div>

                      <div className="rounded bg-white/15 px-1 py-0.5 text-[8px] text-white/70">
                        Pricing
                      </div>
                    </div>

                    <div className="col-span-9 flex flex-col gap-1.5 min-h-0">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-white/80 to-white"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="h-2.5 rounded-full bg-white/30"
                      />

                      <div className="grid grid-cols-3 gap-1.5 flex-1">
                        {[
                          "linear-gradient(135deg, #ff6b3d, #f59e0b)",
                          "linear-gradient(135deg, #2486c5, #46a4f6)",
                          "linear-gradient(135deg, #10b981, #34d399)",
                        ].map((bg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                            className="rounded-md w-full h-full min-h-0"
                            style={{ background: bg }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {phaseIndex === 3 && (
                  <motion.div
                    key="ship"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 grid place-items-center p-2"
                  >
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-green-400">
                        ✓ deployed
                      </p>
                      <p className="mt-1 text-2xl font-bold text-white">98 / 100</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-white/60">
                        Lighthouse
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case "mobile-application":
        return (
          <div className="relative h-56 w-32 overflow-hidden rounded-3xl border-[3px] border-white/15 bg-black ]">
            <div className="absolute inset-x-0 top-1.5 mx-auto h-1 w-8 rounded-full bg-white/20" />
            <AnimatePresence mode="wait">
              {phaseIndex === 0 && (
                <motion.div
                  key="m-wire"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 mt-7 px-3"
                >
                  <div className="space-y-1.5">
                    <div className="h-2 w-12 rounded-full bg-white/30" />
                    <div className="h-1 w-20 rounded-full bg-white/15" />
                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square rounded-lg border border-dashed border-white/25" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              {phaseIndex === 1 && (
                <motion.div
                  key="m-build"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 mt-7 px-3"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-2.5 rounded-full bg-white"
                  />
                  <div className="mt-1.5 h-1.5 w-24 rounded-full bg-white/25" />
                  <div className="mt-3 grid grid-cols-2 gap-1.5">
                    {["#ff6b3d", "#2486c5", "#10b981", "#f59e0b"].map((c, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
                        className="aspect-square rounded-lg"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              {phaseIndex === 2 && (
                <motion.div
                  key="m-test"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 mt-7 grid place-items-center px-3 text-center"
                >
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/25 text-2xl">✓</span>
                    <p className="mt-2 font-mono text-[8px] uppercase tracking-widest text-white/70">TestFlight #14</p>
                  </div>
                </motion.div>
              )}
              {phaseIndex === 3 && (
                <motion.div
                  key="m-live"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 mt-7 grid place-items-center px-3 text-center"
                >
                  <div>
                    <p className="text-3xl font-bold text-white">#3</p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/70">App Store</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case "ui-ux-design":
        return (
          <div className="relative h-48 w-48">
            <AnimatePresence mode="wait">
              {phaseIndex === 0 && (
                <motion.div
                  key="d-research"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <div className="space-y-2">
                    {[
                      { x: "User: 'I need…'", c: "rgba(255,255,255,0.15)" },
                      { x: "Goal: speed", c: "rgba(36,134,197,0.4)" },
                      { x: "Pain: forms", c: "rgba(255,255,255,0.15)" },
                    ].map((it, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.18, duration: 0.3, ease: "easeOut" }}
                        className="rounded-md px-3 py-1.5 font-mono text-[10px] text-white"
                        style={{ background: it.c }}
                      >
                        {it.x}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {phaseIndex === 1 && (
                <motion.div
                  key="d-wires"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-white/30" />
                    <div className="h-20 w-20 rounded-full border-2 border-dashed border-white/30" />
                    <div className="col-span-2 h-12 rounded-2xl border-2 border-dashed border-white/30" />
                  </div>
                </motion.div>
              )}
              {phaseIndex === 2 && (
                <motion.div
                  key="d-hifi"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute left-2 top-2 h-24 w-24 rounded-2xl"
                    style={{ background: "#ff6b3d" }}
                  />
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -8 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-8 h-20 w-20 rounded-full"
                    style={{ background: "#2486c5" }}
                  />
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="absolute bottom-2 left-1/2 h-16 w-28 -translate-x-1/2 rounded-2xl"
                    style={{ background: "#10b981" }}
                  />
                  <span className="absolute inset-0 grid place-items-center font-bold text-4xl text-white tracking-tight mix-blend-difference">Aa</span>
                </motion.div>
              )}
              {phaseIndex === 3 && (
                <motion.div
                  key="d-handoff"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-green-400">✓ tokens.json</p>
                    <p className="mt-1 text-xs text-white/80">Design → Code</p>
                    <p className="mt-2 font-mono text-[9px] text-white/50">+ Figma library</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case "machine-learning-ai":
        const inputs = [40, 70, 100];
        const hidden = [25, 50, 75, 100, 125];
        return (
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 200 140" className="h-32 w-full max-w-md">
              {inputs.map((y1) =>
                hidden.map((y2, j) => (
                  <motion.line
                    key={`a-${y1}-${j}`}
                    x1={38} y1={y1} x2={94} y2={y2 / 1.4 + 18}
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="0.7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phaseIndex >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: j * 0.05, ease: "easeInOut" }}
                  />
                ))
              )}
              {hidden.map((y1, j) => (
                <motion.line
                  key={`b-${j}`}
                  x1={106} y1={y1 / 1.4 + 18} x2={158} y2={70}
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: phaseIndex >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: j * 0.05, ease: "easeInOut" }}
                />
              ))}
              {inputs.map((cy, i) => (
                <motion.circle
                  key={`l-${i}`}
                  cx={32} cy={cy} r={6}
                  fill="rgba(255,255,255,0.7)"
                  animate={{ scale: phaseIndex === 0 ? [1, 1.3, 1] : 1 }}
                  transition={{ duration: 1.4, delay: i * 0.1, repeat: phaseIndex === 0 ? Infinity : 0, ease: "easeInOut" }}
                />
              ))}
              {hidden.map((cy, i) => (
                <motion.circle
                  key={`h-${i}`}
                  cx={100} cy={cy / 1.4 + 18} r={6}
                  animate={{
                    fill: phaseIndex >= 2 ? "rgba(255,255,255,0.8)" : phaseIndex >= 1 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
                    scale: phaseIndex === 2 ? [1, 1.3, 1] : 1
                  }}
                  transition={{ duration: 1.4, delay: i * 0.1, repeat: phaseIndex === 2 ? Infinity : 0, ease: "easeInOut" }}
                />
              ))}
              <motion.circle
                cx={168} cy={70} r={10}
                animate={{
                  fill: phaseIndex >= 3 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)",
                  scale: phaseIndex === 3 ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: 1.4, repeat: phaseIndex === 3 ? Infinity : 0, ease: "easeInOut" }}
              />
            </svg>
          </div>
        );

      case "digital-marketing":
        return (
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Conversion · 90 days</span>
              <AnimatePresence mode="wait">
                {phaseIndex === 3 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-md bg-green-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-green-400"
                  >
                    ↑ +162%
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <svg viewBox="0 0 320 110" className="mt-3 h-24 w-full">
              <defs>
                <linearGradient id="mkfill-multi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0 90 L40 80 L80 88 L120 60 L160 65 L200 35 L240 48 L280 22 L320 10"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: phaseIndex >= 1 ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M0 90 L40 80 L80 88 L120 60 L160 65 L200 35 L240 48 L280 22 L320 10 L320 110 L0 110 Z"
                fill="url(#mkfill-multi)"
                animate={{ opacity: phaseIndex >= 2 ? 0.8 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <motion.circle
                cx={320} cy={10} r={5}
                fill="rgba(255,255,255,0.9)"
                animate={{ scale: phaseIndex >= 3 ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { v: "$28", l: "CAC" },
                { v: "4.2x", l: "ROAS" },
                { v: "47%", l: "D7 ret." },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  animate={{
                    opacity: phaseIndex >= 2 ? 1 : 0.3,
                    y: phaseIndex >= 2 ? 0 : 4
                  }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="rounded-lg border border-white/10 bg-white/5 p-2 text-white"
                >
                  <p className="text-sm font-bold">{s.v}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/55">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "staff-augmentation":
        return (
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Squad / Atlas</span>
              <AnimatePresence mode="wait">
                {phaseIndex === 3 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-md bg-green-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-green-400"
                  >
                    Online
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[20, 21, 22, 23, 24, 25].map((id, k) => (
                <motion.div
                  key={id}
                  animate={{
                    opacity: phaseIndex === 0 ? 0.15 : phaseIndex === 1 ? (k < 3 ? 1 : 0.3) : 1,
                    scale: phaseIndex >= 2 ? 1 : 0.9,
                    y: phaseIndex === 3 ? [0, -3, 0] : 0
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    y: { duration: 2, delay: k * 0.15, repeat: phaseIndex === 3 ? Infinity : 0, ease: "easeInOut" }
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <span className="h-12 w-12 rounded-full bg-cover ring-2 ring-white/15" style={{ backgroundImage: `url(https://i.pravatar.cc/80?img=${id})` }} />
                    {phaseIndex >= 2 && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-500" />}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">{["FE", "BE", "ML", "DES", "PM", "OPS"][k]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "E-commerce":
        return (
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {phaseIndex === 0 && (
                <motion.div
                  key="e-cat"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-3 gap-3"
                >
                  {[{ c: "#ff6b3d", price: "$48" }, { c: "#2486c5", price: "$129" }, { c: "#10b981", price: "$32" }].map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12, duration: 0.4, ease: "easeOut" }}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
                    >
                      <div className="aspect-square w-full rounded-md" style={{ background: p.c }} />
                      <p className="mt-2 text-sm font-bold text-white">{p.price}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {phaseIndex === 1 && (
                <motion.div
                  key="e-cart"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">Cart · 3 items</p>
                  <div className="mt-2 space-y-1.5">
                    {["#ff6b3d", "#2486c5", "#10b981"].map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded" style={{ background: c }} />
                        <span className="flex-1 text-xs text-white/80">Item {i + 1}</span>
                        <span className="font-mono text-xs text-white">$48</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Total</span>
                    <span className="text-base font-bold text-white">$209</span>
                  </div>
                </motion.div>
              )}
              {phaseIndex === 2 && (
                <motion.div
                  key="e-pay"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/20 text-2xl">💳</span>
                  <p className="mt-3 text-base font-bold text-white">Processing…</p>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                      className="h-full bg-white"
                    />
                  </div>
                </motion.div>
              )}
              {phaseIndex === 3 && (
                <motion.div
                  key="e-conv"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-center backdrop-blur-sm"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl text-white">✓</span>
                  <p className="mt-3 text-2xl font-bold text-white">+28%</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-green-400">Conversion uplift</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case "quality-assurance":
        const tests = ["auth.spec.ts", "checkout.spec.ts", "payment.spec.ts", "search.spec.ts"];
        return (
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Test suite</span>
              <span className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${phaseIndex >= 3 ? "bg-green-500/20 text-green-400" : phaseIndex === 2 ? "bg-red-500/20 text-red-400" : "bg-white/10 text-white/70"}`}>
                {phaseIndex === 0 ? "Queued" : phaseIndex === 1 ? "Running…" : phaseIndex === 2 ? "1 fail" : "✓ All green"}
              </span>
            </div>
            <div className="mt-3 space-y-1.5">
              {tests.map((t, i) => (
                <motion.div
                  key={t}
                  animate={{ opacity: phaseIndex >= 1 ? 1 : 0.3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5"
                >
                  <span className={`grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold text-white ${phaseIndex === 0 ? "bg-white/20" : phaseIndex === 1 && i < 2 ? "bg-green-500" : phaseIndex === 1 ? "bg-white/20" : phaseIndex === 2 && i === 2 ? "bg-red-500" : "bg-green-500"}`}>
                    {phaseIndex === 2 && i === 2 ? "✕" : "✓"}
                  </span>
                  <span className="font-mono text-[10px] text-white/70">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "project-management":
        const cols = ["Backlog", "Doing", "Done"];
        return (
          <div className="grid w-full max-w-md grid-cols-3 gap-3">
            {cols.map((c, i) => (
              <div key={c} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">{c}</span>
                <div className="mt-2 flex-1 space-y-1.5">
                  {Array.from({ length: 2 }).map((_, k) => {
                    const cardCol = phaseIndex <= 1 ? 0 : phaseIndex === 2 ? 1 : 2;
                    const showHere = i === cardCol && k === 0;
                    return showHere ? (
                      <motion.div
                        key="active-card"
                        layoutId="active-card"
                        className="rounded-md border border-white bg-white/30 p-2"
                        transition={{ type: "spring", damping: 22, stiffness: 220 }}
                      >
                        <div className="h-1 w-8 rounded-full bg-white" />
                        <div className="mt-1.5 h-1 w-12 rounded-full bg-white/40" />
                        <div className="mt-1 h-1 w-9 rounded-full bg-white/25" />
                      </motion.div>
                    ) : (
                      <div key={k} className="rounded-md bg-white/5 p-2 opacity-50">
                        <div className="h-1 w-8 rounded-full bg-white/20" />
                        <div className="mt-1.5 h-1 w-12 rounded-full bg-white/15" />
                        <div className="mt-1 h-1 w-9 rounded-full bg-white/10" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="flex h-32 w-full max-w-md items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-sm font-medium text-white">{phase.name}</p>
              <p className="text-xs text-white/60">{phase.description}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-center">
          <p className="text-sm font-semibold text-white">{phase.name}</p>
          <p className="text-xs text-white/60">{phase.description}</p>
        </div>
      </div>
      {renderPhaseVisual()}
    </div>
  );
}

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [isAutoRolling, setIsAutoRolling] = useState(true);
  const leftServices = services.slice(0, 5);
  const rightServices = services.slice(5);
  const active = services[activeIdx];
  const count = services.length;
  const totalPhases = active?.phases?.length || 4;

  // Auto-roll phases - runs every 2.5 seconds
  useEffect(() => {
    if (!isAutoRolling) return;

    const interval = setInterval(() => {
      setPhaseIdx((prev) => (prev + 1) % totalPhases);
    }, 2500); // ← 2.5 seconds between phases

    return () => clearInterval(interval);
  }, [isAutoRolling, totalPhases]);

  // Reset phase and stop auto-roll when service changes
  useEffect(() => {
    // Reset phase to 0
    setPhaseIdx(0);

    // Stop auto-roll immediately
    setIsAutoRolling(false);

    // Clear any existing timeout
    if (window.autoRollTimeout) {
      clearTimeout(window.autoRollTimeout);
    }

    // Resume auto-roll after 1 second (so user sees phase 0 briefly)
    window.autoRollTimeout = setTimeout(() => {
      setIsAutoRolling(true);
    }, 1000); // ← 1 second delay before auto-roll starts

    return () => {
      if (window.autoRollTimeout) {
        clearTimeout(window.autoRollTimeout);
      }
    };
  }, [activeIdx]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (window.autoRollTimeout) {
        clearTimeout(window.autoRollTimeout);
      }
    };
  }, []);

  const handlePhaseChange = (newPhase: number) => {
    setIsAutoRolling(false);
    setPhaseIdx(newPhase);

    if (window.autoRollTimeout) {
      clearTimeout(window.autoRollTimeout);
    }

    // Resume auto-roll after 2 seconds when user manually clicks
    window.autoRollTimeout = setTimeout(() => {
      setIsAutoRolling(true);
    }, 2000);
  };

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 relative bg-section-services from-slate-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-4">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                SERVICES
              </span>
            </div>

            <h2 className="h-section mt-3 text-deep-blue">
              Turning Ideas <span className="gradient-text-dark">into Reality.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Dev Inception is your end-to-end digital partner. Whether you're launching a product,
              rebranding a business or scaling growth — we combine design, development, strategy and
              marketing into one seamless service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
          {/* Mobile: Horizontal scrollable tabs - scrollbar hidden */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-1 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveIdx(i)}
                className={`snap-start shrink-0 px-4 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap touch-manipulation ${activeIdx === i
                  ? "bg-white shadow-lg shadow-deep-blue/10 border border-deep-blue/[0.06]"
                  : "bg-white/50 hover:bg-white/80"
                  }`}
                style={{
                  borderColor: activeIdx === i ? s.accent : "transparent",
                  borderWidth: activeIdx === i ? "2px" : "1px"
                }}
              >
                <span className={`text-xs font-semibold transition-colors duration-300 ${activeIdx === i ? "text-deep-blue" : "text-deep-blue/60"
                  }`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* LEFT PANEL */}
          <div className="md:col-span-4 grid content-start gap-1.5">
            {leftServices.map((s, i) => (
              <TabButton key={s.title} service={s} index={i} isActive={activeIdx === i} onSelect={() => setActiveIdx(i)} align="left" />
            ))}
            {/* Spacer to fill remaining height */}
            <div className="flex-1"></div>
          </div>

          {/* CENTER SLIDER AREA */}
          <div className="md:col-span-4 justify-center flex">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-deep-blue/20 h-full">
              <div
                className="relative overflow-hidden rounded-2xl h-full"
                style={{
                  background: "#0a1628",
                }}
              >
                {/* Subtle grid overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Blur overlays for depth */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 size-60 rounded-full bg-white/20 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-24 size-60 rounded-full bg-white/10 blur-3xl"
                />

                {/* Glass reflection effect */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"
                />

                <div className="relative flex flex-col h-full p-4">
                  {/* Top bar with category and counter */}
                  <div className="flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/70" />
                        <span className="relative inline-flex size-2 rounded-full bg-white" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                        {active.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-xl border border-white/15 bg-white/10 px-2.5 py-1.5 items-center flex backdrop-blur-md">
                        <span className="text-[9px] font-medium tabular-nums text-white/80">
                          Phase {String(phaseIdx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-white/60 tabular-nums">
                        {String(activeIdx + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Phase visualization area - FIXED HEIGHT for consistency */}
                  <div className="relative flex-1 flex items-center justify-center py-1" style={{ minHeight: '160px', height: '160px' }}>
                    <div className="w-full overflow-hidden px-2 h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${activeIdx}-${phaseIdx}`}
                          className="flex w-full h-full items-center justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <div className="flex w-full shrink-0 flex-col items-center justify-center gap-1 h-full">
                            <motion.div
                              className="flex w-full justify-center items-center h-full"
                              key={`content-${activeIdx}-${phaseIdx}`}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{
                                duration: 0.35,
                                delay: 0.05,
                                ease: "easeOut"
                              }}
                            >
                              <div className="flex items-center justify-center h-full w-full">
                                <PhaseContent service={active} phaseIndex={phaseIdx} />
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom: Phase controls */}
                  <div className="space-y-2 flex-shrink-0">
                    <div className="flex items-center ">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] gap-1 text-white/70">
                        Phases
                      </span>
                      <div className="flex items-center ">
                        {active.phases.map((phase, i) => (
                          <button
                            key={phase.name}
                            type="button"
                            onClick={() => handlePhaseChange(i)}
                            aria-label={`Go to ${phase.name} phase`}
                            aria-current={i === phaseIdx}
                            className="group flex items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-all hover:bg-white/10"
                          >
                            <span
                              className={`h-1.5 rounded-full transition-all duration-300 ${i === phaseIdx
                                ? "w-6 bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                                : i < phaseIdx
                                  ? "w-1.5 bg-white/50"
                                  : "w-1.5 bg-white/20 group-hover:bg-white/30"
                                }`}
                            />
                            <span className={`hidden text-[8px] font-medium uppercase tracking-widest transition-colors duration-300 sm:block ${i === phaseIdx ? "text-white" : "text-white/40 group-hover:text-white/60"
                              }`}>
                              {phase.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="md:col-span-4 grid content-start gap-1.5">
            {rightServices.map((s, i) => {
              const realIdx = i + leftServices.length;
              return <TabButton key={s.title} service={s} index={realIdx} isActive={activeIdx === realIdx} onSelect={() => setActiveIdx(realIdx)} align="right" />;
            })}
            {/* Spacer to fill remaining height */}
            <div className="flex-1"></div>
          </div>
        </div>

        {/* Bottom detail panel */}

        <div className=" lg:mt-5 overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white/80 backdrop-blur-sm shadow-xl shadow-deep-blue/8">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid gap-5 p-5 md:grid-cols-12 md:items-center md:gap-6 md:p-6 lg:p-7"
          >
            {/* Content Column */}
            <div className="col-span-6">
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-xl font-semibold tracking-tight text-deep-blue md:text-2xl lg:text-3xl"
              >
                {active.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-1.5 text-sm leading-relaxed text-deep-blue/70 md:text-base"
              >
                {active.description}
              </motion.p>
            </div>

            {/* Actions Column */}
            <div className="flex flex-col items-start gap-3 md:col-span-6 md:flex-row md:items-center md:justify-end">
              {/* Stack Tags */}
              <div className="flex flex-wrap items-center gap-1.5">

                {active.stack.slice(0, 4).map((tech, index) => (
                  <motion.span
                    key={`${active.slug}-${tech}`}
                    initial={{ opacity: 0, scale: 0.9, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -6 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-md sm:px-3 sm:text-[11px]"
                    style={{
                      color: active.accent,
                      backgroundColor: `${active.accent}0d`,
                      borderColor: `${active.accent}26`,
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-xl"
                      style={{ backgroundColor: active.accent }}
                    />
                    {tech}
                  </motion.span>
                ))}


                {active.stack.length > 4 && (
                  <span className="text-[10px] font-medium text-deep-blue/40 sm:text-[11px]">
                    +{active.stack.length - 4}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <div >
                <Link
                  href={`/services/${active.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-deep-blue px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-deep-blue/80 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] md:px-3.5 md:py-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}