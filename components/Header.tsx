"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GradientMenu from "./ui/gradient-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "menu", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Detectar si hizo scroll
      setIsScrolled(window.scrollY > 50);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "menu", label: "Menú" },
    { id: "gallery", label: "Galería" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
        backgroundColor: isScrolled ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-[9999]"
      style={{
        boxShadow: isScrolled ? "none" : "0 4px 6px -1px rgba(0,0,0,0.3)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        {/* Botón hamburguesa centrado en móvil */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg"
          style={{
            background: isOpen ? "rgba(180,0,0,0.2)" : "transparent",
            border: isOpen ? "1px solid rgba(220,0,0,0.4)" : "none",
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          
          {/* Glow pulsante para indicar interacción */}
          {!isOpen && (
            <motion.div
              className="absolute -inset-2 rounded-lg pointer-events-none"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity as number, ease: "easeInOut" as const }}
              style={{
                background: "radial-gradient(circle, rgba(255,60,60,0.6) 0%, transparent 70%)",
                filter: "blur(10px)",
                zIndex: -1,
              }}
            />
          )}
        </motion.button>

        {/* Menú desktop */}
        <div className="hidden md:flex">
          <GradientMenu
            activeSection={activeSection}
            onSectionClick={scrollToSection}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black-secondary shadow-xl overflow-hidden"
            >
              <ul className="flex flex-col items-center py-6 gap-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white font-medium text-lg ${
                        activeSection === item.id ? "text-primary" : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
