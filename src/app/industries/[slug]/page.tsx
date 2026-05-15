"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

interface IndustryData {
  title: string;
  heroDescription: string;
  challenges: string[];
  solutionsHeading: string;
  solutions: string[];
  ctaHeading: string;
  ctaButton: string;
}

const industriesData: Record<string, IndustryData> = {
  healthcare: {
    title: "Healthcare & HealthTech",
    heroDescription:
      "Behind the scenes, healthcare teams face hurdles that slow innovation and care.",
    challenges: [
      "Poor Mobile User Experience: Unintuitive interfaces, slow performance, and lack of offline functionality lead to patient disengagement in telemedicine and wellness apps.",
      "Compliance and Security Risks: Strict regulations (e.g., HIPAA, GDPR) and vulnerabilities in apps or platforms risk data breaches and penalties.",
      "Slow Time-to-Market: Complex requirements delay the launch of critical patient care or provider solutions.",
      "Lack of Actionable Data Insights: Inability to extract meaningful insights from patient data hinders personalized care and efficiency.",
      "Fragmented User Experience: Inconsistent experiences across mobile apps and web platforms frustrate users, reducing adoption.",
      "Limited Patient Access to Information: Patients struggle to access real-time health information or guidance, leading to frustration and reduced engagement.",
      "High Development Costs: Building separate iOS and Android apps is resource-intensive, straining budgets.",
    ],
    solutionsHeading:
      "Accelerate Patient Care with Secure, Scalable Digital Platforms",
    solutions: [
      "Mobile Application Development: Cross-platform apps (iOS, Android, Hybrid via Flutter, React Native, Ionic) with offline capabilities and native performance for seamless patient engagement.",
      "UI/UX Design: Intuitive, patient-centered designs with clear navigation and engaging onboarding to boost retention.",
      "Quality Assurance: Manual and automated testing (Selenium, Cypress) ensuring HIPAA-compliant, secure apps and platforms.",
      "Web Development: Secure, scalable platforms using React, Angular, or Laravel with compliance-ready architecture.",
      "Machine Learning & AI: Custom AI models for predictive diagnostics, patient insights, and operational optimization, with real-time data visualization dashboards.",
      "Intelligent AI Assistants: Conversational AI integrated into mobile apps and web platforms to provide 24/7 patient support, answer queries, and offer personalized health guidance.",
      "Cost-Effective Development: Hybrid frameworks and automated testing to reduce development costs by up to 30% compared to native builds.",
    ],
    ctaHeading:
      "Take control of your digital health operations and deliver better patient outcomes.",
    ctaButton: "Optimize Your Patient Experience",
  },
  fintech: {
    title: "FinTech",
    heroDescription:
      "Even the most advanced financial platforms run into hidden challenges every day.",
    challenges: [
      "Data Security and Privacy Risks: Handling sensitive financial data (e.g., PII, PCI) makes FinTech platforms vulnerable to cyberattacks, with breaches costing an average of $4.24 million.",
      "Regulatory Compliance Challenges: Evolving regulations (e.g., GDPR, AML, KYC) across jurisdictions create complexities, risking penalties for non-compliance in AI-driven systems.",
      "Integration with Legacy Systems: Difficulty integrating AI assistants and modern platforms with outdated banking systems disrupts workflows and limits functionality.",
      "Poor User Experience and Adoption: Clunky or overly complex interfaces in AI assistants and apps lead to low customer adoption due to unintuitive designs.",
      "Scalability Limitations: Platforms and AI assistants struggle to handle growing transaction volumes or diverse use cases, impacting performance.",
      "Fraud Detection and Prevention: Rising AI-driven fraud (e.g., deepfake scams, synthetic identities) results in billions in losses, challenging trust and security.",
      "Fragmented Data Ecosystems: Limited interoperability between banking, telecom, and credit bureau systems hinders accurate analytics and risk modeling.",
      "High Development Costs and Time: Building secure, compliant AI assistants and apps for iOS and Android is resource-intensive, delaying launches.",
    ],
    solutionsHeading:
      "Future-Ready Financial Systems Built for Compliance and Growth",
    solutions: [
      "Data Security: Build secure cross-platform mobile apps (Flutter, React Native) and web platforms (React, Laravel) with end-to-end encryption, biometric authentication, and automated testing to ensure GDPR and PCI compliance.",
      "Regulatory Compliance: Develop AI assistants with real-time KYC and AML monitoring, supported by automated regulatory testing to ensure adherence across jurisdictions.",
      "Legacy Integration: Design modular web and hybrid mobile apps with APIs for seamless integration with legacy banking systems, enabling real-time transaction support.",
      "User Experience: Craft AI assistants with intuitive, NLP-driven interfaces and user-friendly mobile apps featuring personalized financial advice.",
      "Scalability: Deploy cloud-native platforms (Next.js, Python) and AI models on scalable infrastructure to support 10x transaction growth without performance degradation.",
      "Fraud Detection: Train AI assistants with behavioral analytics and anomaly detection for real-time fraud monitoring.",
      "Data Unification: Build AI assistants to aggregate data from banking, telecom, and credit bureau systems, paired with web dashboards for unified visualization.",
      "Cost-Effective Development: Use hybrid frameworks (Ionic, Flutter) and agile project management (Jira, Asana) to develop cost-effective AI assistant apps.",
    ],
    ctaHeading:
      "Secure, scalable, and compliant solutions designed for modern finance.",
    ctaButton: "Transform Your Financial Systems",
  },
  "ecommerce-retail": {
    title: "Ecommerce & Retail",
    heroDescription:
      "Retail operations often grapple with digital inefficiencies that quietly impact growth.",
    challenges: [
      "Poor Website and Mobile App Performance: Slow load times and unresponsive designs lead to high bounce rates, with 53% of mobile users abandoning sites taking over 3 seconds to load.",
      "Inadequate Mobile Optimization: Non-mobile-friendly platforms result in poor user experiences, with 61% of users unlikely to return to a non-optimized site.",
      "Security Vulnerabilities: Ecommerce platforms handling sensitive customer data are prone to cyberattacks, with retail data breaches costing millions.",
      "Low Search Engine Visibility: Weak SEO strategies, including poor keyword targeting and site structure, lead to low organic traffic.",
      "High Cart Abandonment Rates: Clunky checkout processes and unintuitive UX cause high abandonment, with global rates averaging 70%.",
      "Inefficient Inventory and Order Management: Disconnected IT systems result in inventory mismatches or delayed order processing.",
      "Lack of Personalized Customer Experiences: Generic marketing and lack of AI-driven personalization fail to engage customers effectively.",
      "Fragmented Marketing Data: Siloed data across platforms hinders effective campaign targeting, reducing ROI on marketing spend.",
    ],
    solutionsHeading:
      "Build Seamless Shopping Experiences That Convert and Scale",
    solutions: [
      "Performance Optimization: Build lightning-fast, responsive ecommerce platforms with optimized Core Web Vitals and mobile-first architecture.",
      "Mobile Commerce: Cross-platform mobile apps with native performance, push notifications, and seamless in-app checkout experiences.",
      "Security & Compliance: PCI-DSS compliant platforms with SSL encryption, secure payment gateways, and regular security audits.",
      "SEO & Visibility: Technical SEO, keyword strategy, and content optimization to drive organic traffic and improve search rankings.",
      "Conversion Optimization: Streamlined checkout flows, A/B testing, personalized product recommendations, and abandoned cart recovery automation.",
      "Inventory & Operations: Integrated inventory management systems, real-time order tracking, and ERP/CRM integrations.",
      "AI-Powered Personalization: Machine learning models for dynamic pricing, product recommendations, and customer behavior analysis.",
      "Unified Marketing Analytics: Consolidated marketing dashboards, campaign attribution modeling, and audience segmentation tools.",
    ],
    ctaHeading:
      "Transform your retail operations with digital solutions that drive revenue and loyalty.",
    ctaButton: "Elevate Your Retail Experience",
  },
  logistics: {
    title: "Logistics & Transportation",
    heroDescription:
      "Logistics companies face mounting pressure to modernize operations while keeping costs in check.",
    challenges: [
      "Lack of Real-Time Visibility: Inability to track shipments, vehicles, or inventory in real-time leads to delays and poor customer communication.",
      "Manual and Paper-Based Processes: Reliance on spreadsheets and manual data entry causes errors, inefficiencies, and slow decision-making.",
      "Route Optimization Gaps: Without intelligent routing, companies face increased fuel costs, delayed deliveries, and underutilized fleets.",
      "Disconnected Systems: Siloed software for warehousing, transport, and customer management leads to data fragmentation and operational blind spots.",
      "Driver and Workforce Management: Scheduling, compliance tracking, and communication challenges reduce workforce productivity.",
      "Rising Customer Expectations: Customers demand same-day delivery, real-time updates, and seamless returns, raising the bar for service levels.",
    ],
    solutionsHeading:
      "Streamline Operations with Intelligent, Connected Logistics Platforms",
    solutions: [
      "Real-Time Tracking: GPS-enabled mobile apps and web dashboards for live shipment tracking, fleet monitoring, and delivery status updates.",
      "Process Automation: Digital workflows replacing manual processes for order processing, document generation, and compliance reporting.",
      "AI-Powered Route Optimization: Machine learning algorithms for dynamic route planning, fuel optimization, and delivery time prediction.",
      "System Integration: Unified platforms connecting warehouse management, transportation management, and CRM systems via APIs.",
      "Workforce Management Tools: Mobile apps for driver scheduling, compliance tracking, digital proof of delivery, and real-time communication.",
      "Customer Experience: Self-service portals, automated notifications, and real-time tracking links to meet modern delivery expectations.",
    ],
    ctaHeading:
      "Modernize your logistics operations with technology that moves as fast as your business.",
    ctaButton: "Optimize Your Operations",
  },
  education: {
    title: "Education & EdTech",
    heroDescription:
      "Educational institutions and EdTech companies face evolving challenges in delivering effective, accessible learning.",
    challenges: [
      "Low Student Engagement: Traditional learning formats fail to capture attention, leading to poor retention and completion rates.",
      "Accessibility Barriers: Platforms that aren't designed for diverse learners, devices, or connectivity levels exclude potential users.",
      "Fragmented Learning Experiences: Disconnected tools for content delivery, assessments, and communication create friction for students and educators.",
      "Limited Analytics: Inability to track student progress, identify at-risk learners, or measure curriculum effectiveness in real-time.",
      "Scalability Challenges: Platforms that work for hundreds struggle to support thousands or millions of concurrent users.",
      "Content Management Complexity: Creating, organizing, and updating educational content across multiple formats and languages is time-consuming.",
    ],
    solutionsHeading:
      "Build Engaging, Accessible Learning Platforms That Scale",
    solutions: [
      "Interactive Learning Platforms: Custom LMS development with gamification, progress tracking, video streaming, and interactive assessments.",
      "Accessible Design: WCAG-compliant UI/UX design with responsive layouts, offline capabilities, and multi-language support.",
      "Unified Learning Ecosystems: Integrated platforms connecting content management, student portals, assessments, and communication tools.",
      "Learning Analytics: AI-powered dashboards tracking student performance, engagement metrics, and curriculum effectiveness with predictive insights.",
      "Scalable Infrastructure: Cloud-native architectures supporting millions of concurrent users with reliable uptime and performance.",
      "Content Management: Headless CMS solutions for easy content creation, organization, and delivery across web and mobile platforms.",
    ],
    ctaHeading:
      "Transform education with platforms that make learning accessible, engaging, and measurable.",
    ctaButton: "Build Your EdTech Solution",
  },
  "travel-hospitality": {
    title: "Travel & Hospitality",
    heroDescription:
      "The travel industry faces unique digital challenges that directly impact guest satisfaction and revenue.",
    challenges: [
      "Complex Booking Processes: Multi-step reservation flows with poor UX lead to high abandonment rates and lost revenue.",
      "Fragmented Operations: Disconnected systems for reservations, housekeeping, guest services, and billing create operational inefficiencies.",
      "Limited Personalization: Generic experiences fail to leverage guest preferences, travel history, and behavior for tailored offerings.",
      "Seasonal Demand Fluctuations: Platforms that can't scale dynamically lead to poor performance during peak seasons.",
      "Review and Reputation Management: Difficulty monitoring and responding to reviews across multiple platforms impacts brand perception.",
      "Mobile Experience Gaps: Travelers expect seamless mobile booking, check-in, and concierge services that many providers lack.",
    ],
    solutionsHeading:
      "Create Seamless Guest Experiences from Booking to Checkout",
    solutions: [
      "Streamlined Booking: Intuitive, mobile-optimized booking engines with real-time availability, dynamic pricing, and one-click reservations.",
      "Integrated Operations: Unified platforms connecting reservation systems, property management, guest services, and analytics.",
      "AI-Personalization: Machine learning models for personalized recommendations, dynamic pricing, and targeted marketing based on guest behavior.",
      "Scalable Architecture: Cloud-native platforms that auto-scale during peak travel seasons while maintaining fast performance.",
      "Reputation Management: Automated review monitoring, sentiment analysis, and response management across all major platforms.",
      "Mobile-First Experiences: Cross-platform mobile apps with digital check-in, room service ordering, local guides, and concierge chat.",
    ],
    ctaHeading:
      "Delight your guests with technology that makes every journey seamless.",
    ctaButton: "Transform Your Guest Experience",
  },
  "saas-startups": {
    title: "SaaS & Tech Startups",
    heroDescription:
      "Startups and SaaS companies operate in a high-speed environment where technical decisions have outsized impact.",
    challenges: [
      "Speed to Market Pressure: Intense competition requires rapid MVP development and iteration without sacrificing quality.",
      "Scalability Concerns: Architecture decisions made early can become bottlenecks as user base grows from hundreds to millions.",
      "Resource Constraints: Limited budgets and small teams mean every hire and technology choice must deliver maximum impact.",
      "Technical Debt Accumulation: Moving fast often leads to shortcuts that compound into maintenance nightmares and slow feature delivery.",
      "User Retention and Engagement: Acquiring users is expensive; poor onboarding and UX lead to high churn rates.",
      "Investor and Stakeholder Expectations: Demonstrating product-market fit, growth metrics, and technical robustness is critical for fundraising.",
    ],
    solutionsHeading:
      "Build Scalable, Market-Ready Products That Attract Users and Investors",
    solutions: [
      "Rapid MVP Development: Full-stack development with modern frameworks, agile sprints, and continuous delivery to ship fast and iterate faster.",
      "Scalable Architecture: Cloud-native infrastructure design with microservices, auto-scaling, and database optimization for growth.",
      "Staff Augmentation: On-demand access to senior developers, designers, and QA engineers who integrate seamlessly into your team.",
      "Product Design: User research-driven UI/UX design with rapid prototyping, usability testing, and conversion-optimized interfaces.",
      "Quality at Speed: Automated testing pipelines, CI/CD integration, and code review processes that maintain quality without slowing delivery.",
      "Growth Engineering: Analytics integration, A/B testing infrastructure, and performance monitoring to drive data-informed product decisions.",
    ],
    ctaHeading:
      "Accelerate your startup with the technical expertise and execution speed you need.",
    ctaButton: "Scale Your Startup",
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

/* Recent work — illustrative case studies per industry */
const recentWorkByIndustry: Record<string, Array<{ client: string; summary: string; metric: string; metricLabel: string }>> = {
  healthcare: [
    { client: "HealthBridge", summary: "HIPAA-compliant telemedicine platform with EHR integration.", metric: "14", metricLabel: "hospitals onboarded in Q1" },
    { client: "MediTrack", summary: "Patient adherence app with AI-powered medication reminders.", metric: "+62%", metricLabel: "adherence rate" },
  ],
  fintech: [
    { client: "FinFlow Technologies", summary: "Real-time analytics platform powering financial decisions for SMBs.", metric: "50k+", metricLabel: "monthly active users" },
    { client: "PayWise", summary: "PCI-DSS-compliant payment gateway with fraud detection.", metric: "$2.1M", metricLabel: "transactions / day" },
  ],
  "ecommerce-retail": [
    { client: "ShopSphere", summary: "Mobile commerce app with personalized recommendations.", metric: "4.8★", metricLabel: "App Store rating" },
    { client: "RetailNow", summary: "Headless storefront with optimized checkout flow.", metric: "+24%", metricLabel: "conversion lift" },
  ],
  logistics: [
    { client: "RouteOptima", summary: "Real-time fleet tracking with AI route optimization.", metric: "−18%", metricLabel: "fuel costs" },
    { client: "FreightLine", summary: "Driver app with digital proof-of-delivery and compliance.", metric: "200+", metricLabel: "drivers onboarded" },
  ],
  education: [
    { client: "EduTech Global", summary: "LMS with gamification and AI-assisted tutoring.", metric: "12 schools", metricLabel: "deployed across" },
    { client: "LearnPath", summary: "Accessible (WCAG-AA) corporate training platform.", metric: "50k+", metricLabel: "learners served" },
  ],
  "travel-hospitality": [
    { client: "StaySwift", summary: "Hotel booking engine with dynamic pricing.", metric: "+31%", metricLabel: "direct booking lift" },
    { client: "GuideAway", summary: "Mobile concierge app with offline support.", metric: "8 markets", metricLabel: "shipped to" },
  ],
  "saas-startups": [
    { client: "FinFlow Technologies", summary: "Series B SaaS — platform rebuild for 10× scale.", metric: "+240%", metricLabel: "active user growth" },
    { client: "LaunchKit", summary: "MVP for a developer-tools startup, kickoff to launch.", metric: "12 weeks", metricLabel: "to launch" },
  ],
};

/* ───────── Component ───────── */

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industriesData[slug];
  const meta = industryMeta[slug];
  const related = (relatedIndustryMap[slug] ?? []).slice(0, 3);
  const recentWork = recentWorkByIndustry[slug] ?? [];

  if (!industry) {
    return (
      <div className="pt-32 pb-16 min-h-[70vh] bg-section-dark flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
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

  return (
    <>
      {/* ───────── Hero with industry spec card ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: `${accent}1A` }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-neon-blue transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link href="/industries" className="hover:text-neon-blue transition-colors">Industries</Link>
              <span className="text-gray-600">/</span>
              <span style={{ color: accent }}>{industry.title}</span>
            </nav>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — content */}
            <div className="lg:col-span-7">
              <AnimatedSection>
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
                    Industry · {meta?.shortLabel ?? "Sector"}
                  </span>
                </div>

                <h1 className="mt-6 h-display text-white">{industry.title}</h1>
                <p className="mt-6 body-lead text-gray-400">
                  {industry.heroDescription}
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
                      {industry.ctaButton}
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.span>
                  <Link
                    href="/industries"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 rounded-full text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                  >
                    All industries
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — spec card */}
            {meta && (
              <AnimatedSection direction="right" className="lg:col-span-5">
                <div
                  className="relative rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-7 lg:p-8 overflow-hidden"
                  style={{ boxShadow: `0 30px 60px -20px ${accent}30` }}
                >
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-[0.18] pointer-events-none"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="relative">
                    <p className="eyebrow" style={{ color: accent }}>
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
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
                        <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
                          Typical engagement
                        </p>
                        <p className="mt-1 text-white text-sm font-semibold">
                          {meta.typicalEngagement}
                        </p>
                      </div>
                    </div>

                    {/* Top focus */}
                    <div className="mt-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">
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

      {/* dark → light */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      {/* ───────── Challenges ───────── */}
      <section className="py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-400/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow text-rose-500/80">Common challenges</p>
              <h2 className="mt-3 h-section text-deep-blue">
                What teams in this sector{" "}
                <span className="gradient-text-dark">keep running into.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
                The friction we hear about most often. If any of these feel
                familiar, you&apos;re definitely not alone.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {industry.challenges.map((challenge, i) => {
              const [title, ...descParts] = challenge.split(": ");
              const desc = descParts.join(": ");
              return (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35 }}
                    className="group relative h-full p-6 rounded-2xl bg-white border border-deep-blue/[0.07] hover:shadow-[0_20px_40px_-16px_rgba(244,63,94,0.25)] transition-all duration-500 overflow-hidden"
                  >
                    <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full bg-rose-400/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-105">
                        <svg className="w-5 h-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="h-card text-deep-blue mb-1">{title}</h3>
                        {desc && <p className="text-sm text-deep-blue/65 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* light → dark */}
      <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />

      {/* ───────── Solutions ───────── */}
      <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: `${accent}10` }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12">
            <AnimatedSection className="lg:col-span-7">
              <p className="eyebrow" style={{ color: accent }}>
                What we deliver
              </p>
              <h2 className="mt-3 h-section text-white">
                {industry.solutionsHeading}
              </h2>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-5" delay={0.1}>
              <p className="body-base text-gray-400 max-w-md lg:ml-auto">
                Vetted patterns from past projects. We bring these to the
                table — your job is to tell us what matters most.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {industry.solutions.map((solution, i) => {
              const [title, ...descParts] = solution.split(": ");
              const desc = descParts.join(": ");
              return (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="group relative h-full p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
                    style={
                      {
                        "--card-glow": `${accent}55`,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: `${accent}22` }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ borderColor: `${accent}33` }}
                    />
                    <div className="relative flex gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        style={{
                          backgroundColor: `${accent}15`,
                          border: `1px solid ${accent}30`,
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={accent} strokeWidth={2.4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="h-card text-white mb-1">{title}</h3>
                        {desc && <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── Recent work in this industry (NEW) ───────── */}
      {recentWork.length > 0 && (
        <>
          <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />
          <section className="py-20 bg-light-accent relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
              style={{ backgroundColor: `${accent}0A` }}
            />

            <div className="relative max-w-7xl mx-auto px-6">
              <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
                <p className="eyebrow" style={{ color: accent }}>
                  Recent work in {meta?.shortLabel ?? "this sector"}
                </p>
                <h2 className="mt-3 h-section text-deep-blue">
                  Outcomes, not{" "}
                  <span className="gradient-text-dark">case-study fluff.</span>
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-5">
                {recentWork.map((cs, i) => (
                  <AnimatedSection key={cs.client} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="group relative h-full rounded-2xl bg-white border border-deep-blue/[0.07] overflow-hidden p-6 lg:p-7 flex flex-col transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_var(--card-glow)]"
                      style={
                        {
                          "--card-glow": `${accent}55`,
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
                        style={{ backgroundColor: accent }}
                      />

                      <span
                        className="self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                        style={{
                          color: accent,
                          borderColor: `${accent}40`,
                          backgroundColor: `${accent}0A`,
                        }}
                      >
                        {meta?.shortLabel ?? "Industry"}
                      </span>

                      <h3 className="mt-5 text-xl font-bold text-deep-blue tracking-tight">
                        {cs.client}
                      </h3>
                      <p className="mt-3 text-sm text-deep-blue/65 leading-relaxed flex-1">
                        {cs.summary}
                      </p>

                      <div className="mt-6 pt-5 border-t border-deep-blue/[0.07] flex items-baseline gap-3">
                        <span
                          className="text-3xl font-bold tracking-tight tabular-nums"
                          style={{ color: accent }}
                        >
                          {cs.metric}
                        </span>
                        <span className="text-deep-blue/55 text-xs">
                          {cs.metricLabel}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
          <SectionDivider fromColor={LIGHT} toColor={DEEP} kind="curve" />
        </>
      )}

      {/* ───────── Related industries (NEW) ───────── */}
      {related.length > 0 && (
        <section className="py-20 lg:py-24 bg-section-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" />

          <div className="relative max-w-7xl mx-auto px-6">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <p className="eyebrow text-neon-blue">Related sectors</p>
              <h2 className="mt-3 h-section text-white">
                Adjacent industries{" "}
                <span className="gradient-text">we work with.</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-5">
              {related.map((relSlug, i) => {
                const relMeta = industryMeta[relSlug];
                const relInfo = allIndustryTitles[relSlug];
                if (!relMeta || !relInfo) return null;
                return (
                  <AnimatedSection key={relSlug} delay={i * 0.08}>
                    <Link
                      href={`/industries/${relSlug}`}
                      className="group relative block h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-500 p-6"
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
                            {relMeta.shortLabel}
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
                          <span>Explore sector</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
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
        eyebrow={`Built for ${meta?.shortLabel ?? "this sector"}`}
        heading={<>{industry.ctaHeading}</>}
        description="We've shipped solutions for teams in this space — let's talk about yours."
        primaryLabel={industry.ctaButton}
        primaryHref="/contact"
        secondaryLabel="See all industries"
        secondaryHref="/industries"
      />
    </>
  );
}
