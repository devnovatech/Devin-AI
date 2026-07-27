"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

import { linkColumns, socialLinks } from "@/data/homePageData"; 


export default function Footer() {
  const [email, setEmail] = useState("");

  const { theme } = useTheme();
  const isLight = theme === "light";


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
            <Link href="/" className="items-center justify-center inline-block">
              {/* FIX: Fixed container with consistent size */}
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={isLight ? "/site_logo2.png" : "/site_logo.png"}
                  alt="Dev Inception"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* FIX: Consistent heading size in both themes */}
            <h2 className="mt-8 max-w-md text-2xl font-bold tracking-tight md:text-3xl">
              Have a project in mind? <span className="gradient-text">Let's make it real.</span>
            </h2>

            {/* FIX: Consistent email link size in both themes */}
            <Link
              href="mailto:info@devinception.com"
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
  className={`mt-14 flex flex-col border-t pt-6 text-xs ${
    isLight
      ? "border-gray-200 text-gray-600"
      : "border-white/10 text-gray-500"
  } md:flex-row md:items-center md:justify-between`}
>
  <p>© {new Date().getFullYear()} Dev Inception. All rights reserved.</p>

  <div className="mt-4 flex gap-6 md:mt-0">
    <Link href="/privacy">Privacy Policy</Link>
    <Link href="/terms">Terms and Conditions</Link>
  </div>
</div>
      </div>
    </footer>
  );
}