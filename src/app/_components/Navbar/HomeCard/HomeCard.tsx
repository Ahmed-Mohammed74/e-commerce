"use client";

import React, { useState, useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product.t";
import AddBtn from "../../AddBtn/AddBtn";
import { WishlistContext } from "@/context/WishlistContext"; // لازم تعمل context خاص بالـ wishlist

const HomeCard = ({ product }: { product: Product }) => {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(wishlistItems.some((item) => item.id === product.id));
  }, [wishlistItems, product.id]);

  const handleLike = () => {
    toggleWishlist(product);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-3">
      <div className="inner">
        <Card className="p-2 gap-2">
          <Link href={`/productDetails/${product.id}`}>
            <CardHeader className="p-0">
              <Image
                width={500}
                height={500}
                src={product.imageCover}
                alt={product.title}
              />
            </CardHeader>
            <CardContent className="p-0">
              <p className="font-bold text-green-500 mb-3">
                {product.category.name}
              </p>
              <p className="line-clamp-1">{product.title}</p>
            </CardContent>
            <CardFooter className="p-0">
              <div className="w-full flex justify-between items-center">
                <p>{product.price}EGP</p>
                <p>
                  {product.ratingsAverage}{" "}
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </p>
              </div>
            </CardFooter>
          </Link>

          <div className="flex justify-between items-center mt-2">
            <AddBtn id={product.id} />
            <button onClick={handleLike} className="text-2xl">
              {isLiked ? (
                <i className="fa-solid fa-heart text-red-500"></i>
              ) : (
                <i className="fa-regular fa-heart text-gray-400"></i>
              )}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
