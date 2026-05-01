"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

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
    <div className="flex-shrink-0 mx-4 px-2 border border-deep-blue/10 rounded-lg bg-white/50 hover:border-deep-blue/30 hover:bg-white/80 transition-all duration-300 group shadow-sm flex items-center justify-center h-20 w-36 overflow-hidden">
      <Image
        src={src}
        alt={`${name} logo`}
        width={160}
        height={80}
        className="h-full w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="pt-12 relative overflow-hidden bg-light-accent">
      <AnimatedSection className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
          Trusted by Industry Leaders
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-deep-blue">
          Our Engineers Have Worked With
        </h2>
      </AnimatedSection>

      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-light-accent to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-light-accent to-transparent z-10" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} src={logo.src} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
