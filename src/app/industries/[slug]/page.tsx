"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

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

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = industriesData[slug];

  if (!industry) {
    return (
      <div className="pt-32 pb-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">Industry Not Found</h1>
          <p className="mt-4 text-gray-400">The industry page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/industries"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
          >
            Back to Industries
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
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-neon-blue transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-neon-blue transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-neon-blue">{industry.title}</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {industry.title}
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              {industry.heroDescription}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">Challenges</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-deep-blue">
              Industry <span className="gradient-text-dark">Pain Points</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, i) => {
              const [title, ...descParts] = challenge.split(": ");
              const desc = descParts.join(": ");
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="h-full p-6 rounded-2xl border border-deep-blue/5 bg-white/60 hover:bg-white hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-deep-blue mb-1">{title}</h3>
                        {desc && <p className="text-sm text-deep-blue/60 leading-relaxed">{desc}</p>}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-neon-blue">Solutions</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto">
              {industry.solutionsHeading}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, i) => {
              const [title, ...descParts] = solution.split(": ");
              const desc = descParts.join(": ");
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="h-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-neon-blue/20 transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{title}</h3>
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

      {/* CTA */}
      <section className="py-16 bg-light-accent">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative rounded-3xl border border-deep-blue/10 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue to-neon-purple/30" />
              <div className="absolute inset-0 grid-bg opacity-50" />

              <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
                  {industry.ctaHeading}
                </h2>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-bold text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 hover:scale-105"
                  >
                    {industry.ctaButton}
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
