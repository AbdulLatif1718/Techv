'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

export default function StorePage() {
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
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-tech-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Lab Inventory
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-bold tracking-tighter"
            >
              The <span className="text-tech-accent underline decoration-white/10 underline-offset-8">Verge</span> Store
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-sm mb-2"
            >
              Equip yourself with the infrastructure and gear driving the African technological evolution.
            </motion.p>
          </div>
        </div>

        {/* Filter & Search Bar */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-bold mb-2">No gear found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Lab Disclaimer */}
        <div className="mt-32 p-12 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-3xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Bulk Lab Orders</h2>
            <p className="text-gray-400">
              Are you an educational institution or a research laboratory? We offer volume discounts and custom hardware configurations for scale deployment.
            </p>
          </div>
          <button className="px-8 py-4 rounded-xl bg-white text-tech-dark font-bold hover:bg-tech-accent transition-all duration-300">
            Contact Lab Logistics
          </button>
        </div>
      </div>
    </div>
  );
}
