"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Engineers" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-dark-card to-dark-surface border border-white/5 p-8 flex items-center justify-center">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Animated grid */}
                  <div className="absolute inset-0 grid-bg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 to-transparent" />

                  {/* Center content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <motion.div
                      className="text-6xl font-bold gradient-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      DI
                    </motion.div>
                    <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">
                      Dev Inception
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 blur-xl" />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div>
            <AnimatedSection direction="right">
              <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
                About Us
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Dev Inception
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed text-lg">
                Dev Inception delivers innovative technology solutions that bring
                ideas to life. Our mission is to empower businesses through
                digital transformation and engineering excellence.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                We are a team of passionate engineers, designers, and strategists
                who believe in building software that matters. From startups to
                Fortune 500 companies, we partner with ambitious teams to turn
                complex challenges into elegant, scalable solutions.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.1 * i}>
                  <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
