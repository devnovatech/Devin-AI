// data/homePage.ts
import { Pillar } from "@/components/About";
import { Industry } from "@/components/Industries";
import { Service } from "@/components/Services";
import { Category } from "@/components/TechStack";
import { Stage } from "@/components/WorkingProcess";
import { Brain, ClipboardList, Globe, Megaphone, Palette, Shield, ShoppingBag, Smartphone, Users } from "lucide-react";
import { ReactNode, Key } from "react";

// ───────── About US DATA ─────────
export const pillars: Pillar[] = [
  {
    title: "Intelligent by default",
    description: "Our solutions combine intelligent automation, data-driven capabilities, and modern engineering to deliver measurable performance—not merely basic functionality.",
    accent: "#1E88E5",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    title: "Architecture that scales",
    description: "Cloud-native foundations and modern infrastructure designed to grow with your business—without creating operational or technical constraints.",
    accent: "#0288D1",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];

// ───────── INDUSTRIES DATA ─────────
export const industries: Industry[] = [
  {
    name: "SaaS & Tech Startups",
    shortLabel: "SaaS",
    slug: "saas-startups",
    description: "From early-stage MVPs to rapidly growing platforms, we deliver scalable digital products with the speed startups need and the engineering discipline required for long-term growth.",
    accent: "#0277BD",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    challenges: [
      "Accelerating time to market without accumulating technical debt",
      "Establishing scalable architecture from the outset",
    ],
    deliverables: [
      "Production-ready MVPs designed, developed, and launched efficiently",
      "Cloud-native infrastructure engineered to scale with demand",
    ],
  },
  {
    name: "E-commerce & Retail",
    shortLabel: "E-commerce",
    slug: "ecommerce-retail",
    description: "We deliver high-performance commerce platforms with conversion-focused storefronts, secure checkout experiences, and scalable inventory operations—designed to strengthen customer trust and drive revenue growth.",
    accent: "#4fc3f7",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>,
    challenges: [
      "Reducing cart abandonment and checkout friction",
      "Maintaining payment security and PCI DSS compliance",
    ],
    deliverables: [
      "Conversion-optimized storefronts and checkout journeys",
      "Headless commerce solutions built on Shopify or custom platforms",
    ],
  },
  {
    name: "Healthcare & Healthtech",
    shortLabel: "Healthcare",
    slug: "healthcare",
    description: "We build secure healthcare platforms, telemedicine solutions, and patient management systems designed around regulatory requirements, clinical workflows, and seamless user experiences.",
    accent: "#00ACC1",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    challenges: [
      "Meeting HIPAA and healthcare data-privacy requirements",
      "Integrating fragmented EHR platforms and legacy systems",
    ],
    deliverables: [
      "Secure healthcare platforms with access controls, audit trails, and compliance-ready architecture",
      "Telemedicine solutions and EHR API integrations",
    ],
  },
  {
    name: "Education & EdTech",
    shortLabel: "Education",
    slug: "education",
    description: "We build interactive learning platforms, content delivery systems, and student-engagement tools designed for accessibility, measurable learning outcomes, and reliable performance at scale.",
    accent: "#1E88E5",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    challenges: [
      "Improving learner engagement and course-completion rates",
      "Supporting accessibility across diverse learner needs",
    ],
    deliverables: [
      "Custom learning platforms with analytics, assessments, and progress tracking",
      "Accessible experiences designed in alignment with WCAG standards",
    ],
  },
];



// ───────── SERVICES DATA ─────────
export const services: Service[] = [
  {
    title: "Mobile Engineering",
    slug: "mobile-application",
    tagline: "Native and cross-platform apps",
    accent: "#0097A7",
    category: "Build",
    description:
      "Designing and developing intuitive, high-performance mobile applications built for reliability, scalability, and seamless user experiences across iOS and Android.",

    stack: [
      "Flutter", "React Native", "Swift", "Kotlin"
    ],
    icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "Web Platforms",
    slug: "web-development",
    tagline: "From marketing sites to full-stack products",
    accent: "#006064",
    category: "Build",
    description:
      "Creating responsive, scalable web solutions that deliver dependable performance and seamless user experiences.",
    stack: ["React", "Next.js", "Node.js", "Express"],
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
    {
    title: "AI & ML Engineering",
    slug: "machine-learning-ai",
    tagline: "Production-grade intelligence",
    accent: "#1E88E5",
    category: "Build",
    description:
      "Delivering end-to-end AI and machine learning solutions—from data engineering and model development to deployment, integration, and production optimization.",

    stack: ["OpenAI APIs", "TensorFlow", "PyTorch", "Python"],
    icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "E-commerce Solutions",
    slug: "E-commerce",
    tagline: "Conversion-tuned storefronts",
    accent: "#0097A7",
    category: "Build",
    description:
      "Developing secure, scalable, and optimized online stores that improve user experience, increase conversions, and support business growth.",

    stack: ["Shopify", "WooCommerce", "Magento", "Stripe"
    ],
    icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Research-led UI/UX that converts",
    accent: "#1565C0",
    category: "Design",
    description:
      "Creating intuitive digital experiences that improve usability, strengthen engagement, and support business goals.",
    stack: [
      "Figma", "Adobe XD", "Sketch", "FigJam"
    ],
    icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "Software Quality Assurance",
    slug: "quality-assurance",
    tagline: "Ship with confidence, not surprises",
    accent: "#039BE5",
    category: "OPS",
    description:
      "Ensuring reliable, high-quality software through rigorous manual and automated testing, continuous validation, and proactive defect prevention.",
    stack: [
      "Selenium", "Cypress", "Playwright", "Postman"
    ],
    icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    tagline: "Senior engineers on demand",
    accent: "#0288D1",
    category: "OPS",
    description:
      "Providing skilled software professionals who integrate seamlessly with your team, expand delivery capacity, and accelerate project execution.",
    stack: [
      "Python", "Java", "React", "Node.js"
    ],
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    tagline: "Measurable growth, not vanity",
    accent: "#0277BD",
    category: "Grow",
    description:
      "Creating data-driven digital strategies that strengthen brand visibility, generate qualified leads, and drive measurable business growth.",

    stack: ["Google Ads", "Meta Ads Manager", "Ahrefs", "HubSpot"
    ], icon: <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
  {
    title: "Project Management",
    slug: "project-management",
    tagline: "Agile delivery, executive clarity",
    accent: "#01579B",
    category: "OPS",
    description:
      "Driving successful delivery through structured planning, agile execution, proactive risk management, and clear stakeholder communication.",
    stack: [
      "Jira", "Trello", "Asana", "ClickUp"
    ],
    icon: <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5" />,
  },
];

// ───────── TECH STACK DATA ─────────
export const STACK: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    tools: [
      { name: "Next.js", abbr: "N" },
      { name: "React", abbr: "R" },
      { name: "TypeScript", abbr: "TS" },
      { name: "Tailwind CSS", abbr: "Tw" },
      { name: "Vue", abbr: "V" },
      { name: "Svelte", abbr: "Sv" },
      { name: "Astro", abbr: "As" },
      { name: "Remix", abbr: "Rx" },
      { name: "Vite", abbr: "Vt" },
      { name: "Storybook", abbr: "Sb" },
      { name: "Tanstack Query", abbr: "Tq" },
      { name: "tRPC", abbr: "tR" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tools: [
      { name: "Node.js", abbr: "N" },
      { name: "Python", abbr: "Py" },
      { name: "Go", abbr: "Go" },
      { name: "Rust", abbr: "Ru" },
      { name: "Java", abbr: "Ja" },
      { name: "Kotlin", abbr: "Kt" },
      { name: "Ruby on Rails", abbr: "Rb" },
      { name: ".NET", abbr: ".N" },
      { name: "Elixir", abbr: "Ex" },
      { name: "GraphQL", abbr: "Gq" },
      { name: "REST APIs", abbr: "API" },
      { name: "FastAPI", abbr: "Fa" },
      { name: "Express", abbr: "Ex" },
      { name: "NestJS", abbr: "Nj" },
      { name: "Django", abbr: "Dj" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    tools: [
      { name: "PostgreSQL", abbr: "Pg" },
      { name: "MySQL", abbr: "My" },
      { name: "MongoDB", abbr: "Mg" },
      { name: "Redis", abbr: "Rd" },
      { name: "DynamoDB", abbr: "Dy" },
      { name: "Cassandra", abbr: "Cs" },
      { name: "Elasticsearch", abbr: "ES" },
      { name: "ClickHouse", abbr: "Ch" },
      { name: "Snowflake", abbr: "Sn" },
      { name: "BigQuery", abbr: "BQ" },
      { name: "Supabase", abbr: "Sp" },
      { name: "Firebase", abbr: "Fb" },
      { name: "Neo4j", abbr: "Ne" },
      { name: "DuckDB", abbr: "Dk" },
      { name: "SQLite", abbr: "Sl" },
      { name: "Cosmos DB", abbr: "Co" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    tools: [
      { name: "AWS", abbr: "aws" },
      { name: "GCP", abbr: "GCP" },
      { name: "Azure", abbr: "Az" },
      { name: "Vercel", abbr: "▲" },
      { name: "Cloudflare", abbr: "Cf" },
      { name: "Kubernetes", abbr: "K8s" },
      { name: "Docker", abbr: "Dk" },
      { name: "Terraform", abbr: "TF" },
      { name: "Pulumi", abbr: "Pu" },
      { name: "GitHub Actions", abbr: "GH" },
      { name: "GitLab CI", abbr: "GL" },
      { name: "Argo CD", abbr: "Ar" },
      { name: "Nginx", abbr: "Nx" },
      
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    tools: [
      { name: "Anthropic", abbr: "An" },
      { name: "OpenAI", abbr: "Ai" },
      { name: "Llama", abbr: "Ll" },
      { name: "LangGraph", abbr: "LG" },
      { name: "LangChain", abbr: "LC" },
      { name: "LlamaIndex", abbr: "Li" },
      { name: "Pinecone", abbr: "Pi" },
      { name: "Weaviate", abbr: "We" },
      { name: "Chroma", abbr: "Cr" },
      { name: "PyTorch", abbr: "Pt" },
      { name: "TensorFlow", abbr: "TF" },
      { name: "Hugging Face", abbr: "🤗" },
      { name: "Modal", abbr: "Mo" },
      { name: "Replicate", abbr: "Rp" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    tools: [
      { name: "Swift", abbr: "Sw" },
      { name: "Kotlin", abbr: "Kt" },
      { name: "React Native", abbr: "RN" },
      { name: "Expo", abbr: "Ex" },
      { name: "Flutter", abbr: "Fl" },
      { name: "Ionic", abbr: "Io" },
      { name: "Capacitor", abbr: "Cp" },
    ],
  },
  {
    id: "design",
    label: "Design",
    tools: [
      { name: "Figma", abbr: "F" },
      { name: "Framer", abbr: "Fr" },
      { name: "Rive", abbr: "Rv" },
      { name: "After Effects", abbr: "Ae" },
      { name: "Lottie", abbr: "Lo" },
      { name: "Principle", abbr: "Pr" },
      { name: "Spline", abbr: "Sp" },
    ],
  },
  {
    id: "observability",
    label: "Observability",
    tools: [
      { name: "Datadog", abbr: "DD" },
      { name: "Sentry", abbr: "Se" },
      { name: "Grafana", abbr: "Gf" },
      { name: "OpenTelemetry", abbr: "OT" },
      { name: "Prometheus", abbr: "Pm" },
      { name: "New Relic", abbr: "NR" },
      { name: "PostHog", abbr: "Ph" },
      { name: "Mixpanel", abbr: "Mx" },
      { name: "Amplitude", abbr: "Am" },
    ],
  },
];


// ───────── Testimonials DATA ─────────
export const MESSAGES = [
  {
    person: "Sarah Chen",
    role: "CTO",
    company: "FinFlow Technologies",
    avatar: "https://i.pravatar.cc/120?img=47",
    color: "#1E88E5",
    body: "Devinception turned our outdated platform into a modern, scalable product. Their team felt like an extension of ours — same goals and the same focus from week one.",
    reactions: ["🔥", "🚀"],
    metric: "Platform rebuild",
    time: "11:24 AM",
  },
  {
    person: "Marcus Rivera",
    role: "Founder & CEO",
    company: "HealthBridge",
    avatar: "https://i.pravatar.cc/120?img=12",
    color: "#0288D1",
    body: "From the first idea to launch, they delivered our mobile app on schedule, and the quality went beyond what we expected.",
    reactions: ["💯"],
    metric: "Mobile app launch",
    time: "11:31 AM",
  },
  {
    person: "Emily Larsson",
    role: "VP of Product",
    company: "ShopSphere",
    avatar: "https://i.pravatar.cc/120?img=44",
    color: "#0097A7",
    body: "Their AI team built a recommendation engine that made a real difference to our product. Genuinely excellent work.",
    reactions: ["👏", "✨"],
    metric: "AI recommendations",
    time: "11:42 AM",
  },
  {
    person: "David Park",
    role: "Engineering Manager",
    company: "CloudNine SaaS",
    avatar: "https://i.pravatar.cc/120?img=15",
    color: "#039BE5",
    body: "Team augmentation was exactly what we needed — skilled engineers who fit into our team and started contributing right away.",
    reactions: ["🎯"],
    metric: "Embedded engineers",
    time: "11:55 AM",
  },
];


// ───────── Why Us DATA ─────────
export const COMPARISONS = [
  {
    category: "Team seniority",
    them: "Junior labour pyramids — account manager shields the seniors after the pitch.",
    us: "The names on the proposal are the people responsible for delivery.",
  },
  {
    category: "Delivery cadence",
    them: "Quarterly status decks, weekly emails, surprises at handoff.",
    us: "See working software every Friday, with clear sprint progress, transparent burndown reporting, and dedicated preview environments.",
  },
  {
    category: "Scope changes",
    them: '"Sure, we can add it" → invoice surprises and slipped timelines.',
    us: "Structured change control with impact analysis and client sign-off—every change, every time.",
  },
  {
    category: "Architecture",
    them: "Built for handoff. Scales for the launch, not for the roadmap.",
    us: "Architecture and code engineered for significant growth, with defined performance budgets monitored and enforced throughout delivery.",
  },
  {
    category: "User focus",
    them: "Stakeholder-driven specs. Build it, ship it, hope it works.",
    us: "User research from day one. Usability validated before launch.",
  },
];


// ───────── Working process DATA ─────────
export const stages: Stage[] = [
  {
    number: "01",
    name: "Plan",
    accent: "#4FC3F7",
    bgMuted: "rgba(79, 195, 247, 0.18)",
    description:
      "We begin by understanding business goals, users, operational requirements, and technical constraints. Scope, success measures, priorities, and a clear delivery roadmap are established before design and development begin.",
    activities: ["Stakeholder interviews", "Tech & brand audit", "Success metrics", "Roadmap"],
    colStart: 1,
    colEnd: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l-2.5 5.5L8 16l2.5-5.5L16 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Design",
    accent: "#A78BFA",
    bgMuted: "rgba(167, 139, 250, 0.18)",
    description:
      "We design around real user needs and translate business requirements into clear, interactive prototypes. Every experience is built to be intuitive, accessible, consistent, and aligned with the product's objectives.",
    activities: ["UX research", "Design system", "Prototypes", "Motion & a11y"],
    colStart: 3,
    colEnd: 7,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l3.5 14.5L13 18l5-5-1.5-7.5L2 2z" />
        <circle cx="11" cy="11" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l7-7 3 3-7 7-3-3z" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Develop",
    accent: "#2DD4BF",
    bgMuted: "rgba(45, 212, 191, 0.18)",
    description:
      "We develop in focused two-week cycles with regular demonstrations and continuous stakeholder visibility. Each release is clean, tested, maintainable, and engineered for production readiness.",
    activities: ["Bi-weekly demos", "Staging envs", "CI/CD pipeline", "Pair programming"],
    colStart: 5,
    colEnd: 10,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    name: "Test",
    accent: "#10B981",
    bgMuted: "rgba(16, 185, 129, 0.18)",
    description:
      "We rigorously validate functionality, quality, performance, security, compatibility, and accessibility before launch—reducing risk and enabling confident production releases.",
    activities: ["E2E + visual regression", "Performance budgets", "OWASP review", "WCAG-AA audit"],
    colStart: 7,
    colEnd: 11,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "05",
    name: "Deploy",
    accent: "#EF4444",
    bgMuted: "rgba(239, 68, 68, 0.18)",
    description:
      "We release to production through a controlled deployment process with monitoring, rollback safeguards, documentation, and operational handover in place.",
    activities: ["Zero-downtime deploy", "Rollback runbook", "Observability stack", "On-call setup"],
    colStart: 9,
    colEnd: 12,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    ),
  },
  {
    number: "06",
    name: "Support",
    accent: "#F59E0B",
    bgMuted: "rgba(245, 158, 11, 0.18)",
    description:
      "We continue supporting the product after launch through issue resolution, performance improvements, ongoing maintenance, regular reviews, and the delivery of new features as business needs evolve.",
    activities: ["On-call", "A/B program", "Growth", "Quarterly review"],
    colStart: 10,
    colEnd: 13,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l1.5 1.5L17 4M19 6l1 1" />
      </svg>
    ),
  },
];






// ───────── faqs  DATA ─────────
export const faqs = [
  {
    q: "How long does it take to build a custom mobile app?",
    a:
      "A custom mobile app typically takes 3\u20136 months depending on complexity, features, & platform (iOS, Android, or cross-platform). We provide clear timelines after the discovery phase.",
  },
  {
    q: "Can Dev Inception handle end-to-end mobile app development?",
    a:
      "Yes. From UI/UX design & prototyping to development, testing, deployment, & post-launch support, we offer full-cycle mobile app services.",
  },
  {
    q: "How can small businesses use AI in real-world applications?",
    a:
      "Small businesses can use AI for automation (e.g. chatbots), predictive analytics, fraud detection, recommendation engines, & data-driven personalization.",
  },
  {
    q: "Does Dev Inception build custom ML models from scratch?",
    a:
      "Yes, we develop custom machine learning models based on your use case\u2014whether it\u2019s computer vision, NLP, or recommendation systems\u2014and integrate them into your existing ecosystem.",
  },
  {
    q: "Can Dev Inception integrate third-party tools with my store?",
    a:
      "Yes. We integrate payment gateways, inventory systems, CRMs, email marketing tools, & analytics platforms to streamline your ecommerce operations.",
  },
  {
    q: "Does Dev Inception build custom websites or use templates?",
    a:
      "We build fully custom, scalable websites\u2014no off-the-shelf templates\u2014ensuring your site reflects your brand & technical requirements.",
  },
  {
    q: "Can you migrate or modernize an outdated website?",
    a:
      "Yes. We specialize in legacy system overhauls, CMS migrations & full-stack rebuilds using modern frameworks & performance-first practices.",
  },
  {
    q: "How do you ensure the design works for both web & mobile?",
    a:
      "We design responsively using adaptive layouts & scalable components, ensuring a seamless experience across all devices & screen sizes.",
  },
  {
    q: "What QA tools do you use?",
    a:
      "We use tools like Selenium, JMeter, BrowserStack, Appium, & Postman depending on the tech stack & testing needs.",
  },
  {
    q: "Can you test apps built by other developers?",
    a:
      "Yes. We offer independent QA services for products built elsewhere & provide detailed reports with reproducible bug logs & recommendations.",
  },
  {
    q: "What project management methodologies do you follow?",
    a:
      "We follow Agile, Scrum, or Kanban frameworks depending on project size & structure\u2014ensuring flexibility & transparency throughout delivery.",
  },
  {
    q: "How do you handle scope changes during development?",
    a:
      "We use change control processes to assess impact, re-estimate timelines, & get client approval before any scope shift is implemented.",
  },
];



