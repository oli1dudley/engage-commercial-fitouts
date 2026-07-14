"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      delay,
    },
  }),
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay },
  }),
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

// ─── FadeUp ───────────────────────────────────────────────────────────────
interface AnimProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function FadeUp({ delay = 0, className, children, ...props }: AnimProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={fadeUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeIn ───────────────────────────────────────────────────────────────
export function FadeIn({ delay = 0, className, children, ...props }: AnimProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={fadeInVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerGrid ──────────────────────────────────────────────────────────
export function StaggerGrid({
  className,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "variants"> & { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ──────────────────────────────────────────────────────────
export function StaggerItem({
  className,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "variants"> & { children: React.ReactNode }) {
  return (
    <motion.div variants={staggerItemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

// ─── ScaleHover ───────────────────────────────────────────────────────────
export function ScaleHover({
  className,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "whileHover"> & { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
