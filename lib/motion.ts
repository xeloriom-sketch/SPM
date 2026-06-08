// iOS-style spring: fast snap with genuine overshoot
export const spring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 24,
  mass: 0.8,
};

// Slightly bouncier for big hero elements
export const springBouncy = {
  type: "spring" as const,
  stiffness: 340,
  damping: 20,
  mass: 0.85,
};

// Ultra-fast for micro-interactions
export const springFast = {
  type: "spring" as const,
  stiffness: 520,
  damping: 28,
  mass: 0.7,
};

// Standard scroll-reveal: scale + y (the Apple combination)
export const revealVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...spring, delay },
  }),
};

// Subtle reveal for secondary elements
export const revealSubtle = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...spring, delay },
  }),
};
