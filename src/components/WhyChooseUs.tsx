"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  {
    title: "Technical Expertise + Strategic Vision",
    description:
      "We don't just code, we align every line with your business objectives.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Developers, designers, PMs, & analysts working as one team.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Fast, Transparent Delivery",
    description:
      "Clear roadmaps, weekly check-ins & consistent progress you can trust.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "People-Centered Development",
    description:
      "We design around real user needs, ensuring usability from day one.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: "Built to Scale",
    description:
      "Architecture & code ready to support your growth, not just your launch.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
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
          {reasons.map((reason, i) => (
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

        <AnimatedSection className="mt-12 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-deep-blue/20 rounded-full text-deep-blue font-semibold text-sm hover:bg-deep-blue hover:text-white transition-all duration-300"
          >
            Learn more about Dev Inception
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
        </AnimatedSection>
      </div>
    </section>
  );
}
