"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUser } from "../../context/UserContext";

interface LoginForm {
  email: string;
  password: string;
}

async function loginUserServer(email: string, password: string) {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
}

export default function Login() {
  const router = useRouter();
  const { setUser } = useUser();
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = async (values: LoginForm) => {
    try {
      const data = await loginUserServer(values.email, values.password);
      setUser(data.token, data.user.name);
      toast.success("Logged in successfully");
      router.push("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mx-auto px-5 md:px-0 w-full my-12 md:w-1/2">
      <h1 className="text-3xl text-center mb-5 font-bold">Login Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-6 rounded shadow"
      >
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-5 bg-black hover:bg-gray-800 text-white py-2 rounded"
        >
          Login Now
        </button>
        <div className="text-right mt-2">
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-green-600 hover:underline font-medium"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
}
