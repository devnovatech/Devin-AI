"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    label: "Web Platform",
    techs: [
      { name: "PHP", abbr: "php", color: "#777BB4" },
      { name: "JavaScript", abbr: "JS", color: "#F7DF1E" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6" },
      { name: "Python", abbr: "Py", color: "#3776AB" },
      { name: "Node.js", abbr: "No", color: "#68A063" },
      { name: "React.js", abbr: "Re", color: "#61DAFB" },
      { name: "Vue.js", abbr: "Vu", color: "#42B883" },
      { name: "Angular", abbr: "Ng", color: "#DD0031" },
      { name: "Laravel", abbr: "La", color: "#FF2D20" },
      { name: "Django", abbr: "Dj", color: "#092E20" },
      { name: "Symfony", abbr: "Sf", color: "#000000" },
      { name: "Express.js", abbr: "Ex", color: "#000000" },
    ],
  },
  {
    label: "Databases",
    techs: [
      { name: "PostgreSQL", abbr: "Pg", color: "#4169E1" },
      { name: "MongoDB", abbr: "Mo", color: "#47A248" },
      { name: "MySQL", abbr: "My", color: "#4479A1" },
      { name: "Redis", abbr: "Re", color: "#DC382D" },
      { name: "Firebase", abbr: "Fi", color: "#FFCA28" },
      { name: "DynamoDB", abbr: "Dy", color: "#4053D6" },
      { name: "Supabase", abbr: "Su", color: "#3ECF8E" },
      { name: "Elasticsearch", abbr: "Es", color: "#FEC514" },
    ],
  },
  {
    label: "Cloud & DevOps",
    techs: [
      { name: "AWS", abbr: "AW", color: "#FF9900" },
      { name: "Google Cloud", abbr: "GC", color: "#4285F4" },
      { name: "Azure", abbr: "Az", color: "#0078D4" },
      { name: "Docker", abbr: "Do", color: "#2496ED" },
      { name: "Kubernetes", abbr: "K8", color: "#326CE5" },
      { name: "Terraform", abbr: "Tf", color: "#7B42BC" },
      { name: "Jenkins", abbr: "Je", color: "#D24939" },
      { name: "GitHub Actions", abbr: "GA", color: "#2088FF" },
    ],
  },
  {
    label: "Mobile Apps",
    techs: [
      { name: "React Native", abbr: "RN", color: "#61DAFB" },
      { name: "Flutter", abbr: "Fl", color: "#02569B" },
      { name: "Swift", abbr: "Sw", color: "#F05138" },
      { name: "Kotlin", abbr: "Kt", color: "#7F52FF" },
      { name: "Dart", abbr: "Da", color: "#0175C2" },
      { name: "Ionic", abbr: "Io", color: "#3880FF" },
    ],
  },
  {
    label: "Other Frameworks",
    techs: [
      { name: "Next.js", abbr: "Nx", color: "#ffffff" },
      { name: "Nuxt.js", abbr: "Nu", color: "#00DC82" },
      { name: "GraphQL", abbr: "GQ", color: "#E535AB" },
      { name: "TailwindCSS", abbr: "Tw", color: "#06B6D4" },
      { name: "Go", abbr: "Go", color: "#00ADD8" },
      { name: "Rust", abbr: "Rs", color: "#DEA584" },
      { name: "Figma", abbr: "Fi", color: "#F24E1E" },
      { name: "Storybook", abbr: "Sb", color: "#FF4785" },
    ],
  },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            We Use <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We leverage the best tools and frameworks to build reliable,
            scalable solutions.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white/[0.03] border border-white/5">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="tech-tab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {categories[activeTab].techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group flex flex-col items-center gap-3 cursor-default"
              >
                {/* Hexagon-style icon container */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Background shape */}
                  <div className="absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/[0.06] group-hover:border-white/[0.12] group-hover:bg-white/[0.08] transition-all duration-300 rotate-1 group-hover:rotate-0" />
                  {/* Icon */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${tech.color}18`,
                      color: tech.color === "#000000" || tech.color === "#092E20" ? "#aaa" : tech.color,
                    }}
                  >
                    {tech.abbr}
                  </div>
                </div>

                {/* Name */}
                <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
