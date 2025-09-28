import axios from "axios";
import { Product } from "@/types/product.t";

export default async function getProducts(): Promise<Product[]> {
  const response = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/products`
  );
  return response.data.data; // ✅ المنتجات بس
}
