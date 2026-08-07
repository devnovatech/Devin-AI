"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import AnimatedSection from "@/components/AnimatedSection";

// FAQ data stored directly in this component
const faqs = [
    {
        q: "What types of projects does Dev Inception typically deliver?",
        a: "We partner with organizations to design, build, optimize, and scale digital products, platforms, and operational systems. Our capabilities span software engineering, AI solutions, web platforms, ecommerce, UI/UX design, quality engineering, project management, and staff augmentation."
    },
    {
        q: "Do you work with startups, mid-sized businesses, or enterprises?",
        a: "We support organizations at every stage of growth. Whether you're launching a new product, modernizing legacy systems, or scaling enterprise operations, our engagement model adapts to your business objectives, technical requirements, and delivery needs."
    },
    {
        q: "How do you ensure project transparency and accountability?",
        a: "Every engagement follows a structured delivery framework with clearly defined milestones, documented requirements, regular stakeholder reviews, progress reporting, and measurable success criteria. Clients maintain visibility throughout the entire delivery lifecycle."
    },
    {
        q: "Can you integrate with our existing team and technology stack?",
        a: "Yes. Our teams regularly work within existing engineering environments, product workflows, cloud infrastructures, and operational processes. We prioritize seamless collaboration and alignment with your established tools and standards."
    },
    {
        q: "Do you provide dedicated resources through staff augmentation?",
        a: "Yes. We provide experienced engineers, designers, QA specialists, project managers, and technical consultants who integrate directly into your team, workflows, and delivery processes while maintaining full alignment with your objectives."
    },
    {
        q: "How do you handle different time zones?",
        a: "We operate on our clients' schedules. Our teams align working hours, communication cadences, and delivery workflows with your preferred time zone to ensure efficient collaboration, faster decision-making, and seamless project execution regardless of location."
    },
    {
        q: "How do you approach quality assurance and testing?",
        a: "Quality is embedded throughout the development lifecycle. We combine manual testing, automated testing, performance validation, security reviews, and continuous quality monitoring to ensure reliable and production-ready outcomes."
    },
    {
        q: "Can you support AI and automation initiatives?",
        a: "Yes. We design and implement AI-powered solutions ranging from workflow automation and intelligent assistants to predictive analytics, machine learning systems, and custom AI integrations tailored to business objectives."
    },
    {
        q: "What happens after a project is launched?",
        a: "Our engagement does not end at deployment. We provide post-launch support, monitoring, optimization, performance analysis, knowledge transfer, and continuous improvement services to help maximize long-term value."
    },
    {
        q: "How are project costs and timelines determined?",
        a: "Following discovery, we establish a detailed scope, technical approach, delivery roadmap, and investment estimate. This process ensures alignment on expectations, milestones, timelines, and outcomes before development begins."
    },
    {
        q: "Do you sign NDAs and follow security best practices?",
        a: "Absolutely. We routinely work with confidential business information, proprietary systems, and sensitive data. Non-disclosure agreements, secure development practices, access controls, and compliance requirements are incorporated into our engagement process."
    },
    {
        q: "What makes Dev Inception different from a traditional development agency?",
        a: "We operate as a strategic technology partner rather than a delivery vendor. By combining engineering, AI, design, quality, delivery management, and operational expertise under one engagement model, we help organizations achieve measurable business outcomes—not just completed projects."
    }
];


