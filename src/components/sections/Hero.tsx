"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  // Tipamos explícitamente como 'Variants' para que TypeScript valide correctamente
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Ahora TS sabe que es el tipo spring literal
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut", // Ahora TS sabe que es una curva válida
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-black overflow-hidden">
      {/* HAZ DE LUZ DE FONDO (Efecto Glow Premium Optimizado) */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-dev-blue/15 blur-[80px] md:blur-[140px] pointer-events-none"
        animate={{
          scale: 1.2,
          opacity: 0.4,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse", // Hace que el efecto vaya y regrese fluidamente
          ease: "easeInOut",
        }}
      />

      {/* CONTENEDOR PRINCIPAL ANIMADO */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 select-none"
      >
        {/* Tu logo Dev.Sack */}
        <motion.h1
          variants={logoVariants}
          className="font-primary font-black text-6xl tracking-tighter sm:text-8xl md:text-9xl block"
        >
          <span className="text-dev-blue">Dev</span>
          <span className="text-dev-green">.</span>
          <span className="text-white">Sack</span>
        </motion.h1>

        {/* Subtítulo en cascada */}
        <motion.p
          variants={itemVariants}
          className="mt-6 font-secondary text-xs sm:text-sm md:text-base tracking-[0.2em] text-neutral-400 uppercase"
        >
          Ecosistema de Desarrollo Premium
        </motion.p>

        {/* Indicador de Scroll interactivo */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-2 bg-dev-green rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
