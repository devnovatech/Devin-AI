"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { STACK } from "@/data/homePageData";

const TOTAL = STACK.reduce((acc, c) => acc + c.tools.length, 0);

export function TechStack() {
  const [active, setActive] = useState("frontend");
  const cat = STACK.find((c) => c.id === active) ?? STACK[0];

  return (
    <section id="tech-stack" className="flex items-center py-10 lg:py-20 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dotted-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Tech Stack</span>
            </div>
            <h2 className="h-section text-deep-blue">
              Stack agnostic. <span className="gradient-text-dark">Solution-Focused.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Across eight technology categories, we work with more than {TOTAL}  tools, frameworks, and platforms—selecting each technology according to the product, infrastructure, and business requirements. Explore the technologies we use most frequently, alongside the broader ecosystem our delivery capabilities support.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {STACK.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-deep-blue/90 bg-deep-blue/90 text-white"
                    : "border-deep-blue/20 bg-white text-deep-blue hover:border-deep-blue/40"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Tool chip cloud — fixed height container */}
        <div className="mt-6 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {cat.tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.02 }}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-deep-blue/20 bg-white px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-[0_8px_20px_-12px_rgba(36,134,197,0.5)]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-deep-blue/90 text-[10px] font-bold text-white transition-colors group-hover:bg-brand-500">
                    {t.abbr}
                  </span>
                  <span className="text-sm font-medium tracking-tight text-deep-blue/90">
                    {t.name}
                  </span>
                </motion.div>
              ))}

              {/* "+ more" trailing chip */}
              <div className="inline-flex items-center gap-2 rounded-full border border-dashed border-deep-blue/30 bg-transparent px-3 py-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-deep-blue/50">
                  + open to more
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}