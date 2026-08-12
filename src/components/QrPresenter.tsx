'use client';

import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QrPresenterProps {
  value: string;
  size?: number;
  logoSrc?: string;
}

const QrPresenter: React.FC<QrPresenterProps> = ({ 
  value, 
  size = 260, 
  logoSrc = '/images/logo.png' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(
      canvasRef.current,
      value,
      {
        width: size,
        margin: 1,
        color: {
          dark: '#0a0a0a', 
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H', // High error correction level (30% damage recovery)
      },
      (error) => {
        if (error) {
          console.error('Error generating QR code:', error);
          return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Overlay TechVerge logo in the center
        const img = new Image();
        img.src = logoSrc;
        img.onload = () => {
          const maxLogoDim = size * 0.22; // 22% of QR code size
          const bgRadius = maxLogoDim / 2 + 6;

          ctx.save();

          // Draw white background circle for logo
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, bgRadius, 0, 2 * Math.PI);
          ctx.fill();

          // Calculate aspect ratio fit
          const imgAspect = (img.naturalWidth || 1) / (img.naturalHeight || 1);
          let drawW = maxLogoDim;
          let drawH = maxLogoDim;
          if (imgAspect > 1) {
            drawH = maxLogoDim / imgAspect;
          } else {
            drawW = maxLogoDim * imgAspect;
          }
          const x = (size - drawW) / 2;
          const y = (size - drawH) / 2;

          ctx.drawImage(img, x, y, drawW, drawH);
          ctx.restore();
        };
      }
    );
  }, [value, size, logoSrc]);

  return (
    <div className="relative p-5 bg-white rounded-[32px] flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(20,184,198,0.25)] transition-all duration-500 hover:scale-[1.03] group">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-accent to-tech-glow opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-[32px] -z-10"></div>
      <canvas ref={canvasRef} className="rounded-2xl" />
    </div>
  );
};

export default QrPresenter;
