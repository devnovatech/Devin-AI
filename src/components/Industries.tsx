"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const industries = [
  {
    name: "SaaS & Tech Startups",
    description: "MVP development, scalable architecture, and rapid iteration for fast-growing startups.",
    color: "from-violet-500 to-purple-700",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
  },
  {
    name: "Ecommerce & Retail",
    description: "Custom storefronts, payment integrations, and conversion-optimized shopping experiences.",
    color: "from-amber-400 to-orange-500",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
    ),
  },
  {
    name: "Healthcare & Healthtech",
    description: "HIPAA-compliant platforms, telemedicine solutions, and patient management systems.",
    color: "from-emerald-400 to-teal-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    name: "Education & EdTech",
    description: "Learning management systems, interactive content platforms, and student engagement tools.",
    color: "from-cyan-400 to-blue-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-16 relative overflow-hidden bg-light-accent">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading + CTA */}
          <AnimatedSection direction="left">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
              Industries
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue leading-tight">
              Powering Progress Across{" "}
              <span className="gradient-text-dark">Multiple Industries</span>
            </h2>
            <p className="mt-4 text-deep-blue/60 max-w-md text-lg">
              We bring deep domain expertise to every project, delivering solutions tailored to your industry&apos;s unique challenges.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold tracking-wider text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
              >
                Explore more Industries
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Industry cards in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full rounded-2xl overflow-hidden cursor-default"
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className="relative h-full p-6 rounded-2xl border border-deep-blue/5 bg-white/60 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-deep-blue/5 transition-all duration-300 flex flex-col backdrop-blur-sm">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg mb-4`}>
                      {industry.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-deep-blue mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-deep-blue/60 leading-relaxed flex-1">
                      {industry.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-neon-blue text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
