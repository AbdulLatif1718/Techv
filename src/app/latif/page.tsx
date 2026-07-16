import React from 'react';
import type { Metadata } from 'next';
import CEOProfileView from '@/components/CEOProfileView';

export const metadata: Metadata = {
  title: 'Abdul Latif Sulley | Co-founder & CEO, TechVerge Africa',
  description: 'Connect with Abdul Latif Sulley, the Co-founder and CEO of TechVerge Africa. View contact details, save vCard, chat on WhatsApp, or send an email.',
  openGraph: {
    title: 'Abdul Latif Sulley | Co-founder & CEO, TechVerge Africa',
    description: 'Digital Business Card for Abdul Latif Sulley. Get in touch directly.',
    images: [
      {
        url: '/images/latif.jpg',
        width: 600,
        height: 600,
        alt: 'Abdul Latif Sulley',
      },
    ],
  },
};

export default function LatifContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-tech-deep flex flex-col items-center justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      {/* Radial light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-tech-accent/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-tech-glow/5 blur-[120px] pointer-events-none"></div>

      <CEOProfileView />
    </div>
  );
}
