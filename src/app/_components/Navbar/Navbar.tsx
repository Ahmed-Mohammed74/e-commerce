"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useUser } from "../../../context/UserContext";
import { WishlistContext } from "@/context/WishlistContext";
import { CartContext } from "@/context/CartContext";

export default function Navbar() {
  const { token, userName, logout } = useUser();
  const { wishlistItems } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="bg-slate-100 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">FreshCart</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {token && (
            <>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/categories">Categories</Link>
              </li>
              <li>
                <Link href="/brands">Brands</Link>
              </li>

              {/* Cart */}
              <li className="relative">
                <Link href="/cart" className="flex items-center gap-1 relative">
                  <i className="fa-solid fa-cart-shopping text-xl"></i>
                  <span>Cart</span>
                  {cartItems?.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </li>

              {/* Wishlist */}
              <li className="relative">
                <Link
                  href="/wishlist"
                  className="flex items-center gap-1 relative"
                >
                  <i className="fa-regular fa-heart text-xl"></i>
                  <span>Wishlist</span>
                  {wishlistItems?.length > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
                      {wishlistItems.length}
                    </span>
                  )}
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Social Icons + Auth */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>

          {token ? (
            <>
              <span className="text-green-600 font-semibold">
                Hi, {userName}
              </span>
              <button
                onClick={logout}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-black hover:underline">
                Login
              </Link>
              <Link href="/register" className="text-black hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
