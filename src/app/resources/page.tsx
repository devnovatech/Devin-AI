"use client";

import { useState } from "react";
import {
  Users,
  Briefcase,
  Clock,
  Globe,
  DollarSign,
  Headphones,
  Shield,
  Palette,
  UserCog,
  UsersRound,
  TrendingUp,
  ArrowRight,
  Search,
  Filter,
  X,
  ChevronLeft,
  Code,
  Sparkles,
  Target,
  Layers,
  CheckCircle2,
  Zap,
  Building2,
  Mail,
  Phone,
  User,
  Globe2,
  Calendar,
  DollarSign as DollarIcon,
  MessageSquare,
  Send,
  ChevronDown,
  Plus
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

const roleOptions = [
  { id: "developer", label: "Developer", icon: <Code className="w-5 h-5" /> },
  { id: "designer", label: "Designer", icon: <Palette className="w-5 h-5" /> },
  { id: "manager", label: "Manager", icon: <UserCog className="w-5 h-5" /> },
  { id: "consultant", label: "Consultant", icon: <UsersRound className="w-5 h-5" /> },
  { id: "finance", label: "Finance", icon: <TrendingUp className="w-5 h-5" /> }
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Vetted Professionals",
    description: "All our talents go through rigorous screening and technical assessments to ensure top quality."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick Turnaround",
    description: "Get matched with qualified candidates within 5-10 days of submitting your requirements."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Talent Pool",
    description: "Access to skilled professionals from Pakistan, available in your timezone."
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cost Effective",
    description: "Save up to 60% on hiring costs while getting access to premium talent."
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Dedicated account managers to ensure smooth collaboration and project success."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Guarantee",
    description: "If you're not satisfied with a hire after probation period, we'll find a replacement at no additional cost."
  }
];

