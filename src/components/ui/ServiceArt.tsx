"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Brain,
    Smartphone,
    Globe,
    Palette,
    Shield,
    Users,
    ShoppingBag,
    Megaphone,
    ClipboardList,
} from "lucide-react";

// Service type definition
interface Service {
    title: string;
    slug: string;
    tagline: string;
    accent: string;
    category: string;
    description: string;
    stack: string[];
    icon: React.ReactNode;
    phases: {
        name: string;
        description: string;
    }[];
}

// Import your services data or define it here
const services: Service[] = [
    {
        title: "AI & ML Engineering",
        slug: "machine-learning-ai",
        tagline: "Production-grade intelligence",
        accent: "#1E88E5",
        category: "Build",
        description:
            "End-to-end AI and ML development from data engineering and model building to deployment and optimization for production systems.",

        stack: ["OpenAI APIs", "TensorFlow", "PyTorch", "Python"],
        icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Discover", description: "AI strategy and data assessment" },
            { name: "Prototype", description: "Model selection and validation" },
            { name: "Train", description: "Model training and optimization" },
            { name: "Deploy", description: "Integration, monitoring, and improvement" },
        ]
    },
    {
        title: "Mobile Engineering",
        slug: "mobile-application",
        tagline: "Native and cross-platform apps",
        accent: "#0097A7",
        category: "Build",
        description:
            "Creating intuitive, high-performance mobile apps for Android and iOS platforms.",

        stack: [
            "Flutter", "React Native", "Swift", "Kotlin"
        ],
        icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Discover", description: "Product goals and platform strategy" },
            { name: "Design", description: "UX, UI, and prototyping" },
            { name: "Build", description: "Development, integration, and testing" },
            { name: "Launch", description: "Release, monitoring, and updates" },
        ]
    },
    {
        title: "Web Platforms",
        slug: "web-development",
        tagline: "From marketing sites to full-stack products",
        accent: "#006064",
        category: "Build",
        description:
            "Building responsive, scalable websites that deliver performance and reliability.",
        stack: ["React", "Next.js", "Node.js", "Express"],
        icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Discover", description: "Requirements, goals, and technical planning" },
            { name: "Design", description: "Architecture, UX, wireframes, and workflows" },
            { name: "Build", description: "Development, integrations, testing, and security" },
            { name: "Launch", description: "Deployment, optimization, and scaling" },
        ]
    },
    {
        title: "E-commerce Solutions",
        slug: "E-commerce",
        tagline: "Conversion-tuned storefronts",
        accent: "#0097A7",
        category: "Build",
        description:
            "Developing secure and optimized online stores that enhance sales and user experience.",

        stack: ["Shopify", "WooCommerce", "Magento", "Stripe"
        ],
        icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Catalog", description: "Define products and categories", },
            { name: "Cart", description: "Build cart and checkout flow", },
            { name: "Pay", description: "Integrate payments and processing", },
            { name: "Convert", description: "Launch, optimize, and scale", },
        ]
    },
    {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        tagline: "Research-led UI/UX that converts",
        accent: "#1565C0",
        category: "Design",
        description:
            "Designing user-focused interfaces that are simple, engaging, and effective.",
        stack: [
            "Figma", "Adobe XD", "Sketch", "FigJam"
        ],
        icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Research", description: "User insights, goals, and requirements" },
            { name: "Structure", description: "User flows, wireframes, and prototypes" },
            { name: "Design", description: "Interfaces, design systems, and testing" },
            { name: "Optimize", description: "Implementation support and improvements" },
        ]
    },
    {
        title: "Software Quality Assurance",
        slug: "quality-assurance",
        tagline: "Ship with confidence, not surprises",
        accent: "#039BE5",
        category: "OPS",
        description:
            "Ensuring software quality through thorough testing and defect prevention.",
        stack: [
            "Selenium", "Cypress", "Playwright", "Postman"
        ],
        icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Plan", description: "Testing strategy and setup" },
            { name: "Test", description: "Functional, performance, and security testing" },
            { name: "Validate", description: "Issue resolution and release checks" },
            { name: "Improve", description: "Monitoring and quality enhancements" },
        ]
    },
    {
        title: "Staff Augmentation",
        slug: "staff-augmentation",
        tagline: "Senior engineers on demand",
        accent: "#0288D1",
        category: "OPS",
        description:
            "Providing skilled professionals to seamlessly extend and strengthen your team.",
        stack: [
            "Python", "Java", "React", "Node.js"
        ],
        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Plan", description: "Requirements and team strategy" },
            { name: "Select", description: "Talent sourcing and onboarding" },
            { name: "Integrate", description: "Collaboration and project delivery" },
            { name: "Scale", description: "Support, reviews, and expansion" },
        ]
    },
    {
        title: "Digital Marketing",
        slug: "digital-marketing",
        tagline: "Measurable growth, not vanity",
        accent: "#0277BD",
        category: "Grow",
        description:
            "Driving growth through targeted, data-driven digital campaigns across key channels.",

        stack: ["Google Ads", "Meta Ads Manager", "Ahrefs", "HubSpot"
        ], icon: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Audit", description: "Market research and growth opportunities" },
            { name: "Strategy", description: "Channels, messaging, and planning" },
            { name: "Execute", description: "Campaigns, testing, and optimization" },
            { name: "Scale", description: "Reporting, insights, and growth" },
        ]
    },
    {
        title: "Project Management",
        slug: "project-management",
        tagline: "Agile delivery, executive clarity",
        accent: "#01579B",
        category: "OPS",
        description:
            "Managing projects efficiently with structured planning and agile execution.",
        stack: [
            "Jira", "Trello", "Asana", "ClickUp"
        ],
        icon: <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />,
        phases: [
            { name: "Assess", description: "Process review and planning" },
            { name: "Structure", description: "Frameworks, governance, and workflows" },
            { name: "Execute", description: "Delivery, reporting, and optimization" },
            { name: "Improve", description: "Monitoring and continuous refinement" },
        ]
    },
];

