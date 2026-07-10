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
import { ServiceArt } from "./ui/ServiceArt";

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



export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const leftServices = services.slice(0, 5);
  const rightServices = services.slice(5);
  const active = services[activeIdx];
  const count = services.length;

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
              Dev Inception is your end-to-end digital partner — we combine design, development, strategy and marketing into one seamless service.
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
            <ServiceArt slug={active.slug} />
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