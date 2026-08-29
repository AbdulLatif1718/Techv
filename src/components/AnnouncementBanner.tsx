"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, FlaskConical, ArrowRight } from "lucide-react";

const BANNER_KEY = "tva_research_banner_dismissed_v1";

export default function AnnouncementBanner({
  onHeightChange,
}: {
  onHeightChange?: (h: number) => void;
}) {
  const [visible, setVisible] = useState(false);

  // Hydrate from localStorage after mount (avoid SSR mismatch)
  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  // Notify parent of height so the navbar can offset correctly
  useEffect(() => {
    onHeightChange?.(visible ? 44 : 0);
  }, [visible, onHeightChange]);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 44, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[200] overflow-hidden"
        >
          {/* Background — subtle animated gradient */}
          <div
            className="absolute inset-0 animate-gradient-x"
            style={{
              background:
                "linear-gradient(120deg, #1D64EC, #1a52c2, #1D64EC, #2563eb)",
              backgroundSize: "300% 300%",
            }}
          />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

          <div className="relative flex items-center justify-center h-11 px-10 gap-3">
            {/* Icon */}
            <FlaskConical size={14} className="text-white/80 shrink-0" />

            {/* Message */}
            <p className="text-white text-xs font-bold tracking-wide text-center leading-none">
              <span className="hidden sm:inline text-white/70 mr-2 uppercase tracking-widest text-[10px]">
                New ·
              </span>
              TVA Open Research Initiative is live — help us make intelligence
              cheap.
            </p>

            {/* CTA */}
            <Link
              href="/research"
              className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[10px] font-extrabold tracking-widest uppercase transition-all duration-200 shrink-0"
            >
              Contribute <ArrowRight size={10} />
            </Link>

            {/* Dismiss */}
            <button
              aria-label="Dismiss announcement"
              onClick={dismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/15 text-white/70 hover:text-white transition-all duration-200"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
