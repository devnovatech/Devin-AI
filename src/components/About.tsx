"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 250, suffix: "+", label: "Projects Done" },
  { value: 50, suffix: "+", label: "Engineers" },
  { value: 15, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Results Guaranteed" },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Offset accent block */}
              <div
                className="absolute inset-0 rounded-2xl bg-neon-blue/20 translate-x-3 translate-y-3"
                aria-hidden="true"
              />
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
                <Image
                  src="/companies-porfolio.png"
                  alt="Companies we've partnered with"
                  width={1338}
                  height={1176}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto block"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div>
            <AnimatedSection direction="right">
              <p className="eyebrow text-neon-blue">Together, We Build</p>
              <h2 className="mt-3 h-section text-white">
                Dev Inception
              </h2>
              <p className="mt-6 body-lead text-gray-400">
                From fast-growing startups to established Fortune 500 companies,
                we&apos;ve partnered with brands that dare to innovate. Our
                collaborations are built on trust, strategy & results &mdash;
                delivering design solutions that don&apos;t just look good, but
                move the needle.
              </p>
              <p className="mt-4 body-base text-gray-400">
                With each project, we don&apos;t just build visuals &mdash; we
                build impact, together.
              </p>
            </AnimatedSection>

            {/* Stats — glassy on dark */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.1 * i}>
                  <div className="group relative p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-neon-blue/30 transition-all duration-300 backdrop-blur-sm">
                    {/* Soft accent bloom */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-neon-blue/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative text-3xl font-bold gradient-text">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="relative mt-2 text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
