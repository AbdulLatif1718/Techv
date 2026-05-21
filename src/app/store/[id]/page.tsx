'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Shield, Cpu, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

// Dummy data (in a real app, this would be fetched)
const products = [
  {
    id: '1',
    name: 'VergeBot V1 Explorer',
    price: 299,
    category: 'Robotics',
    description: 'The VergeBot V1 is a versatile robotics platform designed for autonomous exploration. Featuring integrated GPU support for edge AI, 1080p stereo vision, and a robust suspension system for varied terrain.',
    specs: ['Jetson Orin Nano Support', 'Stereo Depth Cameras', '6h Battery Life', 'ROS2 Compatible'],
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=800&auto=format&fit=crop'
  },
  // Add more if needed, but for now we fallback
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first for demo

  return (
    <div className="min-h-screen pt-40 pb-20 bg-tech-dark">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/store" 
          className="inline-flex items-center gap-3 text-gray-500 hover:text-tech-accent transition-all group mb-16 text-xs font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Lab Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <span className="text-tech-accent font-extrabold tracking-[0.3em] text-[10px] uppercase mb-4 block">
                {product.category} / Lab Series
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tighter leading-tight">{product.name}</h1>
              <div className="text-4xl font-extrabold text-white tracking-widest">${product.price}</div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed font-medium opacity-80">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Cpu size={18} className="text-tech-accent opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{spec}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-white/5">
              <button
                onClick={() => addToCart(product)}
                className="flex-[2] py-5 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Add to Cart <ShoppingCart size={18} />
              </button>
              <button className="flex-1 py-5 rounded-2xl border border-white/5 font-extrabold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all text-gray-500">
                Datasheet
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center space-y-4">
                <Shield size={24} className="mx-auto text-gray-700" strokeWidth={1.5} />
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-600 block">2yr Warranty</span>
              </div>
              <div className="text-center space-y-4">
                <Award size={24} className="mx-auto text-gray-700" strokeWidth={1.5} />
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-600 block">Lab Certified</span>
              </div>
              <div className="text-center space-y-4">
                <Cpu size={24} className="mx-auto text-gray-700" strokeWidth={1.5} />
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-600 block">Open Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
