"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Dev Inception transformed our outdated platform into a modern, scalable solution. Their team felt like an extension of ours.",
    name: "Sarah Chen",
    role: "CTO",
    company: "FinFlow Technologies",
  },
  {
    quote:
      "From concept to deployment, they delivered our mobile app ahead of schedule. The quality exceeded our expectations.",
    name: "Marcus Rivera",
    role: "Founder & CEO",
    company: "HealthBridge",
  },
  {
    quote:
      "Their AI/ML team built a recommendation engine that boosted our conversion rate by 40%. Absolutely brilliant work.",
    name: "Emily Larsson",
    role: "VP of Product",
    company: "ShopSphere",
  },
  {
    quote:
      "The staff augmentation model was exactly what we needed. Skilled engineers who integrated seamlessly with our team.",
    name: "David Park",
    role: "Engineering Manager",
    company: "CloudNine SaaS",
  },
  {
    quote:
      "Their UX design process is thorough and user-focused. Our customer satisfaction scores jumped 35% after the redesign.",
    name: "Amara Osei",
    role: "Head of Product",
    company: "EduTech Global",
  },
  {
    quote:
      "Dev Inception doesn't just write code, they understand business. That strategic thinking is what sets them apart.",
    name: "James O'Brien",
    role: "COO",
    company: "ScaleUp Ventures",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[120px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
            Client Stories
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-neon-blue/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
