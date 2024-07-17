'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (code: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  const removeFromCart = (code: number) => {
    const updatedCart = cart.filter((item) => item.code !== code);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
