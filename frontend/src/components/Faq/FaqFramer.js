export const FaqHeadingAnimate = {
  hidden: {
    scale: 0.9,
    y: 30,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
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
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const FaqWrapperAnimate = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      bounce: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const FaqContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.6,
    },
  },
};

export const QuestionAnimate = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.7,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