/* ───────── FAQ Grid Item ───────── */
function FaqGridItem({
    q,
    a,
    isOpen,
    onToggle,
    index,
}: {
    q: string;
    a: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) {
    return (
        <div
            className={`relative rounded-xl sm:rounded-2xl shadow-lg border border-gray-300 transition-all duration-300 ${isOpen
                ? "bg-white/[0.03] border-neon-blue/20 shadow-lg shadow-neon-blue/5"
                : "bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15]"
                }`}
        >
            <button
                type="button"
                onClick={onToggle}
                className="w-full text-left p-4 sm:p-5 md:p-6 flex flex-col gap-3 group"
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2 sm:gap-3 flex-1">
                        <span className="font-mono text-[10px] font-bold text-neon-blue/60 group-hover:text-neon-blue/80 transition-colors pt-1 tabular-nums shrink-0">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs sm:text-sm md:text-base font-semibold transition-colors text-deep-blue group-hover:text-neon-blue/90">
                            {q}
                        </span>
                    </div>
                    <span
                        className={`shrink-0 mt-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                            ? "rotate-45 bg-neon-blue border-transparent text-white shadow-lg shadow-neon-blue/30"
                            : "border-white/15 text-deep-blue/40 group-hover:border-neon-blue/40 group-hover:text-neon-blue"
                            }`}
                    >
                        <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </span>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <p className="pt-2 text-xs sm:text-sm text-deep-blue/55 leading-relaxed">
                                {a}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    // Split FAQs into pairs for grid layout
    const faqPairs = [];
    for (let i = 0; i < faqs.length; i += 2) {
        faqPairs.push(faqs.slice(i, i + 2));
    }

    return (
        <>
            {/* Hero Section - Left Content + Right Statistics */}
            <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 grid-bg" />
                <div
                    className="absolute top-1/4 left-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-neon-blue/[0.08] rounded-full blur-[140px] pointer-events-none"
                />
                <div
                    className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] bg-neon-purple/[0.06] rounded-full blur-[120px] pointer-events-none"
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div>
                            <AnimatedSection direction="right">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                                    Everything you need to{" "}
                                    <span className="gradient-text">know.</span>
                                </h1>

                                <p className="mt-4 sm:mt-5 text-gray-400 text-sm sm:text-base lg:text-lg max-w-lg">
                                    From pricing and timelines to NDAs and ongoing support — we've answered the most common questions to help you move forward with confidence.
                                </p>

                                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-neon-blue text-white font-semibold text-xs sm:text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                                    >
                                        Still have questions? Contact us
                                    </Link>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Column - Statistics Dashboard */}
                        <AnimatedSection direction="left" className="relative rounded-xl force-dark-card">
                            {/* Background glow */}
                            <div className="absolute -top-10 -right-10 w-40 sm:w-60 h-40 sm:h-60 bg-neon-blue/20 rounded-full blur-[100px]" />
                            <div className="absolute -bottom-10 -left-10 w-40 sm:w-60 h-40 sm:h-60 bg-neon-purple/20 rounded-full blur-[100px]" />

                            <div className="relative bg-[#0a1628] backdrop-blur-sm border border-white/[0.08] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
                                {/* Header (same as Industry card style) */}
                                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-neon-blue flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 7v4a1 1 0 001 1h3m10-6h3a1 1 0 011 1v4m0 0v10a1 1 0 01-1 1h-3m-10 0H4a1 1 0 01-1-1V11m16-4H4"
                                            />
                                        </svg>
                                    </div>

                                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Performance Overview
                                    </span>
                                </div>

                                {/* Stats grid (industry style) */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <div className="bg-white/[0.04] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-white">200+</div>
                                        <div className="text-[10px] sm:text-xs text-gray-400 mt-1">Projects</div>
                                    </div>

                                    <div className="bg-white/[0.04] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-neon-blue">50+</div>
                                        <div className="text-[10px] sm:text-xs text-gray-400 mt-1">Experts</div>
                                    </div>

                                    <div className="bg-white/[0.04] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-neon-purple">100%</div>
                                        <div className="text-[10px] sm:text-xs text-gray-400 mt-1">Satisfaction</div>
                                    </div>

                                    <div className="bg-white/[0.04] rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-emerald-400">24/7</div>
                                        <div className="text-[10px] sm:text-xs text-gray-400 mt-1">Support</div>
                                    </div>
                                </div>

                                {/* Tags (like industry card) */}
                                <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                                    {["Growth", "Scale", "Performance", "Reliability"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-gray-300 bg-white/[0.04] rounded-full border border-white/[0.06]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* FAQ List - Grid Layout with 2 per row */}
            <section
                id="faq"
                className="min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 relative bg-section-services overflow-hidden"
            >
                {/* background */}
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-end mb-8 sm:mb-12">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neon-blue">
                                    FAQ
                                </p>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue">
                                Questions,{" "}
                                <span className="gradient-text-dark">Answered</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="text-sm sm:text-base text-gray-400 max-w-md lg:ml-auto">
                                Quick answers to what most teams ask before kickoff. Don&apos;t
                                see your question?{" "}
                                <Link
                                    href="/contact"
                                    className="text-neon-blue hover:underline font-semibold"
                                >
                                    Just ask.
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* FAQ Grid - 2 columns on tablet/desktop, 1 on mobile */}
                    <div className="space-y-3 sm:space-y-4">
                        {faqPairs.map((pair, pairIndex) => (
                            <div key={pairIndex} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                {pair.map((faq, index) => {
                                    const globalIndex = pairIndex * 2 + index;
                                    return (
                                        <FaqGridItem
                                            key={faq.q}
                                            q={faq.q}
                                            a={faq.a}
                                            index={globalIndex}
                                            isOpen={openFaq === globalIndex}
                                            onToggle={() => setOpenFaq(openFaq === globalIndex ? -1 : globalIndex)}
                                        />
                                    );
                                })}
                                {/* Add empty placeholder if odd number */}
                                {pair.length === 1 && (
                                    <div className="hidden md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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