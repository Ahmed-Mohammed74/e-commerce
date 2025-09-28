// src/actions/loginUserServer.ts
"use server";
import axios from "axios";

export async function loginUserServer(email: string, password: string) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      { email, password }
    );
    return data;
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
}
