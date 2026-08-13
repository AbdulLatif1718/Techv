'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

/*
====================================================================
ORIGINAL STORE IMPLEMENTATION (COMMENTED OUT FOR NOW)
====================================================================

import { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/context/CartContext';

const products: Product[] = [
  {
    id: '1',
    name: 'VergeBot V1 Explorer',
    price: 299,
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'NeuroLink Sensor Kit',
    price: 149,
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'TechVerger Alpha Hoodie',
    price: 85,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Vision Models Pro',
    price: 499,
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'OmniWheel Set (4x)',
    price: 120,
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'The "Lab" Capsule Cap',
    price: 35,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop'
  }
];

const categories = ['All', 'Robotics', 'Hardware', 'Apparel', 'Digital'];

function OriginalStorePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-tech-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Lab Inventory
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter">
              The <span className="text-tech-accent underline decoration-white/10 underline-offset-8">Verge</span> Store
            </h1>
            <p className="text-gray-500 max-w-sm mb-2">
              Equip yourself with the infrastructure and gear driving the African technological evolution.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-[10px] uppercase tracking-widest font-extrabold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-tech-accent text-tech-dark'
                    : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-tech-accent transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search lab equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-tech-accent/50 transition-all text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
====================================================================
*/

export default function StorePage() {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center relative overflow-hidden bg-tech-dark">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-dark border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-accent/10 border border-tech-accent/20 text-tech-accent text-xs font-bold tracking-[0.25em] uppercase mb-8">
            <Clock size={14} className="animate-spin-slow" />
            <span>Store Launching Soon</span>
          </div>

          <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-tech-accent shadow-inner">
            <ShoppingBag size={36} strokeWidth={1.5} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The <span className="text-tech-accent">Verge</span> Store
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We are curating state-of-the-art AI hardware, robotics developer kits, intelligent sensor arrays, and official TechVergers gear.
          </p>

          {/* Stay updated form */}
          <div className="max-w-md mx-auto mb-10">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for store launch access"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-tech-accent/50 transition-all text-white flex-1 placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Get Notified
              </button>
            </form>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-tech-accent" /> Official Hardware & Gear
            </span>
            <Link href="/" className="text-tech-accent hover:underline flex items-center gap-1 font-bold">
              <ArrowLeft size={14} /> Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
