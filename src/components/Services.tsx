"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Mobile App Development",
    slug: "mobile-application",
    bg: "bg-brand-7",
    accent: "#0097A7",
    description:
      "Native and cross-platform apps engineered for performance, scale, and store-ready quality.",
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
    slug: "web-development",
    bg: "bg-brand-8",
    accent: "#006064",
    description:
      "Fast, accessible, SEO-ready web platforms — from marketing sites to full-stack products.",
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
    slug: "ui-ux-design",
    bg: "bg-brand-9",
    accent: "#1565C0",
    description:
      "Research-led design that turns user needs into elegant, conversion-focused experiences.",
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
    slug: "machine-learning-ai",
    bg: "bg-brand-3",
    accent: "#01579B",
    description:
      "Custom models, NLP, computer vision, and chat assistants embedded into your existing stack.",
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
    slug: "staff-augmentation",
    bg: "bg-brand-4",
    accent: "#0288D1",
    description:
      "Vetted engineers slot into your sprints — flexible, time-zone aligned, and ready from day one.",
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
    slug: "digital-marketing",
    bg: "bg-brand-5",
    accent: "#039BE5",
    description:
      "Strategy, content, and paid campaigns built on data — measurable growth, not vanity metrics.",
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
    slug: "",
    bg: "bg-brand-7",
    accent: "#0097A7",
    description:
      "Conversion-tuned storefronts, secure checkout, and inventory systems that scale with you.",
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
    slug: "quality-assurance",
    bg: "bg-brand-8",
    accent: "#006064",
    description:
      "Manual and automated testing across platforms — ship with confidence, not surprises.",
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
    slug: "project-management",
    bg: "bg-brand-9",
    accent: "#1565C0",
    description:
      "Agile delivery, transparent roadmaps, and stakeholder alignment that keep projects on rails.",
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
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const accent = service.accent;
  const numberLabel = String(index + 1).padStart(2, "0");
  const href = service.slug ? `/services/${service.slug}` : "/services";

  return (
    <Link href={href} className="block h-full group">
      <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden flex flex-col transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow),_0_8px_16px_-12px_var(--card-glow-soft)] cursor-pointer"
      style={
        {
          "--card-glow": `${accent}55`,
          "--card-glow-soft": `${accent}30`,
        } as React.CSSProperties
      }
    >
      {/* Soft colored corner glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
        style={{ backgroundColor: accent }}
      />

      {/* Subtle hairline that intensifies on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ borderColor: `${accent}33` }}
      />

      <div className="relative p-7 flex-1 flex flex-col">
        {/* Top row: icon + numeric label */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundColor: accent,
              boxShadow: `0 12px 28px -10px ${accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
            }}
          >
            <div className="w-9 h-9 [&_svg]:w-full [&_svg]:h-full">
              {service.icon}
            </div>
          </div>
          <span
            className="font-black tabular-nums leading-none tracking-tight transition-colors duration-500"
            style={{
              fontSize: "2.25rem",
              color: `${accent}1F`,
            }}
          >
            {numberLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-deep-blue leading-snug tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-deep-blue/60 leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Brand-color outlined tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-semibold rounded-full border tracking-wide"
              style={{
                borderColor: `${accent}40`,
                color: accent,
                backgroundColor: `${accent}0A`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with hairline divider */}
      <div className="relative px-7 pb-5 pt-4 flex items-center justify-between border-t border-deep-blue/[0.06]">
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: accent }}
        >
          Learn more
        </span>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
          style={{ backgroundColor: `${accent}14` }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={accent}
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </motion.div>
    </Link>
  );
}

const INITIAL_COUNT = 6;

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, INITIAL_COUNT);

  return (
    <section id="services" className="pt-16 pb-0 relative bg-light-accent">
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
              <ServiceCard service={service} index={i} />
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
