export const StudioHeadingAnimate = {
  hidden: {
    scale: 1.2,
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.3,
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
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const StudioCaptionAnimate = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const StudioWrapperAnimate = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export const VideoAnimate = {
  hidden: {
    x: 30,
    scale: 1.35,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1.35,
    transition: {
      delay: 0,
      duration: 0.3,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
