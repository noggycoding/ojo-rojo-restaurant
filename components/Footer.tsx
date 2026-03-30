"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-primary py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/LogoOjo.png"
              alt="Ojo Rojo Japanese Cuisine"
              className="h-24 sm:h-32 w-auto mx-auto mb-3 sm:mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/80 text-base sm:text-lg tracking-wide px-4"
            >
              Auténtica experiencia japonesa en Mexicali
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Texto arriba */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/50 text-base tracking-wide"
            >
              Da click en los iconos para entrar
            </motion.p>
            
            <div className="flex gap-6">
              {[
                { href: "https://www.facebook.com/Ojorojomxl/", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/ojorojomxl/", icon: Instagram, label: "Instagram" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary p-3 bg-black-secondary rounded-full transform transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-white/60 text-xs sm:text-sm px-4"
          >
            <p>&copy; {currentYear} Ojo Rojo Japanese Cuisine. Todos los derechos reservados.</p>
            <p className="mt-2">Mexicali, Baja California</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
