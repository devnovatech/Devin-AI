"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import emailjs from "@emailjs/browser";
import ToastManager from "@/components/ui/ToastManager";
import ReCAPTCHA from "react-google-recaptcha";

// EmailJS Configuration - Using environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

// reCAPTCHA Configuration
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  autoComplete?: string;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
  multiline,
  rows = 4,
  autoComplete,
}: FloatingFieldProps) {
  const filled = value.length > 0;
  const baseInput =
    "peer w-full px-4 pt-6 pb-2 rounded-xl bg-deep-blue/[0.03] border outline-none transition-colors text-deep-blue placeholder-transparent";
  const errorClass = error
    ? "border-red-400/60"
    : "border-deep-blue/[0.12] focus:border-neon-blue/60";

  const SharedLabel = (
    <label
      htmlFor={id}
      className={`absolute left-4 transition-all duration-200 pointer-events-none ${filled
        ? "top-1.5 text-[11px] text-neon-blue"
        : "top-4 text-sm text-deep-blue/40"
        } peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-neon-blue`}
    >
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
  

  return (
    <div>
      <div className="relative">
        {multiline ? (
          <textarea
            id={id}
            name={id}
            placeholder=" "
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoComplete={autoComplete}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`${baseInput} ${errorClass} resize-none`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            placeholder=" "
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoComplete={autoComplete}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`${baseInput} ${errorClass}`}
          />
        )}
        {SharedLabel}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

const projectTypes = [
  {
    id: "web",
    label: "Web App",
    basePrice: 5000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm0 0h18M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18" />
      </svg>
    ),
  },
  {
    id: "mobile",
    label: "Mobile App",
    basePrice: 10000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <rect x="6" y="3" width="12" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    basePrice: 8000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI / ML",
    basePrice: 15000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "saas",
    label: "SaaS Platform",
    basePrice: 20000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "custom",
    label: "Custom Build",
    basePrice: 10000,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const projectFeatures = [
  { id: "auth", label: "Authentication", price: 1500 },
  { id: "payments", label: "Payments", price: 2000 },
  { id: "admin", label: "Admin Dashboard", price: 3000 },
  { id: "realtime", label: "Real-time / Chat", price: 2500 },
  { id: "ai_int", label: "AI / Chatbot", price: 4000 },
  { id: "analytics", label: "Analytics", price: 2000 },
  { id: "api", label: "API Integrations", price: 1500 },
  { id: "i18n", label: "Multi-language", price: 1500 },
  { id: "design", label: "Custom Design", price: 3000 },
  { id: "cms", label: "CMS", price: 2000 },
];

const complexityLevels = [
  { id: "simple", label: "MVP", multiplier: 1.0, description: "Core features" },
  { id: "medium", label: "Standard", multiplier: 1.4, description: "Full-featured" },
  { id: "complex", label: "Enterprise", multiplier: 1.85, description: "Scale & polish" },
];

const timelineOptions = [
  { id: "standard", label: "Standard", multiplier: 1.0, description: "3–6 months" },
  { id: "fast", label: "Fast-track", multiplier: 1.3, description: "1–3 months" },
];

const nextSteps = [
  {
    number: "01",
    title: "We get back within 24h",
    description:
      "An engineer or strategist (not a salesperson) reads your note and replies with a few questions or a calendar link.",
    accent: "#1E88E5",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "30-min discovery call",
    description:
      "We talk through goals, constraints, and timelines. No pitch deck — just a working session to understand the problem.",
    accent: "#0288D1",
    duration: "Day 2–5",
  },
  {
    number: "03",
    title: "Tailored proposal",
    description:
      "Within a week, you get a written proposal with scope, timeline, fixed quote, and a recommended team. Take your time.",
    accent: "#00ACC1",
    duration: "Day 5–10",
  },
];

// EmailJS rejects with an EmailJSResponseStatus ({ status, text }), which is not
// an Error — reading `.message` would always miss the real reason for the failure.
function emailErrorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "text" in error) {
    const text = (error as { text?: unknown }).text;
    if (typeof text === "string" && text.trim()) return text;
  }
  if (error instanceof Error && error.message) return error.message;
  return "Failed to send message. Please try again.";
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfigValid, setIsConfigValid] = useState(true);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [recaptchaExpired, setRecaptchaExpired] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // The last estimate summary written into the message, so re-applying replaces
  // it instead of stacking another copy on top.
  const lastEstimateRef = useRef("");

  // ── Budget estimator state ──
  const [projectType, setProjectType] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<string>("medium");
  const [timeline, setTimeline] = useState<string>("standard");

  // Initialize EmailJS and validate configuration
  useEffect(() => {
    const serviceId = EMAILJS_SERVICE_ID;
    const templateId = EMAILJS_TEMPLATE_ID;
    const publicKey = EMAILJS_PUBLIC_KEY;

    const missingVars: string[] = [];

    if (!serviceId || serviceId.trim() === "") missingVars.push("Service ID");
    if (!templateId || templateId.trim() === "") missingVars.push("Template ID");
    if (!publicKey || publicKey.trim() === "") missingVars.push("Public Key");

    if (missingVars.length > 0) {
      console.error("❌ Missing EmailJS configuration:", missingVars.join(", "));
      setIsConfigValid(false);

      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast(
          "Email configuration error. Please contact support.",
          "error"
        );
      }
    } else {
      console.log("✅ EmailJS configuration loaded successfully");
      setIsConfigValid(true);
      emailjs.init(publicKey);
    }
  }, []);

  // Read URL parameters when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      
      const positions = params.get('positions');
      const commitment = params.get('commitment');
      const roles = params.get('roles');
      const tech = params.get('tech');
      const from = params.get('from');
      
      // Only pre-fill if coming from the hire-talent page
      if (from === 'hire-talent') {
        let message = '📋 Hiring Requirements:\n';
        message += '═══════════════════════\n\n';
        
        if (positions) {
          message += `📊 Positions Needed: ${positions}\n`;
        }
        
        if (commitment) {
          message += `⏰ Time Commitment: ${commitment}\n`;
        }
        
        if (roles) {
          message += `👥 Required Roles: ${roles}\n`;
        }
        
        if (tech) {
          message += `💻 Technologies: ${tech}\n`;
        }
        
        message += '\n═══════════════════════\n';
        message += 'Additional details about my project:\n\n';
        
        setFormState(prev => ({
          ...prev,
          message: message
        }));
      }
    }
  }, []);

  // Updating a field also clears its error, so validation messages disappear as
  // soon as the user starts fixing them rather than lingering until the next submit.
  const updateField = (field: keyof typeof formState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // reCAPTCHA tokens are single-use, so the widget itself has to be reset —
  // clearing our state alone would leave a consumed token in the box.
  function resetRecaptcha() {
    recaptchaRef.current?.reset();
    setRecaptchaValue(null);
    setRecaptchaExpired(false);
  }

  const toggleFeature = (id: string) =>
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const activeType = projectTypes.find((t) => t.id === projectType);
  const activeComplexity =
    complexityLevels.find((c) => c.id === complexity) ?? complexityLevels[1];
  const activeTimeline =
    timelineOptions.find((t) => t.id === timeline) ?? timelineOptions[0];

  const featuresTotal = selectedFeatures.reduce(
    (sum, id) =>
      sum + (projectFeatures.find((f) => f.id === id)?.price ?? 0),
    0
  );
  const subtotal = (activeType?.basePrice ?? 0) + featuresTotal;
  const total = subtotal * activeComplexity.multiplier * activeTimeline.multiplier;
  const minBudget = Math.round((total * 0.85) / 500) * 500;
  const maxBudget = Math.round((total * 1.15) / 500) * 500;

  const formatUSD = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;

  function applyEstimateToMessage() {
    const featureLabels = selectedFeatures
      .map((id) => projectFeatures.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const summary = [
      `Project type: ${activeType?.label ?? "—"}`,
      `Complexity: ${activeComplexity.label}`,
      `Timeline: ${activeTimeline.label} (${activeTimeline.description})`,
      featureLabels ? `Features: ${featureLabels}` : null,
      `Estimated budget: ${formatUSD(minBudget)} – ${formatUSD(maxBudget)}`,
      "",
      "Additional details:",
    ]
      .filter(Boolean)
      .join("\n");

    const prior = lastEstimateRef.current;
    lastEstimateRef.current = summary;

    setFormState((prev) => {
      // Strip the previously applied summary so repeated clicks replace it
      // rather than prepending a second block.
      const rest =
        prior && prev.message.startsWith(prior)
          ? prev.message.slice(prior.length).replace(/^\n+/, "")
          : prev.message;
      return { ...prev, message: rest ? `${summary}\n${rest}` : `${summary}\n` };
    });
    setErrors((prev) => {
      if (!prev.message) return prev;
      const next = { ...prev };
      delete next.message;
      return next;
    });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      errs.email = "Invalid email address";
    if (!formState.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    if (!isConfigValid) {
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast(
          "Email service is not configured. Please contact support.",
          "error"
        );
      }
      return;
    }

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast("Please fix the errors in the form", "error");
      }
      return;
    }

    // Safety net: the token can expire between the click and this handler running.
    if (!recaptchaValue) {
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast(
          "Please complete the reCAPTCHA verification",
          "error"
        );
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        title: "New Project Inquiry - DevInception",
        name: formState.name,
        email: formState.email,
        company: formState.company || "Not provided",
        message: formState.message,
        project_type: activeType?.label || "Not specified",
        features: selectedFeatures
          .map((id) => projectFeatures.find((f) => f.id === id)?.label)
          .filter(Boolean)
          .join(", ") || "None",
        budget_range: `${formatUSD(minBudget)} - ${formatUSD(maxBudget)}`,
        'g-recaptcha-response': recaptchaValue,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!", response.status, response.text);

      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast("Message sent successfully! We'll get back to you within 24 hours.", "success");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      lastEstimateRef.current = "";
      resetRecaptcha();

    } catch (error) {
      console.error("Failed to send email:", error);
      // The token was consumed by the failed attempt — force a fresh one before retrying.
      resetRecaptcha();
      if (typeof window !== 'undefined' && window.showToast) {
        window.showToast(emailErrorMessage(error), "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ToastManager />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-section-dark relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h1
              className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4.5rem)" }}
            >
              Let&apos;s build{" "}
              <span className="gradient-text">together.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
              Tell us about your project — we&apos;ll come back with a tailored
              plan within 24 hours. No salespeople, no follow-up calls until
              you&apos;re ready.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Contact info (split) */}
      <section className="py-16 lg:py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* LEFT — Budget estimator */}
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-xl shadow-deep-blue/5">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="eyebrow text-neon-purple">Budget estimator</p>
                    <h2 className="mt-1.5 text-xl lg:text-2xl font-bold text-deep-blue tracking-tight leading-tight">
                      Get an instant{" "}
                      <span className="gradient-text-dark">ballpark.</span>
                    </h2>
                  </div>
                </div>
                <p className="mt-3 text-sm text-deep-blue/60">
                  Pick what you&apos;re building — we&apos;ll estimate the range. No signup, no spam.
                </p>

                {/* Step 1 — Project type */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    1. What are you building?
                  </p>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((t) => {
                      const active = projectType === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setProjectType(t.id)}
                          className={`group flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl border text-center transition-all duration-200 ${active
                            ? "border-neon-blue bg-neon-blue/[0.06] shadow-sm shadow-neon-blue/10"
                            : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                            }`}
                        >
                          <span
                            className={`transition-colors ${active ? "text-neon-blue" : "text-deep-blue/60 group-hover:text-deep-blue"
                              }`}
                          >
                            {t.icon}
                          </span>
                          <span
                            className={`text-[11px] font-semibold leading-tight ${active ? "text-deep-blue" : "text-deep-blue/70"
                              }`}
                          >
                            {t.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 — Features */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                      2. Features
                    </p>
                    {selectedFeatures.length > 0 && (
                      <span className="text-[10px] font-semibold text-neon-blue">
                        {selectedFeatures.length} selected
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {projectFeatures.map((f) => {
                      const active = selectedFeatures.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => toggleFeature(f.id)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${active
                            ? "bg-neon-blue text-white border-neon-blue shadow-sm shadow-neon-blue/30"
                            : "bg-deep-blue/[0.03] text-deep-blue/75 border-deep-blue/[0.08] hover:bg-deep-blue/[0.06] hover:text-deep-blue"
                            }`}
                        >
                          {active && <span className="mr-1">✓</span>}
                          {f.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 — Complexity */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    3. Scope
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {complexityLevels.map((c) => {
                      const active = complexity === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setComplexity(c.id)}
                          className={`px-2 py-2.5 rounded-xl border text-left transition-all duration-200 ${active
                            ? "border-neon-blue bg-neon-blue/[0.06]"
                            : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                            }`}
                        >
                          <span
                            className={`block text-xs font-bold ${active ? "text-neon-blue" : "text-deep-blue"
                              }`}
                          >
                            {c.label}
                          </span>
                          <span className="block text-[10px] text-deep-blue/55 mt-0.5">
                            {c.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4 — Timeline */}
                <div className="mt-6">
                  <p className="text-[10px] font-bold text-deep-blue/55 uppercase tracking-[0.18em]">
                    4. Timeline
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {timelineOptions.map((t) => {
                      const active = timeline === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTimeline(t.id)}
                          className={`px-3 py-2.5 rounded-xl border text-left transition-all duration-200 ${active
                            ? "border-neon-blue bg-neon-blue/[0.06]"
                            : "border-deep-blue/[0.08] bg-light-accent/30 hover:border-deep-blue/[0.18] hover:bg-white"
                            }`}
                        >
                          <span
                            className={`block text-xs font-bold ${active ? "text-neon-blue" : "text-deep-blue"
                              }`}
                          >
                            {t.label}
                          </span>
                          <span className="block text-[10px] text-deep-blue/55 mt-0.5">
                            {t.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Result */}
                <motion.div
                  key={`${minBudget}-${maxBudget}`}
                  initial={{ scale: 0.98, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-7 relative p-5 rounded-2xl bg-gradient-to-br from-deep-blue to-[#0d1f3a] text-white overflow-hidden"
                >
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60 font-semibold">
                      Estimated budget
                    </p>
                    <p className="mt-2 text-3xl lg:text-[2.1rem] font-bold tracking-tight leading-none">
                      {formatUSD(minBudget)}
                      <span className="text-white/40 mx-2 font-normal">–</span>
                      {formatUSD(maxBudget)}
                    </p>
                    <p className="mt-2 text-[11px] text-white/50 leading-relaxed">
                      Indicative range based on your selections. Final scope and
                      fixed quote are confirmed during the discovery call.
                    </p>
                    <button
                      type="button"
                      onClick={applyEstimateToMessage}
                      className="mt-4 group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all duration-200"
                    >
                      Use these details in form
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="relative rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-9 shadow-xl shadow-deep-blue/5 overflow-hidden">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-neon-blue flex items-center justify-center shadow-xl shadow-neon-blue/40"
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <h3 className="h-section text-deep-blue">Got it!</h3>
                    <p className="mt-4 body-lead text-deep-blue/60 max-w-md mx-auto">
                      We&apos;ve received your message. Expect a reply from a
                      real engineer within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          company: "",
                          message: "",
                        });
                        setErrors({});
                        lastEstimateRef.current = "";
                        resetRecaptcha();
                      }}
                      className="mt-8 inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple text-sm font-semibold transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-7">
                      <p className="eyebrow text-neon-blue">Tell us about it</p>
                      <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-deep-blue tracking-tight">
                        Start a project
                      </h2>
                      <p className="mt-2 text-sm text-deep-blue/60">
                        Rough idea or fully scoped — both work. We&apos;ll
                        figure out the rest together.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FloatingField
                          id="name"
                          label="Your name"
                          required
                          autoComplete="name"
                          value={formState.name}
                          onChange={updateField("name")}
                          error={errors.name}
                        />
                        <FloatingField
                          id="email"
                          label="Work email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formState.email}
                          onChange={updateField("email")}
                          error={errors.email}
                        />
                      </div>

                      <FloatingField
                        id="company"
                        label="Company"
                        autoComplete="organization"
                        value={formState.company}
                        onChange={updateField("company")}
                      />

                      <FloatingField
                        id="message"
                        label="Tell us what you're building"
                        required
                        multiline
                        rows={15}
                        value={formState.message}
                        onChange={updateField("message")}
                        error={errors.message}
                      />

                      <div className="py-2">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={RECAPTCHA_SITE_KEY}
                          onChange={(value) => {
                            setRecaptchaValue(value);
                            setRecaptchaExpired(false);
                          }}
                          onExpired={() => {
                            setRecaptchaValue(null);
                            setRecaptchaExpired(true);
                          }}
                          onErrored={() => {
                            setRecaptchaValue(null);
                            setRecaptchaExpired(false);
                          }}
                        />
                        {recaptchaExpired && (
                          <p className="mt-2 text-xs text-red-500">
                            Verification expired — tick the box again to send.
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        disabled={isSubmitting || !recaptchaValue}
                        className={`group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold tracking-wide text-sm transition-all duration-300 ${isSubmitting || !recaptchaValue
                            ? "bg-gray-400 cursor-not-allowed opacity-60"
                            : "bg-neon-blue hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40"
                          }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send message"
                        )}
                      </motion.button>

                      {!recaptchaValue && !isSubmitting && (
                        <p className="text-xs text-center text-deep-blue/60">
                          Complete the verification above to enable sending.
                        </p>
                      )}

                      <p className="text-xs text-center text-deep-blue/45">
                        By submitting, you agree to our reply within 24h. We
                        won&apos;t share your info or hassle you.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="layout-section bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/[0.05] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  What happens next
                </span>
              </div>
              <h2 className="h-section text-deep-blue">
                From message to{" "}
                <span className="gradient-text-dark">first sprint.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                No black box. Here&apos;s exactly what to expect after you hit send.
              </p>
            </div>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="hidden lg:block absolute top-7 left-[16.5%] right-[16.5%] h-px border-t border-dashed border-gray-300" />

            {nextSteps.map((step) => (
              <div key={step.number}>
                <div
                  className="group relative h-full p-6 lg:p-7 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg"
                  style={
                    {
                      "--card-glow": `${step.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.12] group-hover:opacity-[0.22] transition-opacity duration-500"
                    style={{ backgroundColor: step.accent }}
                  />

                  <div className="relative flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 z-10"
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

                  <h3 className="relative h-card text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="relative text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              Prefer to skip the form?{" "}
              <a
                href="mailto:info@devinception.com"
                className="text-neon-blue hover:underline font-semibold"
              >
                info@devinception.com
              </a>{" "}
              — same response time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}