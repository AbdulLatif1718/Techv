import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <>
      {/* Noise Texture */}
      <div className="noise-overlay" />

      {/* Animated Mesh Gradient */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-green-500/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-10 pointer-events-none" />
    </>
  );
};

export default BackgroundEffects;
