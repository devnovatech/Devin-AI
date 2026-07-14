"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MESSAGES = [
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

export default function Testimonials() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-14 lg:py-16 relative overflow-hidden bg-section-testimonials">
      {/* Animated blooms */}
      <motion.div
        className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-neon-purple/8 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-blue/8 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <div className="absolute inset-0 dotted-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end mb-7 lg:mb-9">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-deep-blue/10 bg-white/70 backdrop-blur-sm mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-deep-blue/70">
                In their words
              </span>
            </div>
            <h2 className="h-section text-deep-blue">
              What Clients Say{" "}
              <span className="gradient-text-dark"> About Working With Us</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-base text-deep-blue/60 max-w-md lg:ml-auto">
             Real feedback from real client engagements—collected through quarterly business reviews and our latest NPS survey.
            </p>
          </div>
        </div>

        {/* Chat Thread */}
        <ChatThread />
      </div>
    </section>
  );
}

function ChatThread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState<number | null>(null);

  useEffect(() => {
    if (!inView) return;
    const order = [0, 1, 2, 3];
    let cancelled = false;

    (async () => {
      for (const i of order) {
        if (cancelled) return;
        setTyping(i);
        await new Promise((r) => setTimeout(r, 900));
        if (cancelled) return;
        setTyping(null);
        setVisible((v) => Math.max(v, i + 1));
        await new Promise((r) => setTimeout(r, 350));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-deep-blue/10 bg-white shadow-[0_30px_80px_-30px_rgba(10,10,20,0.2)]"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-deep-blue/10 bg-deep-blue/5 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-deep-blue/50">
          # client-reviews · Q1 2026
        </span>
        <div className="h-2 w-12" />
      </div>

      <div className="space-y-5 p-6 md:p-8">
        {MESSAGES.map((m, i) => (
          <Message
            key={m.person}
            msg={m}
            visible={i < visible}
            typing={typing === i}
          />
        ))}

        {/* Tail composer line — purely decorative */}
        <div className="flex items-center gap-3 border-t border-deep-blue/10 pt-4">
          <div className="h-9 w-9 rounded-full bg-deep-blue/10" />
          <div className="flex-1 rounded-lg bg-deep-blue/5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-deep-blue/40">
            + Send your project to start the conversation…
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({
  msg,
  visible,
  typing,
}: {
  msg: (typeof MESSAGES)[number];
  visible: boolean;
  typing: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="relative h-10 w-10 shrink-0 rounded-full bg-cover ring-2"
        style={{
          backgroundImage: `url(${msg.avatar})`,
          boxShadow: `0 0 0 2px ${msg.color}`,
        }}
      >
        <span
          className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white"
          style={{ background: "#10b981" }}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2 flex-wrap">
          <p className="text-sm font-bold tracking-tight text-deep-blue">{msg.person}</p>
          <p className="text-[11px] font-medium" style={{ color: msg.color }}>
            {msg.company}
          </p>
          <p className="font-mono text-[10px] text-deep-blue/40">{msg.time}</p>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-widest text-deep-blue/40">
          {msg.role}
        </p>

        {/* Metric badge */}
        <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-deep-blue/5 border border-deep-blue/10">
          <span className="text-[9px] font-bold tracking-wide" style={{ color: msg.color }}>
            {msg.metric}
          </span>
        </div>

        {/* Bubble */}
        <div className="mt-2 max-w-2xl">
          {typing && !visible ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-deep-blue/10 px-4 py-3"
            >
              <Dot delay={0} />
              <Dot delay={0.2} />
              <Dot delay={0.4} />
            </motion.div>
          ) : visible ? (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block rounded-2xl rounded-tl-sm bg-deep-blue/5 px-4 py-3 text-base leading-snug text-deep-blue/85"
            >
              "{msg.body}"
            </motion.div>
          ) : null}
        </div>

        {/* Reactions */}
        {visible && msg.reactions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-2 flex flex-wrap gap-1.5"
          >
            {msg.reactions.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-1 rounded-full border border-deep-blue/10 bg-white px-2 py-0.5 text-xs"
              >
                {r}
                <span className="font-mono text-[9px] text-deep-blue/40">
                  {Math.floor(Math.random() * 8) + 2}
                </span>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-deep-blue/40"
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
      transition={{ duration: 1, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}