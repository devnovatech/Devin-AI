"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";

// Import your service data titles and taglines
const serviceDropdownData = {
  "mobile-application": {
    title: "Mobile App Development",
    tagline: "Native & cross-platform apps people love using.",
  },
  "web-development": {
    title: "Web Development",
    tagline: "Fast, accessible, SEO-ready platforms.",
  },
  ecommerce: {
    title: "E-commerce Development",
    tagline: "Storefronts that convert and scale.",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Research-led design that converts.",
  },
  "machine-learning-ai": {
    title: "ML & AI Solutions",
    tagline: "Custom models, embedded into your stack.",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Strategy and content built on data.",
  },
  "quality-assurance": {
    title: "Quality Assurance",
    tagline: "Ship with confidence, not surprises.",
  },
  "project-management": {
    title: "Project Management",
    tagline: "Agile delivery without the chaos.",
  },
};

const industryDropdownData = {
  healthcare: {
    title: "Healthcare & HealthTech",
    tagline: "HIPAA-compliant platforms, telemedicine, and patient management."
  },
  fintech: {
    title: "FinTech",
    tagline: "Secure financial platforms with regulatory-ready architecture."
  },
  "ecommerce-retail": {
    title: "E-commerce & Retail",
    tagline: "Conversion-tuned storefronts and inventory at scale."
  },
  logistics: {
    title: "Logistics & Transportation",
    tagline: "Real-time tracking, fleet management, route optimization."
  },
  education: {
    title: "Education & EdTech",
    tagline: "Interactive learning platforms and student engagement tools."
  },
  "travel-hospitality": {
    title: "Travel & Hospitality",
    tagline: "Booking platforms and guest portals."
  },
  "saas-startups": {
    title: "SaaS & Tech Startups",
    tagline: "MVPs to scale-ups, speed without sacrificing architecture."
  },
};

