'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-tech-deep z-[70] shadow-2xl flex flex-col border-l border-white/5"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-3 tracking-tight">
                <ShoppingBag size={22} className="text-tech-accent" /> <span className="uppercase tracking-[0.2em] text-sm">Your Gear</span>
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-xl transition-all"
              >
                <X size={24} className="opacity-50 hover:opacity-100" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.02] flex items-center justify-center mb-4 border border-white/5">
                    <ShoppingBag size={40} strokeWidth={1} />
                  </div>
                  <p className="text-lg font-medium tracking-tight">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="text-tech-accent text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Start exploration
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-bold text-base mb-1 line-clamp-1 tracking-tight">{item.name}</h3>
                        <p className="text-tech-accent text-sm font-bold tracking-widest">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-white/5 rounded-xl overflow-hidden bg-white/[0.02]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 px-3 hover:bg-white/5 transition-colors"
                          >
                            <Minus size={12} strokeWidth={3} />
                          </button>
                          <span className="px-1 text-xs font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 px-3 hover:bg-white/5 transition-colors"
                          >
                            <Plus size={12} strokeWidth={3} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-500 hover:text-white transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-black/20 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="font-bold text-xl text-white tracking-widest">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <button className="w-full py-4 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-sm uppercase tracking-[0.3em] hover:brightness-110 transition-all">
                    Checkout Now
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full py-3 rounded-2xl border border-white/5 text-gray-500 font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 hover:text-gray-300 transition-all"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
