"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your vision, goals, and requirements through deep discovery sessions.",
    color: "from-neon-blue to-cyan-400",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
  },
  {
    number: "02",
    title: "Research & Design",
    description:
      "Crafting wireframes, prototypes, and technical blueprints that align with your goals.",
    color: "from-violet-500 to-purple-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    description:
      "Bringing designs to life with clean, tested, and scalable code.",
    color: "from-emerald-400 to-teal-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
  },
  {
    number: "04",
    title: "Testing & QA",
    description:
      "Rigorous quality assurance ensures reliability, security, and performance.",
    color: "from-amber-400 to-orange-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Launch your product with ongoing support, monitoring, and iteration.",
    color: "from-rose-400 to-pink-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
  },
];

function DesktopProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // How far the horizontal strip slides: 0% -> -(totalWidth - viewport)
  // With 5 cards at ~360px each + gaps, roughly 2200px total, minus ~100vw
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  // Progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Trunk line draw
  const trunkWidth = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <div ref={sectionRef} className="hidden md:block relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-light-accent">
        {/* Header */}
        <div className="px-6 pt-8 pb-6 max-w-7xl mx-auto w-full">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
              Full-Cycle Development Services,{" "}
              <span className="gradient-text-dark">All Under One Roof</span>
            </h2>
            <p className="mt-3 text-deep-blue/60 max-w-2xl mx-auto text-sm">
              We cover the complete software lifecycle &ndash; from planning &
              design to deployment & support.
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal scrolling area */}
        <div className="flex-1 flex flex-col justify-center px-6 relative">
          {/* Progress bar at top */}
          <div className="max-w-4xl mx-auto w-full mb-8">
            <div className="h-1 rounded-full bg-deep-blue/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                style={{ width: progressWidth }}
              />
            </div>
          </div>

          {/* Cards strip */}
          <motion.div
            className="flex items-center gap-8 pl-[10vw]"
            style={{ x }}
          >
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                {/* Card */}
                <motion.div
                  className="relative flex-shrink-0 w-[340px] group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm">
                    {/* Number + Icon row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      >
                        {step.number}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-deep-blue/5 flex items-center justify-center text-deep-blue">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-deep-blue mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-deep-blue/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connector between cards */}
                {i < steps.length - 1 && (
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
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-deep-blue whitespace-nowrap">
                Project Live!
              </p>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <div className="mt-8 flex items-center justify-center gap-2 text-deep-blue/40 text-xs">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileProcess() {
  return (
    <div className="md:hidden py-16 px-6 bg-light-accent">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
          Our Approach
        </p>
        <h2 className="mt-3 text-3xl font-bold text-deep-blue">
          Full-Cycle Development,{" "}
          <span className="gradient-text-dark">All Under One Roof</span>
        </h2>
        <p className="mt-3 text-deep-blue/60 text-sm">
          We cover the complete software lifecycle.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical trunk */}
        <div className="absolute left-8 top-0 bottom-0 w-px">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12}>
              <div className="flex items-start gap-5">
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileInView={{ scale: [0, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ring-4 ring-light-accent`}
                  >
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                <div className="flex-1 p-5 rounded-2xl border border-deep-blue/5 bg-white/60 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-deep-blue">{step.icon}</div>
                    <h3 className="text-lg font-bold text-deep-blue">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-deep-blue/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkingProcess() {
  return (
    <section id="process">
      <DesktopProcess />
      <MobileProcess />
    </section>
  );
}
