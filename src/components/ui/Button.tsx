"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
}

interface AsLink extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface AsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = AsLink | AsButton;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-neon-blue text-white hover:bg-neon-purple hover:shadow-xl hover:shadow-neon-blue/30",
  secondary:
    "border border-deep-blue/20 text-deep-blue hover:bg-deep-blue hover:text-white",
  ghost:
    "border border-white/10 text-gray-300 hover:border-neon-blue/50 hover:text-neon-blue",
  "outline-light":
    "border border-white/20 text-white hover:bg-white/5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-sm",
};

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    withArrow = false,
  } = props;

  const classes = `group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const inner = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={props.href} className={classes}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {inner}
    </motion.button>
  );
}
