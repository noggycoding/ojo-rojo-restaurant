// Sistema de animaciones profesionales y sutiles

// Easing profesional
const ease = [0.22, 1, 0.36, 1] as const;

// Fade in suave al hacer scroll
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: ease as any }
};

// Fade in con delay
export const fadeInDelay = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: ease as any }
});

// Fade in desde la izquierda
export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: ease as any }
};

// Fade in desde la derecha
export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: ease as any }
};

// Scale in sutil
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: ease as any }
};

// Hover sutil para cards
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.3, ease: ease as any }
};

// Hover para botones
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: ease as any }
};

export const buttonTap = {
  scale: 0.98
};

// Respiración sutil (para logos o elementos destacados)
export const breathe = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

// Glow pulsante sutil
export const glowPulse = {
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as any
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
  transition: { duration: 0.5, ease: ease as any }
};

// Viewport settings
export const viewport = {
  once: true,
  margin: "-60px"
};
