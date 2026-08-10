"use client";

import { useState } from "react";
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
  Zap
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

const roleOptions = [
  { id: "developer", label: "Developer", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "designer", label: "Designer", icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "manager", label: "Manager", icon: <UserCog className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "consultant", label: "Consultant", icon: <UsersRound className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { id: "finance", label: "Finance", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /> }
];

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

const stats = [
  { value: "20+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5-10 days", label: "Average Matching Time" },
  { value: "10+", label: "Countries Served" }
];

const INITIAL_TECH_OPTIONS = [
  // Frontend
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vue", "Svelte",
  "Astro", "Remix", "Vite", "Storybook", "Tanstack Query", "tRPC",

  // Backend
  "Node.js", "Python", "Go", "Rust", "Java", "Kotlin",
  "Ruby on Rails", ".NET", "Elixir", "GraphQL", "REST APIs",
  "FastAPI", "Express", "NestJS", "Django",

  // Databases
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
  "Cassandra", "Elasticsearch", "ClickHouse", "Snowflake",
  "BigQuery", "Supabase", "Firebase", "Neo4j", "DuckDB",
  "SQLite", "Cosmos DB",

  // Cloud & Infra
  "AWS", "GCP", "Azure", "Vercel", "Cloudflare",
  "Kubernetes", "Docker", "Terraform", "Pulumi",
  "GitHub Actions", "GitLab CI", "Argo CD", "Nginx",

  // AI / ML
  "Anthropic", "OpenAI", "Llama", "LangGraph", "LangChain",
  "LlamaIndex", "Pinecone", "Weaviate", "Chroma",
  "PyTorch", "TensorFlow", "Hugging Face", "Modal", "Replicate",

  // Mobile
  "Swift", "Kotlin", "React Native", "Expo", "Flutter",
  "Ionic", "Capacitor",

  // Design
  "Figma", "Framer", "Rive", "After Effects", "Lottie",
  "Principle", "Spline",

  // Observability
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

export default function HireTalent() {
  const [techOptions, setTechOptions] = useState(INITIAL_TECH_OPTIONS);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedRoleCount, setSelectedRoleCount] = useState("");
  const [selectedTimeCommitment, setSelectedTimeCommitment] = useState("");
  const [showCustomTech, setShowCustomTech] = useState(false);
  const [customTech, setCustomTech] = useState("");

  const handleAddCustomTech = () => {
    const tech = customTech.trim();
    if (!tech) return;
    const exists = techOptions.some((t) => t.toLowerCase() === tech.toLowerCase());
    if (!exists) {
      setTechOptions((prev) => [...prev, tech]);
    }
    setSelectedTech((prev) => prev.includes(tech) ? prev : [...prev, tech]);
    setCustomTech("");
    setShowCustomTech(false);
  };

  const handleTechToggle = (tech: string) => {
    const isSelected = selectedTech.includes(tech);
    if (isSelected) {
      setSelectedTech((prev) => prev.filter((t) => t !== tech));
      if (!INITIAL_TECH_OPTIONS.includes(tech)) {
        setTechOptions((prev) => prev.filter((t) => t !== tech));
      }
    } else {
      setSelectedTech((prev) => [...prev, tech]);
    }
  };

  const getSelectedCount = () => {
    let count = 0;
    if (selectedRoles.length > 0) count++;
    if (selectedTech.length > 0) count++;
    if (selectedRoleCount) count++;
    if (selectedTimeCommitment) count++;
    return count;
  };

  const buildContactUrl = () => {
    const params = new URLSearchParams();

    if (selectedRoleCount && selectedRoleCount !== "Custom") {
      params.append('positions', selectedRoleCount);
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
  };

  return (
    <>
      {/* Dark Hero Section */}
      <section className="relative overflow-hidden bg-deep-blue border-b border-white/10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80vh] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(79,195,247,0.15) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-14 lg:grid-cols-12 lg:items-start mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="lg:col-span-6">
              <h1 className="mt-3 sm:mt-4 md:mt-5 lg:mt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Your Perfect Team – <span className="text-neon-blue">Just a click away</span>
              </h1>
              <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-7 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl">
                Whether you're filling a critical talent gap, scaling for a demanding project, or strengthening your existing team with specialized expertise, we provide the resource you need to keep work moving.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-5 lg:mt-7">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#0a1628] rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 border border-white/10 backdrop-blur-sm hover:border-neon-blue/30 transition-all duration-300 text-center"
                  >
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neon-blue">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-200 mt-0.5 sm:mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Form Section */}
      <section className="relative overflow-hidden bg-light-accent py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
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
                <div className="flex items-center gap-2">
                  <div className="px-2 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-[10px] sm:text-xs text-gray-400">
                      <span className="text-neon-blue font-medium">{getSelectedCount()}</span> selections made
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              {/* Step 1: Role Count */}
              <div className="group">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">How many positions are you looking to fill?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {["1 Position", "2-4 Positions"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedRoleCount(option)}
                      className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${
                        selectedRoleCount === option
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {option}
                    </button>
                  ))}

                  {selectedRoleCount !== "Custom" && !selectedRoleCount?.includes("Positions") ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRoleCount("Custom");
                        setTimeout(() => {
                          const input = document.querySelector('input[type="number"]');
                          if (input) (input as HTMLInputElement).focus();
                        }, 10);
                      }}
                      className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${
                        selectedRoleCount === "Custom"
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      Custom
                    </button>
                  ) : (
                    <div className="relative col-span-2 sm:col-span-1">
                      <input
                        type="number"
                        min={1}
                        placeholder="Enter number"
                        className="w-full rounded-xl border border-neon-blue bg-neon-blue/10 px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:outline-none text-xs sm:text-sm transition-all"
                        autoFocus
                        value={selectedRoleCount !== "Custom" ? parseInt(selectedRoleCount) || "" : ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value) {
                            setSelectedRoleCount(`${value} Positions`);
                          } else {
                            setSelectedRoleCount("Custom");
                          }
                        }}
                        onBlur={(e) => {
                          if (!e.target.value) {
                            setSelectedRoleCount("");
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const input = e.target as HTMLInputElement;
                            if (input.value) {
                              setSelectedRoleCount(`${input.value} Positions`);
                            } else {
                              setSelectedRoleCount("");
                            }
                          }
                          if (e.key === "Escape") {
                            setSelectedRoleCount("");
                          }
                        }}
                      />
                    </div>
                  )}
                </div>

                {selectedRoleCount && (
                  <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-neon-blue">
                    {selectedRoleCount === "Custom"
                      ? "Custom option selected - enter a number above"
                      : `${selectedRoleCount} selected`}
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {["Full-Time", "Part-Time", "Internship", "Contract"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedTimeCommitment(option)}
                      className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${
                        selectedTimeCommitment === option
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
                        onClick={() => {
                          setSelectedRoles(prev =>
                            prev.includes(role.id)
                              ? prev.filter(id => id !== role.id)
                              : [...prev, role.id]
                          );
                        }}
                        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border transition-all duration-300 text-xs sm:text-sm ${
                          selectedRoles.includes(role.id)
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
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10 hover:border-neon-blue/30 text-[10px] sm:text-xs text-gray-400 hover:text-neon-blue transition-all"
                    >
                      <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      Add Custom
                    </button>
                  </div>

                  {showCustomTech && (
                    <div className="flex flex-col sm:flex-row gap-2 mb-3 sm:mb-4">
                      <input
                        type="text"
                        value={customTech}
                        onChange={(e) => setCustomTech(e.target.value)}
                        placeholder="Enter technology name"
                        className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue text-xs sm:text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomTech}
                        className="px-3 sm:px-4 py-2 rounded-lg bg-neon-blue text-white font-medium hover:bg-neon-purple transition-all text-xs sm:text-sm"
                      >
                        Add
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-40 sm:max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {techOptions.map((tech) => {
                      const selected = selectedTech.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handleTechToggle(tech)}
                          className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-lg border transition-all duration-300 text-[10px] sm:text-sm ${
                            selected
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
                        {getSelectedCount() > 0
                          ? `${getSelectedCount()} selections made • We'll find the best talent for you`
                          : "Start by making your selections above"}
                      </p>
                    </div>
                  </div>
                  <Link href={buildContactUrl()} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-neon-blue rounded-xl text-xs sm:text-sm font-semibold text-white hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300">
                      Submit
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28 border-t bg-section-dark">
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

          {/* Comparison Table */}
          <div className="relative surface-panel rounded-2xl sm:rounded-3xl border overflow-hidden">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left min-w-[640px] sm:min-w-full">
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

      {/* Benefits Section */}
      <section className="bg-light-accent py-10 sm:py-12 md:py-16 lg:py-20">
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

      {/* CTA Banner */}
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