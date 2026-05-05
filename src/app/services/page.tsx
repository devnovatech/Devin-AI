"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "#0a1628";
const LIGHT = "#e3f2fd";

/* ───────── Data ───────── */

type Category = "build" | "design" | "scale" | "operate";

interface Service {
  title: string;
  slug: string;
  category: Category;
  tagline: string;
  description: string;
  capabilities: string[];
  accent: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Mobile App Development",
    slug: "mobile-application",
    category: "build",
    tagline: "Native & cross-platform apps people love using.",
    description:
      "Engineered for performance, accessibility, and the bar set by App Store editors. iOS, Android, or one shared codebase via React Native or Flutter.",
    capabilities: [
      "iOS & Android native",
      "Cross-platform (RN, Flutter)",
      "Backend & APIs",
      "Store launch & ASO",
    ],
    accent: "#1E88E5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" strokeWidth={2} />
      </svg>
    ),
  },
  {
    title: "Web Development",
    slug: "web-development",
    category: "build",
    tagline: "Fast, accessible, SEO-ready platforms.",
    description:
      "From marketing sites to full-stack products. Core Web Vitals in the green, lighthouse scores you can show off, and architecture that scales with traffic.",
    capabilities: [
      "Frontend (React, Next, Vue)",
      "Backend & APIs",
      "Headless CMS",
      "Performance & SEO",
    ],
    accent: "#0277BD",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <circle cx="5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce",
    category: "build",
    tagline: "Storefronts that convert and scale.",
    description:
      "Conversion-tuned checkout flows, secure payment infrastructure, and inventory systems that handle Black-Friday-level traffic without breaking a sweat.",
    capabilities: [
      "Shopify & custom platforms",
      "PCI-DSS-compliant checkout",
      "Inventory & ERP integrations",
      "A/B testing & analytics",
    ],
    accent: "#0288D1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    category: "design",
    tagline: "Research-led design that converts.",
    description:
      "User research, wireframes, prototypes, and visual systems that turn user needs into elegant, business-driving experiences. Accessibility-first by default.",
    capabilities: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual & interaction design",
      "WCAG accessibility",
    ],
    accent: "#039BE5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
      </svg>
    ),
  },
  {
    title: "ML & AI Solutions",
    slug: "machine-learning-ai",
    category: "scale",
    tagline: "Custom models, embedded into your stack.",
    description:
      "Predictive analytics, NLP, computer vision, and AI assistants that fit into your existing systems — not standalone toys. Production-ready, monitored, retrainable.",
    capabilities: [
      "LLM apps & agents",
      "Predictive analytics",
      "Computer vision",
      "Model deployment & MLOps",
    ],
    accent: "#00ACC1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    category: "scale",
    tagline: "Strategy and content built on data.",
    description:
      "SEO, paid campaigns, content marketing, and conversion optimization. Measurable growth, not vanity metrics. Tied directly to pipeline and revenue.",
    capabilities: [
      "Technical & content SEO",
      "Paid acquisition (Meta, LinkedIn, Google)",
      "Content & email programs",
      "Funnel analytics & attribution",
    ],
    accent: "#1565C0",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    category: "operate",
    tagline: "Senior engineers, embedded with your team.",
    description:
      "Vetted developers, designers, and PMs slot into your sprints. Time-zone aligned, communication-ready, and ramped from day one. Flexible scale up / down.",
    capabilities: [
      "Senior, vetted talent",
      "Time-zone aligned",
      "Sprint-ready integration",
      "Flexible scaling",
    ],
    accent: "#01579B",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    category: "operate",
    tagline: "Ship with confidence, not surprises.",
    description:
      "Manual exploratory + automated testing across every browser, device, and edge case. Performance, security, accessibility — all validated before release.",
    capabilities: [
      "Automation (Cypress, Playwright)",
      "Performance & load testing",
      "Security audits",
      "Cross-platform validation",
    ],
    accent: "#006064",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    slug: "project-management",
    category: "operate",
    tagline: "Agile delivery without the chaos.",
    description:
      "Transparent roadmaps, weekly check-ins, and stakeholder alignment that keeps projects on rails. Jira, Linear, ClickUp — whatever your team already uses.",
    capabilities: [
      "Agile / Scrum delivery",
      "Roadmap & backlog ownership",
      "Stakeholder communication",
      "Risk & change management",
    ],
    accent: "#0097A7",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const filters: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "build", label: "Build" },
  { id: "design", label: "Design" },
  { id: "scale", label: "Scale & grow" },
  { id: "operate", label: "Operate" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    duration: "1–2 weeks",
    description:
      "We start with goals, constraints, and the why. You leave with a scoped roadmap, timeline, and a fixed quote.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design",
    duration: "2–3 weeks",
    description:
      "User research, wireframes, prototypes, and a visual system. We pressure-test ideas with real users before a line of code is written.",
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Build",
    duration: "8–14 weeks",
    description:
      "2-week sprints, weekly demos, transparent burndowns. You see progress shipping behind a feature flag from day one — no surprises.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch",
    duration: "1 week + ongoing",
    description:
      "Production deploy, monitoring dashboards wired in, and a 30-day stabilization window. Then optional retainer for ongoing support.",
    accent: "#1565C0",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const caseStudies = [
  {
    client: "FinFlow Technologies",
    industry: "FinTech",
    summary:
      "Rebuilt their analytics dashboard from a slow, jQuery-era app into a real-time platform. Now powers decisions for 50k+ monthly active users.",
    metric: { value: "+240%", label: "active user growth" },
    accent: "#1565C0",
    tags: ["Web Platform", "ML & AI", "UI/UX"],
  },
  {
    client: "ShopSphere",
    industry: "E-commerce",
    summary:
      "Shipped a cross-platform mobile app in 12 weeks with personalized recommendations. App Store-featured, conversion lift across the funnel.",
    metric: { value: "4.8★", label: "App Store rating" },
    accent: "#0277BD",
    tags: ["Mobile App", "ML & AI"],
  },
  {
    client: "HealthBridge",
    industry: "Healthcare",
    summary:
      "Built a HIPAA-compliant telemedicine platform with EHR integration. 14 hospitals onboarded in the first quarter, zero compliance incidents.",
    metric: { value: "14 hospitals", label: "onboarded in Q1" },
    accent: "#00ACC1",
    tags: ["Web Platform", "Backend", "QA"],
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most engagements run 8–14 weeks from kickoff to launch. Discovery and design happen in the first 3–5 weeks, then build is 2-week sprints with weekly demos. We share a fixed timeline before you commit.",
  },
  {
    q: "What's your pricing model?",
    a: "Either fixed-price (for well-scoped projects) or time-and-materials with weekly caps (for evolving scope). After discovery, we share a written quote with milestones — no surprise invoices, ever.",
  },
  {
    q: "Do you work with our existing team?",
    a: "Yes — we routinely embed with internal teams. We can take ownership of an isolated workstream or augment a specific role (senior engineer, designer, PM). Your tools, your rituals — we adapt.",
  },
  {
    q: "What's your tech stack?",
    a: "Mobile: React Native, Flutter, native iOS/Android. Web: Next.js, React, Node, Python. AI/ML: Python, PyTorch, OpenAI / Anthropic APIs. Cloud: AWS, GCP, Vercel. We're stack-agnostic — we use what fits the problem.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Of course. We sign mutual NDAs before discovery so we can talk freely. We're also comfortable with custom data-handling agreements for regulated industries (HIPAA, PCI-DSS, GDPR).",
  },
  {
    q: "Do you handle ongoing maintenance?",
    a: "Yes — most clients move into a retainer after launch (typically 20–40 hours/month) for fixes, small features, and on-call support. You can also fully hand off to your team; we'll document everything.",
  },
];

/* ───────── Service card ───────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.04, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative block h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow)]"
        style={
          {
            "--card-glow": `${service.accent}55`,
          } as React.CSSProperties
        }
      >
        {/* Corner glow */}
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
          style={{ backgroundColor: service.accent }}
        />
        {/* Hairline accent border */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ borderColor: `${service.accent}33` }}
        />

        <div className="relative p-6 lg:p-7 flex flex-col h-full">
          {/* Header — icon + category badge */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundColor: service.accent,
                boxShadow: `0 12px 28px -10px ${service.accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
              }}
            >
              {service.icon}
            </div>
            <span
              className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border"
              style={{
                color: service.accent,
                borderColor: `${service.accent}40`,
                backgroundColor: `${service.accent}0A`,
              }}
            >
              {service.category}
            </span>
          </div>

          {/* Title + tagline */}
          <h3 className="text-lg font-bold text-deep-blue tracking-tight leading-snug">
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-deep-blue/70 leading-snug">
            {service.tagline}
          </p>

          {/* Capabilities list */}
          <ul className="mt-5 space-y-1.5 flex-1">
            {service.capabilities.map((c) => (
              <li
                key={c}
                className="flex gap-2 text-[13px] text-deep-blue/65 leading-snug"
              >
                <svg
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={service.accent}
                  strokeWidth={2.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-deep-blue/[0.06] flex items-center justify-between">
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: service.accent }}
            >
              Learn more
            </span>
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
              style={{ backgroundColor: `${service.accent}14` }}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={service.accent}
                strokeWidth={2.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ───────── FAQ accordion item ───────── */
function FaqRow({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-base sm:text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 mt-1 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-gray-400 transition-all duration-300 ${
            isOpen
              ? "rotate-45 bg-neon-blue border-transparent text-white"
              : "group-hover:border-neon-blue/40 group-hover:text-neon-blue"
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 body-base text-gray-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────── Page ───────── */
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");
  const [openFaq, setOpenFaq] = useState<number>(0);

  const visibleServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status pill */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                9 capabilities · 250+ projects shipped
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 5rem)" }}
            >
              From idea to launch —
              <br />
              <span className="gradient-text glow-text">all under one roof.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
              Engineering, design, AI, and growth — delivered as one cohesive
              service. Pick the capability you need, or weave several into a
              single engagement.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                >
                  Book a discovery call
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.span>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Browse services ↓
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* dark → light */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      {/* ───────── Catalog (filterable) ───────── */}
      <section
        id="catalog"
        className="py-20 lg:py-24 bg-light-accent relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-neon-purple">What We Do</p>
              <h2 className="mt-3 h-section text-deep-blue">
                Find the service that fits{" "}
                <span className="gradient-text-dark">your problem.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                Filter by what you&apos;re trying to do. Each card links to a
                detailed page with deliverables, timelines, and recent work.
              </p>
            </AnimatedSection>
          </div>

          {/* Filter chips */}
          <AnimatedSection className="mb-8" delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const isActive = activeFilter === f.id;
                const count =
                  f.id === "all"
                    ? services.length
                    : services.filter((s) => s.category === f.id).length;
                return (
                  <motion.button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-deep-blue text-white shadow-lg shadow-deep-blue/20"
                        : "bg-white border border-deep-blue/[0.08] text-deep-blue/70 hover:bg-white/80 hover:text-deep-blue hover:border-deep-blue/20"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {f.label}
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full tabular-nums ${
                          isActive
                            ? "bg-white/15 text-white/90"
                            : "bg-deep-blue/[0.06] text-deep-blue/50"
                        }`}
                      >
                        {count}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Service grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {visibleServices.map((service, i) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={i}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty hint (impossible but safe) */}
          {visibleServices.length === 0 && (
            <p className="text-center text-deep-blue/50 py-12">
              No services in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* light → dark */}
      <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />

      {/* ───────── Process ───────── */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-neon-blue">How We Work</p>
              <h2 className="mt-3 h-section text-white">
                From kickoff to launch in{" "}
                <span className="gradient-text">four clear steps.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Transparent timelines, weekly demos, fixed quotes after
                discovery. No surprise invoices, no scope creep.
              </p>
            </AnimatedSection>
          </div>

          {/* Steps grid with connecting line */}
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Connecting dotted line on lg */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-white/15" />

            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="group relative h-full p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                  {/* Number badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 z-10"
                      style={{
                        backgroundColor: step.accent,
                        boxShadow: `0 12px 28px -10px ${step.accent}80`,
                      }}
                    >
                      {step.number}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                      style={{
                        color: step.accent,
                        backgroundColor: `${step.accent}15`,
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="h-card text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* dark → light */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      {/* ───────── Recent work / case studies ───────── */}
      <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-neon-purple">Recent Work</p>
              <h2 className="mt-3 h-section text-deep-blue">
                Outcomes, not{" "}
                <span className="gradient-text-dark">case-study fluff.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                A few engagements we&apos;ve shipped recently — what we built,
                and the metric that mattered.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.client} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden p-6 lg:p-7 flex flex-col transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow)]"
                  style={
                    {
                      "--card-glow": `${cs.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: cs.accent }}
                  />

                  {/* Industry chip */}
                  <span
                    className="self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{
                      color: cs.accent,
                      borderColor: `${cs.accent}40`,
                      backgroundColor: `${cs.accent}0A`,
                    }}
                  >
                    {cs.industry}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-deep-blue tracking-tight">
                    {cs.client}
                  </h3>
                  <p className="mt-3 text-sm text-deep-blue/65 leading-relaxed flex-1">
                    {cs.summary}
                  </p>

                  {/* Big metric */}
                  <div className="mt-6 pt-5 border-t border-deep-blue/[0.07] flex items-baseline gap-3">
                    <span
                      className="text-3xl lg:text-4xl font-bold tracking-tight tabular-nums"
                      style={{ color: cs.accent }}
                    >
                      {cs.metric.value}
                    </span>
                    <span className="text-deep-blue/55 text-xs">
                      {cs.metric.label}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-deep-blue/55 px-2 py-0.5 rounded-md bg-deep-blue/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* light → dark */}
      <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />

      {/* ───────── FAQ ───────── */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-neon-blue">FAQ</p>
            <h2 className="mt-3 h-section text-white">
              Questions, <span className="gradient-text">answered.</span>
            </h2>
            <p className="mt-5 body-base text-gray-400">
              Quick answers to what most teams ask before kickoff. Don&apos;t
              see your question?{" "}
              <Link
                href="/contact"
                className="text-neon-blue hover:underline font-semibold"
              >
                Just ask.
              </Link>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-2 sm:p-3">
              {faqs.map((f, i) => (
                <div
                  key={f.q}
                  className={i === faqs.length - 1 ? "" : ""}
                >
                  <div className="px-4 sm:px-6">
                    <FaqRow
                      q={f.q}
                      a={f.a}
                      isOpen={openFaq === i}
                      onToggle={() =>
                        setOpenFaq(openFaq === i ? -1 : i)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <CTABanner
        eyebrow="Ready when you are"
        heading={
          <>
            Pick a service. Or combine a few.{" "}
            <span className="gradient-text">Either way — let&apos;s talk.</span>
          </>
        }
        description="Tell us where you are and what you're trying to ship. We'll come back with a tailored plan within 24 hours."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="See industries"
        secondaryHref="/industries"
      />
    </>
  );
}
