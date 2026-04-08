"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const industries = [
  {
    name: "Healthcare & HealthTech",
    slug: "healthcare",
    description: "Streamlining patient engagement, compliance, and operational efficiency.",
    color: "from-emerald-400 to-teal-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    name: "FinTech",
    slug: "fintech",
    description: "Securing and scaling financial platforms while simplifying regulatory complexity.",
    color: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    name: "Ecommerce & Retail",
    slug: "ecommerce-retail",
    description: "Optimizing digital commerce, improving conversions, and unifying operations.",
    color: "from-amber-400 to-orange-500",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
    ),
  },
  {
    name: "Logistics & Transportation",
    slug: "logistics",
    description: "Driving efficiency with real-time tracking and integrated workflows.",
    color: "from-sky-400 to-blue-500",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
  },
  {
    name: "Education & EdTech",
    slug: "education",
    description: "Enhancing learning platforms with better engagement, accessibility, and analytics.",
    color: "from-cyan-400 to-blue-600",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
  {
    name: "Travel & Hospitality",
    slug: "travel-hospitality",
    description: "Simplifying bookings, operations, and personalized guest experiences.",
    color: "from-rose-400 to-pink-500",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    name: "SaaS & Tech Startups",
    slug: "saas-startups",
    description: "Building scalable, high-performance platforms to accelerate growth.",
    color: "from-violet-500 to-purple-700",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
              Industries
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Empowering Industries with{" "}
              <span className="gradient-text">Targeted Digital Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              We deliver tailored digital solutions to address the unique challenges of your industry,
              driving efficiency and innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02]">
              <svg className="w-5 h-5 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 text-sm font-medium">Accelerating Innovation Globally Across Every Industry</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.slug} delay={i * 0.05}>
                <Link href={`/industries/${industry.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="relative h-full p-8 rounded-2xl border border-deep-blue/5 bg-white/60 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm flex flex-col">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg mb-5`}>
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-bold text-deep-blue mb-3">{industry.name}</h3>
                      <p className="text-deep-blue/60 leading-relaxed flex-1">{industry.description}</p>
                      <div className="mt-5 flex items-center gap-2 text-neon-blue text-sm font-medium opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                        Explore solutions
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Industry-Specific Solutions for{" "}
              <span className="gradient-text">Your Teams</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Every industry has unique demands, regulations, and customer expectations. We deliver
              tailored solutions built around your sector&apos;s realities, equipping your teams with the
              right systems and strategies to improve performance, accelerate execution, and drive
              measurable results.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
              >
                Discover Your Solution
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
