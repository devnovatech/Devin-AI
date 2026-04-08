"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

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
      {
        category: "Maintenance & Support",
        items: ["Bug fixes & security patches", "OS/version upgrades", "Feature enhancements", "SLA-based ongoing support"],
      },
      {
        category: "Growth & Monetization",
        items: ["App Store Optimization (ASO)", "In-app purchase strategy", "Ad integration"],
      },
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
          "Progressive Web App (PWA) development",
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

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="pt-32 pb-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">Service Not Found</h1>
          <p className="mt-4 text-gray-400">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-neon-blue transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-neon-blue transition-colors">Our Services</Link>
              <span>/</span>
              <span className="text-neon-blue">{service.title}</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl gradient-text font-semibold">
              {service.subtitle}
            </p>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
              >
                Get Your Smart Solution
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">What We Offer</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
              Our <span className="gradient-text-dark">Capabilities</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((offering, i) => (
              <AnimatedSection key={offering.category} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full p-8 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-blue to-neon-purple flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-4">{offering.category}</h3>
                  <ul className="space-y-2">
                    {offering.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-deep-blue/60">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {service.painIntro}
            </h2>
            <p className="mt-4 text-gray-400 text-lg">If any of these sound familiar, you&apos;re not alone.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.painPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple mb-4">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
            >
              Get Your Smart Solution
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-light-accent relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">Why Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-deep-blue">
              {service.whyTitle}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChoose.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full p-8 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-deep-blue/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-deep-blue to-neon-purple flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-deep-blue">{item.title}</h3>
                  <p className="mt-3 text-deep-blue/60 leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">Industries</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Industries We Help <span className="gradient-text">Thrive</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.industries.map((industry, i) => (
              <AnimatedSection key={industry.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-neon-blue/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-neon-blue font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Discover Your Industry&apos;s Challenges
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-3xl border border-deep-blue/10 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue to-neon-purple/30" />
              <div className="absolute inset-0 grid-bg opacity-50" />

              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  {service.ctaHeading}
                </h2>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                  {service.ctaDescription}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
                  >
                    {service.ctaButton}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
