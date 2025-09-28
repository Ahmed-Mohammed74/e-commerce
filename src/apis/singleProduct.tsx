import axios from "axios";
import { Product } from "@/types/product.t";

export default async function getSingleProduct(id: string): Promise<Product> {
  const response = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`
  );
  return response.data.data; // ✅ المنتج الواحد بس
}
