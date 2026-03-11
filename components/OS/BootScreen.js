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
    '[SYSTEM] Initializing TechVerge Core...',
    '[KERNEL] Loading neural modules...',
    '[NET] Establishing secure uplink...',
    '[DATA] Syncing infrastructure nodes...',
    '[UI] Mounting Interface...',
    '[READY] System Online.',
  ];

  useEffect(() => {
    let isMounted = true;

    const bootSequence = async () => {
      // Stage 0: Logo rotation (faster)
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (!isMounted) return;
      setBootStage(1);

      // Stage 1: Boot logs with progress
      for (let i = 0; i < bootLogs.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        if (!isMounted) return;
        const progressValue = ((i + 1) / bootLogs.length) * 100;
        setProgress(progressValue);
      }

      // Stage 2: Fade to desktop
      await new Promise(resolve => setTimeout(resolve, 400));
      if (!isMounted) return;
      setBootStage(2);
      
      // Complete boot
      await new Promise(resolve => setTimeout(resolve, 500));
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
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* CRT Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
          
          {/* Animated 3D Rotating Logo */}
          <motion.div
            className="relative mb-8 sm:mb-12"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ perspective: 1000 }}
          >
            <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
              <motion.div
                className="relative w-full h-full"
                animate={{
                  filter: [
                    'drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                    'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6))',
                    'drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
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
                    filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            className="text-xl sm:text-3xl font-bold font-mono text-green-500 mb-8 tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING SYSTEM...
          </motion.h2>

          {/* Boot Logs */}
          {bootStage >= 1 && (
            <motion.div
              className="w-full max-w-xl px-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-sm sm:text-base text-green-400 space-y-1 h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                {bootLogs.slice(0, Math.floor((progress / 100) * bootLogs.length) + 1).map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                   <span className="text-green-600">➜</span> {log}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-md px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-1 bg-gray-900 overflow-hidden relative">
              <motion.div
                className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between mt-2 font-mono text-xs text-green-600">
               <span>SYSTEM_Check: OK</span>
               <span>{Math.round(progress)}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;

