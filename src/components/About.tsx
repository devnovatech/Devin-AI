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
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Offset accent block — adds depth without decoration */}
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
              <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
                Together, We Build
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Dev Inception
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed text-lg">
                From fast-growing startups to established Fortune 500 companies,
                we&apos;ve partnered with brands that dare to innovate. Our
                collaborations are built on trust, strategy & results &mdash;
                delivering design solutions that don&apos;t just look good, but
                move the needle.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                With each project, we don&apos;t just build visuals &mdash; we
                build impact, together.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={0.1 * i}>
                  <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="text-3xl font-bold gradient-text">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
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
