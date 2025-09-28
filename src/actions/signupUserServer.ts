// src/actions/signupUserServer.ts
"use server";
import axios from "axios";

export async function signupUserServer(values: {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );
    return data;
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Signup failed");
  }
}
