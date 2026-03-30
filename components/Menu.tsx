"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Flame, Snowflake, List, Fish, Soup, Wheat, UtensilsCrossed, Shell, Cake, ChevronLeft, ChevronRight } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: string | { label: string; value: string }[];
  badge?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const categories: MenuCategory[] = [
  {
    id: "entradas-calientes",
    name: "Entradas Calientes",
    icon: <Flame className="w-4 h-4" />,
    items: [
      { name: "Bites de Salmón", description: "Deliciosos bocados de salmón crujientes", price: [{ label: "6 piezas", value: "$330" }, { label: "3 piezas", value: "$185" }], badge: "Popular" },
      { name: "Edamames", description: "Vainas de soya al vapor con sal de mar", price: "$245" },
      { name: "Camarones Rellenos", description: "Camarones empanizados con relleno especial", price: "$245" },
    ],
  },
  {
    id: "entradas-frias",
    name: "Entradas Frías",
    icon: <Snowflake className="w-4 h-4" />,
    items: [
      { name: "Maguro Tartare", description: "Atún fresco en cubos con salsa especial", price: "$195" },
      { name: "Noritacos - Atún Hawaiano", description: "Tacos de alga nori con atún hawaiano", price: "$195", badge: "Nuevo" },
      { name: "Noritacos - Salmón al Cilantro", description: "Tacos de alga nori con salmón", price: "$195" },
    ],
  },
  {
    id: "rollos",
    name: "Rollos Ojo Rojo",
    icon: <List className="w-4 h-4" />,
    items: [
      { name: "Ojo Rojo", description: "Nuestro rollo insignia", price: "$225", badge: "Especialidad" },
      { name: "Sakekame", description: "Rollo de salmón y aguacate", price: "$205" },
      { name: "Blue King", description: "Rollo premium con cangrejo azul", price: "$225" },
      { name: "Ebi Roll", description: "Rollo de camarón tempura", price: "$215" },
      { name: "Poke Roll", description: "Inspirado en el poke hawaiano", price: "$235" },
      { name: "Sakurama", description: "Rollo con salmón y mango", price: "$225" },
    ],
  },
  {
    id: "tiraditos",
    name: "Tiraditos",
    icon: <Fish className="w-4 h-4" />,
    items: [
      { name: "Atún Akami", description: "Cortes finos de atún rojo", price: "$275" },
      { name: "Atún Escolar", description: "Atún blanco premium", price: "$335" },
      { name: "Salmón", description: "Salmón fresco en láminas", price: "$330" },
      { name: "Hamachi", description: "Cola amarilla japonesa", price: "$330" },
      { name: "Pez Blanco", description: "Pescado blanco del día", price: "$295" },
      { name: "Salmón Ahumado", description: "Salmón con proceso de ahumado", price: "$315" },
      { name: "Pulpo Tempura", description: "Pulpo empanizado crujiente", price: "$315" },
      { name: "Callo de Hacha", description: "Vieiras frescas", price: "$330" },
      { name: "Lubina", description: "Lubina en cortes finos", price: "$290" },
    ],
  },
  {
    id: "ceviches",
    name: "Ceviches",
    icon: <Soup className="w-4 h-4" />,
    items: [
      { name: "Dragon", description: "Ceviche con toque picante", price: "$210" },
      { name: "Gaman", description: "Ceviche estilo japonés", price: "$245" },
      { name: "Wabi-Sabi", description: "Ceviche tradicional", price: "$195" },
    ],
  },
  {
    id: "arroces",
    name: "Arroces",
    icon: <Wheat className="w-4 h-4" />,
    items: [
      { name: "Yakimeshi Ojo Rojo", description: "Arroz frito estilo casa", price: "$245", badge: "Especialidad" },
      { name: "Yakimeshi Chef", description: "Arroz frito del chef", price: "$200" },
      { name: "Takimeshi", description: "Arroz al vapor japonés", price: "$125" },
    ],
  },
  {
    id: "sopas",
    name: "Sopas",
    icon: <Soup className="w-4 h-4" />,
    items: [
      { name: "Sopa Miso", description: "Caldo tradicional de miso", price: "$115" },
      { name: "Tempura Udon Soup", description: "Fideos udon con tempura", price: "$185" },
      { name: "Sopa Ramen", description: "Ramen tradicional japonés", price: "$210" },
    ],
  },
  {
    id: "platillos",
    name: "Platillos",
    icon: <UtensilsCrossed className="w-4 h-4" />,
    items: [
      { name: "Sake Risotto", description: "Risotto con salmón", price: "$365" },
      { name: "Suzuki a la Talla", description: "Lubina preparada a la talla", price: "$315" },
      { name: "Ribeye", description: "Corte premium de res", price: "$425", badge: "Premium" },
      { name: "Teriyaki Chef", description: "Platillo teriyaki especial", price: "$245" },
      { name: "Chutoro Tataki", description: "Atún medio graso sellado", price: "$355" },
    ],
  },
  {
    id: "mariscos",
    name: "Mariscos",
    icon: <Shell className="w-4 h-4" />,
    items: [
      { name: "Torre de Mariscos", description: "Selección premium de mariscos frescos", price: "$480", badge: "Para Compartir" },
      { name: "Botana con Ostras", description: "Ostras frescas con acompañamientos", price: "$350" },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    icon: <Cake className="w-4 h-4" />,
    items: [
      { name: "Helado Tempura", description: "Helado empanizado crujiente", price: "$170" },
      { name: "Pan de Elote", description: "Suave y esponjoso", price: "$185" },
      { name: "Crumble de Manzana", description: "Con helado de vainilla", price: "$175" },
    ],
  },
];

const showcaseImages = [
  { src: "/platillo4.webp", title: "Creaciones del Chef", subtitle: "Arte culinario japonés" },
  { src: "/platillo5.webp", title: "Ingredientes Premium", subtitle: "Frescura garantizada" },
  { src: "/platillo6.webp", title: "Sabores Auténticos", subtitle: "Tradición japonesa" },
  { src: "/ambiente1.webp", title: "Experiencia Única", subtitle: "Ambiente sofisticado" },
  { src: "/platillo7.webp", title: "Platillos Especiales", subtitle: "Recetas exclusivas" },
  { src: "/ambiente2.webp", title: "Detalles Perfectos", subtitle: "Cada plato es una obra" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("entradas-calientes");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const activeItems = categories.find((c) => c.id === activeCategory)?.items || [];
  const showcaseRef = useRef(null);
  const showcaseInView = useInView(showcaseRef, { once: true, margin: "-60px" });

  // Auto-play cada 6 segundos con reinicio al hacer clic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === showcaseImages.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]); // Se reinicia cuando currentSlide cambia

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? showcaseImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === showcaseImages.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="menu"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Grain sutil */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, opacity: 0.04, mixBlendMode: "overlay" }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-red-700 uppercase tracking-widest mb-4" style={{ fontSize: "0.72rem", letterSpacing: "0.25em" }}>
            Cocina japonesa auténtica
          </p>
          <h2 className="text-white font-light uppercase mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", letterSpacing: "0.15em" }}>
            Nuestro Menú
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="mx-auto"
            style={{ height: "1px", width: "80px", background: "linear-gradient(90deg, transparent, rgba(220,0,0,0.9), transparent)", transformOrigin: "center" }}
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
            className="mx-auto"
            style={{ 
              height: "2px", 
              width: "80px", 
              background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.9), rgba(255,80,80,1), rgba(220,20,60,0.9), transparent)", 
              transformOrigin: "center",
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
            className="mx-auto"
            style={{ 
              height: "1px", 
              width: "120px", 
              background: "linear-gradient(90deg, transparent, rgba(255,60,60,0.6), transparent)", 
              transformOrigin: "center",
              marginTop: "8px",
              filter: "blur(8px)",
            }}
          />
        </motion.div>

        {/* Showcase Carousel - Nuevas imágenes */}
        <motion.div
          ref={showcaseRef}
          initial={{ opacity: 0, y: 30 }}
          animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-6 sm:mb-8">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={showcaseInView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-white/90 uppercase font-light text-base sm:text-lg tracking-widest px-4"
            >
              Un vistazo a nuestras creaciones
            </motion.p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-red-900/30" style={{ height: "clamp(280px, 50vw, 420px)" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100, scale: 1.1 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={showcaseImages[currentSlide].src}
                  alt={showcaseImages[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient más brillante */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }}
                />
                {/* Glow rojo */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(180,0,0,0.15) 100%)" }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-red-400 uppercase tracking-widest mb-2" style={{ fontSize: "clamp(0.6rem, 1vw, 0.7rem)", letterSpacing: "0.2em" }}>
                      {showcaseImages[currentSlide].subtitle}
                    </p>
                    <h3 className="text-white text-xl sm:text-3xl font-light uppercase tracking-wider">
                      {showcaseImages[currentSlide].title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-red-900/40 backdrop-blur-md transition-all duration-300 hover:border-red-600/80 hover:bg-red-950/40"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-red-900/40 backdrop-blur-md transition-all duration-300 hover:border-red-600/80 hover:bg-red-950/40"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </motion.button>

            {/* Progress dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {showcaseImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="transition-all duration-300"
                  style={{
                    width: currentSlide === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: currentSlide === index ? "rgba(220,0,0,0.9)" : "rgba(255,255,255,0.25)",
                    border: currentSlide === index ? "1px solid rgba(220,0,0,0.8)" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Botón principal para expandir categorías */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mb-14"
        >
          {!categoriesExpanded ? (
            <>
              <motion.button
                onClick={() => setCategoriesExpanded(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-8 sm:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 border overflow-hidden"
                style={{
                  background: "rgba(180,0,0,0.3)",
                  borderColor: "rgba(220,0,0,0.6)",
                  color: "#fff",
                  letterSpacing: "0.15em",
                  boxShadow: "0 0 30px rgba(180,0,0,0.4)",
                }}
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Explora Nuestros Platillos</span>
                  <span className="xs:hidden">Ver Platillos</span>
                </span>
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-3 max-w-4xl"
            >
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                  }}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border"
                  style={{
                    background: activeCategory === cat.id ? "rgba(180,0,0,0.5)" : "rgba(255,255,255,0.08)",
                    borderColor: activeCategory === cat.id ? "rgba(220,0,0,0.8)" : "rgba(255,255,255,0.15)",
                    color: activeCategory === cat.id ? "#fff" : "rgba(255,255,255,0.70)",
                    letterSpacing: "0.12em",
                    boxShadow: activeCategory === cat.id ? "0 0 25px rgba(180,0,0,0.4)" : "none",
                  }}
                >
                  <span className={activeCategory === cat.id ? "text-red-300" : "text-white/50"}>
                    {cat.icon}
                  </span>
                  <span className="relative z-10">{cat.name}</span>
                  
                  {/* Dot indicator para categoría activa */}
                  {activeCategory === cat.id && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-red-400"
                      style={{ boxShadow: "0 0 8px rgba(255,0,0,0.6)" }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Items grid con más contraste */}
        {categoriesExpanded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {activeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl border border-white/10 hover:border-red-800/70 transition-all duration-400 overflow-hidden"
                  style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(20,20,20,0.8) 100%)" }}
                >
                  {/* Kumiko corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: "url(/diseño.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.08,
                      mixBlendMode: "lighten",
                      transform: "scale(-1, 1)",
                    }}
                  />
                  
                  {/* Hover glow más intenso */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at top left, rgba(180,0,0,0.18) 0%, transparent 70%)" }} />

                  {/* Badge */}
                  {item.badge && (
                    <span
                      className="absolute top-4 right-4 text-red-300 border border-red-800/60 px-3 py-1 rounded-full uppercase"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.12em", background: "rgba(140,0,0,0.25)" }}
                    >
                      {item.badge}
                    </span>
                  )}

                  <div className="mb-4 relative z-10">
                    <h4 className="text-white font-semibold mb-2 pr-16" style={{ fontSize: "1.05rem", letterSpacing: "0.02em" }}>
                      {item.name}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Price con más contraste */}
                  {typeof item.price === "string" ? (
                    <div className="text-red-400 font-bold relative z-10" style={{ fontSize: "1.3rem" }}>
                      {item.price}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 relative z-10">
                      {item.price.map((opt, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-t border-white/8">
                          <span className="text-white/50 text-xs">{opt.label}</span>
                          <span className="text-red-400 font-semibold text-base">{opt.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom accent line premium */}
                  <div 
                    className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ 
                      background: "linear-gradient(90deg, transparent, rgba(220,20,60,0.8), transparent)",
                      boxShadow: "0 0 10px rgba(220, 20, 60, 0.6)",
                      filter: "blur(0.3px)",
                    }} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
