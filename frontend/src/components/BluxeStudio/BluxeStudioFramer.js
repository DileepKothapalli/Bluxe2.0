export const BluxeStudioHeadingAnimate = {
  hidden: {
    scale: 0.9,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

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
      staggerChildren: 5,
      delayChildren: 5.5,
    },
  },
};

export const BluxeStudioCaptionAnimate = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const RightDivAnimate = {
  hidden: {
    x: 40,
    opacity: 0,
    // scale: 0.9,
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const LeftDivAnimate = {
  hidden: {
    x: -40,
    opacity: 0,
    // scale: 0.9,
  },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
