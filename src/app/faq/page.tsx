"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

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

/* ───────── FAQ accordion item ───────── */
function FaqRow({
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
            className={`relative border-b border-white/[0.08] transition-colors duration-300 ${isOpen ? "bg-white/[0.02]" : ""
                }`}
        >
            {/* Accent left bar when open */}
            <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-neon-blue"
                initial={false}
                animate={{ height: isOpen ? 32 : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />

            <button
                type="button"
                onClick={onToggle}
                className="w-full text-left py-5 pl-5 pr-5 flex items-start justify-between gap-4 group"
            >
                <div className="flex items-start gap-4">
                    <span className="font-mono text-[11px] font-bold text-deep-blue/55 group-hover:text-neon-blue/80 transition-colors pt-1.5 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                        className="text-base sm:text-lg font-semibold transition-colors text-deep-blue"
                    >
                        {q}
                    </span>
                </div>
                <span
                    className={`shrink-0 mt-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "rotate-45 bg-neon-blue border-transparent text-white shadow-lg shadow-neon-blue/40"
                        : "border-white/15 text-deep-blue/55 group-hover:border-neon-blue/40 group-hover:text-neon-blue"
                        }`}
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
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
                        <p className="pb-6 pl-[3.25rem] pr-12 body-base text-deep-blue/55 leading-relaxed">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 lg:pt-36 pb-16 bg-section-dark relative overflow-hidden">
                <div className="absolute inset-0 grid-bg" />
                <div
                    className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-blue/[0.08] rounded-full blur-[140px] pointer-events-none"
                />
                <div
                    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/[0.06] rounded-full blur-[120px] pointer-events-none"
                />

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75 animate-ping" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
                        </span>
                        <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                            Frequently Asked Questions
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Everything you need to{" "}
                        <span className="gradient-text">know.</span>
                    </h1>

                    <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
                        From pricing and timelines to NDAs and ongoing support — we've answered the most common questions to help you move forward with confidence.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue text-white font-semibold text-sm hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/40 transition-all duration-300"
                        >
                            Still have questions? Contact us
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ List - All FAQs */}
  <section
      id="faq"
      className="min-h-screen flex flex-col justify-center py-16 lg:py-20 relative bg-section-services overflow-hidden"
    >                {/* background */}
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent " />

                <div className="relative max-w-4xl mx-auto px-6">

                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-neon-blue">
                                    FAQ
                                </p>
                            </div>
                            <h2 className="h-section text-deep-blue">
                                Questions,{" "}
                                <span className="gradient-text">answered.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="body-base text-gray-400 max-w-md lg:ml-auto">
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

                    {/* FAQ container */}
                    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
                        {faqs.map((f, i) => (
                            <FaqRow
                                key={f.q}
                                q={f.q}
                                a={f.a}
                                index={i}
                                isOpen={openFaq === i}
                                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                            />
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