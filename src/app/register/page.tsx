// src/components/Register/Register.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  registerSchemaType,
} from "../../schema/register.schema";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signupUserServer } from "../../actions/signupUserServer";

export default function Register() {
  const router = useRouter();

  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (values: registerSchemaType) => {
    try {
      const data = await signupUserServer(values);
      toast.success(data.message || "Registration successful", {
        position: "top-center",
        duration: 3000,
      });
      router.push("/login");     
    } catch (err: any) {
      toast.error(err.message || "Signup failed", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return (
    <div className="mx-auto px-5 md:px-0 w-full my-12 md:w-1/2">
      <h1 className="text-3xl text-center mb-5 font-bold">Register Form</h1>
      <Form {...form}>
        <form
          className="space-y-8"
          onSubmit={form.handleSubmit(handleRegister)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-5">Register Now</Button>
        </form>
      </Form>
    </div>
  );
}
