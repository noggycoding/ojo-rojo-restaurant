"use client";

import { motion } from "framer-motion";

interface KumikoPatternProps {
  position?: "corner-tl" | "corner-tr" | "corner-bl" | "corner-br" | "full" | "frame";
  opacity?: number;
  size?: number;
  className?: string;
}

export function KumikoPattern({
  position = "corner-tl",
  opacity = 0.15,
  size = 200,
  className = "",
}: KumikoPatternProps) {
  const positionClasses = {
    "corner-tl": "top-0 left-0",
    "corner-tr": "top-0 right-0 scale-x-[-1]",
    "corner-bl": "bottom-0 left-0 scale-y-[-1]",
    "corner-br": "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
    full: "inset-0",
    frame: "inset-0",
  };

  if (position === "full") {
    return (
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          backgroundImage: "url(/diseño.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
          mixBlendMode: "multiply",
        }}
      />
    );
  }

  if (position === "frame") {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "60px",
            backgroundImage: "url(/diseño.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "60px",
            backgroundImage: "url(/diseño.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />
        {/* Left border */}
        <div
          className="absolute top-0 bottom-0 left-0"
          style={{
            width: "60px",
            backgroundImage: "url(/diseño.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
            maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          }}
        />
        {/* Right border */}
        <div
          className="absolute top-0 bottom-0 right-0"
          style={{
            width: "60px",
            backgroundImage: "url(/diseño.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
            maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`absolute ${positionClasses[position]} pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: "url(/diseño.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity,
        mixBlendMode: "multiply",
      }}
    />
  );
}
