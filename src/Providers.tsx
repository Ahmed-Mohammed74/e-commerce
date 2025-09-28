"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import CartContextProvider from './context/CartContext';


const Providers = ({ children }: { children :React.ReactNode}) => {
  return (
    <SessionProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </SessionProvider>
  ); 
}

export default Providers

