"use client";

import { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";
import React from "react";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

interface IndustryData {
  title: string;
  heroDescription: string;
  challengesHeading: string;
  challengesDescription: string;
  challenges: string[];
  solutionsHeading: string;
  solutionDescription: string;
  solutions: string[];
  ctaHeading: string;
  ctaDescription: string;
  // ctaButton: string;
}

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare Without Limits",
    heroDescription:
      "Transforming patient experiences, clinical operations, and care delivery through intelligent digital solutions.",
    challengesHeading: "The Friction Behind Modern Healthcare Systems",
    challengesDescription: "Healthcare organizations are expected to deliver seamless patient experiences, maintain regulatory compliance, and improve operational efficiency, yet many continue to rely on fragmented technology ecosystems that limit performance and growth.",
    challenges: [
      "Poor Digital Experience: Slow, unintuitive apps and portals reduce engagement across patients and providers, especially in telemedicine and wellness platforms.",
      "Compliance and Security Risks: Strict regulations like HIPAA and GDPR demand strong architecture. Weak systems increase exposure to breaches, penalties, and trust loss.",
      "Slow Delivery Cycles: Complex requirements, legacy systems, and fragmented teams delay critical healthcare product launches.",
      "Limited Data Intelligence: Disconnected systems make it difficult to extract actionable insights for better clinical and operational decisions.",
      "Fragmented User Journeys: Inconsistent experiences across mobile, web, and internal tools reduce adoption and user satisfaction.",
      "Poor Patient Access: Lack of real-time access to records and updates leads to delays, confusion, and weaker patient engagement.",
    ],
    solutionsHeading: "Engineering Clarity Into Complex Healthcare Systems",
    solutionDescription: "We don't treat these challenges as isolated problems. We solve them at the system level through architecture, engineering discipline, and healthcare-grade design principles.",
    solutions: [
      "Experience-Led System Design: We rebuild patient and provider journeys using performance-optimized mobile and web architectures, ensuring fast, intuitive, and accessible digital experiences across every touchpoint.",
      "Compliance-First Engineering: Security and compliance are embedded into the foundation of every system through HIPAA-aligned workflows, GDPR-ready data structures, encrypted communication layers, and role-based access control.",
      "Accelerated Delivery Architecture: We reduce time-to-market through modular development, reusable components, API-first design, and agile delivery pipelines that eliminate dependency bottlenecks.",
      "Data Unification & Intelligence Layers: We integrate fragmented systems into centralized data ecosystems, enabling real-time analytics, predictive insights, and decision-support capabilities powered by AI and structured data pipelines.",
      "Unified Omnichannel Healthcare Experience: We synchronize mobile, web, and backend systems into a single connected ecosystem, ensuring consistent user journeys across patients, providers, and administrators.",
      "Real-Time Access Infrastructure: We design secure, scalable systems that enable instant access to patient records, updates, and care information through cloud-native architecture and interoperable APIs.",
    ],
    ctaHeading: "Turn Healthcare Friction Into Connected, Scalable Care",
    ctaDescription: "Healthcare is often slowed by fragmented systems, legacy infrastructure, and disconnected tools that impact efficiency, compliance, and patient experience.\nWe build secure, scalable healthcare ecosystems that unify systems, streamline operations, and improve care delivery.",
    // ctaButton: "Ready to modernize your healthcare ecosystem?",
  },
  fintech: {
    title: "Banking Built for the Digital Economy",
    heroDescription: "Transforming customer experiences, financial operations, and digital banking ecosystems through secure, intelligent technology solutions.",
    challengesHeading: "The Complexity Behind Modern Financial Services",
    challengesDescription: "Financial institutions are under constant pressure to deliver seamless digital experiences, maintain regulatory compliance, strengthen security, and innovate faster. Yet many organizations remain constrained by legacy systems, fragmented infrastructure, and disconnected customer journeys.",
    challenges: [
      "Legacy Banking Infrastructure: Outdated core systems create operational inefficiencies, limit innovation, and increase the cost of maintaining critical financial services.",
      "Regulatory and Compliance Pressure: Financial organizations must continuously adapt to evolving regulations such as PCI DSS, AML, KYC, GDPR, PSD2, and regional banking requirements.",
      "Security and Fraud Risks: Increasing cyber threats, fraud attempts, and data breaches require advanced security architecture and continuous monitoring.",
      "Slow Product Innovation: Complex approval processes, disconnected systems, and technical debt delay the launch of new financial products and services.",
      "Fragmented Customer Experiences: Customers expect seamless experiences across mobile, web, branch, and digital channels, yet many institutions still operate in silos.",
      "Limited Financial Intelligence: Data trapped across systems prevents organizations from generating actionable insights for risk management, forecasting, and customer growth.",
    ],
    solutionsHeading: "Engineering Confidence Into Financial Ecosystems",
    solutionDescription: "We don't treat financial technology challenges as isolated issues. We solve them through scalable architecture, security-first engineering, and enterprise-grade operational design.",
    solutions: [
      "Digital-First Customer Experiences: We create high-performance banking and financial platforms that deliver intuitive experiences across mobile, web, and self-service channels.",
      "Compliance-Driven Architecture: Security, governance, and regulatory alignment are embedded into every layer through PCI DSS-ready infrastructure, KYC workflows, AML controls, audit trails, and role-based access management.",
      "Secure Transaction Infrastructure: We design resilient payment systems, transaction engines, and financial platforms that support reliability, scalability, and operational continuity.",
      "Data Intelligence & Risk Management: We unify financial data across systems to enable advanced analytics, risk monitoring, fraud detection, and predictive decision-making.",
      "Connected Omnichannel Banking: We synchronize customer journeys across digital and physical touchpoints, ensuring consistency throughout the entire financial lifecycle.",
      "Cloud-Native Financial Platforms: We modernize legacy environments through cloud-native architecture, API ecosystems, and scalable infrastructure designed for long-term growth.",
    ],
    ctaHeading: "Turn Financial Complexity Into Competitive Advantage",
    ctaDescription: "Financial growth is often limited by legacy systems, compliance burdens, fragmented customer experiences, and operational inefficiencies.\nWe build secure, scalable financial ecosystems that modernize operations, strengthen compliance, and accelerate innovation.",
    // ctaButton: "Ready to modernize your financial ecosystem?",
  },
  "ecommerce-retail": {
    title: "Commerce Without Friction",
    heroDescription: "Transforming customer experiences, retail operations, and digital commerce ecosystems through intelligent technology solutions designed for growth.",
    challengesHeading: "The Challenges Behind Modern Commerce",
    challengesDescription: "Retail and ecommerce organizations are expected to deliver seamless customer experiences, optimize operations, and scale across multiple channels. Yet many continue to struggle with fragmented systems, disconnected data, and increasingly demanding customer expectations.",
    challenges: [
      "Poor Customer Experience: Slow websites, complicated checkout flows, and inconsistent digital experiences reduce engagement, conversions, and customer loyalty.",
      "Disconnected Commerce Systems: Inventory, sales, fulfillment, marketing, and customer data often operate in separate systems, creating inefficiencies and limiting visibility.",
      "Cart Abandonment & Conversion Loss: Friction throughout the purchasing journey leads to lost revenue and lower customer acquisition returns.",
      "Limited Customer Intelligence: Fragmented data makes it difficult to understand customer behavior, personalize experiences, and optimize marketing performance.",
      "Omnichannel Complexity: Maintaining consistency across online stores, mobile applications, marketplaces, and physical retail environments remains a significant challenge.",
      "Scalability Constraints: Legacy platforms and outdated infrastructure struggle to support growing traffic, expanding product catalogs, and seasonal demand spikes.",
    ],
    solutionsHeading: "Engineering Growth Into Modern Commerce Ecosystems",
    solutionDescription: "We don't solve ecommerce challenges in isolation. We build connected retail ecosystems that improve customer experiences, streamline operations, and support sustainable growth.",
    solutions: [
      "Experience-Led Commerce Design: We create fast, intuitive, and conversion-focused digital experiences that simplify customer journeys and increase engagement across every touchpoint.",
      "Connected Commerce Infrastructure: We integrate ecommerce, inventory, fulfillment, CRM, ERP, and marketing systems into unified ecosystems that improve visibility and operational efficiency.",
      "Conversion Optimization Architecture: We eliminate friction throughout the customer journey through performance optimization, streamlined checkout experiences, and data-driven user experience design.",
      "Customer Intelligence & Personalization: We centralize customer data to enable advanced analytics, behavioral insights, personalization engines, and AI-driven recommendations.",
      "Unified Omnichannel Experiences: We connect mobile, web, marketplaces, point-of-sale systems, and retail operations to deliver seamless customer experiences across every channel.",
      "Scalable Retail Platforms: We design cloud-native commerce architectures capable of supporting growth, seasonal demand fluctuations, and expanding product ecosystems.",
    ],
    ctaHeading: "Turn Retail Complexity Into Sustainable Growth",
    ctaDescription: "Retail growth is often limited by disconnected systems, fragmented customer journeys, operational inefficiencies, and outdated commerce infrastructure.\nWe build scalable ecommerce ecosystems that unify operations, optimize customer experiences, and accelerate business growth across every channel.",
    // ctaButton: "Ready to modernize your commerce ecosystem?",
  },
  logistics: {
    title: "Moving Supply Chains Forward",
    heroDescription: "Transforming logistics operations, transportation networks, and supply chain performance through intelligent digital solutions designed for visibility, efficiency, and scale.",
    challengesHeading: "The Challenges Behind Modern Logistics Operations",
    challengesDescription: "Logistics and transportation organizations are expected to deliver faster shipments, maintain operational visibility, optimize costs, and meet rising customer expectations. Yet many continue to operate with disconnected systems, limited data transparency, and increasingly complex compliance requirements.",
    challenges: [
      "Limited Operational Visibility: Disconnected systems make it difficult to track shipments, fleet performance, inventory movement, and delivery operations in real time.",
      "Inefficient Route & Fleet Management: Manual planning and outdated systems increase fuel costs, delivery delays, and resource inefficiencies.",
      "Fragmented Supply Chain Systems: Warehouse, transportation, inventory, and customer management systems often operate independently, creating operational silos.",
      "Compliance & Security Challenges: Meeting requirements such as FMCSA regulations, ELD mandates, GDPR, ISO 27001, CTPAT, and supply chain security standards requires robust systems, auditability, and secure data management. Legacy platforms often struggle to maintain compliance at scale.",
      "Delayed Decision-Making: Lack of centralized data prevents organizations from identifying bottlenecks, forecasting disruptions, and optimizing operations proactively.",
      "Customer Experience Challenges: Limited shipment transparency and communication lead to poor customer satisfaction and reduced trust.",
    ],
    solutionsHeading: "Engineering Visibility Into Complex Logistics Ecosystems",
    solutionDescription: "We don't solve logistics challenges in isolation. We build connected operational ecosystems that improve visibility, automate processes, and enable smarter decision-making across the entire supply chain.",
    solutions: [
      "Real-Time Logistics Visibility: We design centralized platforms that provide live tracking, operational monitoring, and complete visibility across transportation and logistics networks.",
      "Connected Supply Chain Architecture: We integrate transportation, warehouse, inventory, ERP, and customer systems into unified ecosystems that eliminate silos and improve coordination.",
      "Intelligent Fleet Optimization: We implement route optimization, fleet monitoring, predictive maintenance, and resource allocation systems that improve efficiency and reduce operational costs.",
      "Data Intelligence & Predictive Operations: We unify operational data to enable forecasting, performance analytics, demand planning, and AI-powered operational insights.",
      "Customer-Centric Logistics Experiences: We create digital experiences that provide real-time shipment updates, communication tools, and self-service capabilities for customers and partners.",
      "Compliance-Driven Infrastructure: Security, governance, and regulatory readiness are embedded into every solution through ISO 27001-aligned security controls, GDPR-compliant data management, FMCSA-ready operational workflows, ELD integration capabilities, and comprehensive audit trails that support transportation and supply chain compliance requirements.",

    ],
    ctaHeading: "Turn Logistics Complexity Into Operational Advantage",
    ctaDescription: "Supply chain performance is often limited by disconnected systems, fragmented data, inefficient processes, and limited operational visibility.\nWe build scalable logistics ecosystems that connect operations, optimize transportation networks, and enable smarter decision-making across the entire supply chain.",
    // ctaButton: "Ready to modernize your logistics ecosystem?",
  },
  education: {
    title: "Building the Future of Learning",
    heroDescription: "Transforming educational experiences, institutional operations, and learner outcomes through intelligent digital solutions designed for accessibility, engagement, and long-term impact.",
    challengesHeading: "The Barriers Holding Modern Education Back",
    challengesDescription: "Educational institutions and EdTech organizations face growing pressure to deliver engaging digital experiences, improve learner outcomes, expand access, and operate efficiently. Yet many continue to rely on disconnected technologies, manual processes, and legacy systems that limit innovation and educational effectiveness.",
    challenges: [
      "Disconnected Learning Ecosystems: Students, educators, and administrators often work across multiple platforms that create fragmented experiences and operational inefficiencies.",
      "Low Learner Engagement: Traditional digital learning environments frequently struggle to maintain participation, motivation, and long-term student engagement.",
      "Administrative Complexity: Manual processes across admissions, enrollment, scheduling, communication, and reporting consume valuable institutional resources.",
      "Student Data Privacy & Compliance Risks: Educational organizations must safeguard sensitive learner information while complying with FERPA, COPPA, GDPR, accessibility standards, and evolving privacy regulations.",
      "Limited Visibility Into Performance: Scattered academic and operational data makes it difficult to identify learning gaps, track outcomes, and make informed decisions.",
      "Scalability Challenges: As institutions expand programs, online learning initiatives, and student populations, legacy infrastructure often becomes a barrier to growth.",
    ],
    solutionsHeading: "Engineering Connected Learning Ecosystems",
    solutionDescription: "We don't view educational challenges as isolated technology problems. We build integrated digital ecosystems that connect learners, educators, and institutions while improving outcomes at every stage of the learning journey.",
    solutions: [
      "Student-Centered Digital Experiences: We design intuitive mobile and web experiences that make learning more engaging, accessible, and effective across every educational touchpoint.",
      "Personalized Learning Experiences: Using AI and intelligent automation, we enable adaptive learning pathways, personalized content delivery, and proactive student support.",
      "Unified Academic Operations: We integrate learning management systems, student information systems, communication tools, assessment platforms, and administrative workflows into a connected ecosystem.",
      "Learning Intelligence & Analytics: We transform educational data into actionable insights that help institutions improve student performance, measure outcomes, and optimize operations.",
      "Scalable Digital Education Infrastructure: We build cloud-native platforms capable of supporting hybrid learning models, growing student populations, and evolving institutional needs.",
      "Privacy-First Education Platforms: Security and compliance are embedded into every solution through FERPA-aligned data governance, GDPR-ready privacy controls, COPPA-compliant workflows, role-based access management, and secure cloud infrastructure.",

    ],
    ctaHeading: "Turn Educational Challenges Into Measurable Outcomes",
    ctaDescription: "Education is often constrained by disconnected systems, administrative inefficiencies, fragmented learning experiences, and limited visibility into student success.\nWe build secure, scalable education ecosystems that connect people, processes, and technology to improve engagement, streamline operations, and deliver stronger learning outcomes.",
    // ctaButton: "Ready to transform your learning ecosystem?",
  },
  "travel-hospitality": {
    title: "Experiences That Move People",
    heroDescription: "Transforming guest experiences, travel operations, and hospitality ecosystems through intelligent digital solutions designed for personalization, efficiency, and growth.",
    challengesHeading: "The Challenges Behind Modern Travel & Hospitality",
    challengesDescription: "Travel and hospitality organizations are expected to deliver seamless guest experiences, manage complex operations, and adapt to rapidly evolving customer expectations. Yet many continue to operate with fragmented systems, disconnected customer data, and outdated digital experiences that limit growth and loyalty.",
    challenges: [
      "Fragmented Guest Journeys: Travelers interact across websites, mobile apps, booking engines, loyalty programs, and on-property experiences, yet these touchpoints often remain disconnected.",
      "Rising Customer Expectations: Modern travelers expect personalized recommendations, real-time updates, self-service capabilities, and frictionless experiences at every stage of their journey.",
      "Booking & Conversion Challenges: Slow platforms, complicated booking processes, and poor user experiences result in abandoned reservations and lost revenue opportunities.",
      "Operational Inefficiencies: Manual processes across reservations, guest services, property management, and customer support reduce productivity and service quality.",
      "Data Silos & Limited Personalization: Customer information is often scattered across multiple systems, making it difficult to deliver personalized experiences and build long-term loyalty.",
      "Security & Compliance Requirements: Travel and hospitality organizations must protect customer data, payment information, and operational systems while meeting GDPR, PCI DSS, data privacy regulations, and security standards.",
    ],
    solutionsHeading: "Engineering Exceptional Travel Experiences",
    solutionDescription: "We don't treat hospitality and travel challenges as isolated issues. We build connected digital ecosystems that improve guest experiences, streamline operations, and create sustainable business growth.",
    solutions: [
      "Guest-Centric Experience Design: We create intuitive mobile and web experiences that simplify planning, booking, communication, and guest engagement across every touchpoint.",
      "Connected Hospitality Ecosystems: We integrate booking platforms, property management systems, CRM solutions, loyalty programs, payment gateways, and operational tools into a unified environment.",
      "Personalization & Customer Intelligence: We transform customer data into actionable insights that power personalized recommendations, targeted offers, loyalty initiatives, and improved guest experiences.",
      "Omnichannel Travel Experiences: We connect digital and physical touchpoints to deliver consistent experiences across websites, mobile applications, customer support channels, and on-site interactions.",
      "Compliance-Driven Digital Infrastructure: Security and compliance are embedded into every solution through PCI DSS-aligned payment systems, GDPR-ready privacy controls, secure authentication frameworks, role-based access management, and comprehensive data governance practices.",

      "Scalable Travel Infrastructure: We build cloud-native platforms capable of supporting seasonal demand, expanding operations, global audiences, and future growth initiatives.",
    ],
    ctaHeading: "Turn Travel Complexity Into Memorable Experiences",
    ctaDescription: "Growth in travel and hospitality is often constrained by disconnected systems, fragmented guest journeys, operational inefficiencies, and limited customer visibility.\nWe build secure, scalable travel ecosystems that connect experiences, streamline operations, and create meaningful customer relationships that drive long-term growth.",
    // ctaButton: "Ready to elevate your travel and hospitality ecosystem?",
  },
  "saas-startups": {
    title: "Building Products Ready for Scale",
    heroDescription: "Transforming ideas into scalable digital products through intelligent engineering, rapid execution, and growth-focused technology strategies.",
    challengesHeading: "The Challenges Behind High-Growth Technology Companies",
    challengesDescription: "SaaS companies and technology startups operate in highly competitive markets where speed, innovation, and scalability determine success. Yet many organizations struggle with technical debt, resource constraints, product complexity, and growing customer expectations that slow momentum and limit growth.",
    challenges: [
      "Pressure to Ship Faster: Startups must continuously release new features and improvements while balancing product quality, stability, and user experience.",
      "Scalability Challenges: Applications built for early-stage growth often struggle under increasing user demand, expanding datasets, and growing operational complexity.",
      "Technical Debt Accumulation: Rapid development cycles frequently create architectural limitations that hinder future innovation and increase maintenance costs.",
      "Resource & Talent Constraints: Building and retaining specialized engineering teams can be difficult while maintaining focus on core business growth.",
      "Product Adoption & Retention Issues: Even strong products can struggle with onboarding, engagement, retention, and long-term customer success.",
      "Security & Compliance Expectations: As businesses grow, customers increasingly expect enterprise-grade security, privacy controls, and compliance readiness without compromising agility.",
    ],
    solutionsHeading: "Engineering Products Built for Growth",
    solutionDescription: "We don't simply build software. We help SaaS companies and startups establish the technical foundations required to scale products, teams, and operations with confidence.",
    solutions: [
      "Product-Led Experience Design: We create intuitive user experiences that improve onboarding, engagement, retention, and overall customer satisfaction.",
      "Scalable Cloud-Native Architecture: We design flexible, high-performance platforms that support growth, evolving business requirements, and increasing user demand.",
      "Accelerated Product Delivery: We leverage agile methodologies, automation, CI/CD pipelines, and modern engineering practices to shorten development cycles and accelerate time-to-market.",
      "Data Intelligence & Product Insights: We build analytics ecosystems that provide visibility into user behavior, product performance, customer health, and growth opportunities.",
      "Security & Compliance by Design: Security is embedded throughout the development lifecycle through secure architecture, role-based access controls, data protection frameworks, audit capabilities, and readiness for standards such as SOC 2, GDPR, ISO 27001, and enterprise customer requirements.",
      "Future-Ready Technology Foundations: We create modular, API-first systems that enable seamless integrations, continuous innovation, and long-term scalability.",
    ],
    ctaHeading: "Turn Product Ambition Into Sustainable Growth",
    ctaDescription: "Many startups and SaaS businesses are limited not by vision, but by technology foundations that cannot keep pace with growth, customer expectations, and market demands.\nWe build secure, scalable product ecosystems that accelerate innovation, strengthen operational efficiency, and support long-term business growth.",
    // ctaButton: "Ready to scale your product with confidence?",
  },
};