const navLinks = [
  {
    label: "Our Services",
    href: "/services",
    dropdown: true,
    dropdownType: "services",
    align: "left",
    dropdownItems: Object.entries(serviceDropdownData).map(([slug, data]) => ({
      href: `/services/${slug}`,
      title: data.title,
      tagline: data.tagline,
    }))
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: true,
    dropdownType: "industries",
    align: "right",
    dropdownItems: Object.entries(industryDropdownData).map(([slug, data]) => ({
      href: `/industries/${slug}`,
      title: data.title,
      tagline: data.tagline,
    }))
  },
  { label: "About Us", href: "/about" },
  { label: "Talent Solutions", href: "/resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"left" | "right" | "center">("left");
  const [dropdownWidth, setDropdownWidth] = useState(600);
  const [expandedMobileItems, setExpandedMobileItems] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle window resize for dropdown width
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        setDropdownWidth(windowWidth - 40);
      } else if (windowWidth <= 1024) {
        setDropdownWidth(Math.min(500, windowWidth - 60));
      } else {
        setDropdownWidth(600);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced dropdown positioning logic
  useEffect(() => {
    if (openDropdown && triggerRefs.current[openDropdown]) {
      const trigger = triggerRefs.current[openDropdown];
      if (trigger) {
        const rect = trigger.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate available space
        const spaceLeft = rect.left;
        const spaceRight = windowWidth - rect.right;
        const dropdownHeight = 400;
        const spaceBelow = windowHeight - rect.bottom;
        const spaceAbove = rect.top;

        // Determine vertical positioning
        const shouldPositionAbove = spaceBelow < dropdownHeight && spaceAbove > spaceBelow;

        // Determine horizontal positioning with better tablet/laptop handling
        let horizontalPosition: "left" | "right" | "center" = "left";

        // Calculate centered position
        const triggerCenter = rect.left + rect.width / 2;
        const dropdownHalfWidth = dropdownWidth / 2;
        const centerLeft = triggerCenter - dropdownHalfWidth;
        const centerRight = triggerCenter + dropdownHalfWidth;

        // Check if centered position fits
        const fitsCentered = centerLeft >= 0 && centerRight <= windowWidth;

        if (windowWidth <= 1024) {
          // Tablet optimization
          if (fitsCentered) {
            horizontalPosition = "center";
          } else if (spaceRight < dropdownWidth && spaceLeft >= dropdownWidth) {
            horizontalPosition = "right";
          } else if (spaceRight >= dropdownWidth && spaceLeft < dropdownWidth) {
            horizontalPosition = "left";
          } else {
            // If neither side fits, use center with padding
            horizontalPosition = "center";
          }
        } else {
          // Desktop logic
          if (spaceRight < dropdownWidth && spaceLeft >= dropdownWidth) {
            horizontalPosition = "right";
          } else if (spaceLeft < dropdownWidth && spaceRight >= dropdownWidth) {
            horizontalPosition = "left";
          } else if (spaceRight < dropdownWidth && spaceLeft < dropdownWidth) {
            horizontalPosition = "center";
          }
        }

        setDropdownPosition(horizontalPosition);

        // Update dropdown style for vertical positioning
        const dropdown = document.querySelector(`[data-dropdown="${openDropdown}"]`) as HTMLElement;
        if (dropdown) {
          if (shouldPositionAbove) {
            dropdown.style.top = 'auto';
            dropdown.style.bottom = '100%';
            dropdown.style.marginTop = '0';
            dropdown.style.marginBottom = '8px';
          } else {
            dropdown.style.top = '100%';
            dropdown.style.bottom = 'auto';
            dropdown.style.marginTop = '8px';
            dropdown.style.marginBottom = '0';
          }
        }
      }
    }
  }, [openDropdown, dropdownWidth]);

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Function to get dropdown position classes
  const getDropdownPositionClasses = () => {
    switch (dropdownPosition) {
      case "right":
        return "right-0 left-auto";
      case "center":
        return "left-1/2 -translate-x-1/2";
      default:
        return "left-0 right-auto";
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX: progressX,
          backgroundColor: isLight ? "#1565c0" : "#4fc3f7"
        }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? isLight
              ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-deep-blue/5"
              : "bg-deep-blue/85 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image
              src={isLight ? "/site_logo2.png" : "/site_logo.png"}
              alt="Dev Inception Logo"
              width={72}
              height={72}
              priority
              className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center gap-1 lg:gap-2 relative" ref={dropdownRef}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const hasDropdown = link.dropdown && link.dropdownItems && link.dropdownItems.length > 0;

              // Same base text treatment for every link, dropdown or not,
              // so the styling logic is identical across the whole navbar.
              const baseText = active
                ? isLight
                  ? "text-gray-800"
                  : "text-white"
                : isLight
                  ? "text-gray-700 hover:text-neon-purple"
                  : "text-gray-300 hover:text-neon-blue";

              return (
                <div
                  key={link.href}
                  className="relative"
                  ref={(el) => {
                    if (el) {
                      triggerRefs.current[link.label] = el;
                    }
                  }}
                  onMouseEnter={() => hasDropdown && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 flex items-center gap-1 ${baseText}`}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                        handleDropdownClick(link.label);
                      }
                    }}
                  >
                    {/* Active pill now renders for every active link, whether or
                        not it has a dropdown attached — opening/closing the
                        dropdown no longer changes how the link itself looks. */}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full border ${isLight
                            ? "bg-neon-purple/10 border-neon-purple/20"
                            : "bg-white/10 border-white/15"
                          }`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {hasDropdown && (
                      <svg
                        className={`relative z-10 w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu - Desktop only */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          data-dropdown={link.label}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-2 rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200 ${getDropdownPositionClasses()}`}
                          style={{
                            width: dropdownWidth,
                            maxWidth: 'calc(100vw - 40px)',
                            boxShadow: "0 20px 60px -20px rgba(0,0,0,0.25)",
                            maxHeight: 'calc(100vh - 120px)',
                            overflowY: 'auto',
                          }}
                        >
                          <div className="surface-panel">
                            <div className="grid gap-1 p-3 grid-cols-2">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`group flex flex-col px-4 py-3 rounded-xl transition-all duration-200 ${pathname === item.href
                                      ? "bg-slate-800 border border-slate-600"
                                        : "hover:bg-slate-900 border border-transparent hover:border-slate-700"
                                    }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span
                                      className={`text-sm font-semibold transition-colors ${pathname === item.href
                                          ? "text-white"
                                          : "text-slate-900 group-hover:text-white"
                                        }`}
                                    >
                                      {item.title}
                                    </span>
                                  </div>
                                  <span
                                    className={`text-xs mt-0.5 line-clamp-2 transition-colors ${pathname === item.href
                                        ? "text-slate-300"
                                        : "text-slate-500 group-hover:text-slate-300"
                                      }`}
                                  >
                                    {item.tagline}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            <ThemeToggle className="ml-2" />

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2 bg-neon-blue rounded-xl text-sm font-semibold text-white hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Tablet & Mobile actions - Now visible on tablet too */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className={`p-2 ${isLight ? "text-deep-blue" : "text-white"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Tablet & Mobile Menu - Same for both tablet and mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden backdrop-blur-xl border-b overflow-hidden ${isLight
                  ? "bg-white/95 border-deep-blue/10"
                  : "bg-deep-blue/95 border-white/5"
                }`}
            >
              <div className="px-4 py-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) => {
                  const hasDropdown = link.dropdown && link.dropdownItems && link.dropdownItems.length > 0;
                  const isExpanded = expandedMobileItems.has(link.label);
                  const isActiveLink = isActive(link.href);

                  if (hasDropdown) {
                    return (
                      <div key={link.href} className="flex flex-col">
                        <button
                          onClick={() => toggleMobileItem(link.label)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${isLight
                              ? "text-deep-blue/80 hover:bg-deep-blue/[0.04] hover:text-deep-blue"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                            }`}
                        >
                          <span className="font-medium text-base">{link.label}</span>
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Mobile Dropdown - Matching desktop style with 2 columns on tablet, 1 on mobile */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-1 overflow-hidden"
                            >
                              <div className={`rounded-xl overflow-hidden ${isLight
                                  ? "bg-white/50 border border-deep-blue/10"
                                  : "bg-white/5 border border-white/10"
                                }`}>
                                <div className={`grid gap-1 p-2 ${typeof window !== 'undefined' && window.innerWidth >= 768
                                    ? 'grid-cols-2'
                                    : 'grid-cols-1'
                                  }`}>
                                  {link.dropdownItems.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setExpandedMobileItems(new Set());
                                      }}
                                      className={`group flex flex-col px-3 py-2.5 rounded-lg transition-all duration-200 ${pathname === item.href
                                          ? isLight
                                            ? "bg-deep-blue/[0.06] border border-deep-blue/20"
                                            : "bg-slate-800 border border-slate-600"
                                          : isLight
                                            ? "hover:bg-deep-blue/[0.04] border border-transparent hover:border-deep-blue/20"
                                            : "hover:bg-slate-900 border border-transparent hover:border-slate-700"
                                        }`}
                                    >
                                      <span
                                        className={`text-sm font-semibold transition-colors ${pathname === item.href
                                            ? isLight
                                              ? "text-deep-blue"
                                              : "text-white"
                                            : isLight
                                              ? "text-slate-900 group-hover:text-deep-blue"
                                              : "text-slate-200 group-hover:text-white"
                                          }`}
                                      >
                                        {item.title}
                                      </span>
                                      <span
                                        className={`text-xs mt-0.5 line-clamp-2 transition-colors ${pathname === item.href
                                            ? isLight
                                              ? "text-deep-blue/60"
                                              : "text-slate-300"
                                            : isLight
                                              ? "text-slate-500 group-hover:text-deep-blue/60"
                                              : "text-slate-400 group-hover:text-slate-300"
                                          }`}
                                      >
                                        {item.tagline}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl transition-colors ${isLight
                          ? isActiveLink
                            ? "bg-deep-blue/[0.06] text-deep-blue"
                            : "text-deep-blue/70 hover:bg-deep-blue/[0.04] hover:text-deep-blue"
                          : isActiveLink
                            ? "bg-white/10 text-white"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Contact button in mobile menu - styled like desktop */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-5 py-3 bg-neon-blue rounded-xl text-sm font-semibold text-white text-center hover:bg-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}