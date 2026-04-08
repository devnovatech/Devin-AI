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
    <div className="flex-shrink-0 mx-8 px-8 py-4 border border-deep-blue/10 rounded-xl bg-white/50 hover:border-deep-blue/30 hover:bg-white/80 transition-all duration-300 group shadow-sm">
      <span className="text-lg font-semibold text-deep-blue/40 group-hover:text-deep-blue transition-all duration-500">
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="py-12 relative overflow-hidden bg-light-accent">
      <AnimatedSection className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
          Trusted by Industry Leaders
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-deep-blue">
          Our Engineers Have Worked With
        </h2>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light-accent to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light-accent to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo}-${i}`} name={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
