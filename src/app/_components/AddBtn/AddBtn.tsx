"use client";
import React from "react";
import { Button } from "../../../components/ui/button";
import { addCartAction } from "../../../CartAction/addCart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "../../../context/UserContext";

const AddBtn = ({ id }: { id: string }) => {
  const router = useRouter();
  const { token } = useUser();

  async function handelAddCart() {
    if (!token) {
      toast.error("You must login first!", {
        duration: 1500,
        position: "top-center",
      });
      router.push("/login");
      return;
    }

    const data = await addCartAction(id);

    if (data.status === "success") {
      toast.success(data.message, {
        duration: 1000,
        position: "top-center",
      });
      router.refresh();
    } else if (data.message === "Please login first") {
      toast.error("You must login first!", {
        duration: 1500,
        position: "top-center",
      });
      router.push("/login");
    } else {
      toast.error("Failed to add this product", {
        duration: 1000,
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <Button onClick={handelAddCart} className="w-full" variant="default">
        Add to Cart
      </Button>
    </div>
  );
};

export default AddBtn;
