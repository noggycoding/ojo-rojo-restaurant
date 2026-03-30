"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, ChefHat, Lamp, Star, ArrowRight, MapPin, Clock, Phone } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Ingredientes Frescos",
    description: "Selección diaria de los mejores productos importados y locales.",
    image: "/platillo4.webp",
  },
  {
    icon: <ChefHat className="w-5 h-5" />,
    title: "Chefs Expertos",
    description: "Especializados en cocina japonesa auténtica con años de experiencia.",
    image: "/platillo9.webp",
  },
  {
    icon: <Lamp className="w-5 h-5" />,
    title: "Ambiente Único",
    description: "Decoración moderna con toques tradicionales japoneses.",
    image: "/ambiente4.webp",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Accesible",
    description: "Instalaciones diseñadas para todos nuestros clientes.",
    image: "/platillo3.webp",
  },
];

const stats = [
  { value: "10+", label: "Años de Experiencia" },
  { value: "50+", label: "Platillos en Menú" },
  { value: "4.5★", label: "Calificación" },
  { value: "1000+", label: "Clientes Felices" },
];

const info = [
  { icon: <MapPin className="w-4 h-4" />, label: "Mexicali, Baja California" },
  { icon: <Clock className="w-4 h-4" />, label: "Lun–Dom: 1pm – 11pm" },
  { icon: <Phone className="w-4 h-4" />, label: "+52 686 000 0000" },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0,
      } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.12, 
        ease: "easeOut",
      }}
      className="group relative flex flex-col items-start p-5 sm:p-7 rounded-2xl border border-white/8 hover:border-red-900/60 transition-all duration-500 cursor-default overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(10,10,10,0.8) 100%)",
      }}
    >
      {/* Imagen de fondo */}
      {feature.image && (
        <div className="absolute inset-0">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.75) saturate(1.3)", transform: "scale(1.1)" }}
          />
          <div
            className="absolute inset-0 group-hover:opacity-90 transition-opacity duration-500"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)" }}
          />
        </div>
      )}
      
      {/* Kumiko corner decoration */}
      {!feature.image && (
        <div
          className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: "url(/diseño.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
            mixBlendMode: "lighten",
            transform: "scaleY(-1)",
          }}
        />
      )}
      
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(140,0,0,0.12) 0%, transparent 70%)",
        }}
      />
      
      {/* Icon */}
      <div
        className="relative z-10 flex items-center justify-center w-11 h-11 rounded-xl mb-5 text-red-500 border border-red-900/40 group-hover:border-red-700/70 transition-colors duration-300"
        style={{ background: "rgba(120,0,0,0.15)" }}
      >
        {feature.icon}
      </div>
      <h3 className="relative z-10 text-white font-semibold mb-2 uppercase tracking-widest" style={{ fontSize: "0.75rem" }}>
        {feature.title}
      </h3>
      <p className="relative z-10 text-white/50 text-sm leading-relaxed">{feature.description}</p>
      {/* Bottom accent con glow premium */}
      <motion.div
        className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.8), transparent)",
          boxShadow: "0 0 10px rgba(220, 20, 60, 0.6)",
          filter: "blur(0.3px)",
        }}
      />
    </motion.div>
  );
}

export default function About() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Grain sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex: 10 }}>
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { 
              opacity: 1, 
              y: 0,
            } : {}}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut",
            }}
            className="text-red-700 uppercase tracking-widest mb-4" 
            style={{ 
              fontSize: "0.72rem", 
              letterSpacing: "0.25em",
            }}
          >
            Nuestra historia
          </motion.p>
          <motion.h2
            className="text-white font-light uppercase mb-6"
            style={{ 
              fontSize: "clamp(1.5rem, 4vw, 3rem)", 
              letterSpacing: "0.15em",
            }}
          >
            Sobre Nosotros
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="mx-auto mb-6 sm:mb-8"
            style={{
              height: "1px",
              width: "80px",
              background: "linear-gradient(90deg, transparent, rgba(180,0,0,0.9), transparent)",
              transformOrigin: "center",
            }}
          />
          <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-xl mx-auto px-4">
            Ubicados en el corazón de Mexicali, ofrecemos una experiencia
            culinaria auténtica con ingredientes frescos y preparación tradicional.
          </p>
        </motion.div>

        {/* Layout: features + info card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {/* Features — 2 columnas en 2/3 del ancho */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Info card lateral */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 30 }}
            animate={infoInView ? { 
              opacity: 1, 
              x: 0,
            } : {}}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut", 
              delay: 0.3,
            }}
            className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-white/8 overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(120,0,0,0.15) 0%, rgba(5,5,5,0.9) 60%)",
            }}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <img
                src="/bebidas1.webp"
                alt="Experiencia Ojo Rojo"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.7) saturate(1.3)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)" }}
              />
            </div>
            
            <div className="relative z-10">
              <p className="text-red-700 uppercase tracking-widest mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.2em" }}>
                Visítanos
              </p>
              <h3 className="text-white text-lg sm:text-xl font-light mb-4 sm:mb-6 leading-snug">
                Te esperamos para vivir la experiencia
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                {info.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={infoInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/60 text-xs sm:text-sm"
                  >
                    <span className="text-red-700">{item.icon}</span>
                    {item.label}
                  </motion.div>
                ))}
              </div>
            </div>
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-red-900/50 text-red-500 text-xs sm:text-sm uppercase tracking-widest hover:bg-red-950/30 hover:border-red-700/70 transition-all duration-300"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
            >
              Reservar mesa
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/6"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group flex flex-col items-center justify-center py-8 sm:py-10 px-4 sm:px-6 text-center border-r border-white/5 last:border-r-0 md:last:border-r-0 border-b md:border-b-0 hover:bg-white/2 transition-colors duration-300"
            >
              <span
                className="text-white font-bold mb-1 group-hover:text-red-400 transition-colors duration-300"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-white/30 uppercase tracking-widest text-center" style={{ fontSize: "clamp(0.6rem, 1vw, 0.65rem)" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