/* ───────── Industry meta (spec card data) ───────── */

interface IndustryMeta {
  shortLabel: string;
  compliance: string;
  projectsShipped: string;
  typicalEngagement: string;
  topFocus: string[];
  accent: string;
  icon: ReactNode;
}

const industryMeta: Record<string, IndustryMeta> = {
  healthcare: {
    shortLabel: "Healthcare",
    compliance: "HIPAA · HL7 · FHIR · GDPR",
    projectsShipped: "30+ platforms",
    typicalEngagement: "12–20 weeks",
    topFocus: ["Telemedicine", "EHR integration", "Patient portals"],
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  fintech: {
    shortLabel: "FinTech",
    compliance: "PCI-DSS · SOC 2 · KYC · AML",
    projectsShipped: "25+ platforms",
    typicalEngagement: "10–18 weeks",
    topFocus: ["Payments", "Risk modeling", "Compliance automation"],
    accent: "#1565C0",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  "ecommerce-retail": {
    shortLabel: "E-commerce",
    compliance: "PCI-DSS · GDPR · CCPA",
    projectsShipped: "40+ storefronts",
    typicalEngagement: "8–14 weeks",
    topFocus: ["Conversion optimization", "Headless commerce", "Inventory"],
    accent: "#0277BD",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  logistics: {
    shortLabel: "Logistics",
    compliance: "ISO 27001 · GDPR",
    projectsShipped: "15+ platforms",
    typicalEngagement: "12–16 weeks",
    topFocus: ["Real-time tracking", "Route optimization", "Workforce tools"],
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  education: {
    shortLabel: "Education",
    compliance: "FERPA · COPPA · WCAG 2.1",
    projectsShipped: "20+ LMS builds",
    typicalEngagement: "10–18 weeks",
    topFocus: ["LMS platforms", "Analytics", "Accessibility"],
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  "travel-hospitality": {
    shortLabel: "Travel",
    compliance: "PCI-DSS · GDPR",
    projectsShipped: "12+ platforms",
    typicalEngagement: "10–16 weeks",
    topFocus: ["Booking engines", "PMS integration", "Guest experiences"],
    accent: "#039BE5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  "saas-startups": {
    shortLabel: "SaaS & Startups",
    compliance: "SOC 2 · GDPR · CCPA",
    projectsShipped: "100+ MVPs & scale-ups",
    typicalEngagement: "8–14 weeks",
    topFocus: ["MVP velocity", "Cloud architecture", "Growth engineering"],
    accent: "#0277BD",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
};

const allIndustryTitles: Record<string, { title: string; tagline: string }> = {
  healthcare: { title: "Healthcare & HealthTech", tagline: "HIPAA-compliant platforms, telemedicine, and patient management." },
  fintech: { title: "FinTech", tagline: "Secure financial platforms with regulatory-ready architecture." },
  "ecommerce-retail": { title: "E-commerce & Retail", tagline: "Conversion-tuned storefronts and inventory at scale." },
  logistics: { title: "Logistics & Transportation", tagline: "Real-time tracking, fleet management, route optimization." },
  education: { title: "Education & EdTech", tagline: "Interactive learning platforms and student engagement tools." },
  "travel-hospitality": { title: "Travel & Hospitality", tagline: "Booking platforms and guest portals." },
  "saas-startups": { title: "SaaS & Tech Startups", tagline: "MVPs to scale-ups, speed without sacrificing architecture." },
};

const relatedIndustryMap: Record<string, string[]> = {
  healthcare: ["fintech", "education", "saas-startups"],
  fintech: ["healthcare", "ecommerce-retail", "saas-startups"],
  "ecommerce-retail": ["fintech", "logistics", "travel-hospitality"],
  logistics: ["ecommerce-retail", "fintech", "saas-startups"],
  education: ["healthcare", "saas-startups", "ecommerce-retail"],
  "travel-hospitality": ["ecommerce-retail", "logistics", "saas-startups"],
  "saas-startups": ["fintech", "ecommerce-retail", "education"],
};

interface EcareCapability {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ImpactMetric {
  title: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

interface EcareIndustryData {
  heading: string;
  subHeading: string;
  capabilities: EcareCapability[];
  impact: {
    heading: string;
    subheading: string;
    metrics: ImpactMetric[];
  };
}

const ecareCapabilitiesByIndustry: Record<string, EcareIndustryData> = {
  healthcare: {
    heading: "Powering Every Stage of the eCare Journey",
    subHeading: "We build connected healthcare solutions that support providers, patients, and systems across the entire care lifecycle. From engagement to intelligence, every layer is designed for security, scale, and clinical impact.",
    capabilities: [
      {
        title: "Mobile Applications",
        description: "Patient engagement, telehealth, remote care",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Web Platforms",
        description: "Patient portals, provider systems, healthcare ecosystems",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "AI & Machine Learning",
        description: "Predictive insights, intelligent automation, decision support",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Quality Assurance",
        description: "Reliable, secure, regulation-ready healthcare software",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Staff Augmentation",
        description: "Specialized healthcare technology expertise",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Project Management",
        description: "Complex healthcare initiatives delivered with confidence",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real outcomes from connected healthcare solutions",
      metrics: [
        {
          title: "Patient Engagement Platform",
          metrics: [
            { value: "42%", label: "increase in patient adoption" },
            { value: "35%", label: "reduction in missed appointments" }
          ]
        },
        {
          title: "Telehealth Transformation",
          metrics: [
            { value: "3x", label: "growth in virtual consultations" },
            { value: "60%", label: "faster appointment scheduling" }
          ]
        },
        {
          title: "Clinical Operations Modernization",
          metrics: [
            { value: "48%", label: "reduction in administrative workload" },
            { value: "30%", label: "improvement in operational efficiency" }
          ]
        },
        {
          title: "AI-Powered Care Automation",
          metrics: [
            { value: "55%", label: "fewer manual processes" },
            { value: "25%", label: "faster response times" }
          ]
        }
      ]
    }
  },
  fintech: {
    heading: "Powering Every Layer of Modern Financial Services",
    subHeading: "We build secure financial ecosystems that support institutions, customers, and operations across the entire financial value chain.",
    capabilities: [
      {
        title: "Mobile Banking Apps",
        description: "Secure mobile payments, digital wallets, biometric authentication",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Trading & Investment Platforms",
        description: "Real-time market data, portfolio management, execution engines",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Risk & Fraud Detection",
        description: "AI-powered anomaly detection, real-time transaction monitoring",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Regulatory Compliance",
        description: "KYC/AML workflows, audit trails, PCI-DSS ready infrastructure",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Core Banking Integration",
        description: "Legacy system modernization, API-first banking architecture",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Wealth Management Solutions",
        description: "Financial planning, robo-advisory, portfolio analytics",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real financial outcomes from intelligent solutions",
      metrics: [
        {
          title: "Digital Banking Platform",
          metrics: [
            { value: "56%", label: "increase in mobile adoption" },
            { value: "42%", label: "reduction in branch visits" }
          ]
        },
        {
          title: "Fraud Detection System",
          metrics: [
            { value: "73%", label: "fewer fraudulent transactions" },
            { value: "89%", label: "faster alert response" }
          ]
        },
        {
          title: "Automated Onboarding",
          metrics: [
            { value: "64%", label: "reduction in KYC processing time" },
            { value: "38%", label: "higher conversion rates" }
          ]
        },
        {
          title: "AI Credit Scoring",
          metrics: [
            { value: "31%", label: "improved risk prediction" },
            { value: "2.5x", label: "faster loan approvals" }
          ]
        }
      ]
    }
  },
  "ecommerce-retail": {
    heading: "Powering Every Stage of the Commerce Journey",
    subHeading: "We build connected retail and ecommerce solutions that support brands, customers, and operations throughout the entire commerce lifecycle.",
    capabilities: [
      {
        title: "Mobile Commerce Apps",
        description: "Native iOS/Android shopping experiences with seamless checkout",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Headless Commerce Platforms",
        description: "API-first storefronts, flexible content management, omnichannel delivery",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Personalization Engines",
        description: "AI-powered recommendations, dynamic pricing, behavioral targeting",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Inventory & Fulfillment",
        description: "Real-time stock management, warehouse optimization, last-mile tracking",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Loyalty & Retention",
        description: "Points systems, rewards engines, customer lifecycle management",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Marketplace Platforms",
        description: "Multi-vendor systems, commission engines, seller dashboards",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real commerce outcomes from connected retail solutions",
      metrics: [
        {
          title: "Mobile Commerce App",
          metrics: [
            { value: "67%", label: "increase in mobile revenue" },
            { value: "28%", label: "higher average order value" }
          ]
        },
        {
          title: "Personalization Engine",
          metrics: [
            { value: "43%", label: "lift in conversion rate" },
            { value: "35%", label: "improvement in repeat purchases" }
          ]
        },
        {
          title: "Headless Commerce",
          metrics: [
            { value: "52%", label: "faster page load times" },
            { value: "22%", label: "reduction in cart abandonment" }
          ]
        },
        {
          title: "Inventory Optimization",
          metrics: [
            { value: "31%", label: "reduction in stockouts" },
            { value: "18%", label: "lower carrying costs" }
          ]
        }
      ]
    }
  },
  logistics: {
    heading: "Powering Every Stage of the Logistics Journey",
    subHeading: "We build connected logistics and transportation solutions that support operations, customers, and supply chain stakeholders across the entire movement lifecycle.",
    capabilities: [
      {
        title: "Fleet Management Systems",
        description: "Real-time tracking, route optimization, driver mobile apps",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Warehouse Management",
        description: "Inventory tracking, picking optimization, automated workflows",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Predictive Analytics",
        description: "Demand forecasting, route prediction, maintenance alerts",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Compliance & Safety",
        description: "ELD integration, driver logs, safety monitoring, audit trails",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Supply Chain Visibility",
        description: "End-to-end tracking, carrier integration, customer portals",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Last-Mile Delivery",
        description: "Route optimization, delivery tracking, proof of delivery",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real supply chain outcomes from connected logistics",
      metrics: [
        {
          title: "Route Optimization",
          metrics: [
            { value: "27%", label: "reduction in fuel costs" },
            { value: "34%", label: "improvement in on-time delivery" }
          ]
        },
        {
          title: "Real-Time Tracking",
          metrics: [
            { value: "62%", label: "fewer customer support calls" },
            { value: "45%", label: "higher customer satisfaction" }
          ]
        },
        {
          title: "Warehouse Automation",
          metrics: [
            { value: "41%", label: "faster order picking" },
            { value: "28%", label: "reduction in labor costs" }
          ]
        },
        {
          title: "Predictive Maintenance",
          metrics: [
            { value: "33%", label: "fewer unexpected breakdowns" },
            { value: "19%", label: "lower maintenance costs" }
          ]
        }
      ]
    }
  },
  education: {
    heading: "Powering Every Stage of the Learning Journey",
    subHeading: "We build connected education solutions that support institutions, educators, learners, and administrators across the complete education lifecycle—from recruitment and enrollment to engagement, achievement, and retention.",
    capabilities: [
      {
        title: "Learning Management Systems",
        description: "Course delivery, assessments, progress tracking, certifications",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Student Portals",
        description: "Enrollment management, grade access, communication tools",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Adaptive Learning",
        description: "AI-powered personalization, learning paths, skill gap analysis",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Assessment Platforms",
        description: "Online exams, proctoring, automated grading, analytics",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Virtual Classrooms",
        description: "Video conferencing, collaboration tools, breakout rooms",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Analytics & Reporting",
        description: "Student performance tracking, retention insights, outcome measurement",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real learning outcomes from connected education solutions",
      metrics: [
        {
          title: "LMS Platform",
          metrics: [
            { value: "47%", label: "higher course completion rates" },
            { value: "38%", label: "improved student engagement" }
          ]
        },
        {
          title: "Adaptive Learning",
          metrics: [
            { value: "34%", label: "faster concept mastery" },
            { value: "29%", label: "reduction in learning gaps" }
          ]
        },
        {
          title: "Virtual Classroom",
          metrics: [
            { value: "3x", label: "increase in student participation" },
            { value: "56%", label: "fewer missed sessions" }
          ]
        },
        {
          title: "Analytics Dashboard",
          metrics: [
            { value: "41%", label: "earlier intervention capability" },
            { value: "23%", label: "improved retention rates" }
          ]
        }
      ]
    }
  },
  "travel-hospitality": {
    heading: "Powering Every Stage of the Guest Journey",
    subHeading: "We build connected travel and hospitality solutions that support organizations, staff, and travelers across the complete customer lifecycle—from discovery and booking to engagement, loyalty, and retention.",
    capabilities: [
      {
        title: "Booking Platforms",
        description: "Real-time availability, dynamic pricing, payment integration",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Guest Mobile Apps",
        description: "Digital check-in, room keys, concierge services, in-app messaging",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Revenue Management",
        description: "Dynamic pricing, demand forecasting, inventory optimization",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Loyalty Engines",
        description: "Points management, tier systems, personalized offers",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Property Management",
        description: "PMS integration, housekeeping, maintenance, operations",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Trip Planning",
        description: "Itinerary builders, recommendations, real-time updates",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real guest outcomes from connected hospitality solutions",
      metrics: [
        {
          title: "Booking Platform",
          metrics: [
            { value: "51%", label: "increase in direct bookings" },
            { value: "33%", label: "reduction in booking abandonment" }
          ]
        },
        {
          title: "Guest Mobile App",
          metrics: [
            { value: "4.8★", label: "average app rating" },
            { value: "44%", label: "higher guest satisfaction scores" }
          ]
        },
        {
          title: "Revenue Management",
          metrics: [
            { value: "27%", label: "increase in RevPAR" },
            { value: "19%", label: "higher occupancy rates" }
          ]
        },
        {
          title: "Loyalty Engine",
          metrics: [
            { value: "38%", label: "increase in repeat bookings" },
            { value: "$2.1M", label: "incremental loyalty revenue" }
          ]
        }
      ]
    }
  },
  "saas-startups": {
    heading: "Powering Every Stage of the Product Journey",
    subHeading: "We build connected technology solutions that support founders, product teams, and growing organizations throughout the entire product lifecycle.",
    capabilities: [
      {
        title: "MVP Development",
        description: "Rapid prototyping, lean validation, accelerated time-to-market",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Scalable Architecture",
        description: "Cloud-native design, microservices, elastic infrastructure",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Analytics & Insights",
        description: "Product analytics, user behavior, growth metrics dashboards",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Security & Compliance",
        description: "SOC 2 readiness, GDPR compliance, enterprise-grade security",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      },
      {
        title: "Product-Led Growth",
        description: "Onboarding flows, freemium models, self-serve analytics",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        title: "Integrations Ecosystem",
        description: "API-first design, third-party connections, workflow automation",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      }
    ],
    impact: {
      heading: "Impact Beyond Technology",
      subheading: "Real growth outcomes from connected SaaS solutions",
      metrics: [
        {
          title: "MVP Launch",
          metrics: [
            { value: "12 weeks", label: "from concept to launch" },
            { value: "35%", label: "lower development costs" }
          ]
        },
        {
          title: "Scalable Architecture",
          metrics: [
            { value: "10x", label: "user growth capacity" },
            { value: "99.99%", label: "platform uptime" }
          ]
        },
        {
          title: "Product Analytics",
          metrics: [
            { value: "43%", label: "improvement in user retention" },
            { value: "28%", label: "higher feature adoption" }
          ]
        },
        {
          title: "Enterprise Readiness",
          metrics: [
            { value: "8 weeks", label: "to SOC 2 compliance" },
            { value: "25+", label: "enterprise customers onboarded" }
          ]
        }
      ]
    }
  }
};

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
  const related = (relatedIndustryMap[slug] ?? []).slice(0, 3);

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
          {/* <AnimatedSection>
          //   <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          //     <Link href="/" className="hover:text-neon-blue transition-colors">Home</Link>
          //     <span className="text-gray-600">/</span>
          //     <Link href="/industries" className="hover:text-neon-blue transition-colors">Industries</Link>
          //     <span className="text-gray-600">/</span>
          //     <span style={{ color: accent }}>{industry.title}</span>
          //   </nav>
          // </AnimatedSection> */}

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
                  {/* <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-[0.18] pointer-events-none"
                    style={{ backgroundColor: accent }}
                  /> */}

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
        <section className="layout-section  bg-[#0a1628] relative overflow-hidden">

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
        <section className=" layout-section  bg-light-accent relative overflow-hidden">
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
              {ecareCapabilitiesByIndustry[slug]?.capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden p-6 lg:p-7 transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow)]"
                  style={{ "--card-glow": `${accent}55` } as React.CSSProperties}
                >
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: accent }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${accent}15`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <div className="w-6 h-6 gradient-text-dark" >
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue tracking-tight mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-deep-blue/65 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
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