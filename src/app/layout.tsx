import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'TechVerge Africa | Building AI & Digital Infrastructure',
  description: 'TechVerge Africa is a world-class technology company building digital infrastructure, AI systems, and intelligent platforms that empower the future of Africa.',
  keywords: ['TechVerge Africa', 'AI', 'Robotics', 'Digital Infrastructure', 'Africa Tech', 'Innovation', 'Intelligent Systems'],
  authors: [{ name: 'TechVerge Africa' }],
  openGraph: {
    title: 'TechVerge Africa | Building AI & Digital Infrastructure',
    description: 'Empowering Africa and the world through AI, Digital Infrastructure, and Intelligent Systems.',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased bg-tech-dark text-white`}>
        <CartProvider>
          <div className="relative min-h-screen overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
