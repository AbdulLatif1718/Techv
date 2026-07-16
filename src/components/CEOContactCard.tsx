'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  UserPlus, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Globe, 
  ArrowLeft,
  Briefcase,
  MapPin
} from 'lucide-react';
import Image from 'next/image';
import QrPresenter from './QrPresenter';

interface ActionSheetState {
  isOpen: boolean;
  type: 'phone' | 'email' | null;
}

export default function CEOContactCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedText, setCopiedText] = useState<'phone' | 'email' | null>(null);
  const [actionSheet, setActionSheet] = useState<ActionSheetState>({ isOpen: false, type: null });
  const [shareUrl, setShareUrl] = useState('');

  // Dynamically set share URL on mount
  useEffect(() => {
    setShareUrl(window.location.origin + '/latif');
  }, []);

  const phoneValue = '+233591507448';
  const emailValue = 'asulley@techverge.africa';
  const nameValue = 'Abdul Latif Sulley';
  const titleValue = 'Co-founder & CEO';
  const companyValue = 'TechVerge Africa';

  const handleCopy = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => {
        setCopiedText(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSaveContact = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${nameValue}`,
      `N:Sulley;Abdul Latif;;;`,
      `ORG:${companyValue}`,
      `TITLE:${titleValue}`,
      `TEL;TYPE=CELL,VOICE;VALUE=uri:tel:${phoneValue}`,
      `EMAIL;TYPE=PREF,INTERNET:${emailValue}`,
      `URL:https://techverge.africa`,
      `ADR;TYPE=WORK,PREF:;;;Kumasi;;;Ghana`,
      `X-SOCIALPROFILE;TYPE=whatsapp:https://wa.me/233591507448`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Abdul_Latif_Sulley.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openActionSheet = (type: 'phone' | 'email') => {
    setActionSheet({ isOpen: true, type });
  };

  const closeActionSheet = () => {
    setActionSheet({ isOpen: false, type: null });
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 w-full">
      {/* 3D Flip Card Container */}
      <div 
        className="w-full max-w-[430px] h-[720px] relative select-none"
        style={{ perspective: '2000px' }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* FRONT SIDE (Contact Details) */}
          <div 
            className="absolute inset-0 w-full h-full glass-dark rounded-[40px] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-56 h-56 rounded-full bg-tech-accent/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-56 h-56 rounded-full bg-tech-glow/10 blur-3xl pointer-events-none"></div>

            {/* Logo and Flip action */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2.5">
                <Image 
                  src="/images/logo.png" 
                  alt="TechVerge Logo" 
                  width={34} 
                  height={34} 
                  className="rounded-lg object-contain"
                />
                <span className="font-space font-extrabold text-sm tracking-widest text-white/90">
                  TECHVERGE
                </span>
              </div>
              <button 
                onClick={() => setIsFlipped(true)}
                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-tech-accent hover:text-tech-dark transition-all duration-300 group"
                aria-label="Show QR Code"
              >
                <Share2 size={18} className="group-hover:rotate-12 transition-transform text-white group-hover:text-tech-dark" />
              </button>
            </div>

            {/* Main Info */}
            <div className="flex flex-col items-center text-center mt-4 z-10">
              {/* Profile Image with neon border glow */}
              <div className="relative w-40 h-40 rounded-full p-[3px] bg-gradient-to-r from-tech-accent via-tech-glow to-tech-accent shadow-[0_0_30px_rgba(20,184,198,0.3)] group hover:shadow-[0_0_40px_rgba(20,184,198,0.5)] transition-shadow duration-500 mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-accent to-tech-glow animate-pulse-slow -z-10 blur-sm opacity-50"></div>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-tech-dark relative">
                  <Image 
                    src="/images/latif.jpg" 
                    alt="Abdul Latif Sulley" 
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Name and Title */}
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2 font-space text-glow">
                {nameValue}
              </h2>
              <div className="flex items-center gap-2 text-tech-accent font-semibold text-xs tracking-wider uppercase bg-tech-accent/10 px-3.5 py-1.5 rounded-full border border-tech-accent/20">
                <Briefcase size={12} />
                <span>{titleValue}</span>
              </div>
              <p className="text-gray-500 font-bold text-xs tracking-[0.2em] uppercase mt-3">
                {companyValue}
              </p>
            </div>

            {/* Interactive Details List */}
            <div className="space-y-3.5 my-4 z-10 w-full">
              {/* Phone item */}
              <div 
                onClick={() => openActionSheet('phone')}
                className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 rounded-2xl p-4 cursor-pointer transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-tech-accent group-hover:bg-tech-accent/10 transition-colors">
                  <Phone size={18} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Phone Number</p>
                  <p className="text-sm font-medium text-white/90 font-mono mt-0.5">+233 59 150 7448</p>
                </div>
                <div className="text-gray-600 group-hover:text-tech-accent transition-colors">
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Email item */}
              <div 
                onClick={() => openActionSheet('email')}
                className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 rounded-2xl p-4 cursor-pointer transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-tech-accent group-hover:bg-tech-accent/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email Address</p>
                  <p className="text-sm font-medium text-white/90 font-mono mt-0.5">asulley@techverge.africa</p>
                </div>
                <div className="text-gray-600 group-hover:text-tech-accent transition-colors">
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-sm font-medium text-white/90 mt-0.5">Kumasi, Ghana</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="grid grid-cols-4 gap-3 z-10 mt-2">
              {/* Phone Button */}
              <button 
                onClick={() => openActionSheet('phone')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl glass hover:bg-white/10 border border-white/10 active:scale-95 transition-all group"
              >
                <Phone size={20} className="text-tech-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[9px] text-gray-400 font-bold tracking-wider mt-2">Phone</span>
              </button>

              {/* Email Button */}
              <button 
                onClick={() => openActionSheet('email')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl glass hover:bg-white/10 border border-white/10 active:scale-95 transition-all group"
              >
                <Mail size={20} className="text-tech-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[9px] text-gray-400 font-bold tracking-wider mt-2">Email</span>
              </button>

              {/* WhatsApp Button */}
              <a 
                href={`https://wa.me/233591507448`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl glass hover:bg-white/10 border border-white/10 active:scale-95 transition-all group"
              >
                <MessageSquare size={20} className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[9px] text-gray-400 font-bold tracking-wider mt-2">WhatsApp</span>
              </a>

              {/* Save VCF */}
              <button 
                onClick={handleSaveContact}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-tech-accent text-tech-dark hover:bg-white border border-tech-accent/20 active:scale-95 transition-all group font-bold"
              >
                <UserPlus size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[9px] text-tech-dark/80 font-bold tracking-wider mt-2">Save</span>
              </button>
            </div>

            {/* Custom Bottom Action Sheet */}
            <AnimatePresence>
              {actionSheet.isOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeActionSheet}
                    className="absolute inset-0 bg-tech-deep/75 backdrop-blur-sm rounded-[40px] z-20"
                  />
                  {/* Sheet */}
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="absolute bottom-0 left-0 right-0 glass-dark border-t border-white/10 rounded-t-[32px] p-6 z-30 flex flex-col gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-2"></div>
                    
                    <h3 className="font-space text-lg font-bold text-center text-white">
                      {actionSheet.type === 'phone' ? 'Phone Contact' : 'Email Address'}
                    </h3>
                    
                    <p className="text-gray-400 text-sm text-center font-medium font-mono select-all">
                      {actionSheet.type === 'phone' ? phoneValue : emailValue}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {/* Secondary: Copy */}
                      <button
                        onClick={() => {
                          const value = actionSheet.type === 'phone' ? phoneValue : emailValue;
                          handleCopy(value, actionSheet.type!);
                        }}
                        className="flex items-center justify-center gap-2 py-4 rounded-xl border border-white/10 glass hover:bg-white/5 active:scale-[0.98] transition-all font-bold text-sm text-white"
                      >
                        {copiedText === actionSheet.type ? (
                          <>
                            <Check size={16} className="text-green-400" />
                            <span className="text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      {/* Primary: Action */}
                      {actionSheet.type === 'phone' ? (
                        <a
                          href={`tel:${phoneValue}`}
                          className="flex items-center justify-center gap-2 py-4 rounded-xl bg-tech-accent text-tech-dark hover:bg-white active:scale-[0.98] transition-all font-bold text-sm text-center"
                        >
                          <Phone size={16} />
                          <span>Call CEO</span>
                        </a>
                      ) : (
                        <a
                          href={`mailto:${emailValue}`}
                          className="flex items-center justify-center gap-2 py-4 rounded-xl bg-tech-accent text-tech-dark hover:bg-white active:scale-[0.98] transition-all font-bold text-sm text-center"
                        >
                          <Mail size={16} />
                          <span>Send Email</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={closeActionSheet}
                      className="py-3 rounded-xl border border-white/5 text-gray-500 font-bold hover:text-white transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* BACK SIDE (QR Code) */}
          <div 
            className="absolute inset-0 w-full h-full glass-dark rounded-[40px] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ 
              backfaceVisibility: 'hidden', 
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-tech-accent/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-tech-glow/10 blur-3xl pointer-events-none"></div>

            {/* Back Header */}
            <div className="flex justify-between items-center z-10">
              <button 
                onClick={() => setIsFlipped(false)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 hover:bg-white/10 active:scale-95 transition-all text-xs font-bold text-gray-300"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
              <span className="font-space font-extrabold text-sm tracking-widest text-white/90">
                SHARE CARD
              </span>
            </div>

            {/* QR Presenter */}
            <div className="flex flex-col items-center justify-center my-auto z-10">
              {shareUrl ? (
                <QrPresenter value={shareUrl} size={270} />
              ) : (
                <div className="w-[270px] h-[270px] bg-white/5 rounded-3xl animate-pulse flex items-center justify-center text-gray-500 border border-white/10">
                  Generating QR...
                </div>
              )}
              
              <h3 className="font-space text-lg font-bold text-white mt-6 text-glow">
                Scan to Save Contact
              </h3>
              <p className="text-gray-400 text-xs text-center px-4 mt-2 leading-relaxed font-medium">
                Hold your camera over the QR code to open the CEO&apos;s digital contact card.
              </p>
            </div>

            {/* Back Footer */}
            <div className="text-center z-10">
              <a 
                href={shareUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-tech-accent hover:text-white transition-colors"
              >
                <span>techverge.africa/latif</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Direct WhatsApp Callout Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 w-full max-w-[430px]"
      >
        <a 
          href={`https://wa.me/233591507448`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-extrabold text-lg shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageSquare size={22} className="animate-pulse" />
          <span>Chat on WhatsApp</span>
        </a>
      </motion.div>

      {/* Website Link */}
      <div className="mt-4 flex items-center gap-4 text-xs font-bold text-gray-500">
        <a href="https://techverge.africa" className="hover:text-tech-accent transition-colors flex items-center gap-1.5">
          <Globe size={14} />
          <span>techverge.africa</span>
        </a>
      </div>
    </div>
  );
}
