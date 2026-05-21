'use client';

import { motion } from 'framer-motion';
import { Plus, Eye } from 'lucide-react';
import { useCart, Product } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-tech-deep/30 rounded-[2rem] border border-white/5 overflow-hidden hover:border-tech-accent/30 transition-all duration-700"
    >
      {/* Category Badge */}
      <div className="absolute top-5 left-5 z-10">
        <span className="px-4 py-1.5 rounded-xl bg-tech-dark/90 backdrop-blur-xl border border-white/5 text-[9px] font-extrabold uppercase tracking-[0.2em] text-tech-accent">
          {product.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white/[0.02]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-tech-dark/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-5">
          <Link
            href={`/store/${product.id}`}
            className="w-14 h-14 rounded-2xl bg-white text-tech-dark flex items-center justify-center hover:bg-tech-accent transition-all duration-300"
          >
            <Eye size={22} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-14 h-14 rounded-2xl bg-tech-accent text-tech-dark flex items-center justify-center hover:brightness-110 active:scale-95 transition-all duration-300"
          >
            <Plus size={22} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold tracking-tight line-clamp-1 group-hover:text-tech-accent transition-colors">
            {product.name}
          </h3>
          <span className="text-xl font-bold text-white tracking-tighter">${product.price}</span>
        </div>
        <p className="text-gray-500 text-sm font-medium leading-relaxed line-clamp-2 mb-8">
          Advanced technology designed for the next generation of innovators.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full py-4 rounded-2xl border border-white/5 text-gray-400 group-hover:border-tech-accent group-hover:bg-tech-accent group-hover:text-tech-dark font-extrabold text-[10px] uppercase tracking-[0.3em] transition-all duration-500"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
