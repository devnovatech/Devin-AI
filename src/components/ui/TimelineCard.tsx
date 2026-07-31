"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TimelineItem {
  year: string;
  title: string;
  body: string;
  description: string;
  achievements: string[];
  icon?: ReactNode;
}

// All timeline data is defined here - enriched with more content
const timelineData: TimelineItem[] = [
  {
    year: "2010",
    title: "Founded",
    body: "Started as a small focused team turning complex ideas into production-ready systems.",
    description: "With just 5 passionate engineers, we set out to redefine how software gets built.",
    achievements: ["First client acquired", "MVP development framework", "Team of 5"]
  },
  {
    year: "2014",
    title: "First enterprise engagements",
    body: "Began partnering with mid-market and enterprise clients on critical infrastructure.",
    description: "Secured contracts with Fortune 500 companies for mission-critical systems.",
    achievements: ["Enterprise clients: 3", "Team grew to 25", "Revenue milestone"]
  },
  {
    year: "2018",
    title: "Multi-disciplinary expansion",
    body: "Grew into engineering, design and strategy teams shipping across industries.",
    description: "Expanded capabilities to offer end-to-end product development services.",
    achievements: ["Design team: 10", "Strategy consultants: 8", "Industries: 12"]
  },
  {
    year: "2020",
    title: "Pandemic acceleration",
    body: "Helped SMBs digitise overnight — supporting business continuity in turbulent times.",
    description: "Launched rapid digital transformation programs for 50+ SMBs.",
    achievements: ["SMB clients: 50+", "Digital products: 30", "Remote-first culture"]
  },
  {
    year: "2022",
    title: "AI / ML practice",
    body: "Stood up a dedicated ML and AI practice as production AI use-cases scaled.",
    description: "Built a specialized team of data scientists and ML engineers.",
    achievements: ["ML team: 15", "AI products: 8", "Patent applications: 3"]
  },
  {
    year: "2024",
    title: "Compliance baseline",
    body: "SOC 2 Type II + ISO 27001 certified. Procurement-ready for regulated industries.",
    description: "Achieved industry-standard security certifications for enterprise trust.",
    achievements: ["SOC 2 Type II", "ISO 27001", "Regulated clients: 10"]
  },
  {
    year: "2026",
    title: "Multi-hub delivery",
    body: "Operating across NYC, Dubai, Lahore and Berlin with 60+ senior specialists.",
    description: "Global delivery network enabling 24/7 development and client support.",
    achievements: ["Offices: 4", "Specialists: 60+", "Active projects: 25"]
  },
];

// Animation variants
const dotVariants = {
  inactive: { scale: 1, backgroundColor: "#374151" },
  active: {
    scale: 1.3,
    backgroundColor: "#4fc3f7",
    transition: { duration: 0.3 }
  },
  hover: { scale: 1.5 }
};

// Content animation variants
const contentVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.755, 0.05, 0.855, 0.06]
    }
  }
};

interface TimelineCardProps {
  className?: string;
  autoPlayDuration?: number;
  height?: string;
}

