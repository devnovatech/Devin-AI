"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const linkColumns: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        {
          label: "Mobile App Development",
          href: "/services/mobile-application",
        },
        { label: "Web Development", href: "/services/web-development" },
        { label: "UI / UX Design", href: "/services/ui-ux-design" },
        {
          label: "ML & AI Solutions",
          href: "/services/machine-learning-ai",
        },
        {
          label: "Staff Augmentation",
          href: "/services/staff-augmentation",
        },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "All Industries", href: "/industries" },
        { label: "SaaS & Tech Startups", href: "/industries/saas-startups" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "E-commerce", href: "/industries/ecommerce-retail" },
        { label: "Logistics & Transportation", href: "/industries/logistics" },


      ],
    },
  ];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/devinception",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/devinception",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/devinception",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const { theme } = useTheme();
  const isLight = theme === "light";

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    if (!email.includes("@")) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => setSubscribed(false), 4000);
  }

  return (
    <footer
      className={`relative overflow-hidden border-t ${isLight
          ? "bg-white border-gray-200"
          : "bg-deep-blue border-white/5"
        }`}
    >
      {/* Decorative orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src={isLight ? "/site_logo2.png" : "/site_logo.png"}
                alt="Dev Inception"
                width={70}
                height={70}
                className="h-24 w-24 object-contain"
              />
            </Link>

            <p
              className={`mt-3 text-sm leading-relaxed max-w-xs ${isLight ? "text-gray-600" : "text-gray-400"
                }`}
            >
              From strategy to systems — we build robust, scalable digital
              solutions tailored to your business.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-6 max-w-sm">
              <label
                htmlFor="footer-email"
                className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${isLight ? "text-gray-700" : "text-white/80"
                  }`}
              >
                Stay in the loop
              </label>

              <div
                className={`flex items-stretch rounded-full overflow-hidden transition-colors ${isLight
                    ? "bg-gray-100 border border-gray-300 focus-within:border-neon-purple/50"
                    : "bg-white/[0.04] border border-white/10 focus-within:border-neon-blue/50"
                  }`}
              >
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 px-4 py-2.5 bg-transparent text-sm outline-none ${isLight
                      ? "text-gray-800 placeholder-gray-400"
                      : "text-white placeholder-gray-500"
                    }`}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-4 m-1 rounded-full bg-neon-blue text-white text-xs font-semibold hover:bg-neon-purple transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>

              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-emerald-500"
                >
                  ✓ Thanks — you&apos;re on the list.
                </motion.p>
              )}
            </form>
          </div>

          {/* Link columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <h4
                  className={`text-sm font-bold tracking-wide ${isLight ? "text-gray-900" : "text-white"
                    }`}
                >
                  {col.title}
                </h4>

                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors duration-200 ${isLight
                            ? "text-gray-600 hover:text-neon-purple"
                            : "text-gray-400 hover:text-neon-blue"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isLight ? "border-gray-200" : "border-white/5"
            }`}
        >
          <p
            className={`text-xs order-2 sm:order-1 ${isLight ? "text-gray-600" : "text-gray-500"
              }`}
          >
            &copy; {new Date().getFullYear()} Dev Inception. All rights
            reserved.
          </p>

          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isLight
                    ? "border border-gray-300 text-gray-600 hover:text-neon-purple hover:border-neon-purple/40 hover:bg-neon-purple/10"
                    : "border border-white/10 text-gray-400 hover:text-white hover:border-neon-blue/40 hover:bg-neon-blue/10"
                  }`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 order-3 text-xs">
            <Link
              href="/privacy"
              className={`transition-colors ${isLight
                  ? "text-gray-600 hover:text-neon-purple"
                  : "text-gray-500 hover:text-neon-blue"
                }`}
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className={`transition-colors ${isLight
                  ? "text-gray-600 hover:text-neon-purple"
                  : "text-gray-500 hover:text-neon-blue"
                }`}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}