"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Mobile App Development", href: "/services/mobile-application" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "UI / UX Design", href: "/services/ui-ux-design" },
        { label: "ML & AI Solutions", href: "/services/machine-learning-ai" },
        { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "FinTech", href: "/industries/fintech" },
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
    href: "https://www.linkedin.com/company/dev-inception/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dev_inception/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/devinceptionlimited?rdid=FwGQkJSJktRO3yRB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1QQSpPJGXP%2F#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      className={`${isLight
        ? "bg-white border-t border-gray-200"
        : "bg-deep-blue text-white border-t border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
             <Link href="/" className=" items-center justify-center">
            <Image
              src={isLight ? "/site_logo2.png" : "/site_logo.png"}
              alt="Dev Inception"
              width={75}
              height={75}
              className="h-30 w-24 object-contain"
            />
          </Link>

            {/* FIX: Consistent heading size in both themes */}
            <h2 className="mt-8 max-w-md text-2xl font-bold tracking-tight md:text-3xl">
              Have a project in mind? <span className="gradient-text-dark">Let's make it real.</span>
            </h2>

            {/* FIX: Consistent email link size in both themes */}
            <Link
              href="mailto:hello@devinception.com"
              className={`mt-6 inline-flex items-center gap-2 text-xl font-semibold tracking-tight md:text-2xl ${isLight
                ? "text-gray-900 hover:text-neon-purple"
                : "text-white hover:text-neon-blue"
                } transition-colors`}
            >
              info@devinception.com <ArrowRight size={18} />
            </Link>

            {/* FIX: Consistent paragraph size in both themes */}
            <p
              className={`mt-6 max-w-sm text-sm ${isLight ? "text-gray-600" : "text-gray-400"
                }`}
            >
              From strategy to systems — we build robust, scalable digital
              solutions tailored to your business.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 mt-3 md:col-span-7 md:grid-cols-4">
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

            {/* Social Column */}
            <div>
              <h4
                className={`text-sm font-bold tracking-wide ${isLight ? "text-gray-900" : "text-white"
                  }`}
              >
                Social
              </h4>
              <ul className="mt-4 space-y-2.5">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm transition-colors duration-200 inline-flex items-center gap-2 ${isLight
                        ? "text-gray-600 hover:text-neon-purple"
                        : "text-gray-400 hover:text-neon-blue"
                        }`}
                    >
                      {/* {social.icon} */}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs ${isLight
            ? "border-gray-200 text-gray-600"
            : "border-white/10 text-gray-500"
            } md:flex-row md:items-center`}
        >
          <p>© {new Date().getFullYear()} Dev Inception. All rights reserved.</p>
          <p>Remote · with hubs in NYC, Dubai & Karachi</p>
        </div>
      </div>
    </footer>
  );
}