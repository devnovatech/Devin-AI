"use client";

import { useEffect, useRef, useState, ReactNode, Key } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import AnimatedSection from "./AnimatedSection";
import { pillars } from "@/data/homePageData";

export interface Pillar {
  slug?: Key | null | undefined;
  shortLabel?: ReactNode;
  name?: ReactNode;
  challenges?: any;
  deliverables?: any;
  title: string;
  description: string;
  accent: string;
  icon: ReactNode;
}

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 lg:py-20 relative overflow-hidden bg-section-about">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 dotted-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-4">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">The Company</span>
            </div>
            <h2 className="h-section text-deep-blue">
              A company Engineered for <span className="gradient-text-dark">Businesses that Scale.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              Built by engineers and strategists who refused to settle for surface-level delivery. We embed across your entire operation — from early-stage architecture to enterprise-grade transformation.
            </p>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT - Image with badges */}
          <div className="lg:col-span-6 lg:translate-x-[2%]">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-neon-blue/25 to-neon-purple/15" />

              <div className="relative rounded-2xl overflow-hidden ring-1 ring-deep-blue/10 shadow-2xl shadow-deep-blue/20 bg-white">
                <div className="relative w-full p-6 h-[500px]">
                  <Image
                    src="/AboutUs.png"
                    alt="Clients Devinception has shipped alongside"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-deep-blue/85 via-deep-blue/40 to-transparent p-5">
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Quote and principles */}
          <div className="lg:col-span-6">
            <div>
              <div className="relative rounded-2xl bg-white border border-deep-blue/[0.07] p-6 shadow-xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-neon-blue/8 blur-2xl" />
                <svg className="absolute top-4 right-5 w-10 h-10 text-neon-blue/15" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 12.832 1 20.96 1 26.336 4.288 29.6 8.32 29.6c3.776 0 6.56-3.04 6.56-6.624 0-3.584-2.56-6.176-5.92-6.176-.704 0-1.6.128-1.792.192.384-3.04 3.328-6.752 6.272-8.864L9.352 4zm17.952 0c-4.832 3.456-8.288 8.832-8.288 16.96 0 5.376 3.296 8.64 7.328 8.64 3.712 0 6.56-3.04 6.56-6.624 0-3.584-2.624-6.176-5.984-6.176-.704 0-1.536.128-1.728.192.384-3.04 3.264-6.752 6.208-8.864L27.304 4z" /></svg>
                <p className="relative text-base lg:text-lg text-deep-blue/85 leading-relaxed font-medium">
                  &ldquo;Technology should deliver measurable results—not remain a presentation. We build and launch production-ready systems, from intelligent automation to cloud-native infrastructure, through one accountable delivery model and one consistent standard—from kickoff to go-live.&rdquo;
                </p>
                <div className="relative mt-2 pt-2 border-t border-deep-blue/[0.07] flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src="/site_logo2.png"
                      alt="Dev Inception"
                      width={70}
                      height={70}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-deep-blue">Ali Abbas</p>
                    <p className="text-xs text-deep-blue/55">CEO </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {pillars.map((p) => (
                <div key={p.title}>
                  <div className="group relative flex items-start gap-3.5 rounded-xl bg-white/60 border border-deep-blue/[0.06] hover:bg-white hover:border-deep-blue/10 hover:shadow-md transition-all duration-300 p-4" style={{ "--accent": p.accent } as React.CSSProperties}>
                    <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300" style={{ backgroundColor: `${p.accent}15`, color: p.accent }}>{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-deep-blue tracking-tight">{p.title}</h4>
                      <p className="mt-0.5 text-xs text-deep-blue/55 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}