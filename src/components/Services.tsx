"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Mobile App Development",
    bg: "bg-gradient-to-br from-violet-500 to-purple-700",
    tags: ["iOS", "Android", "Cross-Platform"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <rect x="22" y="8" width="36" height="64" rx="6" />
        <line x1="22" y1="18" x2="58" y2="18" />
        <line x1="22" y1="58" x2="58" y2="58" />
        <circle cx="40" cy="65" r="3" />
        <rect x="30" y="26" width="20" height="12" rx="2" fill="white" fillOpacity="0.2" />
        <rect x="30" y="42" width="12" height="4" rx="1" fill="white" fillOpacity="0.2" />
        <rect x="46" y="42" width="4" height="4" rx="1" fill="white" fillOpacity="0.2" />
      </svg>
    ),
    items: [
      "Native App Development",
      "Cross-Platform Development",
      "Backend & API Development",
      "App Store Optimization",
      "System Integrations",
      "MVP & Prototyping",
      "App Maintenance",
    ],
  },
  {
    title: "Web Development",
    bg: "bg-gradient-to-br from-amber-400 to-orange-500",
    tags: ["Landing Page", "Full-Stack"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <rect x="8" y="12" width="64" height="48" rx="4" />
        <line x1="8" y1="24" x2="72" y2="24" />
        <circle cx="16" cy="18" r="2" fill="white" fillOpacity="0.4" />
        <circle cx="22" cy="18" r="2" fill="white" fillOpacity="0.4" />
        <circle cx="28" cy="18" r="2" fill="white" fillOpacity="0.4" />
        <path d="M30 38l-8 8 8 8" strokeWidth={2} />
        <path d="M50 38l8 8-8 8" strokeWidth={2} />
        <line x1="44" y1="34" x2="36" y2="52" strokeWidth={2} />
        <rect x="24" y="64" width="32" height="4" rx="2" fill="white" fillOpacity="0.2" />
      </svg>
    ),
    items: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "Content Management Systems",
      "Progressive Web Apps",
      "Web Hosting & Deployment",
      "Web Security",
    ],
  },
  {
    title: "UI/UX Design Services",
    bg: "bg-gradient-to-br from-blue-900 to-slate-900",
    tags: ["Website", "Mobile App"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <rect x="16" y="8" width="32" height="56" rx="4" />
        <circle cx="32" cy="30" r="8" fill="white" fillOpacity="0.15" />
        <rect x="22" y="42" width="20" height="3" rx="1.5" fill="white" fillOpacity="0.2" />
        <rect x="26" y="48" width="12" height="3" rx="1.5" fill="white" fillOpacity="0.15" />
        <path d="M54 20l8-4v48l-8-4" strokeWidth={1.5} />
        <circle cx="62" cy="16" r="3" fill="white" fillOpacity="0.3" />
        <path d="M58 38h10" strokeWidth={1.5} />
        <circle cx="56" cy="52" r="4" fill="white" fillOpacity="0.2" stroke="white" />
      </svg>
    ),
    items: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Accessibility Design",
      "Psychology backed designs",
    ],
  },
  {
    title: "ML & AI Solutions",
    bg: "bg-gradient-to-br from-rose-400 to-pink-600",
    tags: ["Consultation", "Solutions"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <circle cx="40" cy="36" r="16" />
        <circle cx="40" cy="36" r="6" fill="white" fillOpacity="0.2" />
        <path d="M40 20v-8M56 36h8M40 52v8M24 36h-8" />
        <path d="M52 24l4-4M52 48l4 4M28 48l-4 4M28 24l-4-4" />
        <path d="M28 64c0-4 5-8 12-8s12 4 12 8" strokeWidth={1.5} fill="white" fillOpacity="0.1" />
      </svg>
    ),
    items: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Model Deployment",
      "AI Chatbots",
      "Custom Algorithms",
    ],
  },
  {
    title: "Staff Augmentation",
    bg: "bg-gradient-to-br from-emerald-400 to-teal-600",
    tags: ["Flexible", "Cost Effective"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <circle cx="30" cy="24" r="8" />
        <circle cx="52" cy="24" r="8" />
        <path d="M16 52c0-8 6-14 14-14h2" fill="white" fillOpacity="0.1" />
        <path d="M64 52c0-8-6-14-14-14h-2" fill="white" fillOpacity="0.1" />
        <path d="M16 52c0-8 6-14 14-14h20c8 0 14 6 14 14" />
        <circle cx="40" cy="56" r="6" fill="white" fillOpacity="0.2" />
        <path d="M38 56l2 2 4-4" strokeWidth={2} />
      </svg>
    ),
    items: [
      "Cross-Functional Experts",
      "Seamless Team Integration",
      "Flexible Team Scaling",
      "Faster Product Delivery",
      "Time-Zone Aligned Teams",
      "Communication-Skilled Teams",
      "Cost effective",
    ],
  },
  {
    title: "Digital Marketing",
    bg: "bg-gradient-to-br from-cyan-400 to-blue-600",
    tags: ["SEO", "Social Media"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <path d="M12 56V32l20-12 16 8 20-12v48l-20 12-16-8-20 12V56z" fill="white" fillOpacity="0.1" />
        <path d="M32 20v48M48 28v48" />
        <circle cx="32" cy="36" r="4" fill="white" fillOpacity="0.3" />
        <path d="M52 44l8-8 8 4" strokeWidth={2} />
        <circle cx="20" cy="48" r="3" fill="white" fillOpacity="0.2" />
      </svg>
    ),
    items: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Account based marketing",
    ],
  },
  {
    title: "E-commerce Development",
    bg: "bg-gradient-to-br from-yellow-400 to-amber-600",
    tags: ["Platform", "Payments"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <path d="M16 20h8l8 32h28l6-20H30" strokeWidth={2} />
        <circle cx="38" cy="60" r="4" />
        <circle cx="56" cy="60" r="4" />
        <rect x="34" y="30" width="20" height="14" rx="2" fill="white" fillOpacity="0.15" />
        <path d="M40 34v6M44 34v6M48 34v6" strokeWidth={1} />
      </svg>
    ),
    items: [
      "Platform Development",
      "Payment Gateway Integration",
      "Product Management Systems",
      "Order Management & Fulfillment",
      "Security & Compliance",
      "Higher conversion rates",
      "Lesser cart abandonment",
    ],
  },
  {
    title: "Quality Assurance",
    bg: "bg-gradient-to-br from-red-400 to-rose-600",
    tags: ["Manual", "Automated"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <path d="M40 8l24 12v20c0 16-10 26-24 32-14-6-24-16-24-32V20L40 8z" fill="white" fillOpacity="0.1" />
        <path d="M40 8l24 12v20c0 16-10 26-24 32-14-6-24-16-24-32V20L40 8z" />
        <path d="M30 40l6 6 14-14" strokeWidth={2.5} />
      </svg>
    ),
    items: [
      "Manual Testing",
      "Automated Testing",
      "Performance Testing",
      "Security Testing",
      "Usability Testing",
      "Cross-Platform Testing",
      "Bug Tracking & Reporting",
    ],
  },
  {
    title: "Project Management",
    bg: "bg-gradient-to-br from-indigo-500 to-violet-700",
    tags: ["Agile", "Scrum"],
    icon: (
      <svg className="w-20 h-20" fill="none" viewBox="0 0 80 80" stroke="white" strokeWidth={1.5}>
        <rect x="12" y="12" width="56" height="56" rx="6" />
        <line x1="12" y1="28" x2="68" y2="28" />
        <line x1="32" y1="28" x2="32" y2="68" />
        <rect x="38" y="34" width="12" height="6" rx="1" fill="white" fillOpacity="0.3" />
        <rect x="38" y="46" width="20" height="6" rx="1" fill="white" fillOpacity="0.2" />
        <rect x="38" y="58" width="8" height="6" rx="1" fill="white" fillOpacity="0.15" />
        <circle cx="22" cy="20" r="2" fill="white" fillOpacity="0.4" />
        <circle cx="28" cy="20" r="2" fill="white" fillOpacity="0.4" />
      </svg>
    ),
    items: [
      "Agile & Scrum",
      "Project Planning",
      "Risk Management",
      "Collaboration Setup",
      "Stakeholder Communication",
      "Resource Management",
      "Change Management",
    ],
  },
];

