// src/CartAction/deleteCartItem.ts
"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function DeleteCartItem(productId: string) {
  const token =
    (await cookies()).get("token")?.value ||
    (await cookies()).get("next-auth.session-token")?.value;

  if (!token) throw new Error("No token found. Please login.");

  const { data } = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers: { token },
    }
  );

  return data;
}
