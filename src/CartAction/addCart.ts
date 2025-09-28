"use server";
import axios from "axios";
import { cookies } from "next/headers";

export async function addCartAction(productId: string) {
  const token = (await cookies()).get("token")?.value;
  if (!token) throw new Error("Login first");
  if (!productId) throw new Error("No product id provided");

  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId },
      { headers: { token } }
    );
    return data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Failed to add to cart");
  }
}
