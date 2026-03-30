// Sistema de animaciones profesionales y sutiles

// Easing profesional
const ease = [0.22, 1, 0.36, 1] as const;

// Fade in suave al hacer scroll
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease }
};

// Fade in con delay
export const fadeInDelay = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease }
});

// Fade in desde la izquierda
export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease }
};

// Fade in desde la derecha
export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease }
};

// Scale in sutil
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease }
};

// Hover sutil para cards
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.3, ease }
};

// Hover para botones
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease }
};

export const buttonTap = {
  scale: 0.98
};

// Respiración sutil (para logos o elementos destacados)
export const breathe = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 4,
    repeat: Infinity as number,
    ease: "easeInOut" as const
  }
};

// Glow pulsante sutil
export const glowPulse = {
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity as number,
    ease: "easeInOut" as const
  }
};

// Stagger para listas
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease }
};

// Viewport settings
export const viewport = {
  once: true,
  margin: "-60px"
};
