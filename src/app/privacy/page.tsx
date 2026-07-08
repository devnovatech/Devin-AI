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
    title: "Data Protection",
    description:
      "We implement robust security measures to safeguard your personal information and maintain your trust in our services.",
    accent: "#1E88E5",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We are committed to clear and open communication about how we collect, use, and share your information.",
    accent: "#0288D1",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "User Control",
    description:
      "We provide tools and options that allow you to control how your information is used throughout our services.",
    accent: "#00ACC1",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const sections = [
  {
    id: "information-collection",
    title: "Information Collection",
    body: "Dev Inception collects personal information such as your name, email address, and usage data when you use our software and services. We collect this information when you register for an account, use our products, contact our support team, or interact with our website. This information helps us provide, maintain, and improve our services, as well as communicate with you about updates and features.",
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: "We use your information to provide and improve our software services, process transactions, send you administrative information, and respond to your inquiries. We may also use your information to personalize your experience, develop new features, and send you marketing communications about products and services that may interest you (with your consent where required by law).",
  },
  {
    id: "sharing-disclosure",
    title: "Information Sharing and Disclosure",
    body: "Dev Inception does not sell your personal information to third parties. We may share your information with trusted service providers who help us operate our business, with your consent, or when required by law. Our service providers are bound by confidentiality agreements and are not permitted to use your personal information for any purpose other than providing services to Dev Inception.",
  },
  {
    id: "data-security",
    title: "Data Security",
    body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.",
  },
  {
    id: "rights-choices",
    title: "Your Rights and Choices",
    body: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data. You can update your account information at any time through your account settings. You may also opt out of receiving marketing communications from us by following the unsubscribe instructions included in each communication.",
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    body: "Our website and services may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling certain cookies may limit your ability to use some features of our services.",
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    body: "Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information.",
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the effective date at the top of this page.",
  },
  {
    id: "contact",
    title: "Contact Us",
    body: 'If you have any questions about this Privacy Policy or our data practices, please contact us at info@devinception.com.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="pt-32 pb-16 lg:pb-20 bg-section-dark relative overflow-hidden">
      
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px]" />
        <div className="noise-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <span className="text-[11px] font-semibold text-neon-blue tracking-wider uppercase">
                Privacy Policy
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
              Our commitment to{" "}
              <span className="gradient-text glow-text">your privacy.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-7 body-lead text-gray-400 max-w-2xl mx-auto">
              At Dev Inception, we take your privacy seriously. Our privacy
              practices reflect our commitment to protecting your data while
              providing exceptional software solutions that help your business
              grow.
            </p>
          </AnimatedSection>
        </div>
      </section>

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
                      This Privacy Policy describes how Dev Inception
                      (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
                      collects, uses, and discloses your personal information
                      when you visit our website, use our software products, or
                      engage with our services. This policy applies to all
                      platforms, products, and services offered by Dev
                      Inception. By using our services, you agree to the
                      collection and use of information in accordance with this
                      policy.
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
                            If you have any questions about this Privacy Policy
                            or our data practices, please contact us at{" "}
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
                      href="/terms"
                      className="text-neon-blue hover:underline font-semibold"
                    >
                      View Terms of Service →
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
            Have a privacy question?{" "}
            <span className="gradient-text">We&apos;re here to help.</span>
          </>
        }
        description="Email us anytime — a real human reads every message and replies within 24 hours."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Read terms"
        secondaryHref="/terms"
      />
    </>
  );
}
