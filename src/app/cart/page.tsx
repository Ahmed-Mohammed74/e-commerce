"use client";
import React, { useState, useEffect } from "react";
import { getUserCartAction } from "../../CartAction/getUserCart";
import { DeleteCartItem } from "../../CartAction/DeleteCartItem";
import { toast } from "sonner";

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);   
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getUserCartAction();
        setCart(data?.products || []); 
        setTotalPrice(data?.totalCartPrice || 0);
      } catch (err: any) {
        toast.error(err.message || "Failed to load cart");
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleDelete = async (productId: string) => {
    const product = cart.find((item) => item.product?._id === productId);
    if (!product) return;

    setCart((prev) => prev.filter((item) => item.product?._id !== productId));
    setTotalPrice((prev) => prev - (product.price || 0));

    try {
      await DeleteCartItem(productId);
      toast.success("Product removed from cart");
    } catch (err: any) {
      toast.error(err.message || "Failed to delete");
      setCart((prev) => [...prev, product]);
      setTotalPrice((prev) => prev + (product.price || 0));
    }
  };

  if (loading) return <p className="text-center mt-10">Loading cart...</p>;

  return (
    <div className="max-w-5xl mx-auto my-10 p-5 bg-slate-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p className="text-green-700 font-semibold mb-4">
        Total Price: ${totalPrice}
      </p>

      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-row items-center p-3 bg-white rounded shadow my-2"
          >
            <img
              src={item.product?.imageCover || "/placeholder.png"}
              alt={item.product?.title || "Product"}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex flex-col ml-4">
              <h2 className="font-semibold">
                {item.product?.title || "No title"}
              </h2>
              <p className="mt-1">Quantity: {item.count || 0}</p>
              <p className="mt-1 font-bold">${item.price || 0}</p>
            </div>
            <button
              onClick={() => handleDelete(item.product._id)}
              className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="mt-4 font-semibold text-center">Your cart is empty</p>
      )}
    </div>
  );
}
