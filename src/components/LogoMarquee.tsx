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

function LogoItem({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <div className="flex-shrink-0 mx-8 h-16 w-40 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500">
      <Image
        src={src}
        alt={name}
        width={160}
        height={64}
        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7FA] py-16 lg:py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] tracking-[0.35em] uppercase text-slate-500 mb-5">
              Together, We Build
            </p>
            <p className="mt-2 text-base font-semibold text-slate-500  leading-tight">
              250+ projects shipped <br />
              for ambitious teams.
            </p>


            <div className="flex items-center gap-3 mt-7">
              <div className="flex text-orange-500 text-lg">
                ★ ★ ★ ★ ★
              </div>

              <span className="text-lg text-slate-700">
                4.9 · 200+ reviews
              </span>
            </div>
          </motion.div>

          {/* RIGHT LOGO MARQUEE */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F7F7FA] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F7F7FA] to-transparent z-10" />

            <div className="flex w-max animate-marquee will-change-transform">
              {[...logos, ...logos].map((logo, index) => (
                <LogoItem
                  key={`${logo.name}-${index}`}
                  name={logo.name}
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}