"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const featuredServices = [
  {
    title: "Mobile Application",
    slug: "mobile-application",
    description: "Native & cross-platform apps built for performance and scale.",
    color: "from-blue-500 to-cyan-400",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Fast, scalable, and user-centric web platforms.",
    color: "from-violet-500 to-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    title: "Project Management",
    slug: "project-management",
    description: "Plan smart, execute fast, deliver without the chaos.",
    color: "from-amber-400 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
    ),
  },
  {
    title: "Ecommerce",
    slug: "ecommerce",
    description: "Online stores that convert, scale, and retain customers.",
    color: "from-emerald-400 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
    ),
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    description: "Every click, flow, and feature — tested and reliable.",
    color: "from-rose-400 to-pink-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "UI/UX Design Services",
    slug: "ui-ux-design",
    description: "Experiences that delight, engage, and convert users.",
    color: "from-pink-500 to-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    ),
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategy, content, and measurable impact for growth.",
    color: "from-sky-400 to-blue-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    ),
  },
  {
    title: "Machine Learning & AI",
    slug: "machine-learning-ai",
    description: "Turn data into decisions with intelligent AI solutions.",
    color: "from-indigo-500 to-violet-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    description: "Scale smart with expert talent, no hiring overhead.",
    color: "from-teal-400 to-emerald-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
];

const serviceDetails = [
  {
    title: "Mobile App Development",
    slug: "mobile-application",
    color: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    items: [
      "Native App Development (iOS & Android)",
      "Cross-Platform (Flutter, React Native, Xamarin)",
      "Backend & API Development",
      "App Store Optimization (ASO)",
      "Payment, Push & Third-Party Integrations",
      "Prototyping & MVP Development",
      "Ongoing Maintenance & Updates",
    ],
  },
  {
    title: "Web Development",
    slug: "web-development",
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    items: [
      "Frontend (React, Angular, Vue.js)",
      "Backend (Node.js, Django, Laravel, PHP)",
      "Full-Stack Development",
      "CMS (WordPress, Drupal, Joomla)",
      "Progressive Web Apps (PWAs)",
      "Cloud Hosting & Deployment",
      "Web Security & SSL",
      "Maintenance & Performance",
    ],
  },
  {
    title: "Machine Learning & AI",
    slug: "machine-learning-ai",
    color: "from-indigo-500 to-violet-600",
    shadowColor: "shadow-indigo-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    items: [
      "Predictive Analytics & Forecasting",
      "NLP, Chatbots & Sentiment Analysis",
      "Computer Vision & Image Recognition",
      "Recommendation Engines",
      "Data Processing & Cleaning",
      "Model Deployment & Integration",
      "AI Virtual Assistants",
      "Custom Algorithm Development",
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    color: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    items: [
      "User Research & Persona Development",
      "Wireframing & Interactive Prototyping",
      "High-Fidelity Visual Design",
      "Interaction & Motion Design",
      "Usability Testing & Iteration",
      "WCAG Accessibility Compliance",
    ],
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    color: "from-sky-400 to-blue-500",
    shadowColor: "shadow-sky-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    items: [
      "On-page, Off-page & Technical SEO",
      "PPC & Social Media Ad Campaigns",
      "Social Media Content Management",
      "Blog, Video & Content Marketing",
      "Email Marketing & Automation",
      "Analytics, Reporting & ROI Tracking",
    ],
  },
  {
    title: "E-commerce Development",
    slug: "ecommerce",
    color: "from-emerald-400 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>,
    items: [
      "Shopify, WooCommerce & Custom Platforms",
      "Secure Payment Gateway Integration",
      "Inventory & Product Catalog Management",
      "Order Tracking & Fulfillment Systems",
      "PCI-DSS Compliance & Security",
    ],
  },
  {
    title: "Project Management",
    slug: "project-management",
    color: "from-amber-400 to-orange-500",
    shadowColor: "shadow-amber-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    items: [
      "Agile/Scrum Coaching & Implementation",
      "Project Planning & Roadmapping",
      "Risk Identification & Mitigation",
      "Jira, Trello, Asana & ClickUp Setup",
      "Stakeholder Communication",
      "Budget & Resource Optimization",
      "Change Management",
    ],
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    color: "from-rose-400 to-pink-500",
    shadowColor: "shadow-rose-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    items: [
      "Manual & Exploratory Testing",
      "Automated Testing (Selenium, Cypress, JMeter)",
      "Performance & Load Testing",
      "Security & Vulnerability Testing",
      "Usability & UX Validation",
      "Cross-Browser & Device Testing",
      "Bug Tracking & Reporting (Jira, Bugzilla)",
    ],
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    color: "from-teal-400 to-emerald-500",
    shadowColor: "shadow-teal-500/20",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    items: [
      "Cross-Functional Specialists On Demand",
      "Seamless Sprint & Workflow Integration",
      "Flexible Scale-Up / Scale-Down",
      "Faster Delivery from Day One",
      "Time-Zone Aligned Support",
      "Communication-Ready Professionals",
      "Cost-Effective Talent Expansion",
    ],
  },
];

