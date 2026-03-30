"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

interface LocationMapProps {
  location?: string;
  coordinates?: string;
  mapUrl?: string;
  className?: string;
}

export function LocationMap({
  location = "Ojo Rojo Japanese Cuisine",
  coordinates = "32.658606° N, 115.4241938° W",
  mapUrl = "https://www.google.com.mx/maps/place/Ojo+Rojo+Japanese+Cuisine/@32.658606,-115.4240503,17z",
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-50, 50], [8, -8]);
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      window.open(mapUrl, "_blank");
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border-2"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(145deg, rgba(20,0,0,0.9) 0%, rgba(5,5,5,0.95) 100%)",
          borderColor: isHovered ? "rgba(255,60,60,0.5)" : "rgba(180,0,0,0.3)",
        }}
        animate={{
          width: isExpanded ? 420 : 280,
          height: isExpanded ? 320 : 160,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-red-950/40" />

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Main roads */}
                <motion.line
                  x1="0%"
                  y1="35%"
                  x2="100%"
                  y2="35%"
                  stroke="rgba(180,0,0,0.4)"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.line
                  x1="0%"
                  y1="65%"
                  x2="100%"
                  y2="65%"
                  stroke="rgba(180,0,0,0.4)"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                {/* Vertical main roads */}
                <motion.line
                  x1="30%"
                  y1="0%"
                  x2="30%"
                  y2="100%"
                  stroke="rgba(180,0,0,0.3)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.line
                  x1="70%"
                  y1="0%"
                  x2="70%"
                  y2="100%"
                  stroke="rgba(180,0,0,0.3)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                {/* Secondary streets */}
                {[20, 50, 80].map((y, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0%"
                    y1={`${y}%`}
                    x2="100%"
                    y2={`${y}%`}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  />
                ))}
                {[15, 45, 55, 85].map((x, i) => (
                  <motion.line
                    key={`v-${i}`}
                    x1={`${x}%`}
                    y1="0%"
                    x2={`${x}%`}
                    y2="100%"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  />
                ))}
              </svg>
              {/* Buildings */}
              <motion.div
                className="absolute top-[40%] left-[10%] w-[15%] h-[20%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
              <motion.div
                className="absolute top-[15%] left-[35%] w-[12%] h-[15%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              />
              <motion.div
                className="absolute top-[70%] left-[75%] w-[18%] h-[18%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.08)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              <motion.div
                className="absolute top-[20%] right-[10%] w-[10%] h-[25%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              />
              <motion.div
                className="absolute top-[55%] left-[5%] w-[8%] h-[12%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.05)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.65 }}
              />
              <motion.div
                className="absolute top-[8%] left-[75%] w-[14%] h-[10%] rounded-sm border"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.75 }}
              />
              {/* Location Pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="drop-shadow-lg"
                  style={{ filter: "drop-shadow(0 0 10px rgba(255,60,60,0.8))" }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#ff3333" />
                  <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
                </svg>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - only show when collapsed */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isExpanded ? 0 : 0.05 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid-red" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(180,0,0,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-red)" />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Map Icon SVG */}
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                  animate={{
                    filter: isHovered
                      ? "drop-shadow(0 0 8px rgba(255,60,60,0.8))"
                      : "drop-shadow(0 0 4px rgba(180,0,0,0.5))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                  <line x1="9" x2="9" y1="3" y2="18" />
                  <line x1="15" x2="15" y1="6" y2="21" />
                </motion.svg>
              </motion.div>
            </div>
            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-1.5 px-2 py-1 rounded-full backdrop-blur-sm"
              style={{ background: "rgba(180,0,0,0.15)" }}
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isHovered ? "rgba(200,0,0,0.2)" : "rgba(180,0,0,0.15)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-red-500"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[10px] font-medium text-red-400 tracking-wide uppercase">Live</span>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="space-y-1">
            <motion.h3
              className="text-white font-medium text-sm tracking-tight"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {location}
            </motion.h3>
            <AnimatePresence>
              {isExpanded && (
                <motion.p
                  className="text-white/50 text-xs font-mono"
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {coordinates}
                </motion.p>
              )}
            </AnimatePresence>
            {/* Animated underline */}
            <motion.div
              className="h-px"
              style={{ background: "linear-gradient(to right, rgba(255,60,60,0.7), rgba(255,60,60,0.3), transparent)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: isHovered || isExpanded ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium tracking-wide whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.05, 1],
          color: ["#ff3333", "#ff6666", "#ff3333"],
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          color: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
          filter: "drop-shadow(0 0 8px rgba(255,60,60,0.6))",
        }}
      >
        {isExpanded ? "Clickea para ir a la ubicación" : "Click para expandir"}
      </motion.p>
    </motion.div>
  );
}
