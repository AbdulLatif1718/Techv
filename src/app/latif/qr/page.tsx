'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import QrPresenter from '@/components/QrPresenter';

export default function LatifQrPage() {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(window.location.origin + '/latif');
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 relative overflow-hidden bg-tech-deep flex flex-col items-center justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-tech-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 flex flex-col items-center">
        {/* Back Link */}
        <Link 
          href="/latif"
          className="self-start flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 hover:bg-white/10 transition-all text-xs font-bold text-gray-300 mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to Card</span>
        </Link>

        {/* Brand Banner */}
        <div className="text-center mb-8">
          <span className="text-tech-accent font-bold tracking-[0.3em] uppercase text-[9px] mb-2 block">
            Digital Access Pass
          </span>
          <h1 className="text-3xl font-extrabold font-space text-white leading-tight">
            Scan to Connect
          </h1>
          <p className="text-gray-400 text-xs mt-2 max-w-xs mx-auto">
            Point your smartphone camera at this QR code to view the digital contact card of TechVerge CEO.
          </p>
        </div>

        {/* QR Code Presenter */}
        {shareUrl ? (
          <QrPresenter value={shareUrl} size={300} />
        ) : (
          <div className="w-[300px] h-[300px] bg-white/5 rounded-[32px] animate-pulse flex items-center justify-center text-gray-500 border border-white/10">
            Generating QR Code...
          </div>
        )}

        {/* Metadata & Actions */}
        <div className="mt-8 text-center space-y-4">
          <p className="font-space text-lg font-bold text-white">
            Abdul Latif Sulley
          </p>
          <p className="text-tech-accent font-semibold text-xs tracking-wider uppercase -mt-2">
            Co-founder & CEO, TechVerge Africa
          </p>

          <div className="pt-4 flex flex-col items-center gap-3">
            <Link 
              href="/latif" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <span>{shareUrl || 'techverge.africa/latif'}</span>
              <ExternalLink size={12} />
            </Link>

            <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-bold bg-white/[0.01] border border-white/5 px-3 py-1 rounded-full">
              <ShieldCheck size={12} className="text-tech-accent" />
              <span>Verified TechVerge Africa Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
