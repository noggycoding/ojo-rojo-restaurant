"use client";

import React from 'react';
import { Home, Info, UtensilsCrossed, Image, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  id: string;
}

interface GradientMenuProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const menuItems: MenuItem[] = [
  { title: 'Inicio', icon: <Home />, gradientFrom: '#DC143C', gradientTo: '#8B0000', id: 'hero' },
  { title: 'Nosotros', icon: <Info />, gradientFrom: '#DC143C', gradientTo: '#8B0000', id: 'about' },
  { title: 'Menú', icon: <UtensilsCrossed />, gradientFrom: '#DC143C', gradientTo: '#8B0000', id: 'menu' },
  { title: 'Galería', icon: <Image />, gradientFrom: '#DC143C', gradientTo: '#8B0000', id: 'gallery' },
  { title: 'Contacto', icon: <Phone />, gradientFrom: '#DC143C', gradientTo: '#8B0000', id: 'contact' }
];

export default function GradientMenu({ activeSection, onSectionClick }: GradientMenuProps) {
  return (
    <div className="relative">
      {/* Contenedor con backdrop blur y borde premium */}
      <div 
        className="relative px-4 py-2 rounded-full"
        style={{
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(220, 20, 60, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(220, 20, 60, 0.1)',
        }}
      >
        <ul className="flex gap-1.5">
          {menuItems.map(({ title, icon, gradientFrom, gradientTo, id }, idx) => (
            <motion.li
              key={id}
              onClick={() => onSectionClick(id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1,
                y: 0,
              }}
              transition={{ 
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut"
              }}
              className={`relative overflow-hidden rounded-full transition-all duration-500 cursor-pointer group ${
                activeSection === id 
                  ? 'w-[130px] h-[44px]' 
                  : 'w-[44px] h-[44px] hover:w-[130px]'
              }`}
            >
              {/* Fondo base con gradiente sutil */}
              <div 
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: activeSection === id 
                    ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.2), rgba(139, 0, 0, 0.2))'
                    : 'rgba(20, 20, 20, 0.6)',
                }}
              />

              {/* Borde interno premium */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  activeSection === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
                style={{
                  border: '1px solid rgba(220, 20, 60, 0.4)',
                  boxShadow: 'inset 0 1px 2px rgba(220, 20, 60, 0.15)',
                }}
              />

              {/* Glow rojo premium */}
              <motion.div
                className={`absolute inset-0 rounded-full blur-xl -z-10 transition-all duration-500 ${
                  activeSection === id ? 'opacity-40' : 'opacity-0 group-hover:opacity-30'
                }`}
                style={{
                  background: `radial-gradient(circle, ${gradientFrom}, ${gradientTo})`,
                }}
                animate={activeSection === id ? {
                  opacity: [0.3, 0.5, 0.3],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Shine effect en hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)',
                }}
              />

              {/* Contenedor flex para centrar contenido */}
              <div className="relative h-full flex items-center justify-center px-4">
                {/* Icon */}
                <motion.span 
                  className={`absolute transition-all duration-500 ${
                    activeSection === id ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'
                  }`}
                  style={{
                    color: '#DC143C',
                    filter: 'drop-shadow(0 0 8px rgba(220, 20, 60, 0.4))',
                  }}
                >
                  <span className="text-xl flex items-center justify-center">{icon}</span>
                </motion.span>

                {/* Title con glow rojo */}
                <motion.span 
                  className={`absolute whitespace-nowrap font-semibold tracking-wider transition-all duration-500 flex items-center justify-center ${
                    activeSection === id ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                  }`}
                  style={{
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    textShadow: '0 0 20px rgba(220, 20, 60, 0.8), 0 0 10px rgba(220, 20, 60, 0.6)',
                  }}
                >
                  {title}
                </motion.span>
              </div>

              {/* Borde animado en activo */}
              {activeSection === id && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0), rgba(10, 10, 10, 0)), linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Glow ambiental debajo del navbar */}
      <motion.div
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-2xl -z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(220, 20, 60, 0.2), transparent)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
