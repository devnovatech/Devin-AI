"use client";

import { useState, Fragment, ReactNode } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";
import React from "react";
import { ServiceArt } from "@/components/ui/ServiceArt";
import {
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

const ACCENTS = ["#1E88E5", "#0277BD", "#0288D1", "#039BE5", "#00ACC1", "#1565C0"];

interface ServiceOffering {
  category: string;
  items: string[];
  description: string;

}
interface OutcomeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}


interface WhyChooseItem {
  title: string;
  description: string;
}

interface IndustryItem {
  name: string;
  description: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  offerings: ServiceOffering[];
  offeringsDescription: string;
  offeringsTitle: string;
  painPoints: string[];
  painIntro: string;
  whyChoose: WhyChooseItem[];
  whyTitle: string;
  whyTagline: string;
  industryTitle: string;
  industryDescription: string;
  industries: IndustryItem[];
  processHeading: string,
  processSteps: {
    number: string;
    title: string;
    duration: string;
    description: string;
  }[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
}

const servicesData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    subtitle: "Performance-Led Marketing for Measurable ROI",
    description: "We help organizations attract qualified audiences, generate demand, and drive revenue growth through data-driven marketing. From SEO and paid acquisition to content and conversion optimization, we build scalable systems for sustainable lifecycle growth.",
    painIntro: "What\u2019s Holding Your Marketing Back?",
    offeringsTitle: "Revenue Growth & Demand Generation Capabilities",
    offeringsDescription: "A performance-driven marketing framework focused on increasing visibility, attracting qualified prospects, improving conversion rates, and maximizing customer lifetime value.",
    offerings: [
      {
        category: "Market Intelligence & Growth Strategy",
        description: "Build a strategic foundation for sustainable growth through audience research, competitive analysis, and channel planning.",
        items: [
          "Market & competitor analysis",
          "Audience segmentation",
          "Customer journey mapping",
          "Growth strategy development",
        ],
      },
      {
        category: "Search Visibility & Organic Growth",
        description: "Increase discoverability through technical SEO, content strategy, and search performance optimization.",
        items: [
          "Technical SEO audits",
          "Keyword & topic strategy",
          "On-page optimization",
          "Content growth planning",
        ],
      },
      {
        category: "Paid Acquisition & Media Buying",
        description: "Drive qualified traffic and demand through highly targeted advertising campaigns.",
        items: [
          "Google Ads management",
          "LinkedIn & Meta campaigns",
          "Audience targeting strategy",
          "Campaign optimization",
        ],
      },
      {
        category: "Content & Authority Building",
        description: "Develop content ecosystems that educate, engage, and convert decision-makers.",
        items: [
          "Content strategy",
          "Thought leadership content",
          "Landing page content",
          "Campaign creative development",
        ],
      },
      {
        category: "Conversion & Funnel Optimization",
        description: "Improve lead generation performance and customer acquisition efficiency across every touchpoint.",
        items: [
          "Conversion rate optimization",
          "Landing page optimization",
          "Funnel analysis",
          "A/B testing programs",
        ],
      },
    ],
    painPoints: [
      "Are you creating content that never ranks or worse, doesn\u2019t convert?",
      "Does your brand feel scattered and inconsistent across platforms?",
      "Spending on ads but not sure where the ROI is?",
      "Struggling to track what\u2019s actually working in your campaigns?",
      "Feeling stuck in a loop of random marketing activities with no clear strategy?",
    ],
    whyTitle: "Why Businesses Choose Our Growth Team",
    whyTagline: "We don't just run marketing campaigns. We build growth engines that increase visibility, generate demand, and create measurable business outcome.",
    whyChoose: [
      { title: "Performance-First Marketing Approach", description: "We don't guess, we plan. Every tactic supports your growth goals with data-driven execution." },
      { title: "Multi-Channel Growth Expertise", description: "From SEO and paid media to content and analytics, we execute across the full customer acquisition funnel." },
      { title: "Transparent Reporting & Analytics", description: "Everything we do is tracked, measured, and optimized for ROI with clear performance dashboards." },
      { title: "Custom-Built Growth Strategies", description: "No templates. Every strategy is tailored to your industry, brand, audience, and business objectives." },
      { title: "Integrated Marketing Operations", description: "Our strategists, content creators, analysts, and media buyers collaborate as one unified growth team." },
      { title: "Scalable Acquisition Frameworks", description: "We build marketing systems that grow with your business, not campaigns that end after launch." },
    ],
    industries: [
      { name: "Technology & SaaS", description: "Get seen, generate leads, and build brand credibility" },
      { name: "Ecommerce & Retail", description: "Drive organic traffic, boost conversions, reduce CAC" },
      { name: "Healthcare & Life Sciences", description: "Build trust, educate audiences, and remain compliant" },
      { name: "B2B & Professional Services", description: "Engage decision-makers and shorten the sales cycle" },
      { name: "Financial Services & Fintech", description: "Build authority, generate qualified leads, and drive customer acquisition" },
      { name: "Education & E-Learning", description: "Attract learners, build community, and scale enrollment" },
      { name: "Real Estate & PropTech", description: "Generate qualified leads and build market presence" },
      { name: "Manufacturing & Industrial", description: "Showcase capabilities and connect with enterprise buyers" },
    ],
    industryTitle: "Industries We Help Grow",
    industryDescription: "We support organizations across diverse industries through strategic digital marketing initiatives",
    processHeading: "From Market Visibility to Revenue Growth Through Four Strategic Phases",
    processSteps: [
      {
        number: "01",
        title: "Market Research & Opportunity Analysis",
        duration: "Week 1–3",
        description: "We identify audience behavior, competitive positioning, acquisition opportunities, and growth constraints to establish a data-driven marketing strategy.",
      },
      {
        number: "02",
        title: "Channel Strategy & Campaign Architecture",
        duration: "Week 2–4",
        description: "We design acquisition funnels, content frameworks, advertising strategies, and conversion pathways aligned with business objectives.",
      },
      {
        number: "03",
        title: "Campaign Execution & Optimization",
        duration: "Week 4–10",
        description: "Our teams launch, manage, and continuously optimize campaigns across search, social, paid media, and content channels.",
      },
      {
        number: "04",
        title: "Performance Scaling & Revenue Acceleration",
        duration: "Week 10+",
        description: "We analyze results, improve conversion efficiency, and scale high-performing initiatives to maximize long-term business growth.",
      },
    ],
    ctaHeading: "Let\u2019s Make Marketing Work for You",
    ctaDescription: "We don\u2019t believe in vanity metrics. We care about real impact - visibility, engagement, leads, and growth.",
    ctaButton: "Book a Free Strategy Call",
  },
  "mobile-application": {
    title: "Mobile Application Development",
    subtitle: "Mobile Engineering for Next-Gen Apps",
    description:
      "Custom mobile applications designed to streamline operations, enhance user experience, and drive digital growth from strategy to deployment.",
    painIntro: "What\u2019s Holding You Back?",
    offeringsTitle: "Mobile Applications built for long-term growth",
    offeringsDescription: "A complete delivery framework covering product strategy, design, engineering, quality assurance, and optimization—aligned to support scalable mobile products and enterprise digital initiatives.",
    offerings: [
      {
        category: "Product Strategy & Discovery",
        description: "Establish the business, technical, and operational foundations required for successful product delivery.",
        items: [
          "Product discovery workshops",
          "Requirements & workflow mapping",
          "MVP planning & feature prioritization",
          "Technical feasibility assessment",
        ],
      },
      {
        category: "UI/UX Design",
        description: "Design user experiences that balance usability, accessibility, and business objectives.",
        items: [
          "User journey mapping",
          "Wireframes & interactive prototypes",
          "Design systems & UI libraries",
          "Accessibility & usability validation",
        ],
      },
      {
        category: "Mobile Application Engineering",
        description: "Build secure, scalable mobile applications across iOS, Android, and cross-platform ecosystems.",
        items: [
          "Native iOS & Android development",
          "Flutter & React Native solutions",
          "Mobile architecture implementation",
          "App Store & Play Store readiness",
        ],
      },
      {
        category: "Backend & API Engineering",
        description: "Develop the systems, services, and integrations that power modern mobile experiences.",
        items: [
          "API design & development",
          "Authentication & user management",
          "Cloud infrastructure integration",
          "Third-party system integrations",
        ],
      },
      {
        category: "Quality Assurance & Testing",
        description: "Ensure reliability, performance, and production readiness through continuous quality engineering.",
        items: [
          "Functional & regression testing",
          "Test automation frameworks",
          "Performance & load testing",
          "Security validation",
        ],
      },
    ],
    painPoints: [
      "Not sure whether to go native or cross-platform?",
      "Have an app idea but don\u2019t know where to start, or who to trust?",
      "Struggling with crashes, bugs, or poor app store reviews?",
      "Your current app doesn\u2019t scale with your business needs?",
      "Tired of missing deadlines and unclear development roadmaps?",
    ],
    whyTitle: "Why Businesses Partner with Us",
    whyChoose: [
      { title: "Full-Cycle Mobile Engineering Expertise", description: "From product strategy and architecture to deployment and optimization, we deliver end-to-end mobile solutions." },
      { title: "Scalable Architecture-First Approach", description: "We build mobile ecosystems designed to support business growth, operational efficiency, and long-term scalability." },
      { title: "Enterprise-Grade Security Standards", description: "Security, data protection, and compliance are embedded throughout the development lifecycle." },
      { title: "Strong Backend & Integration Capabilities", description: "Seamless API development, cloud infrastructure, and third-party system integration for complete mobile experiences." },
      { title: "Focus on Performance & Maintainability", description: "Clean code, robust architecture, and continuous quality assurance ensure reliable, high-performing applications." },
      { title: "Experience Across Complex Digital Ecosystems", description: "We've delivered mobile solutions for healthcare, fintech, logistics, retail, and enterprise organizations." },
    ],
    whyTagline: "We don't just build mobile apps. We engineer mobile ecosystems designed to support business growth, operational efficiency, and long-term scalability.",
    industries: [
      { name: "Healthcare & Life Sciences", description: "HIPAA-compliant apps with secure patient data handling, appointment systems, and telemedicine features" },
      { name: "Financial Services & Fintech", description: "Secure, intuitive apps for transactions, budgeting, account management, and digital onboarding" },
      { name: "Retail & Ecommerce", description: "Custom mobile shopping experiences, real-time inventory tracking, and secure in-app payments" },
      { name: "Logistics & Transportation", description: "Real-time GPS tracking, order management, fleet monitoring, and mobile workforce enablement" },
      { name: "Education & E-Learning", description: "Interactive mobile learning platforms, video streaming, progress tracking, and user gamification" },
      { name: "Real Estate & PropTech", description: "Property search, virtual tours, document signing, and agent-client communication tools" },
      { name: "Manufacturing & Industrial Systems", description: "IoT integration, equipment monitoring, maintenance tracking, and operational dashboards" },
      { name: "Media & Entertainment", description: "Content streaming, social engagement, personalized recommendations, and interactive experiences" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We deliver mobile solutions for organizations across multiple industries",
    processHeading: "From kickoff to launch in four clear steps.",
    processSteps: [
      {
        number: "01",
        title: "Product Discovery & Technical Consulting",
        duration: "Week 1–2",
        description: "We analyze business models, user requirements, technical constraints, and platform goals to define a scalable mobile strategy.",
      },
      {
        number: "02",
        title: "System Architecture & Experience Design",
        duration: "Week 2–4",
        description: "We design mobile architecture, backend systems, API integrations, and user experiences that balance usability and scalability.",
      },
      {
        number: "03",
        title: "Agile Development & Quality Validation",
        duration: "Week 4–12",
        description: "Cross-functional teams build, test, and refine mobile applications through iterative sprints and continuous quality assurance.",
      },
      {
        number: "04",
        title: "Deployment & Performance Optimization",
        duration: "Week 12–14",
        description: "We launch production-ready apps with monitoring, analytics, and ongoing optimization to support long-term growth.",
      },
    ],
    ctaHeading: "Turn Your App Idea Into Real-World Impact",
    ctaDescription: "Whether you\u2019re launching from scratch or scaling an existing product, we help you build mobile apps that users love\u2014and businesses grow from.",
    ctaButton: "Let\u2019s Build Something Powerful",
  },
  "web-development": {
    title: "Web Development Services",
    subtitle: "Full-Stack Web Development For High-performance",
    description: "High-performance web platforms designed to streamline operations, enhance user experience, and accelerate digital growth through full-cycle engineering built for scalability, security, and maintainability.",
    painIntro: "What\u2019s Holding Your Website Back?",
    offeringsTitle: "Full-Spectrum Web Development",
    offeringsDescription: "A comprehensive delivery framework covering product strategy, architecture, engineering, quality assurance, infrastructure, and optimization—aligned to support modern web platforms and enterprise digital initiatives.",
    offerings: [
      {
        category: "Product Strategy & Discovery",
        description: "Establish the business, technical, and operational foundations required for successful platform delivery.",
        items: [
          "Product discovery workshops",
          "Requirements & process mapping",
          "Feature prioritization & roadmap planning",
          "Technical feasibility assessment",
        ],
      },
      {
        category: "Experience Design & Frontend Architecture",
        description: "Design intuitive digital experiences supported by scalable frontend architecture.",
        items: [
          "User journey mapping",
          "Wireframes & interactive prototypes",
          "Design systems & component libraries",
          "Responsive frontend architecture",
        ],
      },
      {
        category: "Web Application Engineering",
        description: "Build secure, scalable, and maintainable web applications tailored to business requirements.",
        items: [
          "Custom web application development",
          "SaaS platform development",
          "Enterprise portal development",
          "Progressive Web Applications (PWAs)",
        ],
      },
      {
        category: "Backend Systems & API Engineering",
        description: "Develop the services, integrations, and infrastructure powering modern web platforms.",
        items: [
          "API design & development",
          "Authentication & access management",
          "Third-party system integrations",
          "Microservices implementation",
        ],
      },
      {
        category: "Quality Assurance & Platform Security",
        description: "Ensure platform reliability, performance, and security through continuous quality engineering.",
        items: [
          "Functional & regression testing",
          "Performance & load testing",
          "Security assessments",
          "Automated testing frameworks",
        ],
      },
    ],
    painPoints: [
      "Is your current site slow, clunky, or frustrating to use?",
      "Struggling to integrate third-party tools or custom features?",
      "Is your platform holding you back from scaling your business?",
      "Can\u2019t manage updates easily or keep content fresh?",
      "Losing users because your site isn\u2019t mobile-friendly or accessible?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "Full-Cycle Web Engineering Expertise", description: "From product discovery and solution architecture to deployment and optimization, we deliver end-to-end web platforms." },
      { title: "Architecture-First Development Approach", description: "We engineer scalable systems, data models, and infrastructure aligned with future growth requirements." },
      { title: "Enterprise-Grade Security Standards", description: "Security controls, access management, and compliance are embedded throughout every development phase." },
      { title: "Strong Backend & Integration Capabilities", description: "API design, microservices implementation, and third-party system integration for complete web ecosystems." },
      { title: "Cloud-Native Scalability & Reliability", description: "AWS, Azure, and GCP deployment with CI/CD, monitoring, and performance optimization built in." },
      { title: "Experience Across Complex Digital Ecosystems", description: "We've delivered web platforms for SaaS, healthcare, fintech, ecommerce, and enterprise organizations." },
    ],
    whyTagline: "We don't just build websites. We engineer scalable web platforms designed to support business growth, operational efficiency, and long-term digital transformation.",
    industries: [
      { name: "Technology & SaaS", description: "Rapid MVPs, custom platforms, and scalable foundations for growth" },
      { name: "Ecommerce & Retail", description: "High-converting product experiences, optimized for performance and mobile" },
      { name: "Healthcare & Life Sciences", description: "Secure, compliant platforms designed for engagement and accessibility" },
      { name: "B2B Services & Agencies", description: "Lead-generating websites, CRM integrations, and flexible CMS builds" },
      { name: "Financial Services & Fintech", description: "Secure portals, client dashboards, and regulatory-compliant platforms" },
      { name: "Education & E-Learning", description: "Learning management systems, course platforms, and student engagement tools" },
      { name: "Real Estate & PropTech", description: "Property listing platforms, agent portals, and client management systems" },
      { name: "Logistics & Supply Chain", description: "Operational dashboards, tracking systems, and partner portals" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We deliver web platforms and digital systems for organizations across multiple industries:",
    processHeading: "From Strategy to Production in Four Engineered Stages",
    processSteps: [
      {
        number: "01",
        title: "Discovery & Consultation",
        duration: "Week 1–2",
        description: "We analyze business objectives, technical requirements, operational workflows, and platform goals to define a clear delivery strategy.",
      },
      {
        number: "02",
        title: "Solution Architecture",
        duration: "Week 2–4",
        description: "We design scalable systems, data models, infrastructure, and integration strategies aligned with future growth requirements.",
      },
      {
        number: "03",
        title: "Agile Engineering",
        duration: "Week 4–14",
        description: "Cross-functional teams develop, validate, and refine the platform through iterative delivery cycles and continuous quality assurance.",
      },
      {
        number: "04",
        title: "Deployment & Optimization",
        duration: "Week 14–16",
        description: "We launch production-ready systems with monitoring, performance optimization, security controls, and ongoing support.",
      },
    ],
    ctaHeading: "Let\u2019s Build a Web Experience Engineered for Speed, Scale & Success",
    ctaDescription: "We don\u2019t just build pretty websites\u2014we engineer digital platforms that drive results.",
    ctaButton: "Start Your Project",
  },
  "ui-ux-design": {
    title: "UI/UX Design Services",
    subtitle: "Human-Centric UI/UX for Seamless Digital Experiences",
    description: "Research-driven, human-centric UX that simplifies complexity, improves engagement, and drives product adoption. From user research and information architecture to interface design and usability testing, we deliver end-to-end solutions aligned with user needs, business goals, and technical requirements.",
    painIntro: "What\u2019s Holding Your Product Back?",
    offeringsTitle: "Experience Design Capabilities",
    offeringsDescription: "A comprehensive design framework covering user research, information architecture, interface design, usability validation, and design systems—built to create experiences that users understand, trust, and adopt.",
    offerings: [
      {
        category: "User Research & Discovery",
        description: "Understand user behaviors, business objectives, and operational requirements before design begins.",
        items: [
          "Stakeholder workshops",
          "User interviews & research",
          "Persona development",
          "Product discovery sessions",
        ],
      },
      {
        category: "Information Architecture",
        description: "Structure content, workflows, and navigation systems to improve usability and task completion.",
        items: [
          "Information architecture mapping",
          "User flow design",
          "Navigation frameworks",
          "Content hierarchy planning",
        ],
      },
      {
        category: "UX Strategy & Journey Design",
        description: "Define the end-to-end user experience across every touchpoint and interaction.",
        items: [
          "Customer journey mapping",
          "Experience strategy development",
          "Workflow optimization",
          "Conversion path planning",
        ],
      },
      {
        category: "Interface Design Systems",
        description: "Create scalable visual systems that ensure consistency across products and platforms.",
        items: [
          "UI design creation",
          "Design system development",
          "Component libraries",
          "Accessibility-focused interfaces",
        ],
      },
      {
        category: "Interactive Prototyping",
        description: "Validate concepts and interactions before development begins.",
        items: [
          "Low-fidelity wireframes",
          "High-fidelity prototypes",
          "Interactive user flows",
          "Stakeholder validation sessions",
        ],
      },
    ],
    painPoints: [
      "Are users dropping off before completing key actions?",
      "Is your design inconsistent or outdated across devices?",
      "Do you lack clarity on what your users really need?",
      "Are developers constantly stuck due to missing specs or unclear flows?",
      "Is your product functional but not delightful or intuitive?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "Research-Driven Design Methodology", description: "User interviews, stakeholder workshops, and behavioral analysis inform every design decision we make." },
      { title: "Strong Product & UX Strategy Expertise", description: "We align user needs with business objectives and technical requirements to create effective digital experiences." },
      { title: "Scalable Design System Development", description: "Component libraries, UI frameworks, and design systems that ensure consistency across products and platforms." },
      { title: "Accessibility & Usability Best Practices", description: "WCAG compliance, inclusive design principles, and usability testing for all user populations." },
      { title: "Cross-Functional Collaboration with Engineering", description: "Developer-ready handoff, design documentation, and seamless integration with development workflows." },
      { title: "Experience Across Complex Digital Ecosystems", description: "We've designed experiences for SaaS platforms, enterprise applications, healthcare systems, and ecommerce." },
    ],
    whyTagline: "We don't just create interfaces. We design digital experiences that improve usability, strengthen engagement, and support long-term product success.",
    industries: [
      { name: "SaaS Platforms", description: "Streamline onboarding, improve retention, and create smooth workflows" },
      { name: "Ecommerce & Retail", description: "Design to convert with optimized product discovery and checkout" },
      { name: "Healthcare & Fintech", description: "Build trust through clarity, accessibility, and compliance" },
      { name: "Startups & Emerging Products", description: "Rapid prototyping and MVP-ready designs with user feedback built in" },
      { name: "EdTech & E-Learning", description: "Learning-friendly design that's easy to navigate and engaging for all ages" },
      { name: "Enterprise Applications", description: "Complex workflow simplification and enterprise-grade usability" },
      { name: "Real Estate & PropTech", description: "Intuitive property search and client engagement experiences" },
      { name: "Logistics & Supply Chain", description: "Operational dashboards and workforce efficiency tools" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We design digital experiences for organizations across a wide range of industries",
    ctaHeading: "Let\u2019s Design Something People Love to Use",
    processHeading: "Discovered. Defined. Designed. Delivered.",
    processSteps: [
      {
        number: "01",
        title: "User Research & Product Discovery",
        duration: "Week 1–2",
        description: "We analyze business goals, user expectations, market conditions, and operational requirements to establish a foundation for effective design decisions.",
      },
      {
        number: "02",
        title: "Experience Architecture & UX Strategy",
        duration: "Week 2–4",
        description: "We structure user journeys, workflows, navigation systems, and interaction models that support both usability and business objectives.",
      },
      {
        number: "03",
        title: "Interface Design & Prototyping",
        duration: "Week 4–8",
        description: "Our designers create scalable visual systems and interactive prototypes that transform concepts into validated digital experiences.",
      },
      {
        number: "04",
        title: "Validation & Design Handoff",
        duration: "Week 8–10",
        description: "We test, refine, and prepare design assets for development through usability validation, stakeholder reviews, and implementation documentation.",
      },
    ],
    ctaDescription: "From first click to final conversion, we focus on creating digital experiences that feel natural, helpful, and compelling.",
    ctaButton: "Book a Free UI/UX Consultation",
  },
  "ecommerce": {
    title: "Ecommerce Development Services",
    subtitle: "eCommerce Platforms for Growth, Conversion, and Scale",
    description: "From direct-to-consumer storefronts and B2B commerce platforms to multi-vendor marketplaces and omnichannel ecosystems, we deliver end-to-end ecommerce engineering services built for performance, scalability, and long-term growth.",
    painIntro: "What\u2019s Holding Your Store Back?",
    offeringsTitle: "E-Commerce Platform Engineering",
    offeringsDescription: "A comprehensive ecommerce delivery framework covering customer journeys, platform architecture, transaction systems, conversion optimization, and operational scalability.",
    offerings: [
      {
        category: "Commerce Strategy & Customer Journey Design",
        description: "Establish the strategic and operational foundations required to support sustainable ecommerce growth.",
        items: [
          "Customer journey mapping",
          "Commerce strategy workshops",
          "Product catalog planning",
          "Conversion funnel design",
        ],
      },
      {
        category: "Storefront Experience Engineering",
        description: "Create high-performing shopping experiences designed to improve engagement and increase conversions.",
        items: [
          "Responsive storefront development",
          "Product discovery experiences",
          "Search & filtering systems",
          "Mobile commerce optimization",
        ],
      },
      {
        category: "Ecommerce Platform Development",
        description: "Build scalable commerce platforms that support growth, reliability, and operational efficiency.",
        items: [
          "Shopify development",
          "WooCommerce development",
          "Headless commerce architecture",
          "Custom ecommerce platforms",
        ],
      },
      {
        category: "Payments, Logistics & Commerce Integrations",
        description: "Connect critical systems that power modern ecommerce operations.",
        items: [
          "Payment gateway integrations",
          "ERP & CRM integrations",
          "Inventory management systems",
          "Shipping & fulfillment integrations",
        ],
      },
      {
        category: "Conversion Rate Optimization",
        description: "Improve revenue performance through continuous analysis and optimization of the customer journey.",
        items: [
          "Conversion audits",
          "Checkout optimization",
          "A/B testing implementation",
          "Customer behavior analysis",
        ],
      },
    ],
    painPoints: [
      "Is your current site slow, clunky, or hard to update?",
      "Are users dropping off before checkout?",
      "Struggling to integrate inventory, CRM, or shipping systems?",
      "Is your store missing key features like product recommendations or reviews?",
      "Losing customers due to confusing navigation or limited payment options?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "Deep Ecommerce Platform Expertise", description: "Shopify, WooCommerce, headless commerce, and custom platform development for every business model." },
      { title: "Conversion-Focused Development Approach", description: "Every feature, workflow, and integration is designed to increase revenue and improve customer retention." },
      { title: "Strong Integration & Automation Capabilities", description: "Payment gateways, ERP, CRM, inventory, and fulfillment systems connected seamlessly." },
      { title: "Scalable Commerce Architecture", description: "Platforms engineered to handle traffic spikes, product catalog growth, and global expansion." },
      { title: "Omnichannel Commerce Experience", description: "Unified customer experiences across web, mobile, social, and physical retail channels." },
      { title: "Data-Driven Growth Optimization", description: "Analytics, revenue dashboards, and continuous CRO to maximize customer lifetime value." },
    ],
    whyTagline: "We don't just build online stores. We engineer ecommerce ecosystems that increase revenue, improve customer experiences, and support long-term business growth.",
    industries: [
      { name: "Retail & Consumer Brands", description: "Custom stores that reflect your identity and drive repeat purchases" },
      { name: "Fashion & Apparel", description: "Visual-first storefronts with size guides, reviews, and social proof" },
      { name: "Beauty & Personal Care", description: "Subscription models, product recommendations, and loyalty programs" },
      { name: "Electronics & Technology", description: "Complex product specifications, comparison tools, and technical support" },
      { name: "Healthcare & Wellness", description: "Build credibility and streamline subscriptions with compliance focus" },
      { name: "Food & Beverage", description: "Local delivery, subscription boxes, and inventory management" },
      { name: "B2B Commerce", description: "Complex pricing, customer portals, and large catalogs made easy" },
      { name: "Multi-Vendor Marketplaces", description: "Seller dashboards, commission management, and marketplace analytics" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We help organizations build and scale ecommerce operations across multiple sectors:",
    processHeading: "Full-Funnel Commerce. End-to-End.",
    processSteps: [
      {
        number: "01",
        title: "Commerce Discovery & Growth Planning",
        duration: "Week 1–2",
        description: "We evaluate business objectives, customer journeys, product catalogs, and operational requirements to establish a scalable ecommerce strategy.",
      },
      {
        number: "02",
        title: "Commerce Architecture & Experience Design",
        duration: "Week 2–4",
        description: "We design storefront experiences, commerce workflows, platform architecture, and integration strategies that support both customer satisfaction and operational efficiency.",
      },
      {
        number: "03",
        title: "Platform Development & Transaction Validation",
        duration: "Week 4–14",
        description: "Our teams build, integrate, and validate every component of the commerce ecosystem, from product catalogs and payment systems to fulfillment workflows and analytics.",
      },
      {
        number: "04",
        title: "Launch, Optimization & Revenue Expansion",
        duration: "Week 14–16",
        description: "We deploy production-ready commerce platforms and continuously optimize conversion performance, customer retention, and operational scalability.",
      },
    ],
    ctaHeading: "Let\u2019s Build an Ecommerce Experience That Sells, Seamlessly",
    ctaDescription: "From smooth product discovery to effortless checkout, we design and build ecommerce solutions that turn visitors into loyal customers.",
    ctaButton: "Elevate Your Store Today",
  },
  "machine-learning-ai": {
    title: "Machine Learning & AI Services",
    subtitle: "Future-Ready AI/ML Solutions",
    description: "We design and deploy AI-powered solutions that automate processes, improve decision-making, and turn enterprise data into actionable intelligence. Our services span machine learning, predictive analytics, generative AI, and intelligent automation, built for scalable, accurate, and governed business outcomes.",
    painIntro: "What\u2019s Holding You Back from Adopting AI?",
    offeringsTitle: "AI engineering and data intelligence capabilities ",
    offeringsDescription: "A comprehensive AI delivery framework covering strategy, data engineering, model development, deployment, governance, and continuous optimization—designed to support long-term business value.",
    offerings: [
      {
        category: "AI Opportunity Mapping",
        description: "Identify high-value AI initiatives aligned with business goals, operational challenges, and technical feasibility.",
        items: [
          "AI readiness assessment",
          "Use case discovery workshops",
          "Business impact analysis",
          "AI adoption roadmap",
        ],
      },
      {
        category: "Data Engineering & Readiness",
        description: "Build the data foundation required for reliable machine learning and intelligent systems.",
        items: [
          "Data collection & integration",
          "Data cleansing & transformation",
          "Feature engineering",
          "Data pipeline development",
        ],
      },
      {
        category: "Machine Learning Systems",
        description: "Develop custom machine learning models designed to solve complex business challenges.",
        items: [
          "Predictive analytics models",
          "Recommendation engines",
          "Forecasting systems",
          "Model training & validation",
        ],
      },
      {
        category: "Generative AI & LLM Applications",
        description: "Build AI-powered experiences that enhance productivity, automate workflows, and improve access to information.",
        items: [
          "AI assistants & copilots",
          "Retrieval-Augmented Generation (RAG)",
          "Knowledge management systems",
          "Custom LLM integrations",
        ],
      },
      {
        category: "MLOps & AI Infrastructure",
        description: "Deploy, manage, and scale AI systems using modern cloud-native infrastructure and operational practices.",
        items: [
          "Model deployment pipelines",
          "MLOps implementation",
          "AI infrastructure architecture",
          "Continuous model delivery",
        ],
      },
    ],
    painPoints: [
      "Do you have data but don\u2019t know how to use it effectively?",
      "Tried AI before but didn\u2019t see real ROI or reliability?",
      "Unsure where AI fits into your business model or operations?",
      "Is your internal team stretched thin or lacking AI expertise?",
      "Concerned about scalability, cost, or compliance?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "End-to-End AI Engineering Expertise", description: "From opportunity assessment and data engineering to deployment and governance, we deliver complete AI solutions." },
      { title: "Strong Data Engineering Capabilities", description: "Data pipelines, feature engineering, and infrastructure designed for reliable machine learning systems." },
      { title: "Experience with ML & Generative AI", description: "Predictive models, recommendation engines, LLM applications, and intelligent automation systems." },
      { title: "Enterprise-Grade AI Governance Practices", description: "Model monitoring, bias assessment, risk management, and compliance controls built into every deployment." },
      { title: "Scalable Cloud-Native AI Infrastructure", description: "MLOps, model deployment pipelines, and continuous delivery for production-ready AI systems." },
      { title: "Focus on Measurable Business Outcomes", description: "We build AI that solves real problems—automation, efficiency, decision support, and competitive advantage." },
    ],
    whyTagline: "We don't just develop AI models. We engineer intelligent systems that automate operations, augment decision-making, and create sustainable competitive advantages through data-driven innovation.",
    industries: [
      { name: "Healthcare & Diagnostics", description: "Predictive analytics, medical imaging, and patient triage automation" },
      { name: "Finance & Insurance", description: "Fraud detection, credit scoring, and risk modeling" },
      { name: "Retail & Ecommerce", description: "Personalized recommendations, dynamic pricing, and inventory forecasting" },
      { name: "SaaS & Startups", description: "Smart features, usage analytics, and AI-as-a-Service integrations" },
      { name: "Manufacturing & Logistics", description: "Predictive maintenance, quality control, and supply chain optimization" },
      { name: "Education & E-Learning", description: "Personalized learning paths, content recommendations, and student analytics" },
      { name: "Real Estate & PropTech", description: "Property valuation, market trend analysis, and lead scoring" },
      { name: "Energy & Utilities", description: "Demand forecasting, grid optimization, and asset management" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We help organizations implement AI and machine learning solutions across multiple sectors:",
    processHeading: "Ingested. Modeled. Trained. Deployed",
    processSteps: [
      {
        number: "01",
        title: "AI Strategy & Opportunity Discovery",
        duration: "Week 1–3",
        description: "We evaluate business processes, operational bottlenecks, and organizational objectives to identify AI initiatives with the highest potential impact.",
      },
      {
        number: "02",
        title: "Data Foundation & Model Architecture",
        duration: "Week 3–6",
        description: "We design data pipelines, model architectures, infrastructure requirements, and governance frameworks needed to support scalable AI adoption.",
      },
      {
        number: "03",
        title: "Model Development & Validation",
        duration: "Week 6–16",
        description: "Our teams build, train, test, and refine machine learning systems through iterative experimentation, validation, and performance benchmarking.",
      },
      {
        number: "04",
        title: "Production AI Operations",
        duration: "Week 16–20",
        description: "We deploy production-ready AI systems with monitoring, governance controls, retraining strategies, and continuous optimization frameworks.",
      },
    ],
    ctaHeading: "Let\u2019s Make AI Work for Your Business",
    ctaDescription: "Whether you\u2019re looking to optimize operations, personalize experiences, or unlock hidden value in your data, we\u2019re here to help.",
    ctaButton: "Revolutionize Your Business",
  },
  "quality-assurance": {
    title: "Quality Assurance Services",
    subtitle: "SQA Engineering for Reliable, Secure Software Systems",
    description: "Improves software reliability, reduces release risk, and ensures product quality through structured QA. From test strategy and automation to performance and continuous validation, enabling faster, more predictable delivery.",
    painIntro: "What\u2019s Holding Your Product Back from Peak Performance?",
    offeringsTitle: "Software Quality Engineering Capabilities",
    offeringsDescription: "A comprehensive quality framework focused on risk reduction, release confidence, application stability, and continuous improvement across the software delivery lifecycle.",
    offerings: [
      {
        category: "Quality Assessment & Test Strategy",
        description: "Establish the testing foundations required to support reliable software delivery and long-term quality objectives.",
        items: [
          "Quality maturity assessment",
          "Test strategy development",
          "Risk-based testing plans",
          "Quality governance frameworks",
        ],
      },
      {
        category: "Functional & User Acceptance Testing",
        description: "Validate business requirements, workflows, and user experiences before production deployment.",
        items: [
          "Functional testing",
          "Regression testing",
          "User acceptance testing",
          "Cross-platform validation",
        ],
      },
      {
        category: "Test Automation Engineering",
        description: "Implement automated testing frameworks that improve coverage, consistency, and delivery speed.",
        items: [
          "Automation framework development",
          "API test automation",
          "UI automation testing",
          "Continuous testing integration",
        ],
      },
      {
        category: "Performance & Reliability Validation",
        description: "Ensure systems can operate efficiently under real-world conditions and growing demand.",
        items: [
          "Load testing",
          "Stress testing",
          "Scalability validation",
          "Performance benchmarking",
        ],
      },
      {
        category: "Security & Compliance Testing",
        description: "Identify vulnerabilities and validate security controls across applications and platforms.",
        items: [
          "Vulnerability assessments",
          "Security testing",
          "Authentication validation",
          "Compliance readiness reviews",
        ],
      },
      // {
      //   category: "Continuous Quality Intelligence",
      //   description: "Monitor quality metrics, release performance, and testing effectiveness to support continuous improvement.",
      //   items: [
      //     "Quality dashboards",
      //     "Defect trend analysis",
      //     "Release readiness reporting",
      //     "Process optimization recommendations",
      //   ],
      // },
    ],
    painPoints: [
      "Are you shipping fast but skipping critical QA steps?",
      "Losing users due to bugs, crashes, or inconsistencies?",
      "Lacking visibility into what\u2019s actually tested (and what\u2019s not)?",
      "Struggling with flaky automation or slow manual testing cycles?",
      "Not sure how to scale QA as your product grows?",
    ],
    whyTitle: "Why Businesses Choose Our Quality Engineering Team",
    whyChoose: [
      { title: "Dedicated Quality Engineering Expertise", description: "Structured QA frameworks, risk-based testing, and quality governance for reliable software delivery." },
      { title: "Strong Automation Testing Capabilities", description: "Selenium, Cypress, Appium, and API automation frameworks that improve coverage and delivery speed." },
      { title: "Risk-Based Testing Methodologies", description: "We prioritize testing efforts based on business impact, user exposure, and technical complexity." },
      { title: "Performance & Security Validation Experience", description: "Load testing, security assessments, and compliance validation for production-ready applications." },
      { title: "Integration with Agile & DevOps Workflows", description: "Continuous testing, CI/CD integration, and quality gates embedded throughout delivery cycles." },
      { title: "Focus on Release Confidence & Product Reliability", description: "We help organizations ship faster with fewer defects and higher user satisfaction." },
    ],
    whyTagline: "We don't just test software. We build quality engineering frameworks that reduce risk, improve release confidence, and help organizations deliver reliable digital products at scale.",
    industries: [
      { name: "SaaS & Startups", description: "Continuous delivery with zero tolerance for downtime" },
      { name: "Fintech & Banking", description: "Security-first testing to ensure trust and compliance" },
      { name: "Healthcare & EdTech", description: "High stakes, high standards—QA that protects users" },
      { name: "Ecommerce & Retail", description: "Seamless, bug-free shopping experiences across all platforms" },
      { name: "Enterprise IT", description: "Scalable QA pipelines integrated into complex ecosystems" },
      { name: "Logistics & Supply Chain", description: "Mission-critical system validation and reliability testing" },
      { name: "Media & Entertainment", description: "Cross-platform content delivery and playback validation" },
      { name: "Government & Public Sector", description: "Compliance-focused testing and accessibility validation" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We provide software quality assurance services across a wide range of industries:",
    processHeading: "Four Checkpoints. Zero Compromises.",
    processSteps: [
      {
        number: "01",
        title: "Quality Assessment & Risk Analysis",
        duration: "Week 1–2",
        description: "We evaluate applications, delivery processes, and business requirements to identify quality risks, testing priorities, and validation requirements.",
      },
      {
        number: "02",
        title: "Test Architecture & Coverage Planning",
        duration: "Week 2–3",
        description: "We design testing strategies, automation frameworks, validation criteria, and quality controls aligned with product objectives.",
      },
      {
        number: "03",
        title: "Validation & Continuous Testing",
        duration: "Week 3–10",
        description: "Our teams execute manual and automated testing activities across functional, performance, integration, and security domains to ensure release readiness.",
      },
      {
        number: "04",
        title: "Release Assurance & Quality Optimization",
        duration: "Week 10–12",
        description: "We provide quality reporting, release recommendations, performance insights, and continuous improvement initiatives that strengthen future delivery cycles.",
      },
    ],
    ctaHeading: "Let\u2019s Build Bulletproof Software \u2014 No Hiccups, No Surprises",
    ctaDescription: "Quality is what users remember. We help you ship confidently, reduce churn, and build trust, release after release.",
    ctaButton: "Talk to Our Experts",
  },
  "project-management": {
    title: "Project Management Services",
    subtitle: "The Ultimate End-to-End Project Management System",
    description: "We streamline project planning, stakeholder alignment, and delivery oversight to keep projects on track and teams focused.",
    painIntro: "What\u2019s Holding Your Projects Back?",
    offeringsTitle: "Delivery Governance & Execution Management Capabilities",
    offeringsDescription: "A structured delivery framework focused on planning, coordination, visibility, accountability, and continuous improvement across projects, teams, and business initiatives.",


    offerings: [
      {
        category: "Project Discovery & Delivery Assessment",
        description: "Establish the operational and organizational foundations required for successful project execution.",
        items: [
          "Stakeholder alignment workshops",
          "Project health assessments",
          "Requirement and scope analysis",
          "Delivery readiness evaluation",
        ],
      },
      {
        category: "Planning, Roadmaps & Resource Coordination",
        description: "Create structured plans that align business objectives, timelines, and delivery capacity.",
        items: [
          "Project roadmap development",
          "Resource planning",
          "Milestone definition",
          "Capacity forecasting",
        ],
      },
      {
        category: "Agile Delivery Management",
        description: "Coordinate teams, priorities, and execution activities to ensure consistent progress and delivery momentum.",
        items: [
          "Sprint planning & facilitation",
          "Backlog management",
          "Team coordination",
          "Delivery tracking",
        ],
      },
      {
        category: "Risk, Dependency & Change Control",
        description: "Identify and manage factors that impact delivery timelines, budgets, and outcomes.",
        items: [
          "Risk management frameworks",
          "Dependency tracking",
          "Change request management",
          "Issue escalation processes",
        ],
      },
      {
        category: "Stakeholder Governance & Reporting",
        description: "Maintain transparency and alignment through structured communication and performance reporting.",
        items: [
          "Executive reporting dashboards",
          "Stakeholder communications",
          "Status reporting systems",
          "KPI tracking frameworks",
        ],
      },
      // {
      //   category: "Delivery Optimization & Process Improvement",
      //   description: "Continuously improve delivery performance through operational analysis and workflow optimization.",
      //   items: [
      //     "Process assessments",
      //     "Delivery performance reviews",
      //     "Workflow optimization",
      //     "Continuous improvement initiatives",
      //   ],
      // },
    ],
    painPoints: [
      "Are your teams always busy but nothing ever seems to get done?",
      "Do deadlines keep slipping, without clear reasons why?",
      "Is everyone on a different page or using different tools?",
      "Are you unsure what\u2019s really happening inside your projects?",
      "Do you feel like there\u2019s no structure, only chaos?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "Proven Project & Delivery Management Expertise", description: "Structured governance, clear accountability, and predictable execution for complex initiatives." },
      { title: "Strong Governance & Reporting Frameworks", description: "Executive dashboards, status reporting, stakeholder communication, and KPI tracking built in." },
      { title: "Agile & Hybrid Delivery Methodologies", description: "Scrum, Kanban, Waterfall, or hybrid approaches tailored to your team and project requirements." },
      { title: "Risk & Dependency Management Capabilities", description: "Proactive identification, mitigation strategies, and escalation processes for delivery risks." },
      { title: "Cross-Functional Stakeholder Coordination", description: "Alignment across product, engineering, design, marketing, and executive leadership." },
      { title: "Focus on Execution, Accountability & Outcomes", description: "We build delivery systems that improve visibility, strengthen execution, and achieve strategic objectives." },
    ],
    whyTagline: "We don't just manage projects. We build delivery systems that improve visibility, strengthen execution, and enable organizations to consistently achieve strategic objectives.",
    industries: [
      { name: "Technology & SaaS", description: "Bring clarity and structure to fast-paced development cycles" },
      { name: "Healthcare & Fintech", description: "Ensure compliance, coordination, and delivery precision" },
      { name: "Ecommerce & Retail", description: "Launch campaigns, manage tech upgrades, and streamline ops" },
      { name: "Enterprise & B2B Services", description: "Manage internal IT, product delivery, or customer implementations without silos" },
      { name: "Manufacturing & Industrial", description: "Coordinate complex initiatives across distributed teams" },
      { name: "Education & E-Learning", description: "Platform launches, content delivery, and stakeholder alignment" },
      { name: "Logistics & Transportation", description: "Multi-team coordination and operational initiative management" },
      { name: "Professional Services", description: "Client delivery, resource management, and project governance" },
    ],
    industryTitle: "Industries We Serve",
    industryDescription: "We support organizations managing complex initiatives across multiple sectors:",
    processHeading: "From Project Initiation to Operational Excellence Through Four Delivery Phases",
    processSteps: [
      {
        number: "01",
        title: "Delivery Assessment & Strategic Alignment",
        duration: "Week 1–2",
        description: "We evaluate business objectives, project requirements, stakeholder expectations, and operational constraints to establish a clear delivery foundation.",
      },
      {
        number: "02",
        title: "Planning & Governance Framework Design",
        duration: "Week 2–3",
        description: "We create delivery structures, project roadmaps, communication models, reporting frameworks, and accountability mechanisms that support successful execution.",
      },
      {
        number: "03",
        title: "Delivery Oversight & Team Coordination",
        duration: "Ongoing",
        description: "Our project managers coordinate stakeholders, teams, priorities, timelines, and risks to maintain momentum and ensure delivery objectives remain on track.",
      },
      {
        number: "04",
        title: "Performance Optimization & Continuous Improvement",
        duration: "Ongoing",
        description: "We analyze delivery metrics, operational workflows, and project outcomes to improve efficiency, predictability, and organizational maturity.",
      },
    ],
    ctaHeading: "Let\u2019s Build Projects That Stay on Track and Deliver Results",
    ctaDescription: "From kickoff to launch, we make sure your project hits every milestone without the stress or chaos.",
    ctaButton: "Talk to a Project Specialist",
  },
  "staff-augmentation": {
    title: "Staff Augmentation Services",
    subtitle: "Rapidly Deployed IT Teams for On-Demand Delivery",
    description: "Staff augmentation for extending IT teams with vetted specialists and dedicated squads to increase delivery capacity, close skill gaps, and accelerate execution. Resources are seamlessly integrated into your ecosystem, aligned with your workflows, technology stack, and delivery needs for consistent output.",
    painIntro: "What\u2019s Slowing Down Your Growth?",
    offeringsTitle: "Workforce Scaling & Delivery Enablement Capabilities",
    offeringsDescription: "A structured talent engagement framework designed to help organizations increase delivery capacity, reduce hiring friction, and maintain operational momentum across critical initiatives.",
    offerings: [
      {
        category: "Workforce Planning & Capability Assessment",
        description: "Identify skill gaps, project requirements, and team capacity needs to determine the optimal augmentation strategy.",
        items: [
          "Resource requirement analysis",
          "Skills gap assessment",
          "Team capacity planning",
          "Engagement model recommendations",
        ],
      },
      {
        category: "Talent Sourcing & Technical Vetting",
        description: "Source and evaluate professionals based on technical expertise, industry experience, and organizational fit.",
        items: [
          "Technical screening",
          "Skills assessments",
          "Interview coordination",
          "Candidate shortlisting",
        ],
      },
      {
        category: "Team Integration & Operational Alignment",
        description: "Ensure augmented resources integrate effectively into existing teams, workflows, and delivery environments.",
        items: [
          "Onboarding support",
          "Workflow integration",
          "Tooling and access coordination",
          "Team alignment workshops",
        ],
      },
      {
        category: "Delivery Support & Performance Management",
        description: "Maintain productivity, accountability, and delivery quality throughout the engagement lifecycle.",
        items: [
          "Performance monitoring",
          "Resource management",
          "Delivery oversight",
          "Engagement reviews",
        ],
      },
      {
        category: "Flexible Team Scaling",
        description: "Adapt team structures and resource allocation as project demands evolve.",
        items: [
          "Team expansion support",
          "Resource reallocation",
          "Multi-disciplinary team formation",
          "Long-term scaling strategies",
        ],
      },
      // {
      //   category: "Knowledge Retention & Transition Planning",
      //   description: "Protect organizational continuity through structured documentation and transition processes.",
      //   items: [
      //     "Knowledge transfer planning",
      //     "Documentation frameworks",
      //     "Resource transition support",
      //     "Operational continuity planning",
      //   ],
      // },
    ],
    painPoints: [
      "Are projects delayed because you lack the right expertise?",
      "Is recruitment taking longer than your deadlines allow?",
      "Are your teams stretched thin with increasing workload?",
      "Do you need specialized talent without long-term commitments?",
      "Are hiring costs limiting your ability to scale?",
    ],
    whyTitle: "Why Businesses Partner With Us",
    whyChoose: [
      { title: "Access to Pre-Vetted Technical Professionals", description: "Rigorous technical screening, skills assessment, and behavioral evaluation for every candidate." },
      { title: "Rapid Onboarding & Team Integration", description: "Seamless alignment with your tools, workflows, communication platforms, and delivery processes." },
      { title: "Flexible Scaling Based on Delivery Demands", description: "Expand or reduce team size as project requirements evolve, without long-term commitments." },
      { title: "Alignment with Your Tools, Workflows & Processes", description: "Jira, GitHub, Slack, Zoom, AWS—whatever your stack, our teams integrate immediately." },
      { title: "Dedicated Resources Focused on Your Objectives", description: "100% attention on your product, roadmap, and business goals—no divided priorities." },
      { title: "Teams That Operate Within Your Preferred Time Zone", description: "Working hours, communication cadences, and delivery workflows aligned to your schedule." },
    ],
    whyTagline: "We don't just provide resources. We embed high-performing professionals who strengthen delivery capabilities, accelerate execution, and help organizations scale with confidence.",
    industries: [
      { name: "Technology & SaaS", description: "Scale engineering without slowing product momentum" },
      { name: "Healthcare & Fintech", description: "Add compliant, security-aware specialists" },
      { name: "Ecommerce & Retail", description: "Accelerate releases and optimize digital platforms" },
      { name: "Enterprise & B2B Services", description: "Extend technical capacity without internal strain" },
      { name: "Manufacturing & Industrial", description: "Modernize legacy systems and implement new technologies" },
      { name: "Logistics & Supply Chain", description: "Build operational tools and tracking systems" },
      { name: "Education & E-Learning", description: "Scale platform development and content delivery teams" },
      { name: "Media & Entertainment", description: "Streaming platform development and content management" },
    ],
    industryTitle: "Talent Areas We Support",
    industryDescription: "We provide specialized professionals across multiple disciplines and sectors",
    processHeading: "Vetted Talent. Zero Ramp-Up.",
    processSteps: [
      {
        number: "01",
        title: "Workforce Assessment & Requirement Definition",
        duration: "Week 1",
        description: "We evaluate project goals, technical requirements, team structure, and delivery objectives to determine the right talent strategy.",
      },
      {
        number: "02",
        title: "Talent Acquisition & Technical Validation",
        duration: "Week 1–3",
        description: "We source, screen, and validate candidates based on technical capabilities, industry experience, and alignment with your organizational needs.",
      },
      {
        number: "03",
        title: "Team Integration & Delivery Enablement",
        duration: "Week 2–4",
        description: "Selected professionals are embedded into your environment with clear onboarding, communication structures, and operational alignment.",
      },
      {
        number: "04",
        title: "Performance Management & Workforce Scaling",
        duration: "Ongoing",
        description: "We continuously monitor engagement success, optimize team performance, and provide additional resources as delivery demands evolve.",
      },
    ],
    ctaHeading: "Let\u2019s Build Teams That Deliver Results",
    ctaDescription: "Whether you need one expert or a fully extended team, we help you scale with speed, structure, and confidence.",
    ctaButton: "Talk to a Staffing Specialist",
  },
};

/* ───────── Meta map (timeline / team / deliverables / ideal-for) ───────── */

interface ServiceMeta {
  category: string;
  timeline: string;
  teamSize: string;
  deliverables: string[];
  idealFor: string[];
  accent: string;
  icon: ReactNode;
}

const serviceMeta: Record<string, ServiceMeta> = {
  "mobile-application": {
    category: "Build",
    timeline: "8–14 weeks",
    teamSize: "1 Product Manager · 2–4 Engineers · 1 Designer",
    deliverables: [
      "Native & Cross-Platform Apps",
      "Backend Systems & APIs",
      "App Store & Play Store Launch",
      "Analytics & Performance Monitoring",
    ],
    idealFor: ["Digital Products", "Enterprise Mobility", "SaaS Platforms"],
    accent: "#1E88E5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" strokeWidth={2.2} />
      </svg>
    ),
  },

  "web-development": {
    category: "Build",
    timeline: "10–16 weeks",
    teamSize: "1 Product Manager · 2–5 Engineers · 1 Designer",
    deliverables: [
      "Custom Web Applications",
      "Backend Systems & APIs",
      "Cloud Infrastructure Deployment",
      "Analytics & Performance Monitoring",
    ],
    idealFor: ["SaaS Platforms", "Enterprise Portals", "Digital Products"],
    accent: "#0277BD",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
      </svg>
    ),
  },

  "ecommerce": {
    category: "Build",
    timeline: "8–16 weeks",
    teamSize: "1 Ecommerce Strategist · 2–4 Engineers · 1 Designer",
    deliverables: [
      "Ecommerce Platform Development",
      "Payment & Commerce Integrations",
      "Conversion Optimization Frameworks",
      "Analytics & Growth Infrastructure",
    ],
    idealFor: ["Retail Brands", "B2B Commerce", "Digital Marketplaces"],
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },

  "ui-ux-design": {
    category: "Design",
    timeline: "4–10 weeks",
    teamSize: "1 UX Strategist · 1 UI/UX Designer · 1 Product Consultant",
    deliverables: [
      "User Research & Experience Strategy",
      "Wireframes & Interactive Prototypes",
      "Design Systems & UI Libraries",
      "Developer-Ready Design Handoff",
    ],
    idealFor: ["Digital Products", "SaaS Platforms", "Enterprise Applications"],
    accent: "#039BE5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },

  "machine-learning-ai": {
    category: "Scale",
    timeline: "8–20 weeks",
    teamSize: "1 AI Consultant · 1 Data Scientist · 2–4 AI Engineers",
    deliverables: [
      "AI Strategy & Opportunity Assessment",
      "Machine Learning Models & AI Workflows",
      "Data Pipelines & AI Infrastructure",
      "Model Monitoring & Continuous Optimization",
    ],
    idealFor: ["Business Automation", "Predictive Analytics", "AI-Powered Products"],
    accent: "#00ACC1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },

  "digital-marketing": {
    category: "Scale",
    timeline: "6–12 weeks",
    teamSize: "1 Growth Strategist · 1 Performance Marketer · 1 Content Specialist",
    deliverables: [
      "Multi-Channel Growth Strategy",
      "Campaign Execution & Optimization",
      "Performance Analytics & Attribution",
      "Lead Generation & Conversion Systems",
    ],
    idealFor: ["B2B Organizations", "B2C Organizations", "E-Commerce Brands"],
    accent: "#1565C0",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },

  "staff-augmentation": {
    category: "Operate",
    timeline: "1–4 weeks to onboard",
    teamSize: "Dedicated Specialists · Delivery Leads · Cross-Functional Teams",
    deliverables: [
      "Vetted Technical Talent",
      "Rapid Team Integration",
      "Flexible Scaling Models",
      "Delivery Continuity & Support",
    ],
    idealFor: ["Growing Engineering Teams", "Enterprise Transformation", "High-Demand Environments"],
    accent: "#01579B",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },

  "quality-assurance": {
    category: "Operate",
    timeline: "4–12 weeks",
    teamSize: "1 QA Lead · 2–4 QA Engineers · 1 Automation Engineer",
    deliverables: [
      "Test Strategy & Quality Frameworks",
      "Automated Testing Solutions",
      "Performance & Security Validation",
      "Continuous Quality Monitoring",
    ],
    idealFor: ["SaaS Platforms", "Enterprise Applications", "Digital Products"],
    accent: "#006064",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },

  "project-management": {
    category: "Operate",
    timeline: "Ongoing engagement",
    teamSize: "1 Project Manager · 1 Delivery Lead · Cross-Functional Stakeholders",
    deliverables: [
      "Project Governance Frameworks",
      "Delivery Planning & Roadmaps",
      "Performance Reporting Systems",
      "Risk & Dependency Management",
    ],
    idealFor: ["Growing Organizations", "Complex Digital Initiatives", "Multi-Team Environments"],
    accent: "#0097A7",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
};

const allServiceTitles: Record<string, { title: string; tagline: string }> = {
  "mobile-application": {
    title: "Mobile App Development",
    tagline: "Native & cross-platform apps people love using.",
  },
  "web-development": {
    title: "Web Development",
    tagline: "Fast, accessible, SEO-ready platforms.",
  },
  ecommerce: {
    title: "E-commerce Development",
    tagline: "Storefronts that convert and scale.",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Research-led design that converts.",
  },
  "machine-learning-ai": {
    title: "ML & AI Solutions",
    tagline: "Custom models, embedded into your stack.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Strategy and content built on data.",
  },
  "staff-augmentation": {
    title: "Staff Augmentation",
    tagline: "Senior engineers, embedded with your team.",
  },
  "quality-assurance": {
    title: "Quality Assurance",
    tagline: "Ship with confidence, not surprises.",
  },
  "project-management": {
    title: "Project Management",
    tagline: "Agile delivery without the chaos.",
  },
};

const relatedMap: Record<string, string[]> = {
  "mobile-application": ["web-development", "ui-ux-design", "machine-learning-ai"],
  "web-development": ["mobile-application", "ui-ux-design", "ecommerce"],
  ecommerce: ["web-development", "ui-ux-design", "digital-marketing"],
  "ui-ux-design": ["web-development", "mobile-application", "ecommerce"],
  "machine-learning-ai": ["web-development", "mobile-application", "digital-marketing"],
  "digital-marketing": ["ui-ux-design", "ecommerce", "web-development"],
  "staff-augmentation": ["project-management", "quality-assurance", "web-development"],
  "quality-assurance": ["web-development", "mobile-application", "project-management"],
  "project-management": ["staff-augmentation", "quality-assurance", "web-development"],
};

//  Add this before your component definition
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



/* ───────── Component ───────── */

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const meta = serviceMeta[slug];
  const related = (relatedMap[slug] ?? []).slice(0, 3);

  const [activeOffering, setActiveOffering] = useState(0);

  // const { firstHalf, secondHalf } = splitTitle(service.title);

  if (!service) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] bg-section-dark flex flex-col items-center justify-center relative overflow-hidden">

        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="relative max-w-xl mx-auto px-6 text-center">
          <div className="text-7xl font-bold gradient-text">404</div>
          <h1 className="mt-4 h-section text-white">Service Not Found</h1>
          <p className="mt-4 body-lead text-gray-400">
            The service you&apos;re looking for doesn&apos;t exist — but tell us
            what you need and we&apos;ll figure it out.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neon-blue rounded-full text-white font-semibold text-sm hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
            >
              Back to Services
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
  const category = meta?.category ?? "Service";

  return (
    <>
      {/* ───────── Hero (split layout with spec card) ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                {/* Category + icon row */}
                <div className="flex items-center gap-3">
                  {meta && (
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border flex items-center gap-2"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        backgroundColor: `${accent}0A`,
                      }}
                    >
                      {meta.icon}
                      {category} · Service
                    </span>
                  )}
                </div>

                <h1 className="mt-6 h-display text-white">{service.title}</h1>
                <p className="mt-6 body-lead text-gray-400">
                  {service.description.split("\n").map((part, index, arr) => (
                    <span key={index}>
                      {part}
                      {index < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold tracking-wide text-sm transition-all duration-300"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80`,
                      }}
                    >
                      Book a discovery call
                    </Link>
                  </motion.span>
                </div>

                {/* Meta row */}
                <div className="mt-10">
                  <div className="flex items-start gap-4 pb-5 border-b border-white/[0.08]">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={accent}
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                        Timeline
                      </p>
                      <p className="mt-1 text-white/90 text-base font-semibold">
                        {meta.timeline}
                      </p>
                    </div>
                    {/* Team */}
                    <div className="flex items-start gap-4 border-white/[0.08]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${accent}15` }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={accent}
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">
                          Team Size
                        </p>
                        <p className="mt-1 text-white/90 text-sm font-semibold ">
                          {meta.teamSize}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            <AnimatedSection direction="right" className="lg:col-span-5 mt-6">
              <div
                className="relative w-full overflow-hidden rounded-2xl h-[450px] min-h-[300px]"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
                }}
              >
                <ServiceArt slug={slug} />
              </div>
            </AnimatedSection>
          </div>

          {/* Deliverables — FULL WIDTH */}
          <div className="mt-14 w-full pb-5 border-b border-white/[0.08]">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {meta.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: accent }}
                  >
                    <svg
                      className="h-3 w-3 text-[#ffffff]"
                      viewBox="0 0 24 24"
                      fill="none"
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
                  <span className="text-sm leading-relaxed text-gray-300 force-gray-text">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ───────── Serivce banner ───────── */}
      <section className="border-y bg-service-banner">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 lg:px-6 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">

            {/* Card 1 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Award className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  Top 1%
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Senior Engineers
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Target className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  9 / 10
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  On-Time Delivery
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Zap className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  48h
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Discovery → SOW
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="stat-card flex items-center gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5">
              <div className="icon-container flex h-12 w-12 items-center justify-center rounded-xl">
                <Users className="h-6 w-6 gradient-text-fixed" />
              </div>

              <div className="flex flex-col">
                <span className="banner-title text-3xl font-bold leading-none">
                  96%
                </span>

                <span className="banner-label mt-1 text-[11px] font-medium uppercase tracking-[0.25em]">
                  Client Retention
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ───────── What's included (interactive offerings) ───────── */}
      <section className="relative layout-section bg-light-accent overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 dotted-grid opacity-[0.04] pointer-events-none" />

        <motion.div
          className="absolute -top-32 right-0 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ backgroundColor: accent }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-neon-blue/[0.05] rounded-full blur-[120px] pointer-events-none"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    What's Include
                  </span>
                </div>
              </div>

              <h2 className="mt-2 h-section max-w-2xl text-balance">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.offeringsTitle);
                  return (
                    <>
                      <span className="text-deep-blue">{firstHalf}</span>{" "}
                      <span className="gradient-text-dark">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <div className="lg:pl-8">
                <p className="body-base text-deep-blue/60 max-w-md">
                  {service.offeringsDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-5">
              {/* Mobile / Tablet Pills */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-hide">
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;
                  return (
                    <button
                      key={offering.category}
                      onClick={() => setActiveOffering(i)}
                      className={`
                  shrink-0 px-4 py-2.5 rounded-full
                  text-sm font-semibold
                  transition-all duration-300
                  border
                  ${isActive
                          ? "text-white border-transparent"
                          : "text-deep-blue/70 bg-white/70 border-deep-blue/10"
                        }
                `}
                      style={{
                        backgroundColor: isActive ? accent : undefined,
                        boxShadow: isActive ? `0 8px 22px -8px ${accent}90` : "none"
                      }}
                    >
                      {offering.category}
                    </button>
                  );
                })}
              </div>

              {/* Desktop Vertical Tabs */}
              <div className="hidden lg:flex flex-col gap-3">
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;
                  return (
                    <motion.button
                      key={offering.category}
                      onMouseEnter={() => setActiveOffering(i)}
                      className={`
                  group relative w-full text-left
                  flex items-center gap-3 xl:gap-4
                  px-4 xl:px-5 py-3 xl:py-4
                  rounded-2xl overflow-hidden
                  transition-all duration-300 border
                  ${isActive
                          ? "bg-[#0a1628] border-[#0a1628] shadow-lg"
                          : `
                      bg-white/65
                      border-gray-200
                      lg:hover:bg-[#0a1628]
                      lg:hover:border-[#0a1628]
                      lg:hover:shadow-lg
                    `
                        }
                `}
                      style={{ backdropFilter: "blur(8px)" }}
                      whileHover={{ x: 4 }}
                    >
                      {/* Accent Bar */}
                      <span
                        className="
                    absolute left-0 top-1/2
                    -translate-y-1/2
                    w-[3px]
                    rounded-full
                    transition-all duration-500
                  "
                        style={{
                          height: isActive ? "60%" : "0%",
                          backgroundColor: accent
                        }}
                      />

                      {/* Number */}
                      <div
                        className={`
                    relative w-10 h-10 xl:w-11 xl:h-11
                    rounded-xl
                    flex items-center justify-center
                    text-[12px]
                    font-bold
                    shrink-0
                    ${isActive
                            ? "text-white"
                            : `
                        text-gray-700
                        lg:group-hover:text-white
                      `
                          }
                  `}
                        style={{
                          backgroundColor: isActive ? accent : `${accent}15`
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Text */}
                      <div className="relative flex-1 min-w-0">
                        <p
                          className={`
                      font-bold text-sm xl:text-base
                      tracking-tight
                      transition-colors duration-300
                      ${isActive
                              ? "text-white"
                              : `
                          text-gray-900
                          lg:group-hover:text-white
                        `
                            }
                    `}
                        >
                          {offering.category}
                        </p>
                        <p
                          className={`
                      text-xs mt-0.5 truncate
                      transition-colors duration-300
                      ${isActive
                              ? "text-white/70"
                              : `
                          text-gray-500
                          lg:group-hover:text-white/70
                        `
                            }
                    `}
                        >
                          {offering.items.length} deliverables included
                        </p>
                      </div>

                      {/* Arrow */}
                      <svg
                        className={`
                    relative w-4 h-4 shrink-0
                    transition-all duration-300
                    ${isActive
                            ? "opacity-100 translate-x-0 text-white"
                            : `
                        opacity-0 -translate-x-2
                        lg:group-hover:opacity-100
                        lg:group-hover:translate-x-0
                        text-gray-400
                        lg:group-hover:text-white
                      `
                          }
                  `}
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

                      {/* Active Border */}
                      {isActive && (
                        <div
                          className="
                      pointer-events-none
                      absolute inset-0
                      rounded-2xl border
                    "
                          style={{ borderColor: `${accent}50` }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <div
                  className="
              relative
              rounded-2xl
              p-5 sm:p-6 lg:p-8
              shadow-2xl
              shadow-black/40
              overflow-hidden
            "
                  style={{
                    backgroundColor: "#0a1628",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  {/* Border */}
                  <div
                    className="
                pointer-events-none
                absolute inset-0
                rounded-2xl border
              "
                    style={{ borderColor: `${accent}50` }}
                  />

                  <div className="relative">
                    {/* Badge */}
                    <div
                      className="
                  inline-flex items-center gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  px-3 py-1
                  rounded-full
                "
                      style={{
                        color: accent,
                        backgroundColor: `${accent}15`
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                      />
                      Capabilities Overview
                    </div>

                    <motion.div
                      key={activeOffering}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Heading */}
                      <h3
                        className="
                    mt-5
                    text-xl
                    sm:text-2xl
                    lg:text-[1.875rem]
                    font-bold
                    tracking-tight
                    leading-[1.15]
                  "
                        style={{ color: "#ffffff" }}
                      >
                        {service.offerings[activeOffering].category}
                      </h3>

                      {/* Description */}
                      <p
                        className="mt-3 leading-relaxed text-sm sm:text-[15px]"
                        style={{ color: "rgb(209 213 219)" }}
                      >
                        {service.offerings[activeOffering].description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.offerings[activeOffering].items.map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04 }}
                            className="group relative flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/5 lg:hover:bg-white/10 lg:hover:border-white/[0.15] transition-all duration-300 p-4"
                          >
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: `${accent}20` }}
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={accent}
                                strokeWidth={2.4}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <div>
                              <p
                                className="
                            text-sm
                            font-medium
                            text-white/80
                            leading-relaxed
                            lg:group-hover:text-white
                            transition-colors duration-300
                          "
                              >
                                {item}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      {/* ───────── How we work (4-step) ───────── */}
      <section className="layout-section  bg-[#0a1628] permanent-dark relative overflow-hidden">

        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"
          style={{ backgroundColor: `${accent}0F` }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accent }} />
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold gradient-text-fixed">
                  HOW WE WORK
                </p>
              </div>
              <h2 className="mt-3 h-section text-white">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.processHeading);
                  return (
                    <>
                      <span className="text-white">{firstHalf}</span>{' '}
                      <span className="gradient-text-fixed">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="body-base mb-12 text-white/70 max-w-md lg:ml-auto">
                Transparent timelines, weekly demos, fixed quotes after
                discovery. No surprises, no scope creep.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Connecting Line */}
            <div
              aria-hidden
              className="absolute left-7 right-7 top-7 bg-white/10 hidden h-px md:block"

            />

            <div className={`grid gap-8 md:grid-cols-${service.processSteps.length}`}>
              {service.processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative group"
                >
                  {/* Node */}
                  <div className="relative mx-auto h-14 w-14">
                    {/* Rotating ring */}
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, transparent 0%, ${accent}80 50%, transparent 100%)`,
                        mask: "radial-gradient(circle, transparent 60%, black 62%)",
                        WebkitMask: "radial-gradient(circle, transparent 60%, black 62%)",
                      }}
                    />

                    {/* Center circle */}
                    <div
                      className="absolute inset-1 grid place-items-center rounded-full bg-white text-gray-900 transition-all duration-500 group-hover:scale-105"
                      style={{
                        boxShadow: `0 0 0 4px ${accent}20, 0 10px 30px ${accent}10`,
                      }}
                    >
                      <span className="text-base font-bold">{i + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-5 text-center">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                      Phase {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 max-w-xs mx-auto">
                      {step.description}
                    </p>

                    {/* Duration badge */}
                    <div className="mt-4 inline-block">
                      <span
                        className="text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/10 text-white/70"
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Why us for THIS service ───────── */}
      <section className="layout-section  bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                    WHY US
                  </span>
                </div>
              </div>
              <h2 className="mt-3 h-section text-deep-blue">
                {(() => {
                  const { firstHalf, secondHalf } = splitTitle(service.whyTitle);
                  return (
                    <>
                      <span style={{ color: '#0a1628' }}>{firstHalf}</span>{' '}
                      <span className="gradient-text-dark">{secondHalf}</span>
                    </>
                  );
                })()}
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                {service.whyTagline}
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whyChoose.slice(0, 6).map((item, i) => {
              const itemAccent = ACCENTS[i % ACCENTS.length];
              const numLabel = String(i + 1).padStart(2, "0");

              return (
                <div
                  key={item.title}
                  className="group relative rounded-2xl bg-white border border-deep-blue/[0.07] p-6 transition-all duration-500 hover:shadow-xl hover:shadow-deep-blue/5 hover:border-deep-blue/[0.12] overflow-hidden min-h-[210px]"
                >
                  {/* Soft number background */}
                  <div
                    className="absolute top-3 right-4 text-[68px] font-bold leading-none select-none pointer-events-none"
                    style={{ color: `${itemAccent}10` }}
                  >
                    {numLabel}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">

                    {/* Accent line (left) */}
                    <div
                      className="mb-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                      style={{ backgroundColor: itemAccent }}
                    />

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-tight tracking-tight text-deep-blue mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-deep-blue/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
          

      {/* ───────── Final CTA ───────── */}

      <CTABanner
        eyebrow="Let's get started"
        heading={
          <>
            {(() => {
              const { firstHalf, secondHalf } = splitTitle(service.ctaHeading);
              return (
                <>
                  <span className="white">{firstHalf}</span>{' '}
                  <span className="gradient-text-fixed" >{secondHalf}</span>
                </>
              );
            })()}
          </>
        }
        description={service.ctaDescription}
        primaryLabel={service.ctaButton}
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
