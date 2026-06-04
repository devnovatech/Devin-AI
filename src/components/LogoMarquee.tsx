"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Nokia", src: "/clients/Nokia.png" },
  { name: "SolarWinds", src: "/clients/SolarWinds.png" },
  { name: "Strava", src: "/clients/strave-company.png" },
  { name: "Syntronic", src: "/clients/Syntronic.png" },
  { name: "DeerCast", src: "/clients/DearCast.png" },
  { name: "Ericsson", src: "/clients/ericssion.png" },
  { name: "American Airlines", src: "/clients/american.png" },
  { name: "Adbox", src: "/clients/Adbox.png" },
  { name: "MaxHub", src: "/clients/maxhub.png" },
  { name: "Radiant", src: "/clients/radiant.png" },
];

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex-shrink-0 mx-3 px-3 flex items-center justify-center h-14 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
      <Image
        src={src}
        alt={`${name} logo`}
        width={128}
        height={56}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-12 lg:py-14 relative overflow-hidden bg-section-trust">
      {/* Subtle dotted grid background */}
      <div className="absolute inset-0 dotted-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 mb-7"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-deep-blue/50">
            Teams we have worked with
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-px bg-neon-blue/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
            <span className="w-8 h-px bg-neon-blue/40" />
          </div>
        </motion.div>

        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} src={logo.src} name={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
