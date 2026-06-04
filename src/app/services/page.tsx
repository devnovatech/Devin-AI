"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";


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

interface ProcessStepData {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  accent: string;
  icon: ReactNode;
}

const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Discovery",
    duration: "1–2 weeks",
    description:
      "We start with goals, constraints, and the why. You leave with a scoped roadmap, timeline, and a fixed quote.",
    deliverables: [
      "Stakeholder interviews",
      "Technical & brand audit",
      "Success metrics",
      "Fixed-price proposal",
    ],
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
    deliverables: [
      "UX research & flows",
      "Wireframes & prototypes",
      "Visual system / tokens",
      "WCAG-AA accessibility",
    ],
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
    deliverables: [
      "Bi-weekly demos",
      "Staging environments",
      "CI/CD pipeline",
      "Pair programming",
    ],
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
    deliverables: [
      "Zero-downtime deploy",
      "Monitoring & observability",
      "30-day stabilization",
      "On-call runbook",
    ],
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

const heroStats = [
  { value: "250+", label: "Projects shipped" },
  { value: "9", label: "Capabilities" },
  { value: "4.9★", label: "Avg rating" },
  { value: "8+", label: "Years building" },
];

/* ───────── Service tile (hero grid) ───────── */
function HeroTile({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: 0.15 + index * 0.05,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="group surface-tile relative aspect-square rounded-2xl border flex flex-col items-center justify-center text-center p-3 cursor-default overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${service.accent}26 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${service.accent}55` }}
      />

      <div
        className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center text-white mb-2 transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundColor: service.accent,
          color: "#ffffff",
          boxShadow: `0 10px 24px -10px ${service.accent}90, inset 0 1px 0 rgba(255,255,255,0.2)`,
        }}
      >
        {service.icon}
      </div>
      <p className="relative text-[10px] lg:text-[10.5px] font-semibold text-white/85 leading-tight tracking-tight">
        {service.title}
      </p>
    </motion.div>
  );
}

