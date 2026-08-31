"use client";

import { useState, useCallback, useMemo } from "react";
import {
  Users,
  Clock,
  Palette,
  UserCog,
  UsersRound,
  TrendingUp,
  ArrowRight,
  Code,
  Sparkles,
  Target,
  Layers,
  CheckCircle2,
  Plus,
  Gauge,
  Sliders,
  Rocket,
  Wrench,
  Coins,
  ArrowUpDown,
  Code2,
  GitBranch,
  MessageCircle,
  Zap,
  Award
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { ServiceArt } from "@/components/ui/ServiceArt";

// ============================================================================
// CONSTANTS & DATA
// ============================================================================

const roleOptions = [
  { id: "developer", label: "Developer", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "designer", label: "Designer", icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "manager", label: "Manager", icon: <UserCog className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "consultant", label: "Consultant", icon: <UsersRound className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "finance", label: "Finance", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /> }
];

const INITIAL_TECH_OPTIONS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vue", "Svelte",
  "Astro", "Remix", "Vite", "Storybook", "Tanstack Query", "tRPC",
  "Node.js", "Python", "Go", "Rust", "Java", "Kotlin",
  "Ruby on Rails", ".NET", "Elixir", "GraphQL", "REST APIs",
  "FastAPI", "Express", "NestJS", "Django",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
  "Cassandra", "Elasticsearch", "ClickHouse", "Snowflake",
  "BigQuery", "Supabase", "Firebase", "Neo4j", "DuckDB",
  "SQLite", "Cosmos DB",
  "AWS", "GCP", "Azure", "Vercel", "Cloudflare",
  "Kubernetes", "Docker", "Terraform", "Pulumi",
  "GitHub Actions", "GitLab CI", "Argo CD", "Nginx",
  "Anthropic", "OpenAI", "Llama", "LangGraph", "LangChain",
  "LlamaIndex", "Pinecone", "Weaviate", "Chroma",
  "PyTorch", "TensorFlow", "Hugging Face", "Modal", "Replicate",
  "Swift", "Kotlin", "React Native", "Expo", "Flutter",
  "Ionic", "Capacitor",
  "Figma", "Framer", "Rive", "After Effects", "Lottie",
  "Principle", "Spline",
  "Datadog", "Sentry", "Grafana", "OpenTelemetry",
  "Prometheus", "New Relic", "PostHog", "Mixpanel", "Amplitude"
];

const comparisonData = {
  metrics: [
    {
      metric: "Flexibility",
      icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />,
      augmentation: "Scale talent up or down as project needs change.",
      outsourcing: "Scale around defined scopes and contracts.",
      hiring: "Headcount is difficult to adjust quickly."
    },
    {
      metric: "Control",
      icon: <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />,
      augmentation: "Keep direct control over people, priorities, and processes.",
      outsourcing: "The provider manages delivery and execution.",
      hiring: "Full control, but with internal management overhead."
    },
    {
      metric: "Speed",
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      augmentation: "Add experienced talent without lengthy hiring cycles.",
      outsourcing: "Launch with a ready-made external team.",
      hiring: "Recruitment and onboarding can take weeks or months."
    },
    {
      metric: "Expertise",
      icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />,
      augmentation: "Bring in specialized skills exactly when you need them.",
      outsourcing: "Access a broader outsourced delivery team.",
      hiring: "Develop expertise through permanent employees."
    },
    {
      metric: "Cost",
      icon: <Coins className="w-4 h-4 sm:w-5 sm:h-5" />,
      augmentation: "Pay for the capacity and expertise you actually need.",
      outsourcing: "Pay for an agreed project or service scope.",
      hiring: "Commit to ongoing salaries, benefits, and overhead."
    }
  ]
};

