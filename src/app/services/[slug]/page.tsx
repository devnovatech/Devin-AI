"use client";

import { useState, ReactNode } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

const ACCENTS = ["#1E88E5", "#0277BD", "#0288D1", "#039BE5", "#00ACC1", "#1565C0"];

interface ServiceOffering {
  category: string;
  items: string[];
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
  painPoints: string[];
  painIntro: string;
  whyChoose: WhyChooseItem[];
  whyTitle: string;
  industries: IndustryItem[];
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
}

const servicesData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    subtitle: "Drive Growth with Strategy, Content, and Measurable Impact.",
    description:
      "In today\u2019s digital-first world, visibility isn\u2019t enough - you need strategy, storytelling, and data-driven execution. At Dev Inception, we help you connect with the right audience at the right time, using tailored marketing strategies that combine SEO, branding, analytics, Search Engine Marketing (SEM) and outreach.",
    painIntro: "What\u2019s Holding Your Marketing Back?",
    offerings: [
      {
        category: "Search Engine Optimization (SEO)",
        items: [
          "On-page, technical, and off-page SEO",
          "Keyword strategy aligned with business goals",
          "Site performance optimization (speed, structure, mobile)",
          "Content and metadata enhancements",
          "Integration with Google Analytics, Semrush, Yoast, etc.",
          "AEO (Answer Engine Optimization) to appear in featured snippets, voice search, and AI-generated results",
        ],
      },
      {
        category: "Brand Strategy & Identity",
        items: [
          "Brand audits & positioning strategy",
          "Visual identity systems (logos, palettes, typography)",
          "Tone of voice guidelines & messaging frameworks",
          "Brand storytelling & narrative alignment",
          "Competitive differentiation analysis",
        ],
      },
      {
        category: "Analytics & Insights",
        items: [
          "Marketing dashboards & KPI setup",
          "Campaign tracking & attribution modeling",
          "Funnel analysis & audience segmentation",
          "GA4, Google Tag Manager, Hubspot, Kochava integration",
          "Actionable reporting focused on outcomes",
        ],
      },
      {
        category: "Content Marketing",
        items: [
          "Blog strategy & SEO-focused content",
          "Case studies, whitepapers, and gated content",
          "Social media content planning (LinkedIn, X, Insta)",
          "Visual storytelling & short-form content",
          "Email marketing copy & drip campaigns",
        ],
      },
      {
        category: "Outbound Marketing",
        items: [
          "LinkedIn lead generation campaigns",
          "Email marketing with smart personalization",
          "Paid outreach strategy (Google ads, Meta ads, LinkedIn ads)",
          "Outreach automation & CRM integrations",
          "B2B targeting & retargeting workflows",
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
    whyTitle: "Why Do Businesses Choose Dev Inception for Digital Marketing?",
    whyChoose: [
      { title: "Strategy-First Approach", description: "We don\u2019t guess, we plan. Every tactic supports your growth goals." },
      { title: "Multi-Channel Expertise", description: "From SEO to outbound, we execute across the full funnel." },
      { title: "Performance-Driven", description: "Everything we do is tracked, measured, and optimized for ROI." },
      { title: "Custom-Built Solutions", description: "No templates. Every strategy is tailored to your industry, brand, and audience." },
      { title: "Integrated Teams", description: "Our designers, developers, analysts, and writers collaborate as one." },
    ],
    industries: [
      { name: "SaaS & Startups", description: "Get seen, generate leads, and build brand credibility" },
      { name: "Ecommerce & Retail", description: "Drive organic traffic, boost conversions, reduce CAC" },
      { name: "Healthcare & EdTech", description: "Build trust, educate audiences, and remain compliant" },
      { name: "B2B Services", description: "Engage decision-makers and shorten the sales cycle" },
    ],
    ctaHeading: "Let\u2019s Make Marketing Work for You",
    ctaDescription: "We don\u2019t believe in vanity metrics. We care about real impact - visibility, engagement, leads, and growth.",
    ctaButton: "Book a Free Strategy Call",
  },
  "mobile-application": {
    title: "Mobile Application Development",
    subtitle: "Crafted for humans. Engineered for scale.",
    description:
      "Whether you\u2019re launching a new idea or extending your business into the mobile space, we build high-performing mobile apps that deliver real-world impact. From native iOS and Android to cross-platform solutions in Flutter or React Native, we deliver seamless digital products - from first sketch to post-launch support.",
    painIntro: "What\u2019s Holding You Back?",
    offerings: [
      {
        category: "Strategy & Consulting",
        items: ["Product discovery workshops", "Market research & competitor analysis", "MVP planning & feature prioritization", "Technology stack consulting"],
      },
      {
        category: "UI/UX Design",
        items: ["Wireframing & prototyping", "User journey mapping", "Mobile-first, accessible design", "Motion design & microinteractions"],
      },
      {
        category: "Cross-Platform App Development",
        items: ["Flutter", "React Native", "Xamarin / Ionic", "Single codebase, multi-platform deployment"],
      },
      {
        category: "Backend & API Development",
        items: ["Scalable backend systems", "RESTful & GraphQL APIs", "Authentication & user management", "Cloud services (AWS, Firebase, etc.)"],
      },
      {
        category: "QA & Testing",
        items: ["Functional testing", "Usability testing", "Performance & load testing", "Device/browser compatibility testing"],
      },
      {
        category: "App Analytics & Optimization",
        items: ["In-app analytics integration", "User behavior tracking", "A/B testing", "Data-driven feature improvements"],
      },
      // {
      //   category: "Maintenance & Support",
      //   items: ["Bug fixes & security patches", "OS/version upgrades", "Feature enhancements", "SLA-based ongoing support"],
      // },
      // {
      //   category: "Growth & Monetization",
      //   items: ["App Store Optimization (ASO)", "In-app purchase strategy", "Ad integration"],
      // },
    ],
    painPoints: [
      "Not sure whether to go native or cross-platform?",
      "Have an app idea but don\u2019t know where to start, or who to trust?",
      "Struggling with crashes, bugs, or poor app store reviews?",
      "Your current app doesn\u2019t scale with your business needs?",
      "Tired of missing deadlines and unclear development roadmaps?",
    ],
    whyTitle: "Why Businesses Choose Dev Inception",
    whyChoose: [
      { title: "User-Centered by Design", description: "We craft mobile experiences that feel seamless, intuitive, and truly useful because your users come first." },
      { title: "Agile, Without the Chaos", description: "We move fast with purpose. Expect rapid development cycles, rock-solid code, and smooth releases." },
      { title: "Product-Driven Collaboration", description: "We\u2019re not just coders, we\u2019re strategic partners invested in your app\u2019s long-term growth." },
      { title: "Punctual, Predictable Delivery", description: "Weekly sprints, transparent timelines, and proactive communication." },
      { title: "Elite App Teams", description: "From UX to backend, our specialists work together to build robust, scalable mobile solutions." },
      { title: "Lean. Focused. High-Impact.", description: "We make every hour and dollar count, without compromising on performance or innovation." },
    ],
    industries: [
      { name: "Startups & Entrepreneurs", description: "MVPs, rapid prototypes, and scalable mobile platforms that grow with your product vision." },
      { name: "Healthcare & Wellness", description: "HIPAA-compliant apps with secure patient data handling, appointment systems, and telemedicine features." },
      { name: "Ecommerce & Retail", description: "Custom mobile shopping experiences, real-time inventory tracking, and secure in-app payments." },
      { name: "EdTech & eLearning", description: "Interactive mobile learning platforms, video streaming, progress tracking, and user gamification." },
      { name: "Logistics & On-Demand Services", description: "Real-time GPS tracking, order management, fleet monitoring, and mobile workforce enablement." },
      { name: "Fintech & Banking", description: "Secure, intuitive apps for transactions, budgeting, account management, and digital onboarding." },
    ],
    ctaHeading: "Turn Your App Idea Into Real-World Impact",
    ctaDescription: "Whether you\u2019re launching from scratch or scaling an existing product, we help you build mobile apps that users love\u2014and businesses grow from.",
    ctaButton: "Let\u2019s Build Something Powerful",
  },
  "web-development": {
    title: "Web Development Services",
    subtitle: "Build Fast, Scalable, and User-Centric Web Platforms",
    description:
      "Your website is more than just a digital presence - it\u2019s your brand, your product, your business. At Dev Inception, we specialize in custom web development that drives performance, user engagement, and business growth. Whether it\u2019s a complex web app or a high-converting marketing site, we build platforms that are secure, scalable, and strategically aligned to your goals.",
    painIntro: "What\u2019s Holding Your Website Back?",
    offerings: [
      {
        category: "Custom Web App Development",
        items: [
          "Full-stack development with modern frameworks (React, Angular, Vue, Next.js)",
          "API design, integration, and architecture",
          "Role-based access control and secure authentication systems",
          "Custom dashboards, portals, and internal tools",
          // "Progressive Web App (PWA) development",
        ],
      },
      {
        category: "CMS & Website Development",
        items: [
          "WordPress, Webflow, or headless CMS implementation",
          "Custom themes and plugin development",
          "Marketing websites, blogs, and landing pages",
          "Easy-to-manage admin panels for your team",
        ],
      },
      {
        category: "Ecommerce Development",
        items: [
          "Shopify, WooCommerce, and custom ecommerce platforms",
          "Secure payment gateway integration",
          "Inventory management, multi-vendor systems",
          "Speed optimization and mobile-first design",
        ],
      },
      {
        category: "Frontend Development",
        items: [
          "Pixel-perfect UI implementation from Figma or Adobe XD",
          "Responsive layouts for all screen sizes",
          "Optimized performance (lazy loading, code splitting)",
          "Accessibility (WCAG) compliance and semantic HTML",
        ],
      },
      {
        category: "Backend Development",
        items: [
          "Scalable backend with Node.js, Laravel, Django, and more",
          "Database architecture with MySQL, PostgreSQL, MongoDB",
          "RESTful and GraphQL APIs",
          "Cloud integration, cron jobs, and serverless functions",
        ],
      },
      {
        category: "QA & Performance Optimization",
        items: [
          "Page speed audits and refactoring",
          "Browser and device compatibility testing",
          "Automated and manual testing",
          "Continuous integration and deployment pipelines",
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
    whyTitle: "Why Choose Dev Inception for Web Development",
    whyChoose: [
      { title: "User-First Approach", description: "We design and develop with real people in mind, easy to use, beautiful to look at, and built for conversion." },
      { title: "Tech Agnostic & Future-Proof", description: "We pick the right stack for your goals, not ours. Our builds are modern, modular, and maintainable." },
      { title: "Built for Performance", description: "From lightning-fast load times to SEO-friendly architecture, we prioritize speed and search visibility." },
      { title: "Custom, Not Cookie-Cutter", description: "Every line of code we write solves a unique challenge, no templates, no shortcuts." },
      { title: "Cross-Functional Collaboration", description: "Our devs, designers, and strategists work together to deliver web platforms that perform." },
    ],
    industries: [
      { name: "Startups & SaaS", description: "Rapid MVPs, custom platforms, and scalable foundations for growth." },
      { name: "Ecommerce & DTC", description: "High-converting product experiences, optimized for performance and mobile." },
      { name: "Healthcare & Education", description: "Secure, compliant platforms designed for engagement and accessibility." },
      { name: "B2B Services & Agencies", description: "Lead-generating websites, CRM integrations, and flexible CMS builds." },
    ],
    ctaHeading: "Let\u2019s Build a Web Experience Engineered for Speed, Scale & Success",
    ctaDescription: "We don\u2019t just build pretty websites\u2014we engineer digital platforms that drive results.",
    ctaButton: "Start Your Project",
  },
  "ui-ux-design": {
    title: "UI/UX Design Services",
    subtitle: "Design Experiences That Delight, Engage, and Convert",
    description:
      "Your product\u2019s success hinges on how people experience it. We turn user behavior into beautiful, functional, and scalable design systems. From wireframes to prototypes to polished interfaces our UI/UX experts design with intent, empathy, and performance in mind.",
    painIntro: "What\u2019s Holding Your Product Back?",
    offerings: [
      {
        category: "User Research & Insights",
        items: ["Audience analysis & persona creation", "Usability testing & heatmaps", "Journey mapping & behavior insights", "Competitor analysis & industry benchmarking"],
      },
      {
        category: "UX Design",
        items: ["Information architecture & user flows", "Low to high fidelity wireframes", "Navigation structure & usability optimization", "Accessibility-focused design standards (WCAG compliance)"],
      },
      {
        category: "UI Design",
        items: ["Modern interface design for web & mobile", "Visual systems (grids, color, typography)", "Design systems & reusable components", "Micro-interactions & motion design"],
      },
      {
        category: "Prototyping & Testing",
        items: ["Interactive prototypes (Figma, Adobe XD, etc.)", "A/B testing & feedback-driven improvements", "Developer-ready handoff & design specs", "Continuous iteration based on user behavior"],
      },
      {
        category: "Design Audits & Optimization",
        items: ["UX audits for existing platforms", "Heuristic evaluations", "Recommendations for conversion uplift", "Performance-based UI improvements"],
      },
    ],
    painPoints: [
      "Are users dropping off before completing key actions?",
      "Is your design inconsistent or outdated across devices?",
      "Do you lack clarity on what your users really need?",
      "Are developers constantly stuck due to missing specs or unclear flows?",
      "Is your product functional but not delightful or intuitive?",
    ],
    whyTitle: "Why Businesses Choose Dev Inception for UI/UX Design",
    whyChoose: [
      { title: "Human-Centered Always", description: "We design with empathy focusing on usability, emotion, and purpose." },
      { title: "Data + Creativity", description: "Designs look great because they work great. We balance form and function through research and iteration." },
      { title: "Cross-Disciplinary Collaboration", description: "Designers work hand-in-hand with developers, marketers, and product managers." },
      { title: "Fast Yet Thoughtful Delivery", description: "Clear design roadmaps, efficient sprints, and built-in feedback loops." },
      { title: "Scalable Systems", description: "We don\u2019t just design screens\u2014we create systems that grow with your product." },
    ],
    industries: [
      { name: "SaaS Platforms", description: "Streamline onboarding, improve retention, and create smooth flows." },
      { name: "Ecommerce", description: "Design to convert with optimized product discovery and checkout." },
      { name: "Healthcare & Fintech", description: "Build trust through clarity, accessibility, and compliance." },
      { name: "Startups", description: "Rapid prototyping and MVP-ready designs with user feedback built in." },
      { name: "EdTech", description: "Learning-friendly design that\u2019s easy to navigate and engaging for all ages." },
    ],
    ctaHeading: "Let\u2019s Design Something People Love to Use",
    ctaDescription: "From first click to final conversion, we focus on creating digital experiences that feel natural, helpful, and compelling.",
    ctaButton: "Book a Free UI/UX Consultation",
  },
  ecommerce: {
    title: "Ecommerce Development Services",
    subtitle: "Build Online Stores That Convert, Scale, and Retain",
    description:
      "Today\u2019s consumers expect seamless shopping experiences. We have perfected ecommerce platforms that are fast, secure, user-friendly, and conversion-optimized from storefront to checkout to post-purchase journeys.",
    painIntro: "What\u2019s Holding Your Store Back?",
    offerings: [
      {
        category: "Custom Ecommerce Website Development",
        items: [
          "Fully responsive, mobile-first storefronts",
          "Shopify, WooCommerce, Magento, or custom builds",
          "Performance-optimized architecture",
          "SEO and Core Web Vitals-ready foundations",
        ],
      },
      {
        category: "Product & Catalog Management",
        items: [
          "Advanced filtering, variants, and categorization",
          "Bulk product upload & inventory syncing",
          "Integration with ERPs, CRMs, and PIM tools",
          "Dynamic pricing, bundles, and promotions",
        ],
      },
      {
        category: "Conversion Optimization",
        items: [
          "One-click checkout and intuitive cart flows",
          "Wishlist, compare, and product recommendation engines",
          "A/B testing, heatmaps, and user behavior analysis",
          "Optimized UI/UX for desktop and mobile",
        ],
      },
      {
        category: "Payment, Shipping & Security",
        items: [
          "Integration with Stripe, PayPal, Razorpay, etc.",
          "Multi-currency and tax handling",
          "Shipping logic, zones, and real-time rates",
          "GDPR compliance, SSL, and secure payment gateways",
        ],
      },
      {
        category: "Ecommerce Integrations & Automation",
        items: [
          "CRM, marketing tools, and analytics setup",
          "Email automation for cart abandonment, re-engagement, etc.",
          "Headless commerce architecture",
          "API development and third-party app integration",
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
    whyTitle: "Why Businesses Choose Dev Inception for Ecommerce",
    whyChoose: [
      { title: "Full Funnel Expertise", description: "We don\u2019t just build, we optimize every stage from discovery to delivery." },
      { title: "Platform-Agnostic Flexibility", description: "Whether you need Shopify speed or custom control, we pick what\u2019s best for your business." },
      { title: "Growth-Ready Infrastructure", description: "Scalable architecture that can handle traffic spikes, new SKUs, and global reach." },
      { title: "User-First Design", description: "Design that reduces friction, builds trust, and guides users to purchase." },
      { title: "Tech + Strategy in One Place", description: "Developers, designers, and marketers working together to boost your bottom line." },
    ],
    industries: [
      { name: "D2C Brands", description: "Custom stores that reflect your identity and drive repeat purchases" },
      { name: "B2B Ecommerce", description: "Complex pricing, customer portals, and large catalogs made easy" },
      { name: "Fashion & Lifestyle", description: "Visual-first storefronts with quick browsing and social proof" },
      { name: "Health & Wellness", description: "Build credibility and streamline subscriptions" },
      { name: "Electronics & Retail", description: "Scalable backend and conversion-driven UX for high-volume sales" },
    ],
    ctaHeading: "Let\u2019s Build an Ecommerce Experience That Sells, Seamlessly",
    ctaDescription: "From smooth product discovery to effortless checkout, we design and build ecommerce solutions that turn visitors into loyal customers.",
    ctaButton: "Elevate Your Store Today",
  },
  "machine-learning-ai": {
    title: "Machine Learning & AI Services",
    subtitle: "Turn Data Into Decisions with Intelligent, Scalable AI Solutions",
    description:
      "In a world driven by data, intelligence is your competitive edge. At Dev Inception, we build machine learning and AI-powered systems that learn, adapt, and improve outcomes whether you\u2019re automating workflows, predicting behavior, or personalizing experiences.",
    painIntro: "What\u2019s Holding You Back from Adopting AI?",
    offerings: [
      {
        category: "Custom ML Model Development",
        items: [
          "Supervised, unsupervised, and reinforcement learning",
          "Predictive analytics and trend forecasting",
          "Classification, clustering, and regression models",
          "Model training, tuning, and evaluation",
        ],
      },
      {
        category: "Natural Language Processing (NLP)",
        items: [
          "Text analysis, sentiment detection, and classification",
          "Chatbots and conversational AI (GPT-based & custom)",
          "Named Entity Recognition (NER), translation, and summarization",
          "Semantic search and language generation",
        ],
      },
      {
        category: "Computer Vision",
        items: [
          "Image recognition, object detection, and facial analysis",
          "OCR (optical character recognition) for document automation",
          "Real-time video analytics",
          "Medical imaging, retail tracking, and industrial automation",
        ],
      },
      {
        category: "AI Integrations & Automation",
        items: [
          "Embedding ML models into existing platforms",
          "AI-powered decision engines for business logic",
          "Data pipeline design and cloud-based model deployment (AWS, GCP, Azure)",
          "Integration with CRMs, ERPs, and internal systems",
        ],
      },
      {
        category: "Data Engineering & MLOps",
        items: [
          "Data cleaning, preprocessing, and feature engineering",
          "Scalable data pipelines and model versioning",
          "Model monitoring, drift detection, and lifecycle automation",
          "CI/CD pipelines for ML workflows",
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
    whyTitle: "Why Businesses Choose Dev Inception for AI & ML",
    whyChoose: [
      { title: "Applied Intelligence, Not Just Experiments", description: "We focus on business outcomes, not just models. Your AI must serve a purpose." },
      { title: "Cross-Disciplinary Experts", description: "Data scientists, engineers, and domain experts working as one integrated team." },
      { title: "Scalable, Production-Ready Models", description: "We build AI that lives in the real world - fast, robust, and cloud-ready." },
      { title: "Start Small, Scale Smart", description: "From MVPs to full-scale platforms, we help you start lean and grow sustainably." },
      { title: "Security & Ethics Built In", description: "Responsible AI development with a focus on data privacy, fairness, and compliance." },
    ],
    industries: [
      { name: "Healthcare & Diagnostics", description: "Predictive analytics, medical imaging, and patient triage automation" },
      { name: "Finance & Insurance", description: "Fraud detection, credit scoring, and risk modeling" },
      { name: "Retail & Ecommerce", description: "Personalized recommendations, dynamic pricing, and inventory forecasting" },
      { name: "SaaS & Startups", description: "Smart features, usage analytics, and AI-as-a-Service integrations" },
      { name: "Manufacturing & Logistics", description: "Predictive maintenance, quality control, and supply chain optimization" },
    ],
    ctaHeading: "Let\u2019s Make AI Work for Your Business",
    ctaDescription: "Whether you\u2019re looking to optimize operations, personalize experiences, or unlock hidden value in your data, we\u2019re here to help.",
    ctaButton: "Revolutionize Your Business",
  },
  "quality-assurance": {
    title: "Quality Assurance Services",
    subtitle: "Deliver with Confidence. Every Click, Flow, and Feature \u2014 Tested.",
    description:
      "A flawless user experience isn\u2019t luck, it\u2019s QA done right. We make sure your product not only works but works flawlessly every time. Whether you\u2019re building web, mobile, or enterprise applications, our QA experts ensure stability, performance, and reliability at every stage.",
    painIntro: "What\u2019s Holding Your Product Back from Peak Performance?",
    offerings: [
      {
        category: "Manual Testing",
        items: ["Functional, exploratory, and regression testing", "Cross-browser and cross-device testing", "UI/UX consistency checks", "End-to-end user journey validation"],
      },
      {
        category: "Automated Testing",
        items: [
          "Selenium, Cypress, Appium, Playwright frameworks",
          "Test script creation, execution, and maintenance",
          "Continuous testing in CI/CD pipelines",
          "API automation and backend testing",
        ],
      },
      {
        category: "Performance Testing",
        items: ["Load, stress, and scalability testing", "Response time benchmarking", "Bottleneck detection and infrastructure diagnostics", "Tools: JMeter, Gatling, Locust"],
      },
      {
        category: "Security & Compliance Testing",
        items: [
          "Vulnerability scanning and penetration testing",
          "OWASP Top 10 checks and secure code review",
          "GDPR, HIPAA, and SOC2 compliance validation",
          "Threat modeling and risk mitigation strategies",
        ],
      },
      {
        category: "Mobile App Testing",
        items: ["Native and hybrid app testing on real devices", "Device fragmentation and network simulation", "App store compliance and launch-readiness reviews"],
      },
      {
        category: "QA Process Consulting",
        items: ["QA strategy & roadmap design", "Test plan creation and tool selection", "Agile & DevOps QA integration", "Team training and best practices implementation"],
      },
    ],
    painPoints: [
      "Are you shipping fast but skipping critical QA steps?",
      "Losing users due to bugs, crashes, or inconsistencies?",
      "Lacking visibility into what\u2019s actually tested (and what\u2019s not)?",
      "Struggling with flaky automation or slow manual testing cycles?",
      "Not sure how to scale QA as your product grows?",
    ],
    whyTitle: "Why Businesses Choose Dev Inception for QA",
    whyChoose: [
      { title: "Beyond Bug Hunting", description: "We don\u2019t just test features, we test value. Every test case supports your user experience and business goals." },
      { title: "Right Mix of Manual & Automated", description: "We balance speed with accuracy, combining human insight with scalable automation." },
      { title: "Shift Left, Stay Ahead", description: "QA is part of the build process, not just the final gate. We catch issues early." },
      { title: "Real Devices, Real Environments", description: "We test where your users are on actual browsers, OS versions, and devices." },
      { title: "Adaptable QA Teams", description: "Whether you need full-cycle QA or support for a sprint, our team flexes with your pace." },
    ],
    industries: [
      { name: "SaaS & Startups", description: "Continuous delivery with zero tolerance for downtime" },
      { name: "Fintech", description: "Security-first testing to ensure trust and compliance" },
      { name: "Healthcare & EdTech", description: "High stakes, high standards\u2014QA that protects users" },
      { name: "Ecommerce & Retail", description: "Seamless, bug-free shopping experiences across all platforms" },
      { name: "Enterprise IT", description: "Scalable QA pipelines integrated into complex ecosystems" },
    ],
    ctaHeading: "Let\u2019s Build Bulletproof Software \u2014 No Hiccups, No Surprises",
    ctaDescription: "Quality is what users remember. We help you ship confidently, reduce churn, and build trust, release after release.",
    ctaButton: "Talk to Our Experts",
  },
  "project-management": {
    title: "Project Management Services",
    subtitle: "Plan Smart. Execute Fast. Deliver Without the Chaos.",
    description:
      "Whether you\u2019re launching a product, scaling operations, or managing distributed teams, effective project management is the difference between missed deadlines and market success. We bring structure, speed, and clarity to your projects, no matter the size or complexity.",
    painIntro: "What\u2019s Holding Your Projects Back?",
    offerings: [
      {
        category: "Agile & Scrum Implementation",
        items: ["Agile coaching and team onboarding", "Sprint planning, backlog grooming, and daily standups", "Jira, Trello, or ClickUp configuration and management", "Cross-functional team alignment"],
      },
      {
        category: "Project Planning & Roadmapping",
        items: ["Milestone-based planning", "Gantt charts, timelines, and dependencies", "Goal tracking and KPI alignment", "Stakeholder visibility dashboards"],
      },
      {
        category: "PMO Setup & Optimization",
        items: ["Establishing a scalable Project Management Office", "Process audits and workflow optimization", "Governance, reporting, and risk management", "Resource capacity planning"],
      },
      {
        category: "Tools & Systems Integration",
        items: [
          "Asana, Jira, Notion, Monday.com, ClickUp setup",
          "Slack, Zoom, Google Workspace integrations",
          "Custom workflow automation (e.g., Zapier, Make)",
          "Documentation best practices (Confluence, Notion)",
        ],
      },
      {
        category: "Project Rescue & Recovery",
        items: ["Audit of failing or delayed projects", "Risk identification and mitigation strategy", "Stakeholder re-engagement", "New roadmap creation with achievable milestones"],
      },
    ],
    painPoints: [
      "Are your teams always busy but nothing ever seems to get done?",
      "Do deadlines keep slipping, without clear reasons why?",
      "Is everyone on a different page or using different tools?",
      "Are you unsure what\u2019s really happening inside your projects?",
      "Do you feel like there\u2019s no structure, only chaos?",
    ],
    whyTitle: "Why Choose Dev Inception for Project Management?",
    whyChoose: [
      { title: "Process with Purpose", description: "We don\u2019t force rigid templates, we build workflows that match how your team actually works." },
      { title: "Certified Expertise", description: "Our project leads are certified in PMP, Agile, and Scrum \u2014 and know how to blend them." },
      { title: "Tool-Agnostic", description: "From Jira to Trello to ClickUp, we meet you where you are and help you optimize your stack." },
      { title: "Transparency by Default", description: "Clear timelines, risk reports, and status updates. No guesswork, just progress." },
      { title: "Collaboration-First Culture", description: "We manage projects the way we build products: collaboratively, iteratively, and with purpose." },
    ],
    industries: [
      { name: "SaaS & Startups", description: "Bring clarity and structure to fast-paced development cycles." },
      { name: "Healthcare & Fintech", description: "Ensure compliance, coordination, and delivery precision." },
      { name: "Ecommerce", description: "Launch campaigns, manage tech upgrades, and streamline ops." },
      { name: "Enterprise & B2B Services", description: "Manage internal IT, product delivery, or customer implementations without silos." },
    ],
    ctaHeading: "Let\u2019s Build Projects That Stay on Track and Deliver Results",
    ctaDescription: "From kickoff to launch, we make sure your project hits every milestone without the stress or chaos.",
    ctaButton: "Talk to a Project Specialist",
  },
  "staff-augmentation": {
    title: "Staff Augmentation Services",
    subtitle: "Scale Smart. Deliver Faster. Grow Without the Hiring Overhead.",
    description:
      "When your roadmap is expanding but your internal capacity isn\u2019t, traditional hiring slows you down. Staff augmentation gives you immediate access to skilled professionals who integrate seamlessly into your team without long recruitment cycles or long-term commitments.",
    painIntro: "What\u2019s Slowing Down Your Growth?",
    offerings: [
      {
        category: "Expert Cross-Functional Talent",
        items: [
          "Developers across frontend, backend, mobile, and full stack",
          "UI/UX designers focused on intuitive digital experiences",
          "QA engineers skilled in manual and automated testing",
          "Project managers ensuring structured delivery",
          "Digital marketers supporting growth and visibility",
        ],
      },
      {
        category: "Seamless Team Integration",
        items: [
          "Onboarding into your tools, sprints, and workflows",
          "Alignment with your internal documentation and processes",
          "Collaboration through your preferred communication platforms",
          "Minimal ramp-up time for immediate productivity",
        ],
      },
      {
        category: "Flexible Scaling Models",
        items: ["Short-term or long-term engagement options", "Scale resources up or down based on demand", "No long-term hiring overhead", "Cost-effective talent expansion"],
      },
      {
        category: "Time-Zone Aligned Availability",
        items: ["Staff availability according to your working hours", "Overlap coverage for distributed teams", "Reliable and responsive communication"],
      },
      {
        category: "Communication-Ready Professionals",
        items: ["Team members trained in effective communication", "Clear reporting and structured updates", "Strong collaboration across cross-functional teams"],
      },
    ],
    painPoints: [
      "Are projects delayed because you lack the right expertise?",
      "Is recruitment taking longer than your deadlines allow?",
      "Are your teams stretched thin with increasing workload?",
      "Do you need specialized talent without long-term commitments?",
      "Are hiring costs limiting your ability to scale?",
    ],
    whyTitle: "Why Choose Dev Inception for Staff Augmentation?",
    whyChoose: [
      { title: "Quality-Driven Selection", description: "Every professional is vetted for both technical capability and execution readiness." },
      { title: "Seamless Integration", description: "We adapt to your tools, culture, and sprint cycles without disruption." },
      { title: "Flexible Scaling", description: "Expand or reduce team size as your roadmap evolves." },
      { title: "Cost Efficiency", description: "Reduce hiring, onboarding, and infrastructure costs while maintaining high productivity." },
      { title: "Time-Zone Compatibility", description: "Dedicated support aligned with your operational hours." },
    ],
    industries: [
      { name: "SaaS & Startups", description: "Scale engineering without slowing product momentum." },
      { name: "Healthcare & Fintech", description: "Add compliant, security-aware specialists." },
      { name: "Ecommerce", description: "Accelerate releases and optimize digital platforms." },
      { name: "Enterprise & B2B Services", description: "Extend technical capacity without internal strain." },
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
    teamSize: "1 PM · 2–3 Engineers · 1 Designer",
    deliverables: [
      "iOS & Android apps",
      "Backend & APIs",
      "App Store launch + ASO",
      "Analytics & monitoring",
    ],
    idealFor: ["Funded startups", "Scaling SaaS", "Enterprise pilots"],
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
    timeline: "6–12 weeks",
    teamSize: "1 PM · 2 Engineers · 1 Designer",
    deliverables: [
      "Frontend (React / Next)",
      "Backend & APIs",
      "Performance & SEO",
      "CI/CD + deployment",
    ],
    idealFor: ["Growth-stage SaaS", "Marketing teams", "B2B platforms"],
    accent: "#0277BD",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
      </svg>
    ),
  },
  ecommerce: {
    category: "Build",
    timeline: "8–14 weeks",
    teamSize: "1 PM · 2 Engineers · 1 Designer",
    deliverables: [
      "Custom storefront / Shopify",
      "PCI-DSS-compliant checkout",
      "Inventory & ERP integrations",
      "A/B testing infrastructure",
    ],
    idealFor: ["DTC brands", "Multi-region stores", "B2B catalogs"],
    accent: "#0288D1",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  "ui-ux-design": {
    category: "Design",
    timeline: "3–6 weeks",
    teamSize: "1 Lead Designer · 1 Researcher",
    deliverables: [
      "User research + personas",
      "Wireframes & prototypes",
      "Visual design system",
      "Usability testing",
    ],
    idealFor: ["Pre-build planning", "Existing-product redesign", "Conversion lift"],
    accent: "#039BE5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  "machine-learning-ai": {
    category: "Scale",
    timeline: "6–16 weeks",
    teamSize: "1 ML Lead · 1–2 Engineers · 1 Data Engineer",
    deliverables: [
      "Custom model / pipeline",
      "Production deployment",
      "MLOps & monitoring",
      "Retrain + evaluation cadence",
    ],
    idealFor: ["Data-rich SaaS", "Operations automation", "AI features"],
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
    timeline: "Ongoing (3-month commits)",
    teamSize: "1 Strategist · 1 Specialist · 1 Designer",
    deliverables: [
      "SEO + content strategy",
      "Paid acquisition setup",
      "Analytics + attribution",
      "Monthly reporting",
    ],
    idealFor: ["Funded SaaS", "B2B services", "DTC brands"],
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
    timeline: "Flexible (1+ month)",
    teamSize: "1–10+ people",
    deliverables: [
      "Vetted senior engineers",
      "Sprint-ready integration",
      "Time-zone aligned",
      "Scale up / down monthly",
    ],
    idealFor: ["Scaling teams", "Hiring constraints", "Specific expertise gaps"],
    accent: "#01579B",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  "quality-assurance": {
    category: "Operate",
    timeline: "Per-release or ongoing",
    teamSize: "1 QA Lead · 1–2 QA Engineers",
    deliverables: [
      "Test plan + automation",
      "Performance & load tests",
      "Security audits",
      "Cross-platform validation",
    ],
    idealFor: ["Pre-launch products", "Regulated industries", "High-traffic apps"],
    accent: "#006064",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  "project-management": {
    category: "Operate",
    timeline: "Ongoing (3-month commits)",
    teamSize: "1 PM · 0.5 Scrum Master",
    deliverables: [
      "Roadmap + backlog ownership",
      "Sprint ceremonies",
      "Stakeholder communication",
      "Risk & change management",
    ],
    idealFor: ["Cross-functional initiatives", "Distributed teams", "Recovery projects"],
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

/* Generic 4-step process (shared across all services) */
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1–2",
    description:
      "We map goals, constraints, and the why. You leave with a scoped roadmap and a fixed quote.",
  },
  {
    number: "02",
    title: "Design",
    duration: "Week 2–5",
    description:
      "Wireframes, prototypes, and a visual system. We pressure-test ideas with real users before code.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Week 5–14",
    description:
      "2-week sprints with weekly demos. Behind a feature flag from day one — no surprises at launch.",
  },
  {
    number: "04",
    title: "Launch",
    duration: "Final week",
    description:
      "Production deploy, monitoring wired in, and a 30-day stabilization window. Optional retainer after.",
  },
];

/* ───────── Component ───────── */

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];
  const meta = serviceMeta[slug];
  const related = (relatedMap[slug] ?? []).slice(0, 3);

  const [activeOffering, setActiveOffering] = useState(0);

  if (!service) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] bg-section-dark flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
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
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${accent}1A` }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-neon-blue transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link href="/services" className="hover:text-neon-blue transition-colors">
                Services
              </Link>
              <span className="text-gray-600">/</span>
              <span style={{ color: accent }}>{service.title}</span>
            </nav>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                {/* Category + icon row */}
                <div className="flex items-center gap-3">
                  {meta && (
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80, inset 0 1px 0 rgba(255,255,255,0.18)`,
                      }}
                    >
                      {meta.icon}
                    </div>
                  )}
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border"
                    style={{
                      color: accent,
                      borderColor: `${accent}40`,
                      backgroundColor: `${accent}0A`,
                    }}
                  >
                    {category} · Service
                  </span>
                </div>

                <h1 className="mt-6 h-display text-white">{service.title}</h1>
                <p
                  className="mt-4 text-xl sm:text-2xl font-semibold"
                  style={{ color: accent }}
                >
                  {service.subtitle}
                </p>
                <p className="mt-6 body-lead text-gray-400">
                  {service.description}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold tracking-wide text-sm transition-all duration-300"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80`,
                      }}
                    >
                      Book a discovery call
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </motion.span>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                  >
                    All services
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            {meta && (
              <AnimatedSection direction="right" className="lg:col-span-5">
                <div
                  className="relative rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-7 lg:p-8 overflow-hidden"
                  style={
                    {
                      boxShadow: `0 30px 60px -20px ${accent}30`,
                    } as React.CSSProperties
                  }
                >
                  {/* Soft accent glow */}
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-[0.18] pointer-events-none"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="relative">
                    <p
                      className="eyebrow"
                      style={{ color: accent }}
                    >
                      At a glance
                    </p>

                    {/* Timeline */}
                    <div className="mt-6 flex items-start gap-4 pb-5 border-b border-white/[0.08]">
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
                          Timeline
                        </p>
                        <p className="mt-1 text-white text-base font-semibold">
                          {meta.timeline}
                        </p>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="mt-5 flex items-start gap-4 pb-5 border-b border-white/[0.08]">
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
                          Team
                        </p>
                        <p className="mt-1 text-white text-sm font-semibold">
                          {meta.teamSize}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mt-5 pb-5 border-b border-white/[0.08]">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
                        Key Deliverables
                      </p>
                      <ul className="mt-3 space-y-2">
                        {meta.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex gap-2 text-sm text-gray-300 leading-snug"
                          >
                            <svg
                              className="w-3.5 h-3.5 mt-1 shrink-0"
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
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for */}
                    <div className="mt-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
                        Ideal for
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {meta.idealFor.map((tag) => (
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

      {/* ───────── Pain points (cleaner, empathetic) ───────── */}
      <section className="py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-rose-500/80">Sound familiar?</p>
              <h2 className="mt-3 h-section text-deep-blue">
                {service.painIntro}
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                If any of these are slowing you down, you&apos;re not alone —
                most teams we talk to are stuck on at least one.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.painPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full p-6 rounded-2xl bg-white border border-deep-blue/[0.07] hover:shadow-[0_20px_40px_-16px_rgba(244,63,94,0.25)] transition-all duration-500 overflow-hidden"
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-rose-400/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-105">
                      <svg
                        className="w-5 h-5 text-rose-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-deep-blue/75 leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── What's included (interactive offerings) ───────── */}
      <section className="relative py-16 lg:py-20 bg-light-accent overflow-hidden">
        {/* Background Effects */}
        {/* <div className="absolute inset-0 dotted-grid opacity-[0.04] pointer-events-none" /> */}

        {/* <motion.div
          className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 pointer-events-none"
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
        /> */}

        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-blue/[0.05] rounded-full blur-[120px] pointer-events-none"
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

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 lg:mb-12">
            <AnimatedSection className="lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm"
                style={{
                  borderColor: `${accent}20`,
                  backgroundColor: `${accent}08`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />

                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: accent }}
                >
                  What&apos;s included
                </span>
              </div>

              <h2 className="mt-4 h-section text-deep-blue max-w-2xl">
                A studio engineered for
                {" "}
                <span
                  className="relative inline-block"
                  style={{ color: accent }}
                >
                  teams that ship.
                  <span
                    className="absolute left-0 bottom-1 w-full h-[8px] -z-10 opacity-20 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <div className="lg:pl-8 lg:border-l border-deep-blue/[0.08]">
                <p className="body-base text-deep-blue/60 max-w-md">
                  Founded by senior engineers tired of agency-grade deliverables. We embed like an in-house team — from seed-stage MVPs to Fortune-500 platforms.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col gap-2.5">
                {service.offerings.map((offering, i) => {
                  const isActive = activeOffering === i;

                  return (
                    <motion.button
                      key={offering.category}
                      onClick={() => setActiveOffering(i)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.99 }}
                      className="group relative overflow-hidden w-full text-left rounded-2xl transition-all duration-300"
                      style={{
                        backgroundColor: isActive
                          ? "white"
                          : "rgba(255,255,255,0.65)",
                        border: `1px solid ${isActive ? `${accent}25` : "rgba(15,23,42,0.06)"
                          }`,
                        boxShadow: isActive
                          ? `0 22px 45px -18px ${accent}40`
                          : "0 2px 10px rgba(0,0,0,0.02)",
                      }}
                    >
                      {/* Active Glow */}
                      {/* {isActive && (
                        <motion.div
                          layoutId="activeServiceGlow"
                          className="absolute inset-0 opacity-[0.07]"
                          style={{
                            background: `linear-gradient(135deg, ${accent}, transparent)`,
                          }}
                        />
                      )} */}

                      <div className="relative flex items-center gap-4 px-5 py-4">
                        {/* Number */}
                        <div
                          className="relative w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold tabular-nums shrink-0"
                          style={{
                            backgroundColor: isActive
                              ? accent
                              : `${accent}12`,
                            color: isActive ? "white" : accent,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}

                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.08, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              style={{
                                border: `1px solid ${accent}`,
                              }}
                            />
                          )}
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-deep-blue tracking-tight">
                            {offering.category}
                          </p>

                          <p className="mt-0.5 text-xs text-deep-blue/50">
                            {offering.items.length} deliverables included
                          </p>
                        </div>

                        {/* Arrow */}
                        <motion.div
                          animate={{
                            x: isActive ? 0 : -3,
                            opacity: isActive ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={accent}
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffering}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="relative rounded-3xl bg-white border border-deep-blue/[0.07] overflow-hidden shadow-2xl shadow-deep-blue/[0.06]"
                >
                  {/* Top Glow */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                  />

                  {/* Ambient Glow */}
                  {/* <div
                    className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-[0.14]"
                    style={{ backgroundColor: accent }}
                  /> */}

                  <div className="relative p-6 lg:p-8">
                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full"
                      style={{
                        color: accent,
                        backgroundColor: `${accent}10`,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accent }}
                      />

                      {String(activeOffering + 1).padStart(2, "0")} ·{" "}
                      {service.offerings.length} total capabilities
                    </div>

                    {/* Heading */}
                    <h3 className="mt-5 text-2xl lg:text-3xl font-bold tracking-tight text-deep-blue leading-tight">
                      {service.offerings[activeOffering].category}
                    </h3>

                    <p className="mt-3 text-sm lg:text-base text-deep-blue/55 max-w-2xl leading-relaxed">
                      Everything below is included when we partner with your team —
                      strategy, execution, optimization, and production support.
                    </p>

                    {/* Deliverables */}
                    <div className="mt-8 grid sm:grid-cols-2 gap-3">
                      {service.offerings[activeOffering].items.map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: idx * 0.04,
                          }}
                          className="group relative flex items-start gap-3 rounded-2xl border border-deep-blue/[0.06] bg-light-accent/60 hover:bg-white hover:border-deep-blue/[0.1] transition-all duration-300 p-4"
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              backgroundColor: `${accent}12`,
                            }}
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
                            <p className="text-sm font-medium text-deep-blue leading-relaxed">
                              {item}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── How we work (4-step) ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"
          style={{ backgroundColor: `${accent}0F` }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-neon-blue">How we work</p>
              <h2 className="mt-3 h-section text-white">
                From kickoff to launch in{" "}
                <span style={{ color: accent }}>four clear steps.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Transparent timelines, weekly demos, fixed quotes after
                discovery. No surprises, no scope creep.
              </p>
            </AnimatedSection>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-white/15" />

            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="group relative h-full p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="relative w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 z-10"
                      style={{
                        backgroundColor: accent,
                        boxShadow: `0 12px 28px -10px ${accent}80`,
                      }}
                    >
                      {step.number}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                      style={{
                        color: accent,
                        backgroundColor: `${accent}15`,
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="h-card text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Why us for THIS service ───────── */}
      <section className="py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <p
              className="eyebrow"
              style={{ color: accent }}
            >
              Why teams pick us
            </p>
            <h2 className="mt-3 h-section text-deep-blue">{service.whyTitle}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whyChoose.slice(0, 6).map((item, i) => {
              const itemAccent = ACCENTS[i % ACCENTS.length];
              return (
                <AnimatedSection key={item.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="group relative h-full rounded-2xl overflow-hidden"
                    style={
                      {
                        "--card-glow": `${itemAccent}55`,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl opacity-[0.16] group-hover:opacity-[0.32] transition-opacity duration-500"
                      style={{ backgroundColor: itemAccent }}
                    />
                    <div className="relative h-full p-7 rounded-2xl border border-deep-blue/[0.07] bg-white group-hover:shadow-[0_20px_40px_-16px_var(--card-glow)] transition-all duration-500">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ borderColor: `${itemAccent}33` }}
                      />
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundColor: itemAccent,
                          boxShadow: `0 12px 28px -10px ${itemAccent}80`,
                        }}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-5 h-card text-deep-blue">{item.title}</h3>
                      <p className="mt-2.5 text-sm text-deep-blue/65 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Industries we serve (compact) ───────── */}
      <section className="pb-20 bg-light-accent relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="rounded-2xl bg-section-dark border border-deep-blue/[0.07] p-7 lg:p-9 overflow-hidden relative">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">

              {/* Left Content */}
              <div className="lg:col-span-4">
                <p
                  className="eyebrow"
                  style={{ color: accent }}
                >
                  Industries
                </p>

                <h3 className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight leading-tight text-white">
                  We&apos;ve shipped{" "}
                  <span className="gradient-text">this service</span> for teams across:
                </h3>
              </div>

              {/* Industry Cards */}
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
                {service.industries.map((industry, i) => (
                  <AnimatedSection
                    key={industry.name}
                    delay={i * 0.05}
                  >
                    <div
                      className="group flex items-start gap-3 p-4 rounded-xl 
                bg-white/5 hover:bg-white/10 
                border border-white/10 hover:border-white/20 
                transition-all duration-300"
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-125"
                        style={{ backgroundColor: accent }}
                      />

                      <div>
                        <p className="font-semibold text-white text-sm">
                          {industry.name}
                        </p>

                        <p className="text-xs text-white/70 mt-0.5 leading-snug">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────── Related services (NEW) ───────── */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" />

          <div className="relative max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <p className="eyebrow text-neon-blue">Pair it with</p>
              <h2 className="mt-3 h-section text-white">
                Often combined{" "}
                <span className="gradient-text">with this service.</span>
              </h2>
              <p className="mt-5 body-base text-gray-400">
                Most engagements weave 2–3 capabilities together. Here&apos;s
                what teams typically pair with {service.title.toLowerCase()}.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5">
              {related.map((relSlug, i) => {
                const relMeta = serviceMeta[relSlug];
                const relInfo = allServiceTitles[relSlug];
                if (!relMeta || !relInfo) return null;
                return (
                  <AnimatedSection key={relSlug} delay={i * 0.08}>
                    <Link
                      href={`/services/${relSlug}`}
                      className="group relative block h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-500 p-6"
                      style={
                        {
                          "--card-glow": `${relMeta.accent}55`,
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-[0.18] group-hover:opacity-[0.4] transition-opacity duration-500"
                        style={{ backgroundColor: relMeta.accent }}
                      />

                      <div className="relative">
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                            style={{
                              backgroundColor: relMeta.accent,
                              boxShadow: `0 12px 28px -10px ${relMeta.accent}80`,
                            }}
                          >
                            {relMeta.icon}
                          </div>
                          <span
                            className="text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                            style={{
                              color: relMeta.accent,
                              backgroundColor: `${relMeta.accent}15`,
                            }}
                          >
                            {relMeta.category}
                          </span>
                        </div>
                        <h3 className="h-card text-white">{relInfo.title}</h3>
                        <p className="mt-2 text-sm text-gray-400 leading-snug">
                          {relInfo.tagline}
                        </p>
                        <div
                          className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-sm font-semibold"
                          style={{ color: relMeta.accent }}
                        >
                          <span>Explore service</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Final CTA ───────── */}
      <CTABanner
        eyebrow="Let's get started"
        heading={<>{service.ctaHeading}</>}
        description={service.ctaDescription}
        primaryLabel={service.ctaButton}
        primaryHref="/contact"
        secondaryLabel="View all services"
        secondaryHref="/services"
      />
    </>
  );
}
