// src/actions/getUserCartAction.ts
"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function getUserCartAction() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Login first");
  }

  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: { token },
      }
    );
    return data.data; // حسب شكل الـ API
  } catch (err: any) {
    console.error("Cart API error:", err.response?.data || err.message);
    throw new Error(err.response?.data?.message || "Failed to fetch cart");
  }
}
