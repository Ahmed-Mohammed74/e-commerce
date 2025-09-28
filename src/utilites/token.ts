"use server";
import { cookies } from "next/headers";

export async function getMyToken() {
  const token = (await cookies()).get("token")?.value;
  if (!token) throw new Error("No token found, please login first.");
  return token;
}