const benefits = [
  {
    icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Seamless Team Integration",
    description: "Our professionals adapt to your tools, workflows, and processes for smooth collaboration and faster productivity."
  },
  {
    icon: <ArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Flexible Scaling Models",
    description: "Scale resources up or down based on your project needs without long-term hiring commitments."
  },
  {
    icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Time-Zone Aligned Availability",
    description: "Work with teams aligned to your hours for responsive communication and uninterrupted progress."
  },
  {
    icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Communication-Ready Professionals",
    description: "Get experts who provide clear updates, structured communication, and seamless team collaboration."
  },
  {
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Access to Specialized Expertise",
    description: "Access skilled professionals across software, AI/ML, QA, UI/UX, and other technical domains."
  },
  {
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Reduced Hiring Complexity",
    description: "Skip lengthy hiring cycles and access proven talent faster while focusing on business growth."
  }
];

const statsData = [
  { value: "20+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5-10 days", label: "Average Matching Time" },
  { value: "10+", label: "Countries Served" }
];

const service = {
  offerings: [
    {
      category: "Workforce Planning & Capability Assessment",
      description: "Identify skill gaps, project requirements, and team capacity needs to determine the optimal augmentation strategy.",
      items: [
        "Resource requirement analysis",
        "Skills gap assessment",
        "Team capacity planning",
        "Engagement model recommendations",
      ],
    },
    {
      category: "Talent Sourcing & Technical Vetting",
      description: "Source and evaluate professionals based on technical expertise, industry experience, and organizational fit.",
      items: [
        "Technical screening",
        "Skills assessments",
        "Interview coordination",
        "Candidate shortlisting",
      ],
    },
    {
      category: "Team Integration & Operational Alignment",
      description: "Ensure augmented resources integrate effectively into existing teams, workflows, and delivery environments.",
      items: [
        "Onboarding support",
        "Workflow integration",
        "Tooling and access coordination",
        "Team alignment workshops",
      ],
    },
    {
      category: "Delivery Support & Performance Management",
      description: "Maintain productivity, accountability, and delivery quality throughout the engagement lifecycle.",
      items: [
        "Performance monitoring",
        "Resource management",
        "Delivery oversight",
        "Engagement reviews",
      ],
    },
    {
      category: "Flexible Team Scaling",
      description: "Adapt team structures and resource allocation as project demands evolve.",
      items: [
        "Team expansion support",
        "Resource reallocation",
        "Multi-disciplinary team formation",
        "Long-term scaling strategies",
      ],
    },
  ],
};

// Fixed: Properly defined meta and slug variables
const slug = "staff-augmentation";

const meta = {
  deliverables: [
    "Vetted Technical Talent",
    "Rapid Team Integration",
    "Flexible Scaling Models",
    "Delivery Continuity & Support",
  ],
  idealFor: ["Growing Engineering Teams", "Enterprise Transformation", "High-Demand Environments"],
};

