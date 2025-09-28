"use client";

import React, { useContext } from "react";
import { WishlistContext } from "@/context/WishlistContext";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  if (wishlistItems.length === 0) {
    return <p className="text-center mt-10 text-xl">Your Wishlist is Empty</p>;
  }

  return (
    <div className="container mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {wishlistItems.map((item) => (
        <div key={item.id} className="border p-3 rounded">
          <Link href={`/productDetails/${item.id}`}>
            <Image
              src={item.imageCover}
              width={300}
              height={300}
              alt={item.title}
            />
            <p className="font-bold mt-2">{item.title}</p>
            <p>{item.price} EGP</p>
          </Link>
          <Button
            onClick={() => removeFromWishlist(item.id)}
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default WishlistPage;