export function ServiceArt({ slug }: { slug: string }) {
    const service = services.find(s => s.slug === slug) || services[0];
    const [phaseIdx, setPhaseIdx] = useState(0);
    const totalPhases = service.phases.length;



    useEffect(() => {
        const interval = setInterval(() => {
            setPhaseIdx((prev) => (prev + 1) % totalPhases);
        }, 2500);
        return () => clearInterval(interval);
    }, [totalPhases]);

    return (
        <div
            className="relative h-full w-full overflow-hidden rounded-xl force-dark-card"
            style={{
                background: "#0a1628",
                boxShadow: "0 20px 50px rgba(255, 255, 255, 0.3)",
            }}
        >
            {/* Subtle grid overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                }}
            />
            <div className="relative flex flex-col h-full p-3">
                {/* Top bar with category */}
                <div className="flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#ffffff]/70" />
                            <span className="relative inline-flex size-2 rounded-full bg-[#ffffff]" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] force-white-text">
                            {service.category}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rounded-xl border border-[#ffffff]/15 bg-[#ffffff]/10 px-2.5 py-1.5 items-center flex backdrop-blur-md">
                            <span className="text-[9px] font-medium tabular-nums force-white-text">
                                Phase {String(phaseIdx + 1).padStart(2, "0")}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Phase visualization area */}
                <div className="relative flex-1 flex items-center justify-center py-1" style={{ minHeight: '160px', height: '160px' }}>
                    <div className="w-full overflow-hidden px-2 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${slug}-${phaseIdx}`}
                                className="flex w-full h-full items-center justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <div className="flex w-full shrink-0 flex-col items-center justify-center gap-1 h-full">
                                    <motion.div
                                        className="flex w-full justify-center items-center h-full"
                                        key={`content-${slug}-${phaseIdx}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.05,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <div className="flex flex-col items-center justify-center gap-2 h-full w-full">
                                            {/* Phase name and description */}
                                            <div className="text-center">
                                                <motion.p
                                                    key={`name-${phaseIdx}`}
                                                    initial={{ opacity: 0, y: -5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    className="text-sm font-semibold force-white-text"
                                                >
                                                    {service.phases[phaseIdx].name}
                                                </motion.p>
                                                <motion.p
                                                    key={`desc-${phaseIdx}`}
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.15 }}
                                                    className="text-xs force-white-text opacity-80"
                                                >
                                                    {service.phases[phaseIdx].description}
                                                </motion.p>
                                            </div>

                                            {/* Phase visual */}
                                            <div className="flex items-center justify-center h-full w-full">
                                                <PhaseVisual service={service} phaseIndex={phaseIdx} />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom: Phase controls */}
                <div className="space-y-2 flex-shrink-0">
                    <div className="flex mt-4 items-center justify-center text-center">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] gap-1 force-white-text opacity-70">
                            Phases
                        </span>
                        <div className="flex items-center">
                            {service.phases.map((phase, i) => (
                                <button
                                    key={phase.name}
                                    type="button"
                                    onClick={() => setPhaseIdx(i)}
                                    aria-label={`Go to ${phase.name} phase`}
                                    aria-current={i === phaseIdx}
                                    className="group flex items-center gap-1.5 rounded-full px-1.5 py-0.5 transition-all hover:bg-[#ffffff]/10"
                                >
                                    <span
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === phaseIdx
                                            ? "w-6 bg-[#ffffff] shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                                            : i < phaseIdx
                                                ? "w-1.5 bg-[#ffffff]/50"
                                                : "w-1.5 bg-[#ffffff]/20 group-hover:bg-[#ffffff]/30"
                                            }`}
                                    />
                                    <span className={`hidden text-[8px] font-medium uppercase tracking-widest transition-colors duration-300 sm:block ${i === phaseIdx ? "force-white-text" : "force-white-text opacity-40 group-hover:opacity-60"
                                        }`}>
                                        {phase.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Phase visual component - renders different visuals based on service type
function PhaseVisual({ service, phaseIndex }: { service: Service; phaseIndex: number }) {
    switch (service.slug) {
        case "web-development":
            return <WebVisual phaseIndex={phaseIndex} />;
        case "mobile-application":
            return <MobileVisual phaseIndex={phaseIndex} />;
        case "ui-ux-design":
            return <DesignVisual phaseIndex={phaseIndex} />;
        case "machine-learning-ai":
            return <AiVisual phaseIndex={phaseIndex} />;
        case "digital-marketing":
            return <MarketingVisual phaseIndex={phaseIndex} />;
        case "staff-augmentation":
            return <StaffVisual phaseIndex={phaseIndex} />;
        case "E-commerce":
            return <EcommerceVisual phaseIndex={phaseIndex} />;
        case "quality-assurance":
            return <QaVisual phaseIndex={phaseIndex} />;
        case "project-management":
            return <ProjMgmtVisual phaseIndex={phaseIndex} />;
        default:
            return <DefaultVisual phase={service.phases[phaseIndex]} />;
    }
}

// Web Development Visual - with smooth transitions
function WebVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="w-full max-w-md rounded-xl border border-[#ffffff]/15 bg-[#ffffff]/5 p-3 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-[#ffffff]/10 pb-2">
                <span className="h-2 w-2 rounded-full bg-[#ffffff]/40" />
                <span className="h-2 w-2 rounded-full bg-[#ffffff]/40" />
                <span className="h-2 w-2 rounded-full bg-[#ffffff]/40" />
                <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-widest force-white-text opacity-70">
                    atlas.devinception.com
                </span>
            </div>

            <div className="relative mt-3 h-32">
                <AnimatePresence mode="wait">
                    {phaseIndex === 0 && (
                        <motion.div
                            key="plan"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            <p className="text-center font-mono text-[10px] uppercase tracking-widest force-white-text opacity-70">
                // sitemap
                            </p>
                            <div className="mt-2 grid grid-cols-3 gap-2">
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.08, duration: 0.3 }}
                                        className="h-4 rounded border border-dashed border-[#ffffff]/30"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                    {phaseIndex === 1 && (
                        <motion.div
                            key="wire"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 grid grid-cols-12 gap-2"
                        >
                            <div className="col-span-3 space-y-1.5">
                                <div className="h-1.5 w-full rounded-full bg-[#ffffff]/30" />
                                <div className="h-1.5 w-3/4 rounded-full bg-[#ffffff]/20" />
                                <div className="h-1.5 w-2/3 rounded-full bg-[#ffffff]/20" />
                            </div>
                            <div className="col-span-9">
                                <div className="h-12 rounded-md border border-dashed border-[#ffffff]/30" />
                                <div className="mt-1 grid grid-cols-3 gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="aspect-square w-20 rounded-md border border-dashed border-[#ffffff]/30" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {phaseIndex === 2 && (
                        <motion.div
                            key="design"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 grid grid-cols-12 gap-2"
                        >
                            <div className="col-span-3 space-y-1.5">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-3 w-3 rounded bg-[#ffffff]" />
                                    <span className="h-1.5 w-10 rounded-full bg-[#ffffff]/60" />
                                </div>
                                <div className="rounded bg-[#ffffff] px-1 py-0.5 text-[8px] text-black">Atlas</div>
                                <div className="rounded bg-[#ffffff]/15 px-1 py-0.5 text-[8px] force-white-text opacity-70">Pricing</div>
                            </div>
                            <div className="col-span-9 space-y-1.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "70%" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="h-2.5 rounded-full bg-gradient-to-r from-white/80 to-white"
                                />
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                                    className="h-2.5 rounded-full bg-[#ffffff]/30"
                                />
                                <div className="grid grid-cols-3 mb-2 gap-1.5 pt-2">
                                    {[
                                        "linear-gradient(135deg, #ff6b3d, #f59e0b)",
                                        "linear-gradient(135deg, #2486c5, #46a4f6)",
                                        "linear-gradient(135deg, #10b981, #34d399)",
                                    ].map((bg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                                            className="aspect-square rounded-md"
                                            style={{ background: bg }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {phaseIndex === 3 && (
                        <motion.div
                            key="ship"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 grid place-items-center"
                        >
                            <div className="rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-4 text-center">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-green-400 force-white-text">
                                    ✓ deployed
                                </p>
                                <p className="mt-1 text-2xl font-bold force-white-text">98 / 100</p>
                                <p className="font-mono text-[9px] uppercase tracking-widest force-white-text opacity-70">
                                    Lighthouse
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Mobile Visual
function MobileVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="relative h-56 w-32 overflow-hidden rounded-3xl border-[3px] border-[#ffffff]/15 bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-x-0 top-1.5 mx-auto h-1 w-8 rounded-full bg-[#ffffff]/20" />

            <AnimatePresence mode="wait">
                {phaseIndex === 0 && (
                    <motion.div
                        key="m-wire"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 mt-7 px-3"
                    >
                        <div className="space-y-1.5">
                            <div className="h-2 w-12 rounded-full bg-[#ffffff]/30" />
                            <div className="h-1 w-20 rounded-full bg-[#ffffff]/15" />
                            <div className="mt-2 grid grid-cols-2 gap-1.5">
                                {[0, 1, 2, 3].map((i) => (
                                    <div key={i} className="aspect-square rounded-lg border border-dashed border-[#ffffff]/25" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 1 && (
                    <motion.div
                        key="m-build"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 mt-7 px-3"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="h-2.5 rounded-full bg-[#ffffff]"
                        />
                        <div className="mt-1.5 h-1.5 w-24 rounded-full bg-[#ffffff]/25" />
                        <div className="mt-3 grid grid-cols-2 gap-1.5">
                            {["#ff6b3d", "#2486c5", "#10b981", "#f59e0b"].map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
                                    className="aspect-square rounded-lg"
                                    style={{ background: c }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 2 && (
                    <motion.div
                        key="m-test"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 mt-7 grid place-items-center px-3 text-center"
                    >
                        <div>
                            <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500/25 text-2xl">✓</span>
                            <p className="mt-2 font-mono text-[8px] uppercase tracking-widest force-white-text opacity-70">TestFlight #14</p>
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 3 && (
                    <motion.div
                        key="m-live"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 mt-7 grid place-items-center px-3 text-center"
                    >
                        <div>
                            <p className="text-3xl font-bold force-white-text">#3</p>
                            <p className="mt-1 font-mono text-[8px] uppercase tracking-widest force-white-text opacity-70">App Store</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Design Visual
function DesignVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="relative h-48 w-48">
            <AnimatePresence mode="wait">
                {phaseIndex === 0 && (
                    <motion.div
                        key="d-research"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 grid place-items-center"
                    >
                        <div className="space-y-2">
                            {[
                                { x: "User: 'I need…'", c: "rgba(255,255,255,0.15)" },
                                { x: "Goal: speed", c: "rgba(36,134,197,0.4)" },
                                { x: "Pain: forms", c: "rgba(255,255,255,0.15)" },
                            ].map((it, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.18, duration: 0.3, ease: "easeOut" }}
                                    className="rounded-md px-3 py-1.5 font-mono text-[10px] force-white-text"
                                    style={{ background: it.c }}
                                >
                                    {it.x}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 1 && (
                    <motion.div
                        key="d-wires"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 grid place-items-center"
                    >
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-[#ffffff]/30" />
                            <div className="h-20 w-20 rounded-full border-2 border-dashed border-[#ffffff]/30" />
                            <div className="col-span-2 h-12 rounded-2xl border-2 border-dashed border-[#ffffff]/30" />
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 2 && (
                    <motion.div
                        key="d-hifi"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 6 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute left-2 top-2 h-24 w-24 rounded-2xl"
                            style={{ background: "#ff6b3d" }}
                        />
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: -8 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                            className="absolute right-0 top-8 h-20 w-20 rounded-full"
                            style={{ background: "#2486c5" }}
                        />
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                            className="absolute bottom-2 left-1/2 h-16 w-28 -translate-x-1/2 rounded-2xl"
                            style={{ background: "#10b981" }}
                        />
                        <span className="absolute inset-0 grid place-items-center font-bold text-4xl force-white-text tracking-tight mix-blend-difference">Aa</span>
                    </motion.div>
                )}
                {phaseIndex === 3 && (
                    <motion.div
                        key="d-handoff"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 grid place-items-center"
                    >
                        <div className="rounded-xl border border-[#ffffff]/15 bg-[#ffffff]/5 p-4 text-center backdrop-blur-sm">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-green-400 force-white-text">✓ tokens.json</p>
                            <p className="mt-1 text-xs force-white-text opacity-80">Design → Code</p>
                            <p className="mt-2 font-mono text-[9px] force-white-text opacity-60">+ Figma library</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// AI Visual - All white animations
function AiVisual({ phaseIndex }: { phaseIndex: number }) {
    const inputs = [40, 70, 100];
    const hidden = [25, 50, 75, 100, 125];

    return (
        <svg viewBox="0 0 200 140" className="h-32 w-full max-w-md">
            {/* Input to hidden layer connections */}
            {inputs.map((y1) =>
                hidden.map((y2, j) => (
                    <motion.line
                        key={`a-${y1}-${j}`}
                        x1={38} y1={y1} x2={94} y2={y2 / 1.4 + 18}
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="0.7"
                        animate={{ pathLength: phaseIndex >= 1 ? 1 : 0 }}
                        transition={{ duration: 0.6, delay: j * 0.05, ease: "easeInOut" }}
                    />
                ))
            )}

            {/* Hidden to output layer connections */}
            {hidden.map((y1, j) => (
                <motion.line
                    key={`b-${j}`}
                    x1={106} y1={y1 / 1.4 + 18} x2={158} y2={70}
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="0.7"
                    animate={{ pathLength: phaseIndex >= 2 ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: j * 0.05, ease: "easeInOut" }}
                />
            ))}

            {/* Input layer nodes - pulsing white */}
            {inputs.map((cy, i) => (
                <motion.circle
                    key={`l-${i}`}
                    cx={32} cy={cy} r={6}
                    fill="rgba(255,255,255,0.8)"
                    animate={{
                        scale: phaseIndex === 0 ? [1, 1.3, 1] : 1,
                        fill: phaseIndex === 0 ? ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.6)"] : "rgba(255,255,255,0.8)"
                    }}
                    transition={{ duration: 1.4, delay: i * 0.1, repeat: phaseIndex === 0 ? Infinity : 0, ease: "easeInOut" }}
                />
            ))}

            {/* Hidden layer nodes - pulsing white */}
            {hidden.map((cy, i) => (
                <motion.circle
                    key={`h-${i}`}
                    cx={100} cy={cy / 1.4 + 18} r={6}
                    animate={{
                        fill: phaseIndex >= 2
                            ? ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.6)"]
                            : phaseIndex >= 1
                                ? "rgba(255,255,255,0.5)"
                                : "rgba(255,255,255,0.2)",
                        scale: phaseIndex === 2 ? [1, 1.3, 1] : 1
                    }}
                    transition={{ duration: 1.4, delay: i * 0.1, repeat: phaseIndex === 2 ? Infinity : 0, ease: "easeInOut" }}
                />
            ))}

            {/* Output layer node - pulsing white */}
            <motion.circle
                cx={168} cy={70} r={10}
                animate={{
                    fill: phaseIndex >= 3
                        ? ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.6)"]
                        : "rgba(255,255,255,0.15)",
                    scale: phaseIndex === 3 ? [1, 1.3, 1] : 1
                }}
                transition={{ duration: 1.4, repeat: phaseIndex === 3 ? Infinity : 0, ease: "easeInOut" }}
            />

            {/* Labels */}
            <text x="10" y="130" className="font-mono text-[8px] force-white-text opacity-40">Input</text>
            <text x="85" y="130" className="font-mono text-[8px] force-white-text opacity-40">Hidden</text>
            <text x="155" y="130" className="font-mono text-[8px] force-white-text opacity-40">Output</text>
        </svg>
    );
}

// Marketing Visual
function MarketingVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="w-full max-w-md">
            <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest force-white-text opacity-70">Conversion · 90 days</span>
                <AnimatePresence>
                    {phaseIndex === 3 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="rounded-md bg-green-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-green-400 force-white-text"
                        >
                            ↑ +162%
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            <svg viewBox="0 0 320 110" className="mt-3 h-24 w-full">
                <defs>
                    <linearGradient id="mkfill-multi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.4)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M0 90 L40 80 L80 88 L120 60 L160 65 L200 35 L240 48 L280 22 L320 10"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    animate={{ pathLength: phaseIndex >= 1 ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M0 90 L40 80 L80 88 L120 60 L160 65 L200 35 L240 48 L280 22 L320 10 L320 110 L0 110 Z"
                    fill="url(#mkfill-multi)"
                    animate={{ opacity: phaseIndex >= 2 ? 0.8 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.circle
                    cx={320} cy={10} r={5}
                    fill="rgba(255,255,255,0.9)"
                    animate={{ scale: phaseIndex >= 3 ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {/* Grid lines */}
                {[0, 1, 2, 3].map((i) => (
                    <line
                        key={`grid-${i}`}
                        x1="0"
                        y1={20 + i * 25}
                        x2="320"
                        y2={20 + i * 25}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                    />
                ))}
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                    { v: "$28", l: "CAC" },
                    { v: "4.2x", l: "ROAS" },
                    { v: "47%", l: "D7 ret." },
                ].map((s, i) => (
                    <motion.div
                        key={s.l}
                        animate={{ opacity: phaseIndex >= 2 ? 1 : 0.3, y: phaseIndex >= 2 ? 0 : 4 }}
                        transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                        className="rounded-lg border border-[#ffffff]/10 bg-[#ffffff]/5 p-2"
                    >
                        <p className="text-sm font-bold force-white-text">{s.v}</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest force-white-text opacity-60">{s.l}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Staff Visual
function StaffVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest force-white-text opacity-70">Squad / Atlas</span>
                <AnimatePresence>
                    {phaseIndex === 3 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="rounded-md bg-green-500/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-green-400 force-white-text"
                        >
                            Online
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
                {[20, 21, 22, 23, 24, 25].map((id, k) => (
                    <motion.div
                        key={id}
                        animate={{
                            opacity: phaseIndex === 0 ? 0.15 : phaseIndex === 1 ? (k < 3 ? 1 : 0.3) : 1,
                            scale: phaseIndex >= 2 ? 1 : 0.9,
                            y: phaseIndex === 3 ? [0, -3, 0] : 0
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            y: { duration: 2, delay: k * 0.15, repeat: phaseIndex === 3 ? Infinity : 0, ease: "easeInOut" }
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="relative">
                            <span className="h-12 w-12 rounded-full bg-cover ring-2 ring-white/15" style={{ backgroundImage: `url(https://i.pravatar.cc/80?img=${id})` }} />
                            {phaseIndex >= 2 && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-black bg-green-500" />}
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest force-white-text opacity-60">{["FE", "BE", "ML", "DES", "PM", "OPS"][k]}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// E-commerce Visual
function EcommerceVisual({ phaseIndex }: { phaseIndex: number }) {
    return (
        <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
                {phaseIndex === 0 && (
                    <motion.div
                        key="e-cat"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-3 gap-3"
                    >
                        {[{ c: "#ff6b3d", price: "$48" }, { c: "#2486c5", price: "$129" }, { c: "#10b981", price: "$32" }].map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.12, duration: 0.4, ease: "easeOut" }}
                                className="rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-3 backdrop-blur-sm"
                            >
                                <div className="aspect-square w-full rounded-md" style={{ background: p.c }} />
                                <p className="mt-2 text-sm font-bold force-white-text">{p.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
                {phaseIndex === 1 && (
                    <motion.div
                        key="e-cart"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-4 backdrop-blur-sm"
                    >
                        <p className="font-mono text-[10px] uppercase tracking-widest force-white-text opacity-70">Cart · 3 items</p>
                        <div className="mt-2 space-y-1.5">
                            {["#ff6b3d", "#2486c5", "#10b981"].map((c, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded" style={{ background: c }} />
                                    <span className="flex-1 text-xs force-white-text opacity-80">Item {i + 1}</span>
                                    <span className="font-mono text-xs force-white-text">$48</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between border-t border-[#ffffff]/10 pt-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest force-white-text opacity-60">Total</span>
                            <span className="text-base font-bold force-white-text">$209</span>
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 2 && (
                    <motion.div
                        key="e-pay"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-5 text-center backdrop-blur-sm"
                    >
                        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#ffffff]/20 text-2xl">💳</span>
                        <p className="mt-3 text-base font-bold force-white-text">Processing…</p>
                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#ffffff]/10">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.4, ease: "easeInOut" }}
                                className="h-full bg-[#ffffff]"
                            />
                        </div>
                    </motion.div>
                )}
                {phaseIndex === 3 && (
                    <motion.div
                        key="e-conv"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-center backdrop-blur-sm"
                    >
                        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-500 text-2xl force-white-text">✓</span>
                        <p className="mt-3 text-2xl font-bold force-white-text">+28%</p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-green-400 force-white-text">Conversion uplift</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// QA Visual
function QaVisual({ phaseIndex }: { phaseIndex: number }) {
    const tests = ["auth.spec.ts", "checkout.spec.ts", "payment.spec.ts", "search.spec.ts"];
    return (
        <div className="w-full max-w-md rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest force-white-text opacity-70">Test suite</span>
                <span className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest force-white-text ${phaseIndex >= 3 ? "bg-green-500/20 text-green-400" : phaseIndex === 2 ? "bg-red-500/20 text-red-400" : "bg-[#ffffff]/10 opacity-70"}`}>
                    {phaseIndex === 0 ? "Queued" : phaseIndex === 1 ? "Running…" : phaseIndex === 2 ? "1 fail" : "✓ All green"}
                </span>
            </div>
            <div className="mt-3 space-y-1.5">
                {tests.map((t, i) => (
                    <motion.div
                        key={t}
                        animate={{ opacity: phaseIndex >= 1 ? 1 : 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex items-center gap-2 rounded-md bg-[#ffffff]/5 px-2.5 py-1.5"
                    >
                        <span className={`grid h-4 w-4 place-items-center rounded-full text-[10px] font-bold force-white-text ${phaseIndex === 0 ? "bg-[#ffffff]/20" : phaseIndex === 1 && i < 2 ? "bg-green-500" : phaseIndex === 1 ? "bg-[#ffffff]/20" : phaseIndex === 2 && i === 2 ? "bg-red-500" : "bg-green-500"}`}>
                            {phaseIndex === 2 && i === 2 ? "✕" : "✓"}
                        </span>
                        <span className="font-mono text-[10px] force-white-text opacity-80">{t}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Project Management Visual
function ProjMgmtVisual({ phaseIndex }: { phaseIndex: number }) {
    const cols = ["Backlog", "Doing", "Done"];
    return (
        <div className="grid w-full max-w-md grid-cols-3 gap-3">
            {cols.map((c, i) => (
                <div key={c} className="flex flex-col rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-3 backdrop-blur-sm">
                    <span className="font-mono text-[9px] uppercase tracking-widest force-white-text opacity-60">{c}</span>
                    <div className="mt-2 flex-1 space-y-1.5">
                        {Array.from({ length: 2 }).map((_, k) => {
                            const cardCol = phaseIndex <= 1 ? 0 : phaseIndex === 2 ? 1 : 2;
                            const showHere = i === cardCol && k === 0;
                            return showHere ? (
                                <motion.div
                                    key="active-card"
                                    layoutId="active-card"
                                    className="rounded-md border border-[#ffffff] bg-[#ffffff]/30 p-2"
                                    transition={{ type: "spring", damping: 22, stiffness: 220 }}
                                >
                                    <div className="h-1 w-8 rounded-full bg-[#ffffff]" />
                                    <div className="mt-1.5 h-1 w-12 rounded-full bg-[#ffffff]/40" />
                                    <div className="mt-1 h-1 w-9 rounded-full bg-[#ffffff]/25" />
                                </motion.div>
                            ) : (
                                <div key={k} className="rounded-md bg-[#ffffff]/5 p-2 opacity-50">
                                    <div className="h-1 w-8 rounded-full bg-[#ffffff]/20" />
                                    <div className="mt-1.5 h-1 w-12 rounded-full bg-[#ffffff]/15" />
                                    <div className="mt-1 h-1 w-9 rounded-full bg-[#ffffff]/10" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

// Default Visual
function DefaultVisual({ phase }: { phase: { name: string; description: string } }) {
    return (
        <div className="flex h-32 w-full max-w-md items-center justify-center rounded-xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-4 backdrop-blur-sm">
            <div className="text-center">
                <p className="text-sm font-medium force-white-text">{phase.name}</p>
                <p className="text-xs force-white-text opacity-80">{phase.description}</p>
            </div>
        </div>
    );
}