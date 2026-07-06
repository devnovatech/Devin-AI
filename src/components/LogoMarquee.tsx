"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const logos = [
  { name: "Nokia", src: "/clients/Nokia1.png" },
  { name: "SolarWinds", src: "/clients/SolarWinds.png" },
  { name: "Strava", src: "/clients/strave-company.png" },
  { name: "Syntronic", src: "/clients/Syntronic.png" },
  { name: "DeerCast", src: "/clients/DearCast.png" },
  { name: "Ericsson", src: "/clients/ericssion1.png" },
  { name: "American Airlines", src: "/clients/american.png" },
  { name: "Adbox", src: "/clients/Adbox1.png" },
  { name: "Magikk", src: "/clients/Magikk1.png" },
];

function LogoItem({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <div className="flex-shrink-0 mx-8 h-24 w-48 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500">
      <Image
        src={src}
        alt={name}
        width={200}
        height={120}
        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="border-y border-white/[0.08] bg-section-trust">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-8 lg:px-12 py-6">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                Together, We Build
              </span>
            </div>

            <p className="mt-2 text-base font-semibold leading-tight text-gray-900">
              250+ projects shipped <br />
              for ambitious teams.
            </p>

            <div className="mt-3 flex items-center gap-1">
              {[...Array(5)].map((_, k) => (
                <Star
                  key={k}
                  size={20}
                  className="fill-[#ff6b3d] text-[#ff6b3d]"
                />
              ))}

              <span className="ml-1.5 text-sm font-medium text-gray-400">
                4.9 · 200+ reviews
              </span>
            </div>
          </div>

          <div
            className="md:col-span-9 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <div className="flex animate-marquee gap-6 whitespace-nowrap">
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0">
                  <LogoItem name={logo.name} src={logo.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}