/* ───────── Service card (catalog grid) ───────── */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index, 6) * 0.04,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative block h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-18px_var(--card-glow)]"
        style={
          {
            "--card-glow": `${service.accent}66`,
          } as React.CSSProperties
        }
      >
        {/* Top accent strip */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${service.accent} 0%, ${service.accent}00 100%)`,
          }}
        />

        {/* Corner glow */}
        <div
          className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
          style={{ backgroundColor: service.accent }}
        />

        {/* Dotted pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(${service.accent} 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative p-6 lg:p-7 flex flex-col h-full">
          {/* Header — icon + category badge */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              style={{
                backgroundColor: service.accent,
                boxShadow: `0 14px 32px -10px ${service.accent}90, inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
            >
              {service.icon}
            </div>
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border"
              style={{
                color: service.accent,
                borderColor: `${service.accent}40`,
                backgroundColor: `${service.accent}0F`,
              }}
            >
              {service.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-deep-blue tracking-tight leading-snug">
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-deep-blue/65 leading-snug">
            {service.tagline}
          </p>

          {/* Capabilities */}
          <ul className="mt-5 space-y-1.5 flex-1">
            {service.capabilities.map((c) => (
              <li
                key={c}
                className="flex gap-2 text-[13px] text-deep-blue/70 leading-snug"
              >
                <svg
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={service.accent}
                  strokeWidth={2.5}
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
              Explore service
            </span>
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
              style={{ backgroundColor: `${service.accent}14` }}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={service.accent}
                strokeWidth={2.5}
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
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`relative border-b border-white/[0.08] transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : ""
        }`}
    >
      {/* Accent left bar when open */}
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-neon-blue"
        initial={false}
        animate={{ height: isOpen ? 32 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />

      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left py-5 pl-5 pr-5 flex items-start justify-between gap-4 group"
      >
        <div className="flex items-start gap-4">
          <span className="font-mono text-[11px] font-bold text-white/35 group-hover:text-neon-blue/80 transition-colors pt-1.5 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-base sm:text-lg font-semibold transition-colors ${isOpen
              ? "text-white"
              : "text-white/85 group-hover:text-neon-blue"
              }`}
          >
            {q}
          </span>
        </div>
        <span
          className={`shrink-0 mt-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
            ? "rotate-45 bg-neon-blue border-transparent text-white shadow-lg shadow-neon-blue/40"
            : "border-white/15 text-white/55 group-hover:border-neon-blue/40 group-hover:text-neon-blue"
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
            <p className="pb-6 pl-[3.25rem] pr-12 body-base text-white/65 leading-relaxed">
              {a}
            </p>
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
const [activeStep, setActiveStep] = useState<number>(0);
const [activeIndex, setActiveIndex] = useState<number>(0);

// Filtered services
const visibleServices =
  activeFilter === "all"
    ? services
    : services.filter((s) => s.category === activeFilter);

// Split for left/right layout
const middle = Math.ceil(visibleServices.length / 2);
const leftServices = visibleServices.slice(0, middle);
const rightServices = visibleServices.slice(middle);

// Safe active service (NEVER crashes)
const activeService = visibleServices?.[activeIndex] ?? visibleServices?.[0];

// Other UI data
const step = processSteps[activeStep];

  return (
    <>
      {/* ───────── Hero — editorial split ───────── */}
      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <motion.div
          className="absolute top-1/4 right-0 w-[520px] h-[520px] bg-neon-blue/[0.10] rounded-full blur-[140px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-neon-purple/[0.10] rounded-full blur-[140px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <div className="noise-overlay" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* LEFT — Copy + CTAs + Trust */}
            <AnimatedSection className="lg:col-span-7">
              <div className="surface-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                  Now booking · 9 capabilities
                </span>
              </div>

              <h1
                className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
                style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.75rem)" }}
              >
                Senior engineering,{" "}
                <span className="gradient-text glow-text">
                  across the stack.
                </span>
              </h1>

              <p className="mt-7 body-lead text-gray-400 max-w-xl">
                From product strategy to launch and growth — design,
                engineering, AI, and ops, delivered as one cohesive engagement.
                Pick one capability, or weave several together.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  Browse services
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </div>

              {/* Trust strip */}
              <div className="surface-divider mt-10 lg:mt-12 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-5">
                {heroStats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + i * 0.07,
                    }}
                  >
                    <p className="text-2xl lg:text-3xl font-bold gradient-text tabular-nums tracking-tight">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[10.5px] text-gray-400 tracking-[0.16em] uppercase font-semibold">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* RIGHT — Service tile grid */}
            <AnimatedSection
              direction="right"
              className="lg:col-span-5"
              delay={0.15}
            >
              <div className="relative">
                {/* Soft accent backdrop */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 rounded-[2rem] blur-3xl"
                  animate={{ opacity: [0.55, 0.85, 0.55] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Glass panel */}
                <div className="surface-panel relative rounded-3xl border p-4 lg:p-5">
                  {/* Top label */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/55">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                      Capabilities
                    </div>
                    <span className="surface-pill font-mono text-[10px] text-white/45 tracking-wider px-2 py-0.5 rounded-full border">
                      09 / 09
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 lg:gap-3">
                    {services.map((s, i) => (
                      <HeroTile key={s.slug} service={s} index={i} />
                    ))}
                  </div>

                  {/* Bottom hint */}
                  <p className="mt-4 text-center text-[10.5px] text-white/45 tracking-wide">
                    Tap any tile below — or scroll for the full catalog.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────── Catalog (filterable) ───────── */}
      <section
        id="services-grid"
        className="py-20 lg:py-24 relative overflow-hidden bg-light-accent"
      >
        {/* ───────── BACKGROUND GLOW ───────── */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[140px]" />
        </div>

        {/* noise overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* ───────── HEADER ───────── */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-14">
            <AnimatedSection className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur border border-black/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-deep-blue/60">
                  Services Overview
                </p>
              </div>

              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-deep-blue leading-[1.1]">
                Find the capability that fits{" "}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  your problem
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="text-deep-blue/60 max-w-md lg:ml-auto leading-relaxed">
                Filter by intent. Each service opens a live preview with deliverables,
                timelines, stack details, and real execution outcomes.
              </p>
            </AnimatedSection>
          </div>

          {/* ───────── MOBILE ───────── */}
          <div className="xl:hidden space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                layout
                className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${service.accent}15`,
                      color: service.accent,
                    }}
                  >
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-deep-blue">
                      {service.title}
                    </h3>
                    <p className="text-xs text-deep-blue/50 mt-1">
                      {service.tagline}
                    </p>
                  </div>

                  <svg
                    className={`w-5 h-5 transition-transform ${activeIndex === i ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-black/5">
                        <p className="mt-4 text-sm text-deep-blue/70 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-2.5 py-1 text-xs rounded-full bg-deep-blue/[0.05] text-deep-blue/70"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-neon-blue"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* ───────── DESKTOP LAYOUT ───────── */}
          {/* ───────── DESKTOP LAYOUT ───────── */}
<div className="hidden xl:block">
  <div className="grid grid-cols-[300px_1fr_300px] items-start gap-6">

    {/* LEFT */}
    <div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-deep-blue/30 mb-6">
        Build · Design
      </p>

      <div className="space-y-3">
        {leftServices.map((service, i) => {
          const isActive = activeIndex === i;

          return (
            <button
              key={service.slug}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all
              ${
                isActive
                  ? "bg-white shadow-xl shadow-black/5"
                  : "hover:bg-white/50"
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${service.accent}15`,
                  color: service.accent,
                }}
              >
                {service.icon}
              </div>

              <div className="flex-1 text-left">
                <h3 className="font-semibold text-deep-blue">
                  {service.title}
                </h3>

                <p className="text-sm text-deep-blue/40">
                  {service.tagline}
                </p>
              </div>

              <span className="text-xs text-deep-blue/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </div>

    {/* CENTER */}
    <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0D6C74] via-[#08585E] to-[#063A3F] p-8 mt-10">

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={services[activeIndex].slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 h-full flex flex-col"
        >

          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white" />

              <p className="text-[11px] tracking-[0.3em] uppercase text-white/80">
                Build
              </p>
            </div>

            <div className="px-3 py-1 rounded-full border border-white/20 text-white/70 text-xs">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </div>

          </div>

          <div className="flex-1 flex items-center justify-center py-4">

            <div className="relative">

              <div className="absolute -inset-6 border border-white/10 rounded-full" />

              <div className="absolute -inset-12 border border-white/5 rounded-full" />

              <div className="w-24 h-24 rounded-[24px] bg-white/15 border border-white/20 backdrop-blur-xl flex items-center justify-center">

                <div className="text-white scale-[1.6]">
                  {services[activeIndex].icon}
                </div>

              </div>

            </div>

          </div>

          <div>

            <p className="text-[11px] tracking-[0.25em] uppercase text-white/60 mb-3">
              {services[activeIndex].tagline}
            </p>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              {services[activeIndex].title}
            </h3>

            <p className="text-sm text-white/75 max-w-xl leading-relaxed mb-6">
              {services[activeIndex].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {services[activeIndex].capabilities
                .slice(0, 5)
                .map((cap) => (
                  <span
                    key={cap}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs"
                  >
                    {cap}
                  </span>
                ))}
            </div>

            <Link
              href={`/services/${services[activeIndex].slug}`}
              className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#063A3F] shadow-lg shadow-black/10 transition-all hover:gap-3 hover:bg-white/90"
            >
              Learn More
              <svg
                className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>

          </div>

        </motion.div>
      </AnimatePresence>

    </div>

    {/* RIGHT */}
    <div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-deep-blue/30 mb-6 text-right">
        Grow · Ops
      </p>

      <div className="space-y-3">
        {rightServices.map((service, i) => {
          const realIndex = i + leftServices.length;
          const isActive = activeIndex === realIndex;

          return (
            <button
              key={service.slug}
              onClick={() => setActiveIndex(realIndex)}
              onMouseEnter={() => setActiveIndex(realIndex)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all
              ${
                isActive
                  ? "bg-white shadow-xl shadow-black/5"
                  : "hover:bg-white/50"
              }`}
            >
              <div className="flex-1 text-right">
                <h3 className="font-semibold text-deep-blue">
                  {service.title}
                </h3>

                <p className="text-sm text-deep-blue/40">
                  {service.tagline}
                </p>
              </div>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${service.accent}15`,
                  color: service.accent,
                }}
              >
                {service.icon}
              </div>

              <span className="text-xs text-deep-blue/25">
                {String(realIndex + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </div>

  </div>
</div>
        </div>
      </section>

      {/* ───────── Process (interactive timeline) ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <motion.div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.08] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
            <AnimatedSection className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neon-blue">
                  How we work
                </p>
              </div>
              <h2 className="h-section text-white">
                From kickoff to launch in{" "}
                <span className="gradient-text">four clear stages.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Transparent timelines, weekly demos, fixed quotes after
                discovery. No surprise invoices, no scope creep.
              </p>
            </AnimatedSection>
          </div>

          {/* Stepper bar */}
          <AnimatedSection delay={0.15}>
            <div className="surface-panel relative rounded-2xl border p-4 lg:p-5">
              {/* Connecting line */}
              <div className="surface-divider absolute inset-x-5 top-1/2 -translate-y-1/2 h-px border-t border-dashed pointer-events-none" />

              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
                {processSteps.map((s, i) => {
                  const isActive = activeStep === i;
                  return (
                    <motion.button
                      key={s.number}
                      onMouseEnter={() => setActiveStep(i)}
                      onFocus={() => setActiveStep(i)}
                      onClick={() => setActiveStep(i)}
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="group relative flex items-center gap-3 h-14 px-3 lg:px-4 rounded-xl border text-left transition-colors duration-300"
                      style={{
                        backgroundColor: isActive
                          ? s.accent
                          : `${s.accent}12`,
                        borderColor: isActive
                          ? s.accent
                          : `${s.accent}38`,
                        boxShadow: isActive
                          ? `0 16px 36px - 14px ${s.accent}90, inset 0 1px 0 rgba(255, 255, 255, 0.18)`
                          : "none",
                      }}
                    >
                      <span
                        className={`shrink - 0 font - mono text - [11px] font - bold tracking - wider ${isActive ? "text-white/85" : "text-white/45"
                          }`}
                      >
                        {s.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text - sm font - bold tracking - tight truncate ${isActive ? "text-white" : "text-white/80"
                            }`}
                        >
                          {s.title}
                        </p>
                        <p
                          className={`text - [10.5px] truncate ${isActive ? "text-white/70" : "text-white/45"
                            }`}
                        >
                          {s.duration}
                        </p>
                      </div>

                      {isActive && (
                        <motion.span
                          layoutId="step-active-dot"
                          className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: s.accent,
                            boxShadow: `0 0 14px ${s.accent}`,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Detail panel — updates on hover */}
          <div className="mt-7 lg:mt-9 grid lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{
                        backgroundColor: step.accent,
                        boxShadow: `0 14px 32px - 10px ${step.accent}90, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                      }}
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                        style={{ color: step.accent }}
                      >
                        Stage {step.number} · {step.duration}
                      </p>
                      <h3 className="mt-0.5 text-2xl lg:text-3xl font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-gray-400 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${step.number} - deliverables`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="surface-panel relative rounded-2xl border p-5 lg:p-6 overflow-hidden"
                >
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-25"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-white/55">
                      What happens here
                    </p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {step.deliverables.map((d, i) => (
                        <motion.li
                          key={d}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1 + i * 0.05,
                          }}
                          className="flex items-center gap-2 text-sm text-white/75"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: step.accent }}
                          />
                          <span className="truncate">{d}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Case studies ───────── */}
      <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <AnimatedSection className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neon-purple">
                  Recent work
                </p>
              </div>
              <h2 className="h-section text-deep-blue">
                Outcomes, not{" "}
                <span className="gradient-text-dark">case-study fluff.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-deep-blue/65 max-w-md lg:ml-auto">
                A few engagements we shipped recently — what we built, and the
                metric that mattered.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.client} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="group relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden p-6 lg:p-7 flex flex-col transition-shadow duration-500 hover:shadow-[0_28px_56px_-18px_var(--card-glow)]"
                  style={
                    {
                      "--card-glow": `${cs.accent}66`,
                    } as React.CSSProperties
                  }
                >
                  {/* Top accent strip */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear - gradient(90deg, ${cs.accent} 0 %, ${cs.accent}00 100 %)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: cs.accent }}
                  />

                  {/* Industry chip + index */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border"
                      style={{
                        color: cs.accent,
                        borderColor: `${cs.accent}40`,
                        backgroundColor: `${cs.accent}0F`,
                      }}
                    >
                      {cs.industry}
                    </span>
                    <span className="font-mono text-[10px] text-deep-blue/40 tracking-wider">
                      Case · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-deep-blue tracking-tight">
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
                    <span className="text-deep-blue/55 text-xs leading-snug">
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

      {/* ───────── FAQ ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/[0.06] rounded-full blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
            <AnimatedSection className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neon-blue">
                  FAQ
                </p>
              </div>
              <h2 className="h-section text-white">
                Questions,{" "}
                <span className="gradient-text">answered.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
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
          </div>

          <AnimatedSection delay={0.15}>
            <div className="surface-panel rounded-2xl border overflow-hidden">
              {faqs.map((f, i) => (
                <FaqRow
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
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
