"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#68A063" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#FFD43B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "GraphQL", color: "#E535AB" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "Redis", color: "#DC382D" },
  { name: "Go", color: "#00ADD8" },
  { name: "Flutter", color: "#02569B" },
  { name: "Figma", color: "#F24E1E" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
            Tech Stack
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Technologies
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We leverage the best tools and frameworks to build reliable,
            scalable solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-neon-blue/30 hover:bg-white/[0.05] transition-all duration-300 text-center cursor-default"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 30px ${tech.color}10, 0 0 20px ${tech.color}08`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl font-bold mb-3"
                    style={{
                      backgroundColor: `${tech.color}15`,
                      color: tech.color,
                    }}
                  >
                    {tech.name.slice(0, 2)}
                  </div>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
