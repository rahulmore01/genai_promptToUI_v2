export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2,
    },
  },
};
export function slideInFromButtom(delay) {
  return {
    hidden: { y: 150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
export function slideInFromTop(delay) {
  return {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.3,
      },
    },
  };
}
export function rotateAroundY() {
  return {
    visible: { opacity: 1, rotateY: 0 },
    hidden: { opacity: 0, rotateY: 180 },
  };
}
