"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Support() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      errs.email = "Invalid email address";
    if (!formState.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-white/5 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-dark-surface to-neon-purple/10" />
            <div className="absolute inset-0 grid-bg opacity-50" />

            <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="mt-4 text-gray-400 text-lg">
                    We&apos;ve received your message and will get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-neon-blue hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Info */}
                  <div className="text-center lg:text-left">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center"
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      Let&apos;s Build
                      <br />
                      <span className="gradient-text">Together</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
                      Need help with your next big idea? Our team is ready to
                      build with you.
                    </p>

                    <div className="mt-8 space-y-4 text-left max-w-md mx-auto lg:mx-0">
                      <div className="flex items-center gap-3 text-gray-400">
                        <svg className="w-5 h-5 text-neon-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        hello@devinception.com
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <svg className="w-5 h-5 text-neon-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Response within 24 hours
                      </div>
                    </div>
                  </div>

                  {/* Right: Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.05] border ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-neon-blue/50"
                        } text-white placeholder-gray-500 outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email *"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.05] border ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-neon-blue/50"
                        } text-white placeholder-gray-500 outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company (Optional)"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/10 focus:border-neon-blue/50 text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message *"
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className={`w-full px-5 py-4 rounded-xl bg-white/[0.05] border ${
                          errors.message
                            ? "border-red-500/50"
                            : "border-white/10 focus:border-neon-blue/50"
                        } text-white placeholder-gray-500 outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-bold tracking-wider text-sm hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300"
                    >
                      Send Message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
