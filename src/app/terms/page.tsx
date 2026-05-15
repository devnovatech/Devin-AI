"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/ui/SectionDivider";
import CTABanner from "@/components/CTABanner";

const DEEP = "var(--section-deep)";
const LIGHT = "var(--section-light)";

const LAST_UPDATED = "May 13, 2025";

const pillars = [
  {
    title: "Fairness",
    description:
      "Our terms are built around mutual respect — clear scope, fair pricing, and no hidden conditions.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Clarity",
    description:
      "We write in plain language so you know exactly what you're agreeing to — no surprise legalese.",
    accent: "#0288D1",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description:
      "We stand behind our work and our commitments. Disputes are rare — and when they happen, we resolve them quickly.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: "By accessing or using Dev Inception's website, products, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and clients who access or use our services.",
  },
  {
    id: "services",
    title: "Description of Services",
    body: "Dev Inception is a global engineering studio that provides software development, design, AI/ML, and growth services to businesses. The specific scope, deliverables, and timeline of any engagement will be defined in a separate written agreement (Statement of Work) signed by both parties before work begins.",
  },
  {
    id: "engagement",
    title: "Project Engagement & Scope",
    body: "Each engagement begins with a Discovery phase. After Discovery, we provide a written Statement of Work that defines scope, milestones, timeline, and pricing. Changes to scope require a written change order and may impact timeline and pricing. We commit to weekly progress demos and transparent communication throughout the engagement.",
  },
  {
    id: "payment",
    title: "Payment Terms",
    body: "Payment terms, pricing model (fixed-price or time-and-materials), and milestone schedule are defined in the Statement of Work. Invoices are typically issued at agreed milestones with net-15 payment terms unless otherwise specified. Late payments may incur interest charges, and we reserve the right to pause work for accounts more than 30 days past due.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: "Upon final payment, all custom-developed code, designs, and deliverables produced specifically for your project become your property, transferred via the Statement of Work. We retain rights to general methodologies, frameworks, pre-existing tools, and reusable components developed independently of your project. We may showcase non-confidential work in our portfolio with your prior written consent.",
  },
  {
    id: "confidentiality",
    title: "Confidentiality & NDA",
    body: "We treat all client information as confidential. We are willing to sign a mutual Non-Disclosure Agreement (NDA) before Discovery begins. Our team is bound by internal confidentiality agreements, and we use industry-standard security practices to protect client information. We do not share client data, code, or business details with third parties without consent.",
  },
  {
    id: "user-conduct",
    title: "Acceptable Use",
    body: "When engaging with our services, you agree not to use them for any unlawful purpose, attempt to gain unauthorized access to our systems, infringe on intellectual property rights, harass our team members, or use our services to develop products that violate applicable laws. We reserve the right to refuse or terminate engagements that violate these conditions.",
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    body: 'Our services are provided "as is" without warranties of any kind, express or implied, except as explicitly stated in your Statement of Work. We do not warrant that our services will be uninterrupted, error-free, or fit for any particular purpose beyond what is documented in the agreement. Specific warranties — including bug-fix windows and post-launch support — are defined per-engagement.',
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Dev Inception's total liability arising from any engagement shall not exceed the total fees paid by the client for that engagement. We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits or business interruption. This limitation applies regardless of the legal theory under which damages are sought.",
  },
  {
    id: "termination",
    title: "Termination",
    body: "Either party may terminate an engagement with written notice as defined in the Statement of Work (typically 30 days). Upon termination, the client is responsible for payment for all work completed up to the termination date. We will provide reasonable handover documentation and cooperate with any transition. These terms survive termination where required by their nature.",
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    body: "These terms are governed by the laws of the jurisdiction specified in your Statement of Work. We commit to good-faith negotiation as the first step in resolving any dispute. If negotiation fails, disputes will be resolved through binding arbitration or in the courts specified in the engagement agreement.",
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: "We may update these Terms of Service from time to time to reflect changes in our practices, services, or for legal reasons. We will post the updated terms on this page and update the effective date. Continued use of our services after changes are posted constitutes acceptance of the updated terms. For active engagements, the terms in effect at the time of Statement of Work signing apply unless otherwise agreed.",
  },
  {
    id: "contact",
    title: "Contact Us",
    body: "If you have any questions about these Terms of Service, please contact us at info@devinception.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                Terms of Service
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[11px] text-gray-400">
                Last updated {LAST_UPDATED}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              className="mt-7 font-bold tracking-[-0.025em] leading-[0.98] text-white"
              style={{ fontSize: "clamp(2.5rem, 5vw + 0.25rem, 4.5rem)" }}
            >
              Fair, clear, and{" "}
              <span className="gradient-text glow-text">in plain English.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
              These terms govern your use of Dev Inception&apos;s website,
              products, and services. We&apos;ve written them to be readable —
              if anything is unclear, just ask.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* dark → light */}
      <SectionDivider fromColor={DEEP} toColor={LIGHT} kind="wave" />

      {/* ───────── Pillars ───────── */}
      <section className="py-16 lg:py-20 bg-light-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div
                  className="group relative h-full p-7 rounded-2xl bg-white border border-deep-blue/[0.07] hover:shadow-[0_24px_48px_-16px_var(--card-glow)] transition-all duration-500 overflow-hidden"
                  style={
                    {
                      "--card-glow": `${p.accent}55`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-[0.18] group-hover:opacity-[0.32] transition-opacity duration-500"
                    style={{ backgroundColor: p.accent }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white relative"
                    style={{
                      backgroundColor: p.accent,
                      boxShadow: `0 12px 28px -10px ${p.accent}80`,
                    }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="mt-5 h-card text-deep-blue">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-deep-blue/65 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Long-form content with sticky TOC ───────── */}
      <section className="pb-20 lg:pb-24 bg-light-accent relative">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sticky TOC */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28">
                <p className="eyebrow text-neon-purple mb-4">On this page</p>
                <nav className="flex flex-col gap-1.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-center gap-2 text-sm text-deep-blue/60 hover:text-deep-blue py-1.5 transition-colors"
                    >
                      <span className="w-3 h-px bg-deep-blue/20 group-hover:w-5 group-hover:bg-neon-blue transition-all duration-300" />
                      <span>{s.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <AnimatedSection>
                <div className="rounded-2xl bg-white border border-deep-blue/[0.07] p-7 lg:p-10 shadow-xl shadow-deep-blue/5">
                  {/* Intro paragraph */}
                  <div className="pb-8 mb-2 border-b border-deep-blue/[0.08]">
                    <p className="body-lead text-deep-blue/70">
                      These Terms of Service (&ldquo;Terms&rdquo;) govern your
                      access to and use of services provided by Dev Inception
                      (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).
                      They apply alongside any signed Statement of Work, which
                      takes precedence on engagement-specific details.
                    </p>
                  </div>

                  {sections.map((s, i) => (
                    <article
                      key={s.id}
                      id={s.id}
                      className="py-8 border-b border-deep-blue/[0.06] last:border-0 scroll-mt-28"
                    >
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-xs font-mono text-neon-blue tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl lg:text-2xl font-bold text-deep-blue tracking-tight">
                          {s.title}
                        </h2>
                      </div>
                      <p className="text-deep-blue/70 leading-relaxed">
                        {s.id === "contact" ? (
                          <>
                            If you have any questions about these Terms of
                            Service, please contact us at{" "}
                            <a
                              href="mailto:info@devinception.com"
                              className="text-neon-blue hover:underline font-semibold"
                            >
                              info@devinception.com
                            </a>
                            .
                          </>
                        ) : (
                          s.body
                        )}
                      </p>
                    </article>
                  ))}

                  {/* Footer note */}
                  <div className="mt-2 pt-6 flex items-center justify-between text-sm text-deep-blue/50">
                    <span>Last updated: {LAST_UPDATED}</span>
                    <Link
                      href="/privacy"
                      className="text-neon-blue hover:underline font-semibold"
                    >
                      View Privacy Policy →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <CTABanner
        eyebrow="Questions?"
        heading={
          <>
            Need clarification on something?{" "}
            <span className="gradient-text">Just reach out.</span>
          </>
        }
        description="A real human reads every message and replies within 24 hours — no salespeople, no follow-up calls until you're ready."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Read privacy policy"
        secondaryHref="/privacy"
      />
    </>
  );
}