const whyChooseReasons = [
  {
    title: "People-First, Always",
    description: "We design solutions around real human needs - your users, your team, and your business goals.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
  {
    title: "Agility Backed by Expertise",
    description: "From rapid pivots to long-term scaling, our combination of flexibility and deep technical knowledge ensures we adapt effectively.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Strategic Partners, Not Just Vendors",
    description: "We integrate closely with your vision, collaborate openly, and prioritize your growth at every step.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    title: "On Time. Every Time.",
    description: "We follow through on our commitments with proactive project management and dependable delivery.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Built by Exceptional Talent",
    description: "Our global team of engineers, designers, and strategists brings world-class skill and a problem-solving mindset.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    title: "Smart with Every Resource",
    description: "We optimize time, talent, and budget to deliver maximum value without unnecessary complexity or waste.",
    icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  },
];

function ServiceCardsScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const trunkWidth = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <>
      {/* Desktop: Horizontal scroll */}
      <div ref={sectionRef} className="hidden md:block relative bg-light-accent h-[500vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-light-accent">
          {/* Header */}
          <div className="px-6 pt-8 max-w-7xl mx-auto w-full">
            <AnimatedSection className="text-center">
              <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
                Explore Our{" "}
                <span className="gradient-text-dark">Service Areas</span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Horizontal scrolling area */}
          <div className="flex flex-col justify-center px-6 relative">
            {/* Progress bar */}
            <div className="max-w-4xl mx-auto w-full mb-8 mt-10">
              <div className="h-1 rounded-full bg-deep-blue/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            {/* Cards strip */}
            <motion.div
              className="flex items-stretch gap-8 pl-[10vw]"
              style={{ x }}
            >
              {serviceDetails.map((service, i) => (
                <div key={service.slug} className="flex items-center">
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      className={`relative flex-shrink-0 w-[380px] group cursor-pointer`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient glow behind card on hover */}
                      <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                      <div className={`relative h-full rounded-2xl border border-deep-blue/5 bg-white overflow-hidden hover:${service.shadowColor} hover:shadow-xl transition-all duration-500`}>
                        {/* Gradient accent bar at top */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />

                        <div className="p-7 flex flex-col h-full">
                          {/* Icon + Title */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {service.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-deep-blue leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-xs text-deep-blue/40 mt-0.5">{service.items.length} capabilities</p>
                            </div>
                          </div>

                          {/* Divider */}
                          <div className={`h-px w-full bg-gradient-to-r ${service.color} opacity-15 mb-5`} />

                          {/* Points list */}
                          <ul className="space-y-3 flex-1">
                            {service.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0`} />
                                <span className="text-deep-blue/70 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA button */}
                          <div className={`mt-6 flex items-center justify-between pt-5 border-t border-deep-blue/5`}>
                            <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              Explore more
                            </span>
                            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  {/* Connector between cards */}
                  {i < serviceDetails.length - 1 && (
                    <div className="flex items-center flex-shrink-0 w-8">
                      <div className="relative w-full flex items-center">
                        <motion.div
                          className="h-px w-full bg-gradient-to-r from-neon-blue/40 to-neon-purple/40"
                          style={{ scaleX: trunkWidth, transformOrigin: "left" }}
                        />
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-neon-blue/40" />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* End marker */}
              <div className="flex-shrink-0 flex items-center gap-4 pr-[20vw]">
                <div className="w-px h-8 bg-neon-blue/20" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg shadow-neon-blue/30">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-deep-blue whitespace-nowrap">
                  All Services
                </p>
              </div>
            </motion.div>

            {/* Scroll hint */}
            <div className="mt-8 flex items-center justify-center gap-2 text-deep-blue/40 text-xs">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical stacked cards */}
      <div className="md:hidden py-16 px-6 bg-light-accent">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-deep-blue">
            Explore Our{" "}
            <span className="gradient-text-dark">Service Areas</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {serviceDetails.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.05}>
              <Link href={`/services/${service.slug}`}>
                <div className="rounded-2xl border border-deep-blue/5 bg-white overflow-hidden">
                  {/* Gradient accent bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`} />

                  <div className="p-6">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-deep-blue">{service.title}</h3>
                        <p className="text-xs text-deep-blue/40">{service.items.length} capabilities</p>
                      </div>
                    </div>

                    <div className={`h-px w-full bg-gradient-to-r ${service.color} opacity-15 mb-4`} />

                    <ul className="space-y-2.5">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0`} />
                          <span className="text-deep-blue/70">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-5 flex items-center justify-between pt-4 border-t border-deep-blue/5`}>
                      <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        Explore more
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
              Our Services
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tailored IT Solutions for{" "}
              <span className="gradient-text">Your Success</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Every business is different with its own challenges, goals, and vision.
              That&apos;s why we don&apos;t offer one-size-fits-all answers. We craft
              IT solutions tailored to fit your unique needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured <span className="gradient-text">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="group relative h-full cursor-pointer"
                  >
                    {/* Hover glow */}
                    <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500`} />

                    <div className="relative h-full rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] group-hover:border-white/[0.12] overflow-hidden transition-all duration-500 flex flex-col">
                      {/* Top gradient line */}
                      <div className={`h-1 w-full bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                      {/* Gradient orb background */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.04] group-hover:opacity-[0.08] rounded-full blur-3xl translate-x-10 -translate-y-10 transition-opacity duration-500`} />

                      <div className="relative p-7 flex flex-col flex-1">
                        {/* Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                            {service.icon}
                          </div>
                          {/* Arrow circle — appears on hover */}
                          <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:bg-gradient-to-br group-hover:${service.color} group-hover:border-transparent group-hover:text-white opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/95 transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed flex-1 group-hover:text-gray-300 transition-colors">
                          {service.description}
                        </p>

                        {/* Bottom CTA */}
                        <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                          <span className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            Learn more
                          </span>
                          <div className="flex items-center gap-1">
                            {[0, 1, 2].map((dot) => (
                              <motion.span
                                key={dot}
                                className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-100`}
                                initial={false}
                                animate={{}}
                                style={{
                                  transition: `opacity 0.3s ${dot * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections — Horizontal Scroll Cards */}
      <ServiceCardsScroll />

      {/* Why Businesses Choose Dev Inception */}
      <section className="py-16 relative overflow-hidden bg-light-accent">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
              Why Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
              Why Businesses Choose{" "}
              <span className="gradient-text-dark">Dev Inception</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full p-8 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue to-neon-purple flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-deep-blue">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-deep-blue/60 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
