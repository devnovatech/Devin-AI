"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-20">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-neon-blue border border-neon-blue/30 rounded-full">
              Technology Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
          >
            From Strategy to Systems —{" "}
            <span className="gradient-text">We Build Smart IT Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            We build robust, scalable digital solutions tailored to your unique
            business goals. From mobile & web apps to machine learning systems
            &ndash; Bringing together engineering precision & business strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold tracking-wider text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
            >
              Unlock Expert Solutions Today
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            <a
              href="#services"
              className="px-8 py-4 border border-white/10 rounded-full text-gray-300 font-semibold text-sm hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Right: Animated tech circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-neon-blue/20 animate-spin-slow" />
            {/* Middle ring */}
            <div
              className="absolute inset-6 rounded-full border border-neon-purple/20 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            />
            {/* Inner ring */}
            <div className="absolute inset-12 rounded-full border border-neon-blue/30" />

            {/* Glow center */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-pulse-glow" />
            <div className="absolute inset-20 rounded-full bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold gradient-text">
                DI
              </span>
            </div>

            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={deg}
                className="absolute w-3 h-3 rounded-full bg-neon-blue"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${deg}deg) translateY(-${i % 2 === 0 ? 140 : 170}px) translate(-50%, -50%)`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