// Options for "how many positions" - removed "5+ Positions"
const positionCountOptions = ["1 Position", "2-4 Positions", "Custom"];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HireTalent() {
  const [techOptions, setTechOptions] = useState(INITIAL_TECH_OPTIONS);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedRoleCount, setSelectedRoleCount] = useState("");
  const [customRoleCount, setCustomRoleCount] = useState("");
  const [selectedTimeCommitment, setSelectedTimeCommitment] = useState("");
  const [showCustomTech, setShowCustomTech] = useState(false);
  const [customTech, setCustomTech] = useState("");
  const [activeOffering, setActiveOffering] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const accent = "#1565c0";

  const handleRoleToggle = useCallback((roleId: string) => {
    setSelectedRoles(prev =>
      prev.includes(roleId)
        ? prev.filter(id => id !== roleId)
        : [...prev, roleId]
    );
  }, []);

  const handleTechToggle = useCallback((tech: string) => {
    setSelectedTech(prev => {
      if (prev.includes(tech)) {
        return prev.filter(t => t !== tech);
      }
      return [...prev, tech];
    });
  }, []);

  const handleAddCustomTech = useCallback(() => {
    const tech = customTech.trim();
    if (!tech) {
      setError("Please enter a technology name");
      return;
    }

    const exists = techOptions.some(
      t => t.toLowerCase() === tech.toLowerCase()
    );

    if (exists) {
      setError("This technology is already in the list");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setTechOptions(prev => [...prev, tech]);
    setSelectedTech(prev => [...prev, tech]);
    setCustomTech("");
    setShowCustomTech(false);
    setError(null);
  }, [customTech, techOptions]);

  // Resolves the current "position count" value to a final string, accounting for the Custom input.
  const resolvedRoleCount = selectedRoleCount === "Custom"
    ? (customRoleCount.trim() ? `${customRoleCount.trim()} Positions` : "")
    : selectedRoleCount;

  const getSelectedCount = useCallback(() => {
    let count = 0;
    if (selectedRoles.length > 0) count++;
    if (selectedTech.length > 0) count++;
    if (resolvedRoleCount) count++;
    if (selectedTimeCommitment) count++;
    return count;
  }, [selectedRoles, selectedTech, resolvedRoleCount, selectedTimeCommitment]);

  // Form is only "complete" once every step has a real value — this gates the Submit button.
  const isFormComplete =
    resolvedRoleCount !== "" &&
    selectedTimeCommitment !== "" &&
    selectedRoles.length > 0 &&
    selectedTech.length > 0;

  const buildContactUrl = useCallback(() => {
    const params = new URLSearchParams();

    if (resolvedRoleCount) {
      params.append('positions', resolvedRoleCount);
    }

    if (selectedTimeCommitment) {
      params.append('commitment', selectedTimeCommitment);
    }

    if (selectedRoles.length > 0) {
      const roleNames = selectedRoles.map(id =>
        roleOptions.find(r => r.id === id)?.label || id
      );
      params.append('roles', roleNames.join(', '));
    }

    if (selectedTech.length > 0) {
      params.append('tech', selectedTech.join(', '));
    }

    params.append('from', 'hire-talent');

    return `/contact?${params.toString()}`;
  }, [resolvedRoleCount, selectedTimeCommitment, selectedRoles, selectedTech]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && showCustomTech) {
      handleAddCustomTech();
    }
    if (e.key === 'Escape') {
      setShowCustomTech(false);
      setCustomTech("");
      setError(null);
    }
  }, [showCustomTech, handleAddCustomTech]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <h1 className="mt-6 h-display text-white">
                    Staff <span className="gradient-text">Augmentation</span>
                  </h1>
                <p className="mt-6 body-lead text-gray-400">
                  Staff augmentation for extending IT teams with vetted specialists and dedicated squads to increase delivery capacity, close skill gaps, and accelerate execution. Resources are seamlessly integrated into your ecosystem, aligned with your workflows, technology stack, and delivery needs for consistent output.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold tracking-wide text-sm transition-all duration-300"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80`,
                      }}
                    >
                      Book a discovery call
                    </Link>
                  </motion.span>
                </div>

                {/* Meta row */}
                <div className="mt-10">
                  <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 pb-5 border-b border-white/[0.08]">
                    {/* Timeline */}
                    <div className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accent}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Timeline
                        </p>
                        <p className="mt-1 text-white/90 text-base font-semibold">
                          1-4 weeks to onboard
                        </p>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="flex items-start gap-4">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accent}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Team Size
                        </p>
                        <p className="mt-1 text-white/90 text-sm font-semibold ">
                          Dedicated Specialists · Delivery Leads · Cross-Functional Teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            <AnimatedSection direction="right" className="lg:col-span-5 mt-6">
              <div
                className="relative w-full overflow-hidden rounded-2xl h-[300px] sm:h-[380px] lg:h-[450px] min-h-[260px]"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
                }}
              >
                <ServiceArt slug={slug} />
              </div>
            </AnimatedSection>
          </div>

          {/* Deliverables — FULL WIDTH */}
          <div className="mt-14 w-full pb-5 border-b border-white/[0.08]">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {meta.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: accent }}
                  >
                    <svg
                      className="h-3 w-3 text-[#ffffff]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-gray-300 force-gray-text">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ───────── Serivce banner ───────── */}
      <section className="border-y bg-service-banner">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-6 py-5 sm:py-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">

            {/* Card 1 */}
            <div className="stat-card flex items-center gap-3 sm:gap-4 rounded-xl p-3 sm:p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl shrink-0">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="banner-title text-xl sm:text-3xl font-bold leading-none">
                  Top 1%
                </span>

                <span className="banner-label mt-1 text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] leading-tight">
                  Senior Engineers
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stat-card flex items-center gap-3 sm:gap-4 rounded-xl p-3 sm:p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl shrink-0">
                <Target className="h-5 w-5 sm:h-6 sm:w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="banner-title text-xl sm:text-3xl font-bold leading-none">
                  9 / 10
                </span>

                <span className="banner-label mt-1 text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] leading-tight">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stat-card flex items-center gap-3 sm:gap-4 rounded-xl p-3 sm:p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="banner-title text-xl sm:text-3xl font-bold leading-none">
                  48h
                </span>

                <span className="banner-label mt-1 text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] leading-tight">
                  Discovery → SOW
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="stat-card flex items-center gap-3 sm:gap-4 rounded-xl p-3 sm:p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl shrink-0">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="banner-title text-xl sm:text-3xl font-bold leading-none">
                  96%
                </span>

                <span className="banner-label mt-1 text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] leading-tight">
                  Client Retention
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== HIRING FORM SECTION ===== */}
      <section className="h-section layout-section relative overflow-hidden bg-light-accent">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 md:gap-8 lg:gap-12 items-end mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                    Find Your Perfect Match
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue">
                  Getting the Right <span className="gradient-text-dark">Team Starts Here</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-deep-blue/60 max-w-md lg:ml-auto">
                  Let's Define the Team Your Project Needs
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#0a1628] backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="absolute -top-16 sm:-top-20 -right-16 sm:-right-20 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-neon-blue/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-16 sm:-bottom-20 -left-16 sm:-left-20 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-neon-purple/10 rounded-full blur-[100px]" />

            <div className="relative mb-6 sm:mb-8 md:mb-10 pb-6 sm:pb-8 border-b border-white/5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-bold text-xs sm:text-sm">
                    {getSelectedCount() + 1}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">Building Your Profile</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Complete all steps to get matched</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[10px] text-gray-400 sm:text-xs ">
                    <span className="font-medium  text-neon-blue">
                      {getSelectedCount()}
                    </span>{" "}
                    of 4 selections made
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Step 1: Role Count — 3 options with Custom inline */}
              <div className="group">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">How many positions are you looking to fill?</h3>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3" role="radiogroup" aria-label="Number of positions">
                  {positionCountOptions.map((option) => {
                    // Check if this is the Custom option and if it's selected
                    const isCustomSelected = option === "Custom" && selectedRoleCount === "Custom";

                    return (
                      <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={selectedRoleCount === option}
                        onClick={() => {
                          // If clicking the same Custom button that's already selected, deselect it
                          if (option === "Custom" && selectedRoleCount === "Custom") {
                            setSelectedRoleCount("");
                            setCustomRoleCount("");
                            return;
                          }

                          setSelectedRoleCount(option);
                          if (option === "Custom") {
                            // Focus the input after it appears
                            setTimeout(() => {
                              const input = document.getElementById("custom-position-count");
                              if (input) (input as HTMLInputElement).focus();
                            }, 10);
                          } else {
                            setCustomRoleCount("");
                          }
                        }}
                        className={`min-h-[44px] px-2 sm:px-4 py-3 rounded-xl border transition-all duration-300 text-[11px] sm:text-sm leading-tight ${selectedRoleCount === option
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                          } ${isCustomSelected ? "relative" : ""}`}
                      >
                        {isCustomSelected ? (
                          <div className="flex items-center justify-center w-full">
                            <input
                              id="custom-position-count"
                              type="number"
                              min={1}
                              placeholder="#"
                              className="w-full bg-transparent text-center text-neon-blue focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              autoFocus
                              value={customRoleCount}
                              onChange={(e) => setCustomRoleCount(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Escape") {
                                  setSelectedRoleCount("");
                                  setCustomRoleCount("");
                                }
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  // Move focus to next field or submit
                                  const nextField = document.querySelector('[role="radiogroup"]');
                                  if (nextField) {
                                    // Find the next focusable element
                                    const focusable = nextField.parentElement?.querySelector('button:not([aria-checked="true"])');
                                    if (focusable && focusable instanceof HTMLElement) {
                                      focusable.focus();
                                    }
                                  }
                                }
                              }}
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Custom number of positions"
                              style={{ width: customRoleCount ? `${Math.max(2, customRoleCount.length + 1)}ch` : '2ch' }}
                            />
                          </div>
                        ) : (
                          option
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedRoleCount === "Custom" && !customRoleCount && (
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-neon-blue/70">
                    Type a number...
                  </p>
                )}

                {resolvedRoleCount && selectedRoleCount !== "Custom" && (
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-neon-blue">
                    {resolvedRoleCount} selected
                  </p>
                )}
              </div>

              {/* Step 2: Time Commitment */}
              <div className="group">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">What time commitment do you need?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" role="radiogroup" aria-label="Time commitment">
                  {["Full-Time", "Part-Time", "Internship", "Contract"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={selectedTimeCommitment === option}
                      onClick={() => setSelectedTimeCommitment(option)}
                      className={`min-h-[44px] px-3 sm:px-4 py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${selectedTimeCommitment === option
                        ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Roles & Technologies */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* Roles */}
                <div className="group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white">Select required roles</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {roleOptions.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        aria-pressed={selectedRoles.includes(role.id)}
                        onClick={() => handleRoleToggle(role.id)}
                        className={`min-h-[40px] flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${selectedRoles.includes(role.id)
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                          }`}
                      >
                        {role.icon}
                        {role.label}
                        {selectedRoles.includes(role.id) && (
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neon-blue" />
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedRoles.length > 0 && (
                    <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-neon-blue">
                      {selectedRoles.length} role{selectedRoles.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="group">
                  <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                        <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-semibold text-white">Technologies</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCustomTech((prev) => !prev)}
                      className="min-h-[36px] flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 hover:border-neon-blue/30 text-[10px] sm:text-xs text-gray-400 hover:text-neon-blue transition-all"
                      aria-expanded={showCustomTech}
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Add Custom
                    </button>
                  </div>

                  {showCustomTech && (
                    <div className="flex flex-col sm:flex-row gap-2 mb-3 sm:mb-4" onKeyDown={handleKeyDown}>
                      <input
                        type="text"
                        value={customTech}
                        onChange={(e) => setCustomTech(e.target.value)}
                        placeholder="Enter technology name"
                        className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue text-sm"
                        aria-label="Custom technology name"
                        aria-invalid={!!error}
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomTech}
                        className="min-h-[44px] px-3 sm:px-4 py-2.5 rounded-lg bg-neon-blue text-white font-medium hover:bg-neon-purple transition-all text-sm"
                      >
                        Add
                      </button>
                    </div>
                  )}

                  {error && (
                    <p className="text-red-400 text-xs sm:text-sm mb-2" role="alert">
                      {error}
                    </p>
                  )}

                  <div
                    className="flex flex-wrap gap-1.5 sm:gap-2 max-h-40 sm:max-h-48 overflow-y-auto custom-scrollbar pr-1"
                    role="list"
                    aria-label="Selected technologies"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    {techOptions.map((tech) => {
                      const selected = selectedTech.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          role="listitem"
                          aria-pressed={selected}
                          onClick={() => handleTechToggle(tech)}
                          className={`min-h-[36px] flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-lg border transition-all duration-300 text-[11px] sm:text-sm ${selected
                            ? "border-neon-blue bg-neon-blue/10 text-neon-blue"
                            : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                            }`}
                        >
                          {tech}
                          {selected && <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                        </button>
                      );
                    })}
                  </div>
                  {selectedTech.length > 0 && (
                    <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-neon-blue">
                      {selectedTech.length} technology{selectedTech.length > 1 ? 'ies' : ''} selected
                    </p>
                  )}
                </div>
              </div>

              {/* Step 4: Summary & CTA */}
              <div className="pt-4 sm:pt-5 md:pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-white/5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs sm:text-sm">Your Dream Team is Waiting</p>
                      <p className="text-gray-400 text-[10px] sm:text-xs">
                        {isFormComplete
                          ? "All set — we'll find the best talent for you"
                          : `Complete all 4 steps to continue (${getSelectedCount()}/4)`}
                      </p>
                    </div>
                  </div>
                  {isFormComplete ? (
                    <Link href={buildContactUrl()} className="w-full sm:w-auto">
                      <button
                        type="button"
                        className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-neon-blue rounded-xl text-xs sm:text-sm font-semibold text-white hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                        aria-label="Submit hiring request"
                      >
                        Submit
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      title="Complete all steps above to submit"
                      className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-white/10 rounded-xl text-xs sm:text-sm font-semibold text-gray-500 cursor-not-allowed"
                    >
                      Submit
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED (INTERACTIVE OFFERINGS) ===== */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    What's Included
                  </span>
                </div>
              </div>

              <h2 className="mt-2 h-section max-w-2xl text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue">
                Talent & <span className="gradient-text-dark">Delivery Solutions</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:pl-8">
                <p className="body-base text-deep-blue/60 max-w-md text-sm sm:text-base">
                  A structured talent engagement framework designed to help organizations increase delivery capacity, reduce hiring friction, and maintain operational momentum across critical initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-5">
              <div
                className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;
                  return (
                    <button
                      key={offering.category}
                      onClick={() => setActiveOffering(i)}
                      className={`shrink-0 min-h-[44px] px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border
                  ${isActive
                          ? "text-white border-transparent"
                          : "text-deep-blue/70 bg-white/70 border-deep-blue/10"
                        }
                `}
                      style={{
                        backgroundColor: isActive ? accent : undefined,
                        boxShadow: isActive ? `0 8px 22px -8px ${accent}90` : "none"
                      }}
                    >
                      {offering.category}
                    </button>
                  );
                })}
              </div>

              <div className="hidden lg:flex flex-col gap-3">
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;
                  return (
                    <button
                      key={offering.category}
                      onMouseEnter={() => setActiveOffering(i)}
                      className={`group relative w-full text-left flex items-center gap-3 xl:gap-4 px-4 xl:px-5 py-3 xl:py-4 rounded-2xl overflow-hidden transition-all duration-300 border
                  ${isActive
                          ? "bg-[#0a1628] border-[#0a1628] shadow-lg"
                          : `bg-white/65 border-gray-200 lg:hover:bg-[#0a1628] lg:hover:border-[#0a1628] lg:hover:shadow-lg`
                        }
                `}
                      style={{ backdropFilter: "blur(8px)" }}
                    >
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-500"
                        style={{
                          height: isActive ? "60%" : "0%",
                          backgroundColor: accent
                        }}
                      />

                      <div
                        className={`relative w-10 h-10 xl:w-11 xl:h-11 rounded-xl flex items-center justify-center text-[12px] font-bold shrink-0
                    ${isActive
                            ? "text-white"
                            : `text-gray-700 lg:group-hover:text-white`
                          }
                  `}
                        style={{
                          backgroundColor: isActive ? accent : `${accent}15`
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="relative flex-1 min-w-0">
                        <p
                          className={`font-bold text-sm xl:text-base tracking-tight transition-colors duration-300
                      ${isActive
                              ? "text-white"
                              : `text-gray-900 lg:group-hover:text-white`
                            }
                    `}
                        >
                          {offering.category}
                        </p>
                        <p
                          className={`text-xs mt-0.5 truncate transition-colors duration-300
                      ${isActive
                              ? "text-white/70"
                              : `text-gray-500 lg:group-hover:text-white/70`
                            }
                    `}
                        >
                          {offering.items.length} deliverables included
                        </p>
                      </div>

                      <svg
                        className={`relative w-4 h-4 shrink-0 transition-all duration-300
                    ${isActive
                            ? "opacity-100 translate-x-0 text-white"
                            : `opacity-0 -translate-x-2 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 text-gray-400 lg:group-hover:text-white`
                          }
                  `}
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

                      {isActive && (
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl border"
                          style={{ borderColor: `${accent}50` }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                key={activeOffering}
                className="relative rounded-2xl p-5 sm:p-6 lg:p-8 shadow-2xl shadow-black/40 overflow-hidden
               min-h-[420px] sm:h-[400px] lg:h-[400px]"
                style={{
                  backgroundColor: "#0a1628",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)"
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl border"
                  style={{ borderColor: `${accent}50` }}
                />

                <div className="relative h-full flex flex-col">
                  <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] shrink-0">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{ color: accent, backgroundColor: `${accent}15` }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mr-2"
                        style={{ backgroundColor: accent }}
                      />
                      Capabilities Overview
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl sm:text-2xl lg:text-[1.875rem] font-bold tracking-tight leading-[1.15] text-white shrink-0">
                    {service.offerings[activeOffering].category}
                  </h3>

                  <p className="mt-3 leading-relaxed text-sm sm:text-[15px] text-gray-300 shrink-0">
                    {service.offerings[activeOffering].description}
                  </p>

                  {/* scrollable items area so extra items don't push the card taller */}
                  <div
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 content-start overflow-y-auto pr-1 scrollbar-hide"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    {service.offerings[activeOffering].items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        className="group relative flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/5 lg:hover:bg-white/10 lg:hover:border-white/[0.15] transition-all duration-300 p-4"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${accent}20` }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2.4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/80 leading-relaxed lg:group-hover:text-white transition-colors duration-300">
                            {item}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE SECTION ===== */}
      <section className="relative overflow-hidden layout-section border-t bg-section-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 md:gap-8 lg:gap-12 items-end mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-deep-blue/[0.1] backdrop-blur-sm mb-2 sm:mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  Why It Works
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Why Is <span className="gradient-text">Staff Augmentation</span> Better?
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-white/70 max-w-md lg:ml-auto">
                When you need more than hiring can provide but less than full outsourcing, staff augmentation gives you the flexibility to scale on your terms.
              </p>
            </div>
          </div>

          <div className="relative surface-panel rounded-2xl sm:rounded-3xl border overflow-hidden">
            {/* Mobile & small tablet: stacked comparison cards (no sideways scroll needed to compare) */}
            <div className="md:hidden divide-y divide-white/5">
              {comparisonData.metrics.map((item, index) => (
                <div key={index} className="p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {item.metric}
                    </span>
                  </div>
                  <div className="space-y-2 pl-0.5">
                    <div className="rounded-xl bg-neon-blue/5 border border-neon-blue/20 p-3">
                      <p className="text-[9px] uppercase tracking-wider text-neon-blue font-semibold mb-1">
                        Staff Augmentation
                      </p>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-blue flex-shrink-0 mt-0.5" />
                        <span className="text-white text-xs leading-relaxed">
                          {item.augmentation}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl p-3">
                      <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Outsourcing
                      </p>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-xs leading-relaxed">
                          {item.outsourcing}
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl p-3">
                      <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Traditional Hiring
                      </p>
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-xs leading-relaxed">
                          {item.hiring}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet & up: full comparison table */}
            <div className="hidden md:block relative overflow-x-auto">
              <table className="w-full text-left min-w-full">
                <thead>
                  <tr className="surface-divider">
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-white/5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-0.5 sm:w-1 h-3 sm:h-4 bg-neon-blue rounded-full" />
                        Metrics
                      </span>
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#0a1628]">
                      <span className="flex items-center text-[#ffffff] gap-1.5 sm:gap-2">
                        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neon-blue animate-pulse" />
                        Staff Augmentation
                      </span>
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-white/5">
                      Outsourcing
                    </th>
                    <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-white/5">
                      Traditional Hiring
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.metrics.map((item, index) => (
                    <tr
                      key={index}
                      className="group transition-colors hover:bg-white/5"
                    >
                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue flex-shrink-0">
                            {item.icon}
                          </div>
                          <span className="text-white font-medium text-xs sm:text-sm">
                            {item.metric}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-neon-blue/5 to-transparent">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-neon-blue flex-shrink-0 mt-0.5" />
                          <span className="text-white text-[11px] sm:text-xs md:text-sm leading-relaxed">
                            {item.augmentation}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white text-[11px] sm:text-xs md:text-sm leading-relaxed">
                            {item.outsourcing}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white text-[11px] sm:text-xs md:text-sm leading-relaxed">
                            {item.hiring}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TALENT AREAS SECTION ===== */}
      <section className="relative overflow-hidden layout-section bg-white border-t border-b border-white/10 flex items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Header - Compact */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8 lg:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    Talent Area
                  </span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-deep-blue leading-tight">
                Talent Areas {" "}
                <span className="gradient-text-dark">We Support</span>
              </h2>
            </div>
            <div className="lg:max-w-md">
              <p className="text-sm sm:text-base text-deep-blue/60">
                We provide specialized professionals across multiple disciplines
              </p>
            </div>
          </div>

          {/* Talent Grid - No Cards, Clean Minimal Design */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-4 sm:gap-y-5 md:gap-y-6">
            {/* Software Engineering */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Software Engineering</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Backend, frontend, full-stack, and systems engineering
              </p>
            </div>

            {/* Mobile Development */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Mobile Development</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Native iOS, Android, React Native, and Flutter
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">AI & Machine Learning</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                ML engineering, LLMs, NLP, and computer vision
              </p>
            </div>

            {/* Cloud & DevOps */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Cloud & DevOps</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                AWS, GCP, Azure, Kubernetes, and CI/CD
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">UI/UX Design</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Product design, user research, and design systems
              </p>
            </div>

            {/* Software Quality Assurance */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Quality Assurance</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Automated testing, manual QA, and performance testing
              </p>
            </div>

            {/* Project Management */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Project Management</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Agile, Scrum, Kanban, and hybrid delivery
              </p>
            </div>

            {/* Business Analysis */}
            <div className="group border-b-2 border-white/5 pb-3 sm:pb-4 hover:border-neon-blue/50 transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-deep-blue font-semibold text-xs sm:text-sm md:text-base">Business Analysis</span>
              </div>
              <p className="text-deep-blue/60 text-[10px] sm:text-xs leading-relaxed">
                Requirements, process mapping, and strategic analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="bg-light-accent layout-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 md:gap-8 lg:gap-12 items-end mb-6 sm:mb-8 md:mb-10 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-2 sm:mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  Why Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue">
                Why Choose<span className="gradient-text-dark"> Dev Inception?</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-deep-blue/60 max-w-md lg:ml-auto">
                Finding the right talent is only the first step. Dev Inception helps you integrate skilled professionals into your team, processes, and goals, enabling faster scaling and confident project delivery.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-deep-blue/10 transition-all duration-300 hover:border-neon-blue/30 hover:shadow-xl hover:shadow-neon-blue/5"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform mb-2 sm:mb-3 md:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-deep-blue font-semibold mb-1 sm:mb-1.5 md:mb-2 text-sm sm:text-base md:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-deep-blue/70 text-xs sm:text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <CTABanner
        eyebrow="Start building your team"
        heading={
          <>
            Ready to hire{" "}
            <span className="text-neon-blue">Exceptional Talent?</span>
          </>
        }
        description="Scale your team effortlessly while having a trusted partner supporting you at every step."
        primaryLabel="Start Hiring"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="#benefits"
      />
    </>
  );
}