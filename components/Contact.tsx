"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { LocationMap } from "./ui/expand-map";

const contactInfo = [
  { icon: <MapPin className="w-5 h-5" />, title: "Ubicación", content: "Mexicali, Baja California", link: "https://www.google.com.mx/maps/place/Ojo+Rojo+Japanese+Cuisine/@32.658606,-115.4240503,17z/data=!3m1!5s0x80d771b49e87b98d:0xc21179363e86bf73!4m17!1m10!3m9!1s0x80d771e506143243:0xb27d3f9de7ed49a9!2sOjo+Rojo+Japanese+Cuisine!8m2!3d32.658606!4d-115.4241938!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11q1kjyqlw!3m5!1s0x80d771e506143243:0xb27d3f9de7ed49a9!8m2!3d32.658606!4d-115.4241938!16s%2Fg%2F11q1kjyqlw?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" },
  { icon: <Phone className="w-5 h-5" />, title: "Teléfono", content: "(686) 123-4567", link: "tel:+526861234567" },
  { icon: <Clock className="w-5 h-5" />, title: "Horario", content: "Lun–Dom: 12:00 PM – 11:00 PM" },
  { icon: <Mail className="w-5 h-5" />, title: "Email", content: "info@ojorojo.com", link: "mailto:info@ojorojo.com" },
];

export default function Contact() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px" });
  const [isReservaExpanded, setIsReservaExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReservarClick = () => {
    if (!isReservaExpanded) {
      setIsReservaExpanded(true);
    } else {
      window.location.href = "tel:+526861234567";
    }
  };

  const copyPhoneNumber = (phone: string) => {
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
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
            Estamos para ti
          </p>
          <h2 className="text-white font-light uppercase mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.15em" }}>
            Contáctanos
          </h2>
          <motion.div
            animate={{ 
              scaleX: [1, 1.5, 0.8, 1.3, 1],
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
          
          {/* Glow adicional debajo de la línea */}
          <motion.div
            animate={{ 
              scaleX: [1, 1.8, 0.6, 1.5, 1],
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

        {/* Layout principal */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Info cards — 2 columnas */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { 
                  opacity: 1, 
                  x: 0,
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: "easeOut",
                }}
                className="group relative flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-red-900/50 transition-all duration-400 overflow-hidden"
                style={{ 
                  background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.5) 100%)",
                }}
              >
                {/* Kumiko corner decoration */}
                <div
                  className="absolute top-0 left-0 w-14 h-14 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: "url(/diseño.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.05,
                    mixBlendMode: "lighten",
                  }}
                />
                
                <div
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl shrink-0 text-red-600 border border-red-900/30 group-hover:border-red-700/50 transition-colors duration-300"
                  style={{ background: "rgba(120,0,0,0.12)" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/35 uppercase tracking-widest mb-1" style={{ fontSize: "0.62rem" }}>
                    {info.title}
                  </p>
                  {info.link ? (
                    info.title === "Teléfono" ? (
                      <button
                        onClick={() => copyPhoneNumber(info.content)}
                        className="text-white/80 text-xs sm:text-sm hover:text-red-400 transition-colors duration-300 text-left selectable cursor-pointer"
                      >
                        {info.content}
                      </button>
                    ) : (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white/80 text-xs sm:text-sm hover:text-red-400 transition-colors duration-300 selectable"
                      >
                        {info.content}
                      </a>
                    )
                  ) : (
                    <p className="text-white/80 text-xs sm:text-sm selectable">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa + Reserva — 3 columnas */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
            {/* Mapa interactivo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={contentInView ? { 
                opacity: 1, 
                x: 0,
              } : {}}
              transition={{ 
                duration: 0.7, 
                delay: 0.2, 
                ease: "easeOut",
              }}
              className="flex items-center justify-center"
              style={{ 
                minHeight: "200px",
              }}
            >
              <LocationMap
                location="Ojo Rojo Japanese Cuisine"
                coordinates="32.658606° N, 115.4241938° W"
                mapUrl="https://www.google.com.mx/maps/place/Ojo+Rojo+Japanese+Cuisine/@32.658606,-115.4240503,17z/data=!3m1!5s0x80d771b49e87b98d:0xc21179363e86bf73!4m17!1m10!3m9!1s0x80d771e506143243:0xb27d3f9de7ed49a9!2sOjo+Rojo+Japanese+Cuisine!8m2!3d32.658606!4d-115.4241938!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11q1kjyqlw!3m5!1s0x80d771e506143243:0xb27d3f9de7ed49a9!8m2!3d32.658606!4d-115.4241938!16s%2Fg%2F11q1kjyqlw?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              />
            </motion.div>

            {/* CTA Reserva */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-white/5 overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(120,0,0,0.15) 0%, rgba(5,5,5,0.8) 100%)" }}
            >
              {/* Ripple background on expand */}
              {isReservaExpanded && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    background: "radial-gradient(circle, rgba(255,60,60,0.6) 0%, transparent 70%)",
                  }}
                />
              )}

              <div className="relative z-10 text-center sm:text-left">
                <p className="text-white font-light mb-1" style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", letterSpacing: "0.05em" }}>
                  ¿Listo para visitarnos?
                </p>
                <p className="text-white/40 text-xs tracking-wider">
                  Reserva tu mesa y vive la experiencia
                </p>
              </div>

              <motion.button
                onClick={handleReservarClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-red-900/50 text-red-400 text-xs uppercase tracking-widest hover:bg-red-950/40 hover:border-red-700/70 transition-all duration-300 shrink-0 overflow-hidden"
                animate={{
                  width: isReservaExpanded ? "auto" : "auto",
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(255,0,0,0.25) 0%, transparent 70%)",
                    boxShadow: "0 0 35px rgba(255,0,0,0.4)",
                  }}
                />
                
                <span className="relative z-10">
                  {isReservaExpanded ? "Llamar ahora" : "Reservar ahora"}
                </span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </motion.button>

              {/* Phone number reveal */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isReservaExpanded ? 1 : 0,
                  height: isReservaExpanded ? "auto" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full relative z-10"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: isReservaExpanded ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 p-3 sm:p-4 rounded-xl border border-red-800/40"
                  style={{ background: "rgba(180,0,0,0.15)" }}
                >
                  {/* Arrow pointing */}
                  <motion.div
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-400"
                      style={{ filter: "drop-shadow(0 0 8px rgba(255,60,60,0.6))" }}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.div>

                  <div className="flex flex-col items-center sm:items-start">
                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-white/50 text-xs uppercase tracking-wider"
                    >
                      Reserva a este número
                    </motion.p>
                    <motion.button
                      onClick={() => copyPhoneNumber("(686) 123-4567")}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      whileHover={{ scale: 1.05, x: 4 }}
                      className="text-red-400 text-lg sm:text-xl font-bold tracking-wide hover:text-red-300 transition-colors selectable cursor-pointer relative"
                      style={{ filter: "drop-shadow(0 0 10px rgba(255,60,60,0.4))" }}
                    >
                      (686) 123-4567
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: -25 }}
                          exit={{ opacity: 0 }}
                          className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-green-400 whitespace-nowrap"
                        >
                          ¡Copiado!
                        </motion.span>
                      )}
                    </motion.button>
                  </div>

                  {/* Pulsing indicator */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#ff3333", boxShadow: "0 0 10px rgba(255,51,51,0.8)" }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
