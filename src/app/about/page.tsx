"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import React from "react";
import {
  stats,
  iconColors,
  missionPoints,
  values,
  culturePoints,
  jobOpenings,
  roles,
} from "@/data/aboutUsData";
import ReusableFeatureCard from "@/components/ui/cardLayout";



export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

export interface Value {
  title: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
}

export interface CulturePoint {
  title: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
}

export interface Role {
  title: string;
  key: keyof JobOpenings;
  icon: React.ReactNode;
  accent: string;
}

export interface JobOpenings {
  development: string[];
  marketing: string[];
  humanResources: string[];
  designers: string[];
}


// ============================================================================
// Main Page Component
// ============================================================================

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <AnimatedSection direction="left" className="lg:col-span-7">
              <h1 className="mt-7 h-display text-white">
                About <span className="gradient-text">Us</span>
              </h1>

              <p className="mt-7 body-lead text-gray-400 max-w-xl">
                At Dev Inception, we pride ourselves on offering dynamic IT
                services to suit your specific requirements. Our flexible approach
                means we can adjust our offerings to accommodate your evolving
                needs, whether you require comprehensive IT infrastructure
                support, strategic consultancy or software development.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neon-blue text-white font-bold tracking-wide text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                >
                  Work with us
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-2xl bg-neon-blue/20 translate-x-3 translate-y-3"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/AboutUs4.png"
                    alt="Dev Inception — together we build"
                    width={1379}
                    height={1141}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-service-banner">
        <div className="mx-auto max-w-[1320px] px-4 md:px-8 lg:px-6 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <div
                    className={`icon-container flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[index]} bg-opacity-10`}
                  >
                    <Icon className="h-6 w-6 gradient-text-fixed" />
                  </div>

                  <div className="flex flex-col">
                    <span className="banner-title text-3xl font-bold leading-none">
                      {stat.value}
                      {stat.suffix}
                    </span>

                    <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-light-accent relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="rounded-2xl bg-[#0a1628] border border-white/[0.07] p-7 lg:p-12 overflow-hidden relative">
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/[0.05] rounded-full blur-[100px]" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
              <div className="lg:col-span-4">
                <p className="eyebrow gradient-text-fixed">Our Mission</p>
                <h2 className="mt-3 h-section text-white">
                  What <br />{" "}
                  <span className="gradient-text-fixed">Drives Us</span>
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="body-lead text-white">
                  At Dev Inception, we help organizations turn complexity into
                  competitive advantage through technology that is purposeful,
                  scalable, and built for long-term impact.
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  {missionPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-neon-blue flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 body-lead text-white">
                  We combine strategic thinking with technical excellence to help
                  organizations adapt, grow, and lead in an increasingly digital
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Vision Section */}
      <section className="bg-light-accent relative">
        <div className="relative max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 gradient-text-fixed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">
                Our Journey
              </h3>
              <p className="text-deep-blue/70 leading-relaxed">
                Founded in 2010, Dev Inception helps organizations solve complex
                business challenges through technology that is purposeful,
                scalable, and built for long-term impact. We partner with
                startups, enterprises, and growing businesses to design and
                deliver digital systems that improve operations, accelerate
                growth, and create measurable value.
              </p>
              <p className="mt-4 text-deep-blue/70 leading-relaxed">
                Over the years, we have evolved into a multidisciplinary team of
                strategists, designers, and engineers united by a shared
                commitment to excellence. From navigating periods of disruption to
                supporting ambitious transformation initiatives, our focus has
                remained consistent: building technology that aligns with business
                objectives, adapts to change, and enables sustainable growth.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 gradient-text-fixed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4">
                Our Vision
              </h3>
              <p className="text-deep-blue/70 leading-relaxed">
                Our vision is to become a global leader in digital innovation -
                setting the benchmark for smart, scalable, and sustainable
                technology solutions. We aim to redefine how modern businesses
                grow, connect, and thrive by merging deep technical expertise with
                creative thinking.
              </p>
              <p className="mt-4 text-deep-blue/70 leading-relaxed">
                In a world where change is constant, we envision a future where
                digital transformation is not a luxury, but a universal
                opportunity. We strive to build technologies that are not only
                powerful but accessible and adaptable to diverse industries and
                needs. Through continuous learning, cutting-edge tools, and a
                user-first mindset, we aspire to shape the future of digital
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  Our edge
                </span>
              </div>
              <h2 className="h-section text-deep-blue">
                What makes <span className="gradient-text-dark">us different.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                What sets us apart is a blend of deep expertise, modern
                engineering, and execution speed that drives real impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((item, index) => (
              <ReusableFeatureCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                accent="#4fc3f7"
              />
            ))}
          </div>
        </div>
      </section>




      {/* Careers Section */}
      <section className="py-20 lg:py-24 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm mb-4 group hover:border-white/[0.2] transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-fixed">
                  Careers
                </span>
              </div>

              <h2 className="h-section text-white leading-[1.1]">
                Ready to start your{" "}
                <span className="gradient-text-fixed relative">
                  career with us?
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="body-base text-white max-w-md lg:ml-auto">
                Whether you're an expert or just starting your career, Dev
                Inception offers an environment built for growth, learning, and
                leadership.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {culturePoints.map((item, index) => (
              <div
                key={item.title}
                className="group relative h-full transform transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-7 lg:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1E88E5]/5 to-transparent" />
                  </div>

                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${item.accent}, ${item.accent}88, transparent)`,
                    }}
                  />

                  <div
                    className="absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{ color: item.accent }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement, {
                      className: "w-32 h-32",
                    })}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        color: item.accent,
                        boxShadow: `0 0 30px ${item.accent}10`,
                      }}
                    >
                      <div className="transition-transform duration-300 group-hover:rotate-6">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 lg:py-24 bg-light-accent relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-blue/[0.05] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/[0.1] bg-white/70 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase gradient-text-dark">
                  Current Openings
                </span>
              </div>
              <h2 className="h-section text-deep-blue">
                Join our <span className="gradient-text-dark">team</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                We're always looking for talented people to join our mission. If
                you're passionate about building great products, we want to hear
                from you.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((role) => {
              return (
                <div
                  key={role.key}
                  className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-5 lg:p-6 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12]"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${role.accent}, ${role.accent}55, transparent)`,
                    }}
                  />

                  <div
                    className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-[0.06] group-hover:opacity-[0.15] transition-opacity duration-500"
                    style={{ backgroundColor: role.accent }}
                  />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: role.accent,
                          color: "white",
                          boxShadow: `0 10px 22px -8px ${role.accent}80`,
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.7}
                        >
                          {role.icon}
                        </svg>
                      </span>
                    </div>

                    <h3
                      className="mt-4 text-base lg:text-[17px] font-bold text-deep-blue tracking-tight leading-snug transition-colors duration-300 group-hover:text-[color:var(--accent)]"
                      style={
                        {
                          "--accent": role.accent,
                        } as React.CSSProperties
                      }
                    >
                      {role.title}
                    </h3>

                    <div className="mt-3 flex-1">
                      {jobOpenings[role.key].length > 0 ? (
                        <ul className="space-y-2">
                          {jobOpenings[role.key].map((job, jobIdx) => (
                            <li
                              key={jobIdx}
                              className="flex items-start gap-2 text-sm text-deep-blue/60"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300 group-hover:scale-125"
                                style={{ backgroundColor: role.accent }}
                              />
                              <span className="leading-relaxed">{job}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-deep-blue/60 leading-relaxed">
                          No openings currently.
                          <br />
                          <a
                            href="mailto:HR@devinception.com"
                            className="inline-block mt-2 text-sm transition-all duration-300 hover:underline"
                            style={{ color: role.accent }}
                          >
                            HR@devinception.com →
                          </a>
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-2">
                      <div
                        className="h-[1px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                        style={{
                          background: `linear-gradient(90deg, ${role.accent}, ${role.accent}55)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        eyebrow="Let's build together"
        heading={
          <>
            Have an idea? Let&apos;s create something{" "}
            <span className="gradient-text">extraordinary.</span>
          </>
        }
        description="Need help with your next big idea? Our team is ready to build with you."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}