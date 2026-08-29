'use client';

import { useState, useCallback } from 'react';
import AnnouncementBanner from './AnnouncementBanner';

/**
 * Client wrapper that owns banner height state and passes it down
 * to the Navbar via a CSS custom property so the fixed nav
 * offsets itself correctly when the banner is visible.
 */
export default function BannerAwareLayout({ children }: { children: React.ReactNode }) {
  const [bannerH, setBannerH] = useState(44); // Start at 44 to avoid layout shift

  const handleHeightChange = useCallback((h: number) => {
    setBannerH(h);
    document.documentElement.style.setProperty('--banner-height', `${h}px`);
  }, []);

  return (
    <>
      <AnnouncementBanner onHeightChange={handleHeightChange} />
      {children}
    </>
  );
}
