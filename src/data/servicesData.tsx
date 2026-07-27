import { ServiceData, ServiceMeta } from "@/app/services/[slug]/ServiceClient";



export const servicesData: Record<string, ServiceData> = {
  "digital-marketing": {
    title: "Digital Marketing Services",
    subtitle: "Performance-Led Marketing for Measurable ROI",
    description: "We help organizations attract qualified audiences, generate demand, and drive revenue growth through data-driven marketing. From SEO and paid acquisition to content and conversion optimization, we build scalable systems for sustainable lifecycle growth.",
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



export const serviceMeta: Record<string, ServiceMeta> = {
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
    accent: "#0097A7",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
};