import { animate } from "framer-motion";
import { Variants } from "framer-motion";
export const ShoeFade = {
  initial: { opacity: 0, scale: 0.7 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: "easeInOut",
      bounce: 0.3,
    },
  },
};
export const StaggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
export const FadeUp = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 3.5,
      delayChildren: 0.5,
    },
  },
};
export const MintedUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};
export const NumberUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
    },
  },
};
export const IconsFade = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const IconFade1 = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1, 1.25, 1],
    opacity: [0, 1, 1, 1],
    transition: {
      delay: 2.5,
      duration: 1,
      type: "spring",
    },
  },
};
export const IconFade2 = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    opacity: [0, 1, 1, 1],
    scale: [0, 1, 1.25, 1],
    transition: {
      opacity: [0, 1, 1, 1],
      delay: 2.7,
      duration: 1,
      type: "spring",
    },
  },
};
export const IconFade3 = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1, 1.25, 1],
    opacity: [0, 1, 1, 1],
    transition: {
      delay: 2.9,
      duration: 1,
      type: "spring",
    },
  },
};

export const IconFade4 = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [0, 1, 1.25, 1],
    opacity: [0, 1, 1, 1],
    transition: {
      delay: 3.1,
      duration: 1,
      type: "spring",
    },
  },
};
