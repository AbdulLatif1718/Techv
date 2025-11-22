import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { setBootComplete } from '../../features/windows/windowSlice';

const BootScreen = () => {
  const [bootStage, setBootStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const bootLogs = [
    '[OK] Initializing TechVerge Africa OS...',
    '[OK] Loading kernel modules...',
    '[OK] Mounting filesystems...',
    '[OK] Starting network services...',
    '[OK] Loading desktop environment...',
    '[OK] Initializing window manager...',
    '[OK] System ready.',
  ];

  useEffect(() => {
    let isMounted = true;

    const bootSequence = async () => {
      // Stage 0: Logo rotation (2-3 seconds)
      await new Promise(resolve => setTimeout(resolve, 2500));
      if (!isMounted) return;
      setBootStage(1);

      // Stage 1: Boot logs with progress
      for (let i = 0; i < bootLogs.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!isMounted) return;
        const progressValue = ((i + 1) / bootLogs.length) * 100;
        setProgress(progressValue);
      }

      // Stage 2: Fade to desktop
      await new Promise(resolve => setTimeout(resolve, 500));
      if (!isMounted) return;
      setBootStage(2);
      
      // Complete boot
      await new Promise(resolve => setTimeout(resolve, 800));
      if (!isMounted) return;
      dispatch(setBootComplete(true));
    };

    bootSequence();

    return () => {
      isMounted = false;
    };
  }, [dispatch, bootLogs.length]);

  return (
    <AnimatePresence>
      {bootStage < 2 && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-green-950 to-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated 3D Rotating Logo */}
          <motion.div
            className="relative mb-6 sm:mb-8 md:mb-12"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ perspective: 1000 }}
          >
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
              <motion.div
                className="relative w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
                    'drop-shadow(0 0 40px rgba(34, 197, 94, 0.8))',
                    'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Image
                  src="/images/logotva.svg"
                  alt="TechVerge Africa Logo"
                  fill
                  className="object-contain"
                  priority
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6))',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 mb-4 sm:mb-6 md:mb-8 px-4 text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Innovation OS...
          </motion.h2>

          {/* Boot Logs */}
          {bootStage >= 1 && (
            <motion.div
              className="w-full max-w-2xl px-4 xs:px-6 sm:px-8 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 xs:p-4 sm:p-6 font-mono text-xs xs:text-sm sm:text-sm md:text-base text-green-400 space-y-1 sm:space-y-2 max-h-32 xs:max-h-40 sm:max-h-48 overflow-y-auto">
                {bootLogs.slice(0, Math.floor((progress / 100) * bootLogs.length) + 1).map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="break-words"
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-md px-4 xs:px-6 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-1.5 xs:h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500"
                style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="text-center text-green-400 mt-2 font-mono text-xs xs:text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.p>
          </motion.div>

          {/* Hologram Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;