export function TimelineCard({
  className = "",
  autoPlayDuration = 4000,
  height = "h-full"
}: TimelineCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const progressWidth = Math.min(
    (activeIndex / (timelineData.length - 1)) * 100 +
    (100 / (timelineData.length - 1)) * (progress / 100),
    100
  );

  // Reset and start auto-play
  const startAutoPlay = () => {
    setIsAutoPlaying(true);
    setProgress(0);
  };

  // Handle dot click - pause auto-play briefly then resume
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Clear progress interval
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }

    // Resume auto-play after 3 seconds
    timeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 3000);
  };

  // Main auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || timelineData.length === 0) {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      return;
    }

    let startTime = Date.now();

    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(
        (elapsed / autoPlayDuration) * 100,
        100
      );

      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval.current!);

        if (activeIndex === timelineData.length - 1) {
          // Stay on the last point briefly
          setTimeout(() => {
            setActiveIndex(0);
            setProgress(0);
          }, 1000);
        } else {
          setActiveIndex((prev) => prev + 1);
          setProgress(0);
        }
      }
    }, 30);

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
    };
  }, [activeIndex, isAutoPlaying, autoPlayDuration]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const currentItem = timelineData[activeIndex] || timelineData[0];

  return (
    <motion.div
      className={`relative rounded-3xl border border-[#ffffff]/[0.08] p-8 shadow-2xl overflow-hidden ${height} flex flex-col bg-[#0a1628]/95 backdrop-blur-xl ${className}`}
      style={{
        boxShadow: "0 30px 60px -15px rgba(79, 195, 247, 0.3)",
        borderColor: "rgba(79, 195, 247, 0.3)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#4fc3f7]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[#4fc3f7]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#ffffff]/5 blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-4 flex-shrink-0 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-sm font-bold text-[#ffffff] flex items-center gap-3">
          <span className="w-1.5 h-5 bg-[#4fc3f7] rounded-full" />
          <span className="tracking-wider">OUR JOURNEY</span>
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#ffffff]/60 tracking-wider">
            {timelineData[0]?.year} — {timelineData[timelineData.length - 1]?.year}
          </span>
        </div>
      </motion.div>

      {/* Timeline with Progress Bar */}
      <div className="relative mb-4 flex-shrink-0 z-10">
        <div className="flex justify-between items-center px-1">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="text-[10px] font-semibold cursor-pointer transition-all relative"
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                color: activeIndex === index ? "#4fc3f7" : "rgba(255,255,255,0.4)",
                fontWeight: activeIndex === index ? 700 : 500,
              }}
              transition={{ duration: 0.3 }}
            >
              {item.year}
            </motion.div>
          ))}
        </div>

        <div className="relative mt-2 px-1">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#ffffff]/10 -translate-y-1/2 rounded-full" />

          {timelineData.length > 1 && (
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-[#4fc3f7] -translate-y-1/2 rounded-full"
              style={{
                width: `${(activeIndex / (timelineData.length - 1)) * 100}%`,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            />
          )}

          {timelineData.length > 1 && (
            <div
              className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 rounded-full overflow-hidden"
              style={{
                width: `${progressWidth}%`,
              }}
            >
              <div className="h-full bg-[#4fc3f7] rounded-full" />
            </div>
          )}

          <div className="relative flex justify-between">
            {timelineData.map((item, index) => (
              <motion.button
                key={index}
                className="relative z-10 w-5 h-5 rounded-full border-2 border-[#0a1628] shadow-lg focus:outline-none"
                variants={dotVariants}
                initial="inactive"
                animate={activeIndex === index ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => handleDotClick(index)}
                style={{
                  backgroundColor: activeIndex === index ? "#4fc3f7" : "#374151",
                  boxShadow: activeIndex === index ? "0 0 20px rgba(79, 195, 247, 0.3)" : "none",
                }}
              >
                {activeIndex === index && (
                  <>
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(79, 195, 247, 0.3) 0%, transparent 70%)",
                      }}
                    />
                    <span
                      className="absolute inset-0 rounded-full border border-[#ffffff]/20"
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content - Filled up with more information */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h4
                className="text-2xl font-bold text-[#ffffff] mb-2 leading-tight"
              >
                {currentItem.title}
              </motion.h4>

              <motion.p
                className="text-sm text-[#ffffff]/80 max-w-sm leading-relaxed mb-3"
              >
                {currentItem.body}
              </motion.p>

              <motion.p
                className="text-xs text-[#ffffff]/60 max-w-sm leading-relaxed mb-4"
              >
                {currentItem.description}
              </motion.p>

              {/* Achievements tags */}
              <motion.div
                className="flex flex-wrap gap-2 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentItem.achievements.map((achievement, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-[10px] font-medium text-[#4fc3f7] bg-[#4fc3f7]/10 border border-[#4fc3f7]/20 rounded-full"
                  >
                    {achievement}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}