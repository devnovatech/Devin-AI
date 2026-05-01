"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How long does it take to build a custom mobile app?",
    answer:
      "A custom mobile app typically takes 3\u20136 months depending on complexity, features, & platform (iOS, Android, or cross-platform). We provide clear timelines after the discovery phase.",
  },
  {
    question: "Can Dev Inception handle end-to-end mobile app development?",
    answer:
      "Yes. From UI/UX design & prototyping to development, testing, deployment, & post-launch support, we offer full-cycle mobile app services.",
  },
  {
    question: "How can small businesses use AI in real-world applications?",
    answer:
      "Small businesses can use AI for automation (e.g. chatbots), predictive analytics, fraud detection, recommendation engines, & data-driven personalization.",
  },
  {
    question: "Does Dev Inception build custom ML models from scratch?",
    answer:
      "Yes, we develop custom machine learning models based on your use case\u2014whether it\u2019s computer vision, NLP, or recommendation systems\u2014and integrate them into your existing ecosystem.",
  },
  {
    question: "Can Dev Inception integrate third-party tools with my store?",
    answer:
      "Yes. We integrate payment gateways, inventory systems, CRMs, email marketing tools, & analytics platforms to streamline your ecommerce operations.",
  },
  {
    question: "Does Dev Inception build custom websites or use templates?",
    answer:
      "We build fully custom, scalable websites\u2014no off-the-shelf templates\u2014ensuring your site reflects your brand & technical requirements.",
  },
  {
    question: "Can you migrate or modernize an outdated website?",
    answer:
      "Yes. We specialize in legacy system overhauls, CMS migrations & full-stack rebuilds using modern frameworks & performance-first practices.",
  },
  {
    question: "How do you ensure the design works for both web & mobile?",
    answer:
      "We design responsively using adaptive layouts & scalable components, ensuring a seamless experience across all devices & screen sizes.",
  },
  {
    question: "What QA tools do you use?",
    answer:
      "We use tools like Selenium, JMeter, BrowserStack, Appium, & Postman depending on the tech stack & testing needs.",
  },
  {
    question: "Can you test apps built by other developers?",
    answer:
      "Yes. We offer independent QA services for products built elsewhere & provide detailed reports with reproducible bug logs & recommendations.",
  },
  {
    question: "What project management methodologies do you follow?",
    answer:
      "We follow Agile, Scrum, or Kanban frameworks depending on project size & structure\u2014ensuring flexibility & transparency throughout delivery.",
  },
  {
    question: "How do you handle scope changes during development?",
    answer:
      "We use change control processes to assess impact, re-estimate timelines, & get client approval before any scope shift is implemented.",
  },
];

const INITIAL_FAQ_COUNT = 5;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_FAQ_COUNT);

  return (
    <section id="faq" className="py-16 relative bg-light-accent">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-neon-purple">
            Got Questions?
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-blue">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <div className="space-y-4" role="list">
          {visibleFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i < INITIAL_FAQ_COUNT ? i * 0.03 : 0}>
                <div
                  className="rounded-2xl border border-deep-blue/5 bg-white/60 overflow-hidden backdrop-blur-sm"
                  role="listitem"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="text-deep-blue font-semibold pr-4">
                      {faq.question}
                    </span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-deep-blue flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-deep-blue/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {faqs.length > INITIAL_FAQ_COUNT && (
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 border border-deep-blue/20 rounded-full text-deep-blue font-semibold text-sm hover:bg-deep-blue hover:text-white transition-all duration-300"
            >
              {showAll ? "Show Less" : `View More`}
              <motion.svg
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
