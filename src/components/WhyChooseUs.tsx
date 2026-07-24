"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, X, Check } from "lucide-react";
import  { COMPARISONS } from "@/data/homePageData";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-deep-blue/10 bg-section-why">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-6">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">Why Us</span>
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-deep-blue">
              Why Businesses Choose <span className="gradient-text-dark">Dev Inception.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
              See how a typical agency engagement compares with the delivery standards, accountability, and experienced talent built into every Dev Inception engagement.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className=" overflow-hidden rounded-2xl border border-deep-blue/10">
          {/* Header row */}
          <div className="grid grid-cols-12 items-center bg-deep-blue/5">
            <div className="col-span-12 hidden border-r border-deep-blue/10 px-5 py-4 md:col-span-3 md:block">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-deep-blue/50">
                Category
              </p>
            </div>
            <div className="col-span-6 border-r border-deep-blue/10 px-5 py-4 md:col-span-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-deep-blue/10 text-deep-blue/60">
                  <X size={14} strokeWidth={2.5} />
                </span>
                <p className="text-[0.95rem] font-bold text-deep-blue/70">Typical agency</p>
              </div>
            </div>
            <div className="col-span-6 px-5 py-4 md:col-span-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-[#0A1628] text-white">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <p className="text-[0.95rem] font-bold text-deep-blue">Dev Inception</p>
              </div>
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, i) => (
            <div
              key={row.category}
              className="grid grid-cols-12 items-stretch border-t border-deep-blue/10"
            >
              {/* Category */}
              <div className="col-span-12 border-b border-deep-blue/10 bg-deep-blue/5 px-5 py-3 md:col-span-3 md:border-b-0 md:border-r">

                <p className="mt-1 text-[0.95rem] font-bold tracking-tight text-deep-blue">
                  {row.category}
                </p>
              </div>

              {/* Them */}
              <div className="col-span-6 border-r border-deep-blue/10 px-4 py-4 md:col-span-4">
                <p className="text-[0.95rem] leading-relaxed text-deep-blue/40 line-through decoration-deep-blue/20">
                  {row.them}
                </p>
              </div>

              {/* Us */}
              <div className="group relative col-span-6 px-4 py-4 transition-colors hover:bg-deep-blue/5 md:col-span-5">
                <p className="text-[0.95rem] font-medium leading-relaxed text-deep-blue/90">
                  {row.us}
                </p>
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-[#0A1628] transition-transform group-hover:scale-y-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}