function ServiceCard({
  service,
  isFlipped,
  onFlip,
}: {
  service: (typeof services)[0];
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="h-[400px] cursor-pointer [perspective:1200px]"
      onMouseEnter={() => { if (!isFlipped) onFlip(); }}
      onMouseLeave={() => { if (isFlipped) onFlip(); }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onFlip();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isFlipped}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* ===== FRONT FACE ===== */}
        <div
          className={`absolute inset-0 rounded-3xl ${service.bg} overflow-hidden [backface-visibility:hidden] shadow-lg flex flex-col`}
        >
          {/* Icon area */}
          <div className="relative flex justify-center items-center flex-1 overflow-hidden">
            <div className="absolute inset-0 bg-white/5" />
            <div className="relative z-10 opacity-90 scale-150">
              {service.icon}
            </div>
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10" />
            <div className="absolute bottom-4 left-6 w-10 h-10 rounded-full bg-white/5" />
            <div className="absolute top-6 left-4 w-6 h-6 rounded-full bg-white/5" />
          </div>

          {/* Content pinned to bottom */}
          <div className="px-6 pb-5 pt-4">
            <h3 className="text-xl font-bold text-white leading-tight">
              {service.title}
            </h3>

            <div className="mt-3 flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
              <div className="flex gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-white/30 text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div
          className={`absolute inset-0 rounded-3xl ${service.bg} overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg`}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 h-full flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* Service items */}
            <ul className="flex-1 space-y-2">
              {service.items.map((item, j) => (
                <motion.li
                  key={item}
                  initial={false}
                  animate={
                    isFlipped
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: isFlipped ? 0.3 + j * 0.06 : 0,
                  }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom tags */}
            <div className="mt-3 pt-3 border-t border-white/15 flex gap-2 flex-wrap">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const INITIAL_COUNT = 5;

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);

  return (
    <section id="services" className="py-16 relative bg-light-accent">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-6">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
            Turning Ideas into Reality
          </h2>
          <p className="mt-4 text-deep-blue/60 max-w-3xl mx-auto text-lg">
            Dev Inception is your end-to-end digital partner. Whether you&apos;ve
            an idea or launching a product, rebranding a business, or scaling
            growth &ndash; We combine design, development, strategy, & marketing
            into one seamless service.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, i) => (
            <AnimatedSection key={service.title} delay={i < INITIAL_COUNT ? i * 0.05 : 0}>
              <ServiceCard
                service={service}
                isFlipped={flippedIndex === i}
                onFlip={() =>
                  setFlippedIndex(flippedIndex === i ? null : i)
                }
              />
            </AnimatedSection>
          ))}
        </div>

        {services.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-deep-blue/20 rounded-full text-deep-blue font-semibold text-sm hover:bg-deep-blue hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less" : `View More`}
              <motion.svg
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
