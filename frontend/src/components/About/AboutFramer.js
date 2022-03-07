import { show } from "framer-motion";
import { Variants } from "framer-motion";

export const StaggerContainer = {
  // hidden: { opacity: 0, y: 50 },
  // show: {
  //   opacity: 1,
  //   y: [40, 30, 20, 10, 0, -5, 0],
  //   transition: {
  //     duration: 1,
  //     ease: "easeInOut",
  //   },
  // },
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};
export const FadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: [40, 30, 20, 10, 0, -5, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export const FadeUpCard = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: [40, 30, 20, 10, 0, -5, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const VideoAnimate = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
