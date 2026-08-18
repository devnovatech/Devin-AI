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
      "Designing and developing intuitive, high-performance mobile applications built for reliability, scalability, and seamless user experiences across iOS and Android.",

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
      "Creating responsive, scalable web solutions that deliver dependable performance and seamless user experiences.",
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
      "Delivering end-to-end AI and machine learning solutions—from data engineering and model development to deployment, integration, and production optimization.",

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
    slug: "ecommerce",
    tagline: "Conversion-tuned storefronts",
    accent: "#0097A7",
    category: "Build",
    description:
      "Developing secure, scalable, and optimized online stores that improve user experience, increase conversions, and support business growth.",

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
      "Creating intuitive digital experiences that improve usability, strengthen engagement, and support business goals.",
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
      "Ensuring reliable, high-quality software through rigorous manual and automated testing, continuous validation, and proactive defect prevention.",
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
      "Providing skilled software professionals who integrate seamlessly with your team, expand delivery capacity, and accelerate project execution.",
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
      "Creating data-driven digital strategies that strengthen brand visibility, generate qualified leads, and drive measurable business growth.",

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
      "Driving successful delivery through structured planning, agile execution, proactive risk management, and clear stakeholder communication.",
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

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const leftServices = services.slice(0, 5);
  const rightServices = services.slice(5);
  const active = services[activeIdx];
  const count = services.length;

  return (
    <section id="services" className=" flex flex-col justify-center layout-section relative bg-section-services from-slate-50 to-white overflow-hidden">
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

            <h2 className="h-section mt-2 text-deep-blue">
              Turning Ideas <span className="gradient-text-dark">into Reality.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Dev Inception is your end-to-end digital partner — we combine design, development, strategy and marketing into one seamless service.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch gap-0">
          {/* Mobile: Horizontal scrollable tabs - scrollbar hidden */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
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
          <div className="hidden lg:block lg:col-span-4 pr-2">
            <div className="grid content-start gap-1.5 h-full">
              {leftServices.map((s, i) => (
                <TabButton key={s.title} service={s} index={i} isActive={activeIdx === i} onSelect={() => setActiveIdx(i)} align="left" />
              ))}
              <div className="flex-1"></div>
            </div>
          </div>

          {/* CENTER CARD */}
          <div className="lg:col-span-4 flex justify-center mt-2 lg:mt-0 px-2">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full overflow-hidden rounded-2xl shadow-2xl shadow-deep-blue/20">
              <ServiceArt slug={active.slug} />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden lg:block lg:col-span-4 pl-2">
            <div className="grid content-start gap-1.5 h-full">
              {rightServices.map((s, i) => {
                const realIdx = i + leftServices.length;
                return <TabButton key={s.title} service={s} index={realIdx} isActive={activeIdx === realIdx} onSelect={() => setActiveIdx(realIdx)} align="right" />;
              })}
              <div className="flex-1"></div>
            </div>
          </div>
        </div>

        {/* Bottom detail panel */}
        <div className="mt-6 lg:mt-5 overflow-hidden rounded-2xl border border-deep-blue/[0.06] bg-white/80 backdrop-blur-sm shadow-xl shadow-deep-blue/8">
          <div
            key={active.slug}
            className="grid gap-4 p-4 md:grid-cols-12 md:items-center md:gap-6 md:p-6 lg:p-7"
          >
            {/* Content Column */}
            <div className="md:col-span-6">
              <h3 className="text-xl font-semibold tracking-tight text-deep-blue md:text-2xl lg:text-3xl"
              >
                {active.title}
              </h3>

              <p className="mt-1.5 text-sm line-clamp-2 leading-relaxed text-deep-blue/70 md:text-base">
                {active.description}
              </p>
            </div>

            {/* Actions Column */}
            <div className="flex flex-col items-start gap-3 md:col-span-6 md:flex-row md:items-center md:justify-end">
              {/* Stack Tags - 2 per row on mobile */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-1.5 w-full sm:w-auto">
                {active.stack.slice(0, 4).map((tech, index) => (
                  <span
                    key={`${active.slug}-${tech}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 hover:shadow-md sm:px-3 sm:text-[11px]"
                    style={{
                      color: active.accent,
                      backgroundColor: `${active.accent}0d`,
                      borderColor: `${active.accent}26`,
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-xl shrink-0"
                      style={{ backgroundColor: active.accent }}
                    />
                    {tech}
                  </span>
                ))}

                {active.stack.length > 4 && (
                  <span className="text-[10px] font-medium text-deep-blue/40 sm:text-[11px] col-span-2 sm:col-span-1 text-center sm:text-left">
                    +{active.stack.length - 4}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto">
                <Link
                  href={`/services/${active.slug}`}
                  className="inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-lg bg-deep-blue px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-deep-blue/80 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] md:px-3.5 md:py-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}