"use client";

import AnimatedSection from "./AnimatedSection";

const logos = [
  "Nokia",
  "SolarWinds",
  "Strava",
  "Syntronic",
  "DeerCast",
  "Ericsson",
  "American Airlines",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 mx-8 px-8 py-4 border border-white/5 rounded-xl bg-white/[0.02] hover:border-neon-blue/30 hover:bg-white/[0.05] transition-all duration-300 group">
      <span className="text-lg font-semibold text-gray-500 grayscale group-hover:grayscale-0 group-hover:text-neon-blue transition-all duration-500">
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-20 relative overflow-hidden">
      <AnimatedSection className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
          Trusted by Industry Leaders
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
          Our Engineers Have Worked With
        </h2>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050816] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050816] to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo}-${i}`} name={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
