"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { fadeIn, fadeInDelay, breathe, glowPulse } from "@/lib/animations";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src="/neon-sign.webp"
          alt="Neon Sign Background"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(0.9) saturate(1.7) contrast(1.1)",
            mixBlendMode: "lighten",
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.05,
          mixBlendMode: "overlay",
        }}
      />

      {/* Atmospheric gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "radial-gradient(ellipse at 50% 100%, rgba(140,0,0,0.25) 0%, rgba(80,0,0,0.10) 40%, transparent 70%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen py-20 sm:py-24 px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
        
        {/* Logo with subtle breathing */}
        <motion.div
          {...fadeIn}
          className="relative flex items-center justify-center mb-6 sm:mb-10"
        >
          {/* Glow */}
          <motion.div
            animate={glowPulse}
            className="hidden sm:block absolute"
            style={{
              width: "520px",
              height: "320px",
              background: "radial-gradient(ellipse at center, rgba(180,0,0,0.30) 0%, transparent 65%)",
              filter: "blur(45px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          
          {/* Logo */}
          <motion.img
            src="/LogoOjo.png"
            alt="Ojo Rojo Japanese Cuisine"
            animate={breathe}
            className="w-auto mx-auto"
            style={{
              position: "relative",
              zIndex: 1,
              height: "clamp(200px, 35vw, 450px)",
              maxWidth: "90vw",
              filter: "drop-shadow(0 0 30px rgba(180,0,0,0.4))",
            }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            height: "1px",
            width: "clamp(80px, 20vw, 120px)",
            background: "linear-gradient(90deg, transparent, rgba(180,0,0,0.8), transparent)",
            marginBottom: "clamp(16px, 4vw, 28px)",
            transformOrigin: "center",
          }}
        />

        {/* Headline */}
        <motion.p
          {...fadeInDelay(0.5)}
          className="mb-3 text-white/75 font-light uppercase px-4"
          style={{
            fontSize: "clamp(0.65rem, 1.4vw, 1rem)",
            letterSpacing: "clamp(0.15em, 0.35em, 0.35em)",
          }}
        >
          Auténtica experiencia japonesa en Mexicali
        </motion.p>

        {/* Stars */}
        <motion.div
          {...fadeInDelay(0.7)}
          className="mb-8 sm:mb-10 flex items-center gap-2"
        >
          <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
          <span className="text-white/50 text-xs tracking-widest uppercase">4.5 estrellas</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          {...fadeInDelay(0.9)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4"
        >
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("menu")}
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Ver Menú
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Reservar
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeInDelay(1.5)}
        className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex flex-col items-center text-white/35"
        style={{ zIndex: 10 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Desliza</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
