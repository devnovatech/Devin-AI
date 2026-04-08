"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Support() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-white/5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-dark-surface to-neon-purple/10" />
            <div className="absolute inset-0 grid-bg opacity-50" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Need a Support?
              </h2>
              <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
                Need help with your next big idea? Our team is ready to build
                with you.
              </p>

              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="mailto:hello@devinception.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold tracking-wider text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300"
                >
                  Get in Touch
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
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
