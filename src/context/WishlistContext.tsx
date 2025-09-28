"use client";

import React, { createContext, useState, ReactNode } from "react";
import { Product } from "@/types/product.t";

interface WishlistContextType {
  wishlistItems: Product[];
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
}

export const WishlistContext = createContext<WishlistContextType>({
  wishlistItems: [],
  toggleWishlist: () => {},
  removeFromWishlist: () => {},
});

interface Props {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: Props) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const toggleWishlist = (product: Product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);
    if (exists) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
