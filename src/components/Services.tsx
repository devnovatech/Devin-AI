"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Mobile App Development",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
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
    title: "Staff Augmentation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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
    title: "ML & AI Solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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
    title: "UI/UX Design Services",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
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
    title: "Digital Marketing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
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
    title: "Quality Assurance (QA)",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
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
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
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

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <AnimatedSection className="text-center mb-6">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Turning Ideas into Reality
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
            Dev Inception is your end-to-end digital partner. Whether you&apos;ve
            an idea or launching a product, rebranding a business, or scaling
            growth &ndash; We combine design, development, strategy, & marketing
            into one seamless service.
          </p>
        </AnimatedSection>

        {/* Service Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.05}>
              <motion.div
                layout
                className="group h-full p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-neon-blue/30 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <motion.svg
                    animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gray-500 mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2 overflow-hidden"
                    >
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {expandedIndex !== i && (
                  <p className="mt-3 text-sm text-gray-500">
                    {service.items.length} services &middot; Click to expand
                  </p>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
