"use client";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import React from "react";
import ReusableFeatureCard from "@/components/ui/cardLayout";
import { ecareCapabilitiesByIndustry, industriesData, industryMeta } from "@/data/industryData";



// ChallengeSolutionSection component defined outside IndustryPage
interface ChallengeSolutionSectionProps {
  pairedData: Array<{
    challenge: { title: string; description: string };
    solution: { title: string; description: string };
  }>;
  accent: string;
}

function ChallengeSolutionSection({ pairedData, accent }: ChallengeSolutionSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleCount = 3;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-400/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-6 lg:mb-8">
          <div className="lg:col-span-7">
            <p className="eyebrow text-rose-500/80">
              Challenge → Solution
            </p>

            <h2 className="h-section text-deep-blue">
              From <span className="gradient-text-dark">Problem</span> to <span className="gradient-text-dark">Progress</span>
            </h2>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto  rounded-2xl border border-deep-blue/5 shadow-sm">
          <table className="w-full   border-collapse">
            <thead className="bg-[#0a1628] ">
              <tr className="bg-deep-blue/5 border-b-2  border-deep-blue/20">
                <th className="text-left py-4 px-6 text-white/80 font-bold text-lg w-1/2">
                  The Challenge
                </th>
                <th className="text-left py-4 px-6 text-white/80 font-bold text-lg w-1/2">
                  Our Solution
                </th>
              </tr>
            </thead>

            <tbody>
              {pairedData
                .slice(0, showAll ? pairedData.length : visibleCount)
                .map((item, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-deep-blue/5 transition-all duration-300 ${idx % 2 === 0 ? "bg-white" : "bg-deep-blue/[0.02]"
                      } hover:bg-deep-blue/[0.04]`}
                  >
                    {/* Challenge */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex gap-4">
                        <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>

                        <div>
                          <h4 className="font-semibold text-deep-blue mb-1">
                            {item.challenge.title}
                          </h4>
                          {item.challenge.description && (
                            <p className="text-sm text-deep-blue/60 leading-relaxed">
                              {item.challenge.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Solution */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex gap-4">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: `${accent}15`,
                            border: `1px solid ${accent}30`,
                          }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2.4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>

                        <div>
                          <h4 className="font-semibold text-deep-blue mb-1">
                            {item.solution.title}
                          </h4>
                          {item.solution.description && (
                            <p className="text-sm text-deep-blue/60 leading-relaxed">
                              {item.solution.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {pairedData
            .slice(0, showAll ? pairedData.length : visibleCount)
            .map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-deep-blue/10 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Challenge */}
                <div className="mb-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
                      Challenge
                    </span>
                  </div>

                  <h4 className="font-semibold text-deep-blue text-lg mb-1">
                    {item.challenge.title}
                  </h4>
                  {item.challenge.description && (
                    <p className="text-sm text-deep-blue/60 leading-relaxed">
                      {item.challenge.description}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-deep-blue/10" />
                  <svg className="w-5 h-5 text-deep-blue/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <div className="flex-1 h-px bg-deep-blue/10" />
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${accent}15`,
                        border: `1px solid ${accent}30`,
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2.4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: accent }}
                    >
                      Our Solution
                    </span>
                  </div>

                  <h4 className="font-semibold text-deep-blue text-lg mb-1">
                    {item.solution.title}
                  </h4>
                  {item.solution.description && (
                    <p className="text-sm text-deep-blue/60 leading-relaxed">
                      {item.solution.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Show More / Less Button */}
        {pairedData.length > visibleCount && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group px-8 py-3 text-sm font-semibold text-deep-blue border-2 border-deep-blue/20 rounded-full hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all duration-300"
            >
              {showAll ? "Show Less" : `See All ${pairedData.length} Solutions`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function splitTitle(title: string): { firstHalf: string; secondHalf: string } {
  const mid = Math.floor(title.length / 2);
  // find nearest space to the midpoint so we don't cut a word in half
  let splitIndex = title.indexOf(' ', mid);
  if (splitIndex === -1) splitIndex = title.lastIndexOf(' ', mid);
  if (splitIndex === -1) splitIndex = mid; // fallback: no spaces at all

  const firstHalf = title.slice(0, splitIndex).trim();
  const secondHalf = title.slice(splitIndex).trim();

  return { firstHalf, secondHalf };
}
/* ───────── Main Component ───────── */

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industriesData[slug];
  const meta = industryMeta[slug];

  if (!industry) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] bg-section-dark flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <div className="text-7xl font-bold gradient-text">404</div>
          <h1 className="mt-4 h-section text-white">Industry Not Found</h1>
          <p className="mt-4 body-lead text-gray-400">
            The industry page you&apos;re looking for doesn&apos;t exist —
            but we probably still serve it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/industries"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neon-blue rounded-full text-white font-semibold text-sm hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
            >
              Back to Industries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const accent = meta?.accent ?? "#1E88E5";

  // Parse challenges and solutions into structured arrays
  const parsedChallenges = industry.challenges.map(challenge => {
    const [title, ...descParts] = challenge.split(": ");
    const description = descParts.join(": ");
    return { title, description };
  });

  const parsedSolutions = industry.solutions.map(solution => {
    const [title, ...descParts] = solution.split(": ");
    const description = descParts.join(": ");
    return { title, description };
  });

  // Create paired data for table (challenge and corresponding solution)
  // Pair them by index - challenges and solutions should be in corresponding order
  const pairedData = parsedChallenges.map((challenge, index) => ({
    challenge: challenge,
    solution: parsedSolutions[index] || { title: "", description: "" }
  }));

  return (
    <>
      {/* ───────── Hero with industry spec card ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">

        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${accent}1A` }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">


          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="flex items-center">
                  {meta && (
                    <div
                      className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        backgroundColor: `${accent}0A`,
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-[#ffffff]"
                        style={{
                          backgroundColor: accent,
                          boxShadow: `0 6px 14px -6px ${accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
                        }}
                      >
                        {meta.icon}
                      </div>

                      <span>
                        Industry · {meta?.shortLabel ?? "Sector"}
                      </span>
                    </div>
                  )}
                </div>

                <h1 className="mt-6 h-display text-white">
                  {(() => {
                    const { firstHalf, secondHalf } = splitTitle(industry.title);
                    return (
                      <>
                        <span className="text-white">{firstHalf}</span>{' '}
                        <span className="gradient-text">{secondHalf}</span>
                      </>
                    );
                  })()}
                </h1>                <p className="mt-6 body-lead text-gray-400">
                  {industry.heroDescription}
                </p>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            {meta && (
              <AnimatedSection direction="right" className="lg:col-span-5">
                <div
                  className="force-dark-card relative rounded-2xl bg-[#0a1628] backdrop-blur-md border border-white/10 p-7 lg:p-8 overflow-hidden"
                  style={{ boxShadow: `0 30px 60px -20px ${accent}30` }}
                >
                  <div className="relative">
                    <p className="eyebrow gradient-text-dark">
                      Sector snapshot
                    </p>

                    {/* Compliance */}
                    <div className="mt-6 flex items-start gap-4 pb-5 border-b border-white/[0.08]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Compliance & standards
                        </p>
                        <p className="mt-1 text-white text-sm font-semibold">
                          {meta.compliance}
                        </p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mt-5 flex items-start gap-4 pb-5 border-b border-white/[0.08]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Our experience
                        </p>
                        <p className="mt-1 text-white text-sm font-semibold">
                          {meta.projectsShipped}
                        </p>
                      </div>
                    </div>

                    {/* Engagement length */}
                    <div className="mt-5 flex items-start gap-4 pb-5 border-b border-white/[0.08]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Typical engagement
                        </p>
                        <p className="mt-1 text-white text-sm font-semibold">
                          {meta.typicalEngagement}
                        </p>
                      </div>
                    </div>

                    {/* Top focus */}
                    <div className="mt-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                        Top focus areas
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {meta.topFocus.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-full text-gray-300 bg-white/[0.04] border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* ───────── Challenges & Solutions Table ───────── */}
      <ChallengeSolutionSection pairedData={pairedData} accent={accent} />



      {/* ───────── Impact Beyond Technology ───────── */}
      {ecareCapabilitiesByIndustry[slug] && (
        <section className="py-20 bg-[#0a1628] relative overflow-hidden">

          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: `${accent}08` }}
          />
          <div
            className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
            style={{ backgroundColor: `${accent}06` }}
          />

          <div className="relative max-w-7xl mx-auto px-6">

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accent }} />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold gradient-text-fixed">
                  CASE STUDY </p>
              </div>

              <h2 className="h-section text-white">
                Impact Beyond <span className="gradient-text-fixed">Technology</span>
              </h2>
            </div>


            <div className="grid md:grid-cols-2 gap-6 pt-10 lg:gap-8">
              {ecareCapabilitiesByIndustry[slug].impact.metrics.map((metricGroup, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden p-6 lg:p-7"
                >
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-5 tracking-tight border-b border-white/[0.08] pb-3">
                    {metricGroup.title}
                  </h3>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-5">
                    {metricGroup.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-1">
                        <div
                          className="text-2xl lg:text-3xl font-bold tracking-tight"
                          style={{ color: "#ffffff" }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400 leading-relaxed">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Recent work in this industry ───────── */}
      {ecareCapabilitiesByIndustry[slug] && (
        <section className="py-20 bg-light-accent relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
            style={{ backgroundColor: `${accent}0A` }}
          />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-14">
              {/* Left column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                      Powering Every Stage of the {meta?.shortLabel ?? "Digital"} Journey
                    </span>
                  </div>
                </div>

                <h2 className="mt-3 h-section text-deep-blue">
                  {(() => {
                    const heading = ecareCapabilitiesByIndustry[slug]?.heading || 'Powering Every Stage';
                    const { firstHalf, secondHalf } = splitTitle(heading);
                    return (
                      <>
                        <span className="text-deep-blue">{firstHalf}</span>{' '}
                        <span className="gradient-text-dark">{secondHalf}</span>
                      </>
                    );
                  })()}
                </h2>
              </div>

              {/* Right column */}
              <div className="lg:col-span-5">
                <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto leading-relaxed">
                  {ecareCapabilitiesByIndustry[slug]?.subHeading}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ecareCapabilitiesByIndustry[slug].capabilities.map((item, index) => (
                <ReusableFeatureCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  accent={accent}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Final CTA ───────── */}
      <CTABanner
        eyebrow={`Built for ${meta?.shortLabel ?? "this sector"}`}
        heading={
          (() => {
            const { firstHalf, secondHalf } = splitTitle(industry.ctaHeading);
            return (
              <>
                <span className="text-white">{firstHalf}</span>{' '}
                <span className="gradient-text-fixed">{secondHalf}</span>
              </>
            );
          })()
        }
        description={
          <span style={{ whiteSpace: 'pre-line' }}>
            {industry.ctaDescription}
          </span>
        }
        primaryLabel="Let's build it."
        primaryHref="/contact"
        secondaryLabel="See all industries"
        secondaryHref="/industries"
      />
    </>
  );
}