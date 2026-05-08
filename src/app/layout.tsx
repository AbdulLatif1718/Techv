import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'TechVerge Africa | Building the Future for Everyone',
  description: 'TechVerge Africa is a bold African technology company building digital infrastructure, AI systems, robotics, and intelligent platforms that empower everyone.',
  keywords: ['TechVerge Africa', 'AI', 'Robotics', 'Digital Infrastructure', 'Africa Tech', 'Innovation'],
  authors: [{ name: 'TechVerge Africa' }],
  openGraph: {
    title: 'TechVerge Africa | Building the Future for Everyone',
    description: 'Empowering Africa and the world through AI, Robotics, and Digital Infrastructure.',
    url: 'https://techvergeafrica.com',
    siteName: 'TechVerge Africa',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-outfit antialiased bg-tech-dark text-white`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
