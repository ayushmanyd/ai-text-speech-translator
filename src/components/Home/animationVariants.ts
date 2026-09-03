import type { Variants } from "framer-motion";

/** Professional ease-out curve (cubic-bezier) used across the landing page. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Smooth fade-and-rise entrance. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Staggered container that orchestrates child fadeInUp items. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Card hover: subtle lift — smooth, non-jumpy. */
export const cardHover = {
  whileHover: {
    y: -6,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

/** Viewport config: animate once, early trigger, smooth feel. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
