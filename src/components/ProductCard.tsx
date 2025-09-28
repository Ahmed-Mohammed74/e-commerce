"use client";
import React, { useTransition } from "react";
import { toast } from "sonner";
import { AddCart } from "../CartAction/addCart";

interface ProductCardProps {
  product: {
    _id: string;
    title: string;
    imageCover: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    if (!product._id) {
      toast.error("Product ID not found!");
      return;
    }

    startTransition(async () => {
      try {
        await AddCart(product._id);
        toast.success("Product added to cart!");
      } catch (err: any) {
        toast.error(err.message || "Failed to add product.");
      }
    });
  };

  return (
    <div className="border rounded p-4 shadow flex flex-col items-center">
      <img
        src={product.imageCover}
        alt={product.title}
        className="w-32 h-32 object-cover rounded"
      />
      <h2 className="mt-2 font-semibold text-center">{product.title}</h2>
      <p className="mt-1 text-green-700 font-bold">${product.price}</p>
      <button
        onClick={handleAddToCart}
        disabled={isPending}
        className="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
