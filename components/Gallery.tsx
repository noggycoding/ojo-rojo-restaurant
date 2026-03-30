"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/sushi1.webp", alt: "Sushi Premium" },
  { src: "/pulpo.webp", alt: "Pulpo Tempura" },
  { src: "/platillo1.webp", alt: "Platillo Especial" },
  { src: "/platillo2.webp", alt: "Mariscos Frescos" },
  { src: "/platillo3.webp", alt: "Cocina Japonesa" },
  { src: "/bebidas1.webp", alt: "Bebidas" },
];

export default function Gallery() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play cada 6 segundos con reinicio al hacer clic
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Se reinicia cuando currentIndex cambia

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Grain sutil */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, opacity: 0.04, mixBlendMode: "overlay" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex: 10 }}>
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-red-800 uppercase tracking-widest mb-4" style={{ fontSize: "0.72rem", letterSpacing: "0.25em" }}>
            Experiencia visual
          </p>
          <h2 className="text-white font-light uppercase mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.15em" }}>
            Galería
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, rgba(180,0,0,0.9), transparent)", transformOrigin: "center", margin: "0 auto" }}
          />
          
          {/* Línea animada con glow */}
          <motion.div
            animate={{ 
              scaleX: [1, 1.4, 0.9, 1.2, 1],
              opacity: [0.6, 1, 0.7, 0.9, 0.6],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ 
              height: "2px", 
              width: "80px", 
              background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.9), rgba(255,80,80,1), rgba(220,20,60,0.9), transparent)", 
              transformOrigin: "center", 
              margin: "0 auto",
              boxShadow: "0 0 20px rgba(220, 20, 60, 0.8), 0 0 40px rgba(220, 20, 60, 0.4)",
              filter: "blur(0.5px)",
            }}
          />
          
          {/* Glow adicional */}
          <motion.div
            animate={{ 
              scaleX: [1, 1.6, 0.7, 1.4, 1],
              opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ 
              height: "1px", 
              width: "120px", 
              background: "linear-gradient(90deg, transparent, rgba(255,60,60,0.6), transparent)", 
              transformOrigin: "center", 
              margin: "8px auto 0",
              filter: "blur(8px)",
            }}
          />
        </motion.div>

        {/* Carousel principal */}
        <div className="relative mb-6 sm:mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/5" style={{ height: "clamp(300px, 60vw, 500px)" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }}
                />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-lg sm:text-2xl font-light uppercase tracking-widest"
                  >
                    {images[currentIndex].alt}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-red-700/60 hover:bg-red-950/30"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-red-700/60 hover:bg-red-950/30"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="transition-all duration-300"
                style={{
                  width: currentIndex === index ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: currentIndex === index ? "rgba(180,0,0,0.8)" : "rgba(255,255,255,0.15)",
                  border: currentIndex === index ? "1px solid rgba(180,0,0,0.6)" : "1px solid transparent",
                }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08, 
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              onClick={() => handleThumbnailClick(index)}
              className="group relative overflow-hidden rounded-xl border transition-all duration-300"
              style={{
                borderColor: currentIndex === index ? "rgba(180,0,0,0.6)" : "rgba(255,255,255,0.05)",
                opacity: currentIndex === index ? 1 : 0.5,
              }}
            >
              {/* Kumiko corner on hover */}
              <div
                className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  backgroundImage: "url(/diseño.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.15,
                  mixBlendMode: "lighten",
                  transform: "scale(-1, 1)",
                }}
              />
              
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Active indicator */}
              {currentIndex === index && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "rgba(180,0,0,0.15)",
                    boxShadow: "inset 0 0 0 2px rgba(180,0,0,0.6)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
