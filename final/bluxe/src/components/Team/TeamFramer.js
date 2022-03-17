export const TitleAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const StaggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
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
