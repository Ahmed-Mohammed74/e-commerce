export default async function getAllCategories() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories",
    { cache: "no-store" } // منع الكاش
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const res = await response.json();
  console.log("API response:", res); // Debug
  return res.data; // هنا بيرجع array of categories
}