const stats = [
  { value: "20+", label: "Successful Projects" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5-10 days", label: "Average Matching Time" },
  { value: "10+", label: "Countries Served" }
];

const INITIAL_TECH_OPTIONS = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vue", "Svelte",
  "Node.js", "Python", "Go", "Rust", "Java", "Kotlin",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB",
  "AWS", "GCP", "Azure", "Vercel", "Kubernetes", "Docker",
  "Anthropic", "OpenAI", "Llama", "LangChain", "PyTorch", "TensorFlow",
  "Swift", "Kotlin", "React Native", "Flutter",
  "Figma", "Framer", "Rive", "After Effects",
  "Datadog", "Sentry", "Grafana", "OpenTelemetry"
];





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

  return (
    <>
      {/* Dark Hero Section - UNCHANGED */}
      <section className="relative overflow-hidden bg-deep-blue border-b border-white/10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80vh] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(79,195,247,0.15) 0%, transparent 65%)",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-10 md:gap-14 lg:grid-cols-12 lg:items-start mb-10 sm:mb-12 md:mb-16">
            <section className="lg:col-span-6">
              <span className="eyebrow text-neon-blue text-xs sm:text-sm">Hire A Talent</span>
              <h1 className="mt-4 sm:mt-5 md:mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Let's Just <span className="text-neon-blue">Find</span>
              </h1>
              <p className="mt-4 sm:mt-5 md:mt-7 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl">
                Tell us a bit about what you are looking for?
              </p>
            </section>
            <section className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#0a1628] rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 backdrop-blur-sm hover:border-neon-blue/30 transition-all duration-300 text-center"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-blue">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* =====HIRING FORM SECTION ===== */}
      <section className="relative overflow-hidden bg-light-accent py-16 sm:py-20 md:py-28">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header - Modern & Clean */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                    Find Your Perfect Match
                  </span>
                </div>
                <h2 className="h-section text-deep-blue">
                  Tell Us <span className="gradient-text-dark">What You Need</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                  Fill in the details below and we'll find the best talent for your requirements
                </p>
              </div>
            </div>
          </div>

          {/* Main Form Card - Glassmorphism */}
          <div className="relative bg-[#0a1628] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />

            {/* Progress Steps */}
            <div className="relative mb-10 pb-8 border-b border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue font-bold text-sm">
                    {getSelectedCount() + 1}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Building Your Profile</p>
                    <p className="text-gray-400 text-xs">Complete all steps to get matched</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400">
                      <span className="text-neon-blue font-medium">{getSelectedCount()}</span> selections made
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Step 1: Role Count - Redesigned */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">How many positions are you looking to fill?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["1 Position", "2-4 Positions", "Custom"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedRoleCount(option)}
                      className={`group/btn relative px-4 py-3 rounded-xl border transition-all duration-300 text-sm ${selectedRoleCount === option
                        ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                        }`}
                    >
                      <span className="relative z-10">{option}</span>
                      {selectedRoleCount === option && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/5 to-neon-purple/5" />
                      )}
                    </button>
                  ))}
                </div>
                {selectedRoleCount === "Custom" && (
                  <div className="mt-4">
                    <input
                      type="number"
                      min={1}
                      placeholder="Enter number of positions"
                      className="w-full sm:w-64 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-neon-blue focus:outline-none text-sm transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Step 2: Time Commitment - Redesigned */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">What time commitment do you need?</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Full-Time", "Part-Time", "Internship", "Contract"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedTimeCommitment(option)}
                      className={`px-4 py-3 rounded-xl border transition-all duration-300 text-sm ${selectedTimeCommitment === option
                        ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                        : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Roles & Technologies - Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Roles */}
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                      <Users className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-white">Select required roles</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 text-sm ${selectedRoles.includes(role.id)
                          ? "border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/10"
                          : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                          }`}
                      >
                        {role.icon}
                        {role.label}
                        {selectedRoles.includes(role.id) && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-neon-blue" />
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedRoles.length > 0 && (
                    <p className="mt-2 text-xs text-neon-blue">
                      {selectedRoles.length} role{selectedRoles.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="group">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">Technologies</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCustomTech((prev) => !prev)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-neon-blue/30 text-xs text-gray-400 hover:text-neon-blue transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Custom
                    </button>
                  </div>

                  {showCustomTech && (
                    <div className="flex gap-2 mb-4">
                      <input
                        type="text"
                        value={customTech}
                        onChange={(e) => setCustomTech(e.target.value)}
                        placeholder="Enter technology name"
                        className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomTech}
                        className="px-4 py-2 rounded-lg bg-neon-blue text-white font-medium hover:bg-neon-purple transition-all text-sm"
                      >
                        Add
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                    {techOptions.map((tech) => {
                      const selected = selectedTech.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handleTechToggle(tech)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-300 text-xs ${selected
                            ? "border-neon-blue bg-neon-blue/10 text-neon-blue"
                            : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                            }`}
                        >
                          {tech}
                          {selected && <CheckCircle2 className="w-3 h-3" />}
                        </button>
                      );
                    })}
                  </div>
                  {selectedTech.length > 0 && (
                    <p className="mt-2 text-xs text-neon-blue">
                      {selectedTech.length} technology{selectedTech.length > 1 ? 'ies' : ''} selected
                    </p>
                  )}
                </div>
              </div>

              {/* Step 4: Summary & CTA - Modern */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Ready to find your perfect match?</p>
                      <p className="text-gray-400 text-xs">
                        {getSelectedCount() > 0
                          ? `${getSelectedCount()} selections made • We'll find the best talent for you`
                          : "Start by making your selections above"}
                      </p>
                    </div>
                  </div>
                  <button
                    className="ml-2 inline-flex items-center gap-2 px-5 py-2 bg-neon-blue rounded-xl text-sm font-semibold text-white hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                  >
                    <Link href="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-light-accent py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  Why Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-blue">
                Why Choose<span className="gradient-text-dark">DEVINCEPTION</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-deep-blue/60 max-w-md lg:ml-auto">
                We connect you with world-class developers and IT professionals who can transform your business ideas into reality.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-5 sm:p-6 border border-deep-blue/10 transition-all duration-300 hover:border-neon-blue/30 hover:shadow-xl hover:shadow-neon-blue/5"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-deep-blue font-semibold mb-1.5 sm:mb-2 text-base sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-deep-blue/70 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - UNCHANGED */}
      <CTABanner
        eyebrow="Start building your team"
        heading={
          <>
            Ready to hire{" "}
            <span className="text-neon-blue">exceptional talent?</span>
          </>
        }
        description="Get started with our comprehensive hiring tools and expert support."
        primaryLabel="Start Hiring"
        primaryHref="/contact"
        secondaryLabel="Learn More"
        secondaryHref="#benefits"
      />
    </>
  );
}